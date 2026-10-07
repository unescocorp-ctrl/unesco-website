# SOURCE GATE REPORT

Date: 2026-10-07

## Baseline decision
No earlier Astro/ASP.NET website source artifact was available for this specific WEBSITE UNESCO XI + AI project. This package is therefore the first source baseline created directly from MASTER_SPEC_WEBSITE_UNESCO_XI_AI_V1.0; it does not overwrite an existing website codebase.

## Implemented
- Astro 7.3 + TypeScript marketing website.
- 43 web routes.
- Responsive header/footer/design system and home page.
- Product, AI, accounting, solution, pricing, download, support, legal and content pages.
- Demo/contact lead form and support form.
- ASP.NET Core .NET 10 API.
- SQL Server schema and seed.
- Public write endpoint rate limiting, input validation and security headers.
- GitHub Actions CI, static site deploy workflow, security workflow and API container publishing.
- Dockerfile for API.
- Release metadata and SHA-256 gate for future installer.

## Verified in this environment
PASS: source route/import/href validation (43 routes).
PASS: YAML syntax.
PASS: csproj XML syntax.
PASS: JSON syntax.
PASS: obvious private-key/dangerous file extension scan.
EXPECTED BLOCK: production placeholder gate.

## Not executed here
- `npm install`, `astro check`, `astro build`: package registry access is unavailable in this runtime.
- `.NET restore/build/test`: .NET SDK is not installed in this runtime.
- SQL Server migration/runtime test: SQL Server is not available in this runtime.
- Cloudflare/GitHub production deploy: official account/domain/secrets were not provided.

These are execution-environment gaps, not represented as PASS. Use `BUILD_ALL.cmd` on a Windows machine with Node 22+, .NET SDK 10 and SQL Server access.
