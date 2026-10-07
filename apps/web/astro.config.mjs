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
const site = process.env.PUBLIC_SITE_URL || 'http://localhost:4321';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  output: 'static',
  build: { format: 'directory' },
  trailingSlash: 'always',
  compressHTML: true,
});
