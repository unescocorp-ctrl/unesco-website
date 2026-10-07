@echo off
setlocal
cd /d "%~dp0"
echo ============================================================
echo UNESCO XI + AI WEBSITE V1 - RUN NOW
echo ============================================================
where node >nul 2>nul || (echo [ERROR] Node.js 22+ not found.& exit /b 2)
where dotnet >nul 2>nul || (echo [ERROR] .NET SDK 10 not found.& exit /b 3)
start "UNESCO API" cmd /k "cd /d "%~dp0apps\api" && dotnet run --project UNESCO.Web.Api"
cd /d "%~dp0apps\web"
if not exist node_modules call npm install || exit /b 4
call npm run dev
endlocal
