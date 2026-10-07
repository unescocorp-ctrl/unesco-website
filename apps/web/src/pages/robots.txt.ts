import type { APIRoute } from 'astro';
import { site } from '../config/site.config';
export const GET: APIRoute = () => new Response(`User-agent: *\nAllow: /\nDisallow: /api/\nSitemap: ${site.url}/sitemap.xml\n`, {headers:{'Content-Type':'text/plain'}});
