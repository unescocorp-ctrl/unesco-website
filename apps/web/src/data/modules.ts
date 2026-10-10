/**
 * 9 phân hệ kế toán nền tảng của UNESCO AI (lõi UNESCO XI) — đúng theo màn hình chính và các màn hình chức năng trong mã nguồn
 * (FrmMNTongHop, FrmMNVatTu, FrmMNCongNo, FrmMNTaiSan, FrmMNCongCu, FrmMNGiaThanh, FrmMNNhanVien,
 *  FrmMNBaoHiem, FrmMNBaocao và các form nghiệp vụ liên quan).
 */
import type { ShotKey } from './screenshots';
export type Module = { icon: string; title: string; summary: string; features: string[]; href?: string; shot?: ShotKey };

export const modules: Module[] = [
  {
    icon: '🧾', title: 'Chi phí – Tổng hợp', shot: 'modCost', href: '/nghiep-vu/tien-ngan-hang/',
    summary: 'Nhập, tìm kiếm chứng từ tổng hợp và thực hiện các bút toán cuối kỳ.',
    features: [
      'Chứng từ chi phí, thu nợ, trả nợ, mua hàng, bán hàng',
      'Phiếu thu – chi; in hàng loạt theo ngày',
      'Nhật ký chung, chứng từ ghi sổ, tra cứu chứng từ',
      'Kết chuyển cuối kỳ, phân bổ chi phí',
      'Ngoại tệ – tỷ giá, hợp đồng kinh tế, vụ việc',
    ],
  },
  {
    icon: '📦', title: 'Vật tư – Hàng hóa', shot: 'modInventory', href: '/nghiep-vu/kho/',
    summary: 'Quản lý danh điểm, kho và toàn bộ luồng nhập – xuất – tồn.',
    features: [
      'Danh điểm vật tư, quy cách; kho vật tư, thành phẩm, đại lý',
      'Phiếu nhập/xuất; chi phí và giá vốn hàng nhập khẩu',
      'Thẻ kho, bảng tồn kho, kiểm kê tồn kho cuối ngày',
      'Giá vật tư theo từng khách hàng; lưu chuyển nội bộ',
      'Dự phòng giảm giá hàng tồn kho',
    ],
  },
  {
    icon: '🤝', title: 'Công nợ', shot: 'modDebt', href: '/nghiep-vu/cong-no/',
    summary: 'Theo dõi phải thu, phải trả theo từng khách hàng, nhà cung cấp.',
    features: [
      'Danh mục và phân loại khách hàng, nhà cung cấp',
      'Số dư công nợ đầu kỳ',
      'Hóa đơn chưa thanh toán, sổ chi tiết công nợ',
      'Nhân viên bán hàng, kênh phân phối',
    ],
  },
  {
    icon: '🏢', title: 'Tài sản cố định', shot: 'modAsset',
    summary: 'Ghi tăng, giảm, đánh giá lại và trích khấu hao tài sản.',
    features: [
      'Danh sách tài sản, dụng cụ – phụ tùng kèm theo',
      'Tăng, giảm, đánh giá lại tài sản',
      'Ghi chứng từ trích khấu hao',
      'Thẻ TSCĐ, sổ TSCĐ, biên bản bàn giao',
    ],
  },
  {
    icon: '🧰', title: 'Công cụ dụng cụ – Chi phí trả trước', shot: 'modTools',
    summary: 'Theo dõi công cụ, dụng cụ và phân bổ chi phí trả trước.',
    features: [
      'Danh sách công cụ dụng cụ; ghi tăng',
      'Ghi chứng từ trích phân bổ',
      'Sổ CCDC, theo dõi tại nơi sử dụng',
    ],
  },
  {
    icon: '🏭', title: 'Giá thành', shot: 'costBalance', href: '/nghiep-vu/gia-thanh/',
    summary: 'Định mức, tập hợp chi phí và kết chuyển thành phẩm, công trình.',
    features: [
      'Danh điểm công trình, sản phẩm',
      'Định mức thành phẩm theo hóa đơn; điều chỉnh định mức',
      'Dở dang đầu kỳ; kết chuyển thành phẩm',
      'Sổ giá thành theo Thông tư 133 và Thông tư 99',
    ],
  },
  {
    icon: '👥', title: 'Nhân sự – Tiền lương', shot: 'hrPayroll', href: '/nghiep-vu/tien-luong/',
    summary: 'Hồ sơ nhân viên, chấm công, bảng lương và thuế TNCN.',
    features: [
      'Danh sách nhân viên, chức vụ, hợp đồng lao động và phụ lục',
      'Chấm công theo ngày, tăng ca theo giờ',
      'Bảng lương, điều chỉnh lương, bộ phận trích lương',
      'Giảm trừ gia cảnh, bảng kê và tờ khai thuế TNCN',
    ],
  },
  {
    icon: '🛡️', title: 'Lao động – BHXH', shot: 'hrInsurance', href: '/nghiep-vu/tien-luong/',
    summary: 'Lập các danh sách, tờ khai tham gia và điều chỉnh BHXH, BHYT, BHTN.',
    features: [
      'Danh sách lao động tham gia BHXH, BHYT, BHTN',
      'Danh sách điều chỉnh lao động và mức đóng',
      'Phiếu đăng ký, tờ khai tham gia BHXH, BHYT',
      'Bổ sung hồ sơ cá nhân',
    ],
  },
  {
    icon: '📊', title: 'Báo cáo – Sổ kế toán', shot: 'ledgers', href: '/nghiep-vu/bao-cao/',
    summary: 'Trung tâm của hệ thống: sổ sách, báo cáo tài chính, báo cáo thuế, quản trị.',
    features: [
      'Báo cáo tài chính theo Thông tư 133/2016/TT-BTC và Thông tư 99/2025/TT-BTC',
      'Báo cáo thuế GTGT, TNDN, TNCN, môn bài, TTĐB',
      'Sổ cái, sổ chi tiết, nhật ký chung, sổ quỹ, sổ tiền gửi',
      'Sổ kế toán hộ kinh doanh; báo cáo chi nhánh, quản trị',
      'In toàn bộ sổ, xuất Excel, xuất XML HTKK',
    ],
  },
];

/** Tiện ích đi kèm (menu Hệ thống / Dữ liệu / Tải hóa đơn điện tử / Tiện ích). */
export const utilities = [
  { icon: '⬇️', ic: 'download', title: 'Tải hóa đơn điện tử', text: 'Tải hóa đơn mua vào, bán ra và hóa đơn từ máy tính tiền theo kỳ, sẵn sàng tạo chứng từ.' },
  { icon: '📤', ic: 'file-xml', title: 'Xuất XML HTKK', text: 'Xuất bộ báo cáo tài chính và tờ khai quyết toán TNDN ra XML để nộp qua HTKK.' },
  { icon: '💾', ic: 'database', title: 'Lưu trữ tự động', text: 'Tự động sao lưu tệp dữ liệu; gửi tệp dữ liệu qua email khi cần hỗ trợ.' },
  { icon: '🔐', ic: 'lock', title: 'Phân quyền người dùng', text: 'Danh sách người sử dụng, mật khẩu và quyền truy cập chứng từ ghi sổ.' },
  { icon: '🔁', ic: 'refresh', title: 'Xử lý số liệu', text: 'Đổi mã vật tư, tổng hợp số liệu, lấy số dư đầu kỳ sang năm mới.' },
  { icon: '🌐', ic: 'globe', title: 'Diễn giải song ngữ', text: 'Khai báo diễn giải song ngữ cho chứng từ và báo cáo.' },
];
