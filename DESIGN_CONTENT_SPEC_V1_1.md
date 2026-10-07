# DESIGN & CONTENT SPEC — UNESCO WEBSITE V1.1

## Mục tiêu
Nâng source V1 từ prototype kỹ thuật thành website marketing có ngôn ngữ hình ảnh và nội dung thống nhất, nhưng không thay đổi API, database hay route đã chốt.

## Visual direction
- Corporate Accounting + AI, nền sáng, dễ đọc.
- Màu chính: #0B9444, #00A884, #0078D7, điểm nhấn #F4C542.
- Không dùng neon quá mức, không dùng ảnh stock kế toán chung chung.
- Visual chính là SVG vector tự sở hữu, tối ưu responsive và không phụ thuộc tài nguyên bên ngoài.

## Visual assets V1.1
- `/visuals/hero-ai-accounting.svg`: trung tâm điều hành kế toán.
- `/visuals/invoice-ai.svg`: luồng AI hóa đơn.
- `/visuals/bank-ai.svg`: AI sổ phụ ngân hàng.
- `/visuals/cost-accounting.svg`: giá thành sản xuất/xây dựng.
- `/visuals/solutions-ai.svg`: sơ đồ giải pháp theo loại hình.
- `/og-default.svg`: ảnh chia sẻ mạng xã hội mặc định.

## Content hierarchy
1. Nêu bài toán kế toán.
2. Nêu cách UNESCO xử lý.
3. Chỉ rõ dữ liệu nào là nguồn và dữ liệu nào là AI gợi ý.
4. Tạo CTA demo/tư vấn/download phù hợp.
5. Không dùng khẳng định tuyệt đối hoặc số liệu thương mại chưa xác minh.

## CTA chuẩn
- Primary: ĐĂNG KÝ XEM DEMO
- Product: XEM UNESCO XI + AI
- Sales: YÊU CẦU BÁO GIÁ
- Download: TẢI BỘ CÀI
- Support: GỬI YÊU CẦU HỖ TRỢ

## Trang ưu tiên đã nâng V1.1
- Trang chủ
- UNESCO XI
- UNESCO XI + AI
- AI kế toán
- AI hóa đơn
- AI sổ phụ ngân hàng
- Giá thành
- Kế toán dịch vụ
- Bảng giá
- Download Center
- Hướng dẫn
- Kiến thức
- Video
- Giới thiệu

## Quy tắc hình ảnh production
- Screenshot phần mềm thật được ưu tiên hơn mock khi có dữ liệu demo đã ẩn danh.
- Không dùng ảnh hóa đơn/sổ phụ của khách hàng thật nếu chưa được phép công bố.
- Tất cả ảnh phải có alt text.
- Hero asset ưu tiên AVIF/WebP nếu là raster; SVG cho illustration/icon.
- Không nhúng base64 ảnh lớn trực tiếp vào HTML.
