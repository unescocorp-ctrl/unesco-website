const fs = require('fs');
const path = require('path');
const cp = require('child_process');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const root=path.resolve(__dirname,'../..');
const out=path.resolve(process.argv[2] || path.join(require('os').tmpdir(),'unesco-erp-media-'+Date.now())), pub=path.join(root,'apps/web/public/videos/erp-xii');
const recipe=JSON.parse(fs.readFileSync(path.join(__dirname,'erp-xii-recipe.json'),'utf8'));
const tts=path.join(__dirname,'speak-vi.ps1');
const esc=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
function run(cmd,args){return cp.execFileSync(cmd,args,{encoding:'utf8',windowsHide:true,stdio:['ignore','pipe','pipe'],maxBuffer:5e6});}
const probe=p=>Number(run('ffprobe',['-v','error','-show_entries','format=duration','-of','csv=p=0',p]).trim());
const stamp=s=>new Date(Math.round(s*1000)).toISOString().slice(11,23);
(async()=>{
 fs.mkdirSync(pub,{recursive:true});
 const browser=await chromium.launch({headless:true});
 const page=await browser.newPage({viewport:{width:1280,height:720},deviceScaleFactor:1});
 const metadata=[];
 for(const [vi,v] of recipe.entries()){
   const temp=path.join(out,'media',v.slug); fs.mkdirSync(temp,{recursive:true});
   const chunks=[];let time=0,vtt='WEBVTT\n\n'; const chapters=[];
   for(const [i,s] of v.slides.entries()){
     const base=path.join(temp,`scene-${i+1}`);
     const html=`<!doctype html><html lang="vi"><meta charset="utf-8"><style>*{box-sizing:border-box}body{margin:0;width:1280px;height:720px;overflow:hidden;background:#f4f9f7;color:#123b52;font-family:'Segoe UI',sans-serif;padding:44px 64px}.top{display:flex;justify-content:space-between;align-items:center;font-weight:800;font-size:22px;color:#087744;letter-spacing:1px}.label{font-size:16px;color:#4c6673;letter-spacing:0}h1{font-size:47px;line-height:1.2;letter-spacing:-1.3px;margin:36px 0 30px;max-width:1100px}.cards{display:grid;grid-template-columns:1fr 1fr;gap:24px}.card{background:white;border:1px solid #cbded5;border-top:6px solid #14894e;border-radius:16px;padding:28px 30px;min-height:224px;box-shadow:0 10px 22px #143c2610}.card+ .card{border-top-color:#1377b8}h2{font-size:29px;line-height:1.25;margin:0 0 19px;color:#087744}.card+ .card h2{color:#156ca0}p{font-size:24px;line-height:1.6;margin:0;white-space:pre-line}.note{margin-top:26px;line-height:1.45;font-size:23px;background:#e4f1eb;border-left:5px solid #16894f;padding:16px 20px;border-radius:0 12px 12px 0}.foot{position:absolute;bottom:28px;left:64px;right:64px;display:flex;justify-content:space-between;font-size:16px;color:#536c77}.bar{position:absolute;bottom:0;left:0;height:8px;width:${(i+1)*25}%;background:#159651}</style><body><div class="top"><span>UNESCO <span style="color:#1673a7">/ ERP + XII</span></span><span class="label">MINH HỌA QUY TRÌNH · LỜI ĐỌC TỔNG HỢP</span></div><h1>${esc(s.title)}</h1><div class="cards">${s.cards.map(([h,p])=>`<div class="card"><h2>${esc(h)}</h2><p>${esc(p)}</p></div>`).join('')}</div><div class="note">${esc(s.note)}</div><div class="foot"><span>${esc(s.tag)}</span><span>unescosoft.com · ${i+1}/4</span></div><div class="bar"></div></body></html>`;
     fs.writeFileSync(base+'.html',html); await page.setContent(html); await page.screenshot({path:base+'.png'});
     const overflow=await page.evaluate(()=>document.body.scrollHeight>720||[...document.querySelectorAll('h1,.note,.card')].some(x=>x.getBoundingClientRect().bottom>650));if(overflow)throw Error('Slide overflow: '+base);
     fs.writeFileSync(base+'.txt',s.voice,'utf8');
     run('powershell.exe',['-NoProfile','-ExecutionPolicy','Bypass','-File',tts,'-TepChu',base+'.txt','-Ra',base+'.wav','-TocDo','1.02']);
     const voiceDuration=probe(base+'.wav'),duration=voiceDuration+1;
     run('ffmpeg',['-hide_banner','-loglevel','error','-y','-loop','1','-framerate','24','-i',base+'.png','-i',base+'.wav','-vf','format=yuv420p','-c:v','libx264','-preset','veryfast','-crf','24','-threads','2','-c:a','aac','-b:a','96k','-af','apad','-t',String(duration),'-movflags','+faststart',base+'.mp4']);
     chunks.push(base+'.mp4');chapters.push({title:s.title,start:Math.round(time*1000)/1000,text:s.voice});
     const sentences=s.voice.match(/[^.!?]+[.!?]+|[^.!?]+$/g).map(x=>x.trim());let local=0;const total=sentences.reduce((n,t)=>n+t.length,0);
     for(const sentence of sentences){const end=local+voiceDuration*sentence.length/total;vtt+=`${stamp(time+local)} --> ${stamp(time+end)}\n${sentence}\n\n`;local=end;}
     time+=duration;process.stdout.write(`${v.slug} scene ${i+1}/4 rendered\n`);
   }
   fs.writeFileSync(path.join(temp,'concat.txt'),chunks.map(p=>`file '${p.replaceAll('\\','/')}'`).join('\n'));
   const mp4=path.join(pub,v.slug+'.mp4');run('ffmpeg',['-hide_banner','-loglevel','error','-y','-f','concat','-safe','0','-i',path.join(temp,'concat.txt'),'-c','copy','-movflags','+faststart',mp4]);
   run('ffmpeg',['-hide_banner','-loglevel','error','-y','-i',path.join(temp,'scene-1.png'),'-frames:v','1','-quality','85',path.join(pub,v.slug+'.webp')]);
   fs.writeFileSync(path.join(pub,v.slug+'.vtt'),vtt.trimEnd()+'\n');
   const seconds=probe(mp4);metadata.push({slug:v.slug,title:v.title,topic:'Dịch vụ kế toán',duration:`${Math.floor(seconds/60)}:${String(Math.round(seconds%60)).padStart(2,'0')}`,durationSeconds:seconds,desc:v.desc,src:`/videos/erp-xii/${v.slug}.mp4`,poster:`/videos/erp-xii/${v.slug}.webp`,captions:`/videos/erp-xii/${v.slug}.vtt`,youtube:'',uploadDate:new Date().toISOString(),kind:'Minh họa quy trình · Lời đọc tổng hợp',articleSlugs:v.articleSlugs,chapters});
 }
 await browser.close();fs.writeFileSync(path.join(root,'apps/web/src/data/erp-videos.json'),JSON.stringify(metadata,null,2)+'\n');
 process.stdout.write('COMPLETE: 3 narrated videos, captions, posters and transcripts\n');
})().catch(e=>{process.stderr.write(String(e.stack));process.exit(1)});
