/**
 * TÍNH NĂNG ƯU VIỆT CỦA UNESCO AI
 * ------------------------------------------------------------------
 * Nguồn: tài liệu "Tính năng ưu việt của UNESCO AI" bản GĐ169 (09/10/2026) của Công ty TNHH Phần mềm UNESCO.
 * Số liệu đo trên bộ sổ, hồ sơ thật (đã ẩn tên khách hàng) hoặc từ bộ kiểm thử đi kèm từng bản cập nhật.
 * Sắp xếp lại cho website: 16 điểm ưu việt chia 4 nhóm; 12 mục chi tiết; bảng nguồn số liệu.
 */
import type { ShotKey } from './screenshots';

export const release = { code: 'GĐ169', date: '09/10/2026' };

/** 4 con số nổi bật đầu trang. */
export const kpis = [
  { v: '1,7 giây', d: 'phân tích 59 hoá đơn mua vào (86 dòng hàng) trên bộ sổ thật', icon: 'timer', c: 'g' },
  { v: '74 / 74', d: 'chỉ tiêu B01a-DNN (TT133) khớp báo cáo tài chính thật năm 2025, lệch 0 đồng', icon: 'check-circle', c: 'b' },
  { v: '1.252 tờ khai', d: 'HTKK của một mã số thuế đọc một lần trong vài giây', icon: 'file-xml', c: 't' },
  { v: '1.600+', d: 'mục hướng dẫn Trợ lý AI soạn sẵn, F1 ở mọi màn hình, không cần Internet', icon: 'chat', c: 'y' },
];

/** Một tháng kế toán với UNESCO AI – 7 bước đúng thứ tự công việc. who: g = AI xử lý, b = kế toán duyệt, n = kế toán thực hiện. */
export const month7 = [
  { icon: 'cloud-upload', t: 'Tải hoá đơn', d: 'Mua vào, bán ra, máy tính tiền – chọn cả năm tự chia theo tháng.', who: 'g' },
  { icon: 'puzzle', t: 'Ghép mã & lập chứng từ', d: 'Học từ lần kế toán đã duyệt; xem trước hoặc ghi tự động khi đủ tin cậy.', who: 'b' },
  { icon: 'bank', t: 'Sổ phụ & lương', d: 'Đọc sao kê, nhận người trả, khớp công nợ mở, chi lương.', who: 'g' },
  { icon: 'calculator', t: 'Giá thành', d: 'Trình tự 7 bước đèn màu, định mức theo tỷ lệ giá bán, Cân đối AI.', who: 'b' },
  { icon: 'shield-check', t: 'Khoá sổ & kiểm soát', d: 'Điểm sẵn sàng khoá sổ, màn hình Kiểm soát 5 thẻ, sao lưu tự động.', who: 'b' },
  { icon: 'file-xml', t: 'Thuế & HTKK', d: 'Tự lấy số kỳ trước, xem trước rồi mới đưa vào HTKK; thuế TNCN đủ bộ.', who: 'n' },
  { icon: 'bar-chart', t: 'Báo cáo chủ doanh nghiệp', d: 'Lãi, tồn kho, dòng tiền, thuế dự kiến – gọn trong một trang A4.', who: 'g' },
];

export type Advantage = { n: number; icon: string; t: string; d: string; isNew: boolean; href: string };
export type AdvantageGroup = { key: string; t: string; c: string; items: Advantage[] };

/** 16 điểm ưu việt (10 điểm nền tảng + 6 điểm mới), xếp theo 4 nhóm lợi ích. */
export const advantageGroups: AdvantageGroup[] = [
  {
    key: 'chung-tu', t: 'Tự động hoá chứng từ', c: 'g', items: [
      { n: 1, icon: 'file-check', t: 'Hoá đơn về sổ trong vài phút', d: 'Tải, phân tích, lập chứng từ mua vào / bán ra ngay trong UNESCO; xem trước hoặc tự động.', isNew: false, href: '#hoa-don' },
      { n: 2, icon: 'puzzle', t: 'Ghép mã càng dùng càng đúng', d: 'Mã hàng trên hoá đơn, lịch sử duyệt; hàng giống nhau chỉ gợi ý, không tự gộp.', isNew: false, href: '#ghep-ma' },
      { n: 3, icon: 'receipt', t: 'Hoá đơn chi phí không sinh mã rác', d: 'Ăn uống, xăng dầu, dịch vụ nhận ra theo cả hoá đơn, hạch toán thẳng chi phí.', isNew: false, href: '#ghep-ma' },
      { n: 4, icon: 'bank', t: 'Sổ phụ đọc như kế toán', d: 'Người trả, dãy số hoá đơn, lương viết tắt; khớp theo công nợ mở; VietQR.', isNew: false, href: '#so-phu' },
    ],
  },
  {
    key: 'thue', t: 'Thuế & tuân thủ', c: 'b', items: [
      { n: 5, icon: 'refresh', t: 'Thuế khép vòng với HTKK', d: 'Kỳ trước tự lấy; xem trước – so kỳ trước – kiểm chéo rồi mới vào HTKK; nhập toàn bộ HTKK theo MST.', isNew: true, href: '#thue-htkk' },
      { n: 6, icon: 'file-xml', t: 'Tờ khai đúng khuôn HTKK', d: 'Khuôn XML học từ HTKK trên máy; lệch 1 đồng ở ràng buộc là dừng, không ghi tệp.', isNew: false, href: '#thue-htkk' },
      { n: 7, icon: 'folder-check', t: 'Hồ sơ thuế trong một tab', d: 'Tờ khai đã nộp, thông báo, đối chiếu sổ, số phải nộp, hạn nộp tính cả ngày lễ.', isNew: false, href: '#thue-htkk' },
      { n: 8, icon: 'users', t: 'Lao động – BHXH liền mạch', d: 'D02-LT, TK1-TS, 01/PLI từ bảng lương; đối chiếu BHXH hằng tháng; hợp đồng lao động điền sẵn.', isNew: true, href: '#lao-dong-bhxh' },
    ],
  },
  {
    key: 'quan-tri', t: 'Giá thành, kiểm soát & quản trị', c: 't', items: [
      { n: 9, icon: 'calculator', t: 'Giá thành có người dẫn đường', d: '7 bước đèn màu, định mức theo tỷ lệ giá bán AI đề xuất, Cân đối NVL – điện.', isNew: false, href: '#gia-thanh' },
      { n: 10, icon: 'list-checks', t: 'Kiểm soát trước khi khoá sổ', d: 'Trùng mã, trả hộ, âm kho, bất thường số liệu; điểm sẵn sàng 0 – 100; gộp mã hoàn tác được.', isNew: true, href: '#kiem-soat' },
      { n: 11, icon: 'bar-chart', t: 'Báo cáo cho chủ doanh nghiệp', d: 'Lãi theo mặt hàng / khách hàng, tồn kho thông minh, thuế TNDN dự kiến, dòng tiền 13 tuần.', isNew: true, href: '#bao-cao-chu-dn' },
      { n: 12, icon: 'layers', t: 'Một người, nhiều bộ sổ', d: 'Bảng điều hành khách hàng, chạy hàng loạt qua đêm, lịch việc thuế – BHXH tự nhắc.', isNew: true, href: '#nhieu-bo-so' },
    ],
  },
  {
    key: 'an-toan', t: 'An toàn & vận hành', c: 'y', items: [
      { n: 13, icon: 'shield-check', t: 'Ranh giới AI không vượt', d: 'Không vượt captcha, không lưu mật khẩu, không ký / nộp thay, không tự sửa nhập tay.', isNew: false, href: '#ranh-gioi' },
      { n: 14, icon: 'chat', t: 'Trợ lý giải thích từng nút', d: 'Hơn 1.600 mục soạn sẵn, F1 ở mọi màn hình, dùng được khi không có Internet.', isNew: false, href: '#tro-ly' },
      { n: 15, icon: 'key', t: 'Vận hành gọn, được bảo vệ', d: 'Kích hoạt theo máy / gói, cập nhật có chữ ký số, sao lưu trước khi cài.', isNew: false, href: '#van-hanh' },
      { n: 16, icon: 'clipboard-check', t: 'Mỗi gói được kiểm trước khi giao', d: 'Hơn 18.000 phép kiểm tự động chạy lại mỗi gói cập nhật; soát mã nguồn trước khi đóng gói.', isNew: true, href: '#van-hanh' },
    ],
  },
];

export type Metric = { v: string; d: string };
export type Detail = { id: string; n: string; icon: string; t: string; sub: string; points: string[]; metrics: Metric[]; note?: string; href?: string; link?: string; shot?: ShotKey; isNew?: boolean };

/** 12 mục chi tiết. */
export const details: Detail[] = [
  {
    id: 'hoa-don', n: '01', icon: 'file-check', t: 'Hoá đơn điện tử: tải về là thành chứng từ',
    sub: 'Từ cổng hoá đơn điện tử đến phiếu nhập, phiếu xuất, chứng từ chi phí – không gõ lại một con số.',
    points: [
      'Tải mua vào, bán ra và hoá đơn máy tính tiền; kế toán tự đăng nhập và gõ captcha; mỗi mã số thuế một hồ sơ Chrome riêng.',
      'Phân tích xong là biết việc: mỗi hoá đơn một màu – thiếu mã, sẵn sàng lập, cần xem lại; Bước 1 tạo mã còn thiếu hàng loạt, Bước 2 lập chứng từ.',
      'Nghiệp vụ khó đã có đường đi: hoá đơn thay thế, điều chỉnh, vừa hàng vừa dịch vụ, bán hàng tồn kho tự sinh giá vốn, bán lẻ gộp theo ngày, tài sản / CCDC / 242 mở màn hình gốc điền sẵn.',
      'Nút “Vì sao?” giải thích căn cứ AI từng hoá đơn; chỉ chuyển vào sổ khi tài khoản đúng quy tắc màn hình nhập và đúng tháng hoá đơn.',
    ],
    metrics: [
      { v: '1,7 giây', d: 'phân tích 59 hoá đơn mua (86 dòng) trên bộ sổ thật' },
      { v: '~1 giây', d: 'mở màn hình AI (0,6 – 1,0 giây sau tối ưu)' },
      { v: '61 lần dò', d: 'cho 1.110 dòng bán ra nhờ nhớ kết quả theo tên hàng' },
    ],
    href: '/ai-ke-toan/ai-hoa-don/', link: 'Xem AI Hoá đơn', shot: 'invoiceList',
  },
  {
    id: 'ghep-ma', n: '02', icon: 'puzzle', t: 'Ghép mã thông minh – càng dùng càng đúng',
    sub: 'Chỗ nào không chắc thì hỏi người.',
    points: [
      'Mã hàng in trên hoá đơn được dùng trước tiên; hàng mua vào học theo cặp MST nhà cung cấp + mã hàng.',
      'Hàng tương tự chỉ gợi ý – con số trong tên phải khớp (ly 600 ml khác ly 650 ml).',
      'Quy đổi đơn vị tính tự học hệ số; tạo mã mới theo quy tắc của công ty.',
      'Hoá đơn chi phí (ăn uống, xăng dầu, dịch vụ) được chấm điểm theo cả hoá đơn – từ 60 điểm hạch toán thẳng vào chi phí, không sinh mã vật tư rác.',
    ],
    metrics: [{ v: '3.823 / 3.823', d: 'dòng bán ra mang mã hàng trên hoá đơn được ghép đúng mã ngay – trước đây hơn 1.000 dòng bị ghép gần đúng (đo trên bộ sổ thật của một doanh nghiệp sản xuất)' }],
    href: '/ai-ke-toan/ai-ma-khach-hang/', link: 'Quy tắc mã khách hàng / NCC',
  },
  {
    id: 'so-phu', n: '03', icon: 'bank', t: 'Sổ phụ ngân hàng đọc như một kế toán',
    sub: 'Nội dung chuyển khoản viết tắt, dính chữ – AI đọc ra người trả, số hoá đơn và khớp đúng công nợ.',
    points: [
      'Excel, CSV, PDF; ảnh / PDF scan qua OCR Offline (không gửi ảnh ra ngoài) hoặc Google Document AI – luôn vào Cần xem lại, bắt buộc khớp số dư.',
      'Khớp theo công nợ mở của từng đối tác; không tự phân bổ khi thiếu / dư; học bí danh người trả.',
      'Mã VietQR trên thông báo công nợ; bảng lương khớp lệnh chi theo số thực nhận; nhập lại file cũ không tạo dòng trùng.',
    ],
    metrics: [
      { v: '786 / 1.027', d: 'dòng sao kê thật nhận ra tên người trả' },
      { v: '148 → 0', d: 'dòng treo 1388 trên 213 dòng sổ phụ thật' },
      { v: '31 / 31', d: 'dòng chi lương viết tắt nhận đúng nhóm' },
    ],
    href: '/ai-ke-toan/ai-so-phu-ngan-hang/', link: 'Xem AI Sổ phụ', shot: 'bank',
  },
  {
    id: 'thue-htkk', n: '04', icon: 'refresh', t: 'Thuế khép vòng với HTKK', isNew: true,
    sub: 'Từ số kỳ trước đến tờ khai đã nộp: tự lấy, tự soát, người quyết định chép vào HTKK.',
    points: [
      'Xuất 01/GTGT tự lấy chỉ tiêu [22] = [43] kỳ trước, người ký, cơ quan thuế – không còn hộp chọn tệp.',
      'Xem trước khi đưa vào HTKK cho mọi tờ khai: so kỳ trước, kiểm số chuyển kỳ, kiểm chéo trong kỳ; kỳ đã có thì không ghi đè.',
      'Thuế TNCN đủ bộ: 05/KK quý, 05/QTT năm kèm bảng kê, 05-ĐKT-TH, đối chiếu với sổ.',
      'Nhập toàn bộ HTKK theo MST: một lần đọc mọi tờ khai – số dư tài khoản cuối năm so sổ, lỗ chuyển, [22] kỳ sau, TNCN, BCTC năm trước.',
      'Khuôn XML học từ chính HTKK trên máy; lệch 1 đồng ở ràng buộc là dừng; phụ lục giảm thuế tính đúng từng đồng.',
      'Hồ sơ thuế trong một tab: tờ khai đã nộp, trạng thái, thông báo, đối chiếu 01/GTGT với sổ; hạn nộp tự lùi qua thứ Bảy, Chủ nhật, ngày lễ.',
    ],
    metrics: [
      { v: '74 / 74', d: 'chỉ tiêu B01a-DNN khớp BCTC thật 2025' },
      { v: '0 lệch', d: '28 ràng buộc 03/TNDN trên tờ khai thật 2025' },
      { v: '3 – 4,5 giây', d: 'đọc 927 – 1.252 tờ khai HTKK của một MST' },
      { v: '~280 tệp', d: 'bản sao tên “(1).xml” khác tệp gốc – nay đọc đúng tệp HTKK đang mở' },
    ],
    href: '/to-khai-bctc/', link: 'Xem Tờ khai & BCTC',
  },
  {
    id: 'gia-thanh', n: '05', icon: 'calculator', t: 'Giá thành có người dẫn đường',
    sub: 'Kế toán biết tháng này còn thiếu bước nào, và số có hợp lý không – trước khi ghi sổ.',
    points: [
      'Trình tự 7 bước đèn màu (xanh / vàng / đỏ / xám) bằng số của sổ; nút “Làm bước này” mở đúng màn hình.',
      'Định mức theo tỷ lệ giá bán: AI đề xuất tỷ lệ giá vốn / giá bán từ thực tế 3 tháng, sản phẩm tương tự hoặc mẫu ngành – có giá bán là có định mức.',
      'Cân đối AI trên Kết chuyển thành phẩm: NVL thiếu theo định mức, điện theo sản lượng, đề xuất xử lý theo thứ tự; chỉ làm khi kế toán xác nhận.',
      'Báo cáo kiểm tra giá thành: so giá bán, kỳ trước, mục tiêu; cảnh báo giá thành bằng 0, cao hơn giá bán, đổi trên 25%.',
      'Giá thành theo đối tượng TT133 / TT99: 1541 / 1542 / 1543 giữ tại đối tượng, dở dang theo đối tượng.',
    ],
    metrics: [],
    href: '/ai-ke-toan/ai-gia-thanh/', link: 'Xem AI Giá thành', shot: 'costSteps',
  },
  {
    id: 'bao-cao-chu-dn', n: '06', icon: 'bar-chart', t: 'Báo cáo cho chủ doanh nghiệp', isNew: true,
    sub: 'Từ số sổ sách sang câu trả lời chủ doanh nghiệp cần – chỉ đọc sổ, không ghi gì.',
    points: [
      'Lãi theo mặt hàng / khách hàng: lãi gộp, lãi sau phân bổ; cảnh báo bán lỗ, chưa có giá vốn, khách lãi mỏng mà trả chậm.',
      'Tồn kho thông minh: chậm luân chuyển, cần đặt hàng kèm lượng đề xuất, NVL sắp thiếu, phân nhóm ABC.',
      'Thuế TNDN dự kiến cả năm kèm kịch bản mua tài sản, thưởng cuối năm, chi bị loại; tạm nộp tối thiểu 80%; cảnh báo ngưỡng doanh thu 3 tỷ / 50 tỷ.',
      'Báo cáo 1 trang A4 – in / lưu PDF gửi Zalo; dự báo dòng tiền 4 – 13 tuần theo thói quen trả tiền học từ lịch sử.',
    ],
    metrics: [],
  },
  {
    id: 'kiem-soat', n: '07', icon: 'list-checks', t: 'Kiểm soát trước khi khoá sổ', isNew: true,
    sub: 'Lỗi dữ liệu được tìm ra trước khi thành số trên báo cáo.',
    points: [
      'Màn hình Kiểm soát 5 thẻ: trùng mã, công nợ lệch / trả hộ, vật tư trùng mã / âm kho, tài khoản không nhất quán, bất thường số liệu.',
      'Gộp mã trùng có xem trước, sao lưu, hoàn tác; xử lý trả hộ, bù trừ 131 / 331 qua chứng từ.',
      'Điểm sẵn sàng khoá sổ 0 – 100 kèm việc còn lại; sao lưu tự động mỗi ngày và trước việc lớn.',
      'Soát rủi ro hoá đơn trước kỳ khai: 5 nhóm rủi ro, mỗi dòng có cách xử lý.',
    ],
    metrics: [],
  },
  {
    id: 'nhieu-bo-so', n: '08', icon: 'layers', t: 'Một người, nhiều bộ sổ', isNew: true,
    sub: 'Dành cho kế toán dịch vụ làm nhiều công ty.',
    points: [
      'Bảng điều hành khách hàng: mỗi dòng một bộ sổ – chứng từ đến tháng nào, hoá đơn / sổ phụ chưa hạch toán, tháng đã khoá.',
      'Chạy hàng loạt qua đêm: sáng ra có bảng đỏ / vàng / xanh và việc cần làm cho từng sổ.',
      'Quản lý công việc: lịch thuế, BCTC, BHXH, lao động theo tháng – quý – năm; việc thực tế đã xong / còn phải làm.',
      'Bộ tham số năm: lương tối thiểu, BHXH, giảm trừ gia cảnh theo ngày hiệu lực, dùng chung mọi báo cáo.',
    ],
    metrics: [],
    href: '/giai-phap/ke-toan-dich-vu/', link: 'Giải pháp kế toán dịch vụ',
  },
  {
    id: 'lao-dong-bhxh', n: '09', icon: 'users', t: 'Lao động – BHXH liền mạch', isNew: true,
    sub: 'Từ bảng lương đến hồ sơ BHXH và hợp đồng lao động.',
    points: [
      'Cổng Kết nối BHXH: D02-LT, TK1-TS, TK3-TS, 01/PLI, bảng tính đóng từ danh sách nhân viên và bảng lương.',
      'Đối chiếu BHXH hằng tháng; nhập danh sách nhân viên từ danh sách BHXH.',
      'Hợp đồng lao động, phụ lục theo Bộ luật Lao động 2019 điền sẵn từ hồ sơ nhân viên.',
    ],
    metrics: [],
    shot: 'hrInsurance',
  },
  {
    id: 'tro-ly', n: '10', icon: 'chat', t: 'Trợ lý AI ngay trên màn hình',
    sub: 'Hỏi phần mềm thay vì tìm tài liệu.',
    points: [
      'Rê chuột lên nút là có giải thích; bấm ? rồi bấm nút để xem hướng dẫn thay vì chạy; F1 mở đúng mục.',
      'Hơn 1.600 mục soạn sẵn cho mọi module – dùng được khi không có Internet; hướng dẫn sử dụng tổng hợp và hướng dẫn trực quan lập lại mỗi gói.',
      'Hỏi tự do bằng tiếng Việt (tuỳ chọn, cần khoá Claude API): chỉ gửi câu hỏi, mục hướng dẫn liên quan và vài số đếm.',
    ],
    metrics: [],
    href: '/huong-dan/', link: 'Trung tâm hướng dẫn',
  },
  {
    id: 'ranh-gioi', n: '11', icon: 'shield-check', t: 'Ranh giới AI không bao giờ vượt',
    sub: 'Hiểu đúng ranh giới thì dùng mới yên tâm.',
    points: [],
    metrics: [],
    note: 'Chống trùng là lớp chặn, không phải lớp sửa: hoá đơn nhận theo khoá MST người bán – mẫu số – ký hiệu – số; mọi lô AI ghi đều có nhật ký và huỷ được cả lô.',
    href: '/an-toan-kiem-soat-ai/', link: 'An toàn & kiểm soát AI',
  },
  {
    id: 'van-hanh', n: '12', icon: 'key', t: 'Vận hành gọn và được bảo vệ',
    sub: 'Phần kế toán dùng bình thường không cần mã; AI kích hoạt theo máy, theo gói.',
    points: [
      'Khoá AI 3 chế độ: đã kích hoạt / dùng thử / chỉ xem; mã yêu cầu riêng từng máy.',
      'Cập nhật tự động qua kênh có chữ ký số (mạng nội bộ, thư mục đồng bộ, Internet); kiểm từng tệp, sao lưu trước khi chép.',
      'Thông tư theo bộ sổ: TT133/2016 hoặc TT99/2025 quyết định sổ sách, báo cáo, tài khoản mặc định.',
      'Lõi AI là bộ quy tắc và học lịch sử – không bắt buộc Claude API; nhật ký che mật khẩu, số tài khoản chỉ ghi 4 số cuối.',
    ],
    metrics: [{ v: '18.000+', d: 'phép kiểm tự động (185 tệp kiểm thử) chạy lại mỗi gói cập nhật trước khi giao' }],
    href: '/download/', link: 'Download Center',
  },
];

/** Các con số trong tài liệu đến từ đâu. */
export const sources = [
  ['1,7 giây / 59 hoá đơn; mở màn hình AI ~1 giây', 'Bộ sổ thật của khách hàng sau bản tối ưu tốc độ (GĐ31)'],
  ['3.823 / 3.823 dòng bán ra có mã hàng', 'Hoá đơn bán ra thật của một doanh nghiệp sản xuất (GĐ49)'],
  ['786 / 1.027 dòng nhận tên người trả; 31 / 31 dòng lương', 'Sao kê ngân hàng thật 1.027 dòng (GĐ50)'],
  ['1.022 dòng trùng bị chặn, 5 dòng mới', 'Mô phỏng nhập lại sổ phụ thật lần hai (GĐ30b)'],
  ['74 / 74 chỉ tiêu B01a-DNN; 0 lệch 28 ràng buộc 03/TNDN', 'BCTC và tờ khai quyết toán thật năm 2025 (GĐ24, GĐ29b)'],
  ['927 – 1.252 tờ khai của một MST đọc trong 3 – 4,5 giây', 'Dữ liệu HTKK thật trên máy, 3 mã số thuế nhiều tờ khai nhất, chỉ đọc (GĐ168)'],
  ['Khoảng 1.300 tệp bản sao tên “(1).xml”, khoảng 280 khác tệp gốc', 'Cùng thư mục HTKK DataFiles, chỉ đếm (GĐ168)'],
  ['Hơn 1.600 mục Trợ lý; hơn 18.000 phép kiểm', 'Bộ hướng dẫn Trợ lý và 185 tệp kiểm thử của bản GĐ168'],
];

/** Tài liệu PDF tải về. */
export const docs = [
  { t: 'Tính năng ưu việt của UNESCO AI', d: '16 điểm ưu việt, số liệu đo thực tế và nguồn – 6 trang.', file: '/tai-lieu/tinh-nang-uu-viet-unesco-ai.pdf', size: '330 KB', icon: 'star' },
  { t: 'Tổng hợp toàn bộ tính năng AI', d: '65 tính năng trong 11 nhóm, mở ở đâu, AI làm gì; phụ lục Có gì mới – 9 trang.', file: '/tai-lieu/tong-hop-tinh-nang-ai-unesco.pdf', size: '323 KB', icon: 'list-checks' },
  { t: 'Hướng dẫn sử dụng trực quan GĐ159 – GĐ168', d: '12 chức năng mới, mỗi chức năng một trang có hình đánh số – 15 trang.', file: '/tai-lieu/huong-dan-truc-quan-gd159-gd168.pdf', size: '2 MB', icon: 'book-open' },
];
