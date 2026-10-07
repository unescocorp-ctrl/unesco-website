using Microsoft.EntityFrameworkCore; using UNESCO.Web.Application.Abstractions; using UNESCO.Web.Domain.Entities;
namespace UNESCO.Web.Infrastructure.Repositories;
public sealed class ProductRepository(WebDbContext db):IProductRepository { public async Task<IReadOnlyList<Product>> GetActiveAsync(CancellationToken ct)=>await db.Products.AsNoTracking().Where(x=>x.Status=="ACTIVE").OrderBy(x=>x.DisplayOrder).ToListAsync(ct); public Task<Product?> GetByCodeAsync(string code,CancellationToken ct)=>db.Products.AsNoTracking().FirstOrDefaultAsync(x=>x.Code==code&&x.Status=="ACTIVE",ct); }
