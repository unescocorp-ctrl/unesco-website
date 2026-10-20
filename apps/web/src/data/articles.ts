/**
 * BÀI VIẾT TRONG TRUNG TÂM KIẾN THỨC
 * ------------------------------------------------------------------
 * Mỗi bài là một mục trong mảng `articles`. Trang hiển thị: /kien-thuc/<slug>/
 * (xem pages/kien-thuc/<slug>/index.astro và components/ArticleView.astro).
 *
 * THÊM BÀI MỚI: thêm một mục vào `articles`, tạo thư mục pages/kien-thuc/<slug>/index.astro
 * (sao chép từ bài có sẵn, đổi slug), thêm đường dẫn vào pages/sitemap.xml.ts.
 *
 * Các loại khối nội dung (blocks):
 *   h2        tiêu đề mục
 *   lead      câu nổi bật đầu bài (in đậm)
 *   p         đoạn văn
 *   ol        danh sách đánh số
 *   table     bảng: head = tiêu đề cột, rows = các dòng
 *   formula   công thức (một dòng)
 *   contact   đoạn liên hệ, lấy từ data/contact.ts để luôn đúng số điện thoại hiện hành
 *   calc      công cụ tính thử; x = 'dien' (components/ElectricityCalc.astro)
 *   h3        tiêu đề mục con
 *   img       hình: src = tên tệp trong public/huong-dan/<slug>/ (không đuôi .webp), w, h, cap = chú thích
 *   note      khung lưu ý
 *   download  nút tải tệp: href, x = chữ trên nút
 *   video     video tự lưu trên web (public/video/): src .mp4, vtt phụ đề, poster ảnh bìa, cap chú thích
 */
export type Block =
  | { t: 'h2'; x: string }
  | { t: 'lead'; x: string }
  | { t: 'p'; x: string }
  | { t: 'ol'; items: string[] }
  | { t: 'table'; head: string[]; rows: string[][] }
  | { t: 'formula'; x: string }
  | { t: 'contact'; x: string }
  | { t: 'calc'; x: 'dien' }
  | { t: 'h3'; x: string }
  | { t: 'img'; src: string; w: number; h: number; cap: string }
  | { t: 'note'; x: string }
  | { t: 'download'; href: string; x: string }
  | { t: 'video'; src: string; vtt: string; poster: string; cap: string };

export type Article = {
  slug: string;
  title: string;
  /** Ngày cập nhật, dạng YYYY-MM-DD. */
  date: string;
  description: string;
  topic: string;
  blocks: Block[];
};

export const articleDate = (iso: string) => `${iso.slice(8, 10)}/${iso.slice(5, 7)}/${iso.slice(0, 4)}`;

export const articles: Article[] = [
  {
    slug: 'gia-thanh-theo-dien',
    title: 'Hướng dẫn chi tiết: nhập và xử lý giá thành theo điện',
    date: '2026-10-20',
    description: 'Từng màn hình, từng ô cần nhập để tính giá thành sản xuất hàng loạt lấy điện làm căn cứ sản lượng trong UNESCO AI: thiết lập một lần, AI cân đối cả tháng, làm tay trên Kết chuyển thành phẩm, xử lý điện chênh lệch và kiểm tra kết quả. Có 22 hình, tệp PDF và công cụ tính thử.',
    topic: 'Giá thành',
    blocks: [
      { t: 'lead', x: 'Với xưởng ép, thổi nhựa, điện tỷ lệ với lượng hạt nhựa qua máy. UNESCO AI quy số kWh điện sản xuất ra số kg nguyên liệu chính đáng lẽ đã dùng, so với sản lượng thành phẩm theo định mức, rồi đề xuất sản lượng cho khớp điện. Phần mềm không tự ghi sổ: mọi số chỉ vào sổ khi kế toán bấm Ghi trên màn hình Kết chuyển thành phẩm.' },
      { t: 'video', src: '/video/gia-thanh-theo-dien.mp4', vtt: '/video/gia-thanh-theo-dien.vtt', poster: '/huong-dan/gia-thanh-theo-dien/gtd-01-trinh-tu.webp', cap: 'Video hướng dẫn có lời đọc và phụ đề (8 phút 45 giây), quay trên phần mềm thật. Bấm CC để bật hoặc tắt phụ đề.' },
      { t: 'download', href: '/tai-lieu/huong-dan-gia-thanh-theo-dien-chi-tiet.pdf', x: 'Tải bản PDF (17 trang, 22 hình)' },
      { t: 'p', x: 'Hướng dẫn được làm theo video thao tác thực tế trên phần mềm, bộ sổ mẫu tháng 01/2026: hai thành phẩm TÚI PP (mã T) và CUỘN PP (mã C), nguyên liệu chính HẠT NHỰA (mã PP), mã điện D. Tên công ty, mã số thuế và đường dẫn thư mục trong hình đã được che.' },
      { t: 'table', head: ['Phần', 'Nội dung'], rows: [
        ['A', 'Màn hình Trình tự giá thành tháng – làm từ trên xuống'],
        ['B', 'Thiết lập một lần: loại hình sản xuất, hồ sơ định mức, ngành nhựa, định mức có dòng điện'],
        ['C', 'Hằng tháng – cách 1: AI cân đối cả tháng (khuyến nghị)'],
        ['D', 'Hằng tháng – cách 2: làm tay trên Kết chuyển thành phẩm, xử lý điện chênh lệch'],
        ['E', 'Kiểm tra kết quả, báo cáo và lỗi hay gặp'],
      ] },

      { t: 'h2', x: 'A. Màn hình Trình tự giá thành tháng' },
      { t: 'p', x: 'Vào Giá thành. Bên trái là Trình tự giá thành tháng gồm 7 bước (0 – 6), làm lần lượt từ trên xuống; bên phải là Danh mục mở thẳng từng màn hình. Mỗi bước có chấm màu: xanh là xong, lam là máy đã ghi, cam là chờ duyệt, đỏ là còn thiếu. Chọn tháng ở đầu màn hình và bấm Kiểm lại sau mỗi thay đổi.' },
      { t: 'img', src: 'gtd-01-trinh-tu', w: 1920, h: 1020, cap: 'Hình 1. Trình tự giá thành tháng: (1) chọn tháng, (2) Kiểm lại sau mỗi thay đổi, (3) nút Làm bước này của từng bước.' },
      { t: 'table', head: ['Bước', 'Ý nghĩa', 'Làm khi nào'], rows: [
        ['0. Loại hình sản xuất', 'Chọn “Sản xuất hàng loạt, lấy điện làm căn cứ sản lượng”', '1 lần'],
        ['1. Hồ sơ định mức', 'Nguyên liệu chính, mã điện, hệ số NVL / kWh, % điện không dùng cho sản xuất', '1 lần, sửa khi thay đổi'],
        ['2. Định mức nguyên vật liệu', 'Đủ định mức cho mọi mã thành phẩm, có dòng mã điện', 'Khi có mã mới'],
        ['3. Chi phí tháng', 'Số dư 1541 / 1542 / 1543 của tháng; phân bổ theo đối tượng', 'Hằng tháng'],
        ['4. Sản lượng thành phẩm', 'AI cân đối theo điện hoặc làm tay', 'Hằng tháng'],
        ['5. Tính và ghi giá thành', 'Ghi phiếu kết chuyển thành phẩm', 'Hằng tháng'],
        ['6. Kiểm tra kết quả', 'Giá thành so giá bán, kỳ này so kỳ trước, so mục tiêu', 'Hằng tháng'],
      ] },

      { t: 'h2', x: 'B. Thiết lập một lần' },
      { t: 'h3', x: 'B1. Bước 0 – Loại hình sản xuất' },
      { t: 'p', x: 'Bấm Chọn… ở bước 0, chọn “Sản xuất hàng loạt, lấy điện làm căn cứ sản lượng (ví dụ nhựa ép, thổi)”, bấm Đồng ý. Loại hình quyết định bước nào cần làm: sổ không dùng điện chọn dòng thứ hai, sản xuất theo đơn hàng chọn dòng thứ ba.' },
      { t: 'img', src: 'gtd-02-loai-hinh', w: 720, h: 460, cap: 'Hình 2. Chọn loại hình sản xuất lấy điện làm căn cứ sản lượng.' },
      { t: 'h3', x: 'B2. Bước 1 – Hồ sơ định mức giá thành' },
      { t: 'p', x: 'Bấm Làm bước này ở bước 1 (hoặc Danh mục › 1. Hồ sơ định mức giá thành), nhập các ô theo bảng dưới rồi bấm Ghi.' },
      { t: 'img', src: 'gtd-03-ho-so-dinh-muc', w: 830, h: 860, cap: 'Hình 3. Hồ sơ định mức giá thành của bộ sổ. Số trong hình ứng với cột Số ở bảng dưới.' },
      { t: 'table', head: ['Số', 'Ô', 'Nhập gì'], rows: [
        ['1', 'Nguyên liệu chính', 'Số hiệu hạt nhựa (PP). Nhiều loại hạt thì cách nhau dấu chấm phẩy (PP;PE). Gõ số hiệu rồi Enter, hoặc bấm … để chọn.'],
        ['–', 'Mã điện', 'Số hiệu mã điện (D). Mã điện trong danh mục vật tư phải có đơn vị KWH.'],
        ['2', 'Lượng NVL chính / 1 kWh điện', 'Số kg hạt nhựa dùng hết cho 1 kWh điện sản xuất. Ô Lấy hệ số từ: Tự nhập, hoặc để phần mềm tính từ các tháng trước.'],
        ['–', 'Tính từ tháng nào', 'Tháng mốc tính hệ số, ví dụ 01/2026 hoặc “3 kỳ gần nhất”.'],
        ['3', 'Điện không dùng cho SX (%)', 'Văn phòng, kho, chiếu sáng ngoài xưởng, ví dụ 1,5 %.'],
        ['–', 'Điện máy chạy không tải (%)', 'Máy chạy không ra sản phẩm; để 0 nếu không theo dõi.'],
        ['4', 'Khi lệch với điện', '1 – Tự chỉnh khi lệch quá ngưỡng (khuyến nghị): lệch quá ngưỡng thì AI đề xuất và chờ duyệt.'],
        ['–', 'Cho phép lệch NVL (%)', 'Ngưỡng lệch, mặc định 5 %.'],
        ['–', 'Chia CP chung trong phiếu theo', '0 – Theo chi phí NVL (hoặc theo điện / khối lượng).'],
        ['–', 'Hao hụt NVL thông thường (%)', 'Tỷ lệ hao hụt bình thường.'],
        ['5', 'Ngành nhựa', 'Chọn dây chuyền mẫu để đối chiếu định mức điện ngành (mục B3).'],
        ['6', 'Ghi', 'Lưu hồ sơ.'],
      ] },
      { t: 'note', x: 'Phân biệt hai con số. “Lượng NVL chính / 1 kWh” là kg trên kWh. Định mức điện của thành phẩm (mục B4) là kWh trên 1 đơn vị thành phẩm. Ví dụ 1 kg túi tốn 1,053 kWh thì 1 kWh làm ra khoảng 1 ÷ 1,053 ≈ 0,95 kg, hệ số nhập khoảng 0,95 (chưa tính hao hụt). Nhập nhầm hai số này làm sản lượng theo điện lệch.' },
      { t: 'h3', x: 'B3. Ngành nhựa – đối chiếu định mức điện theo 13/VBHN-BCT năm 2026' },
      { t: 'p', x: 'Trong Hồ sơ định mức bấm Ngành nhựa, chọn dây chuyền mẫu của công ty. Công ty làm nhiều loại sản phẩm thì chọn dòng cuối “Nhiều nhóm sản phẩm” và khai tỷ trọng kg. Phần mềm hiện ngay báo cáo đối chiếu SEC (kWh trên 1 kg thành phẩm) từng tháng với định mức ngành.' },
      { t: 'img', src: 'gtd-04-nganh-nhua', w: 720, h: 460, cap: 'Hình 4. Chọn dây chuyền mẫu ngành nhựa.' },
      { t: 'img', src: 'gtd-05-bao-cao-nganh-nhua-dat', w: 1110, h: 785, cap: 'Hình 5. Chọn “Túi nhựa” (0,95 kWh/kg): các tháng đạt – “Số liệu khớp”.' },
      { t: 'img', src: 'gtd-06-bao-cao-nganh-nhua-do', w: 1110, h: 785, cap: 'Hình 6. Cùng số liệu nhưng chọn “Nhựa bao bì” (0,62 kWh/kg): báo đỏ vì vượt trên 30 %. Chọn đúng nhóm sản phẩm thì đối chiếu mới có ý nghĩa.' },
      { t: 'p', x: 'Báo cáo được lưu thành tệp trong thư mục giá thành của bộ sổ (nút Mở thư mục, Mở tệp báo cáo). Đây chỉ là đối chiếu, không sửa sổ.' },
      { t: 'h3', x: 'B4. Bước 2 – Định mức nguyên vật liệu (có dòng điện)' },
      { t: 'p', x: 'Bấm Làm bước này ở bước 2 và chọn cách lập định mức cho các mã còn thiếu.' },
      { t: 'img', src: 'gtd-07-chon-cach-dinh-muc', w: 720, h: 460, cap: 'Hình 7. Bốn cách lập định mức.' },
      { t: 'table', head: ['Cách', 'Dùng khi'], rows: [
        ['Định mức tự động (AI đề xuất, kế toán xem rồi ghi)', 'Đã có lịch sử xuất NVL hoặc có sản phẩm tương tự'],
        ['Định mức NVL theo mã (nhập, sửa tay)', 'Đã biết định mức từng mã'],
        ['Định mức theo tỷ lệ giá bán (khai % giá vốn cho sổ, lô hoặc mã)', 'Công ty mới, chưa có cơ cấu NVL'],
        ['Vật liệu phụ, bao bì', 'Định mức theo số thành phẩm hoặc % theo giá trị NVL chính'],
      ] },
      { t: 'img', src: 'gtd-08-dinh-muc-ty-le-gia-ban', w: 1285, h: 990, cap: 'Hình 8. Định mức theo tỷ lệ giá bán. Lưới dưới là định mức của mã đang chọn: dòng ĐIỆN (D) 1,053 kWh / kg túi; dòng HẠT NHỰA (PP) 1 kg / kg.' },
      { t: 'note', x: 'Mỗi thành phẩm phải có một dòng mã điện trong định mức (số kWh cho 1 đơn vị thành phẩm). Thiếu dòng này, phần mềm không tính được điện theo định mức của phiếu và khung Cân đối AI báo “bỏ qua”.' },

      { t: 'h2', x: 'C. Hằng tháng – cách 1: AI cân đối cả tháng (khuyến nghị)' },
      { t: 'h3', x: 'C1. Chuẩn bị' },
      { t: 'ol', items: [
        'Nhập hoá đơn điện của tháng như phiếu nhập vật tư: mã điện D, số lượng là số kWh trên hoá đơn, tiền là tiền điện.',
        'Bước 3 – Chi phí tháng: kiểm tra số dư 1541 / 1542 / 1543. Sổ bật giá thành theo đối tượng (TT133) thì xem bảng phân bổ (Hình 9).',
      ] },
      { t: 'img', src: 'gtd-09-phan-bo-tt133', w: 1485, h: 990, cap: 'Hình 9. Giá thành theo đối tượng (TT133): tham số tính giá thành và bảng phân bổ chi phí của phiếu NTP01.' },
      { t: 'h3', x: 'C2. Chạy AI cân đối' },
      { t: 'ol', items: [
        'Ở bước 4 bấm Làm bước này, chọn “AI cân đối cả tháng: giữ định mức, đề xuất sản lượng theo điện, chờ duyệt nếu lệch quá ngưỡng”, bấm Đồng ý (Hình 10).',
        'Phần mềm lập báo cáo Máy giá thành (Hình 11): kWh mua vào theo phiếu nhập điện; kWh trên hoá đơn điện tải về; kWh sản xuất (đã trừ văn phòng, không tải); NVL chính tham chiếu theo điện; NVL theo sản lượng gốc × định mức; hệ số và % lệch; bảng từng mã gồm định mức, sản lượng gốc, sản lượng đề xuất và chênh.',
        'Nếu báo cáo có dòng cảnh báo hệ số hoặc tồn điện âm, sửa Hồ sơ định mức trước khi duyệt. Nếu thấy dòng kWh trên hoá đơn tải về khác số, kiểm tra lại phiếu nhập điện.',
        'Lệch trong ngưỡng: máy nạp thẳng sản lượng. Lệch quá ngưỡng: trạng thái chờ duyệt (chấm cam); đóng báo cáo để chọn phương án.',
      ] },
      { t: 'img', src: 'gtd-10-chon-ai-can-doi', w: 720, h: 460, cap: 'Hình 10. Chọn AI cân đối cả tháng.' },
      { t: 'img', src: 'gtd-11-may-gia-thanh-cho-duyet', w: 1110, h: 785, cap: 'Hình 11. Máy giá thành chờ duyệt: kWh mua vào 26.492; kWh sản xuất 26.094,62; NVL theo điện 27.477,63 so với theo sản lượng gốc 25.882 → hệ số 1,0617, lệch 6,17 % (ngưỡng 5 %). Mã T 24.882 → 26.415,98; mã C 1.000 → 1.061,65.' },
      { t: 'formula', x: 'kWh sản xuất = kWh mua vào × (1 − % điện không dùng cho SX − % không tải)   ·   NVL theo điện = kWh sản xuất × Lượng NVL chính / 1 kWh   ·   Hệ số = NVL theo điện ÷ NVL theo sản lượng gốc' },
      { t: 'note', x: 'Dòng “kWh trên hoá đơn điện tải về (CQT): 0 ← KHÁC SỐ” nghĩa là số kWh trên phiếu nhập điện chưa khớp với hoá đơn điện tải về từ cơ quan thuế. Nên kiểm tra phiếu nhập điện trước khi duyệt.' },
      { t: 'h3', x: 'C3. Duyệt chênh lệch sản lượng' },
      { t: 'img', src: 'gtd-12-duyet-chenh-lech', w: 720, h: 460, cap: 'Hình 12. Bốn phương án khi lệch quá ngưỡng.' },
      { t: 'table', head: ['Phương án', 'Kết quả', 'Khi nào chọn'], rows: [
        ['Nhận sản lượng AI đề xuất (mỗi mã × hệ số)', 'Sản lượng theo điện; khi ghi, điện xuất hết vào giá thành', 'Hoá đơn điện và định mức đều đúng'],
        ['Giữ sản lượng gốc, xuất điện theo định mức', 'Phần điện chênh để lại kho, xử lý riêng', 'Sản lượng đếm thực tế đáng tin hơn điện'],
        ['Dừng: quay lại sửa hoá đơn điện hoặc định mức', 'Không đổi gì', 'Thấy số kWh hoặc định mức sai'],
        ['Để sau', 'Giữ trạng thái chờ duyệt', 'Chưa đủ thông tin'],
      ] },
      { t: 'h3', x: 'C4. Nạp vào Kết chuyển thành phẩm và Ghi' },
      { t: 'p', x: 'Chạy lại bước 4: phần mềm hỏi có nạp sản lượng đã duyệt vào màn hình Kết chuyển thành phẩm không. Bước này chưa ghi sổ. Chọn Yes để nạp, kiểm tra lại lưới rồi bấm Ghi.' },
      { t: 'img', src: 'gtd-13-nap-vao-ket-chuyen', w: 540, h: 170, cap: 'Hình 13. Xác nhận nạp sản lượng đã duyệt.' },
      { t: 'img', src: 'gtd-14-ket-chuyen-sau-nap', w: 1375, h: 940, cap: 'Hình 14. Sau khi nạp: (1) sản lượng mới CUỘN PP 1.061,65 và TÚI PP 26.415,98; (3) khung Cân đối AI cập nhật; (2) bấm Ghi.' },

      { t: 'h2', x: 'D. Hằng tháng – cách 2: làm tay trên Kết chuyển thành phẩm' },
      { t: 'p', x: 'Ở bước 4 chọn “Mở màn hình Kết chuyển thành phẩm (làm tay như cũ)”, hoặc vào Danh mục › 4-5. Kết chuyển thành phẩm. Bấm Lấy từ NXT để nạp mã và sản lượng theo xuất bán, đọc khung Cân đối AI, rồi bấm Ghi.' },
      { t: 'img', src: 'gtd-15-ket-chuyen-lam-tay', w: 1375, h: 940, cap: 'Hình 15. Kết chuyển thành phẩm: (1) Lấy từ NXT để nạp mã và sản lượng theo xuất bán; (2) khung Cân đối AI; (3) Ghi.' },
      { t: 'img', src: 'gtd-16-can-doi-ai', w: 620, h: 320, cap: 'Hình 16. Khung Cân đối AI (chỉ đọc, không ghi sổ): (1) sản lượng so với bán, đề xuất GIẢM 4,74 % theo điện; (2) điện theo định mức 27.810,7 so với 26.492 kWh có trong sổ → THIẾU 1.318,7; (3) NVL theo định mức.' },
      { t: 'table', head: ['Nút', 'Dùng để'], rows: [
        ['Chọn TP tăng…', 'Chọn mã tăng sản lượng, xem NVL đủ hay thiếu trước khi áp dụng'],
        ['Chi tiết điện', 'Xem kWh theo định mức của từng mã'],
        ['Xử lý NVL thiếu…', 'Điều chuyển kho, thay NVL, giảm sản lượng theo NVL thiếu nhất'],
        ['Ô kWh thực', 'Nhập kWh thực tế khi muốn so với số khác số trong sổ'],
      ] },
      { t: 'h3', x: 'D1. Điện chênh lệch so với định mức – chọn cách xử lý khi Ghi' },
      { t: 'p', x: 'Khi bấm Ghi mà điện có trong sổ (tồn đầu + nhập − xuất khác) khác điện theo định mức của phiếu, phần mềm hiện hộp chọn cách xử lý. Hệ số k = điện có trong sổ ÷ điện theo định mức.' },
      { t: 'img', src: 'gtd-17-dien-chenh-lech', w: 710, h: 475, cap: 'Hình 17. Ví dụ điện thiếu: có 26.492 kWh, định mức 27.810,75 kWh, chênh −1.318,75 kWh (k = 0,9526).' },
      { t: 'table', head: ['Số', 'Khi điện DƯ (có > định mức)', 'Khi điện THIẾU (như Hình 17)'], rows: [
        ['1', 'Xuất hết vào giá thành, chia theo định mức điện từng mã (× k)', 'Xuất đúng số điện có trong sổ (× k)'],
        ['2', 'Tăng sản lượng thành phẩm theo điện (mã có định mức điện × k), xem lại lưới rồi Ghi', 'Giảm sản lượng thành phẩm theo điện, xem lại lưới rồi Ghi'],
        ['3', 'Phần dư vào chi phí sản xuất chung xưởng (1543), phân bổ theo tiêu thức chung', '–'],
        ['4', 'Phần dư vào chi phí quản lý doanh nghiệp (642)', '–'],
        ['5', 'Xuất theo định mức, để tồn trong kho', 'Xuất theo định mức (tồn điện âm, cần bổ sung hoá đơn)'],
        ['0', 'Không ghi, quay lại cân đối', 'Không ghi, quay lại cân đối'],
      ] },
      { t: 'note', x: 'Phương án 2 chỉ đổi số trên lưới, chưa ghi; bấm Ghi lần nữa. Phương án 3 và 4 lập một chứng từ xuất điện riêng (Nợ 1543 hoặc 642, Có kho điện); khi ghi lại phiếu, chứng từ này tự lập lại, không nhân đôi. Mọi lựa chọn đều được ghi nhật ký.' },

      { t: 'h2', x: 'Tính thử hệ số k trên trang này' },
      { t: 'p', x: 'Nhập số kWh điện có trong sổ và định mức kWh/ĐVT của từng mã để xem điện theo định mức, hệ số k và sản lượng theo điện (phương án 2 ở bảng trên). Số mặc định lấy theo ví dụ Hình 16 – 17. Công cụ chỉ minh hoạ, không lưu và không kết nối với sổ kế toán. Dùng dấu phẩy cho số thập phân, ví dụ 1,053.' },
      { t: 'calc', x: 'dien' },

      { t: 'h2', x: 'E. Kiểm tra kết quả' },
      { t: 'p', x: 'Sau khi Ghi, phần mềm hỏi có mở báo cáo kiểm tra chi tiết (giá thành so giá bán, kỳ này so kỳ trước) không – chọn Yes.' },
      { t: 'img', src: 'gtd-18-hoi-kiem-tra', w: 820, h: 310, cap: 'Hình 18. Tóm tắt sau khi ghi: số mã, tổng giá thành, mã có giá thành bằng 0 hoặc cao hơn giá bán.' },
      { t: 'img', src: 'gtd-19-bao-cao-kiem-tra', w: 720, h: 530, cap: 'Hình 19. Báo cáo kiểm tra giá thành: mở Excel chi tiết, mở trang HTML hoặc đóng.' },
      { t: 'img', src: 'gtd-20-excel-kiem-tra', w: 1100, h: 740, cap: 'Hình 20. Tệp Excel gồm các sheet TongQuan, GiaThanh_GiaBan, KyNay_KyTruoc, TheoThang, MucTieu, CanhBao.' },
      { t: 'img', src: 'gtd-21-chi-tiet-gia-thanh', w: 1440, h: 420, cap: 'Hình 21. Chi tiết giá thành sản phẩm hoàn thành tháng 1/2026: tổng 718.195.914 (NVL 700.053.595, nhân công 8.310.000, sản xuất chung 9.832.319).' },
      { t: 'p', x: 'Xem báo cáo Chi tiết giá thành sản phẩm hoàn thành để đọc số lượng, chi phí nguyên vật liệu, nhân công, sản xuất chung, tổng giá thành và giá thành đơn vị của từng mã. Mở lại báo cáo kiểm tra để xem mã nào có giá thành cao hơn giá bán hoặc lãi mỏng. Cuối cùng quay về Trình tự giá thành và bấm Kiểm lại.' },
      { t: 'img', src: 'gtd-22-trinh-tu-ket-qua', w: 710, h: 610, cap: 'Hình 22. Trình tự sau khi ghi: bước 4 “Máy AI: lệch 6,17 %, đã ghi” kèm tồn điện cuối tháng; bước 6 nêu mã có giá thành cao hơn giá bán.' },
      { t: 'note', x: 'Bước 4 báo “Tồn điện cuối tháng” khác 0 (âm hoặc dương) nghĩa là điện mua vào chưa khớp điện đã xuất cho sản xuất. Xem lại phiếu nhập điện, định mức điện, hệ số NVL / kWh, rồi ghi lại phiếu kết chuyển và chọn phương án xuất hết điện (mục D1).' },

      { t: 'h2', x: 'Lỗi hay gặp và cách xử lý' },
      { t: 'table', head: ['Hiện tượng', 'Nguyên nhân thường gặp', 'Xử lý'], rows: [
        ['Cân đối AI báo “chưa có định mức điện – bỏ qua”', 'Thành phẩm thiếu dòng mã điện trong định mức', 'Thêm dòng mã điện (kWh / 1 đơn vị) ở bước 2'],
        ['NVL theo điện và theo sản lượng lệch lớn bất thường', 'Hệ số NVL / kWh nhập ngược (kWh/kg thay vì kg/kWh) hoặc sai đơn vị', 'Hệ số là kg hạt cho 1 kWh; dùng “Lấy hệ số từ: tính từ các tháng trước” để đối chiếu'],
        ['“kWh trên hoá đơn điện tải về: 0 ← KHÁC SỐ”', 'Phiếu nhập điện chưa khớp hoá đơn tải về, hoặc chưa tải hoá đơn điện', 'Kiểm tra số kWh trên phiếu nhập điện'],
        ['Tồn điện cuối tháng âm', 'Xuất điện theo định mức nhiều hơn điện mua vào', 'Ghi lại phiếu, chọn “xuất đúng số điện có” hoặc giảm sản lượng; bổ sung hoá đơn nếu thiếu'],
        ['Tồn điện cuối tháng dương', 'Định mức điện thấp, hoặc điện dư không vào giá thành', 'Chọn xuất hết, tăng sản lượng, hoặc đưa phần dư vào 1543 / 642'],
        ['Ngành nhựa báo đỏ dù xưởng chạy bình thường', 'Chọn sai nhóm sản phẩm (ví dụ túi chọn nhầm bao bì)', 'Bấm lại Ngành nhựa, chọn đúng dây chuyền mẫu'],
        ['Mã điện không đọc được kWh', 'Đơn vị tính mã điện là KG, hoặc phiếu nhập điện chỉ có tiền', 'Sửa đơn vị thành KWH; nhập số lượng kWh trên phiếu'],
      ] },
      { t: 'h2', x: 'Nguyên tắc chung' },
      { t: 'ol', items: [
        'Làm từ trên xuống theo Trình tự; sau mỗi thay đổi bấm Kiểm lại.',
        'Máy giá thành và Cân đối AI chỉ đọc và đề xuất; số vào sổ khi kế toán bấm Ghi.',
        'Mọi báo cáo được lưu tệp trong thư mục giá thành của bộ sổ để đối chiếu về sau.',
        'Nên chạy thử trên bản sao sổ trước khi áp dụng cho kỳ thật.',
      ] },
      { t: 'contact', x: 'Cần hướng dẫn trực tiếp trên bộ sổ của doanh nghiệp hoặc muốn xem demo giá thành theo điện, liên hệ' },
    ],
  },
  {
    slug: 'ai-tu-dong-hoa-12-buoc',
    title: 'AI tự động hoá theo tháng: 12 bước từ hoá đơn đến tờ khai trong UNESCO AI',
    date: '2026-10-19',
    topic: 'AI kế toán',
    description: 'Lộ trình 12 bước AI Tự động hoá cho từng tháng kế toán trong UNESCO AI: AI làm trước, kế toán kiểm tra và quyết định.',
    blocks: [
      { t: 'lead', x: 'UNESCO AI không thay người kế toán: AI làm trước các việc lặp lại, kế toán kiểm soát và quyết định.' },
      { t: 'h2', x: 'AI có thay thế kế toán không? Không' },
      { t: 'p', x: 'UNESCO AI không được tạo ra để thay người kế toán. AI làm trước những việc lặp đi lặp lại, mất nhiều thời gian và dễ sai sót, để người kế toán có thêm thời gian cho phần quan trọng hơn: kiểm tra, kiểm soát, phân tích và quyết định.' },
      { t: 'p', x: 'Một tháng kế toán gồm hàng chục việc theo đúng thứ tự: hoá đơn điện tử, hạch toán, sổ phụ ngân hàng, lương và bảo hiểm, khấu hao và phân bổ, giá thành, kiểm soát, khoá sổ, thuế, sổ sách và báo cáo. UNESCO AI gom mười hai bước đó trên một khung AI Tự động hoá cho từng tháng: kế toán chọn tháng, đi lần lượt từng bước; ở mỗi bước máy làm phần đọc, tính và lập sẵn, còn kế toán kiểm tra, sửa và quyết định ghi sổ. Tiến độ hiển thị ngay trên màn hình, ví dụ "Đã xong 11/12 bước", nên không ai phải tự nhớ mình đang làm dở ở đâu.' },
      { t: 'h2', x: 'Lộ trình 12 bước của một tháng' },
      { t: 'p', x: 'Màn hình "Các bước AI tự động" liệt kê 12 bước theo đúng thứ tự làm, mỗi bước có dấu "xong" khi đã hoàn thành:' },
      { t: 'ol', items: ['Tải hoá đơn điện tử', 'Hạch toán hoá đơn', 'Sổ phụ ngân hàng', 'Lương và bảo hiểm', 'Khấu hao, phân bổ công cụ', 'Giá thành sản phẩm', 'Kiểm soát công nợ, vật tư', 'Soát rủi ro hoá đơn', 'Bút toán cuối kỳ', 'Việc cần làm', 'Kiểm tra, khoá sổ tháng', 'Tờ khai thuế, báo cáo'] },
      { t: 'p', x: 'Thứ tự đi từ chứng từ đầu vào (bước 1 đến 4), qua khấu hao, giá thành và các bước kiểm soát, rồi mới đến khoá sổ, tờ khai và báo cáo; màn hình nhắc "Bấm từng bước theo thứ tự". Dữ liệu được phân tích theo Thông tư 133 và kế toán luôn sửa được trước khi ghi.' },
      { t: 'p', x: 'Mỗi bước đi qua cùng một khuôn năm giai đoạn, hiển thị thành thanh tiến trình ở đầu màn hình:' },
      { t: 'ol', items: ['Chọn bước', 'AI phân tích và gợi ý xử lý dữ liệu', 'Người dùng kiểm tra và xác nhận', 'Hệ thống tự động thực hiện', 'Xem kết quả và nhật ký'] },
      { t: 'h2', x: 'AI làm trước ở từng khâu, kế toán quyết định' },
      { t: 'p', x: 'Bảng dưới đây cho thấy AI làm trước gì ở từng khâu và phần nào luôn thuộc về người làm kế toán.' },
      {
        t: 'table',
        head: ['Khâu', 'AI làm trước', 'Kế toán quyết định'],
        rows: [
          ['Hoá đơn điện tử', 'Tải, đọc và phân tích dữ liệu; nhận diện hoá đơn mua vào, bán ra; ghép mã khách hàng, nhà cung cấp, hàng hoá; phát hiện những mã còn thiếu', 'Bổ sung hoặc duyệt các mã còn thiếu'],
          ['Hạch toán', 'Đọc nội dung nghiệp vụ; đối chiếu dữ liệu và lịch sử đã được kế toán duyệt; đề xuất tài khoản, mã đối tượng và chứng từ; trường hợp đủ độ tin cậy xử lý nhanh, trường hợp cần xem lại thì cảnh báo', 'Quyết định các trường hợp AI cảnh báo'],
          ['Sổ phụ ngân hàng', 'Đọc từng dòng giao dịch; phân tích nội dung chuyển khoản; nhận diện người trả tiền, người nhận tiền; tìm khách hàng, nhà cung cấp; tìm hoá đơn và công nợ đang mở; đề xuất tài khoản đối ứng; hỗ trợ lập phiếu báo Có, báo Nợ', 'Xem lại và xác nhận thay vì dò từng dòng sao kê bằng tay'],
          ['Bảng lương và bảo hiểm', 'Tiếp nhận và đối chiếu dữ liệu bảng lương; hỗ trợ lập chứng từ lương; đối chiếu các khoản liên quan đến bảo hiểm; hỗ trợ chuẩn bị biểu mẫu, hồ sơ lao động – BHXH theo dữ liệu đã có', 'Kế toán và người phụ trách kiểm tra, xác nhận cuối cùng'],
          ['Khấu hao, chi phí trả trước, công cụ dụng cụ', 'Theo dõi kỳ; tính theo dữ liệu và thiết lập đã khai báo; nhắc việc nào đã làm, việc nào chưa làm, việc nào cần kiểm tra trước khi kết chuyển cuối kỳ', 'Kiểm tra số liệu và ghi chứng từ'],
          ['Giá thành', 'Đề xuất và đối chiếu định mức nguyên vật liệu; kiểm tra nguyên vật liệu sử dụng so với sản lượng; phân bổ chi phí theo sản phẩm hoặc đối tượng tính giá thành; hỗ trợ tính giá thành nhập kho; cân đối nguyên vật liệu, điện, nhân công và các khoản chi phí liên quan', 'Xác nhận sản lượng, kiểm tra định mức, duyệt phiếu kết chuyển và quyết định phương án cuối cùng'],
        ],
      },
      { t: 'p', x: 'Giá thành là phần mà mỗi ngành có một bài toán khác nhau: sản xuất khác xây dựng, thương mại khác gia công, mỗi doanh nghiệp có định mức, nguyên vật liệu và cách phân bổ riêng. Vì vậy AI làm phần tính toán và phân tích trước, còn phương án cuối cùng do kế toán quyết định.' },
      { t: 'h2', x: 'Rà soát và kiểm soát để kế toán không bỏ sót' },
      { t: 'p', x: 'Công việc kế toán không dừng ở nhập liệu: một bộ sổ còn phải được kiểm tra. AI tự động rà soát để tìm mã khách hàng, nhà cung cấp, vật tư có dấu hiệu trùng; phát hiện các trường hợp trả hộ hoặc cần xem lại công nợ; phát hiện tồn kho âm; kiểm tra tài khoản và tài khoản chi tiết có dấu hiệu bất thường; rồi đề xuất hướng xử lý. Dòng nào cần xem lại, AI chỉ ra.' },
      { t: 'p', x: 'Ở bước soát rủi ro hoá đơn, AI cảnh báo hoá đơn mua vào từ 5 triệu đồng trở lên cần kiểm tra điều kiện thanh toán không dùng tiền mặt theo quy định; kiểm tra hoá đơn hủy, hoá đơn thay thế, hoá đơn điều chỉnh; hỗ trợ đối chiếu thông tin người bán có dấu hiệu rủi ro; kiểm tra mã của cơ quan thuế, thời điểm lập, ký và các thông tin liên quan trên hoá đơn. Mục đích không phải để AI kết luận thay kế toán, mà để kế toán không bỏ sót những điểm cần kiểm tra.' },
      { t: 'p', x: 'Sang bước 10, AI gom kết quả từ các lần kiểm tra, phân loại theo mức độ cần chú ý, chỉ ra màn hình cần xử lý, lưu nhật ký công việc và theo dõi việc đã xử lý. Kế toán trả lời từng việc bằng ba lựa chọn "Không phải lỗi", "Đã làm" hoặc "Hẹn kỳ sau"; máy nhớ các việc đã trả lời và kiểm tra lại sau khi kế toán sửa số liệu.' },
      { t: 'h2', x: 'Điểm sẵn sàng khoá sổ cho biết tháng đã đủ điều kiện khoá hay chưa' },
      { t: 'p', x: 'Trước khi khoá sổ, bước 11 chấm tháng trên thang 100 điểm. Máy đếm số lỗi, số cảnh báo và số bước khoá sổ chưa làm trong kỳ, rồi trừ điểm theo công thức cố định:' },
      { t: 'formula', x: 'Điểm = 100 − 15 × số lỗi − 5 × số cảnh báo − 8 × số bước chưa làm' },
      { t: 'p', x: 'Từ 90 điểm trở lên là sẵn sàng; từ 70 đến 89 là còn việc; dưới 70 điểm hoặc còn lỗi là chưa nên khoá sổ. Những mục máy kiểm tra được chia thành ba nhóm:' },
      {
        t: 'table',
        head: ['Nhóm', 'Điểm trừ mỗi mục', 'Ví dụ máy kiểm tra'],
        rows: [
          ['Lỗi, phải xử lý trước khi khoá', '15', 'Tổng Nợ khác tổng Có trong kỳ; chứng từ lệch Nợ/Có; tiền mặt, tiền gửi (111, 112) âm theo ngày; tài khoản dư sai bên cuối kỳ; tồn kho âm cuối kỳ; hoá đơn mua từ 5 triệu trả bằng tiền mặt'],
          ['Cảnh báo, nên xem', '5', 'Tài khoản doanh thu, chi phí, 911 còn số dư chưa kết chuyển; chi phí sản xuất dở dang (154) còn số dư cuối kỳ; tháng có xuất kho thành phẩm nhưng chưa lập phiếu kết chuyển thành phẩm'],
          ['Bước khoá sổ chưa làm', '8', 'Trích khấu hao tài sản cố định; phân bổ chi phí trả trước (242); tính lương, trích bảo hiểm xã hội'],
        ],
      },
      { t: 'p', x: 'Chấm xong, màn hình liệt kê từng mục kèm gợi ý xử lý và các lối đi thẳng: mở tệp Excel chi tiết "Kiểm tra trước khoá sổ", mở màn hình kiểm soát công nợ và vật tư, mở màn hình kết chuyển cuối kỳ và báo cáo, rồi "Chấm lại" sau khi đã sửa. AI cũng nhắc sao lưu dữ liệu trước khi khoá, nhưng không tự ý khoá sổ: kế toán kiểm tra, kế toán xác nhận, và chỉ khi được đồng ý phần mềm mới thực hiện bước tiếp theo. Lưu ý: cảnh báo về hoá đơn trả tiền mặt là cảnh báo của phần mềm để kế toán đối chiếu, không thay cho quy định thuế hiện hành.' },
      { t: 'h2', x: 'Giá thành được dẫn dắt từng bước, làm từ trên xuống' },
      { t: 'p', x: 'Với doanh nghiệp sản xuất, bước 6 cần nhiều dữ liệu từ trước, nên màn hình Giá thành được dựng thành một "trình tự giá thành tháng, làm từ trên xuống". Kế toán chọn tháng, bấm "Kiểm lại" để máy chấm lại trạng thái, rồi đi từng dòng. Mỗi dòng có nút "Làm bước này" và một chấm màu báo tình trạng: xanh là xong, lam là máy đã ghi, cam là chờ duyệt, đỏ là còn thiếu.' },
      { t: 'p', x: 'Trình tự gồm bảy mốc: chọn loại hình sản xuất một lần (hàng loạt theo điện, hàng loạt, theo đơn hàng hoặc gia công); lập hồ sơ định mức một lần; định mức nguyên vật liệu; xem chi phí tháng trên các tài khoản 1541, 1542, 1543; lấy sản lượng thành phẩm từ phiếu kết chuyển; tính và ghi giá thành; cuối cùng kiểm tra kết quả. Nếu thiếu phiếu kết chuyển tháng, dòng sản lượng tự báo thiếu và chỉ ra nơi cần mở, nên kế toán biết mình còn thiếu gì.' },
      { t: 'p', x: 'Bên cạnh đó là danh mục công cụ sắp theo cùng thứ tự: hồ sơ định mức, định mức nguyên vật liệu theo mã, định mức tự động bằng AI, định mức theo tỷ lệ giá bán (kèm phân loại và danh sách lô sản xuất, dở dang đầu kỳ), phân bổ chi phí theo đối tượng, kết chuyển thành phẩm, tính lại giá xuất kho, sổ giá thành, báo cáo kiểm tra và chuẩn hoá dữ liệu giá thành. Trong lộ trình 12 bước, doanh nghiệp thương mại, dịch vụ không sản xuất có thể bỏ qua bước này.' },
      { t: 'h2', x: 'Thuế và báo cáo: chuẩn bị sẵn, người dùng ký và nộp' },
      { t: 'p', x: 'Ở bước 12, UNESCO AI hỗ trợ chuẩn bị và đối chiếu tờ khai thuế giá trị gia tăng, hồ sơ thuế thu nhập cá nhân, báo cáo tài chính, sổ sách kế toán, số liệu giữa tờ khai và sổ kế toán, cùng các chỉ tiêu cần kiểm tra trước khi xuất dữ liệu. Sau khi kế toán xác nhận, phần mềm xuất dữ liệu, báo cáo và các tệp cần thiết theo quy trình.' },
      { t: 'p', x: 'Người dùng là người kiểm tra số liệu tờ khai, ký số, nộp hồ sơ lên cổng thuế theo quy định và lưu tờ khai đã nộp. Đây là phần luôn nằm ở cột "Người dùng cần làm" trên màn hình, và người làm kế toán cũng là người chịu trách nhiệm về số liệu.' },
      { t: 'h2', x: 'Nhìn toàn cảnh nhiều công ty trên cùng một màn hình' },
      { t: 'p', x: 'Với văn phòng dịch vụ kế toán, lộ trình 12 bước là việc lặp lại cho từng khách mỗi tháng, nên phần mềm đặt thêm hai bảng nhỏ ngay trên màn hình chính. Bảng "Quản lý công việc" cho biết hôm nay là ngày nào, bao nhiêu việc quá hạn, bao nhiêu việc trong 7 ngày tới và việc gần nhất (ví dụ đóng BHXH). Bảng "Điều hành các công ty" đếm số bộ sổ đang quản lý, chia theo ba mức đỏ, vàng, xanh, và nêu luôn công ty "cần làm ngay"; một nút mở Bảng điều hành để xem chi tiết. Bảng 12 bước cũng nằm ngay bên phải màn hình chính, với bước đang làm được tô sáng.' },
      { t: 'p', x: 'Phía trên cửa sổ làm việc là một hàng công cụ duy nhất gồm Hoá đơn, Sổ phụ NH, Lương và BHXH, Giá thành, Kết nối BHXH, Công việc, Hải quan, Báo cáo và thuế, Cổng thuế. Nhiều màn hình có khung "AI hỗ trợ tự động xử lý" ghi rõ ba việc máy sẽ làm ở màn hình đó.' },
      {
        t: 'table',
        head: ['Màn hình', 'Những việc có sẵn trên màn hình'],
        rows: [
          ['Sổ phụ ngân hàng', 'Nhập sổ phụ, phân tích, chọn các dòng cùng nội dung, sửa hàng loạt, lập chứng từ để xem trước, ghi tự động, xuất Excel'],
          ['Lương nhân viên', 'Sơ đồ chức năng từ lương, điều chỉnh lương, phụ cấp, chấm công tăng ca, chấm công trích lương, giảm trừ gia cảnh, lương khu công nghiệp, tính thuế TNCN, tra cứu chứng từ'],
          ['Báo cáo và thuế', 'Xuất tờ khai 01/GTGT, bảng kê mua vào, bảng kê bán ra, đối chiếu hoá đơn điện tử; cuối năm có thuế TNDN, TNCN, báo cáo tài chính B01, B02, B03, B09 và xuất tất cả sổ 1 lần'],
          ['Cổng thuế', 'Mở cổng và đăng nhập, tải dữ liệu, lấy bảng đang mở trên cổng, đối chiếu số nộp thuế với sổ sách, xuất Excel'],
        ],
      },
      { t: 'p', x: 'Nhờ vậy một người làm kế toán có thể nhìn công ty nào đang đỏ, mở đúng công ty đó, đi từng bước trong 12 bước và chỉ dừng khi cần quyết định, mà không phải tự nhớ mình đang dở bước nào.' },
      { t: 'h2', x: 'Click, xem, duyệt: kế toán giữ quyền kiểm soát' },
      { t: 'p', x: 'Nguyên tắc quan trọng nhất của UNESCO AI là: AI làm trước, kế toán kiểm tra, kế toán quyết định. Mười hai bước gom trên một khung AI, và người làm kế toán chỉ cần ba thao tác:' },
      {
        t: 'table',
        head: ['Thao tác', 'Ý nghĩa'],
        rows: [
          ['Click', 'AI xử lý dữ liệu, phân tích và đề xuất chứng từ, hạch toán'],
          ['Xem', 'Kế toán kiểm tra sổ sách, báo cáo, cảnh báo và kết quả AI đã thực hiện'],
          ['Duyệt', 'Kế toán xác nhận nghiệp vụ, ghi sổ và hoàn thiện hồ sơ'],
        ],
      },
      { t: 'p', x: 'Dữ liệu không được thay đổi chỉ vì AI cho rằng nó đúng; những nghiệp vụ quan trọng phải đi qua bước kiểm soát của người làm kế toán. Việc ký số, nộp hồ sơ cho cơ quan thuế và chịu trách nhiệm về số liệu vẫn thuộc quyền kiểm soát của người làm kế toán. Việc lặp lại để AI làm; việc cần kinh nghiệm và phán đoán thì kế toán quyết định.' },
      { t: 'p', x: 'Kế toán không biến mất; cách làm kế toán cũ đang thay đổi. Khi máy làm phần nhập liệu, dò tìm, đối chiếu và tính toán, người kế toán có thêm thời gian để kiểm soát số liệu, phân tích, phát hiện rủi ro, tư vấn cho doanh nghiệp và đưa ra quyết định tốt hơn. Vì vậy câu hỏi nên đặt ra không phải là "AI có thay thế kế toán hay không?", mà là: từ hôm nay, còn bao nhiêu công việc lặp lại và nhàm chán mà kế toán vẫn phải tự làm?' },
      { t: 'h2', x: 'Đầu tư một lần, sử dụng lâu dài, không phí hàng năm' },
      { t: 'p', x: 'UNESCO AI tính chi phí đầu tư một lần, sử dụng mãi mãi và không phí hàng năm. Đây là phần mềm kế toán offline với dữ liệu linh hoạt, và kế toán luôn giữ quyền kiểm soát.' },
      { t: 'h2', x: 'Ranh giới rõ ràng và đăng ký demo' },
      { t: 'p', x: 'Nút "AI làm tự động bước này" chỉ làm các việc nằm trong cột "AI sẽ làm tự động", rồi mở màn hình cho phần người dùng cần duyệt. Ký số và nộp tờ khai lên cổng thuế luôn do kế toán thực hiện; điểm sẵn sàng khoá sổ là căn cứ tham khảo để kế toán quyết định có khoá hay không. Lộ trình hiện hiển thị theo Thông tư 133, bước giá thành dành cho doanh nghiệp sản xuất và có thể bỏ qua với doanh nghiệp thương mại, dịch vụ. Các cảnh báo về thuế, như hoá đơn trả tiền mặt, là gợi ý của phần mềm để kế toán đối chiếu với quy định hiện hành, không thay cho tư vấn pháp lý.' },
      { t: 'contact', x: 'Tham khảo và đăng ký demo, liên hệ' },
      { t: 'p', x: 'UNESCO AI: AI có thể nhanh, nhưng số liệu kế toán không được mất kiểm soát.' },
    ],
  },
  {
    slug: 'loi-ich-ke-toan-dich-vu',
    title: 'Lợi ích và điểm khác biệt của UNESCO AI hỗ trợ kế toán dịch vụ',
    date: '2026-10-12',
    topic: 'Kế toán dịch vụ',
    description: 'UNESCO AI cho cá nhân và công ty dịch vụ kế toán: một màn hình cho mọi khách hàng, đưa số vào HTKK, sổ phụ ngân hàng, giá thành, soát rủi ro và giá đầu tư một lần.',
    blocks: [
      { t: 'lead', x: 'UNESCO AI tích hợp AI toàn diện để hỗ trợ tối đa công việc kế toán, đặc biệt cho cá nhân và công ty dịch vụ kế toán.' },
      { t: 'h2', x: 'Giữ nhiều khách mà không sót hạn, không nhầm số' },
      { t: 'p', x: 'Một kế toán dịch vụ thường giữ hàng chục bộ sổ thuộc nhiều loại hình: công ty thương mại, sản xuất nhỏ, doanh nghiệp siêu nhỏ và hộ kinh doanh. Mỗi tháng hoặc mỗi quý, họ lặp lại cùng một vòng việc: thu chứng từ, hạch toán, soát, lập tờ khai và nộp.' },
      { t: 'p', x: 'UNESCO AI được làm cho đúng vòng việc đó. Phần mềm chạy trên máy của văn phòng, đọc nhiều bộ sổ cùng lúc, nhắc việc còn dở và đưa tờ khai vào HTKK theo đúng mã số thuế của từng khách.' },
      { t: 'h2', x: 'Công việc thật của một văn phòng dịch vụ kế toán' },
      { t: 'p', x: 'Nút thắt thường không nằm ở một bước khó. Nó nằm ở số lần lặp: một thao tác năm phút nhân với 25 khách là hơn hai giờ mỗi kỳ.' },
      { t: 'p', x: 'Vì vậy UNESCO AI tập trung vào sáu khâu: đọc tất cả các sổ từ một chỗ, chạy việc hàng loạt qua đêm, đưa số vào HTKK, nhận đúng đối tác trên sổ phụ, lập giá thành cho khách sản xuất và soát rủi ro trước khi nộp.' },
      { t: 'h2', x: 'Một màn hình cho mọi khách hàng' },
      { t: 'p', x: 'Bảng điều hành khách hàng hiển thị mỗi dòng một bộ sổ, kèm đèn đỏ, vàng hoặc xanh. Mỗi dòng cho biết chứng từ đến tháng nào, hoá đơn và sổ phụ chưa hạch toán, tháng đã khoá và hạn gần nhất.' },
      { t: 'p', x: 'Chạy hàng loạt qua đêm giúp kế toán không phải mở từng sổ để tải hoá đơn hoặc soát rủi ro. Sáng hôm sau, bảng tổng hợp cho biết sổ nào cần xử lý trước.' },
      { t: 'p', x: 'Ô Việc cần làm trên màn hình chính tự hiện khi có việc: tờ khai còn 15 ngày đến hạn, hoá đơn thiếu mã, dòng sổ phụ chưa xử lý, mã khách mới chờ duyệt. Kế toán mở sổ là biết việc cần làm, không phải tự nhớ.' },
      { t: 'h2', x: 'Từ sổ đến HTKK, không gõ lại tờ khai' },
      { t: 'p', x: 'Cuối kỳ, nhiều văn phòng vẫn phải chép số từ sổ sang HTKK cho từng khách. UNESCO AI ghi dữ liệu tờ khai vào đúng thư mục của HTKK theo mã số thuế của bộ sổ, và mã cơ quan thuế lấy từ tờ khai gần nhất.' },
      { t: 'p', x: 'Phần mềm hỗ trợ các tờ khai 01/GTGT, 03/TNDN, 05/KK, 05/QTT và BCTC. Số kỳ trước được lấy tự động: chỉ tiêu [22] lấy từ tờ khai kỳ liền trước, nên không phải lục lại tờ khai cũ.' },
      { t: 'p', x: 'Kế toán vẫn mở HTKK để kiểm tra, ký và nộp. Phần mềm không ký và không nộp thay người dùng.' },
      { t: 'h2', x: 'Sổ phụ ngân hàng: đúng đối tác, xử lý hàng trăm dòng trong vài thao tác' },
      { t: 'p', x: 'Sổ phụ thường tốn nhiều giờ nhất của kế toán dịch vụ, vì mỗi dòng phải tìm đúng khách hàng, đúng tài khoản đối ứng và đúng hoá đơn khớp. UNESCO AI bắt đầu bằng việc nhập sổ phụ theo tài khoản ngân hàng và khoảng ngày: chọn một file hoặc cả thư mục nếu khách có nhiều file, rồi chọn ngân hàng của sao kê hoặc để phần mềm tự nhận theo nội dung file.' },
      { t: 'p', x: 'Sau khi phân tích, mỗi dòng có nhóm nghiệp vụ, tài khoản đối ứng, khách hàng và điểm tin cậy. Trạng thái cho biết việc cần làm: sẵn sàng lập chứng từ, thiếu mã khách hàng, cần xem lại, chờ xác nhận, hoặc bỏ qua các khoản như lãi nội bộ. Kế toán chỉ cần tập trung vào những dòng thiếu mã hoặc cần xem lại. Bấm vào một dòng, khung sửa phía dưới cho chọn đúng khách hàng, tài khoản đối ứng và hoá đơn khớp; khi bạn sửa và ghi, AI ghi nhớ để gợi ý chính xác hơn ở lần sau.' },
      { t: 'p', x: 'Với khối lượng lớn, thẻ Tự động xử lý ghi hàng loạt các dòng có độ tin cậy từ 90 trở lên sau khi kế toán xác nhận một lần. Nếu muốn kiểm tra trước, chọn xem trước để duyệt từng dòng. Nếu nhập nhầm file, nút Hoàn hoặc xóa lần import chỉ gỡ các dòng chưa ghi sổ; chứng từ đã lập không bị ảnh hưởng.' },
      { t: 'h2', x: 'Giá thành cho khách sản xuất: định mức là điểm bắt đầu' },
      { t: 'p', x: 'Với khách sản xuất, việc khó nhất thường là kết chuyển chi phí vào thành phẩm đúng định mức. UNESCO AI có màn hình Định mức thành phẩm để kế toán nhập định mức cho từng thành phẩm, rồi dùng khi kết chuyển.' },
      { t: 'p', x: 'Sản lượng thành phẩm đưa vào Kết chuyển thành phẩm theo một trong hai cách: lấy từ số đã xuất bán, hoặc để AI lập phương án. Màn hình Chọn thành phẩm cho phép tăng hoặc giảm sản lượng từng mã, hoặc áp một tỷ lệ cho toàn bộ mã, và đặt lại về số lượng hiện có khi cần. Dù chọn cách nào, số liệu chỉ ghi sổ khi người dùng bấm Ghi.' },
      { t: 'p', x: 'Giá thành được xem theo đối tượng và theo sổ giá thành, kèm dở dang đầu kỳ và tính lại giá xuất kho trong cùng sơ đồ Giá thành.' },
      { t: 'p', x: 'Với khách chưa có định mức, danh mục của module Giá thành đi theo thứ tự bước: hồ sơ định mức, định mức nguyên vật liệu theo mã, định mức tự động bằng AI và định mức theo tỷ lệ giá bán. Ở cách theo tỷ lệ giá bán, AI đề xuất tỷ lệ chi phí trên giá bán từ số liệu thực tế các tháng gần nhất; kế toán kiểm tra, sửa rồi mới lưu. Tỷ lệ này dùng để lập định mức nguyên vật liệu và làm mục tiêu kiểm tra, còn giá thành ghi sổ vẫn là chi phí thực tế. Phần mềm cũng cảnh báo khi giá vốn nằm ngoài khoảng thường gặp để kế toán kiểm tra lại.' },
      { t: 'h2', x: 'Soát rủi ro và điểm sẵn sàng khoá sổ trước khi nộp' },
      { t: 'p', x: 'Lỗi thuế thường không đến từ một con số sai lớn, mà từ nhiều chênh lệch nhỏ giữa hoá đơn, sổ kế toán và tờ khai. UNESCO AI đối chiếu hoá đơn điện tử với sổ kế toán và xuất ra Excel với các trạng thái Lỗi và Cần xem, để nhận ra hoá đơn lệch tiền hoặc chưa lên bảng kê. Trước khi kê khai, phần mềm cảnh báo khi số trên tờ khai lệch với sổ.' },
      { t: 'p', x: 'Khi sổ đã khớp, kế toán còn lại một bước trước khi khoá sổ tháng: rà lại nhóm Dữ liệu để kiểm tra nhập liệu, tính lại giá xuất kho, chứng từ kết chuyển, rồi mới khoá. Nhờ vậy, sổ nào chưa sẵn sàng sẽ lộ ra trước khi nộp, không phải đợi đến lúc cơ quan thuế báo.' },
      { t: 'h2', x: 'Cổng dịch vụ công và hồ sơ kèm từng chứng từ' },
      { t: 'p', x: 'Ngoài sổ sách, kế toán dịch vụ còn phải theo dõi việc nộp thuế và các hồ sơ đi kèm. Tab Cổng dịch vụ công gom các việc này vào một màn hình: mở cổng và đăng nhập, tải dữ liệu, lấy bảng đang mở trên cổng, xuất Excel và đối chiếu nộp thuế. Chọn khoảng ngày và nhóm để lọc danh sách trước khi làm việc.' },
      { t: 'p', x: 'Nút Mở tệp đính kèm cho phép mở hồ sơ gắn kèm ngay trên màn hình, để kế toán đối chiếu hồ sơ với số liệu trên sổ.' },
      { t: 'h2', x: 'Điểm khác biệt: AI đề xuất, kế toán duyệt cuối cùng' },
      { t: 'p', x: 'Nhiều văn phòng hiện dùng nhiều công cụ rời rạc: một cho hoá đơn, một cho ngân hàng, một cho Excel và một cho HTKK. UNESCO AI gom các việc này vào một phần mềm chạy trên máy của văn phòng, để kế toán làm việc trên một màn hình thay vì chuyển qua lại giữa nhiều chương trình.' },
      { t: 'p', x: 'Điểm khác biệt nằm ở vai trò của AI. AI đọc, đề xuất và cảnh báo; kế toán là người duyệt cuối cùng. Chỉ những dòng có độ tin cậy từ 90 trở lên mới được ghi hàng loạt, và chỉ sau khi kế toán xác nhận; dòng độ tin cậy thấp hoặc thiếu mã nằm ở trạng thái cần xem lại, không tự vào sổ.' },
      { t: 'p', x: 'Phần mềm bám sát quy trình kế toán Việt Nam: hoá đơn điện tử, HTKK, mẫu sổ theo Thông tư 133. Giao diện sơ đồ trực quan giúp người mới làm quen nhanh, và trợ lý AI có thể hướng dẫn ngay trên màn hình.' },
      { t: 'h2', x: 'Đầu tư một lần, giá ưu đãi cho cá nhân và công ty dịch vụ kế toán' },
      { t: 'p', x: 'UNESCO AI tính phí một lần, không có phí hàng năm. Mã kích hoạt AI cấp theo mã số thuế của từng bộ sổ và có thời hạn vĩnh viễn khi mua bản quyền. Việc triển khai được miễn phí, và khách đang dùng UNESCO XI nâng cấp chỉ trả 50% giá gói mới. Với văn phòng dịch vụ, đây là khoản đầu tư một lần cho cả vòng việc lặp lại mỗi tháng, không phải khoản thuê bao trả đều đặn.' },
      { t: 'p', x: 'Cá nhân và công ty làm dịch vụ kế toán mua theo gói 3 MST (MST là mã số thuế, mỗi bộ sổ tính một MST): 10.000.000 đồng cho 3 MST, thêm mỗi MST 1.200.000 đồng, và trên 10 MST được giảm 30%. Ví dụ tính từ bảng giá: một văn phòng giữ 10 bộ sổ trả 10.000.000 đồng cho 3 MST đầu và 8.400.000 đồng cho 7 MST thêm (7 × 1.200.000), tổng 18.400.000 đồng, khoảng 1.840.000 đồng mỗi bộ sổ. Giá lẻ của gói UNESCO AI là 10.000.000 đồng cho một MST. Giá theo bảng giá ngày 09/10/2026; liên hệ để nhận báo giá theo số bộ sổ thực tế.' },
      { t: 'p', x: 'Có một điều kiện cần nói rõ. Mã kích hoạt AI tính theo số trang đọc từ ảnh chụp hoặc PDF dạng ảnh, còn tệp Excel và CSV không bị tính; khi cần đọc thêm, nạp thêm trang và số trang cộng dồn. Phần kế toán vẫn dùng bình thường khi chưa có mã, và có thể dùng thử 15 ngày trước khi mua.' },
      { t: 'h2', x: 'Một ngày làm việc với UNESCO AI' },
      { t: 'p', x: 'Đoạn dưới đây là ví dụ minh họa, số liệu giả định, không phải khách hàng thật. Giả sử một kế toán phụ trách 25 khách. Buổi sáng, kế toán mở phần mềm, đọc danh sách việc cần làm và nhập sổ phụ ngân hàng của những khách có kỳ khai trong tuần. Các dòng có độ tin cậy cao được ghi hàng loạt sau khi xác nhận, còn các dòng thiếu mã khách hàng được gom lại để xử lý riêng.' },
      { t: 'p', x: 'Buổi chiều, kế toán đối chiếu hoá đơn điện tử với sổ, xử lý các dòng ở trạng thái Lỗi và Cần xem, rồi xuất bảng kê. Khi số liệu khớp, kế toán xuất file XML của tờ khai GTGT, mở HTKK để kiểm tra lại trước khi ký và nộp như thường lệ.' },
      { t: 'p', x: 'Kết thúc ngày, kế toán mở lại danh sách chứng từ để đối chiếu nhanh các phiếu do phần mềm lập từ sổ phụ, và lập kế hoạch cho ngày mai từ những việc còn dở.' },
      { t: 'h2', x: 'Những việc chưa làm, nói thẳng với khách' },
      { t: 'p', x: 'UNESCO AI không phải phép màu, và nói rõ giới hạn giúp khách tin những điều phần mềm làm được. Với sổ phụ có nội dung chung chung, ví dụ trả tiền hàng mà không ghi rõ bên nào, hoặc hộ kinh doanh thanh toán qua cá nhân khác tên, AI có thể chưa nhận dạng hết. Những dòng này phải để kế toán kiểm tra và duyệt trước khi ghi.' },
      { t: 'p', x: 'Phần mềm không thay kế toán quyết định hạch toán, không ký và không nộp tờ khai thay người dùng. Với giá thành, sản lượng và định mức, kế toán là người nhập hoặc duyệt; AI đề xuất phương án nhưng không tự ghi sổ khi chưa có lệnh Ghi. Khi gặp bộ sổ có nghiệp vụ ngoài mẫu quen thuộc, nên kiểm tra kết quả đầu kỳ trước khi tin vào báo cáo.' },
      { t: 'h2', x: 'Cách xem thử: demo trên bộ sổ mẫu, không dùng số liệu khách thật' },
      { t: 'p', x: 'Cách an toàn nhất để đánh giá là xem thử trên bộ sổ mẫu, không cần đưa số liệu khách thật vào. Trên website có video hướng dẫn từng module, từ tổng quan, tải hoá đơn điện tử, sổ phụ ngân hàng đến giá thành và trợ lý AI. Ngoài ra, tài liệu hướng dẫn trực quan mô tả 35 chức năng, mỗi chức năng một trang có hình màn hình đánh số, các bước và lưu ý.' },
      { t: 'contact', x: 'Nếu cần tư vấn cài đặt hoặc muốn xem bản demo trực tiếp, liên hệ' },
    ],
  },
];
