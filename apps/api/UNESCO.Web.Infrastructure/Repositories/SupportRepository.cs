using UNESCO.Web.Application.Abstractions; using UNESCO.Web.Domain.Entities;
namespace UNESCO.Web.Infrastructure.Repositories;
public sealed class SupportRepository(WebDbContext db):ISupportRepository { public async Task AddAsync(SupportRequest request,CancellationToken ct){db.SupportRequests.Add(request);await db.SaveChangesAsync(ct);} }
