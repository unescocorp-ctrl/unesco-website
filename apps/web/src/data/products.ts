/**
 * DANH MỤC SẢN PHẨM VÀ BẢNG GIÁ – MỘT NGUỒN DUY NHẤT
 * ------------------------------------------------------------------
 * Menu "Sản phẩm", trang /san-pham/ và trang /bang-gia/ đều đọc từ tệp này.
 * ĐỔI GIÁ: sửa `price`, `priceNote` của sản phẩm bên dưới (và `offers` trong data/seo.ts cho Google).
 * THÊM SẢN PHẨM: thêm một mục vào `products`, chọn `family` có sẵn; có trang riêng thì điền `href`.
 * Giá theo bảng giá ngày 17/11/2026. MST = mã số thuế (mỗi công ty / bộ sổ một MST).
 */
export type FamilyId = 'ke-toan' | 'dich-vu-ke-toan' | 'ban-hang' | 'chuyen-nganh';

export const families: { id: FamilyId; label: string; color: string; dark: string; soft: string; icon: string }[] = [
  { id: 'ke-toan', label: 'Phần mềm kế toán', color: '#1E9B4B', dark: '#157A39', soft: '#E8F5EC', icon: 'calculator' },
  { id: 'dich-vu-ke-toan', label: 'Dịch vụ kế toán', color: '#C2410C', dark: '#9A3412', soft: '#FFEDD5', icon: 'users' },
  { id: 'ban-hang', label: 'Bán hàng & CSKH', color: '#1C62C6', dark: '#154D9F', soft: '#E8F0FB', icon: 'chat' },
  { id: 'chuyen-nganh', label: 'Quản lý chuyên ngành', color: '#6B4FBB', dark: '#4E3699', soft: '#EFEAFB', icon: 'shield-check' },
];

export type Product = {
  id: string;
  name: string;
  family: FamilyId;
  /** Nhãn nhỏ trên thẻ, ví dụ "Khuyên dùng", "Tặng kèm UNESCO XII AI", "Sắp ra mắt". */
  badge?: string;
  short: string;      // một dòng, dùng trong menu
  tagline: string;    // mô tả trên thẻ
  points: string[];
  price: string;      // giá hiển thị
  unit?: string;      // "/ MST"
  priceNote?: string;
  /** Ghi chú giá cho công ty, cá nhân làm dịch vụ kế toán. */
  serviceNote?: string;
  featured?: boolean;
  /** Trang giới thiệu riêng (để trống nếu chưa có trang). */
  href?: string;
  demo?: string;
  comingSoon?: boolean;
  /** Ảnh giao diện trên thẻ (trong public/). Có `video` thì bấm ảnh phát video; không có thì bấm ảnh mở demo hoặc trang riêng. */
  media?: { img: string; alt: string; video?: string };
};

export const SERVICE_DISCOUNT = 'Trên 10 MST: giảm 30%';

export const products: Product[] = [
  {
    id: 'unesco-xii-ai', name: 'UNESCO XII AI', family: 'ke-toan', badge: 'Khuyên dùng', featured: true,
    short: 'Thế hệ kế toán tiếp theo, tặng kèm 03 sản phẩm',
    tagline: 'Thế hệ phần mềm kế toán tiếp theo của UNESCO, tặng kèm ERP_UNESCO, UNESCO_TAX_Online và UNESCO SalesCRM AI.',
    points: ['Tặng kèm ERP_UNESCO', 'Tặng kèm UNESCO_TAX_Online', 'Tặng kèm UNESCO SalesCRM AI'],
    price: '10.000.000 đ', unit: '/ MST', priceNote: 'Trả phí 1 lần · tặng kèm 03 sản phẩm', serviceNote: SERVICE_DISCOUNT,
    media: { img: '/screenshots/unesco-xii-ai/tong-quan.webp', alt: 'Màn hình Tổng quan điều hành UNESCO XII AI', video: '/videos/gioi-thieu-unesco-ai.mp4' },
  },
  {
    id: 'unesco-ai', name: 'UNESCO AI', family: 'ke-toan', badge: 'Có AI',
    short: 'Kế toán 9 phân hệ + màn hình AI',
    tagline: 'Kế toán 9 phân hệ cộng màn hình AI: tải hoá đơn, đọc sổ phụ, giá thành, kiểm tra trước khoá sổ.',
    points: ['AI đề xuất, kế toán duyệt', 'Hoá đơn, sổ phụ ngân hàng, giá thành có AI', 'Báo cáo theo Thông tư 133, 99'],
    price: '7.000.000 đ', unit: '/ MST', priceNote: 'Trả phí 1 lần · dùng thử 15 ngày', serviceNote: SERVICE_DISCOUNT,
    href: '/san-pham/unesco-xi-ai/',
    media: { img: '/screenshots/ai-tu-dong-xu-ly.webp', alt: 'Màn hình AI Tự động xử lý của UNESCO AI', video: '/videos/m01-tong-quan.mp4' },
  },
  {
    id: 'unesco-xi', name: 'UNESCO XI', family: 'ke-toan', badge: 'Nền tảng',
    short: 'Lõi kế toán đủ nghiệp vụ',
    tagline: 'Lõi kế toán đủ nghiệp vụ: chứng từ, kho, công nợ, giá thành, lương, sổ sách và báo cáo thuế.',
    points: ['9 phân hệ kế toán', 'Tải hoá đơn điện tử, xuất XML HTKK', 'Kích hoạt AI khi cần, nâng cấp 50%'],
    price: '4.500.000 đ', unit: '/ MST', priceNote: 'Trả phí 1 lần · không phí hàng năm', serviceNote: SERVICE_DISCOUNT,
    href: '/san-pham/unesco-xi/',
    media: { img: '/screenshots/bc-so-ke-toan.webp', alt: 'Sổ kế toán trong UNESCO XI', video: '/videos/m06-bao-cao-nhat-ky.mp4' },
  },
  {
    id: 'erp-unesco', name: 'ERP_UNESCO', family: 'dich-vu-ke-toan', badge: 'Tặng kèm UNESCO XII AI',
    short: 'Quản lý toàn diện công ty dịch vụ kế toán',
    tagline: 'Giải pháp toàn diện quản lý công ty dịch vụ kế toán: khách hàng, hợp đồng, công việc, nhân sự và doanh thu phí.',
    points: ['Hồ sơ khách hàng, hợp đồng dịch vụ, phí theo kỳ', 'Lịch hạn nộp tờ khai, giao việc cho từng kế toán', 'Xem tình trạng sổ của mọi khách trên một màn hình'],
    price: 'Tặng kèm UNESCO XII AI', priceNote: 'Dưới 10 khách hàng: miễn phí · trên 10 khách hàng: 1.000.000 đ cho mỗi 10 khách',
    href: '/san-pham/erp-unesco/',
    media: { img: '/huong-dan/huong-dan-su-dung-erp-unesco/dieu-hanh-ai.webp', alt: 'Màn hình Điều hành AI của ERP_UNESCO', video: '/videos/erp-unesco-huong-dan.mp4' },
  },
  {
    id: 'unesco-tax-online', name: 'UNESCO_TAX_Online', family: 'dich-vu-ke-toan', badge: 'Tặng kèm UNESCO XII AI',
    short: 'Công nợ – Hàng hoá – Hoá đơn điện tử cho khách hàng dịch vụ kế toán',
    tagline: 'Công nợ – Hàng hoá – Hoá đơn điện tử cho khách hàng dịch vụ kế toán: khách tự theo dõi, dữ liệu chuyển thẳng cho kế toán dịch vụ.',
    points: ['Công nợ khách hàng, nhà cung cấp', 'Nhập – xuất – tồn hàng hoá', 'Hoá đơn điện tử; kế toán dịch vụ nhận dữ liệu, không nhập lại'],
    price: 'Tặng kèm UNESCO XII AI', priceNote: '0 đ khi mua UNESCO XII AI',
  },
  {
    id: 'salescrm', name: 'UNESCO SalesCRM AI', family: 'ban-hang', badge: 'Tặng kèm UNESCO XII AI',
    short: 'Hộp thư đa kênh, báo giá, hợp đồng, VietQR',
    tagline: 'Từ tin nhắn đến hợp đồng và tiền về: hộp thư Zalo, Facebook, email; báo giá, hợp đồng, VietQR tự gạch nợ.',
    points: ['Hộp thư đa kênh có AI gợi ý', 'Pipeline, báo giá duyệt nhiều cấp', 'Ticket hỗ trợ có SLA'],
    price: 'Tặng kèm UNESCO XII AI', priceNote: '0 đ khi mua UNESCO XII AI',
    href: '/san-pham/salescrm/', demo: '/salescrm/demo/index.html',
    media: { img: '/screenshots/salescrm/tong-quan.webp', alt: 'Màn hình tổng quan UNESCO SalesCRM AI' },
  },
  {
    id: 'unesco-sale', name: 'UNESCO SALE', family: 'ban-hang',
    short: 'Bán tại quầy, tồn kho, công nợ, lợi nhuận',
    tagline: 'Bán hàng tại quầy, theo dõi tồn kho, công nợ và lợi nhuận mỗi ngày trên máy tính, máy tính bảng hay điện thoại.',
    points: ['POS: quét mã vạch, thu tiền, bản nháp', 'Tồn kho, thẻ kho theo kỳ', 'Bán một đơn: tồn kho, công nợ, báo cáo cùng cập nhật'],
    price: '3.000.000 đ', unit: '/ MST (khách hàng)',
    href: '/san-pham/unesco-sale/',
    media: { img: '/screenshots/unesco-sale/tong-quan.webp', alt: 'Màn hình tổng quan UNESCO SALE', video: '/videos/unesco-sale-huong-dan.mp4' },
  },
  {
    id: 'unesco-security', name: 'UNESCO SECURITY', family: 'chuyen-nganh', badge: 'Sắp ra mắt', comingSoon: true,
    short: 'Quản lý công ty dịch vụ bảo vệ',
    tagline: 'Phần mềm quản lý công ty dịch vụ bảo vệ.',
    points: [],
    price: 'Liên hệ', priceNote: 'Đăng ký để nhận thông tin khi ra mắt',
  },
];

export const familyOf = (id: FamilyId) => families.find((f) => f.id === id)!;
export const productsIn = (id: FamilyId) => products.filter((p) => p.family === id);
