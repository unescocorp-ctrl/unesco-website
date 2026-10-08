export type Release = {
  productCode:string; version:string; releaseDate:string; architecture:string; os:string; size:string; sha256:string; downloadUrl:string; notes:string[];
};

export const currentRelease: Release = {
  productCode: 'UNESCO_XI_AI',
  version: 'UNESCO AI 2026',
  releaseDate: 'Cấp bộ cài trực tiếp khi đăng ký',
  architecture: '32-bit (chạy trên Windows 64-bit)',
  os: 'Windows 10/11',
  size: 'Thông báo khi cấp bộ cài',
  sha256: 'Công bố cùng bộ cài chính thức',
  // Dán link tải bộ cài chính thức (và cập nhật sha256, size) để mở nút TẢI BỘ CÀI.
  downloadUrl: '',
  notes: [
    'Màn hình AI 8 thẻ: Tự động xử lý, Danh sách hoá đơn, Tờ khai HQ, Sổ phụ ngân hàng, Bảng lương & chứng từ khác, Kết chuyển cuối kỳ, Báo cáo & nhật ký, Cổng dịch vụ công.',
    'Bản GĐ169 (09/10/2026): 65 tính năng AI trong 11 nhóm, 14 tính năng mới GĐ159 – GĐ168 (báo cáo cho chủ doanh nghiệp, giá thành 7 bước, thuế TNCN, nhập toàn bộ HTKK theo MST…).',
    'Nền tảng kế toán UNESCO XI: 9 phân hệ, sổ sách – báo cáo theo TT133/2016 hoặc TT99/2025 (chọn theo bộ sổ), bộ cài kèm sổ mẫu năm 2026.',
    'Khoá AI 3 chế độ: đã kích hoạt / dùng thử / chỉ xem; phần kế toán dùng bình thường khi chưa kích hoạt.',
    'Bộ cài được cấp trực tiếp sau khi đăng ký để gắn bản quyền và hướng dẫn cài đặt.'
  ]
};
