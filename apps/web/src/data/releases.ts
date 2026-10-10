export type Release = {
  productCode:string; version:string; releaseDate:string; architecture:string; os:string; size:string; sha256:string; downloadUrl:string; notes:string[];
};

export const currentRelease: Release = {
  productCode: 'UNESCO_XI_AI',
  version: 'UNESCO AI 2026',
  releaseDate: 'Nhận bộ cài qua điện thoại hoặc Zalo',
  architecture: 'Phần mềm 32-bit, chạy được trên Windows 64-bit',
  os: 'Windows 10/11',
  // Không đăng bộ cài lên website (quyết định 10/10/2026): không điền dung lượng, mã kiểm tra hay liên kết tải.
  // Trang Tải về chỉ ghi "Nhận bộ cài qua điện thoại hoặc Zalo".
  size: '',
  sha256: '',
  downloadUrl: '',
  notes: [
    'Bản GĐ176 – GĐ178 (09/10/2026): thẻ Hệ thống trên màn hình AI, báo cáo quản trị có biểu đồ, bộ tham số năm trong từng mô-đun Lương, BHXH, Thuế; chữ tự thu theo độ rộng cửa sổ; hướng dẫn theo mô-đun M01 – M14 và hướng dẫn trực quan 34 chức năng, 48 trang.',
    'Màn hình AI 8 thẻ: Tự động xử lý, Danh sách hoá đơn, Tờ khai HQ, Sổ phụ ngân hàng, Bảng lương & chứng từ khác, Kết chuyển cuối kỳ, Báo cáo & nhật ký, Cổng dịch vụ công.',
    'Bản GĐ175 (09/10/2026): thêm sổ và BCTC doanh nghiệp siêu nhỏ (TT 58/2026), hộ kinh doanh – sổ TT 152/2025 và tờ khai 01/CNKD, biểu mẫu 2026 (mẫu mới HTKK, Mẫu số 33 lao động), Trợ lý lập định mức NVL, hồ sơ kèm chứng từ và yêu cầu chứng từ khách; hướng dẫn trực quan đủ 27 chức năng GĐ150 – GĐ174.',
    'Bản GĐ169: 65 tính năng AI trong 11 nhóm (báo cáo cho chủ doanh nghiệp, giá thành 7 bước, thuế TNCN, nhập toàn bộ HTKK theo MST…).',
    'Nền tảng kế toán UNESCO XI: 9 phân hệ, sổ sách – báo cáo theo Thông tư 133/2016/TT-BTC hoặc Thông tư 99/2025/TT-BTC (chọn theo bộ sổ), bộ cài kèm sổ mẫu năm 2026.',
    'Khoá AI 3 chế độ: đã kích hoạt / dùng thử / chỉ xem; phần kế toán dùng bình thường khi chưa kích hoạt.',
    'Nhận bộ cài qua điện thoại hoặc Zalo; bộ cài không đăng trên website.'
  ]
};
