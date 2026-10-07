using UNESCO.Web.Domain.Entities;
namespace UNESCO.Web.Application.Abstractions;
public interface ISupportRepository { Task AddAsync(SupportRequest request, CancellationToken ct); }
