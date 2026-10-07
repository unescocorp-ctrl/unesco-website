export const site = {
  name: 'UNESCO XI + AI',
  shortName: 'UNESCO XI + AI',
  description: 'Phần mềm kế toán UNESCO XI + AI hỗ trợ hóa đơn điện tử, sổ phụ ngân hàng, gợi ý hạch toán, giá thành và báo cáo kế toán.',
  // Origin website — lấy từ `site` trong astro.config.mjs (biến PUBLIC_SITE_URL lúc build).
  url: (import.meta.env.SITE || 'http://localhost:4321').replace(/\/+$/, ''),
  // Bản build production: để trống khi chưa có API (ví dụ GitHub Pages) → form chuyển sang email/hướng dẫn liên hệ.
  // Khi chạy local (npm run dev) mặc định trỏ tới API chạy bằng `dotnet run`.
  apiUrl: (import.meta.env.PUBLIC_API_URL || (import.meta.env.DEV ? 'http://localhost:5000/api/v1' : '')).replace(/\/+$/, ''),
  company: {
    legalName: '{{LEGAL_COMPANY_NAME}}',
    taxCode: '{{TAX_CODE}}',
    businessRegistration: '{{BUSINESS_REGISTRATION}}',
    registeredAddress: '{{REGISTERED_ADDRESS}}',
    contactAddress: '{{CONTACT_ADDRESS}}',
    phone: '{{PHONE}}',
    mobile: '{{MOBILE}}',
    zalo: '{{ZALO}}',
    email: '{{EMAIL}}',
    supportEmail: '{{SUPPORT_EMAIL}}'
  },
  copyright: {
    certNumber: '{{COPYRIGHT_CERT_NUMBER}}',
    certDate: '{{COPYRIGHT_CERT_DATE}}',
    owner: '{{COPYRIGHT_OWNER}}'
  },
  socials: {
    facebook: '', youtube: ''
  }
} as const;

/** true nếu giá trị vẫn là placeholder {{...}} hoặc rỗng. */
export const isPlaceholder = (v?: string | null): boolean => !v || v.includes('{{');

/** Hiển thị an toàn: placeholder {{...}} được thay bằng "Đang cập nhật" thay vì lộ ra trên website. */
export const show = (v?: string | null, fallback = 'Đang cập nhật'): string => (isPlaceholder(v) ? fallback : String(v));
