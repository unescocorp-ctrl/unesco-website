/**
 * ẢNH GIAO DIỆN PHẦN MỀM KẾ TOÁN UNESCO AI (UNESCO XI + AI)
 * ------------------------------------------------------------------
 * Nguồn: bộ ảnh "UNESCO_XI_AI_TOAN_BO_ANH_FINAL" và thư mục GIAO DIỆN (F:\GIOI THIEU HUONG DAN UNESCO XI).
 * Trước khi đưa lên web đã che: mã số thuế trên đầu màn hình, tên doanh nghiệp của bộ dữ liệu mẫu,
 * đường dẫn tệp dữ liệu, số hợp đồng vay và tên cá nhân trong sổ phụ.
 * Ảnh nằm ở public/screenshots/<tên>.webp (rộng tối đa 1600px).
 *
 * MUỐN ĐỔI ẢNH: chép ảnh mới (.webp, .png hoặc .jpg) vào public/screenshots/ rồi sửa `src`, `width`, `height` bên dưới.
 */
export type Shot = {
  src: string;       // đường dẫn tệp, ví dụ '/screenshots/ai-tu-dong-xu-ly.webp'
  width: number;
  height: number;
  title: string;     // chữ trên thanh tiêu đề khung ảnh
  alt: string;
  caption: string;
  desc: string;
};

const s = (name: string, width: number, height: number, title: string, caption: string, desc: string, alt?: string): Shot => ({
  src: `/screenshots/${name}.webp`, width, height, title, caption, desc, alt: alt ?? `${caption} – phần mềm kế toán UNESCO AI`,
});

export const shots = {
  // ── Màn hình chính ────────────────────────────────────────────
  mainScreen: s('man-hinh-chinh-unesco-ai', 1536, 1024, 'UNESCO Accounting System', 'Màn hình chính UNESCO AI',
    '9 phân hệ kế toán quanh trung tâm Báo cáo – Sổ kế toán; ô UCDIT AI mở màn hình AI.',
    'Màn hình chính phần mềm kế toán UNESCO AI với 9 phân hệ và khung trợ lý AI'),

  // ── Màn hình AI: 8 thẻ nghiệp vụ ──────────────────────────────
  autoProcess: s('ai-tu-dong-xu-ly', 1600, 841, 'UNESCO AI – Tự động xử lý', 'Thẻ Tự động xử lý',
    'Bốn ô kiểm soát kết quả AI, Bước 1 tạo mã còn thiếu, Bước 2 lập chứng từ, sổ phụ – bảng lương và quy trình xử lý tự động.',
    'Màn hình AI của UNESCO AI: thẻ Tự động xử lý với các ô Chờ duyệt, Chưa phân tích, Không xử lý, Cần xem lại'),
  invoiceList: s('ai-danh-sach-hoa-don', 1600, 900, 'UNESCO AI – Danh sách hoá đơn', 'Thẻ Danh sách hoá đơn',
    'Trạng thái, chứng từ đã lập, điểm tin cậy của AI và từng dòng hàng kèm mã vật tư, tài khoản, nguồn ghép.'),
  customs: s('ai-to-khai-hai-quan', 1600, 900, 'UNESCO AI – Tờ khai HQ', 'Thẻ Tờ khai hải quan nhập khẩu',
    'Đọc tờ khai nhập khẩu từ tệp Excel, ghép mã hàng – nhà cung cấp, phân bổ chi phí và lập chứng từ.'),
  bank: s('ai-so-phu-ngan-hang', 1600, 900, 'UNESCO AI – Sổ phụ ngân hàng', 'Thẻ Sổ phụ ngân hàng',
    'AI xếp nhóm nghiệp vụ, tìm tài khoản đối ứng và đối tác cho từng giao dịch; kế toán sửa, xác nhận rồi lập phiếu.'),
  payroll: s('ai-bang-luong', 1600, 900, 'UNESCO AI – Bảng lương & chứng từ khác', 'Thẻ Bảng lương & chứng từ khác',
    'Nhập bảng lương Excel, đối chiếu và lập chứng từ lương, tạm ứng, thu – chi khác.'),
  closing: s('ai-ket-chuyen-cuoi-ky', 1600, 900, 'UNESCO AI – Kết chuyển cuối kỳ', 'Thẻ Kết chuyển cuối kỳ',
    'Danh sách việc cuối kỳ: phân bổ công cụ dụng cụ, chi phí trả trước, khấu hao TSCĐ – thực hiện tất cả trong một lần.'),
  reports: s('ai-bao-cao-nhat-ky', 1600, 900, 'UNESCO AI – Báo cáo & nhật ký', 'Thẻ Báo cáo & nhật ký',
    'Thuế GTGT, thuế TNDN, báo cáo tài chính, sổ kế toán, biểu mẫu chứng từ; các lô AI đã lập và nhật ký 30 ngày.'),
  publicPortal: s('ai-cong-dich-vu-cong', 1448, 1086, 'UNESCO AI – Cổng dịch vụ công', 'Thẻ Cổng dịch vụ công',
    'Lấy dữ liệu từ Cổng dịch vụ công Thuế: thông báo, hồ sơ khai thuế, nghĩa vụ thuế về phần mềm để đối chiếu.'),

  // ── Tải hoá đơn hàng loạt ─────────────────────────────────────
  bulkDownload: s('hd-tai-hang-loat', 1600, 900, 'Tải hoá đơn hàng loạt', 'Tải hoá đơn hàng loạt từ Cơ quan Thuế',
    'Đăng nhập, tra cứu theo kỳ, chọn hoá đơn mới, tải XML/PDF và đưa thẳng vào màn hình AI để phân tích.'),
  retailSummary: s('hd-tong-hop-ban-le', 1600, 900, 'Tổng hợp hoá đơn bán lẻ', 'Tổng hợp hoá đơn bán lẻ thành 1 chứng từ',
    'Gộp hoá đơn máy tính tiền theo ngày, vài ngày hoặc tuần; mỗi nhóm thành một chứng từ bảng kê bán lẻ.'),
  downloadResult: s('hd-ket-qua-tai', 1600, 900, 'Kết quả tải hàng loạt', 'Kết quả tải hàng loạt',
    'Tiến trình, số hoá đơn mới – đã có, tệp XML, PDF, Excel và trạng thái chuyển sang UNESCO.'),

  // ── Giá thành có AI ───────────────────────────────────────────
  costBalance: s('gt-ket-chuyen-can-doi-ai', 1600, 900, 'Kết chuyển thành phẩm – Cân đối AI', 'Kết chuyển thành phẩm & Cân đối AI',
    'Chi phí NVL, nhân công, sản xuất chung của tháng; khung Cân đối AI kiểm sản lượng, điện và nguyên vật liệu thiếu.'),
  costAdjust: s('gt-dieu-chinh-san-luong', 1600, 900, 'Điều chỉnh sản lượng thành phẩm', 'Chọn thành phẩm tăng',
    'AI gợi ý tăng sản lượng theo điện dư; gõ số, số âm hoặc phần trăm ngay trên bảng, tự kiểm tra NVL và đơn giá.'),
  costMaterial: s('gt-nvl-thieu', 1600, 900, 'NVL thiếu theo định mức', 'Xử lý nguyên vật liệu thiếu',
    'So lượng cần theo định mức với tồn đầu, nhập trong tháng; chọn cách xử lý rồi tính lại.'),
  costAutoNorm: s('gt-dinh-muc-tu-dong', 1600, 900, 'Định mức tự động cho sản phẩm', 'Định mức tự động bằng AI',
    'Sản phẩm mới chưa có định mức: AI lập từ sản phẩm tương tự, từ thực tế xuất kho hoặc theo tỷ lệ giá bán.'),
  costSteps: s('gt-trinh-tu-7-buoc', 1180, 1000, 'Giá thành – Trình tự giá thành tháng', 'Trình tự giá thành 7 bước (đèn màu)',
    'Mỗi bước có đèn xanh / vàng / đỏ / xám theo số của sổ; nút Làm bước này mở đúng màn hình. Hình trong Hướng dẫn trực quan, số đỏ là chú thích.'),
  costByObject: s('gt-theo-doi-tuong', 1600, 900, 'Giá thành theo đối tượng (Thông tư 133)', 'Giá thành theo đối tượng',
    'Phân bổ chi phí 1541, 1542, 1543 cho từng công trình, lô hoặc sản phẩm; xem trước kết quả trước khi bật.'),

  // ── Nhân sự – lương – bảo hiểm ────────────────────────────────
  hrDashboard: s('ns-bang-dieu-hanh', 1600, 900, 'Tổng quan lao động & bảo hiểm', 'Bảng điều hành nhân sự',
    'Số lao động, hợp đồng sắp hết hạn, cơ cấu nhân sự, cảnh báo BHXH và quy trình xử lý nhanh.'),
  hrPayroll: s('ns-bang-luong-bh', 1600, 900, 'Bảng lương & trích nộp bảo hiểm', 'Bảng lương & bảo hiểm',
    'Lương cơ bản, phụ cấp, BHXH, BHYT, BHTN, KPCĐ theo từng nhân viên; tính lương và lập chứng từ.'),
  hrInsurance: s('ns-dang-ky-bhxh', 1600, 900, 'Đăng ký BHXH / BHYT / BHTN', 'Đăng ký BHXH tích hợp AI',
    'Danh sách đăng ký, trạng thái hồ sơ và gợi ý của AI về các trường hợp cần bổ sung.'),

  // ── Báo cáo – sổ sách ─────────────────────────────────────────
  vatReport: s('bc-thue-gtgt', 1600, 900, 'Báo cáo thuế GTGT', 'Báo cáo thuế GTGT',
    'Bảng kê hoá đơn mua vào, bán ra, tờ khai và các báo cáo thuế theo tháng hoặc quý.'),
  ledgers: s('bc-so-ke-toan', 1600, 900, 'Sổ kế toán', 'Báo cáo – Sổ kế toán',
    'Nhật ký chung, sổ cái, sổ chi tiết và báo cáo quản trị; xem, in hoặc xuất Excel.'),

  // ── Các phân hệ kế toán (giao diện mới) ───────────────────────
  modInventory: s('ph-vat-tu', 1600, 900, 'Vật tư hàng hoá', 'Phân hệ Vật tư – Hàng hoá',
    'Mua hàng, nhập khẩu, bán hàng, xuất kho, luân chuyển nội bộ và các báo cáo kho.'),
  modDebt: s('ph-cong-no', 1600, 900, 'Công nợ khách hàng', 'Phân hệ Công nợ',
    'Công nợ đầu kỳ, thu nợ, trả nợ, báo cáo chi tiết; danh mục khách hàng, tài khoản công nợ, lãi suất, ngoại tệ.'),
  modCost: s('ph-chi-phi', 1600, 900, 'Chi phí', 'Phân hệ Chi phí – Tổng hợp',
    'Nhập chi phí tổng hợp, tra cứu chứng từ, phiếu thu – chi, tính giá xuất ngoại tệ.'),
  modAsset: s('ph-tai-san', 1600, 900, 'Tài sản cố định', 'Phân hệ Tài sản cố định',
    'Tài sản đầu kỳ, nhập tăng, đánh giá lại, giảm tài sản, khấu hao và sổ TSCĐ.'),
  modTools: s('ph-ccdc', 1600, 900, 'Công cụ dụng cụ', 'Phân hệ Công cụ dụng cụ – Chi phí trả trước',
    'Nhập tăng, phân bổ, giảm công cụ dụng cụ và chi phí trả trước; sổ CCDC.'),
} satisfies Record<string, Shot>;

export type ShotKey = keyof typeof shots;
