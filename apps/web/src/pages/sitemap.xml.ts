import type { APIRoute } from 'astro';
import { site } from '../config/site.config';
import { absoluteUrl } from '../utils/url';
const paths=["/", "/ai-ke-toan/", "/ban-quyen/", "/bang-gia/", "/download/", "/faq/", "/gioi-thieu/", "/ho-tro/", "/huong-dan/", "/kien-thuc/", "/lien-he/", "/release-notes/", "/tin-tuc/", "/video/", "/ai-ke-toan/ai-goi-y-hach-toan/", "/ai-ke-toan/ai-hoa-don/", "/ai-ke-toan/ai-ma-khach-hang/", "/ai-ke-toan/ai-ocr/", "/ai-ke-toan/ai-so-phu-ngan-hang/", "/ai-ke-toan/ai-gia-thanh/", "/ho-so-thue/", "/to-khai-bctc/", "/an-toan-kiem-soat-ai/", "/giai-phap/", "/tinh-nang-uu-viet/", "/tinh-nang-ai/", "/giai-phap/ban-le/", "/giai-phap/doanh-nghiep/", "/giai-phap/ke-toan-dich-vu/", "/giai-phap/san-xuat/", "/giai-phap/thuong-mai-dien-tu/", "/giai-phap/xay-dung/", "/legal/complaints/", "/legal/data-protection/", "/legal/delivery/", "/legal/payment/", "/legal/privacy/", "/legal/refund/", "/legal/terms/", "/legal/warranty-support/", "/nghiep-vu/ban-ra/", "/nghiep-vu/bao-cao/", "/nghiep-vu/cong-no/", "/nghiep-vu/gia-thanh/", "/nghiep-vu/kho/", "/nghiep-vu/mua-vao/", "/nghiep-vu/tien-luong/", "/nghiep-vu/tien-ngan-hang/", "/san-pham/unesco-xi-ai/", "/san-pham/unesco-xi/"];
export const GET: APIRoute = ({ site: astroSite }) => {
  const origin = astroSite ?? site.url;
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map(p => `<url><loc>${absoluteUrl(p, origin)}</loc></url>`).join('')}</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
