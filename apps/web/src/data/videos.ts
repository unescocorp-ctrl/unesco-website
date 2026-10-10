/**
 * THƯ VIỆN VIDEO PHẦN MỀM KẾ TOÁN UNESCO AI
 * ------------------------------------------------------------------
 * Nguồn: F:\GIOI THIEU HUONG DAN UNESCO XI
 *   - QUẢNG CÁO\GIỚI THIỆU PHẦN MỀM KẾ TOÁN UNESCO AI.mp4
 *   - HƯỚNG DẪN\HUONG DAN AI\GIOI THIEU\HUONG_DAN_TUNG_MODULE\HUONG DAN CHUNG\M01…M08.mp4
 *   - QUẢNG CÁO\TỜ KHAI HAI QUAN.mp4, HƯỚNG DẪN\HUONG DAN AI\XUẤT MÃ QR.mp4
 * Đã nén lại 720p (H.264 + AAC) để phát ngay trên website: public/videos/<slug>.mp4, ảnh bìa <slug>.webp.
 *
 * THÊM / ĐỔI VIDEO:
 *   Cách 1 (đơn giản): chép tệp .mp4 (nên dưới 50 MB) vào apps/web/public/videos/ rồi thêm một dòng bên dưới.
 *   Cách 2 (YouTube): đăng video lên YouTube, dán mã video vào ô youtube: 'AbCdEf12345'.
 *           Khi có mã YouTube, website phát bằng YouTube thay cho tệp mp4.
 */
export type Video = {
  slug: string;
  title: string;
  topic: VideoTopic;
  duration: string;   // mm:ss
  desc: string;
  src: string;        // tệp mp4 trong public, để trống nếu chỉ dùng YouTube
  poster: string;     // ảnh bìa
  youtube: string;    // mã video YouTube (không bắt buộc)
};

export const videoTopics = ['Tổng quan', 'Hoá đơn & chứng từ', 'Hải quan', 'Ngân hàng & công nợ', 'Báo cáo & thuế', 'Giá thành', 'Trợ lý AI'] as const;
export type VideoTopic = (typeof videoTopics)[number];

const v = (slug: string, topic: VideoTopic, title: string, duration: string, desc: string, youtube = ''): Video => ({
  slug, topic, title, duration, desc, youtube, src: `/videos/${slug}.mp4`, poster: `/videos/${slug}.webp`,
});

export const videos: Video[] = [
  v('gioi-thieu-unesco-ai', 'Tổng quan', 'Giới thiệu phần mềm kế toán UNESCO AI', '9:10',
    'Toàn cảnh UNESCO AI: màn hình chính, màn hình AI 8 thẻ, tải hoá đơn, sổ phụ ngân hàng, báo cáo thuế và giá thành.'),
  v('m01-tong-quan', 'Tổng quan', 'Bài 01 · Tổng quan phần mềm và màn hình AI', '3:17',
    'Màn hình chính, 9 phân hệ, thanh menu, lối vào màn hình AI và quy trình xử lý tự động mỗi tháng.'),
  v('m02-tai-hoa-don', 'Hoá đơn & chứng từ', 'Bài 02 · Tải hoá đơn điện tử từ Cơ quan Thuế', '5:03',
    'Đăng nhập, đồng bộ hoá đơn mua vào – bán ra, tải XML/PDF, gộp hoá đơn bán lẻ và Bảng kê định khoản AI.'),
  v('m03-danh-sach-hoa-don', 'Hoá đơn & chứng từ', 'Bài 03 · Danh sách hoá đơn', '3:36',
    'Soi từng hoá đơn: trạng thái, dòng hàng, tài khoản, điểm tin cậy; lập, huỷ, bỏ qua và sửa hàng loạt.'),
  v('m04-tu-dong-xu-ly', 'Hoá đơn & chứng từ', 'Bài 04 · Tự động xử lý: tạo mã và lập chứng từ', '3:20',
    'Đọc bốn ô kiểm soát, tạo mã vật tư – đối tác còn thiếu, xác nhận và xem trước chứng từ hàng loạt.'),
  v('to-khai-hai-quan', 'Hải quan', 'Tờ khai hải quan nhập khẩu (video ngắn)', '0:43',
    'Thẻ Tờ khai HQ: đọc tờ khai từ Excel, ghép mã hàng, nhà cung cấp và chi phí nhập hàng.'),
  v('m05-so-phu-ngan-hang', 'Ngân hàng & công nợ', 'Bài 05 · Sổ phụ ngân hàng', '5:33',
    'Nhập sao kê, AI xếp nhóm – tìm đối tác – tài khoản đối ứng, lập phiếu báo có, báo nợ; công nợ kèm mã QR.'),
  v('cong-no-ma-qr', 'Ngân hàng & công nợ', 'Thông báo công nợ kèm mã VietQR (video ngắn)', '0:37',
    'Lập thông báo công nợ cho từng khách hàng, mỗi thông báo có mã VietQR đúng số tiền, đúng nội dung.'),
  v('m06-bao-cao-nhat-ky', 'Báo cáo & thuế', 'Bài 06 · Báo cáo & nhật ký', '5:55',
    'Xuất 01/GTGT sang HTKK, báo cáo tài chính, quyết toán TNDN, biểu mẫu theo Thông tư 133 và kiểm tra trước khoá sổ.'),
  v('m07-gia-thanh', 'Giá thành', 'Bài 07 · Giá thành có AI', '6:35',
    'Định mức NVL, định mức tự động bằng AI, kết chuyển thành phẩm với Cân đối AI, giá thành theo đối tượng.'),
  v('m08-tro-ly-ai', 'Trợ lý AI', 'Bài 08 · Trợ lý AI ngay trên màn hình', '2:43',
    'Việc nên làm tiếp, giải thích từng nút khi rê chuột và hỏi đáp bằng tiếng Việt.'),
];

export const videoBySlug = (slug: string) => videos.find((x) => x.slug === slug);

/** Mã neo (#) không dấu cho từng nhóm, ví dụ 'Hoá đơn & chứng từ' → 'hoa-don-chung-tu'. */
export const topicSlug = (t: string) =>
  t.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D')
    .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
