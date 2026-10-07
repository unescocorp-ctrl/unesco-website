/// <reference types="astro/client" />

interface ImportMetaEnv {
  /** URL API nhận form (ví dụ https://api.ten-mien.vn/api/v1). Để trống nếu chưa có API. */
  readonly PUBLIC_API_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
