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

# v2.2 (09/10/2026): bản quyền – pháp lý, phân tích tính năng & lộ trình 2026

## Bản quyền & pháp lý
- **Pháp nhân hiện nay** theo Giấy chứng nhận đăng ký doanh nghiệp (thay đổi lần 10, 12/02/2026): Công ty TNHH Phần mềm UNESCO – UNESCO SOFTWARE COMPANY LIMITED – mã số doanh nghiệp / MST 0313057886, đăng ký lần đầu 18/12/2014, trụ sở Số 8 Đường Số 17, Phường Bình Phú, TP.HCM.
- **Pháp nhân trước đây**: Công ty Cổ phần Phát triển Phần mềm UNESCO (ĐKKD 0310861633 – 18/05/2011) – Giám đốc và tác giả Ông Nguyễn Đình Thăng. **Tác giả phần mềm vẫn là Ông Nguyễn Đình Thăng.**
- Trang `/ban-quyen/` làm lại: pháp nhân trước / nay, 4 giấy chứng nhận đăng ký quyền tác giả (1563/2011/QTG, 1583/2011/QTG, 230/2012/QTG, 248/2012/QTG) kèm ảnh, bảng thông tin doanh nghiệp, lịch sử sản phẩm.
- Ảnh chứng nhận `public/chung-nhan/` (bản thường + bản lớn): đã che kín số CMND, địa chỉ cá nhân của tác giả; làm mờ thông tin khách hàng trên ảnh màn hình ERP.
- Chân trang: © CÔNG TY TNHH PHẦN MỀM UNESCO · MST 0313057886 · Tác giả phần mềm. Trang Liên hệ, Giới thiệu cập nhật thông tin pháp lý.
- PDF "Tính năng ưu việt": khung liên hệ trang 6 đổi tên công ty thành Công ty TNHH Phần mềm UNESCO, email unesco.corp@gmail.com, website www.unescosoft.com.

## Phân tích tính năng & lộ trình 2026 – trang mới `/phan-tich-tinh-nang/`
- Bảy bước một tháng kế toán: đã có / đang phát triển; 6 lợi thế khác biệt; bảng năng lực (Đã có – Một phần – Đang phát triển); văn bản pháp luật 2026; lộ trình 6 nhóm (T, H, C, D, E, F) và thứ tự làm; Trợ lý lập định mức nguyên vật liệu (đang phân tích).
- Không nêu tên phần mềm của doanh nghiệp khác, không đăng tên / số liệu khách hàng; tài liệu phân tích nội bộ (PDF) không đăng lên website.
- Dữ liệu: `apps/web/src/data/roadmap.ts`; bản quyền: `apps/web/src/data/copyright.ts`; pháp nhân: `apps/web/src/config/site.config.ts`.

# v2.3 (09/10/2026): banner UNESCO XI + AI, tính năng mới đã hoàn thành, số liên hệ mới

## Banner đầu trang chủ
- Thiết kế lại theo mẫu: chữ HTML thật (logo UNESCO nền trong suốt, "UNESCO XI + AI", 2 dòng thông điệp, câu cam kết kiểm soát, 3 điểm bán hàng, 2 nút, liên hệ); màu chủ đạo website (xanh lá, xanh dương, vàng, xanh ngọc), chữ Inter.
- Bên phải: **màn hình chính UNESCO AI** trong khung máy tính, 4 thẻ Hoá đơn điện tử / Sổ phụ ngân hàng / Giá thành / Thuế & Báo cáo, dải "Kế thừa giao diện quen thuộc" với 3 màn hình UNESCO đời cũ (UNESCO 2011, FRM.NET XII 2012, UNESCO XI).
- Thành phần: `apps/web/src/components/HeroBanner.astro`; CSS khối "v2.3" trong `global.css`; ảnh `apps/web/public/banner/`.
- Ảnh banner xuất riêng (không đưa lên web): 1920×768 và 768×900 JPG.

## Tính năng mới đã hoàn thành
- Trang `/phan-tich-tinh-nang/`: 6 nhóm tính năng (T, H, C, D, E, F) và Trợ lý lập định mức chuyển sang "Đã hoàn thành"; bảng năng lực, văn bản 2026, KPI 18 / 18. Menu: "Tính năng mới 2026".

## Số liên hệ (thống nhất toàn website theo banner)
- Kinh doanh – Zalo: 093 3456 567 · Hỗ trợ: 028 3755 5755 – 3755 4755 ext 103-105 (`apps/web/src/data/contact.ts`).
- Cập nhật cả chân màn hình chính UNESCO AI (ảnh) và khung liên hệ PDF "Tính năng ưu việt".

# v2.4 (09/10/2026): lịch sử phần mềm UNESCO từ 1999
- Trang `/ban-quyen/`: 3 giai đoạn pháp nhân – Trung tâm UNESCO Phát triển Công nghệ Thông tin (UCDIT, do Hiệp hội UNESCO thành lập 1999, giải thể 2010) → Công ty Cổ phần Phát triển Phần mềm UNESCO (từ 2011, các thành viên kế thừa và phát triển) → Công ty TNHH Phần mềm UNESCO (hiện nay).
- Mục "Phần mềm kế toán UNESCO từ 1999": dòng thời gian 1999 (UCDIT Accounting Software v1.99, Windows 95/NT), 2000 – 2004 (SAS99, SAS04), 2010, 2011 – 2012, UNESCO XI, hiện nay; kèm ảnh màn hình lưu trữ.
- Ảnh `public/banner/unesco-ucdit-1999.webp`, `unesco-classic-1999.webp`: đã làm mờ tên, địa chỉ, điện thoại, tài khoản ngân hàng, MST của khách hàng và địa chỉ, điện thoại, email cũ của Trung tâm.
- Banner trang chủ: dải "Kế thừa giao diện quen thuộc" có màn hình Chương trình kế toán UNESCO 1999. Trang Giới thiệu cập nhật nguồn gốc 1999.

# v2.5 (09/10/2026): tài liệu GĐ175 – hướng dẫn trực quan 27 chức năng có hình
- PDF mới: Tổng hợp tính năng AI bản GĐ175 (phụ lục thêm GĐ170 – GĐ175); Hướng dẫn sử dụng trực quan GĐ150 – GĐ174 (33 trang, 27 chức năng) – đổi tên tệp thành `huong-dan-truc-quan-gd150-gd174.pdf`, bìa sửa thành CÔNG TY TNHH PHẦN MỀM UNESCO.
- PDF Tính năng ưu việt gửi kèm không đổi nội dung (vẫn GĐ169, chân trang liên hệ cũ) – website giữ bản đã sửa liên hệ và tên công ty.
- Trang Hướng dẫn (`/huong-dan/#truc-quan`): 27 chức năng chia 4 nhóm, mỗi thẻ có ảnh trang hướng dẫn (bấm mở đúng trang trong PDF), đường mở, các bước; lịch "Dùng vào lúc nào" 6 mốc. Ảnh: `apps/web/public/huong-dan/hd-01.webp … hd-27.webp`.
- Có gì mới / Release notes: thêm GĐ170 – GĐ175. Tổng hợp tính năng AI: bản GĐ175, menu Dữ liệu 14 mục.

# v2.5.1 (09/10/2026): bỏ ghi chú kỹ thuật dành cho lập trình viên khỏi tài liệu PDF
- Hướng dẫn trực quan: bỏ dòng "Các chức năng có đổi mã VB6 cần Full Compile + Make .exe…" (trang 3), bỏ khung "Sau mỗi gói cập nhật có đổi VB6" (Đóng VB6, Mở lại Sas.vbp, Full Compile) và sửa "Sau Full Compile + Make .exe" thành "Sau khi cài gói cập nhật", bỏ chữ "Python" (trang 33); ảnh `hd-27.webp` làm lại.
- Tính năng ưu việt: "soát mã VB6 trước khi Make .exe" → "chạy lại mỗi gói cập nhật trước khi phát hành" (trang 2); bỏ "và soát mã VB6" (trang 6).
- Tổng hợp tính năng AI: "cửa sổ công cụ Python" → "các cửa sổ công cụ" (trang 8).
