/**
 * Dữ liệu có cấu trúc (schema.org) dùng chung – giúp Google hiểu UNESCO AI là phần mềm,
 * có giá, hệ điều hành và nhà phát triển. Giá lấy theo bảng giá 09/10/2026
 * (không chịu thuế GTGT). Sửa tại đây khi giá thay đổi.
 */
export const softwareSchema = {
  '@type': 'SoftwareApplication',
  name: 'UNESCO AI – Phần mềm kế toán tích hợp AI',
  alternateName: ['UNESCO AI', 'Phần mềm kế toán UNESCO AI', 'UNESCO XI + AI'],
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Phần mềm kế toán',
  operatingSystem: 'Windows',
  inLanguage: 'vi-VN',
  description:
    'Phần mềm kế toán cho doanh nghiệp Việt Nam tích hợp AI: tải hoá đơn điện tử từ Cơ quan Thuế, AI tạo mã và đề xuất chứng từ, đọc sổ phụ ngân hàng, giá thành có Cân đối AI, tờ khai và báo cáo tài chính xuất XML HTKK theo Thông tư 133, Thông tư 99.',
  offers: [
    { '@type': 'Offer', name: 'UNESCO AI – 1 mã số thuế', price: '10000000', priceCurrency: 'VND', availability: 'https://schema.org/InStock' },
    { '@type': 'Offer', name: 'UNESCO XI – 1 mã số thuế', price: '6000000', priceCurrency: 'VND', availability: 'https://schema.org/InStock' },
  ],
  publisher: { '@type': 'Organization', name: 'Công ty TNHH Phần mềm UNESCO' },
};
