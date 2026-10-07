import { defineConfig } from 'astro/config';

const site = process.env.PUBLIC_SITE_URL || 'https://www.example.vn';

export default defineConfig({
  site,
  output: 'static',
  build: { format: 'directory' },
  trailingSlash: 'always',
  compressHTML: true,
});
