/**
 * Đường dẫn có hỗ trợ `base` (GitHub Pages dạng https://<user>.github.io/<repo>/).
 *
 * - Khi deploy lên tên miền riêng hoặc <user>.github.io: BASE_URL = '/', link giữ nguyên.
 * - Khi deploy lên project site: BASE_URL = '/<repo>/', mọi link nội bộ được thêm tiền tố.
 *
 * Luôn dùng url('/duong-dan/') thay cho href="/duong-dan/" trong các file .astro.
 */
const BASE = (import.meta.env.BASE_URL || '/').replace(/\/+$/, '');

const EXTERNAL = /^(?:[a-z][a-z0-9+.-]*:|\/\/|#|\?)/i;

/** Thêm base vào đường dẫn tuyệt đối nội bộ ("/x/"). Link ngoài, #anchor, mailto:, tel: giữ nguyên. */
export function url(path = '/'): string {
  if (!path || EXTERNAL.test(path) || !path.startsWith('/')) return path;
  return `${BASE}${path}`;
}

/** Như url() nhưng không thêm base lần nữa nếu đường dẫn đã có base (dùng cho Astro.url.pathname). */
export function ensureBase(pathname: string): string {
  if (!BASE || pathname === BASE || pathname.startsWith(`${BASE}/`)) return pathname;
  return url(pathname);
}

/** URL tuyệt đối (canonical, sitemap, og:image). */
export function absoluteUrl(path: string, site: string | URL): string {
  return new URL(ensureBase(path), site).toString();
}
