import { products } from './products';
import { productScreens } from './product-screens';
import { shots } from './screenshots';

export const homeCompanions = [
  { id: 'salescrm', icon: 'users', tone: 'green', role: 'Tìm kiếm & chăm sóc khách hàng', description: 'Theo dõi cơ hội, báo giá, hợp đồng và hỗ trợ sau bán.' },
  { id: 'erp-unesco', icon: 'bar-chart', tone: 'blue', role: 'Điều hành công ty dịch vụ kế toán', description: 'Nắm khách hàng, công việc, nhân sự và tiến độ.' },
  { id: 'unesco-tax-online', icon: 'file-check', tone: 'teal', role: 'Công nợ, hàng hoá & hoá đơn', description: 'Hỗ trợ khách hàng dịch vụ kế toán theo dõi dữ liệu kinh doanh.' },
  { id: 'unesco-hddt', icon: 'download', tone: 'violet', role: 'Tải & lưu hoá đơn điện tử', description: 'Lưu XML/PDF về máy, tìm hoá đơn và tiếp tục tải phần còn thiếu.' },
  { id: 'unesco-sale', icon: 'store', tone: 'amber', role: 'Bán hàng, tồn kho & công nợ', description: 'Bán hàng tại quầy và theo dõi hoạt động kinh doanh trên máy tính, máy tính bảng, điện thoại.' },
].map((item) => ({ ...item, product: products.find((product) => product.id === item.id)! }));

export const homeWorkflow = [
  {
    key: 'tim-kiem', title: 'Tìm kiếm', icon: 'users', product: 'UNESCO SalesCRM AI',
    heading: 'Biến cơ hội thành khách hàng.',
    description: 'Tập trung thông tin khách hàng, theo dõi cơ hội và chuẩn bị báo giá. Mỗi cuộc trao đổi đều có bước tiếp theo rõ ràng.',
    points: ['Quản lý khách hàng và cơ hội bán hàng', 'Theo dõi báo giá, hợp đồng và chăm sóc'],
    image: '/screenshots/salescrm/tong-quan.webp', alt: 'Màn hình tổng quan UNESCO SalesCRM AI', href: '/san-pham/salescrm/',
  },
  {
    key: 'thuc-hien', title: 'Thực hiện', icon: 'cpu', product: 'UNESCO XII AI',
    heading: 'Để AI hỗ trợ phần việc kế toán.',
    description: 'Thu thập chứng từ, xử lý số liệu và rà soát nghiệp vụ trên phần mềm kế toán. Người phụ trách kiểm tra và quyết định trước khi hoàn tất.',
    points: ['Hoá đơn, ngân hàng, lương và báo cáo', 'AI đề xuất, kế toán kiểm soát và xác nhận'],
    image: productScreens.xiiAi.thumb, alt: productScreens.xiiAi.alt, href: '/unesco-xii-ai/huong-dan/',
  },
  {
    key: 'quan-ly', title: 'Quản lý', icon: 'bar-chart', product: 'ERP_UNESCO',
    heading: 'Nắm tiến độ. Chủ động điều hành.',
    description: 'Tổ chức khách hàng, hợp đồng, công việc và nhân sự trong một quy trình quản lý. Người quản lý biết việc đang ở đâu và ai phụ trách.',
    points: ['Giao việc theo khách hàng và kỳ kế toán', 'Theo dõi tiến độ, hạn xử lý và nhân sự'],
    image: '/huong-dan/huong-dan-su-dung-erp-unesco/dieu-hanh-ai.webp', alt: 'Màn hình Điều hành AI của ERP_UNESCO', href: '/san-pham/erp-unesco/',
  },
  {
    key: 'cham-soc', title: 'Chăm sóc', icon: 'headset', product: 'UNESCO SalesCRM AI',
    heading: 'Đồng hành sau mỗi hợp đồng.',
    description: 'Theo dõi trao đổi và yêu cầu hỗ trợ để đội ngũ chăm sóc đúng người, đúng việc. AI hỗ trợ gợi ý phản hồi cho nhân viên.',
    points: ['Hộp thư đa kênh và lịch sử trao đổi', 'Theo dõi yêu cầu hỗ trợ, thời hạn phản hồi'],
    image: '/screenshots/salescrm/hop-thu.webp', alt: 'Hộp thư đa kênh trong UNESCO SalesCRM AI', href: '/san-pham/salescrm/',
  },
  {
    key: 'tuan-thu', title: 'Tuân thủ', icon: 'shield-check', product: 'UNESCO AI · Báo cáo & kiểm soát',
    heading: 'Kiểm tra kỹ. Hoàn thiện đúng.',
    description: 'Rà soát số liệu, đối chiếu sổ sách và chuẩn bị báo cáo. Duy trì nhật ký xử lý để người phụ trách theo dõi và kiểm tra lại.',
    points: ['Kiểm tra trước khi hoàn thiện báo cáo', 'Người dùng duyệt, ký và nộp hồ sơ'],
    image: shots.reports.src, alt: shots.reports.alt, href: '/to-khai-bctc/',
  },
];

export const homeFaqs = [
  { question: 'Mua UNESCO XII AI được tặng kèm những sản phẩm nào?', answer: `Bộ 5 sản phẩm đi kèm gồm ${homeCompanions.map(({ product }) => product.name).join(', ')}. Mua 1, tặng kèm 5 sản phẩm sử dụng vĩnh viễn. Xem thông tin từng sản phẩm và chính sách triển khai tại trang Bảng giá.` },
  { question: 'UNESCO phù hợp với công ty dịch vụ kế toán như thế nào?', answer: 'Bạn có thể kết hợp phần mềm kế toán để xử lý bộ sổ, ERP_UNESCO để quản lý khách hàng và công việc, SalesCRM AI để theo dõi cơ hội và chăm sóc khách hàng. Bộ phận tư vấn sẽ hướng dẫn lựa chọn theo quy mô và quy trình thực tế của bạn.' },
  { question: 'AI có thay quyền quyết định của kế toán không?', answer: 'AI hỗ trợ đọc dữ liệu, đối chiếu và đề xuất. Kế toán vẫn kiểm tra, xác nhận và chịu trách nhiệm về quyết định nghiệp vụ. Các tuỳ chọn xử lý tự động được quản lý theo chức năng và cấu hình của phần mềm.' },
  { question: 'Có thể xem phần mềm trước khi lựa chọn không?', answer: 'Có. Bạn có thể xem video, ảnh giao diện và tài liệu ngay trên website, hoặc đăng ký buổi demo để được giới thiệu theo nhu cầu của công ty.' },
  { question: 'Tôi đang dùng phiên bản UNESCO cũ thì sao?', answer: 'Bộ phận hỗ trợ sẽ kiểm tra phiên bản và dữ liệu hiện có để tư vấn phương án nâng cấp phù hợp. Bạn có thể xem lịch sử sản phẩm và các bản cập nhật tại mục Bản quyền và Có gì mới.' },
];
