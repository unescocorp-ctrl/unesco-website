# UNESCO XI + AI Website V1.1 — Design & Content Checkpoint

Production-oriented source baseline derived from `MASTER_SPEC_WEBSITE_UNESCO_XI_AI_V1.0` and upgraded with the V1.1 design/content layer.

## Stack
- Frontend: Astro 7.3 + TypeScript, static output
- API: ASP.NET Core .NET 10
- Database: SQL Server
- CI/CD: GitHub Actions
- Intended hosting: static/CDN frontend + separate API + object storage/CDN for installers

## V1.1 design upgrade
- New responsive marketing design system
- Original SVG visual assets for AI Accounting, Invoice AI, Bank AI, Cost Accounting and Solutions
- Rewritten homepage and priority conversion pages
- Stronger product positioning, CTA hierarchy and trust/control messaging
- No external stock imagery dependency

See:
- `DESIGN_CONTENT_SPEC_V1_1.md`
- `DESIGN_CHANGELOG_V1_1.md`

## Important
All values in `{{DOUBLE_BRACES}}` are deployment placeholders. Production deployment must fail while required placeholders remain.
Do not commit credentials, customer accounting data, private certificates, license secrets, API secrets, or production database backups.

## Chạy trên GitHub Pages (V1.1.1)
Xem **`HUONG_DAN_GITHUB_PAGES.md`**. Tóm tắt: đưa nội dung thư mục này lên gốc repo → Settings → Pages → Source = **GitHub Actions** → workflow `deploy-github-pages` tự build và deploy mỗi lần push `main`.
Link nội bộ trong `.astro` phải dùng `url('/duong-dan/')` (file `apps/web/src/utils/url.ts`) để chạy đúng dưới thư mục con `/<repo>/`.

## Quick start (Windows)
Run `RUN_NOW.cmd` after Node.js 22+ and .NET SDK 10 are installed.

## Web only
```bash
cd apps/web
npm install
npm run dev
```

## API only
```bash
cd apps/api
dotnet restore UNESCO.Web.sln
dotnet run --project UNESCO.Web.Api
```

## Build all
Run `BUILD_ALL.cmd`.

## Source status
V1.1 is a design/content checkpoint. Production remains gated until official company identity, domain, copyright evidence, approved pricing and verified installer metadata are supplied.
