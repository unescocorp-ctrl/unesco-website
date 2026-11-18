(()=>{
const video=document.getElementById('demo-video');
if(video){
  const chapters=[...document.querySelectorAll('.chapters [data-time]')];
  const status=document.getElementById('video-status');
  let active=null;
  const sync=()=>{
    const current=[...chapters].reverse().find(button=>Number(button.dataset.time)<=video.currentTime+.05)||chapters[0];
    if(current===active)return;
    active=current;
    chapters.forEach(button=>{const selected=button===current;button.classList.toggle('active',selected);if(selected)button.setAttribute('aria-current','true');else button.removeAttribute('aria-current');});
    if(status&&current)status.textContent='Chương hiện tại: '+current.textContent.trim().replace(/^(\d+:\d{2})/,'$1 · ');
  };
  for(const event of ['loadedmetadata','timeupdate','seeked'])video.addEventListener(event,sync);
  sync();
  document.querySelectorAll('[data-time]').forEach(button=>button.addEventListener('click',()=>{
    video.currentTime=Number(button.dataset.time);sync();
    video.play().catch(()=>{if(status)status.textContent='Đã chọn chương. Nhấn nút phát trên video để tiếp tục, hoặc tải MP4 nếu trình duyệt không phát được.';});
    video.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'center'});
  }));
  video.addEventListener('error',()=>{if(status)status.textContent='Chưa tải được video. Kiểm tra kết nối, tải lại trang hoặc dùng liên kết Tải MP4 bên dưới.';});
}
const form=document.getElementById('calc');
if(form){const compute=()=>{const output=document.getElementById('calc-result');if(!form.checkValidity()){output.textContent='Nhập số bản ghi từ 1 đến 100.000; thời gian trước > 0 và sau ≥ 0, tối đa 120 phút.';return;}const n=Number(document.getElementById('records').value),a=Number(document.getElementById('before').value),b=Number(document.getElementById('after').value),minutes=n*(a-b),pct=(a-b)/a*100;const fmt=x=>x.toLocaleString('vi-VN',{maximumFractionDigits:2});output.textContent=minutes>=0?`Giả định giảm ${fmt(minutes)} phút (${fmt(minutes/60)} giờ), tương đương ${fmt(pct)}%. Trước: ${fmt(n*a)} phút; sau: ${fmt(n*b)} phút.`:`Giả định tăng ${fmt(-minutes)} phút (${fmt(-minutes/60)} giờ). Trước: ${fmt(n*a)} phút; sau: ${fmt(n*b)} phút. Chưa có lợi ích thời gian trong giả định này.`;};form.addEventListener('input',compute);form.addEventListener('submit',e=>e.preventDefault());compute();}
})();
