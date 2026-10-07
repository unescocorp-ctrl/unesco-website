from pathlib import Path
import re, sys
root = Path(__file__).resolve().parents[1]
required = [
    root / "apps/web/src/config/site.config.ts",
    root / "apps/api/UNESCO.Web.Api/appsettings.json",
]
pattern = re.compile(r"\{\{[A-Z0-9_]+\}\}")
found=[]
for p in required:
    text=p.read_text(encoding='utf-8')
    for m in pattern.findall(text):
        found.append((p.relative_to(root),m))
if found:
    print("[BLOCKED] Production placeholders remain:")
    for p,m in found: print(f" - {p}: {m}")
    print("Use this as a production gate. Development source is otherwise valid.")
    sys.exit(10)
print("[PASS] Required deployment placeholders resolved.")
