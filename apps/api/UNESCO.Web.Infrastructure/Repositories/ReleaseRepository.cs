using Microsoft.EntityFrameworkCore; using UNESCO.Web.Application.Abstractions; using UNESCO.Web.Domain.Entities;
namespace UNESCO.Web.Infrastructure.Repositories;
public sealed class ReleaseRepository(WebDbContext db):IReleaseRepository { public Task<SoftwareRelease?> GetLatestPublicAsync(string code,CancellationToken ct)=>db.SoftwareReleases.AsNoTracking().Where(x=>x.ProductCode==code&&x.IsPublic).OrderByDescending(x=>x.ReleaseDate).ThenByDescending(x=>x.CreatedAt).FirstOrDefaultAsync(ct); }
