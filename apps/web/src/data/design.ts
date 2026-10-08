/**
 * NỘI DUNG THEO BỘ THIẾT KẾ WEBSITE (Master Website Report, 21 trang)
 * ------------------------------------------------------------------
 * Dùng chung cho trang chủ và các trang sản phẩm. Tên sản phẩm trên website: UNESCO AI.
 * icon: tên biểu tượng trong components/Icon.astro; c: màu (g xanh lá, t xanh ngọc, b xanh dương, y vàng).
 */

/** 5 giá trị dưới phần mở đầu trang chủ. */
export const heroValues = [
  { icon: 'cloud-upload', c: 'g', t: 'Tự động thu thập', d: 'Hoá đơn điện tử, sổ phụ ngân hàng, tờ khai và dữ liệu giao dịch.' },
  { icon: 'puzzle', c: 't', t: 'Xử lý & ghép mã', d: 'AI đọc hiểu, ghép mã, đề xuất hạch toán kèm điểm tin cậy.' },
  { icon: 'clipboard-check', c: 'b', t: 'Hỗ trợ nghiệp vụ', d: 'Lập chứng từ, kiểm tra khoá sổ, giá thành, tờ khai và BCTC.' },
  { icon: 'user-check', c: 'y', t: 'Kế toán kiểm tra', d: 'Rà soát, điều chỉnh, xem trước rồi mới ghi sổ.' },
  { icon: 'shield-check', c: 'g', t: 'Kiểm soát & lưu vết', d: 'Nhật ký đầy đủ; mỗi lần AI lập chứng từ là một lô có thể huỷ.' },
];


/** Evidence / Benchmark – số liệu đo trên bộ sổ, hồ sơ thật hoặc bộ kiểm thử (tài liệu Tính năng ưu việt bản GĐ169).
 *  vis: ring (tỷ lệ), bars (so sánh hai số), icon (biểu tượng). src: nguồn đo. */
export const evidence = [
  { c: 'g', v: '1,7 giây', d: 'phân tích 59 hoá đơn mua vào (86 dòng hàng) trên bộ sổ thật', vis: 'icon', icon: 'timer', p: 100, a: 0, b: 0, src: 'Bộ sổ thật sau bản tối ưu tốc độ' },
  { c: 'g', v: '3.823 / 3.823', d: 'dòng bán ra mang mã hàng được ghép đúng mã ngay', vis: 'ring', icon: '', p: 100, a: 0, b: 0, src: 'Hoá đơn bán ra thật của một doanh nghiệp sản xuất' },
  { c: 'b', v: '786 / 1.027', d: 'dòng sao kê thật nhận ra tên người trả', vis: 'bars', icon: '', p: 76.5, a: 786, b: 1027, src: 'Sao kê ngân hàng thật 1.027 dòng' },
  { c: 't', v: '148 → 0', d: 'dòng treo 1388 trên 213 dòng sổ phụ thật', vis: 'icon', icon: 'check-circle', p: 100, a: 0, b: 0, src: 'Sổ phụ ngân hàng thật' },
  { c: 't', v: '1.022 dòng', d: 'dòng trùng bị chặn khi nhập lại sổ phụ – chỉ nhận 5 dòng mới', vis: 'icon', icon: 'shield-lock', p: 100, a: 0, b: 0, src: 'Mô phỏng nhập lại sổ phụ thật lần hai' },
  { c: 'y', v: '31 / 31', d: 'dòng chi lương viết tắt nhận đúng nhóm', vis: 'ring', icon: '', p: 100, a: 0, b: 0, src: 'Sao kê ngân hàng thật' },
  { c: 'b', v: '74 / 74', d: 'chỉ tiêu B01a-DNN (TT133) khớp BCTC thật năm 2025, lệch 0 đồng', vis: 'ring', icon: '', p: 100, a: 0, b: 0, src: 'BCTC thật năm 2025' },
  { c: 'g', v: '0 lệch', d: '28 ràng buộc 03/TNDN trên tờ khai quyết toán thật 2025', vis: 'icon', icon: 'scale', p: 100, a: 0, b: 0, src: 'Tờ khai quyết toán thật năm 2025' },
  { c: 'b', v: '1.252 tờ khai', d: 'HTKK của một mã số thuế đọc trong 3 – 4,5 giây', vis: 'icon', icon: 'file-xml', p: 100, a: 0, b: 0, src: 'Dữ liệu HTKK thật trên máy, chỉ đọc' },
];

/** AI LÀM / AI KHÔNG LÀM (tài liệu Tổng hợp tính năng AI bản GĐ169). */
export const aiDo = [
  { icon: 'file-search', t: 'Tải và đọc hoá đơn, sổ phụ, tờ khai, thông báo, dữ liệu HTKK' },
  { icon: 'puzzle', t: 'Ghép mã, đề xuất tài khoản, định mức, tỷ lệ – để người duyệt' },
  { icon: 'file-check', t: 'Lập chứng từ qua đúng lớp ghi của phần mềm – tồn kho, công nợ, giá vốn y hệt nhập tay' },
  { icon: 'scale', t: 'Đối chiếu, soát ràng buộc, so kỳ trước, báo lệch' },
  { icon: 'alert', t: 'Chỗ không chắc: đánh dấu Cần xem lại để người quyết' },
  { icon: 'bar-chart', t: 'Lập báo cáo quản trị, dự báo, kịch bản – chỉ đọc sổ' },
];
export const aiDont = [
  { icon: 'key', t: 'Không vượt captcha' },
  { icon: 'lock', t: 'Không lưu mật khẩu hay chữ ký số' },
  { icon: 'pen-off', t: 'Không ký thay, không nộp hồ sơ thay' },
  { icon: 'calculator', t: 'Không tự sửa số dư, số liệu sổ khi thấy lệch – chỉ báo' },
  { icon: 'file-xml', t: 'Không ghi đè tờ khai đã có trong HTKK; không tự gửi báo cáo' },
  { icon: 'file-text', t: 'Không tự xoá, tự sửa chứng từ nhập tay' },
];

/** Giải pháp theo ngành. */
export const industries = [
  { icon: 'users', c: 'g', t: 'Kế toán dịch vụ', d: 'Một đội ngũ kế toán – nhiều doanh nghiệp – một quy trình xử lý thống nhất.', href: '/giai-phap/ke-toan-dich-vu/' },
  { icon: 'building', c: 'b', t: 'Doanh nghiệp', d: 'Chuẩn hoá sổ sách, kiểm soát chi phí và ra quyết định kịp thời.', href: '/giai-phap/doanh-nghiep/' },
  { icon: 'cart', c: 'g', t: 'Thương mại', d: 'Mua hàng – bán hàng – công nợ trên một quy trình liền mạch; tờ khai hàng nhập khẩu.', href: '/nghiep-vu/mua-vao/' },
  { icon: 'store', c: 'g', t: 'Bán lẻ', d: 'Gộp hoá đơn máy tính tiền theo ngày, công nợ kèm mã VietQR.', href: '/giai-phap/ban-le/' },
  { icon: 'package', c: 'y', t: 'Thương mại điện tử', d: 'Nhiều hoá đơn, nhiều giao dịch, đối soát tiền về thường xuyên.', href: '/giai-phap/thuong-mai-dien-tu/' },
  { icon: 'factory', c: 'b', t: 'Sản xuất', d: 'Tính giá thành chính xác, kiểm soát vật tư và định mức sản xuất.', href: '/giai-phap/san-xuat/' },
  { icon: 'crane', c: 't', t: 'Xây dựng', d: 'Giá thành theo công trình, hạng mục; phân bổ chi phí 1541, 1542, 1543.', href: '/giai-phap/xay-dung/' },
];

/** Năm nhóm sản phẩm chính (trang Sản phẩm). */
export const productPillars = [
  { icon: 'file-check', c: 'g', t: 'Hoá đơn', href: '/ai-ke-toan/ai-hoa-don/' },
  { icon: 'bank', c: 't', t: 'Sổ phụ', href: '/ai-ke-toan/ai-so-phu-ngan-hang/' },
  { icon: 'calculator', c: 'b', t: 'Giá thành', href: '/ai-ke-toan/ai-gia-thanh/' },
  { icon: 'file-xml', c: 'y', t: 'Tờ khai & BCTC', href: '/to-khai-bctc/' },
  { icon: 'shield-check', c: 'g', t: 'Kiểm soát AI', href: '/an-toan-kiem-soat-ai/' },
];
