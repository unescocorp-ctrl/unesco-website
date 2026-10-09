/**
 * PHÂN TÍCH TÍNH NĂNG & LỘ TRÌNH 2026
 * ------------------------------------------------------------------
 * Nguồn: tài liệu nội bộ "Phân tích chi tiết tính năng" (07 – 09/10/2026): phân tích tiện ích AI bổ sung (GĐ150),
 * khảo sát thị trường 10/2026, phân tích định mức nguyên vật liệu thông minh.
 * Nguyên tắc đăng web: không nêu tên sản phẩm của doanh nghiệp khác, không ghi tên / số liệu khách hàng,
 * 09/10/2026: 6 nhóm tính năng mới (T, H, C, D, E, F) và Trợ lý lập định mức đã hoàn thành (xác nhận của doanh nghiệp).
 * c: màu (g xanh lá, t xanh ngọc, b xanh dương, y vàng).
 */

export const analysisDate = '09/10/2026';

export const roadmapKpis = [
  { icon: 'check-circle', c: 'g', v: '18 / 18', d: 'tiện ích AI đề xuất trong phân tích GĐ150 đã hoàn thành' },
  { icon: 'list-checks', c: 'b', v: '7 / 7', d: 'bước của một tháng kế toán đều có AI hỗ trợ' },
  { icon: 'monitor', c: 't', v: 'Trên máy', d: 'lõi AI chạy trên máy – không bắt buộc Internet hay mô hình ngôn ngữ lớn' },
  { icon: 'sparkles', c: 'y', v: '6 nhóm', d: 'tính năng mới 2026 đã hoàn thành, kèm Trợ lý lập định mức' },
];

/** Vòng đời một tháng kế toán: đã có / mới hoàn thành. */
export const lifecycle = [
  {
    icon: 'cloud-upload', t: 'Thu thập chứng từ',
    have: ['Tải hoá đơn từ Cơ quan Thuế theo lịch hẹn; nhập XML, ZIP, bảng kê Excel', 'Đọc ảnh, PDF (OCR); sổ phụ 20 ngân hàng; bảng lương Excel; tờ khai hải quan'],
    next: ['Thu hoá đơn từ hộp thư (.eml, .msg, PDF, XML)', 'Yêu cầu chứng từ còn thiếu từ khách hàng'],
  },
  {
    icon: 'file-check', t: 'Hạch toán',
    have: ['Quy tắc + học lịch sử, tạo mã theo quy ước bộ sổ; xem trước hoặc ghi tự động', 'Chống trùng 4 tầng; TSCĐ, CCDC, 242 từng bước; điểm tin cậy và nút “Vì sao?”'],
    next: ['Tạo chứng từ nháp từ câu lệnh tiếng Việt', 'Đối chiếu đơn mua hàng – hoá đơn – phiếu nhập kho'],
  },
  {
    icon: 'list-checks', t: 'Làm sạch dữ liệu',
    have: ['Màn hình Kiểm soát: trùng mã, công nợ lệch, trả hộ, âm kho, tài khoản không nhất quán', 'Thẻ Bất thường số liệu; gộp mã trùng có xem trước, sao lưu, hoàn tác; bù trừ 131 / 331'],
    next: ['So với ngân sách / kế hoạch thay vì chỉ so trung bình các tháng'],
  },
  {
    icon: 'calendar-clock', t: 'Cuối kỳ & khoá sổ',
    have: ['Checklist kết chuyển, giá thành AI, định mức tự động, tạm tính TNDN', 'Kiểm tra trước khoá sổ, điểm sẵn sàng khoá sổ 0 – 100, sao lưu tự động'],
    next: ['Bút toán cuối tháng tự đề xuất: trích trước, phân bổ, khấu hao', 'Giải trình “vì sao kỳ này khác kỳ trước”', 'Trợ lý lập định mức cho công ty, sản phẩm mới'],
  },
  {
    icon: 'file-xml', t: 'Khai thuế, nộp hồ sơ',
    have: ['01/GTGT, 03/TNDN, 05/TNCN, BCTC → XML vào thẳng HTKK, mở HTKK đúng mã số thuế', 'Đối chiếu hồ sơ đã nộp, số thuế phải nộp; soát rủi ro hoá đơn trước kỳ khai; kết nối BHXH'],
    next: ['Theo dõi mẫu tờ khai mới theo TT 89/2026 trên HTKK', 'Soát thời điểm lập hoá đơn bán ra; nhà cung cấp rủi ro theo danh sách cơ quan thuế', 'Đối chiếu nghĩa vụ thuế theo ID khoản phải nộp; hồ sơ hoàn thuế GTGT'],
  },
  {
    icon: 'bar-chart', t: 'Báo cáo cho chủ doanh nghiệp',
    have: ['Lãi theo mặt hàng / khách hàng, tồn kho thông minh, thuế TNDN dự kiến cả năm', 'Dự báo dòng tiền 4 – 13 tuần; báo cáo chủ doanh nghiệp 1 trang A4'],
    next: ['Hỏi số liệu bằng tiếng Việt', 'Đối chiếu công nợ, nhắc nợ soạn sẵn kèm VietQR', 'So chuẩn ngành ẩn danh'],
  },
  {
    icon: 'layers', t: 'Vận hành nhiều bộ sổ',
    have: ['Bảng điều hành khách hàng: mỗi dòng một bộ sổ, bấm đúp mở đúng sổ', 'Chạy hàng loạt qua đêm – sáng ra có bảng xanh / vàng / đỏ; lịch việc theo nghĩa vụ'],
    next: ['Thư mục chứng từ theo khách – tự nhận dạng tệp', 'Bàn giao bộ sổ / hồ sơ thanh tra một nút; ẩn danh hoá bộ sổ'],
  },
];

/** Lợi thế khác biệt. */
export const edges = [
  { icon: 'user-check', c: 'g', t: 'AI soạn – kế toán duyệt', d: 'Đúng hướng các phần mềm kế toán đang đi năm 2026: AI phân loại, đối chiếu, đề xuất; người duyệt mới ghi sổ. Mỗi đề xuất có điểm tin cậy, căn cứ “Vì sao?”, nhật ký và huỷ được cả lô.' },
  { icon: 'monitor', c: 't', t: 'Chạy trên máy, không bắt buộc Internet', d: 'Lõi AI là bộ quy tắc và học lịch sử ngay trên máy – không bắt buộc mô hình ngôn ngữ lớn. Claude chỉ là tuỳ chọn để viết câu giải trình, không dùng cho số liệu.' },
  { icon: 'scale', c: 'b', t: 'Soát rủi ro theo đúng luật Việt Nam', d: 'Mốc thanh toán 5 triệu không dùng tiền mặt, hoá đơn huỷ / thay thế / điều chỉnh, hoá đơn chưa có mã của cơ quan thuế, hoá đơn có trong sổ mà không có trên cơ quan thuế.' },
  { icon: 'layers', c: 'y', t: 'Thiết kế cho kế toán dịch vụ', d: 'Một màn hình cho mọi bộ sổ, chạy hàng loạt qua đêm, điểm sẵn sàng khoá sổ – nhân hiệu quả của mọi tiện ích lên từng khách hàng.' },
  { icon: 'file-xml', c: 'g', t: 'Tờ khai, BCTC vào thẳng HTKK', d: 'XML theo khuôn học từ HTKK trên máy, xem trước so kỳ trước, mở HTKK đúng mã số thuế. Không ký, không nộp thay.' },
  { icon: 'bar-chart', c: 'b', t: 'Chủ doanh nghiệp nhìn thấy AI', d: 'Lãi theo mặt hàng, tồn kho, dòng tiền, thuế dự kiến gọn trong báo cáo 1 trang – chỉ đọc sổ, không ghi gì.' },
];

/** Bảng năng lực – bản mới nhất. st: co = Đã có, moi = Mới hoàn thành. */
export const capabilities = [
  { t: 'Hạch toán hoá đơn, sổ phụ, lương tự động có xem trước', st: 'co', note: 'Điểm tin cậy, nút “Vì sao?”' },
  { t: 'Kiểm soát trùng mã, trả hộ, âm kho, bất thường số liệu', st: 'co', note: 'Màn hình Kiểm soát 5 thẻ' },
  { t: 'Soát rủi ro hoá đơn theo luật Việt Nam', st: 'co', note: 'Mốc 5 triệu, huỷ / thay thế, đối chiếu cơ quan thuế' },
  { t: 'Điểm sẵn sàng khoá sổ, chạy hàng loạt qua đêm', st: 'co', note: 'Bảng điều hành nhiều bộ sổ' },
  { t: 'Báo cáo chủ doanh nghiệp: lãi, tồn kho, dòng tiền, thuế dự kiến', st: 'co', note: 'Báo cáo 1 trang A4' },
  { t: 'Tờ khai, BCTC vào thẳng HTKK, xem trước so kỳ trước', st: 'co', note: 'Không ký, không nộp thay' },
  { t: 'Hoạt động không cần Internet, không bắt buộc mô hình ngôn ngữ lớn', st: 'co', note: 'Lợi thế riêng' },
  { t: 'Bút toán cuối tháng tự đề xuất (trích trước, phân bổ)', st: 'moi', note: 'Trích trước, phân bổ 242, khấu hao, hoàn nhập – xem trước rồi mới ghi' },
  { t: 'Hộ kinh doanh, doanh nghiệp siêu nhỏ', st: 'moi', note: 'Sổ TT 152/2025, tờ khai 01/CNKD, chế độ kế toán TT 58/2026' },
  { t: 'Gợi ý bộ hồ sơ kèm chứng từ, yêu cầu chứng từ từ khách', st: 'moi', note: 'Đánh dấu đã có / thiếu, thư yêu cầu điền sẵn' },
  { t: 'Đối chiếu công nợ tự động, nhắc nợ soạn sẵn', st: 'moi', note: 'Kèm mã VietQR; người dùng tự gửi' },
  { t: 'Hỏi số liệu bằng tiếng Việt, tạo chứng từ từ câu lệnh', st: 'moi', note: 'Câu hỏi mẫu chỉ đọc; chứng từ nháp luôn xem trước' },
  { t: 'So chuẩn ngành ẩn danh giữa các bộ sổ cùng ngành', st: 'moi', note: 'Không lộ tên khách hàng' },
];

export const statusLabel: Record<string, string> = { co: 'Đã có', moi: 'Mới hoàn thành' };

/** Văn bản 2026 – đã cập nhật / mới hoàn thành. */
export const complianceDone = [
  { t: 'Thuế TNCN từ kỳ 2026', d: 'Giảm trừ gia cảnh 15,5 / 6,2 triệu đồng, biểu thuế 5 bậc – trong bộ tham số năm.' },
  { t: 'Bỏ lệ phí môn bài từ 01/01/2026', d: 'Đã bỏ khỏi lịch nghĩa vụ thuế.' },
  { t: 'Sổ kế toán hộ kinh doanh', d: 'Bộ sổ theo Thông tư 152/2025/TT-BTC.' },
  { t: 'Chế độ kế toán doanh nghiệp', d: 'TT 133/2016 hoặc TT 99/2025 – chọn theo từng bộ sổ.' },
];
export const complianceNext = [
  { t: 'Thông tư 89/2026/TT-BTC (từ 01/7/2026)', d: 'Theo dõi mẫu tờ khai mới xuất hiện trên HTKK, bảng ánh xạ chỉ tiêu mẫu cũ → mẫu mới chuẩn bị sẵn.' },
  { t: 'Nghị định 254/2026/NĐ-CP về hoá đơn', d: 'Soát thời điểm lập hoá đơn bán ra so với ngày giao hàng, nghiệm thu, thu tiền.' },
  { t: 'Thông tư 58/2026/TT-BTC – doanh nghiệp siêu nhỏ', d: 'Chế độ kế toán thứ ba cạnh TT 133 / TT 99: sổ, BCTC ra Excel và XML HTKK.' },
  { t: 'Hộ kinh doanh bỏ thuế khoán', d: 'Lập tờ khai 01/CNKD tháng / quý / năm từ sổ, XML vào HTKK.' },
  { t: 'Biến động lao động hằng tháng', d: 'Tháng có người vào / ra thì thêm việc nộp Trung tâm Dịch vụ việc làm kèm bảng điền sẵn.' },
];

/** Tính năng mới nhất – 6 nhóm đã hoàn thành. */
export const roadmapGroups = [
  {
    id: 'tuan-thu', k: 'T', icon: 'shield-check', c: 'g', t: 'Tuân thủ 2026', sub: 'Theo văn bản mới có hiệu lực năm 2026',
    items: [
      { code: 'T1', t: 'Theo dõi mẫu tờ khai mới trên HTKK', d: 'Phát hiện mẫu theo TT 89/2026 khi HTKK cập nhật; báo ở Việc cần làm và Trợ lý; ánh xạ chỉ tiêu chuẩn bị sẵn.' },
      { code: 'T2', t: 'Chế độ kế toán doanh nghiệp siêu nhỏ', d: 'Thông tư thứ ba cho bộ sổ: sổ, BCTC ra Excel và XML HTKK, tiêu đề mẫu theo TT 58/2026.' },
      { code: 'T3', t: 'Hộ kinh doanh trọn gói', d: 'Hoàn thiện sổ TT 152/2025; 01/CNKD từ sổ; đọc hoá đơn máy tính tiền; GTGT / TNCN theo tỷ lệ ngành.' },
      { code: 'T4', t: 'Thông báo biến động lao động', d: 'Từ danh sách nhân viên / bảng lương: tháng có người vào / ra thì nhắc việc kèm bảng điền sẵn.' },
      { code: 'T5', t: 'Đối chiếu nghĩa vụ thuế', d: 'Đọc bảng tra cứu nghĩa vụ thuế người dùng tải về, so với tài khoản 333x; báo nộp thừa, chậm nộp, chưa bù trừ.' },
      { code: 'T6', t: 'Soát thời điểm lập hoá đơn', d: 'Hoá đơn bán ra so ngày xuất kho, nghiệm thu, thu tiền; gộp hoá đơn máy tính tiền cuối ngày.' },
      { code: 'T7', t: 'Hồ sơ hoàn thuế GTGT', d: 'Kiểm điều kiện hoàn, lập phụ lục và danh mục chứng từ; không nộp thay.' },
    ],
  },
  {
    id: 'hoa-don-ncc', k: 'H', icon: 'receipt', c: 't', t: 'Hoá đơn & nhà cung cấp', sub: 'Chặn rủi ro trước khi khấu trừ',
    items: [
      { code: 'H1', t: 'Nhà cung cấp rủi ro', d: 'Đối chiếu mã số thuế người bán trong kỳ với danh sách doanh nghiệp rủi ro người dùng tải về; đánh dấu kèm hướng xử lý.' },
      { code: 'H2', t: 'Gợi ý bộ hồ sơ hợp lệ', d: 'Theo loại nghiệp vụ: hợp đồng, biên bản nghiệm thu, phiếu nhập, chứng từ thanh toán – đánh dấu đã có / thiếu; xuất hồ sơ giải trình.' },
      { code: 'H3', t: 'Thu hoá đơn từ hộp thư', d: 'Kéo thư (.eml, .msg) hoặc PDF / XML vào thư mục: tự nhận hoá đơn, gộp vào luồng tải, chống trùng.' },
      { code: 'H4', t: 'Đối chiếu đơn mua hàng – hoá đơn – nhập kho', d: 'Khớp số lượng, đơn giá hoá đơn với đơn mua hàng và phiếu nhập; lệch thì vào Cần xem lại.' },
    ],
  },
  {
    id: 'cong-no', k: 'C', icon: 'wallet', c: 'b', t: 'Công nợ & dòng tiền', sub: 'Chủ doanh nghiệp thấy ngay',
    items: [
      { code: 'C1', t: 'Đối chiếu công nợ tự động', d: 'Thư đối chiếu từng đối tượng (tuổi nợ 30 / 60 / 90, mã VietQR), xuất hàng loạt; đọc biên bản khách gửi lại, báo lệch.' },
      { code: 'C2', t: 'Nhắc nợ soạn sẵn', d: 'Danh sách khách quá hạn kèm nội dung nhắc điền sẵn số hoá đơn, số tiền, VietQR; người dùng tự gửi.' },
      { code: 'C3', t: 'Việc cần làm với công nợ mỗi sáng', d: 'Khách sắp quá hạn, nhà cung cấp đến hạn; đề xuất thứ tự trả theo dòng tiền 4 tuần.' },
    ],
  },
  {
    id: 'dong-so', k: 'D', icon: 'calendar-clock', c: 'y', t: 'Đóng sổ liên tục & giải trình', sub: 'Khép vòng cuối tháng',
    items: [
      { code: 'D1', t: 'Bút toán cuối tháng tự đề xuất', d: 'Trích trước chi phí chưa có hoá đơn, phân bổ 242, khấu hao, hoàn nhập – bảng xem trước, người ghi; hoá đơn về thì tự đối trừ.' },
      { code: 'D2', t: 'Giải trình chênh lệch kỳ', d: '“Vì sao doanh thu / chi phí / thuế kỳ này khác kỳ trước”: phân rã theo tài khoản đối ứng, khách hàng, nhà cung cấp, vật tư.' },
      { code: 'D3', t: 'So ngân sách / kế hoạch', d: 'Nhập ngân sách năm theo tài khoản, tháng; báo cáo chủ doanh nghiệp và cảnh báo so với ngân sách.' },
      { code: 'D4', t: 'Kết nối sao kê tự động', d: 'Lấy sao kê qua kết nối ngân hàng doanh nghiệp (khi có hợp đồng) thay vì tải tệp; vẫn qua lưới sổ phụ để duyệt.' },
    ],
  },
  {
    id: 'tro-ly', k: 'E', icon: 'chat', c: 'g', t: 'Trợ lý & hỏi đáp', sub: 'Hỏi bằng tiếng Việt – an toàn, chỉ đọc',
    items: [
      { code: 'E1', t: 'Hỏi số liệu bằng tiếng Việt', d: '“Khách nào nợ quá 60 ngày”, “doanh thu tháng 9 theo mặt hàng” – chạy bộ câu hỏi mẫu chỉ đọc, không tự sinh truy vấn.' },
      { code: 'E2', t: 'Tạo chứng từ từ câu lệnh', d: '“Lập phiếu chi 5 triệu trả tiền điện tháng 9” → phiếu nháp mở trên màn hình gốc, luôn xem trước.' },
      { code: 'E3', t: 'Tìm báo cáo theo mục đích', d: 'Hỏi “muốn xem gì” → mở đúng báo cáo và kỳ, dựa trên kho Trợ lý hơn 1.600 mục.' },
      { code: 'E4', t: 'Cổng dữ liệu chỉ đọc cho trợ lý AI', d: 'Tuỳ chọn: cho trợ lý AI trên máy đọc số đếm, báo cáo đã lập để trả lời; không bao giờ ghi.' },
    ],
  },
  {
    id: 'ke-toan-dich-vu', k: 'F', icon: 'users', c: 't', t: 'Kế toán dịch vụ & khách hàng', sub: 'Khác biệt cho công ty dịch vụ kế toán',
    items: [
      { code: 'F1', t: 'Yêu cầu chứng từ từ khách', d: 'Danh sách thứ còn thiếu → thư / tin nhắn điền sẵn và thư mục nhận; tệp về tự xếp vào bộ đọc; Bảng điều hành hiện khách còn nợ chứng từ.' },
      { code: 'F2', t: 'So chuẩn ngành ẩn danh', d: 'Nhiều bộ sổ cùng ngành: trung vị biên lãi gộp, chi phí / doanh thu, số ngày thu nợ – cột “so với ngành”, không lộ tên khách.' },
      { code: 'F3', t: 'Bàn giao bộ sổ / hồ sơ thanh tra', d: 'Một nút: sổ bắt buộc, BCTC, tờ khai đã nộp, bảng kê, biên bản đối chiếu – Excel và PDF có mục lục.' },
      { code: 'F4', t: 'Ẩn danh hoá bộ sổ', d: 'Đổi tên, mã số thuế, địa chỉ để demo, kiểm thử, gửi hỗ trợ mà không lộ khách hàng.' },
    ],
  },
];

/** Nguyên tắc giữ nguyên cho mọi tính năng mới. */
export const roadmapRules = [
  'Chỉ đọc là mặc định; tính năng ghi sổ đi qua đúng lớp ghi của phần mềm, có xem trước, sao lưu, hoàn tác.',
  'Không vượt captcha, không lưu mật khẩu, không ký / nộp thay – việc với cơ quan thuế, BHXH, dịch vụ việc làm do người dùng gửi.',
  'Lõi không cần Internet hay mô hình ngôn ngữ lớn; tham số pháp luật đọc từ bộ tham số năm; mỗi gói có bộ kiểm thử riêng.',
];

/* ---------- Trợ lý lập định mức nguyên vật liệu (đã hoàn thành) ---------- */

export const bomLevels = [
  { k: '0', t: 'Công ty hoàn toàn mới', have: 'Chưa có chứng từ', how: 'Mẫu ngành + hỏi 3 câu + đọc tài liệu kỹ thuật' },
  { k: '1', t: 'Có hoá đơn mua NVL, bán thành phẩm', have: 'Danh mục NVL, giá, sản phẩm, giá bán', how: 'Tỷ lệ giá bán + cơ cấu NVL từ hoá đơn mua + cân bằng khối lượng' },
  { k: '2', t: 'Đã sản xuất 1 – 3 tháng', have: 'Lượng xuất, sản lượng, điện', how: 'Giải ngược định mức từ thực tế, nhiều mã cùng lúc' },
  { k: '3', t: 'Sổ đang chạy, thêm sản phẩm mới', have: 'Định mức mã khác', how: 'Sản phẩm tương tự (đã có) + các nguồn trên để kiểm chéo' },
];

export const bomSteps = [
  { icon: 'building', t: 'Công ty làm gì?', d: 'Chọn ngành – AI gợi ý từ tên công ty, sản phẩm bán ra' },
  { icon: 'package', t: 'Nguyên liệu của mình?', d: 'NVL tách từ hoá đơn mua, đã chia nhóm – chỉ tick sửa' },
  { icon: 'list-checks', t: 'Sản phẩm cần định mức', d: 'Xếp theo giá trị, tách gram / ml / kích thước, gom nhóm' },
  { icon: 'paperclip', t: 'Tài liệu sẵn có', d: 'Kéo thả Excel, ảnh, PDF – không có thì bỏ qua' },
  { icon: 'sparkles', t: 'AI đề xuất', d: 'Lượng / 1 đơn vị, nguồn, độ tin cậy, kiểm hợp lý' },
  { icon: 'file-check', t: 'Xem, sửa, ghi', d: 'Mã xanh ghi hàng loạt, vàng hỏi từng nhóm, đỏ không ghi' },
  { icon: 'refresh', t: 'Sau tháng đầu', d: 'So với thực tế, đề xuất hiệu chỉnh – bấm chấp nhận' },
];

export const bomEngines = [
  { t: 'Tài liệu khách hàng (Excel, BOM, ảnh)', p: 90 },
  { t: 'Giải ngược từ thực tế nhiều tháng', p: 80 },
  { t: 'Sản phẩm tương tự cùng sổ', p: 75 },
  { t: 'Cân bằng khối lượng / thể tích', p: 70 },
  { t: 'Tri thức ngành nội bộ, ẩn danh (từ 3 sổ cùng nhóm)', p: 65 },
  { t: 'Tỷ lệ giá vốn / giá bán', p: 60 },
  { t: 'Mẫu ngành đóng kèm – chỉ khởi tạo, luôn đánh vàng', p: 30 },
];

export const bomIndustries = {
  first: ['Nhựa gia dụng – bao bì nhựa', 'Cơ khí – kết cấu kim loại theo đơn hàng', 'Nội thất gỗ – kim loại', 'Hoá mỹ phẩm – hàng gia dụng tiêu dùng', 'Thực phẩm – bánh – đồ uống'],
  next: ['May mặc – giày dép', 'Bao bì giấy – in ấn', 'Xây dựng – thi công', 'Chế biến gỗ – đồ gỗ', 'Vật liệu xây dựng – bê tông, gạch'],
};
