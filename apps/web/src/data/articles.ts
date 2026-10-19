/**
 * BÀI VIẾT TRONG TRUNG TÂM KIẾN THỨC
 * ------------------------------------------------------------------
 * Mỗi bài là một mục trong mảng `articles`. Trang hiển thị: /kien-thuc/<slug>/
 * (xem pages/kien-thuc/<slug>/index.astro và components/ArticleView.astro).
 *
 * THÊM BÀI MỚI: thêm một mục vào `articles`, tạo thư mục pages/kien-thuc/<slug>/index.astro
 * (sao chép từ bài có sẵn, đổi slug), thêm đường dẫn vào pages/sitemap.xml.ts.
 *
 * Các loại khối nội dung (blocks):
 *   h2        tiêu đề mục
 *   lead      câu nổi bật đầu bài (in đậm)
 *   p         đoạn văn
 *   ol        danh sách đánh số
 *   table     bảng: head = tiêu đề cột, rows = các dòng
 *   formula   công thức (một dòng)
 *   contact   đoạn liên hệ, lấy từ data/contact.ts để luôn đúng số điện thoại hiện hành
 */
export type Block =
  | { t: 'h2'; x: string }
  | { t: 'lead'; x: string }
  | { t: 'p'; x: string }
  | { t: 'ol'; items: string[] }
  | { t: 'table'; head: string[]; rows: string[][] }
  | { t: 'formula'; x: string }
  | { t: 'contact'; x: string };

export type Article = {
  slug: string;
  title: string;
  /** Ngày cập nhật, dạng YYYY-MM-DD. */
  date: string;
  description: string;
  topic: string;
  blocks: Block[];
};

export const articleDate = (iso: string) => `${iso.slice(8, 10)}/${iso.slice(5, 7)}/${iso.slice(0, 4)}`;

export const articles: Article[] = [
  {
    slug: 'ai-tu-dong-hoa-12-buoc',
    title: 'AI tự động hoá theo tháng: 12 bước từ hoá đơn đến tờ khai trong UNESCO AI',
    date: '2026-10-19',
    topic: 'AI kế toán',
    description: 'Lộ trình 12 bước AI Tự động hoá cho từng tháng kế toán trong UNESCO AI: AI làm trước, kế toán kiểm tra và quyết định.',
    blocks: [
      { t: 'lead', x: 'UNESCO AI không thay người kế toán: AI làm trước các việc lặp lại, kế toán kiểm soát và quyết định.' },
      { t: 'h2', x: 'AI có thay thế kế toán không? Không' },
      { t: 'p', x: 'UNESCO AI không được tạo ra để thay người kế toán. AI làm trước những việc lặp đi lặp lại, mất nhiều thời gian và dễ sai sót, để người kế toán có thêm thời gian cho phần quan trọng hơn: kiểm tra, kiểm soát, phân tích và quyết định.' },
      { t: 'p', x: 'Một tháng kế toán gồm hàng chục việc theo đúng thứ tự: hoá đơn điện tử, hạch toán, sổ phụ ngân hàng, lương và bảo hiểm, khấu hao và phân bổ, giá thành, kiểm soát, khoá sổ, thuế, sổ sách và báo cáo. UNESCO AI gom mười hai bước đó trên một khung AI Tự động hoá cho từng tháng: kế toán chọn tháng, đi lần lượt từng bước; ở mỗi bước máy làm phần đọc, tính và lập sẵn, còn kế toán kiểm tra, sửa và quyết định ghi sổ. Tiến độ hiển thị ngay trên màn hình, ví dụ "Đã xong 11/12 bước", nên không ai phải tự nhớ mình đang làm dở ở đâu.' },
      { t: 'h2', x: 'Lộ trình 12 bước của một tháng' },
      { t: 'p', x: 'Màn hình "Các bước AI tự động" liệt kê 12 bước theo đúng thứ tự làm, mỗi bước có dấu "xong" khi đã hoàn thành:' },
      { t: 'ol', items: ['Tải hoá đơn điện tử', 'Hạch toán hoá đơn', 'Sổ phụ ngân hàng', 'Lương và bảo hiểm', 'Khấu hao, phân bổ công cụ', 'Giá thành sản phẩm', 'Kiểm soát công nợ, vật tư', 'Soát rủi ro hoá đơn', 'Bút toán cuối kỳ', 'Việc cần làm', 'Kiểm tra, khoá sổ tháng', 'Tờ khai thuế, báo cáo'] },
      { t: 'p', x: 'Thứ tự đi từ chứng từ đầu vào (bước 1 đến 4), qua khấu hao, giá thành và các bước kiểm soát, rồi mới đến khoá sổ, tờ khai và báo cáo; màn hình nhắc "Bấm từng bước theo thứ tự". Dữ liệu được phân tích theo Thông tư 133 và kế toán luôn sửa được trước khi ghi.' },
      { t: 'p', x: 'Mỗi bước đi qua cùng một khuôn năm giai đoạn, hiển thị thành thanh tiến trình ở đầu màn hình:' },
      { t: 'ol', items: ['Chọn bước', 'AI phân tích và gợi ý xử lý dữ liệu', 'Người dùng kiểm tra và xác nhận', 'Hệ thống tự động thực hiện', 'Xem kết quả và nhật ký'] },
      { t: 'h2', x: 'AI làm trước ở từng khâu, kế toán quyết định' },
      { t: 'p', x: 'Bảng dưới đây cho thấy AI làm trước gì ở từng khâu và phần nào luôn thuộc về người làm kế toán.' },
      {
        t: 'table',
        head: ['Khâu', 'AI làm trước', 'Kế toán quyết định'],
        rows: [
          ['Hoá đơn điện tử', 'Tải, đọc và phân tích dữ liệu; nhận diện hoá đơn mua vào, bán ra; ghép mã khách hàng, nhà cung cấp, hàng hoá; phát hiện những mã còn thiếu', 'Bổ sung hoặc duyệt các mã còn thiếu'],
          ['Hạch toán', 'Đọc nội dung nghiệp vụ; đối chiếu dữ liệu và lịch sử đã được kế toán duyệt; đề xuất tài khoản, mã đối tượng và chứng từ; trường hợp đủ độ tin cậy xử lý nhanh, trường hợp cần xem lại thì cảnh báo', 'Quyết định các trường hợp AI cảnh báo'],
          ['Sổ phụ ngân hàng', 'Đọc từng dòng giao dịch; phân tích nội dung chuyển khoản; nhận diện người trả tiền, người nhận tiền; tìm khách hàng, nhà cung cấp; tìm hoá đơn và công nợ đang mở; đề xuất tài khoản đối ứng; hỗ trợ lập phiếu báo Có, báo Nợ', 'Xem lại và xác nhận thay vì dò từng dòng sao kê bằng tay'],
          ['Bảng lương và bảo hiểm', 'Tiếp nhận và đối chiếu dữ liệu bảng lương; hỗ trợ lập chứng từ lương; đối chiếu các khoản liên quan đến bảo hiểm; hỗ trợ chuẩn bị biểu mẫu, hồ sơ lao động – BHXH theo dữ liệu đã có', 'Kế toán và người phụ trách kiểm tra, xác nhận cuối cùng'],
          ['Khấu hao, chi phí trả trước, công cụ dụng cụ', 'Theo dõi kỳ; tính theo dữ liệu và thiết lập đã khai báo; nhắc việc nào đã làm, việc nào chưa làm, việc nào cần kiểm tra trước khi kết chuyển cuối kỳ', 'Kiểm tra số liệu và ghi chứng từ'],
          ['Giá thành', 'Đề xuất và đối chiếu định mức nguyên vật liệu; kiểm tra nguyên vật liệu sử dụng so với sản lượng; phân bổ chi phí theo sản phẩm hoặc đối tượng tính giá thành; hỗ trợ tính giá thành nhập kho; cân đối nguyên vật liệu, điện, nhân công và các khoản chi phí liên quan', 'Xác nhận sản lượng, kiểm tra định mức, duyệt phiếu kết chuyển và quyết định phương án cuối cùng'],
        ],
      },
      { t: 'p', x: 'Giá thành là phần mà mỗi ngành có một bài toán khác nhau: sản xuất khác xây dựng, thương mại khác gia công, mỗi doanh nghiệp có định mức, nguyên vật liệu và cách phân bổ riêng. Vì vậy AI làm phần tính toán và phân tích trước, còn phương án cuối cùng do kế toán quyết định.' },
      { t: 'h2', x: 'Rà soát và kiểm soát để kế toán không bỏ sót' },
      { t: 'p', x: 'Công việc kế toán không dừng ở nhập liệu: một bộ sổ còn phải được kiểm tra. AI tự động rà soát để tìm mã khách hàng, nhà cung cấp, vật tư có dấu hiệu trùng; phát hiện các trường hợp trả hộ hoặc cần xem lại công nợ; phát hiện tồn kho âm; kiểm tra tài khoản và tài khoản chi tiết có dấu hiệu bất thường; rồi đề xuất hướng xử lý. Dòng nào cần xem lại, AI chỉ ra.' },
      { t: 'p', x: 'Ở bước soát rủi ro hoá đơn, AI cảnh báo hoá đơn mua vào từ 5 triệu đồng trở lên cần kiểm tra điều kiện thanh toán không dùng tiền mặt theo quy định; kiểm tra hoá đơn hủy, hoá đơn thay thế, hoá đơn điều chỉnh; hỗ trợ đối chiếu thông tin người bán có dấu hiệu rủi ro; kiểm tra mã của cơ quan thuế, thời điểm lập, ký và các thông tin liên quan trên hoá đơn. Mục đích không phải để AI kết luận thay kế toán, mà để kế toán không bỏ sót những điểm cần kiểm tra.' },
      { t: 'p', x: 'Sang bước 10, AI gom kết quả từ các lần kiểm tra, phân loại theo mức độ cần chú ý, chỉ ra màn hình cần xử lý, lưu nhật ký công việc và theo dõi việc đã xử lý. Kế toán trả lời từng việc bằng ba lựa chọn "Không phải lỗi", "Đã làm" hoặc "Hẹn kỳ sau"; máy nhớ các việc đã trả lời và kiểm tra lại sau khi kế toán sửa số liệu.' },
      { t: 'h2', x: 'Điểm sẵn sàng khoá sổ cho biết tháng đã đủ điều kiện khoá hay chưa' },
      { t: 'p', x: 'Trước khi khoá sổ, bước 11 chấm tháng trên thang 100 điểm. Máy đếm số lỗi, số cảnh báo và số bước khoá sổ chưa làm trong kỳ, rồi trừ điểm theo công thức cố định:' },
      { t: 'formula', x: 'Điểm = 100 − 15 × số lỗi − 5 × số cảnh báo − 8 × số bước chưa làm' },
      { t: 'p', x: 'Từ 90 điểm trở lên là sẵn sàng; từ 70 đến 89 là còn việc; dưới 70 điểm hoặc còn lỗi là chưa nên khoá sổ. Những mục máy kiểm tra được chia thành ba nhóm:' },
      {
        t: 'table',
        head: ['Nhóm', 'Điểm trừ mỗi mục', 'Ví dụ máy kiểm tra'],
        rows: [
          ['Lỗi, phải xử lý trước khi khoá', '15', 'Tổng Nợ khác tổng Có trong kỳ; chứng từ lệch Nợ/Có; tiền mặt, tiền gửi (111, 112) âm theo ngày; tài khoản dư sai bên cuối kỳ; tồn kho âm cuối kỳ; hoá đơn mua từ 5 triệu trả bằng tiền mặt'],
          ['Cảnh báo, nên xem', '5', 'Tài khoản doanh thu, chi phí, 911 còn số dư chưa kết chuyển; chi phí sản xuất dở dang (154) còn số dư cuối kỳ; tháng có xuất kho thành phẩm nhưng chưa lập phiếu kết chuyển thành phẩm'],
          ['Bước khoá sổ chưa làm', '8', 'Trích khấu hao tài sản cố định; phân bổ chi phí trả trước (242); tính lương, trích bảo hiểm xã hội'],
        ],
      },
      { t: 'p', x: 'Chấm xong, màn hình liệt kê từng mục kèm gợi ý xử lý và các lối đi thẳng: mở tệp Excel chi tiết "Kiểm tra trước khoá sổ", mở màn hình kiểm soát công nợ và vật tư, mở màn hình kết chuyển cuối kỳ và báo cáo, rồi "Chấm lại" sau khi đã sửa. AI cũng nhắc sao lưu dữ liệu trước khi khoá, nhưng không tự ý khoá sổ: kế toán kiểm tra, kế toán xác nhận, và chỉ khi được đồng ý phần mềm mới thực hiện bước tiếp theo. Lưu ý: cảnh báo về hoá đơn trả tiền mặt là cảnh báo của phần mềm để kế toán đối chiếu, không thay cho quy định thuế hiện hành.' },
      { t: 'h2', x: 'Giá thành được dẫn dắt từng bước, làm từ trên xuống' },
      { t: 'p', x: 'Với doanh nghiệp sản xuất, bước 6 cần nhiều dữ liệu từ trước, nên màn hình Giá thành được dựng thành một "trình tự giá thành tháng, làm từ trên xuống". Kế toán chọn tháng, bấm "Kiểm lại" để máy chấm lại trạng thái, rồi đi từng dòng. Mỗi dòng có nút "Làm bước này" và một chấm màu báo tình trạng: xanh là xong, lam là máy đã ghi, cam là chờ duyệt, đỏ là còn thiếu.' },
      { t: 'p', x: 'Trình tự gồm bảy mốc: chọn loại hình sản xuất một lần (hàng loạt theo điện, hàng loạt, theo đơn hàng hoặc gia công); lập hồ sơ định mức một lần; định mức nguyên vật liệu; xem chi phí tháng trên các tài khoản 1541, 1542, 1543; lấy sản lượng thành phẩm từ phiếu kết chuyển; tính và ghi giá thành; cuối cùng kiểm tra kết quả. Nếu thiếu phiếu kết chuyển tháng, dòng sản lượng tự báo thiếu và chỉ ra nơi cần mở, nên kế toán biết mình còn thiếu gì.' },
      { t: 'p', x: 'Bên cạnh đó là danh mục công cụ sắp theo cùng thứ tự: hồ sơ định mức, định mức nguyên vật liệu theo mã, định mức tự động bằng AI, định mức theo tỷ lệ giá bán (kèm phân loại và danh sách lô sản xuất, dở dang đầu kỳ), phân bổ chi phí theo đối tượng, kết chuyển thành phẩm, tính lại giá xuất kho, sổ giá thành, báo cáo kiểm tra và chuẩn hoá dữ liệu giá thành. Trong lộ trình 12 bước, doanh nghiệp thương mại, dịch vụ không sản xuất có thể bỏ qua bước này.' },
      { t: 'h2', x: 'Thuế và báo cáo: chuẩn bị sẵn, người dùng ký và nộp' },
      { t: 'p', x: 'Ở bước 12, UNESCO AI hỗ trợ chuẩn bị và đối chiếu tờ khai thuế giá trị gia tăng, hồ sơ thuế thu nhập cá nhân, báo cáo tài chính, sổ sách kế toán, số liệu giữa tờ khai và sổ kế toán, cùng các chỉ tiêu cần kiểm tra trước khi xuất dữ liệu. Sau khi kế toán xác nhận, phần mềm xuất dữ liệu, báo cáo và các tệp cần thiết theo quy trình.' },
      { t: 'p', x: 'Người dùng là người kiểm tra số liệu tờ khai, ký số, nộp hồ sơ lên cổng thuế theo quy định và lưu tờ khai đã nộp. Đây là phần luôn nằm ở cột "Người dùng cần làm" trên màn hình, và người làm kế toán cũng là người chịu trách nhiệm về số liệu.' },
      { t: 'h2', x: 'Nhìn toàn cảnh nhiều công ty trên cùng một màn hình' },
      { t: 'p', x: 'Với văn phòng dịch vụ kế toán, lộ trình 12 bước là việc lặp lại cho từng khách mỗi tháng, nên phần mềm đặt thêm hai bảng nhỏ ngay trên màn hình chính. Bảng "Quản lý công việc" cho biết hôm nay là ngày nào, bao nhiêu việc quá hạn, bao nhiêu việc trong 7 ngày tới và việc gần nhất (ví dụ đóng BHXH). Bảng "Điều hành các công ty" đếm số bộ sổ đang quản lý, chia theo ba mức đỏ, vàng, xanh, và nêu luôn công ty "cần làm ngay"; một nút mở Bảng điều hành để xem chi tiết. Bảng 12 bước cũng nằm ngay bên phải màn hình chính, với bước đang làm được tô sáng.' },
      { t: 'p', x: 'Phía trên cửa sổ làm việc là một hàng công cụ duy nhất gồm Hoá đơn, Sổ phụ NH, Lương và BHXH, Giá thành, Kết nối BHXH, Công việc, Hải quan, Báo cáo và thuế, Cổng thuế. Nhiều màn hình có khung "AI hỗ trợ tự động xử lý" ghi rõ ba việc máy sẽ làm ở màn hình đó.' },
      {
        t: 'table',
        head: ['Màn hình', 'Những việc có sẵn trên màn hình'],
        rows: [
          ['Sổ phụ ngân hàng', 'Nhập sổ phụ, phân tích, chọn các dòng cùng nội dung, sửa hàng loạt, lập chứng từ để xem trước, ghi tự động, xuất Excel'],
          ['Lương nhân viên', 'Sơ đồ chức năng từ lương, điều chỉnh lương, phụ cấp, chấm công tăng ca, chấm công trích lương, giảm trừ gia cảnh, lương khu công nghiệp, tính thuế TNCN, tra cứu chứng từ'],
          ['Báo cáo và thuế', 'Xuất tờ khai 01/GTGT, bảng kê mua vào, bảng kê bán ra, đối chiếu hoá đơn điện tử; cuối năm có thuế TNDN, TNCN, báo cáo tài chính B01, B02, B03, B09 và xuất tất cả sổ 1 lần'],
          ['Cổng thuế', 'Mở cổng và đăng nhập, tải dữ liệu, lấy bảng đang mở trên cổng, đối chiếu số nộp thuế với sổ sách, xuất Excel'],
        ],
      },
      { t: 'p', x: 'Nhờ vậy một người làm kế toán có thể nhìn công ty nào đang đỏ, mở đúng công ty đó, đi từng bước trong 12 bước và chỉ dừng khi cần quyết định, mà không phải tự nhớ mình đang dở bước nào.' },
      { t: 'h2', x: 'Click, xem, duyệt: kế toán giữ quyền kiểm soát' },
      { t: 'p', x: 'Nguyên tắc quan trọng nhất của UNESCO AI là: AI làm trước, kế toán kiểm tra, kế toán quyết định. Mười hai bước gom trên một khung AI, và người làm kế toán chỉ cần ba thao tác:' },
      {
        t: 'table',
        head: ['Thao tác', 'Ý nghĩa'],
        rows: [
          ['Click', 'AI xử lý dữ liệu, phân tích và đề xuất chứng từ, hạch toán'],
          ['Xem', 'Kế toán kiểm tra sổ sách, báo cáo, cảnh báo và kết quả AI đã thực hiện'],
          ['Duyệt', 'Kế toán xác nhận nghiệp vụ, ghi sổ và hoàn thiện hồ sơ'],
        ],
      },
      { t: 'p', x: 'Dữ liệu không được thay đổi chỉ vì AI cho rằng nó đúng; những nghiệp vụ quan trọng phải đi qua bước kiểm soát của người làm kế toán. Việc ký số, nộp hồ sơ cho cơ quan thuế và chịu trách nhiệm về số liệu vẫn thuộc quyền kiểm soát của người làm kế toán. Việc lặp lại để AI làm; việc cần kinh nghiệm và phán đoán thì kế toán quyết định.' },
      { t: 'p', x: 'Kế toán không biến mất; cách làm kế toán cũ đang thay đổi. Khi máy làm phần nhập liệu, dò tìm, đối chiếu và tính toán, người kế toán có thêm thời gian để kiểm soát số liệu, phân tích, phát hiện rủi ro, tư vấn cho doanh nghiệp và đưa ra quyết định tốt hơn. Vì vậy câu hỏi nên đặt ra không phải là "AI có thay thế kế toán hay không?", mà là: từ hôm nay, còn bao nhiêu công việc lặp lại và nhàm chán mà kế toán vẫn phải tự làm?' },
      { t: 'h2', x: 'Đầu tư một lần, sử dụng lâu dài, không phí hàng năm' },
      { t: 'p', x: 'UNESCO AI tính chi phí đầu tư một lần, sử dụng mãi mãi và không phí hàng năm. Đây là phần mềm kế toán offline với dữ liệu linh hoạt, và kế toán luôn giữ quyền kiểm soát.' },
      { t: 'h2', x: 'Ranh giới rõ ràng và đăng ký demo' },
      { t: 'p', x: 'Nút "AI làm tự động bước này" chỉ làm các việc nằm trong cột "AI sẽ làm tự động", rồi mở màn hình cho phần người dùng cần duyệt. Ký số và nộp tờ khai lên cổng thuế luôn do kế toán thực hiện; điểm sẵn sàng khoá sổ là căn cứ tham khảo để kế toán quyết định có khoá hay không. Lộ trình hiện hiển thị theo Thông tư 133, bước giá thành dành cho doanh nghiệp sản xuất và có thể bỏ qua với doanh nghiệp thương mại, dịch vụ. Các cảnh báo về thuế, như hoá đơn trả tiền mặt, là gợi ý của phần mềm để kế toán đối chiếu với quy định hiện hành, không thay cho tư vấn pháp lý.' },
      { t: 'contact', x: 'Tham khảo và đăng ký demo, liên hệ' },
      { t: 'p', x: 'UNESCO AI: AI có thể nhanh, nhưng số liệu kế toán không được mất kiểm soát.' },
    ],
  },
  {
    slug: 'loi-ich-ke-toan-dich-vu',
    title: 'Lợi ích và điểm khác biệt của UNESCO AI hỗ trợ kế toán dịch vụ',
    date: '2026-10-12',
    topic: 'Kế toán dịch vụ',
    description: 'UNESCO AI cho cá nhân và công ty dịch vụ kế toán: một màn hình cho mọi khách hàng, đưa số vào HTKK, sổ phụ ngân hàng, giá thành, soát rủi ro và giá đầu tư một lần.',
    blocks: [
      { t: 'lead', x: 'UNESCO AI tích hợp AI toàn diện để hỗ trợ tối đa công việc kế toán, đặc biệt cho cá nhân và công ty dịch vụ kế toán.' },
      { t: 'h2', x: 'Giữ nhiều khách mà không sót hạn, không nhầm số' },
      { t: 'p', x: 'Một kế toán dịch vụ thường giữ hàng chục bộ sổ thuộc nhiều loại hình: công ty thương mại, sản xuất nhỏ, doanh nghiệp siêu nhỏ và hộ kinh doanh. Mỗi tháng hoặc mỗi quý, họ lặp lại cùng một vòng việc: thu chứng từ, hạch toán, soát, lập tờ khai và nộp.' },
      { t: 'p', x: 'UNESCO AI được làm cho đúng vòng việc đó. Phần mềm chạy trên máy của văn phòng, đọc nhiều bộ sổ cùng lúc, nhắc việc còn dở và đưa tờ khai vào HTKK theo đúng mã số thuế của từng khách.' },
      { t: 'h2', x: 'Công việc thật của một văn phòng dịch vụ kế toán' },
      { t: 'p', x: 'Nút thắt thường không nằm ở một bước khó. Nó nằm ở số lần lặp: một thao tác năm phút nhân với 25 khách là hơn hai giờ mỗi kỳ.' },
      { t: 'p', x: 'Vì vậy UNESCO AI tập trung vào sáu khâu: đọc tất cả các sổ từ một chỗ, chạy việc hàng loạt qua đêm, đưa số vào HTKK, nhận đúng đối tác trên sổ phụ, lập giá thành cho khách sản xuất và soát rủi ro trước khi nộp.' },
      { t: 'h2', x: 'Một màn hình cho mọi khách hàng' },
      { t: 'p', x: 'Bảng điều hành khách hàng hiển thị mỗi dòng một bộ sổ, kèm đèn đỏ, vàng hoặc xanh. Mỗi dòng cho biết chứng từ đến tháng nào, hoá đơn và sổ phụ chưa hạch toán, tháng đã khoá và hạn gần nhất.' },
      { t: 'p', x: 'Chạy hàng loạt qua đêm giúp kế toán không phải mở từng sổ để tải hoá đơn hoặc soát rủi ro. Sáng hôm sau, bảng tổng hợp cho biết sổ nào cần xử lý trước.' },
      { t: 'p', x: 'Ô Việc cần làm trên màn hình chính tự hiện khi có việc: tờ khai còn 15 ngày đến hạn, hoá đơn thiếu mã, dòng sổ phụ chưa xử lý, mã khách mới chờ duyệt. Kế toán mở sổ là biết việc cần làm, không phải tự nhớ.' },
      { t: 'h2', x: 'Từ sổ đến HTKK, không gõ lại tờ khai' },
      { t: 'p', x: 'Cuối kỳ, nhiều văn phòng vẫn phải chép số từ sổ sang HTKK cho từng khách. UNESCO AI ghi dữ liệu tờ khai vào đúng thư mục của HTKK theo mã số thuế của bộ sổ, và mã cơ quan thuế lấy từ tờ khai gần nhất.' },
      { t: 'p', x: 'Phần mềm hỗ trợ các tờ khai 01/GTGT, 03/TNDN, 05/KK, 05/QTT và BCTC. Số kỳ trước được lấy tự động: chỉ tiêu [22] lấy từ tờ khai kỳ liền trước, nên không phải lục lại tờ khai cũ.' },
      { t: 'p', x: 'Kế toán vẫn mở HTKK để kiểm tra, ký và nộp. Phần mềm không ký và không nộp thay người dùng.' },
      { t: 'h2', x: 'Sổ phụ ngân hàng: đúng đối tác, xử lý hàng trăm dòng trong vài thao tác' },
      { t: 'p', x: 'Sổ phụ thường tốn nhiều giờ nhất của kế toán dịch vụ, vì mỗi dòng phải tìm đúng khách hàng, đúng tài khoản đối ứng và đúng hoá đơn khớp. UNESCO AI bắt đầu bằng việc nhập sổ phụ theo tài khoản ngân hàng và khoảng ngày: chọn một file hoặc cả thư mục nếu khách có nhiều file, rồi chọn ngân hàng của sao kê hoặc để phần mềm tự nhận theo nội dung file.' },
      { t: 'p', x: 'Sau khi phân tích, mỗi dòng có nhóm nghiệp vụ, tài khoản đối ứng, khách hàng và điểm tin cậy. Trạng thái cho biết việc cần làm: sẵn sàng lập chứng từ, thiếu mã khách hàng, cần xem lại, chờ xác nhận, hoặc bỏ qua các khoản như lãi nội bộ. Kế toán chỉ cần tập trung vào những dòng thiếu mã hoặc cần xem lại. Bấm vào một dòng, khung sửa phía dưới cho chọn đúng khách hàng, tài khoản đối ứng và hoá đơn khớp; khi bạn sửa và ghi, AI ghi nhớ để gợi ý chính xác hơn ở lần sau.' },
      { t: 'p', x: 'Với khối lượng lớn, thẻ Tự động xử lý ghi hàng loạt các dòng có độ tin cậy từ 90 trở lên sau khi kế toán xác nhận một lần. Nếu muốn kiểm tra trước, chọn xem trước để duyệt từng dòng. Nếu nhập nhầm file, nút Hoàn hoặc xóa lần import chỉ gỡ các dòng chưa ghi sổ; chứng từ đã lập không bị ảnh hưởng.' },
      { t: 'h2', x: 'Giá thành cho khách sản xuất: định mức là điểm bắt đầu' },
      { t: 'p', x: 'Với khách sản xuất, việc khó nhất thường là kết chuyển chi phí vào thành phẩm đúng định mức. UNESCO AI có màn hình Định mức thành phẩm để kế toán nhập định mức cho từng thành phẩm, rồi dùng khi kết chuyển.' },
      { t: 'p', x: 'Sản lượng thành phẩm đưa vào Kết chuyển thành phẩm theo một trong hai cách: lấy từ số đã xuất bán, hoặc để AI lập phương án. Màn hình Chọn thành phẩm cho phép tăng hoặc giảm sản lượng từng mã, hoặc áp một tỷ lệ cho toàn bộ mã, và đặt lại về số lượng hiện có khi cần. Dù chọn cách nào, số liệu chỉ ghi sổ khi người dùng bấm Ghi.' },
      { t: 'p', x: 'Giá thành được xem theo đối tượng và theo sổ giá thành, kèm dở dang đầu kỳ và tính lại giá xuất kho trong cùng sơ đồ Giá thành.' },
      { t: 'p', x: 'Với khách chưa có định mức, danh mục của module Giá thành đi theo thứ tự bước: hồ sơ định mức, định mức nguyên vật liệu theo mã, định mức tự động bằng AI và định mức theo tỷ lệ giá bán. Ở cách theo tỷ lệ giá bán, AI đề xuất tỷ lệ chi phí trên giá bán từ số liệu thực tế các tháng gần nhất; kế toán kiểm tra, sửa rồi mới lưu. Tỷ lệ này dùng để lập định mức nguyên vật liệu và làm mục tiêu kiểm tra, còn giá thành ghi sổ vẫn là chi phí thực tế. Phần mềm cũng cảnh báo khi giá vốn nằm ngoài khoảng thường gặp để kế toán kiểm tra lại.' },
      { t: 'h2', x: 'Soát rủi ro và điểm sẵn sàng khoá sổ trước khi nộp' },
      { t: 'p', x: 'Lỗi thuế thường không đến từ một con số sai lớn, mà từ nhiều chênh lệch nhỏ giữa hoá đơn, sổ kế toán và tờ khai. UNESCO AI đối chiếu hoá đơn điện tử với sổ kế toán và xuất ra Excel với các trạng thái Lỗi và Cần xem, để nhận ra hoá đơn lệch tiền hoặc chưa lên bảng kê. Trước khi kê khai, phần mềm cảnh báo khi số trên tờ khai lệch với sổ.' },
      { t: 'p', x: 'Khi sổ đã khớp, kế toán còn lại một bước trước khi khoá sổ tháng: rà lại nhóm Dữ liệu để kiểm tra nhập liệu, tính lại giá xuất kho, chứng từ kết chuyển, rồi mới khoá. Nhờ vậy, sổ nào chưa sẵn sàng sẽ lộ ra trước khi nộp, không phải đợi đến lúc cơ quan thuế báo.' },
      { t: 'h2', x: 'Cổng dịch vụ công và hồ sơ kèm từng chứng từ' },
      { t: 'p', x: 'Ngoài sổ sách, kế toán dịch vụ còn phải theo dõi việc nộp thuế và các hồ sơ đi kèm. Tab Cổng dịch vụ công gom các việc này vào một màn hình: mở cổng và đăng nhập, tải dữ liệu, lấy bảng đang mở trên cổng, xuất Excel và đối chiếu nộp thuế. Chọn khoảng ngày và nhóm để lọc danh sách trước khi làm việc.' },
      { t: 'p', x: 'Nút Mở tệp đính kèm cho phép mở hồ sơ gắn kèm ngay trên màn hình, để kế toán đối chiếu hồ sơ với số liệu trên sổ.' },
      { t: 'h2', x: 'Điểm khác biệt: AI đề xuất, kế toán duyệt cuối cùng' },
      { t: 'p', x: 'Nhiều văn phòng hiện dùng nhiều công cụ rời rạc: một cho hoá đơn, một cho ngân hàng, một cho Excel và một cho HTKK. UNESCO AI gom các việc này vào một phần mềm chạy trên máy của văn phòng, để kế toán làm việc trên một màn hình thay vì chuyển qua lại giữa nhiều chương trình.' },
      { t: 'p', x: 'Điểm khác biệt nằm ở vai trò của AI. AI đọc, đề xuất và cảnh báo; kế toán là người duyệt cuối cùng. Chỉ những dòng có độ tin cậy từ 90 trở lên mới được ghi hàng loạt, và chỉ sau khi kế toán xác nhận; dòng độ tin cậy thấp hoặc thiếu mã nằm ở trạng thái cần xem lại, không tự vào sổ.' },
      { t: 'p', x: 'Phần mềm bám sát quy trình kế toán Việt Nam: hoá đơn điện tử, HTKK, mẫu sổ theo Thông tư 133. Giao diện sơ đồ trực quan giúp người mới làm quen nhanh, và trợ lý AI có thể hướng dẫn ngay trên màn hình.' },
      { t: 'h2', x: 'Đầu tư một lần, giá ưu đãi cho cá nhân và công ty dịch vụ kế toán' },
      { t: 'p', x: 'UNESCO AI tính phí một lần, không có phí hàng năm. Mã kích hoạt AI cấp theo mã số thuế của từng bộ sổ và có thời hạn vĩnh viễn khi mua bản quyền. Việc triển khai được miễn phí, và khách đang dùng UNESCO XI nâng cấp chỉ trả 50% giá gói mới. Với văn phòng dịch vụ, đây là khoản đầu tư một lần cho cả vòng việc lặp lại mỗi tháng, không phải khoản thuê bao trả đều đặn.' },
      { t: 'p', x: 'Cá nhân và công ty làm dịch vụ kế toán mua theo gói 3 MST (MST là mã số thuế, mỗi bộ sổ tính một MST): 10.000.000 đồng cho 3 MST, thêm mỗi MST 1.200.000 đồng, và trên 10 MST được giảm 30%. Ví dụ tính từ bảng giá: một văn phòng giữ 10 bộ sổ trả 10.000.000 đồng cho 3 MST đầu và 8.400.000 đồng cho 7 MST thêm (7 × 1.200.000), tổng 18.400.000 đồng, khoảng 1.840.000 đồng mỗi bộ sổ. Giá lẻ của gói UNESCO AI là 10.000.000 đồng cho một MST. Giá theo bảng giá ngày 09/10/2026; liên hệ để nhận báo giá theo số bộ sổ thực tế.' },
      { t: 'p', x: 'Có một điều kiện cần nói rõ. Mã kích hoạt AI tính theo số trang đọc từ ảnh chụp hoặc PDF dạng ảnh, còn tệp Excel và CSV không bị tính; khi cần đọc thêm, nạp thêm trang và số trang cộng dồn. Phần kế toán vẫn dùng bình thường khi chưa có mã, và có thể dùng thử 15 ngày trước khi mua.' },
      { t: 'h2', x: 'Một ngày làm việc với UNESCO AI' },
      { t: 'p', x: 'Đoạn dưới đây là ví dụ minh họa, số liệu giả định, không phải khách hàng thật. Giả sử một kế toán phụ trách 25 khách. Buổi sáng, kế toán mở phần mềm, đọc danh sách việc cần làm và nhập sổ phụ ngân hàng của những khách có kỳ khai trong tuần. Các dòng có độ tin cậy cao được ghi hàng loạt sau khi xác nhận, còn các dòng thiếu mã khách hàng được gom lại để xử lý riêng.' },
      { t: 'p', x: 'Buổi chiều, kế toán đối chiếu hoá đơn điện tử với sổ, xử lý các dòng ở trạng thái Lỗi và Cần xem, rồi xuất bảng kê. Khi số liệu khớp, kế toán xuất file XML của tờ khai GTGT, mở HTKK để kiểm tra lại trước khi ký và nộp như thường lệ.' },
      { t: 'p', x: 'Kết thúc ngày, kế toán mở lại danh sách chứng từ để đối chiếu nhanh các phiếu do phần mềm lập từ sổ phụ, và lập kế hoạch cho ngày mai từ những việc còn dở.' },
      { t: 'h2', x: 'Những việc chưa làm, nói thẳng với khách' },
      { t: 'p', x: 'UNESCO AI không phải phép màu, và nói rõ giới hạn giúp khách tin những điều phần mềm làm được. Với sổ phụ có nội dung chung chung, ví dụ trả tiền hàng mà không ghi rõ bên nào, hoặc hộ kinh doanh thanh toán qua cá nhân khác tên, AI có thể chưa nhận dạng hết. Những dòng này phải để kế toán kiểm tra và duyệt trước khi ghi.' },
      { t: 'p', x: 'Phần mềm không thay kế toán quyết định hạch toán, không ký và không nộp tờ khai thay người dùng. Với giá thành, sản lượng và định mức, kế toán là người nhập hoặc duyệt; AI đề xuất phương án nhưng không tự ghi sổ khi chưa có lệnh Ghi. Khi gặp bộ sổ có nghiệp vụ ngoài mẫu quen thuộc, nên kiểm tra kết quả đầu kỳ trước khi tin vào báo cáo.' },
      { t: 'h2', x: 'Cách xem thử: demo trên bộ sổ mẫu, không dùng số liệu khách thật' },
      { t: 'p', x: 'Cách an toàn nhất để đánh giá là xem thử trên bộ sổ mẫu, không cần đưa số liệu khách thật vào. Trên website có video hướng dẫn từng module, từ tổng quan, tải hoá đơn điện tử, sổ phụ ngân hàng đến giá thành và trợ lý AI. Ngoài ra, tài liệu hướng dẫn trực quan mô tả 35 chức năng, mỗi chức năng một trang có hình màn hình đánh số, các bước và lưu ý.' },
      { t: 'contact', x: 'Nếu cần tư vấn cài đặt hoặc muốn xem bản demo trực tiếp, liên hệ' },
    ],
  },
];
