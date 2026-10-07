using System.ComponentModel.DataAnnotations;
using System.Security.Cryptography;
using System.Text;
using System.Threading.RateLimiting;
using Microsoft.EntityFrameworkCore;
using UNESCO.Web.Application.Abstractions;
using UNESCO.Web.Application.Contracts;
using UNESCO.Web.Domain.Entities;
using UNESCO.Web.Infrastructure;
using UNESCO.Web.Infrastructure.Repositories;

static Dictionary<string,string[]>? ValidateModel(object model)
{
    var results=new List<ValidationResult>();
    if(Validator.TryValidateObject(model,new ValidationContext(model),results,true)) return null;
    return results.SelectMany(r=>(r.MemberNames.Any()?r.MemberNames:new[] { "request" }).Select(m=>(Member:m,Error:r.ErrorMessage??"Invalid value.")))
        .GroupBy(x=>x.Member,StringComparer.OrdinalIgnoreCase).ToDictionary(g=>g.Key,g=>g.Select(x=>x.Error).ToArray(),StringComparer.OrdinalIgnoreCase);
}

var builder=WebApplication.CreateBuilder(args);
var cs=builder.Configuration.GetConnectionString("UNESCO_WEB") ?? throw new InvalidOperationException("ConnectionStrings:UNESCO_WEB is required.");
builder.Services.AddDbContext<WebDbContext>(o=>o.UseSqlServer(cs));
builder.Services.AddScoped<IWebLeadRepository,WebLeadRepository>(); builder.Services.AddScoped<IReleaseRepository,ReleaseRepository>(); builder.Services.AddScoped<ISupportRepository,SupportRepository>(); builder.Services.AddScoped<IProductRepository,ProductRepository>();
builder.WebHost.ConfigureKestrel(o=>o.Limits.MaxRequestBodySize=64*1024);
builder.Services.AddProblemDetails(); builder.Services.AddHealthChecks();
builder.Services.AddCors(o=>o.AddPolicy("web",p=>p.WithOrigins(builder.Configuration.GetSection("AllowedOrigins").Get<string[]>() ?? Array.Empty<string>()).AllowAnyHeader().WithMethods("GET","POST")));
builder.Services.AddRateLimiter(o=>{o.RejectionStatusCode=429;o.AddPolicy("public-write",ctx=>RateLimitPartition.GetFixedWindowLimiter(ctx.Connection.RemoteIpAddress?.ToString()??"unknown",_=>new FixedWindowRateLimiterOptions{PermitLimit=12,Window=TimeSpan.FromMinutes(1),QueueLimit=0,AutoReplenishment=true}));});

var app=builder.Build();
app.UseExceptionHandler();
app.Use(async(ctx,next)=>{ctx.Response.Headers["X-Content-Type-Options"]="nosniff";ctx.Response.Headers["Referrer-Policy"]="strict-origin-when-cross-origin";ctx.Response.Headers["X-Frame-Options"]="DENY";ctx.Response.Headers["Permissions-Policy"]="camera=(), microphone=(), geolocation=()";await next();});
app.UseHttpsRedirection(); app.UseCors("web"); app.UseRateLimiter();
app.MapHealthChecks("/health");
var api=app.MapGroup("/api/v1");
api.MapGet("/health",()=>Results.Ok(new{status="ok",utc=DateTimeOffset.UtcNow}));
api.MapPost("/leads",async(LeadRequest req,HttpContext ctx,IWebLeadRepository repo,CancellationToken ct)=>{
 var validation=ValidateModel(req); if(validation is not null) return Results.ValidationProblem(validation);
 if(!string.Equals(req.Consent,"on",StringComparison.OrdinalIgnoreCase) && !string.Equals(req.Consent,"true",StringComparison.OrdinalIgnoreCase)) return Results.ValidationProblem(new Dictionary<string,string[]>{{"consent",new[] { "Consent is required." }}});
 var code=$"LEAD-{DateTime.UtcNow:yyyyMMdd}-{RandomNumberGenerator.GetInt32(100000,999999)}";
 var ip=ctx.Connection.RemoteIpAddress?.ToString(); var ipHash=string.IsNullOrWhiteSpace(ip)?null:Convert.ToHexString(SHA256.HashData(Encoding.UTF8.GetBytes(ip)));
 var lead=new WebLead{LeadCode=code,FullName=req.FullName.Trim(),CompanyName=req.CompanyName?.Trim(),Phone=req.Phone.Trim(),Email=req.Email?.Trim(),Province=req.Province?.Trim(),InterestCode=req.InterestCode.Trim(),Message=req.Message?.Trim(),Source=req.Source??"website",LandingPage=req.LandingPage,UtmSource=req.UtmSource,UtmMedium=req.UtmMedium,UtmCampaign=req.UtmCampaign,IpHash=ipHash,UserAgent=ctx.Request.Headers.UserAgent.ToString()[..Math.Min(ctx.Request.Headers.UserAgent.ToString().Length,500)]};
 await repo.AddAsync(lead,ct); return Results.Created($"/api/v1/leads/{lead.Id}",new{lead.Id,lead.LeadCode,status=lead.Status});
}).RequireRateLimiting("public-write");

api.MapPost("/support-requests",async(SupportRequestDto req,ISupportRepository repo,CancellationToken ct)=>{
 var validation=ValidateModel(req); if(validation is not null) return Results.ValidationProblem(validation);
 var ticket=new SupportRequest{TicketCode=$"SUP-{DateTime.UtcNow:yyyyMMdd}-{RandomNumberGenerator.GetInt32(100000,999999)}",FullName=req.FullName.Trim(),CompanyName=req.CompanyName?.Trim(),Phone=req.Phone.Trim(),Email=req.Email?.Trim(),ProductCode=req.ProductCode.Trim(),Version=req.Version?.Trim(),Subject=req.Subject.Trim(),Description=req.Description.Trim()};
 await repo.AddAsync(ticket,ct); return Results.Created($"/api/v1/support-requests/{ticket.Id}",new{ticket.Id,ticket.TicketCode,status=ticket.Status});
}).RequireRateLimiting("public-write");
api.MapGet("/products",async(IProductRepository repo,CancellationToken ct)=>Results.Ok(await repo.GetActiveAsync(ct)));
api.MapGet("/products/{code}",async(string code,IProductRepository repo,CancellationToken ct)=>{var p=await repo.GetByCodeAsync(code,ct);return p is null?Results.NotFound():Results.Ok(p);});
api.MapGet("/releases/{productCode}/latest",async(string productCode,IReleaseRepository repo,CancellationToken ct)=>{var r=await repo.GetLatestPublicAsync(productCode,ct);return r is null?Results.NotFound():Results.Ok(new{product=r.ProductCode,version=r.Version,channel=r.Channel,releaseDate=r.ReleaseDate,downloadUrl=r.DownloadUrl,sha256=r.Sha256,mandatory=r.IsMandatory,releaseNotesUrl=r.ReleaseNotesUrl});});
app.Run();
public partial class Program { }
