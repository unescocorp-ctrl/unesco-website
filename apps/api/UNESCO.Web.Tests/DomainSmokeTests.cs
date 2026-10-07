using UNESCO.Web.Domain.Entities;
namespace UNESCO.Web.Tests;
public sealed class DomainSmokeTests { [Xunit.Fact] public void Lead_defaults_are_safe(){var lead=new WebLead();Xunit.Assert.Equal("NEW",lead.Status);Xunit.Assert.NotEqual(Guid.Empty,lead.Id);} }
