using UNESCO.Web.Application.Abstractions; using UNESCO.Web.Domain.Entities;
namespace UNESCO.Web.Infrastructure.Repositories;
public sealed class WebLeadRepository(WebDbContext db):IWebLeadRepository { public async Task AddAsync(WebLead lead,CancellationToken ct){db.WebLeads.Add(lead);await db.SaveChangesAsync(ct);} }
