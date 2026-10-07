export const site = {
  name: 'UNESCO AI',
  shortName: 'UNESCO AI',

  description:
    'Phần mềm kế toán UNESCO XI tích hợp AI hỗ trợ hóa đơn điện tử, sổ phụ ngân hàng, gợi ý hạch toán, giá thành, kiểm soát dữ liệu, sổ sách và báo cáo kế toán.',

  // Website chính thức.
  // Khi build production có thể đặt:
  // PUBLIC_SITE_URL=https://unesco.com.vn
  url: (import.meta.env.SITE || 'https://unesco.com.vn').replace(/\/+$/, ''),

  // Local dev dùng API .NET.
  // Production để trống nếu website tĩnh và chưa triển khai API.
  apiUrl: (
    import.meta.env.PUBLIC_API_URL ||
    (import.meta.env.DEV ? 'http://localhost:5000/api/v1' : '')
  ).replace(/\/+$/, ''),

  company: {
    legalName: 'Công ty Phát triển Phần mềm UNESCO',

    // Chưa có MST chính thức được xác nhận.
    // KHÔNG dùng số 01234567890 trên ảnh demo.
    taxCode: '{{TAX_CODE}}',

    // Chưa có số đăng ký doanh nghiệp chính thức.
    businessRegistration: '{{BUSINESS_REGISTRATION}}',

    // Chưa xác nhận đây có phải địa chỉ đăng ký pháp lý trên GCNĐKDN hay không.
    registeredAddress: '{{REGISTERED_ADDRESS}}',

    // Địa chỉ liên hệ đang sử dụng trên tài liệu/giao diện UNESCO.
    contactAddress:
      '30 Đường số 50, Phường 10, Quận 6, Thành phố Hồ Chí Minh',

    phone: '028 3755 4755',
    mobile: '093 3456 567',
    zalo: '093 3456 567',

    email: 'sale.unesco@gmail.com',

    // Tạm dùng cùng email công khai cho hỗ trợ.
    // Có thể đổi thành email support riêng khi anh cung cấp.
    supportEmail: 'sale.unesco@gmail.com'
  },

  copyright: {
    certNumber: '1563/2011',
    certDate: '15/06/2011',

    // Theo nội dung Giấy chứng nhận anh đã cung cấp trong phần giới thiệu.
    owner: 'Công ty Cổ phần Phát triển Phần mềm UNESCO'
  },

  socials: {
    facebook: '',
    youtube: ''
  }
} as const;

/**
 * true nếu giá trị vẫn là placeholder {{...}} hoặc rỗng.
 */
export const isPlaceholder = (
  v?: string | null
): boolean => !v || v.includes('{{');

/**
 * Hiển thị an toàn:
 * placeholder {{...}} được thay bằng "Đang cập nhật"
 * thay vì hiển thị trực tiếp lên website.
 */
export const show = (
  v?: string | null,
  fallback = 'Đang cập nhật'
): string => (isPlaceholder(v) ? fallback : String(v));
