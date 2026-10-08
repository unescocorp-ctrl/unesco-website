# Website UNESCO AI – v2.0 (10/2026): giao diện theo bộ thiết kế "Master Website Report"

## Thay đổi chính
- **Giao diện mới** theo video bộ thiết kế 21 trang: nền sáng, xanh lá chủ đạo, xanh dương phụ, vàng điểm nhấn; dải sọc chéo; ảnh phần mềm đặt trong khung trình duyệt; tiêu đề lớn IN HOA hai màu.
- **Chữ**: Roboto (nội dung) + Roboto Condensed (tiêu đề, nút, menu) – tải từ Google Fonts.
- **Logo** ngôi sao UNESCO thật; tên hiển thị **UNESCO AI**.
- **Ảnh màn hình chính** mới (email unesco.corp@gmail.com, www.unescosoft.com), đã sửa chữ "UNSECO" → "UNESCO".
- **Menu theo sơ đồ** của bộ thiết kế: Sản phẩm (UNESCO AI, AI Hoá đơn, AI Sổ phụ, AI Giá thành, Hồ sơ Thuế, Tờ khai & BCTC, An toàn & kiểm soát AI), Giải pháp, Bảng giá, Tài nguyên (Download Center, Guide/Knowledge/Video, Bản quyền & lịch sử), Liên hệ.
- **Trang mới**: `/ai-ke-toan/ai-gia-thanh/`, `/ho-so-thue/`, `/to-khai-bctc/`, `/an-toan-kiem-soat-ai/`, `/giai-phap/`.
- **Trang làm lại**: Trang chủ (Một tháng kế toán với AI UNESCO, 10 tính năng thực tế, Evidence/Benchmark, AI làm/AI không làm, Giải pháp theo ngành), Sản phẩm, AI Hoá đơn, AI Sổ phụ, Bảng giá (4 gói), Download Center, Guide/Knowledge/Video, Bản quyền & lịch sử, Liên hệ – Hỗ trợ – Pháp lý.
- Thay toàn bộ hình minh hoạ (SVG) bằng **ảnh chụp phần mềm thật**; biểu tượng emoji thay bằng bộ biểu tượng nét mảnh.
- Chân trang 4 cột (Sản phẩm, Giải pháp, Hỗ trợ, Pháp lý) và dải "ĐĂNG KÝ XEM DEMO | NHẬN TƯ VẤN".
- Thông tin liên hệ giữ theo website: 30 Đường số 50, Phường 10, Quận 6, TP.HCM; 093 3456 567; 028 3755 4755; 028 3755 5755; unesco.corp@gmail.com.

## Sửa nội dung ở đâu
| Muốn sửa | Tệp |
|---|---|
| Menu chính | `apps/web/src/data/navigation.ts` |
| Nội dung trang chủ: 5 giá trị, Một tháng kế toán, 10 tính năng, Evidence, AI làm/không làm, ngành | `apps/web/src/data/design.ts` |
| Màu sắc, chữ, bố cục | `apps/web/src/styles/global.css` (khối "v2.0" ở cuối tệp) |
| Biểu tượng | `apps/web/src/components/Icon.astro` |
| Số chứng nhận bản quyền | `apps/web/src/pages/ban-quyen/index.astro` |

## Cần kiểm tra lại
- Số liệu Evidence/Benchmark (1,7 giây; 3.823/3.823; 786/1.027; 1.022 dòng; 74/74; 118/118) lấy từ bộ thiết kế.
- Số chứng nhận bản quyền lấy theo bộ thiết kế (1563/2011/QTG; 1583/2011/QTG – 15/06/2011; 248/2012/QTG – 07/02/2012).

---

# v2.1 (10/2026): Tính năng ưu việt & tổng hợp tính năng AI (bản phần mềm GĐ169)

Nguồn: 3 tài liệu bản GĐ169 (09/10/2026) – Tính năng ưu việt của UNESCO AI, Tổng hợp toàn bộ tính năng AI, Hướng dẫn sử dụng trực quan GĐ159 – GĐ168.

## Trang mới
- `/tinh-nang-uu-viet/` – 16 điểm ưu việt xếp theo 4 nhóm (Tự động hoá chứng từ · Thuế & tuân thủ · Giá thành, kiểm soát & quản trị · An toàn & vận hành), 12 mục chi tiết kèm số liệu đo thực tế, bảng nguồn số liệu, tải 3 tài liệu PDF.
- `/tinh-nang-ai/` – 65 tính năng AI trong 11 nhóm: mở ở đâu, AI làm gì; bản đồ AI, ba câu chốt, có gì mới.

## Trang cập nhật
- Trang chủ: 4 con số nổi bật, "Một tháng kế toán" 7 bước theo tài liệu, 16 điểm ưu việt, Evidence 9 số liệu kèm nguồn, AI làm / không làm theo tài liệu.
- AI Hoá đơn, AI Sổ phụ, AI Giá thành (trình tự 7 bước đèn màu + ảnh màn hình mới), Hồ sơ Thuế, Tờ khai & BCTC, An toàn & kiểm soát AI, Kế toán dịch vụ (một người, nhiều bộ sổ), Bảng giá (khoá AI 3 chế độ), Download, Release notes (có gì mới GĐ136 – GĐ169), Hướng dẫn (12 chức năng trực quan, dùng vào lúc nào trong năm).
- Menu Sản phẩm: thêm Tính năng ưu việt, Tổng hợp 65 tính năng AI.

## Sửa nội dung ở đâu
| Muốn sửa | Tệp |
|---|---|
| 16 điểm ưu việt, 12 mục chi tiết, nguồn số liệu, tài liệu PDF | `apps/web/src/data/advantages.ts` |
| 65 tính năng AI, bản đồ AI, ba câu chốt | `apps/web/src/data/ai-catalog.ts` |
| Có gì mới theo từng gói | `apps/web/src/data/whatsnew.ts` |
| 12 chức năng hướng dẫn trực quan | `apps/web/src/data/visual-guide.ts` |
| Tệp PDF tải về | `apps/web/public/tai-lieu/` |
