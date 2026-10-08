# Website UNESCO AI – v1.2 (10/2026)

## Thay đổi chính
- Nội dung soạn lại theo **phần mềm kế toán UNESCO AI** (UNESCO XI + AI, bản GĐ110b): màn hình AI 8 thẻ, quy trình xử lý tự động, 4 ô kiểm soát, sổ phụ ngân hàng + VietQR, báo cáo & nhật ký, giá thành có Cân đối AI, trợ lý AI, kích hoạt AI.
- **Ảnh**: 26 ảnh giao diện UNESCO AI (bộ ảnh FINAL + thư mục GIAO DIỆN) ở `apps/web/public/screenshots/*.webp`.
  Đã che: mã số thuế trên đầu màn hình, tên doanh nghiệp của bộ dữ liệu mẫu, đường dẫn tệp dữ liệu, số hợp đồng vay, tên cá nhân trong sổ phụ.
- **Video**: video giới thiệu (9:10), 8 video module M01–M08 và 2 clip ngắn (Tờ khai HQ, công nợ VietQR), nén 720p ở `apps/web/public/videos/*.mp4` kèm ảnh bìa `*.webp`. Phát trực tiếp trên website, không cần YouTube.
- Trang được viết lại: Trang chủ, Sản phẩm (`/san-pham/unesco-xi-ai/`), AI kế toán, Bảng giá, Tải phần mềm, Video, Hướng dẫn, Liên hệ.
- Thông tin liên hệ: email `unesco.corp@gmail.com`, website `www.unescosoft.com`.

## Sửa nội dung, ảnh, video ở đâu
| Muốn sửa | Tệp |
|---|---|
| Tên công ty, địa chỉ, điện thoại, email | `apps/web/src/config/site.config.ts` |
| Danh sách ảnh và chú thích ảnh | `apps/web/src/data/screenshots.ts` |
| Danh sách video (thêm video mới, mã YouTube) | `apps/web/src/data/videos.ts` |
| Nội dung 8 thẻ AI, quy trình, kích hoạt AI | `apps/web/src/data/ai.ts` |
| 9 phân hệ kế toán | `apps/web/src/data/modules.ts` |

Thêm video mới: chép tệp `.mp4` (nên dưới 50 MB) vào `apps/web/public/videos/`, thêm một dòng trong `videos.ts`.
Nếu đăng YouTube: dán mã video vào ô `youtube: '...'` — website tự phát bằng YouTube.

## Lưu ý
- Video hướng dẫn quay trên bộ sổ demo; một số cảnh vẫn hiện mã số thuế và tên đối tác của bộ sổ đó. Nếu cần ẩn, làm mờ trong video gốc rồi thay tệp mp4 cùng tên.
- Nội dung do AI soạn từ lời đọc video và kịch bản module — cần người phụ trách duyệt lại trước khi quảng bá rộng.
