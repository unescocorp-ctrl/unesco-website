/**
 * MENU CHÍNH – theo sơ đồ "Sitemap & Main Navigation" của bộ thiết kế website.
 * Mỗi nhóm có trang chính (href) và danh sách trang con (items) hiện khi rê chuột.
 * icon: tên biểu tượng trong components/Icon.astro.
 */
export type NavLink = { label: string; href: string; icon: string };
export type NavGroup = { label: string; href: string; items?: NavLink[] };

export const mainNav: NavGroup[] = [
  {
    label: 'Sản phẩm', href: '/san-pham/unesco-xi-ai/', items: [
      { label: 'Tính năng ưu việt', href: '/tinh-nang-uu-viet/', icon: 'star' },
      { label: 'UNESCO AI – Tổng quan', href: '/san-pham/unesco-xi-ai/', icon: 'layers' },
      { label: 'AI Hóa đơn', href: '/ai-ke-toan/ai-hoa-don/', icon: 'receipt' },
      { label: 'AI Sổ phụ', href: '/ai-ke-toan/ai-so-phu-ngan-hang/', icon: 'bank' },
      { label: 'AI Giá thành', href: '/ai-ke-toan/ai-gia-thanh/', icon: 'calculator' },
      { label: 'Hồ sơ Thuế', href: '/ho-so-thue/', icon: 'folder-check' },
      { label: 'Tờ khai & BCTC', href: '/to-khai-bctc/', icon: 'file-xml' },
      { label: 'An toàn & kiểm soát AI', href: '/an-toan-kiem-soat-ai/', icon: 'shield-check' },
      { label: 'Tổng hợp 65 tính năng AI', href: '/tinh-nang-ai/', icon: 'list-checks' },
      { label: 'Tính năng mới 2026', href: '/phan-tich-tinh-nang/', icon: 'sparkles' },
    ],
  },
  {
    label: 'Giải pháp', href: '/giai-phap/', items: [
      { label: 'Giải pháp theo ngành', href: '/giai-phap/', icon: 'lightbulb' },
      { label: 'Kế toán dịch vụ', href: '/giai-phap/ke-toan-dich-vu/', icon: 'users' },
      { label: 'Doanh nghiệp', href: '/giai-phap/doanh-nghiep/', icon: 'building' },
      { label: 'Bán lẻ', href: '/giai-phap/ban-le/', icon: 'store' },
      { label: 'Thương mại điện tử', href: '/giai-phap/thuong-mai-dien-tu/', icon: 'package' },
      { label: 'Sản xuất', href: '/giai-phap/san-xuat/', icon: 'factory' },
      { label: 'Xây dựng', href: '/giai-phap/xay-dung/', icon: 'crane' },
    ],
  },
  { label: 'Bảng giá', href: '/bang-gia/' },
  {
    label: 'Tài nguyên', href: '/huong-dan/', items: [
      { label: 'Download Center', href: '/download/', icon: 'download' },
      { label: 'Guide / Knowledge / Video', href: '/huong-dan/', icon: 'book-open' },
      { label: 'Video hướng dẫn', href: '/video/', icon: 'play-circle' },
      { label: 'Kiến thức kế toán', href: '/kien-thuc/', icon: 'lightbulb' },
      { label: 'Release notes', href: '/release-notes/', icon: 'history' },
      { label: 'Bản quyền & pháp lý', href: '/ban-quyen/', icon: 'award' },
    ],
  },
  {
    label: 'Liên hệ', href: '/lien-he/', items: [
      { label: 'Liên hệ & đăng ký demo', href: '/lien-he/', icon: 'phone' },
      { label: 'Hỗ trợ khách hàng', href: '/ho-tro/', icon: 'headset' },
      { label: 'Câu hỏi thường gặp', href: '/faq/', icon: 'info' },
      { label: 'Điều khoản & chính sách', href: '/legal/terms/', icon: 'scale' },
      { label: 'Về UNESCO', href: '/gioi-thieu/', icon: 'star' },
    ],
  },
];
