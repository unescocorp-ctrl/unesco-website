SET XACT_ABORT ON;
BEGIN TRAN;
IF DB_ID(N'UNESCO_WEB') IS NULL THROW 50001, 'Create/select database UNESCO_WEB before migration.', 1;
IF OBJECT_ID(N'dbo.WebLead',N'U') IS NULL
CREATE TABLE dbo.WebLead(
 Id uniqueidentifier NOT NULL CONSTRAINT PK_WebLead PRIMARY KEY,
 LeadCode nvarchar(40) NOT NULL CONSTRAINT UQ_WebLead_LeadCode UNIQUE,
 FullName nvarchar(120) NOT NULL, CompanyName nvarchar(200) NULL, Phone nvarchar(30) NOT NULL, Email nvarchar(200) NULL,
 Province nvarchar(100) NULL, InterestCode nvarchar(60) NOT NULL, Message nvarchar(2000) NULL, Source nvarchar(80) NOT NULL,
 LandingPage nvarchar(400) NULL, UtmSource nvarchar(100) NULL, UtmMedium nvarchar(100) NULL, UtmCampaign nvarchar(100) NULL,
 ConsentAt datetimeoffset NOT NULL, IpHash nvarchar(64) NULL, UserAgent nvarchar(500) NULL, Status nvarchar(30) NOT NULL,
 AssignedTo nvarchar(100) NULL, CreatedAt datetimeoffset NOT NULL, UpdatedAt datetimeoffset NOT NULL
);
IF OBJECT_ID(N'dbo.SupportRequest',N'U') IS NULL
CREATE TABLE dbo.SupportRequest(
 Id uniqueidentifier NOT NULL CONSTRAINT PK_SupportRequest PRIMARY KEY, TicketCode nvarchar(40) NOT NULL CONSTRAINT UQ_SupportRequest_TicketCode UNIQUE,
 FullName nvarchar(120) NOT NULL, CompanyName nvarchar(200) NULL, Phone nvarchar(30) NOT NULL, Email nvarchar(200) NULL,
 ProductCode nvarchar(60) NOT NULL, Version nvarchar(40) NULL, Subject nvarchar(200) NOT NULL, Description nvarchar(4000) NOT NULL,
 Status nvarchar(30) NOT NULL, CreatedAt datetimeoffset NOT NULL, UpdatedAt datetimeoffset NOT NULL
);
IF OBJECT_ID(N'dbo.Product',N'U') IS NULL
CREATE TABLE dbo.Product(
 Id uniqueidentifier NOT NULL CONSTRAINT PK_Product PRIMARY KEY, Code nvarchar(60) NOT NULL CONSTRAINT UQ_Product_Code UNIQUE,
 Name nvarchar(200) NOT NULL, Slug nvarchar(200) NOT NULL CONSTRAINT UQ_Product_Slug UNIQUE, ShortDescription nvarchar(1000) NULL,
 Status nvarchar(30) NOT NULL, DisplayOrder int NOT NULL, CreatedAt datetimeoffset NOT NULL, UpdatedAt datetimeoffset NOT NULL
);
IF OBJECT_ID(N'dbo.SoftwareRelease',N'U') IS NULL
CREATE TABLE dbo.SoftwareRelease(
 Id uniqueidentifier NOT NULL CONSTRAINT PK_SoftwareRelease PRIMARY KEY, ProductCode nvarchar(60) NOT NULL, Version nvarchar(40) NOT NULL,
 Channel nvarchar(20) NOT NULL, ReleaseDate date NOT NULL, FileName nvarchar(260) NOT NULL, DownloadUrl nvarchar(1000) NOT NULL,
 FileSize bigint NOT NULL, Sha256 char(64) NOT NULL, MinWindowsVersion nvarchar(40) NOT NULL, Architecture nvarchar(20) NOT NULL,
 IsMandatory bit NOT NULL, IsPublic bit NOT NULL, ReleaseNotesUrl nvarchar(1000) NULL, CreatedAt datetimeoffset NOT NULL,
 CONSTRAINT UQ_SoftwareRelease_ProductVersion UNIQUE(ProductCode,Version)
);
COMMIT;
