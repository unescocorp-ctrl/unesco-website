import { articles } from './articles';

export const xiiHub = '/unesco-xii-ai/dich-vu-ke-toan/';
export const xiiGuide = '/tai-lieu/cam-nang-phoi-hop-dvkt-khach-hang-unesco-xii-ai.pdf';
export const xiiHandover = '/tai-lieu/mau-ban-giao-ho-so-unesco-xii.html';
export const xiiRoles = [
  { id: 'all', label: 'Tất cả' },
  { id: 'manager', label: 'Chủ dịch vụ / quản lý' },
  { id: 'accountant', label: 'Kế toán phụ trách' },
  { id: 'customer', label: 'Khách hàng' },
];
const lessonRefs = [
  { slug: 'ket-noi-unesco-xii-erp-unesco', roles: ['manager', 'accountant'], stage: 'Hiểu hệ thống', minutes: 6 },
  { slug: 'chuan-bi-ket-noi-erp-unesco-xii', roles: ['manager', 'accountant'], stage: 'Chuẩn bị', minutes: 5 },
  { slug: 'chuan-bi-ho-so-thang-unesco-xii-ai', roles: ['customer', 'accountant'], stage: 'Bàn giao hồ sơ', minutes: 5 },
  { slug: 'giao-viec-theo-ky-erp-unesco', roles: ['manager', 'accountant'], stage: 'Phân công', minutes: 5 },
  { slug: 'ma-tran-thang-unesco-xii', roles: ['manager', 'accountant'], stage: 'Theo dõi', minutes: 5 },
  { slug: 'xu-ly-can-nguoi-erp-unesco', roles: ['accountant'], stage: 'Xử lý ngoại lệ', minutes: 5 },
  { slug: 'soat-ho-so-yeu-cau-khach-bo-sung-unesco-xii-ai', roles: ['accountant', 'customer'], stage: 'Bổ sung hồ sơ', minutes: 6 },
  { slug: 'cong-cu-khach-goi-ukx-unesco-xii-ai', roles: ['accountant', 'customer'], stage: 'Trao đổi dữ liệu', minutes: 6 },
  { slug: 'kiem-tra-khoa-ky-unesco-xii', roles: ['manager', 'accountant'], stage: 'Kiểm tra kỳ', minutes: 5 },
  { slug: 'doc-bao-cao-chu-doanh-nghiep-unesco-xii-ai', roles: ['manager', 'accountant', 'customer'], stage: 'Bàn giao kết quả', minutes: 5 },
  { slug: 'quy-tac-theo-doanh-nghiep-unesco-xii-ai', roles: ['manager', 'accountant'], stage: 'Quy tắc doanh nghiệp', minutes: 6 },
  { slug: 'nhan-chung-tu-khach-gui-unesco-xii-ai', roles: ['accountant', 'customer'], stage: 'Nhận chứng từ', minutes: 6 },
  { slug: 'sao-ke-ngan-hang-unesco-xii-ai', roles: ['accountant'], stage: 'Sổ phụ ngân hàng', minutes: 7 },
  { slug: 'doc-trang-thai-xu-ly-unesco-xii-ai', roles: ['manager', 'accountant'], stage: 'Đọc trạng thái', minutes: 6 },
  { slug: 'ra-soat-nhieu-bo-so-qua-dem-unesco-xii-ai', roles: ['manager', 'accountant'], stage: 'Rà soát nhiều bộ sổ', minutes: 6 },
  { slug: 'nhat-ky-ai-doi-chieu-ket-qua-unesco-xii-ai', roles: ['manager', 'accountant'], stage: 'Nhật ký và bàn giao', minutes: 6 },
];
export const xiiLessons = lessonRefs.map((ref, index) => {
  const article = articles.find((a) => a.slug === ref.slug);
  if (!article) throw new Error(`Missing XII lesson: ${ref.slug}`);
  return { ...ref, article, number: index + 1 };
});
export const xiiVideoSlugs = ['xii-ho-so-quy-tac', 'xii-ngan-hang-trang-thai', 'xii-ra-soat-nhat-ky', 'erp-xii-tong-quan', 'erp-xii-giao-viec', 'erp-xii-kiem-tra'];
export const xiiFeatures = [
  { title: 'Nhìn tiến độ nhiều bộ sổ', text: 'Ma trận tháng cho biết sổ nào còn việc và phần nào cần mở để kiểm tra.', lesson: 'ma-tran-thang-unesco-xii', product: 'ERP UNESCO + UNESCO XII' },
  { title: 'Giao việc theo khách và kỳ', text: 'Người quản lý chọn bộ sổ, kỳ và các bước cần làm; theo dõi kết quả xử lý.', lesson: 'giao-viec-theo-ky-erp-unesco', product: 'ERP UNESCO' },
  { title: 'Xử lý phần cần người', text: 'Kế toán đọc lý do, đối chiếu nguồn và giải quyết ngoại lệ trước khi kiểm lại.', lesson: 'xu-ly-can-nguoi-erp-unesco', product: 'UNESCO XII AI' },
  { title: 'Hỏi bổ sung đúng hồ sơ', text: 'Soát theo kỳ, xác nhận tài liệu đã có và lập nội dung yêu cầu khách bổ sung.', lesson: 'soat-ho-so-yeu-cau-khach-bo-sung-unesco-xii-ai', product: 'UNESCO XII AI' },
  { title: 'Trao đổi gói có ngày chốt', text: 'Xuất gói cho công cụ khách tương thích, nhận phiếu và kiểm trước khi ghi sổ.', lesson: 'cong-cu-khach-goi-ukx-unesco-xii-ai', product: 'UNESCO XII AI + công cụ khách' },
  { title: 'Trao đổi báo cáo dễ hiểu', text: 'Khách biết kỳ báo cáo, ngày chốt, phần còn tồn và những câu hỏi cần hỏi kế toán.', lesson: 'doc-bao-cao-chu-doanh-nghiep-unesco-xii-ai', product: 'UNESCO XII AI' },
];
