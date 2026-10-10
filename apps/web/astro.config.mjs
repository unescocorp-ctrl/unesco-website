import { defineConfig } from 'astro/config';

/**
 * Cấu hình deploy (đọc từ biến môi trường lúc build):
 *
 *  PUBLIC_SITE_URL  Origin của website, ví dụ:
 *                     - GitHub Pages:   https://<user>.github.io
 *                     - Tên miền riêng: https://www.ten-mien.vn
 *  BASE_PATH        Thư mục con của website:
 *                     - GitHub Pages project site: /<ten-repo>
 *                     - Tên miền riêng hoặc <user>.github.io: để trống (= "/")
 *
 * Workflow .github/workflows/deploy-github-pages.yml tự điền 2 biến này
 * từ actions/configure-pages, nên không cần sửa tay khi đổi tên repo.
 */
const rawSite = process.env.PUBLIC_SITE_URL || 'http://localhost:4321';
// GitHub Pages (actions/configure-pages) trả về http://www.unescosoft.com cho tên miền riêng,
// làm canonical, og:url, og:image, sitemap.xml và robots.txt ghi http://. Website chạy https,
// nên luôn đổi sang https://, trừ khi chạy thử trên máy (localhost / 127.0.0.1).
const isLocal = /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?(\/|$)/i.test(rawSite);
const site = isLocal ? rawSite : rawSite.replace(/^http:\/\//i, 'https://');
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  output: 'static',
  build: { format: 'directory' },
  trailingSlash: 'always',
  compressHTML: true,
});
