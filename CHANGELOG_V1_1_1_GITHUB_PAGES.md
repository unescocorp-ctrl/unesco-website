# V1.1.1 — Sửa lỗi để chạy trên GitHub Pages (2026-10-07)

## Lỗi chặn website chạy trên GitHub
1. **Không có workflow GitHub Pages.** Workflow deploy cũ chỉ đẩy lên Cloudflare và tự chạy mỗi lần push `main` → luôn báo lỗi khi chưa có secrets.
   → Thêm `.github/workflows/deploy-github-pages.yml` (configure-pages → build → upload-pages-artifact → deploy-pages). Workflow Cloudflare đổi tên thành `website-deploy-cloudflare.yml`, chỉ chạy tay, báo rõ nếu thiếu secrets.
2. **Toàn bộ link/ảnh viết cứng `/...`** (107 href/src + 13 link từ mảng dữ liệu) → trên `https://<user>.github.io/<repo>/` mọi link, CSS favicon, ảnh minh hoạ đều 404.
   → `astro.config.mjs` nhận `site`/`base` từ biến môi trường; thêm `src/utils/url.ts` và chuyển mọi link nội bộ sang `url()`; canonical, og:image, sitemap.xml, robots.txt dùng URL tuyệt đối có base.
3. **Form gửi tới `http://localhost:5000`** khi build production (không có API) → luôn lỗi, và bị trình duyệt chặn mixed-content trên HTTPS.
   → Không có `PUBLIC_API_URL` thì form mở email (nếu đã cấu hình email công ty) hoặc hướng dẫn liên hệ. Chạy local (`npm run dev`) vẫn trỏ `localhost:5000`.
4. **Placeholder `{{...}}` hiển thị thẳng ra trang** Liên hệ và 8 trang pháp lý → hiển thị "Đang cập nhật". JSON-LD dùng tên sản phẩm khi chưa có tên pháp nhân.

## Lỗi làm workflow báo đỏ
5. `UNESCO.Web.Tests.csproj`: xunit.v3 bắt buộc `OutputType=Exe`; thiếu `ImplicitUsings` nên `Guid` không biên dịch được → bổ sung.
6. `global.json`: `10.0.401` + `latestPatch` dễ lệch SDK trên runner → `10.0.100` + `latestFeature`.
7. `api-container.yml`: tên image GHCR phải chữ thường (lỗi nếu tên tài khoản có chữ hoa) → chuẩn hoá; chuyển sang chạy tay.
8. Cập nhật phiên bản actions (checkout v7, setup-node v7, setup-dotnet v6, configure-pages v6, upload-pages-artifact v5, deploy-pages v5).

## Cải thiện nhỏ
- Header không còn xuống dòng ở màn hình laptop 1280–1440px (nav co gọn, ẩn nút trùng "Tải phần mềm" ≤1280px).
- Thẻ "giải pháp/AI" có link `#` (không dẫn đi đâu) hiển thị dạng thẻ thường, không còn nút "Xem thêm →" chết.
- Trang 404 gắn `noindex`; script form hỗ trợ đặt trong layout, chống gắn sự kiện 2 lần.
- `RUN_NOW.cmd` chạy được website khi máy chưa cài .NET; thêm `.gitattributes` giữ CRLF cho file `.cmd`.
- `scripts/validate_source.py` kiểm tra thêm: link viết cứng không qua `url()`, link trong file dữ liệu, sitemap khớp route.

## Đã kiểm tra
- Cấu trúc HTML toàn bộ 52 file `.astro` (trình biên dịch Rust của Astro 7 bắt buộc đóng thẻ): 0 lỗi.
- Render mô phỏng 43 trang + 404 + robots + sitemap với base `/unesco-web/` và `/`: 2.120 link/ảnh đều đúng base và tồn tại.
- Chạy thử trên Chromium (desktop + mobile): điều hướng, menu mobile, form fallback, không lỗi console.
- `tsc --strict` cho các module TypeScript; YAML/JSON/XML hợp lệ.
- Chưa chạy được `npm install`/`astro build`/`dotnet build` thật trong môi trường sửa lỗi (registry npm/NuGet bị chặn) — lần build thật đầu tiên diễn ra trên GitHub Actions.
