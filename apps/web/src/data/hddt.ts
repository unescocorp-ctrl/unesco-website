import release from './hddt-release.json';
import { site } from '../config/site.config';
import { absoluteUrl } from '../utils/url';

export const hddtRelease = release;
export const hddtSoftwareSchema = {
  '@type': 'SoftwareApplication',
  name: 'UNESCO HĐĐT độc lập',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Windows 11 64-bit',
  softwareVersion: release.version,
  inLanguage: 'vi-VN',
  isAccessibleForFree: true,
  description: 'Công cụ Windows miễn phí để tải, lưu và xuất hóa đơn XML/PDF. Bản thử nghiệm, đăng nhập trực tiếp trong ứng dụng.',
  url: absoluteUrl(release.pagePath, site.url),
  downloadUrl: absoluteUrl(release.downloadPath, site.url),
  screenshot: absoluteUrl(release.imagePath, site.url),
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'VND', url: absoluteUrl(release.pagePath, site.url) },
  publisher: { '@type': 'Organization', name: site.company.legalName },
};
