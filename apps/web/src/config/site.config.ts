export const site = {
  name: 'UNESCO AI',
  shortName: 'UNESCO AI',

  description:
    'Phần mềm kế toán UNESCO AI: tải hoá đơn điện tử từ Cơ quan Thuế, AI tạo mã và đề xuất chứng từ, đọc sổ phụ ngân hàng, tờ khai hải quan, báo cáo thuế XML HTKK, giá thành có Cân đối AI.',

  // Website chính thức: https://www.unescosoft.com
  // Khi build trên GitHub Pages, giá trị này lấy tự động từ cấu hình tên miền (biến PUBLIC_SITE_URL).
  url: (import.meta.env.SITE || 'https://www.unescosoft.com').replace(/\/+$/, ''),

  // Local dev dùng API .NET.
  // Production để trống nếu website tĩnh và chưa triển khai API.
  apiUrl: (
    import.meta.env.PUBLIC_API_URL ||
    (import.meta.env.DEV ? 'http://localhost:5000/api/v1' : '')
  ).replace(/\/+$/, ''),

  company: {
    // Theo Giấy chứng nhận đăng ký doanh nghiệp (công ty TNHH một thành viên),
    // đăng ký thay đổi lần thứ 10 ngày 12/02/2026 – Phòng Đăng ký kinh doanh, Sở Tài chính TP. Hồ Chí Minh.
    legalName: 'Công ty TNHH Phần mềm UNESCO',
    legalNameEn: 'UNESCO SOFTWARE COMPANY LIMITED',

    // Mã số doanh nghiệp (đồng thời là mã số thuế).
    taxCode: '0313057886',
    businessRegistration: '0313057886',
    firstRegistered: '18/12/2014',
    latestChange: 'Thay đổi lần thứ 10 – ngày 12/02/2026',
    registrationAuthority: 'Phòng Đăng ký kinh doanh – Sở Tài chính TP. Hồ Chí Minh',

    // Trụ sở chính ghi trên giấy chứng nhận đăng ký doanh nghiệp.
    registeredAddress: 'Số 8 Đường Số 17, Phường Bình Phú, Thành phố Hồ Chí Minh',

    // Địa chỉ liên hệ đang sử dụng trên tài liệu/giao diện UNESCO.
    contactAddress:
      '30 Đường số 50, Phường 10, Quận 6, Thành phố Hồ Chí Minh',

    // Hỗ trợ: 028 3755 5755 – 3755 4755 ext 103-105 (theo banner 09/10/2026).
    phone: '028 3755 5755',
    phone2: '028 3755 4755',
    mobile: '093 3456 567',
    zalo: '093 3456 567',

    email: 'unesco.corp@gmail.com',

    // Email hỗ trợ (đang dùng chung email công ty).
    supportEmail: 'unesco.corp@gmail.com'
  },

  /** Pháp nhân trước đây – chủ sở hữu ghi trên 4 giấy chứng nhận đăng ký quyền tác giả 2011 – 2012. */
  formerCompany: {
    legalName: 'Công ty Cổ phần Phát triển Phần mềm UNESCO',
    legalNameEn: 'Unesco Software Development Corporation',
    businessRegistration: '0310861633',
    registered: '18/05/2011',
    address: '30 Đường số 50, Phường 10, Quận 6, TP. Hồ Chí Minh',
    director: 'Ông Nguyễn Đình Thăng'
  },

  copyright: {
    // Tác giả các phần mềm UNESCO (không đổi khi đổi pháp nhân).
    author: 'Ông Nguyễn Đình Thăng',
    certNumber: '1563/2011/QTG',
    certDate: '15/06/2011',
    issuer: 'Cục Bản quyền tác giả – Bộ Văn hoá, Thể thao và Du lịch',

    // Chủ sở hữu ghi trên giấy chứng nhận tại thời điểm cấp.
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
