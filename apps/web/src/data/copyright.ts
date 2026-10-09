/**
 * BẢN QUYỀN & PHÁP LÝ
 * ------------------------------------------------------------------
 * Nguồn: 4 giấy chứng nhận đăng ký quyền tác giả (Cục Bản quyền tác giả, 2011 – 2012) và
 * Giấy chứng nhận đăng ký doanh nghiệp Công ty TNHH Phần mềm UNESCO (thay đổi lần 10, 12/02/2026).
 * Ảnh: public/chung-nhan/ – đã che số CMND, địa chỉ cá nhân của tác giả và thông tin khách hàng trên ảnh màn hình.
 * c: màu (g xanh lá, t xanh ngọc, b xanh dương, y vàng).
 */

export interface CopyrightCert {
  no: string;
  date: string;
  work: string;
  product: string;
  img: string;
  c: string;
}

/** Giấy chứng nhận đăng ký quyền tác giả – theo thứ tự ngày cấp. */
export const copyrightCerts: CopyrightCert[] = [
  {
    no: '1563/2011/QTG', date: '15/06/2011',
    work: 'Phần mềm quản trị – tài chính – kế toán (UNESCO)',
    product: 'Dòng phần mềm kế toán UNESCO ACC XI – nền tảng của UNESCO XI và UNESCO AI hiện nay',
    img: 'ban-quyen-unesco-ke-toan', c: 'g',
  },
  {
    no: '1583/2011/QTG', date: '15/06/2011',
    work: 'Phần mềm quản lý bán hàng – hoá đơn GTGT (UNESCOINV)',
    product: 'UNESCO INV – SALE: quản lý hoá đơn, quản lý bán hàng, báo cáo',
    img: 'ban-quyen-unesco-inv', c: 'y',
  },
  {
    no: '230/2012/QTG', date: '03/02/2012',
    work: 'Phần mềm hệ thống quản trị tổng thể nguồn lực doanh nghiệp (ERP) Unesco Business',
    product: 'UNESCO BUSINESS (ERP): phân hệ tài chính kế toán, nhân sự, quan hệ khách hàng, bán hàng, sản xuất',
    img: 'ban-quyen-unesco-business-erp', c: 'b',
  },
  {
    no: '248/2012/QTG', date: '07/02/2012',
    work: 'Phần mềm quản trị tài chính kế toán Unesco Financial XII.net',
    product: 'UNESCO FRM.NET XII – phần mềm quản trị tài chính kế toán trên nền .NET',
    img: 'ban-quyen-unesco-financial-xii', c: 't',
  },
];

/** Các mốc sản phẩm. */
export const productTimeline = [
  { icon: 'award', y: '2011', t: 'UNESCO ACC & UNESCO INV', d: 'Đăng ký quyền tác giả phần mềm kế toán (1563/2011/QTG) và bán hàng – hoá đơn (1583/2011/QTG)' },
  { icon: 'layers', y: '2012', t: 'UNESCO Business ERP & FRM.NET XII', d: 'Đăng ký quyền tác giả hệ thống ERP (230/2012/QTG) và tài chính kế toán .NET (248/2012/QTG)' },
  { icon: 'bar-chart', y: 'UNESCO XI', t: 'Nền tảng kế toán UNESCO XI', d: 'Kế toán doanh nghiệp 9 phân hệ, theo TT 133 / TT 99' },
  { icon: 'cpu', y: '2026', t: 'UNESCO AI', d: 'UNESCO XI tích hợp màn hình AI: hoá đơn, sổ phụ, giá thành, thuế – HTKK' },
];
