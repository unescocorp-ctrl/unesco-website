@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo === 1. Kiem tra build website ===
cd apps\web
call npm run build
if errorlevel 1 ( echo BUILD LOI - dung lai, gui log cho Claude. & pause & exit /b 1 )
cd ..\..
echo === 2. Tao nhanh, commit va push ===
git checkout -b seo-toi-uu-11-2026
git add apps/web/src
git commit -m "SEO: schema JSON-LD, mo ta trang rieng, sitemap lastmod, bai Thong tu 58/2026"
git push -u origin seo-toi-uu-11-2026
echo === 3. Mo trang tao Pull Request ===
start https://github.com/unescocorp-ctrl/unesco-website/compare/main...seo-toi-uu-11-2026?expand=1
pause
