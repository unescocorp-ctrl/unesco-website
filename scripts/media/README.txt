ERP UNESCO / UNESCO XII - Quy trình cập nhật nội dung website

Bài viết: apps/web/src/data/erp-articles.json
Video, lời đọc, mốc nội dung: apps/web/src/data/erp-videos.json
Tệp MP4, WebP, VTT: apps/web/public/videos/erp-xii/
Kịch bản video có thể sửa: scripts/media/erp-xii-recipe.json

Trang bài viết và video được sinh tự động theo slug; giữ slug khi cập nhật
để không làm thay đổi URL. Bài cũ dùng date là ngày đăng và updated là ngày
cập nhật. Không tự đổi uploadDate của video cũ khi chỉ sửa tiêu đề.

Video đợt 18/11/2026 là sơ đồ minh họa quy trình có lời đọc tổng hợp,
không quay dữ liệu khách hàng. Nhãn này cần được giữ ở trang xem video.

Dựng lại video (tùy chọn, Windows): cần Node, Playwright/Chromium, FFmpeg,
ffprobe trong PATH và giọng đọc vi-VN Microsoft An. Chạy:
  node scripts/media/build-erp-videos.cjs <thu-muc-tam-moi>
Có thể đặt PLAYWRIGHT_MODULE tới module Playwright sẵn có. Trình dựng chỉ
ghi các tài nguyên trong lộ trình ERP và cập nhật erp-videos.json. Khi dựng
lại, đây là bản phát hành video mới: kiểm tra lời đọc, hình và phụ đề trước
khi commit. Không xóa thư mục tạm tự động.

Kiểm tra tại thư mục gốc:
  python scripts/validate_source.py
  python scripts/validate_content.py
Tại apps/web:
  npm ci
  npm run check
  npm run build
Sau build, tại thư mục gốc:
  python scripts/validate_build.py

Đặt PUBLIC_SITE_URL và BASE_PATH theo môi trường trước khi build. CI kiểm
tra đường dẫn có tiền tố GitHub Pages; triển khai main dùng cấu hình Pages.
Xem thử desktop/mobile, phát video, phụ đề và mốc thời gian trước khi merge.
Đẩy nhánh và mở PR vào main; workflow deploy-github-pages xuất bản sau merge.

Website vẫn là website tĩnh. Chưa có trang quản trị đăng bài hay tự đồng bộ
yêu cầu demo từ form web sang ERP. Đợt này không thay đổi API nhận form.
