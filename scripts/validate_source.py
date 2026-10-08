
from pathlib import Path
import re,sys,json
root=Path(__file__).resolve().parents[1]
pages=root/'apps/web/src/pages'
# route map
routes={'/'}
for p in pages.rglob('*.astro'):
 rel=p.relative_to(pages)
 if rel.name=='404.astro': continue
 if rel.name=='index.astro': route='/'+'/'.join(rel.parts[:-1])+'/' if rel.parts[:-1] else '/'
 else: route='/'+'/'.join(rel.with_suffix('').parts)+'/'
 routes.add(route.replace('//','/'))
errors=[]
# import targets
for p in (root/'apps/web/src').rglob('*.astro'):
 text=p.read_text(encoding='utf-8')
 for imp in re.findall(r"from ['\"](\.{1,2}/[^'\"]+)['\"]",text):
  target=(p.parent/imp).resolve()
  
  candidates=[target,Path(str(target)+'.ts'),Path(str(target)+'.js'),Path(str(target)+'.astro'),target.with_suffix('.ts'),target.with_suffix('.js'),target.with_suffix('.astro')]
  if not any(c.exists() for c in candidates): errors.append(f'Missing import: {p.relative_to(root)} -> {imp}')
# internal href route checks, ignore fragments/static/legal dynamic none
for p in (root/'apps/web/src').rglob('*.astro'):
 text=p.read_text(encoding='utf-8')
 hrefs=re.findall(r'href=["\'](/[^"\']*)["\']',text)
 if hrefs: errors.append(f'Hardcoded root-relative href (use url() for GitHub Pages base path): {p.relative_to(root)} -> {hrefs[0]}')
 hrefs+=re.findall(r'href=\{url\([\'"](/[^\'"]*)[\'"]\)\}',text)
 for href in hrefs:
  clean=href.split('#')[0].split('?')[0]
  if not clean or clean=='/': continue
  if clean.startswith('/favicon') or clean.startswith('/og-'): continue
  if (root/'apps/web/public'/clean.lstrip('/')).is_file(): continue  # tệp tĩnh trong public/
  if not clean.endswith('/'): clean+='/'
  if clean not in routes: errors.append(f'Broken internal href: {p.relative_to(root)} -> {href}')
# internal links declared in data files (rendered through url())
for p in (root/'apps/web/src').rglob('*.ts'):
 text=p.read_text(encoding='utf-8')
 for href in re.findall(r"['\"](/(?:[a-z0-9\-]+/)+)['\"]",text):
  if p.name in ('sitemap.xml.ts',) or 'utils' in p.parts or href.startswith('/api/'): continue
  if href not in routes: errors.append(f'Broken internal link in data: {p.relative_to(root)} -> {href}')
# sitemap must list every route
sm=(pages/'sitemap.xml.ts').read_text(encoding='utf-8')
listed=set(re.findall(r'"(/[^"]*)"',sm))
for r in sorted(routes-listed): errors.append(f'Route missing from sitemap: {r}')
for r in sorted(listed-routes): errors.append(f'Sitemap lists unknown route: {r}')
# required config
for f in ['apps/web/package.json','apps/api/UNESCO.Web.sln','database/migrations/001_init.sql','.github/workflows/website-ci.yml']:
 if not (root/f).exists(): errors.append('Missing required '+f)
if errors:
 print('[FAIL] source validation')
 for e in errors: print(' -',e)
 sys.exit(1)
print(f'[PASS] source validation: {len(routes)} web routes, imports and static hrefs OK')
