import type { APIRoute } from 'astro';
import { site } from '../config/site.config';
import { absoluteUrl, url } from '../utils/url';

export const GET: APIRoute = ({ site: astroSite }) => {
  const origin = astroSite ?? site.url;
  const body = `User-agent: *\nAllow: ${url('/')}\nDisallow: ${url('/api/')}\nSitemap: ${absoluteUrl('/sitemap.xml', origin)}\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
