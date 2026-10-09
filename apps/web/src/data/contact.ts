/**
 * Thông tin liên hệ hiển thị trên website.
 * Theo banner UNESCO XI + AI (09/10/2026): Kinh doanh – Zalo 093 3456 567;
 * Hỗ trợ 028 3755 5755 – 3755 4755 ext 103-105. Sửa tại đây khi số điện thoại hoặc địa chỉ thay đổi.
 */
import { site, isPlaceholder } from '../config/site.config';

const pick = (v: string, fallback: string) => (isPlaceholder(v) ? fallback : v);

/** Bỏ khoảng trắng/dấu chấm để dùng trong tel: và Zalo. */
export const telHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, '')}`;

export const contact = {
  sales: {
    label: 'Kinh doanh – Zalo',
    mobile: pick(site.company.mobile, '093 3456 567'),
  },
  support: {
    label: 'Hỗ trợ',
    phone: '028 3755 5755',
    phone2: '028 3755 4755',
    ext: 'ext 103-105',
    /** Một dòng hiển thị: 028 3755 5755 – 3755 4755 ext 103-105 */
    line: '028 3755 5755 – 3755 4755 ext 103-105',
  },
  zalo: pick(site.company.zalo, '093 3456 567'),
  email: pick(site.company.email, 'unesco.corp@gmail.com'),
  address: pick(site.company.contactAddress, '30 Đường số 50, Phường 10, Quận 6, TP. Hồ Chí Minh'),
  website: 'https://www.unescosoft.com/',
  websiteLabel: 'www.unescosoft.com',
};

export const zaloHref = `https://zalo.me/${contact.zalo.replace(/\D/g, '')}`;
export const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address)}`;
export const mailHref = `mailto:${contact.email}`;
