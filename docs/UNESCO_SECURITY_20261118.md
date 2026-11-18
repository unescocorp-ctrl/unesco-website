# UNESCO Security: giới thiệu, video và tài liệu

Thêm chuyên mục quản lý dịch vụ bảo vệ vào website hiện có, thay thẻ chỉ ghi “Sắp ra mắt” bằng ảnh, thông tin demo và liên kết có nội dung.

## Đường dẫn

- `/san-pham/unesco-security/`: tổng quan, demo 11 chương, tính năng, số liệu minh họa, công cụ thay giả định và FAQ.
- `/san-pham/unesco-security/huong-dan/`: hướng dẫn theo vai trò và PDF 8 trang.
- `/san-pham/unesco-security/bai-gioi-thieu/`: bài giới thiệu đầy đủ.
- `/san-pham/unesco-security/tai-lieu/`: video 60 giây, video đầy đủ, tài liệu riêng và ZIP 10 tệp.

Menu sản phẩm và thẻ tại danh mục/bảng giá đọc từ `products.ts`. Menu Tài nguyên, trung tâm hướng dẫn và trang Video có liên kết mới. Chuyên mục có liên kết về trang chủ và trang liên hệ hiện tại, canonical/OG theo tên miền `https://www.unescosoft.com` và 4 mục sitemap.

## Nguồn nội dung và phạm vi

31 tệp công khai tại `apps/web/public/san-pham/unesco-security/`, lấy từ bộ demo UNESCO Security đã kiểm tra. Danh sách và SHA-256 tại `UNESCO_SECURITY_CONTENT_MANIFEST.json`. Đây là trang giới thiệu tĩnh, không kèm ứng dụng vận hành, tài khoản, cookie hoặc cơ sở dữ liệu.

Video dài 187,58 giây và video ngắn 60,04 giây, 1920×1080 H.264/AAC, giọng tổng hợp tiếng Việt. Bản dài có VTT/SRT; bản ngắn có phụ đề trên hình. Phụ đề căn thời gian ước tính theo câu.

Tên và số liệu là minh họa. 16/18 là suất được bố trí, 18/24 là xác nhận đọc SOP. 540 phút quan sát tách 480 trong ca và 60 cần xác minh. Mức giảm 75% thời gian là phép tính giả định, không phải hiệu quả thực đo. GPS chỉ tại lần chủ động gửi; chỉ huy phải kiểm tra trước khi kết luận. AI thật, GPS nền/chống giả mạo và offline còn trong kế hoạch. Không tuyên bố nghiệm thu triển khai doanh nghiệp.

## Kiểm tra trước khi xuất bản

- Source validation: 118 routes, imports và liên kết đạt. Content validation của nội dung cũ đạt.
- Astro check: 113 tệp, 0 lỗi/cảnh báo/hint. Build production đạt; kiểm tra 117 mục sitemap đạt.
- Edge: 4 trang × 4 chiều rộng (1440/768/390/320), 24 liên kết/tài nguyên đạt; không tràn ngang hoặc lỗi JavaScript.
- Video dài/ngắn phát được, chuyển chương và phụ đề đạt; lời dẫn/FAQ dùng bàn phím được. ZIP tải qua trình duyệt khớp byte; HTTP range trả 206.
- Thẻ danh mục, tab bảng giá chuyên ngành, hộp phát video, liên kết hướng dẫn/video và menu mobile đạt. Ảnh thẻ sản phẩm và trang tài liệu đã được xem.

Không đổi DNS, cấu hình Pages hoặc các sản phẩm khác. Dùng workflow xuất bản GitHub Pages hiện có sau khi cập nhật nhánh main. Bằng chứng trình duyệt: `UNESCO_SECURITY_LOCAL_VERIFICATION.json`.
