USE UNESCO_WEB;
GO
IF NOT EXISTS(SELECT 1 FROM dbo.Product WHERE Code=N'UNESCO_XI') INSERT dbo.Product(Id,Code,Name,Slug,ShortDescription,Status,DisplayOrder,CreatedAt,UpdatedAt) VALUES(NEWID(),N'UNESCO_XI',N'UNESCO XI',N'unesco-xi',N'Phần mềm kế toán UNESCO XI',N'ACTIVE',10,SYSDATETIMEOFFSET(),SYSDATETIMEOFFSET());
IF NOT EXISTS(SELECT 1 FROM dbo.Product WHERE Code=N'UNESCO_XI_AI') INSERT dbo.Product(Id,Code,Name,Slug,ShortDescription,Status,DisplayOrder,CreatedAt,UpdatedAt) VALUES(NEWID(),N'UNESCO_XI_AI',N'UNESCO XI + AI',N'unesco-xi-ai',N'Phần mềm kế toán UNESCO XI tích hợp lớp hỗ trợ AI',N'ACTIVE',20,SYSDATETIMEOFFSET(),SYSDATETIMEOFFSET());
GO
