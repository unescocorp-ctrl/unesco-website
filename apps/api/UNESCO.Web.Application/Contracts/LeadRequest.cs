using System.ComponentModel.DataAnnotations;
namespace UNESCO.Web.Application.Contracts;
public sealed class LeadRequest {
 [Required,MaxLength(120)] public string FullName {get;set;}="";
 [MaxLength(200)] public string? CompanyName {get;set;}
 [Required,MaxLength(30)] public string Phone {get;set;}="";
 [EmailAddress,MaxLength(200)] public string? Email {get;set;}
 [MaxLength(100)] public string? Province {get;set;}
 [Required,MaxLength(60)] public string InterestCode {get;set;}="";
 [MaxLength(2000)] public string? Message {get;set;}
 [MaxLength(80)] public string? Source {get;set;}="website";
 [MaxLength(400)] public string? LandingPage {get;set;}
 [MaxLength(100)] public string? UtmSource {get;set;}
 [MaxLength(100)] public string? UtmMedium {get;set;}
 [MaxLength(100)] public string? UtmCampaign {get;set;}
 [Required] public string Consent {get;set;}="";
 [MaxLength(30)] public string? RequestType {get;set;}
}
