/**
 * NỘI DUNG PHẦN MỀM KẾ TOÁN UNESCO AI (UNESCO XI + AI)
 * ------------------------------------------------------------------
 * Soạn từ lời đọc 8 video hướng dẫn module M01–M08, kịch bản M09–M14 (bản phần mềm GĐ110b, 10/2026)
 * và tài liệu "Giới thiệu phần mềm kế toán UNESCO AI".
 * Nguyên tắc xuyên suốt: AI chuẩn bị và đề xuất — chứng từ chỉ ghi khi kế toán đồng ý.
 */
import type { ShotKey } from './screenshots';

export type AiTab = {
  key: string; n: number; icon: string; ic: string; title: string; shot: ShotKey; video?: string;
  lead: string; points: string[];
};

/** 8 thẻ nghiệp vụ trên màn hình AI (theo đúng thứ tự trên phần mềm). */
export const aiTabs: AiTab[] = [
  {
    key: 'tu-dong-xu-ly', n: 1, icon: '⚙️', ic: 'settings', title: 'Tự động xử lý', shot: 'autoProcess', video: 'm04-tu-dong-xu-ly',
    lead: 'Bảng điều khiển hoá đơn mua vào – bán ra: tải, phân tích, tạo mã còn thiếu và lập chứng từ hàng loạt.',
    points: [
      'Bốn ô kiểm soát: Chờ duyệt, Chưa phân tích, Không xử lý, Cần xem lại',
      'Bước 1 – AI phát hiện mặt hàng, nhà cung cấp, khách hàng chưa có mã và gợi ý mã, tài khoản',
      'Bước 2 – Xác nhận & xem trước: từng hoá đơn mở trên màn hình chứng từ quen thuộc, đã điền sẵn',
      'Học từ chứng từ cũ để AI hạch toán giống cách doanh nghiệp đã làm',
    ],
  },
  {
    key: 'danh-sach-hoa-don', n: 2, icon: '🧾', ic: 'receipt', title: 'Danh sách hoá đơn', shot: 'invoiceList', video: 'm03-danh-sach-hoa-don',
    lead: 'Soi từng hoá đơn: trạng thái, chứng từ đã lập, điểm tin cậy và nguồn ghép mã của AI.',
    points: [
      'Lọc theo tháng hoặc khoảng ngày, sắp xếp theo cột bất kỳ',
      'Từng dòng hàng: mã vật tư AI đã ghép, tài khoản, tính chất, nguồn ghép, điểm tin cậy',
      'Lập CT hoá đơn này, Gắn chứng từ có sẵn, Bỏ qua/huỷ, Xem XML, Sửa hàng loạt dòng hàng',
      'Kiểm tra trạng thái trên cơ quan thuế để phát hiện hoá đơn bị huỷ, bị thay thế',
    ],
  },
  {
    key: 'to-khai-hai-quan', n: 3, icon: '🚢', ic: 'ship', title: 'Tờ khai hải quan', shot: 'customs', video: 'to-khai-hai-quan',
    lead: 'Đọc tờ khai nhập khẩu từ tệp Excel (bản in VNACCS/ECUS), ghép mã hàng – nhà cung cấp, phân bổ chi phí vào giá vốn.',
    points: [
      'Đọc số tờ khai, ngày thông quan, trị giá ngoại tệ, tỷ giá, thuế NK, TTĐB, GTGT',
      'Ghép người xuất khẩu với nhà cung cấp có sẵn; chưa có thì AI tạo mới, theo dõi công nợ nguyên tệ',
      'Dòng hàng ghi rõ cách ghép: có sẵn, gợi ý hoặc mới',
      'Chi phí nhập hàng Nợ 1562 phân bổ vào giá vốn hàng nhập khẩu',
    ],
  },
  {
    key: 'so-phu-ngan-hang', n: 4, icon: '🏦', ic: 'bank', title: 'Sổ phụ ngân hàng', shot: 'bank', video: 'm05-so-phu-ngan-hang',
    lead: 'Đưa sao kê vào phần mềm, AI đọc từng giao dịch, xếp nhóm, tìm đối tác và tài khoản đối ứng rồi lập phiếu báo có, báo nợ.',
    points: [
      'Đọc tệp Excel, CSV, PDF có chữ của các ngân hàng phổ biến; ảnh chụp và PDF dạng ảnh chuyển sang Excel',
      'Đối chiếu số tài khoản và chủ tài khoản với công ty đang mở; nhập lại tệp cũ không tạo dòng trùng',
      'Nhóm nghiệp vụ: chuyển nội bộ, rút tiền mặt, thu khách hàng, trả nhà cung cấp, lương, vay…',
      'Công nợ kèm mã VietQR: thông báo công nợ cho từng khách, khách quét mã chuyển đúng số tiền, đúng nội dung',
    ],
  },
  {
    key: 'bang-luong', n: 5, icon: '👥', ic: 'users', title: 'Bảng lương & chứng từ khác', shot: 'payroll',
    lead: 'Nhập bảng lương Excel, đối chiếu và lập chứng từ lương; chứng từ tạm ứng, thu – chi khác.',
    points: [
      'Nhập bảng lương, đối chiếu từng phần và xuất Excel đối chiếu lương',
      'Tạo nhân viên còn thiếu, chọn nhân viên cho dòng chưa có mã',
      'Lập chứng từ lương (334x/338x) từ bảng lương AI',
      'Chứng từ khác: lương, tạm ứng, thu – chi',
    ],
  },
  {
    key: 'ket-chuyen-cuoi-ky', n: 6, icon: '🔄', ic: 'refresh', title: 'Kết chuyển cuối kỳ', shot: 'closing',
    lead: 'Danh sách việc cuối kỳ cho công cụ dụng cụ, chi phí trả trước 242, khấu hao TSCĐ — thấy ngay việc nào đã làm, việc nào chưa làm.',
    points: [
      'Bảng việc cuối kỳ theo tháng kèm số tiền từng việc',
      'Chi tiết hoá đơn CCDC / 242 / TSCĐ: đã ghi sổ hay chưa, chứng từ số mấy',
      'Hoá đơn có TSCĐ, CCDC: gợi ý loại, số năm, số kỳ phân bổ trước khi lập chứng từ',
      'Thực hiện tất cả, xuất Excel sổ chi tiết',
    ],
  },
  {
    key: 'bao-cao-nhat-ky', n: 7, icon: '📊', ic: 'bar-chart', title: 'Báo cáo & nhật ký', shot: 'reports', video: 'm06-bao-cao-nhat-ky',
    lead: 'Gom việc cuối kỳ: tờ khai thuế, báo cáo tài chính, sổ sách, kiểm tra trước khoá sổ và nhật ký những gì AI đã làm.',
    points: [
      'Xuất 01/GTGT: xem trước từng chỉ tiêu, cảnh báo lệch với sổ, xuất tệp XML để nhập vào HTKK',
      'Báo cáo tài chính B01, B02, B03, B09; quyết toán TNDN 03/TNDN và XML HTKK BCTC',
      'Kiểm tra khoá sổ: hơn 20 phép kiểm tra, kết quả Đạt/Lỗi/Cảnh báo kèm cách xử lý',
      'Các lô AI đã lập (huỷ cả lô khi lập sai) và nhật ký 30 ngày gần nhất',
    ],
  },
  {
    key: 'cong-dich-vu-cong', n: 8, icon: '🏛️', ic: 'globe', title: 'Cổng dịch vụ công', shot: 'publicPortal',
    lead: 'Tải dữ liệu từ Cổng dịch vụ công Thuế về phần mềm để tra cứu và đối chiếu — chỉ tra cứu, không nộp hay ký thay.',
    points: [
      'Tra cứu thông báo, giấy nộp tiền, hồ sơ khai thuế đã nộp, nghĩa vụ thuế',
      'Mở văn bản đính kèm của thông báo ngay trong phần mềm',
      'Lấy bảng đang mở trên cổng, công cụ tự lật trang',
      'Đối chiếu nộp thuế với sổ phụ ngân hàng',
    ],
  },
];

/** Quy trình xử lý tự động mỗi tháng (khung bên phải thẻ Tự động xử lý). */
export const aiFlow = [
  { t: 'Tải hoá đơn', d: 'Tải mua vào – bán ra từ Cơ quan Thuế; hoá đơn tự vào màn hình AI.' },
  { t: 'Phân tích hoá đơn', d: 'AI đọc dữ liệu, kiểm tra tính hợp lệ, chấm điểm tin cậy.' },
  { t: 'So khớp danh mục', d: 'Đối chiếu với mã vật tư hàng hoá, nhà cung cấp, khách hàng.' },
  { t: 'Đề xuất mã & chứng từ', d: 'Gợi ý mã còn thiếu, tài khoản, định khoản theo quy tắc hạch toán.' },
  { t: 'Kế toán xem trước & Ghi', d: 'Chứng từ chỉ ghi khi kế toán đồng ý; lập sai thì huỷ cả lô.' },
];

/** Bốn ô số kiểm soát kết quả AI. */
export const aiCounters = [
  { cls: 'lg-green', t: 'Chờ duyệt', d: 'Hoá đơn đã phân tích nhưng chưa có chứng từ.' },
  { cls: 'lg-gold', t: 'Chưa phân tích', d: 'Hoá đơn vừa tải về, AI chưa xử lý.' },
  { cls: 'lg-red', t: 'Không xử lý', d: 'Hoá đơn huỷ, bị thay thế, điều chỉnh hoặc ngoài năm tài chính — xử lý tay.' },
  { cls: 'lg-blue', t: 'Cần xem lại', d: 'Lệch tiền với chứng từ, nghi trùng hoặc cơ quan thuế đổi trạng thái sau khi đã hạch toán.' },
];

/** Công cụ tải hoá đơn hàng loạt (Module 02). */
export const invoiceDownload = [
  { t: 'Đăng nhập an toàn', d: 'Tự gõ mã số thuế, mật khẩu, mã xác nhận; công cụ không lưu mật khẩu và chỉ tải khi tài khoản cùng MST với bộ sổ đang mở.' },
  { t: 'Đồng bộ cả kỳ', d: 'Lấy cả mua vào và bán ra theo tháng hoặc quý; kỳ dài được chia từng tháng rồi gộp lại.' },
  { t: 'Hoá đơn máy tính tiền', d: 'Tra cứu cả hoá đơn điện tử và hoá đơn có mã khởi tạo từ máy tính tiền.' },
  { t: 'Tải hoá đơn gốc (XML), PDF, Excel', d: 'XML là bản gốc để kê khai, PDF để lưu trữ; hoá đơn đã có thì bỏ qua, lỗi mạng tự thử lại.' },
  { t: 'Gộp hoá đơn bán lẻ', d: 'Gộp hoá đơn bán cho người không có MST theo ngày, vài ngày hoặc tuần thành chứng từ bảng kê bán lẻ (BKBL).' },
  { t: 'Định khoản AI – Bước 5', d: 'Xem tài khoản Nợ/Có, thuế, cách thanh toán của từng hoá đơn; sửa, lưu và xuất Excel để soát trước khi lập.' },
];

/** Hộp nhập sổ phụ (nút Import trên thẻ Sổ phụ ngân hàng) – 6 cách nhập. */
export const bankImport = [
  'Một tệp sổ phụ: bảng Excel, tệp văn bản (CSV) hoặc PDF có chữ',
  'Cả thư mục nhiều tệp',
  'Ảnh chụp hoặc PDF dạng ảnh chuyển thành tệp Excel sổ phụ tô màu để kiểm tra',
  'Dịch nội dung không dấu sang tiếng Việt có dấu',
  'Cài đặt / kiểm tra Google Document AI (khoá cài sẵn, đã mã hoá)',
  'Chép công cụ đọc ảnh Tesseract sang máy khác (không cần mạng)',
];

/** Giá thành có AI (Module 07). */
export const costAi = {
  checks: [
    { t: 'Sản lượng so với lượng bán', d: 'Lấy danh sách thành phẩm đã xuất bán trong tháng từ nhập – xuất – tồn.' },
    { t: 'Điện theo định mức so với thực tế', d: 'Chi tiết điện tiêu hao = số lượng × định mức kWh của từng mã.' },
    { t: 'Nguyên vật liệu thiếu', d: 'So lượng cần theo định mức với tồn đầu, nhập trong tháng và xuất khác.' },
  ],
  autoNorm: [
    'Từ sản phẩm tương tự, nhân hệ số quy đổi theo tên',
    'Từ thực tế xuất kho các tháng trước',
    'Theo tỷ lệ phần trăm giá bán',
  ],
  shortage: ['Ghi nhớ nhập tạm', 'Lưu chuyển kho', 'Thay nguyên vật liệu cho tháng này', 'Giảm sản lượng theo NVL thiếu nhất'],
  catalog: [
    'Phân loại lô sản xuất', 'Danh sách lô sản xuất', 'Định mức NVL cho công trình và sản phẩm', 'Phân bổ chi phí công trình',
    'Hồ sơ định mức giá thành', 'Định mức tự động cho sản phẩm', 'Chuẩn hoá dữ liệu giá thành', 'Giá thành theo đối tượng (TT133)',
  ],
};

/** Trợ lý AI ngay trên màn hình (Module 08). */
export const assistant = [
  { t: 'Việc nên làm tiếp', d: 'Đọc số liệu của bộ sổ và liệt kê việc cần làm kèm nút phải bấm.' },
  { t: 'Đang xem', d: 'Rê chuột lên nút hay ô nào, trợ lý giải thích ngay: làm gì, khi nào dùng, cần lưu ý gì.' },
  { t: 'Hơn 1.600 mục soạn sẵn', d: 'F1 ở mọi màn hình mở đúng mục; bấm ? rồi bấm nút để xem hướng dẫn thay vì chạy; dùng được khi không có Internet.' },
  { t: 'Hỏi bằng tiếng Việt', d: 'Tuỳ chọn, cần khoá dịch vụ AI bên ngoài: gõ câu hỏi như “huỷ chứng từ đã lập thế nào?” – chỉ gửi câu hỏi, mục hướng dẫn liên quan và vài số đếm.' },
  { t: 'Chỉ hướng dẫn', d: 'Trợ lý không tự bấm nút hay ghi sổ thay kế toán.' },
];

/** Kích hoạt AI (Module 12). */
export const activation = [
  'Một mã kích hoạt dùng cho mọi tính năng AI: màn hình AI, chuyển PDF sang Excel, trích xuất sổ phụ, Cân đối AI, giá thành theo đối tượng, tờ khai hải quan, nhập hoá đơn từ bảng kê Excel',
  'Phần kế toán UNESCO XI vẫn dùng bình thường, không cần mã',
  'Mỗi trang ảnh chụp hoặc PDF dạng ảnh chuyển sang Excel trừ vào số trang của mã; tệp Excel và CSV không tính',
  'Mã cấp theo gói 1, 3, 6 tháng, 1, 2 năm hoặc vĩnh viễn, kèm số lượng công ty được tính theo mã số thuế',
  'Khoá AI 3 chế độ: đã kích hoạt / dùng thử 15 ngày / chỉ xem; mã yêu cầu riêng từng máy',
  'Kích hoạt không cần Internet; còn 7 ngày phần mềm nhắc gia hạn',
];

export const customerCodeRules = [
  { k: 'Ưu tiên mã có sẵn', v: 'Tìm đúng đối tượng theo MST, tài khoản ngân hàng, tên chuẩn hoá hoặc lịch sử đã duyệt — có thì dùng mã hiện hữu, không sinh mã mới.' },
  { k: 'MST 10 số', v: 'Đề xuất 4 số cuối của MST; nếu trùng thì dùng 5 số cuối.' },
  { k: 'MST chi nhánh', v: 'Dạng 0123456789-001: ghép 4 số cuối MST gốc với 001, ví dụ 6789001.' },
  { k: 'Không có MST', v: 'Chữ viết tắt của tên + số tăng dần; bắt buộc người dùng xác nhận.' },
  { k: 'Không trùng', v: 'Mã mới không trùng mã hiện có và mã đang chờ duyệt; giữ nguyên số 0 đầu.' },
  { k: 'Duyệt mã khách hàng mới', v: 'Mã khách AI đề xuất từ sổ phụ nằm chờ duyệt cho tới khi kế toán xác nhận.' },
];

export const aiSafety = {
  allowed: [
    'Tải, đọc và phân tích hoá đơn, sổ phụ, tờ khai, bảng lương',
    'Đề xuất mã, tài khoản, định khoản kèm điểm tin cậy và nguồn ghép',
    'Mở chứng từ điền sẵn để kế toán xem trước rồi bấm Ghi',
    'Ghi nhớ cách kế toán sửa để lần sau gợi ý đúng hơn',
    'Ghi nhật ký mọi lần tải, nhập, phân tích, xuất tệp',
  ],
  forbidden: [
    'Ghi sổ khi kế toán chưa đồng ý (Tự động ghi chỉ chạy khi được bật, với hoá đơn tin cậy từ 90 điểm)',
    'Xoá chứng từ nhập tay — chỉ huỷ được chứng từ do AI lập',
    'Lưu mật khẩu cổng thuế',
    'Ký hoặc nộp tờ khai thay doanh nghiệp',
    'Nhập trùng hoá đơn, nhập sổ phụ của công ty khác',
  ],
};
