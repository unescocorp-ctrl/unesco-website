using UNESCO.Web.Domain.Entities;
namespace UNESCO.Web.Application.Abstractions;
public interface IProductRepository { Task<IReadOnlyList<Product>> GetActiveAsync(CancellationToken ct); Task<Product?> GetByCodeAsync(string code,CancellationToken ct); }
