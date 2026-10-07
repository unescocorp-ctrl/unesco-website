# Hướng dẫn đưa website UNESCO XI + AI lên GitHub Pages

Website (thư mục `apps/web`) là site tĩnh Astro, chạy được miễn phí trên GitHub Pages.
API .NET (`apps/api`) và SQL Server **không** chạy được trên GitHub Pages — xem mục 5.

## 1. Tạo repository

1. Vào https://github.com/new, đặt tên, ví dụ `unesco-website`.
2. Chọn **Public**. (Repo Private chỉ dùng được Pages với gói GitHub Pro/Team/Enterprise.)
3. Không tick "Add a README" (repo trống).

## 2. Đưa mã nguồn lên — quan trọng: đúng thư mục gốc

Thư mục gốc của repo phải là **nội dung bên trong** thư mục `UNESCO_WEBSITE_V1_1_1`,
tức là ngay ở gốc repo phải thấy: `.github/`, `apps/`, `scripts/`, `README.md`…
Nếu `.github/` nằm lọt vào thư mục con, GitHub sẽ **không chạy** workflow và website không được tạo.

Cách A — dùng Git (khuyên dùng):

```bash
cd UNESCO_WEBSITE_V1_1_1
git init -b main
git add .
git commit -m "UNESCO website v1.1.1"
git remote add origin https://github.com/<user>/unesco-website.git
git push -u origin main
```

Cách B — GitHub Desktop: File → Add local repository → chọn thư mục `UNESCO_WEBSITE_V1_1_1` → Publish.

> Không nên kéo-thả qua trang web GitHub: trình duyệt thường bỏ qua thư mục ẩn `.github`.

## 3. Bật GitHub Pages (làm 1 lần)

Repo → **Settings → Pages → Build and deployment → Source: chọn "GitHub Actions"**.

Sau đó vào tab **Actions** → workflow **deploy-github-pages** → **Run workflow**
(hoặc push bất kỳ thay đổi nào lên nhánh `main`). Khoảng 1–2 phút sau website có tại:

- `https://<user>.github.io/unesco-website/` (repo thường), hoặc
- `https://<user>.github.io/` nếu repo tên là `<user>.github.io`, hoặc
- tên miền riêng nếu đã cấu hình ở Settings → Pages → Custom domain.

Workflow tự nhận đúng địa chỉ và thư mục con, **không cần sửa code khi đổi tên repo**.

## 4. Cập nhật thông tin công ty

Sửa `apps/web/src/config/site.config.ts`, thay các giá trị `{{...}}` (tên pháp nhân, MST, địa chỉ,
điện thoại, email…). Khi còn `{{...}}`, website vẫn chạy và hiển thị "Đang cập nhật" ở các ô đó;
workflow chỉ hiện cảnh báo (warning), không chặn deploy.

Khi đã điền `email`, form "Đăng ký demo" sẽ mở ứng dụng email của khách với nội dung điền sẵn.

## 5. Form và API (tuỳ chọn)

GitHub Pages chỉ phục vụ file tĩnh nên không chạy được API .NET. Khi đã có API chạy ở nơi khác
(VPS, Azure, Render…):

1. Repo → Settings → Secrets and variables → Actions → **Variables** → New variable:
   `PUBLIC_API_URL` = `https://api.ten-mien.vn/api/v1`
2. Trên API, thêm origin của website vào `AllowedOrigins` (ví dụ `https://<user>.github.io`).
3. Chạy lại workflow **deploy-github-pages**.

## 6. Chạy thử trên máy (Windows)

```bash
cd apps/web
npm install
npm run dev            # http://localhost:4321/
```

Mô phỏng đúng như GitHub Pages (có thư mục con):

```bash
# PowerShell
$env:PUBLIC_SITE_URL="https://<user>.github.io"; $env:BASE_PATH="/unesco-website"; npm run build; npm run preview
```

## 7. Các workflow trong `.github/workflows`

| Workflow | Khi nào chạy | Việc làm |
|---|---|---|
| `deploy-github-pages.yml` | push `main`, chạy tay | Build Astro và đưa lên GitHub Pages |
| `website-ci.yml` | Pull request, nhánh `develop`, chạy tay | Kiểm tra link/route, `astro check`, build |
| `api-ci.yml` | khi sửa `apps/api` | Build + test API .NET 10 |
| `security.yml` | push `main`, PR, hằng tuần | Chặn file khoá/backup bị commit nhầm |
| `api-container.yml` | chỉ chạy tay | Build image API lên GHCR |
| `website-deploy-cloudflare.yml` | chỉ chạy tay | Deploy Cloudflare Pages (cần secrets) |

## 8. Gỡ lỗi nhanh

| Hiện tượng | Nguyên nhân / cách xử lý |
|---|---|
| Tab Actions không có workflow nào | `.github` không nằm ở gốc repo (xem mục 2). |
| `Get Pages site failed` / `Not Found` ở bước Setup Pages | Chưa chọn Source = GitHub Actions (mục 3). |
| Trang trắng, mất CSS/ảnh | Đang mở file HTML trực tiếp; hãy mở bằng link GitHub Pages. |
| Link trong trang bị 404 sau khi sửa code | Link nội bộ phải viết `href={url('/duong-dan/')}`, không viết `href="/duong-dan/"`. Chạy `python scripts/validate_source.py` để kiểm tra. |
| Lỗi đỏ ở bước `npm run build` | Mở log của bước đó, gửi nội dung lỗi để sửa. |
