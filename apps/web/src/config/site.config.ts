export const site = {
  name: 'UNESCO XI + AI',
  shortName: 'UNESCO XI + AI',
  description: 'Phần mềm kế toán UNESCO XI + AI hỗ trợ hóa đơn điện tử, sổ phụ ngân hàng, gợi ý hạch toán, giá thành và báo cáo kế toán.',
  url: import.meta.env.PUBLIC_SITE_URL || 'https://www.{{DOMAIN}}',
  apiUrl: import.meta.env.PUBLIC_API_URL || 'https://api.{{DOMAIN}}/api/v1',
  company: {
    legalName: '{{LEGAL_COMPANY_NAME}}',
    taxCode: '{{TAX_CODE}}',
    businessRegistration: '{{BUSINESS_REGISTRATION}}',
    registeredAddress: '{{REGISTERED_ADDRESS}}',
    contactAddress: '{{CONTACT_ADDRESS}}',
    phone: '{{PHONE}}',
    mobile: '{{MOBILE}}',
    zalo: '{{ZALO}}',
    email: '{{EMAIL}}',
    supportEmail: '{{SUPPORT_EMAIL}}'
  },
  copyright: {
    certNumber: '{{COPYRIGHT_CERT_NUMBER}}',
    certDate: '{{COPYRIGHT_CERT_DATE}}',
    owner: '{{COPYRIGHT_OWNER}}'
  },
  socials: {
    facebook: '', youtube: ''
  }
} as const;
