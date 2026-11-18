"""Check generated sitemap pages, JSON-LD and local references, including a Pages base path."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urljoin,urlsplit,unquote
import xml.etree.ElementTree as ET
import json,sys

root=Path(__file__).resolve().parents[1]
dist=root/'apps/web/dist'
sitemap=ET.fromstring((dist/'sitemap.xml').read_text(encoding='utf-8'))
locations=[x.text for x in sitemap.findall('.//{*}loc')]
home=min(locations,key=lambda s:len(urlsplit(s).path))
origin=urlsplit(home).netloc;base=urlsplit(home).path.rstrip('/')
errors=[];checked=0
def local_file(url):
    path=unquote(urlsplit(url).path)
    if base:
        if not path.startswith(base+'/') and path!=base: return None
        path=path[len(base):]
    target=dist/path.lstrip('/')
    return target/'index.html' if path.endswith('/') or target.is_dir() else target

class Page(HTMLParser):
    def __init__(self):
        super().__init__();self.refs=[];self.canonical=None;self.jsonld=[];self.active=False;self.buf='';self.h1=0
    def handle_starttag(self,tag,attrs):
        a=dict(attrs)
        if tag=='h1': self.h1+=1
        for key in ('href','src','poster'):
            if a.get(key): self.refs.append(a[key])
        if tag=='link' and a.get('rel')=='canonical': self.canonical=a.get('href')
        if tag=='script' and a.get('type')=='application/ld+json': self.active=True;self.buf=''
    def handle_data(self,value):
        if self.active:self.buf+=value
    def handle_endtag(self,tag):
        if tag=='script' and self.active:self.jsonld.append(self.buf);self.active=False

for loc in locations:
    target=local_file(loc)
    if not target or not target.is_file(): errors.append(f'Sitemap target missing: {loc}');continue
    parser=Page();parser.feed(target.read_text(encoding='utf-8'))
    # Standalone public tools retain their own metadata and are not Astro pages.
    is_tool=(root/'apps/web/public'/target.relative_to(dist)).is_file()
    if not is_tool and parser.canonical!=loc: errors.append(f'Canonical mismatch: {loc}')
    if not is_tool and parser.h1!=1:errors.append(f'Expected one H1: {loc}')
    for reference in parser.refs:
        resolved=urljoin(loc,reference);parts=urlsplit(resolved)
        if parts.scheme not in ('http','https') or parts.netloc!=origin:continue
        asset=local_file(resolved)
        if not asset or not asset.is_file():errors.append(f'Missing local target: {loc} -> {reference}')
    for raw in parser.jsonld:
        try: graph=json.loads(raw)
        except ValueError:errors.append(f'Invalid JSON-LD: {loc}');continue
        for item in graph.get('@graph',[]):
            if item.get('@type')=='VideoObject':
                for field in ('name','description','thumbnailUrl','uploadDate','duration','contentUrl'):
                    if not item.get(field):errors.append(f'Missing VideoObject {field}: {loc}')
                thumbnails=item['thumbnailUrl'] if isinstance(item['thumbnailUrl'],list) else [item['thumbnailUrl']]
                for asset_url in [item['contentUrl'],*thumbnails]:
                    f=local_file(urljoin(loc,asset_url))
                    if not f or not f.is_file():errors.append(f'Missing VideoObject asset: {asset_url}')
    checked+=1
if errors:
    print('[FAIL] generated website\n'+'\n'.join(sorted(set(errors))));sys.exit(1)
print(f'[PASS] {checked} sitemap pages: local links/media, canonical URLs and JSON-LD; base={base or "/"}')
