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


## UNESCO Security: demo dùng chung giao diện sản phẩm (20/11/2026)

- `/san-pham/unesco-security/demo/` mở trực tiếp Trung tâm điều hành, không yêu cầu đăng nhập.
- Link màn hình: `#dashboard`, `#employees`, `#roster`, `#duty`, `#articles`, `#accounts`; đổi màn hình có cập nhật URL, tải lại vẫn giữ màn hình.
- Bundle được dựng từ `web/src/demo/main.tsx` trong workspace SECURUTI; dùng chung `DarkWorkspace`, `WorkforceWorkspace`, `ArticlesPage` với phần mềm vận hành. Không sửa trực tiếp các file JS/CSS đã minify.
- Chạy `deploy/Build-PublicDemo.ps1` tại workspace SECURUTI để cập nhật `apps/web/public/san-pham/unesco-security/demo-app/` và manifest `apps/web/src/data/security-demo.json`, sau đó chạy check/build website như thường lệ.
- Bộ demo chứa dữ liệu minh họa công khai. Soạn bài/lưu nháp/tải TXT dùng trình duyệt, không đăng bài thật; các màn hình nghiệp vụ dùng dữ liệu tham chiếu và không gọi API vận hành. CSP đặt `connect-src 'none'` để giữ ranh giới này.
- Nội dung cũ của demo viết bài được đọc từ khóa trình duyệt cũ khi chưa có thư viện mới. Trang demo giữ `noindex`; các trang giới thiệu/bài viết vẫn dùng giao diện website.
- Kiểm tra tại workspace SECURUTI: `npx playwright test --config playwright.demo.config.ts` trong thư mục web. Đặt `DEMO_BASE_URL` để kiểm tra URL public sau khi GitHub Pages hoàn tất.
