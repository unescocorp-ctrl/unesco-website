import type { APIRoute } from 'astro';
import { site } from '../config/site.config';
import { absoluteUrl } from '../utils/url';
import { securityArticles } from '../data/security-articles';
import { articles } from '../data/articles';
import { videos } from '../data/videos';
const paths=["/unesco-xii-ai/huong-dan/", "/unesco-xii-ai/dich-vu-ke-toan/", "/ket-noi-erp-unesco-xii/", "/", "/ai-ke-toan/", "/ban-quyen/", "/bang-gia/", "/download/", "/faq/", "/gioi-thieu/", "/ho-tro/", "/huong-dan/", "/kien-thuc/", "/tai-ve/", "/cshhl/", "/lien-he/", "/release-notes/", "/tin-tuc/", "/video/", "/ai-ke-toan/ai-goi-y-hach-toan/", "/ai-ke-toan/ai-hoa-don/", "/ai-ke-toan/ai-ma-khach-hang/", "/ai-ke-toan/ai-ocr/", "/ai-ke-toan/ai-so-phu-ngan-hang/", "/ai-ke-toan/ai-gia-thanh/", "/ho-so-thue/", "/to-khai-bctc/", "/an-toan-kiem-soat-ai/", "/giai-phap/", "/tinh-nang-uu-viet/", "/tinh-nang-ai/", "/phan-tich-tinh-nang/", "/giai-phap/ban-le/", "/giai-phap/doanh-nghiep/", "/giai-phap/ke-toan-dich-vu/", "/giai-phap/san-xuat/", "/giai-phap/thuong-mai-dien-tu/", "/giai-phap/xay-dung/", "/legal/complaints/", "/legal/data-protection/", "/legal/delivery/", "/legal/payment/", "/legal/privacy/", "/legal/refund/", "/legal/terms/", "/legal/warranty-support/", "/nghiep-vu/ban-ra/", "/nghiep-vu/bao-cao/", "/nghiep-vu/cong-no/", "/nghiep-vu/gia-thanh/", "/nghiep-vu/kho/", "/nghiep-vu/mua-vao/", "/nghiep-vu/tien-luong/", "/nghiep-vu/tien-ngan-hang/", "/san-pham/unesco-xi-ai/", "/san-pham/", "/san-pham/unesco-xi/", "/san-pham/salescrm/", "/san-pham/unesco-sale/", "/san-pham/erp-unesco/"];
export const GET: APIRoute = ({ site: astroSite }) => {
  const securityPaths=["/san-pham/unesco-security/bai-viet/","/san-pham/unesco-security/", "/san-pham/unesco-security/huong-dan/", "/san-pham/unesco-security/bai-gioi-thieu/", "/san-pham/unesco-security/tai-lieu/"];
  const origin = astroSite ?? site.url;
  // Bài viết lấy tự động từ data/articles.ts, kèm ngày cập nhật (lastmod) – thêm bài mới không cần sửa file này.
  const entries = [
    ...[...paths,...securityPaths].map((p) => `<url><loc>${absoluteUrl(p, origin)}</loc></url>`),
    ...securityArticles.map(a=>`<url><loc>${absoluteUrl(`/san-pham/unesco-security/bai-viet/${a.slug}/`,origin)}</loc><lastmod>${a.publishedAt.slice(0,10)}</lastmod></url>`),
    ...videos.map((v) => `<url><loc>${absoluteUrl(`/video/${v.slug}/`, origin)}</loc>${v.uploadDate ? `<lastmod>${v.uploadDate.slice(0, 10)}</lastmod>` : ''}</url>`),
    ...articles.map((a) => `<url><loc>${absoluteUrl(`/kien-thuc/${a.slug}/`, origin)}</loc><lastmod>${a.updated ?? a.date}</lastmod></url>`),
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries.join('')}</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
