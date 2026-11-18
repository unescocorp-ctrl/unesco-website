"""Validate the published ERP lesson graph and caption timing without network access."""
from pathlib import Path
import json,re,sys
from datetime import datetime

root=Path(__file__).resolve().parents[1]
data=root/'apps/web/src/data'
public=root/'apps/web/public'
articles=json.loads((data/'erp-articles.json').read_text(encoding='utf-8'))
customer_articles=json.loads((data/'xii-customer-articles.json').read_text(encoding='utf-8'))
visual_articles=json.loads((data/'xii-visual-articles.json').read_text(encoding='utf-8'))
visual_guide=json.loads((data/'xii-visual-guide.json').read_text(encoding='utf-8'))
videos=json.loads((data/'erp-videos.json').read_text(encoding='utf-8'))
monthly_articles=json.loads((data/'xii-monthly-articles.json').read_text(encoding='utf-8'))
articles+=monthly_articles
videos+=json.loads((data/'xii-monthly-videos.json').read_text(encoding='utf-8'))
errors=[]
def check(ok,message):
    if not ok: errors.append(message)
def seconds(value):
    h,m,s=value.split(':'); return int(h)*3600+int(m)*60+float(s)

legacy_articles=re.findall(r"slug: '([a-z0-9\-]+)'",(data/'articles.ts').read_text(encoding='utf-8'))
legacy_videos=re.findall(r"(?:\bv\(|slug: )'([a-z0-9\-]+)'",(data/'videos.ts').read_text(encoding='utf-8'))
for label,items,legacy in [('article',articles+customer_articles+visual_articles,legacy_articles),('video',videos,legacy_videos)]:
    slugs=[x['slug'] for x in items]+legacy
    check(len(slugs)==len(set(slugs)),f'Duplicate {label} slugs')
    for item in items:
        check(bool(re.fullmatch('[a-z0-9]+(?:-[a-z0-9]+)*',item['slug'])),f'Invalid {label} slug')
        check(bool(item['title'].strip()),f'Empty {label} title')

article_slugs={a['slug'] for a in articles};video_slugs={v['slug'] for v in videos}
for a in articles:
    check(a.get('relatedVideo') in video_slugs,f"Unknown related video: {a['slug']}")
    check(len(a['blocks'])>=5,f"Incomplete article: {a['slug']}")
    check(bool(re.fullmatch(r'\d{4}-\d{2}-\d{2}',a['date'])),f"Invalid article date: {a['slug']}")
    for b in a['blocks']:
        check(b['t'] in ['lead','note','h2','h3','p','ol','table','link','contact','download'],f"Unknown ERP article block: {b['t']}")
        if b['t'] in ('link','download'):
            check(b['href'] in ('/ket-noi-erp-unesco-xii/','/unesco-xii-ai/dich-vu-ke-toan/') or (public/b['href'].lstrip('/')).is_file() or b['href'] in {f'/kien-thuc/{s}/' for s in article_slugs},f"Unknown lesson link: {b['href']}")

for a in monthly_articles:
    check(len(a['blocks'])>=12,f"Incomplete monthly article: {a['slug']}")
    check(not re.search(r'[A-Za-z]:\\|file:///|absolute_path|sourceEvidenceRefs|S\d{2}\b',json.dumps(a,ensure_ascii=False)),f"Internal evidence exposed: {a['slug']}")

for a in customer_articles:
    check(len(a['blocks'])>=12,f"Incomplete customer article: {a['slug']}")
    check(bool(re.fullmatch(r'\d{4}-\d{2}-\d{2}',a['date'])),f"Invalid article date: {a['slug']}")
    check(not a.get('relatedVideo'),f"Do not associate an unverified video with customer lesson: {a['slug']}")
    for b in a['blocks']:
        check(b['t'] in ['lead','note','h2','h3','p','ol','table','link','download'],f"Unknown customer block: {b['t']}")
        if b['t'] in ('link','download'):
            href=b['href']
            check(href=='/unesco-xii-ai/dich-vu-ke-toan/' or (public/href.lstrip('/')).is_file(),f"Missing customer resource: {href}")
    text=json.dumps(a,ensure_ascii=False)
    check(not re.search(r'[A-Za-z]:\\|file:///|absolute_path|sourceEvidenceRefs|S\d{2}\b',text),f"Internal evidence exposed: {a['slug']}")

visual_slugs={a['slug'] for a in visual_articles}
check(visual_slugs=={g['slug'] for g in visual_guide},'Visual guide/article mismatch')
screen_assets=set()
for a in visual_articles:
    check(a.get('visualGuide') and not a.get('relatedVideo'),f"Invalid visual guide: {a['slug']}")
    check(not re.search(r'[A-Za-z]:[\\/]|file:///|absolute_path|sourceEvidenceRefs',json.dumps(a,ensure_ascii=False)),f"Internal evidence exposed: {a['slug']}")
    anchors=[b['id'] for b in a['blocks'] if b['t']=='h2' and b.get('id')]
    check(len(anchors)==len(set(anchors)),f"Duplicate anchors: {a['slug']}")
    group=next((g for g in visual_guide if g['slug']==a['slug']),None)
    if group:
        check(set(anchors)=={i['anchor'] for i in group['items']},f"Missing function anchor: {a['slug']}")
        for item in group['items']:
            check((public/item['image'].lstrip('/')).is_file(),f"Missing guide preview: {item['anchor']}")
    for b in a['blocks']:
        check(b['t'] in ['lead','note','h2','h3','p','ol','screen','link'],f"Unknown visual block: {b['t']}")
        if b['t']=='screen':
            check(b['w']>0 and b['h']>0 and bool(b['cap']),f"Incomplete screenshot: {a['slug']}")
            for key in ('src','thumb'):
                value=b[key];asset=public/value.lstrip('/')
                check(value.startswith('/huong-dan/unesco-xii-real/') and '..' not in value and value.endswith('.webp'),f'Unexpected screenshot path: {value}')
                check(asset.is_file() and asset.stat().st_size>0,f'Missing screenshot: {value}')
                screen_assets.add(value)
        elif b['t']=='link':
            check(b['href'] in ('/unesco-xii-ai/huong-dan/','/unesco-xii-ai/dich-vu-ke-toan/'),f"Unknown guide link: {b['href']}")
public_screens={'/huong-dan/unesco-xii-real/'+p.name for p in (public/'huong-dan/unesco-xii-real').iterdir() if p.is_file()}
check(public_screens==screen_assets,'Unexpected or missing published screenshot asset')

for v in videos:
    name=v['slug'];duration=v['durationSeconds']
    check(duration>0,f'Invalid duration: {name}')
    display=int(v['duration'].split(':')[0])*60+int(v['duration'].split(':')[1])
    check(abs(display-duration)<1,f'Display duration mismatch: {name}')
    check(bool(datetime.fromisoformat(v['uploadDate'].replace('Z','+00:00')).tzinfo),f'Missing timezone: {name}')
    for field,suffix in [('src','.mp4'),('poster','.webp'),('captions','.vtt')]:
        value=v[field];asset=public/value.lstrip('/')
        check(value.startswith('/videos/erp-xii/') and asset.suffix==suffix,f'Invalid {field}: {name}')
        check(asset.is_file() and asset.stat().st_size>0,f'Missing {field}: {name}')
    check(set(v['articleSlugs'])<=article_slugs,f'Unknown related article: {name}')
    starts=[c['start'] for c in v['chapters']]
    check(starts[0]==0 and starts==sorted(set(starts)) and starts[-1]<duration,f'Invalid chapters: {name}')
    check(all(c['title'] and c['text'] for c in v['chapters']),f'Empty transcript: {name}')
    captions=(public/v['captions'].lstrip('/')).read_text(encoding='utf-8')
    check(captions.startswith('WEBVTT\n'),f'Missing VTT header: {name}')
    cues=re.findall(r'(\d{2}:\d{2}:\d{2}\.\d{3}) --> (\d{2}:\d{2}:\d{2}\.\d{3})\n([^\n]+)',captions)
    check(len(cues)>=len(v['chapters']),f'Missing caption cues: {name}')
    previous=0
    for start,end,text in cues:
        start,end=seconds(start),seconds(end)
        check(previous<=start<end<=duration+0.1,f'Invalid caption timing: {name}')
        previous=end
    check(' '.join(c[2] for c in cues)==' '.join(c['text'] for c in v['chapters']),f'Caption/transcript mismatch: {name}')
    for a in v['articleSlugs']:
        check(next(x for x in articles if x['slug']==a)['relatedVideo']==name,f'Article/video relation mismatch: {a}')

if errors:
    print('[FAIL] content validation\n'+'\n'.join(errors));sys.exit(1)
print(f'[PASS] {len(articles)} ERP/monthly articles, {len(customer_articles)} customer articles, {len(visual_articles)} visual articles, {len(screen_assets)} screenshot assets, {len(videos)} videos: routes, related content, assets, captions and transcripts')
