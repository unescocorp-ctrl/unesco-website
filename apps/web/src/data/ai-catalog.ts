/**
 * TỔNG HỢP TOÀN BỘ TÍNH NĂNG AI TRONG UNESCO XI (UNESCO AI)
 * ------------------------------------------------------------------
 * Nguồn: tài liệu "Tổng hợp toàn bộ tính năng AI" bản GĐ175 (09/10/2026).
 * 65 tính năng trong 11 nhóm; mỗi dòng: tên – mở ở đâu – AI làm gì; isNew = tính năng mới GĐ159 – GĐ168.
 * Ghi chú: các mục mới của menu Dữ liệu và Hệ thống hiện KHÔNG DẤU trên máy (ví dụ "Lai theo mat hang / khach hang...").
 */
export type AiFeature = { t: string; where: string; d: string; isNew?: boolean };
export type AiGroup = { id: string; n: string; icon: string; t: string; where: string; items: AiFeature[] };

/** Bốn nơi làm việc chính của AI trong UNESCO XI. */
export const aiMap = [
  { icon: 'home', t: 'Màn hình chính', items: ['Menu Dữ liệu: 14 mục quản trị, kiểm soát, khoá sổ, sổ DN siêu nhỏ, hộ kinh doanh', 'Hệ thống: Nguồn HTKK, Số liệu năm trước BCTC, Sửa chữ Việt', 'Thẻ Quản lý công việc, Việc cần làm', 'Trợ giúp: Hướng dẫn sử dụng, Cập nhật phần mềm'] },
  { icon: 'cpu', t: 'Màn hình AI – Hoá đơn điện tử', items: ['Thẻ Tự động xử lý, Danh sách hoá đơn, Báo cáo & nhật ký', 'Thẻ Sổ phụ ngân hàng, Bảng lương, Tờ khai HQ', 'Cổng Kết nối BHXH, Quản lý công việc', 'Thẻ Cổng dịch vụ công (Hồ sơ thuế)'] },
  { icon: 'calculator', t: 'Module Giá thành', items: ['Trình tự giá thành 7 bước', 'Định mức tự động (AI), theo tỷ lệ giá bán', 'Kết chuyển thành phẩm – Cân đối AI', 'Báo cáo kiểm tra giá thành'] },
  { icon: 'chat', t: 'Mọi màn hình', items: ['Trợ lý AI: F1, nút ?, rê chuột', 'Gợi ý cột, bấm đúp sửa, tra mã', 'Nhật ký: mọi lô AI ghi đều huỷ được'] },
];

/** Ba câu chốt. */
export const aiRules = [
  'Báo cáo, kiểm soát, dự báo: chỉ đọc sổ.',
  'Ghi vào sổ / HTKK: qua xem trước + Đồng ý, hoặc chế độ ghi tự động do kế toán tự bật (chỉ hoá đơn tin cậy từ 90 điểm); mọi lô AI ghi đều có nhật ký, huỷ được cả lô; việc lớn có sao lưu.',
  'Chỗ nào AI không chắc: đánh dấu Cần xem lại để người quyết.',
];

export const aiGroups: AiGroup[] = [
  {
    id: 'hoa-don', n: '01', icon: 'receipt', t: 'Hoá đơn điện tử: tải về là thành chứng từ', where: 'Màn hình AI – Hoá đơn điện tử (nút AI trên màn hình chính, menu Tải hóa đơn điện tử)', items: [
      { t: 'Tải hoá đơn từ Cơ quan Thuế', where: 'Thẻ Tự động xử lý – Tải hoá đơn từ Cơ quan Thuế…; menu Tải hóa đơn điện tử', d: 'Tải mua vào, bán ra, máy tính tiền; chọn cả năm tự chia tháng; mỗi MST một hồ sơ Chrome; hẹn giờ tải theo lịch Windows. Kế toán tự đăng nhập, gõ captcha.' },
      { t: 'Phân tích và ghép mã', where: 'Thẻ Tự động xử lý – Bước 1', d: 'Ghép mã vật tư, NCC, khách hàng theo mã hàng in trên hoá đơn, MST + mã hàng, lịch sử đã duyệt; hàng tương tự chỉ gợi ý; quy đổi đơn vị tính tự học hệ số.' },
      { t: 'Hoá đơn chi phí không sinh mã rác', where: 'Tự động khi phân tích; đánh dấu Chi phí / NVL / Hàng hoá trên lưới', d: 'Chấm điểm cả hoá đơn (nhóm NCC, từ khoá, đơn vị tính, giá trị) – từ 60 điểm hạch toán thẳng chi phí; loại hình doanh nghiệp quyết định tài khoản.' },
      { t: 'Lập chứng từ: xem trước hoặc tự động', where: 'Thẻ Tự động xử lý – Bước 2; Quy tắc hạch toán…', d: 'Xem trước từng phiếu hoặc ghi tự động hoá đơn tin cậy từ 90; hoá đơn thay thế, điều chỉnh, vừa hàng vừa dịch vụ; giá vốn tự sinh; phiếu chi / UNC từ hoá đơn.' },
      { t: 'Quy tắc hạch toán theo màn hình nhập', where: 'Thẻ Tự động xử lý – Quy tắc hạch toán…', d: 'Chỉ chuyển hoá đơn vào sổ khi tài khoản đúng quy tắc của màn hình nhập (nhập vật tư 15x, bán hàng TK doanh thu…) và đúng tháng hoá đơn; sai thì Cần xem lại kèm lý do.' },
      { t: 'Điểm tin cậy và nút “Vì sao?”', where: 'Thẻ Danh sách hoá đơn – Vì sao?; Dữ liệu – Nhật ký AI đã làm gì (theo tháng)…', d: 'Giải thích căn cứ AI từng hoá đơn (điểm từng dòng, nguồn ghép, đối tượng, ngưỡng, nhật ký); lọc hoá đơn tin cậy thấp; báo cáo AI đã làm gì tháng này (Excel + HTML).' },
      { t: 'Hoá đơn bán lẻ / máy tính tiền', where: 'Màn hình Tải hoá đơn – ô Tổng hợp hoá đơn bán lẻ', d: 'Gộp hàng nghìn hoá đơn người tiêu dùng trong 1 – 6 ngày hoặc 1 tuần thành 1 chứng từ; khách lẻ một mã chung.' },
      { t: 'Import hoá đơn / bảng kê Excel bất kỳ', where: 'Thẻ Tự động xử lý – Import bảng kê HĐ Excel…', d: 'AI nhận dạng cột của file Excel bất kỳ (mua vào, bán ra, tên người mua) rồi đưa vào cùng luồng phân tích.' },
      { t: 'Tài sản, CCDC, 242 từ hoá đơn', where: 'Thẻ Danh sách hoá đơn', d: 'Không tự lập chứng từ: mở màn hình gốc (TSCĐ / CCDC / 242) điền sẵn để kế toán duyệt từng bước.' },
      { t: 'Tờ khai hải quan nhập khẩu', where: 'Thẻ Tờ khai HQ', d: 'Đọc Excel tờ khai (bản in VNACCS / ECUS), ghép mã vật tư, NCC, ghi vào chi phí và giá vốn hàng nhập khẩu để phân bổ.' },
      { t: 'Đối chiếu HĐĐT', where: 'Báo cáo & nhật ký – Đối chiếu HĐĐT…', d: 'Đối chiếu từng hoá đơn đã tải với chứng từ và bảng kê thuế trong sổ (liên kết AI, mã CQT, số hoá đơn + MST); chỉ đọc sổ, lập Excel.' },
      { t: 'Soát rủi ro hoá đơn trước kỳ khai', where: 'Dữ liệu – Soát rủi ro hoá đơn trước kỳ khai…', d: '5 nhóm rủi ro kỳ kê khai: thanh toán hoá đơn từ 5 triệu; huỷ / thay thế / trùng / lệch; người bán; mã CQT / tải trùng; sổ có mà CQT không – mỗi dòng có cách xử lý, chỉ đánh dấu.' },
      { t: 'Chống trùng, huỷ cả lô', where: 'Thẻ Báo cáo & nhật ký', d: 'Hoá đơn nhận theo khoá MST – mẫu số – ký hiệu – số; mọi lô AI ghi đều có nhật ký và huỷ được cả lô; chứng từ nhập tay giữ nguyên.' },
    ],
  },
  {
    id: 'so-phu', n: '02', icon: 'bank', t: 'Sổ phụ ngân hàng và bảng lương', where: 'Thẻ Sổ phụ ngân hàng, thẻ Bảng lương của màn hình AI', items: [
      { t: 'Import sổ phụ mọi dạng', where: 'Thẻ Sổ phụ ngân hàng – Import; Tiện ích – Trích xuất sổ phụ', d: 'Excel, CSV, PDF có chữ; ảnh / PDF scan qua OCR Offline (không gửi ảnh ra ngoài) hoặc Google Document AI (tính phí theo trang); một file hoặc cả thư mục; dịch nội dung sang tiếng Việt có dấu.' },
      { t: 'Đọc nội dung như kế toán', where: 'Lưới sổ phụ', d: 'Nhận người trả, ngân hàng, dãy số hoá đơn, khoảng ngày, lương viết tắt, tiền trả lại; học bí danh người trả.' },
      { t: 'Khớp theo công nợ mở', where: 'Lưới sổ phụ', d: 'Tổng hoá đơn bằng số tiền, nhiều lần trả cộng lại, trả trước; không tự phân bổ khi thiếu / dư.' },
      { t: 'VietQR và tài khoản định danh', where: 'Thông báo công nợ', d: 'Mã VietQR (NAPAS 247) với nội dung riêng từng khách – tiền về nhận ra ngay với độ tin cậy cao nhất.' },
      { t: 'Bảng lương Excel khớp từng ô', where: 'Thẻ Bảng lương', d: 'Import bảng lương Excel, tự tạo nhân viên, đối chiếu công thức; khớp lệnh chi lương theo số thực nhận.' },
    ],
  },
  {
    id: 'thue', n: '03', icon: 'file-xml', t: 'Thuế và HTKK', where: 'Thẻ Báo cáo & nhật ký (nhóm Thuế GTGT, Thuế TNDN, Báo cáo tài chính, Thuế TNCN); Hệ thống – Nguồn HTKK', items: [
      { t: 'Xuất 01/GTGT', where: 'Báo cáo & nhật ký – Thuế GTGT – Xuất 01/GTGT…', d: 'Lập từ sổ, khuôn XML học từ HTKK trên máy, phụ lục giảm thuế; xem trước, đối chiếu; lệch 1 đồng ở ràng buộc là dừng.' },
      { t: 'Tự lấy số kỳ trước', where: 'Hệ thống – Nguồn HTKK, tờ khai và BCTC kỳ trước', d: '[22] = [43] tờ khai kỳ trước, người ký, ngành nghề, cơ quan thuế tự điền – không hộp chọn tệp.', isNew: true },
      { t: 'Thuế TNCN đủ bộ', where: 'Báo cáo & nhật ký – nhóm Thuế TNCN', d: '05/KK-TNCN quý, 05/QTT-TNCN năm kèm 05-1 / 05-2 / 05-3, đăng ký thuế NLĐ 05-ĐKT-TH, đối chiếu TNCN với sổ.', isNew: true },
      { t: 'Xem trước khi đưa vào HTKK', where: 'Mọi nút xuất XML HTKK', d: 'So kỳ trước, kiểm số chuyển kỳ và kiểm chéo trong kỳ ([!] [?] [i]); chỉ chép vào HTKK khi bấm Đưa vào HTKK; không ghi đè kỳ đã có.', isNew: true },
      { t: 'Nhập toàn bộ HTKK theo MST', where: 'Báo cáo tài chính – Nhập HTKK theo MST…', d: 'Đọc một lần mọi tờ khai của MST trên HTKK: số dư TK cuối năm so sổ, lỗ chuyển, [22] kỳ sau, TNCN, BCTC năm trước; bỏ bản sao tên (1).xml.', isNew: true },
      { t: '03/TNDN và BCTC lập từ sổ', where: 'Thuế TNDN – Tờ khai QT 03/TNDN, Xuất XML 03/TNDN; Báo cáo tài chính – XML HTKK BCTC', d: '03/TNDN và phụ lục, BCTC TT133 (B01a, B01b, KLT) / TT99, B02, B03 trực tiếp – gián tiếp, B09; XML qua lược đồ HTKK, đưa thẳng vào HTKK đúng MST.' },
      { t: 'Xuất 1 lần báo cáo năm', where: 'Báo cáo & nhật ký – Xuất 1 lần (Excel / HTKK)…', d: 'Tích một lần B01a, B02, B03, F01, B09, 03/TNDN, 05/QTT – Excel mẫu in HTKK, XML hoặc cả hai.' },
      { t: 'Số liệu năm trước BCTC', where: 'Hệ thống – Số liệu năm trước BCTC (Excel / XML / HTKK)…', d: 'Lấy cột Năm trước / Số đầu năm từ Excel, XML, ZIP, HTKK; đổi mã TT200 / TT133 sang TT99; xem trước, Đồng ý mới ghi.' },
      { t: 'Ước tính TNDN quý, kiểm tra khoá sổ', where: 'Thuế TNDN – Ước tính TNDN…, Kiểm tra khoá sổ…', d: 'Ước tính TNDN từ đầu năm (phụ lục 03-1A từ chứng từ), gợi ý thuế suất 15 / 17 / 20%; kiểm tra trước khoá sổ: LỖI / CẢNH BÁO / ĐẠT (số dư, kết chuyển, công nợ, tồn kho âm…).' },
      { t: 'Kỳ kê khai, văn bản pháp luật', where: 'Hộp chọn Thông tư khi đăng nhập lần đầu; Hướng dẫn sử dụng – Phụ lục', d: 'Kỳ kê khai GTGT tháng / quý theo bộ sổ; danh mục văn bản pháp luật, biểu mẫu áp dụng.' },
    ],
  },
  {
    id: 'dich-vu-cong', n: '04', icon: 'globe', t: 'Cổng dịch vụ công Thuế', where: 'Thẻ / cửa sổ Cổng dịch vụ công', items: [
      { t: 'Dạy một lần, dùng mãi', where: 'Thẻ Cổng dịch vụ công', d: 'Kế toán đăng nhập, tra cứu như bình thường; AI đọc kết quả, mở từng hồ sơ trong một tab.' },
      { t: 'Hồ sơ thuế', where: 'Tab Hồ sơ thuế', d: 'Tờ khai đã nộp, trạng thái tiếp nhận / chấp nhận, thông báo, đối chiếu chỉ tiêu 01/GTGT với sổ (lệch trên 1.000 đ tô đỏ).' },
      { t: 'Số phải nộp, hạn nộp', where: 'Tab Hồ sơ thuế', d: 'Theo tờ khai có hiệu lực; hạn nộp tự lùi qua thứ Bảy, Chủ nhật, ngày lễ; báo kỳ đến hạn chưa thấy tờ khai.' },
    ],
  },
  {
    id: 'gia-thanh', n: '05', icon: 'calculator', t: 'Giá thành và sản xuất', where: 'Biểu tượng Giá thành trên màn hình chính', items: [
      { t: 'Trình tự giá thành 7 bước', where: 'Giá thành – cột Trình tự giá thành tháng', d: 'Đèn màu từng bước (xanh / vàng / đỏ / xám) bằng số của sổ; Làm bước này mở đúng màn hình.', isNew: true },
      { t: 'Định mức theo tỷ lệ giá bán', where: 'Giá thành – Danh mục – 2. Định mức theo tỷ lệ giá bán', d: 'AI đề xuất tỷ lệ giá vốn / giá bán (thực tế 3 tháng, sản phẩm tương tự, mẫu ngành); lập định mức NVL theo tỷ lệ; tiêu thức 5 chia chi phí.', isNew: true },
      { t: 'Định mức tự động (AI)', where: 'Giá thành – Danh mục – 2. Định mức tự động (AI)', d: 'Thành phẩm có xuất bán chưa có định mức: AI so 3 cách, ghi phương án và độ tin cậy, ghi một lần nhiều mã.' },
      { t: 'Cân đối AI khi kết chuyển', where: 'Kết chuyển thành phẩm – khung Cân đối AI', d: 'Sản lượng so lượng bán, điện theo định mức so kWh, NVL thiếu; đề xuất xử lý (điều chuyển, thay thế, hoá đơn chưa nhập kho, nhập tạm); tăng / giảm sản lượng.' },
      { t: 'Giá thành theo đối tượng', where: 'Giá thành – 3. Phân bổ chi phí theo đối tượng', d: 'Chi phí 1541 / 1542 / 1543 giữ tại đối tượng, chi phí chung chia theo tiêu thức, dở dang theo đối tượng (TT133, TT99).' },
      { t: 'Báo cáo kiểm tra giá thành', where: 'Giá thành – Danh mục – 6. Báo cáo kiểm tra giá thành', d: 'Giá thành so giá bán, kỳ này so kỳ trước, so mục tiêu; cảnh báo bằng 0, cao hơn giá bán, đổi trên 25%.', isNew: true },
      { t: 'Giao diện module mới', where: 'Giá thành, Kết chuyển TP, Sổ giá thành, Giá thành theo đối tượng', d: 'Thẻ trắng có biểu tượng, hộp AI hỗ trợ, thanh điều hướng, nút màu theo ảnh thiết kế.', isNew: true },
    ],
  },
  {
    id: 'kiem-soat', n: '06', icon: 'list-checks', t: 'Kiểm soát, khoá sổ, an toàn dữ liệu', where: 'Quản lý công việc – Công việc thực tế; menu Dữ liệu', items: [
      { t: 'Màn hình Kiểm soát', where: 'Quản lý công việc – Còn phải làm – nhóm Kiểm soát (bấm đúp)', d: '5 thẻ: đối tượng trùng mã, công nợ lệch / trả hộ, vật tư trùng mã / âm kho, TK không nhất quán, bất thường số liệu (chi phí tăng đột biến, giá mua lệch, bán dưới giá vốn, số chứng từ trùng / nhảy, ghi lùi tháng đã khoá…).' },
      { t: 'Xử lý trả hộ, bù trừ, gộp mã', where: 'Màn hình Kiểm soát – Xử lý…, Gộp mã…', d: 'Sửa mã trên chứng từ hoặc lập chứng từ bù trừ 131 / 331; gộp mã trùng có xem trước, sao lưu, hoàn tác.' },
      { t: 'Điểm sẵn sàng khoá sổ', where: 'Dữ liệu – Điểm sẵn sàng khoá sổ tháng…', d: 'Chấm 0 – 100 kèm việc còn lại; hỏi trước khi khoá tháng.' },
      { t: 'Sao lưu tự động, kiểm toàn vẹn', where: 'Dữ liệu – Sao lưu tự động, kiểm toàn vẹn…', d: 'Sao lưu bộ sổ khi mở sổ lần đầu mỗi ngày và trước việc lớn (khoá sổ, gộp mã, sửa mã trả hộ), giữ 7 ngày + 12 bản cuối tháng; kiểm toàn vẹn nhanh.' },
      { t: 'Sửa chữ Việt lỗi dấu ?', where: 'Hệ thống – Sửa chữ Việt lỗi dấu ?…', d: 'Dựng lại tên khách hàng, hàng hoá, diễn giải bị dấu ?; hỏi trước, sao lưu giá trị cũ.' },
    ],
  },
  {
    id: 'quan-tri', n: '07', icon: 'bar-chart', t: 'Quản trị cho chủ doanh nghiệp', where: 'Menu Dữ liệu; Báo cáo và sổ kế toán – thẻ Báo cáo quản trị', items: [
      { t: 'Trang tổng quan quản trị', where: 'Báo cáo quản trị – Trang tổng quan quản trị', d: 'Chỉ tiêu + biểu đồ kinh doanh, tiền, công nợ, tồn kho, thuế cho các tháng chọn.' },
      { t: 'Dự báo dòng tiền 4 – 13 tuần', where: 'Dữ liệu – Dự báo dòng tiền 4-13 tuần…', d: 'Phải thu, phải trả theo hạn hoặc thói quen trả học từ lịch sử, lương, thuế, BHXH, thu chi bình quân.' },
      { t: 'Lãi theo mặt hàng / khách hàng', where: 'Dữ liệu – Lãi theo mặt hàng / khách hàng…', d: 'Lãi gộp và lãi sau phân bổ theo mặt hàng, khách hàng, tháng; cảnh báo bán lỗ, chưa có giá vốn, lãi mỏng mà trả chậm.', isNew: true },
      { t: 'Tồn kho thông minh', where: 'Dữ liệu – Tồn kho thông minh…', d: 'Chậm luân chuyển, cần đặt hàng (lượng đề xuất), NVL sắp thiếu, thành phẩm cần sản xuất, ABC, âm kho.', isNew: true },
      { t: 'Thuế TNDN dự kiến, kịch bản', where: 'Dữ liệu – Thuế TNDN dự kiến cả năm, kịch bản…', d: 'Thuế cả năm từ sổ; kịch bản mua TSCĐ, thưởng, chi bị loại; tạm nộp tối thiểu 80%; cảnh báo ngưỡng 3 tỷ / 50 tỷ.', isNew: true },
      { t: 'Báo cáo chủ doanh nghiệp 1 trang', where: 'Dữ liệu – Báo cáo chủ doanh nghiệp (1 trang)…', d: 'Kết quả tháng, tiền và dòng tiền 4 tuần, nợ quá hạn, tồn kho, thuế sắp nộp, 5 việc cần chú ý – In / lưu PDF.', isNew: true },
    ],
  },
  {
    id: 'nhieu-bo-so', n: '08', icon: 'layers', t: 'Nhiều bộ sổ, lịch việc (kế toán dịch vụ)', where: 'Menu Dữ liệu; thẻ Quản lý công việc ở màn hình chính', items: [
      { t: 'Bảng điều hành khách hàng', where: 'Dữ liệu – Bảng điều hành khách hàng…', d: 'Mỗi dòng một bộ sổ: chứng từ đến tháng nào, hoá đơn / sổ phụ chưa hạch toán, tháng đã khoá, điểm sẵn sàng.' },
      { t: 'Chạy hàng loạt qua đêm', where: 'Dữ liệu – Chạy hàng loạt các bộ sổ (qua đêm)…', d: 'Rà từng sổ trong thư mục Bảng điều hành (chỉ đọc), hẹn giờ qua đêm; sáng ra có bảng tổng hợp đỏ / vàng / xanh, việc cần làm, bất thường số liệu.' },
      { t: 'Quản lý công việc', where: 'Thẻ Quản lý công việc (màn hình chính, cổng trên màn hình AI)', d: 'Lịch việc phải làm theo tháng – quý – năm (thuế, BCTC, BHXH, KPCĐ, lao động) + việc thực tế đã xong / còn phải làm; báo bản cập nhật mới.' },
      { t: 'Bộ tham số năm', where: 'Dữ liệu – Bộ tham số năm (lương, BHXH, thuế)…', d: 'Một nguồn chung theo ngày hiệu lực: giảm trừ gia cảnh, lương tối thiểu vùng, lương cơ sở, tỷ lệ BHXH / BHYT / BHTN / KPCĐ, trần đóng, thuế suất TNDN, mốc 5 triệu.' },
    ],
  },
  {
    id: 'lao-dong', n: '09', icon: 'users', t: 'Lao động – BHXH', where: 'Biểu tượng Lao động – BHXH; cổng Kết nối BHXH trên màn hình AI', items: [
      { t: 'Kết nối BHXH', where: 'Cổng Kết nối BHXH (cạnh thẻ Bảng lương)', d: 'Lập D02-LT, TK1-TS, TK3-TS, 01/PLI, bảng tính đóng BHXH từ danh sách nhân viên và bảng lương; mở cổng BHXH trực tuyến.' },
      { t: 'Đối chiếu BHXH hằng tháng', where: 'Thẻ Bảng lương – Đối chiếu BHXH…', d: 'So số phải đóng theo bảng lương với sổ; nhập danh sách nhân viên từ danh sách BHXH.' },
      { t: 'Hợp đồng lao động, phụ lục', where: 'Lao động – BHXH – Hợp đồng lao động / Phụ lục hợp đồng', d: 'Mẫu theo Bộ luật Lao động 2019 điền sẵn từ Danh sách nhân viên (địa chỉ, mức lương, bậc, hệ số…); xem trước, in từng người hoặc in toàn bộ.' },
    ],
  },
  {
    id: 'tro-ly', n: '10', icon: 'chat', t: 'Trợ lý AI và hỗ trợ người dùng', where: 'Mọi màn hình', items: [
      { t: 'Trợ lý AI', where: 'F1, nút ?, rê chuột lên nút', d: 'Hơn 1.600 mục hướng dẫn soạn sẵn, dùng được khi không có Internet; hỏi tự do bằng tiếng Việt (tuỳ chọn, cần khoá Claude API).' },
      { t: 'Gợi ý từng cột, bấm đúp sửa, tra mã', where: 'Lưới dữ liệu các màn hình', d: 'Rê chuột lên cột có chú thích; bấm đúp ô để sửa; khung tra mã hàng.' },
      { t: 'Hướng dẫn sử dụng tổng hợp', where: 'Trợ giúp – Hướng dẫn sử dụng', d: 'Trang HTML lập tự động mỗi gói: Có gì mới, tiện ích module, hướng dẫn từng nút; liên kết tới hướng dẫn trực quan và tài liệu PDF.', isNew: true },
      { t: 'Việc cần làm, ghi nhớ', where: 'Màn hình chính', d: 'Việc cần làm hôm nay, ghi nhớ của kế toán, báo cập nhật.' },
    ],
  },
  {
    id: 'van-hanh', n: '11', icon: 'key', t: 'Vận hành và bảo vệ', where: 'Trợ giúp; màn hình Khoá AI', items: [
      { t: 'Khoá AI 3 chế độ', where: 'Màn hình Khoá AI', d: 'Đã kích hoạt / dùng thử / chỉ xem; mã kích hoạt theo máy, theo gói (thời hạn, số công ty, số trang Google); phần kế toán luôn dùng bình thường.' },
      { t: 'Cập nhật phần mềm tự động', where: 'Trợ giúp – Cập nhật phần mềm tự động…', d: 'Kênh cập nhật có chữ ký số (mạng nội bộ, thư mục đồng bộ, Internet); kiểm từng tệp, sao lưu trước khi chép, lỗi giữa chừng thì khôi phục.' },
      { t: 'Thông tư theo bộ sổ', where: 'Hộp chọn Thông tư khi đăng nhập lần đầu', d: 'TT133/2016 hoặc TT99/2025 quyết định sổ sách, báo cáo, giá thành, tiêu đề mẫu, tài khoản mặc định.' },
      { t: 'Bộ cài và sổ mẫu', where: 'Bộ cài đặt', d: 'Kèm sổ mẫu năm 2026 TT133 và TT99; bộ đăng ký máy khi cài máy mới; nâng cấp dữ liệu phiên bản cũ từng bước.' },
      { t: 'Biểu tượng logo sao', where: 'Mọi màn hình, tệp .exe, lối tắt', d: 'Một biểu tượng thống nhất cho phần mềm và công cụ AI.', isNew: true },
    ],
  },
];

export const aiFeatureCount = aiGroups.reduce((s, g) => s + g.items.length, 0);
export const aiNewCount = aiGroups.reduce((s, g) => s + g.items.filter((i) => i.isNew).length, 0);
