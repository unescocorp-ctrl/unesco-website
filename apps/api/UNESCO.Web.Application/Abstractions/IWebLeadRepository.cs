using UNESCO.Web.Domain.Entities;
namespace UNESCO.Web.Application.Abstractions;
public interface IWebLeadRepository { Task AddAsync(WebLead lead, CancellationToken ct); }
