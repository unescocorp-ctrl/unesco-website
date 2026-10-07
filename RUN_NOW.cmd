@echo off
setlocal
cd /d "%~dp0"
echo ============================================================
echo UNESCO XI + AI WEBSITE V1 - RUN NOW
echo ============================================================
where node >nul 2>nul || (echo [ERROR] Node.js 22+ not found.& exit /b 2)
where dotnet >nul 2>nul && (start "UNESCO API" cmd /k "cd /d "%~dp0apps\api" && dotnet run --project UNESCO.Web.Api") || echo [WARN] .NET SDK 10 not found - chi chay website, form se khong gui duoc toi API.
cd /d "%~dp0apps\web"
if not exist node_modules call npm install || exit /b 4
call npm run dev
endlocal
