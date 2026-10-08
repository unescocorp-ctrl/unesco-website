/**
 * Thông tin liên hệ hiển thị trên website.
 * Nguồn: chân màn hình chính phần mềm UNESCO XI (Kinh doanh / Hỗ trợ sử dụng / Địa chỉ)
 * và src/config/site.config.ts (email, điện thoại). Sửa tại đây khi số điện thoại hoặc địa chỉ thay đổi.
 */
import { site, isPlaceholder } from '../config/site.config';

const pick = (v: string, fallback: string) => (isPlaceholder(v) ? fallback : v);

/** Bỏ khoảng trắng/dấu chấm để dùng trong tel: và Zalo. */
export const telHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, '')}`;

export const contact = {
  sales: {
    label: 'Kinh doanh',
    mobile: pick(site.company.mobile, '093 3456 567'),
    phone: pick(site.company.phone, '028 3755 4755'),
    ext: 'Ext 101–105',
  },
  support: {
    label: 'Hỗ trợ sử dụng',
    phone: '028 3755 5755',
    ext: 'Ext 106–113',
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
