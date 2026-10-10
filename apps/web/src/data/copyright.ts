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

/** Lịch sử phần mềm UNESCO từ 1999 (theo doanh nghiệp cung cấp, kèm ảnh màn hình lưu trữ). img: đường dẫn trong public/. */
export interface HistoryItem { y: string; icon: string; t: string; d: string; img: string; alt: string }
export const productHistory: HistoryItem[] = [
  { y: '1999', icon: 'building', t: 'Trung tâm UNESCO Phát triển Công nghệ Thông tin (UCDIT)', d: 'Do Hiệp hội UNESCO thành lập. Ra đời Chương trình kế toán UNESCO – UCDIT Accounting Software cho Windows 95/NT, phiên bản 1.99, chạy mạng LAN hoặc máy đơn.', img: '/banner/unesco-ucdit-1999.webp', alt: 'Màn hình khởi động UCDIT Accounting Software phiên bản 1.99' },
  { y: '2000 – 2004', icon: 'refresh', t: 'Chương trình kế toán UNESCO – SAS99, SAS04', d: 'Hơn mười bản cập nhật liên tục: 13/03/2000, 31/07/2001, 05/10/2001, 15/12/2001, 27/01/2002, 18/04/2002, 06/12/2002 … đến SAS04 năm 2004. Nhập chứng từ, kế toán chi tiết, kế toán tổng hợp.', img: '/banner/unesco-classic-1999.webp', alt: 'Màn hình chính Chương trình kế toán UNESCO – bản quyền Trung tâm UNESCO Phát triển Công nghệ Thông tin' },
  { y: '2010', icon: 'users', t: 'Trung tâm giải thể – các thành viên kế thừa', d: 'Các thành viên của Trung tâm tiếp tục kế thừa và phát triển phần mềm kế toán UNESCO.', img: '', alt: '' },
  { y: '2011 – 2012', icon: 'award', t: 'Công ty Cổ phần Phát triển Phần mềm UNESCO', d: 'ĐKKD 0310861633 (18/05/2011). Đăng ký quyền tác giả 4 phần mềm: kế toán UNESCO, UNESCO INV, UNESCO Business ERP, UNESCO Financial XII.NET – tác giả Ông Nguyễn Đình Thăng.', img: '/banner/unesco-2011.webp', alt: 'Giao diện phần mềm kế toán UNESCO năm 2011' },
  { y: 'UNESCO XI', icon: 'bar-chart', t: 'Nền tảng kế toán UNESCO XI', d: 'Kế toán doanh nghiệp 9 phân hệ theo Thông tư 133/2016/TT-BTC, Thông tư 99/2025/TT-BTC; tải hoá đơn điện tử.', img: '/banner/unesco-xi.webp', alt: 'Màn hình chính UNESCO XI' },
  { y: 'Hiện nay', icon: 'cpu', t: 'Công ty TNHH Phần mềm UNESCO – UNESCO XI + AI', d: 'MST 0313057886. Phát triển và cung cấp UNESCO XI + AI: hoá đơn, sổ phụ, giá thành, thuế – HTKK với AI; tác giả phần mềm vẫn là Ông Nguyễn Đình Thăng.', img: '/screenshots/man-hinh-chinh-unesco-ai.webp', alt: 'Màn hình chính UNESCO XI + AI' },
];
