using Microsoft.EntityFrameworkCore;
using UNESCO.Web.Domain.Entities;
namespace UNESCO.Web.Infrastructure;
public sealed class WebDbContext(DbContextOptions<WebDbContext> options):DbContext(options){
 public DbSet<WebLead> WebLeads=>Set<WebLead>(); public DbSet<SupportRequest> SupportRequests=>Set<SupportRequest>(); public DbSet<SoftwareRelease> SoftwareReleases=>Set<SoftwareRelease>(); public DbSet<Product> Products=>Set<Product>();
 protected override void OnModelCreating(ModelBuilder b){
  b.Entity<WebLead>(e=>{e.ToTable("WebLead");e.HasKey(x=>x.Id);e.HasIndex(x=>x.LeadCode).IsUnique();e.Property(x=>x.FullName).HasMaxLength(120);e.Property(x=>x.Phone).HasMaxLength(30);e.Property(x=>x.Status).HasMaxLength(30);});
  b.Entity<SupportRequest>(e=>{e.ToTable("SupportRequest");e.HasKey(x=>x.Id);e.HasIndex(x=>x.TicketCode).IsUnique();});
  b.Entity<SoftwareRelease>(e=>{e.ToTable("SoftwareRelease");e.HasKey(x=>x.Id);e.HasIndex(x=>new{x.ProductCode,x.Version}).IsUnique();e.Property(x=>x.Sha256).HasMaxLength(64);});
  b.Entity<Product>(e=>{e.ToTable("Product");e.HasKey(x=>x.Id);e.HasIndex(x=>x.Code).IsUnique();e.HasIndex(x=>x.Slug).IsUnique();});
 }
}
