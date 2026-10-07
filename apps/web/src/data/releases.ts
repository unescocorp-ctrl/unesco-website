export type Release = {
  productCode:string; version:string; releaseDate:string; architecture:string; os:string; size:string; sha256:string; downloadUrl:string; notes:string[];
};

export const currentRelease: Release = {
  productCode: 'UNESCO_XI_AI',
  version: 'V1-DOWNLOAD-PENDING',
  releaseDate: 'Chưa công bố',
  architecture: 'x64',
  os: 'Windows 10/11',
  size: 'Chưa công bố',
  sha256: 'SẼ_CẬP_NHẬT_KHI_CÓ_INSTALLER_CHÍNH_THỨC',
  downloadUrl: '',
  notes: [
    'Download Center đã sẵn sàng về giao diện và cấu trúc metadata.',
    'Chỉ mở nút tải khi file cài chính thức và SHA-256 đã được xác minh.',
    'Không phát hành installer giả hoặc placeholder.'
  ]
};
