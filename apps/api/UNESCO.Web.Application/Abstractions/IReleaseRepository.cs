using UNESCO.Web.Domain.Entities;
namespace UNESCO.Web.Application.Abstractions;
public interface IReleaseRepository { Task<SoftwareRelease?> GetLatestPublicAsync(string productCode, CancellationToken ct); }
