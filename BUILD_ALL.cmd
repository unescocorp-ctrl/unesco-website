@echo off
setlocal
cd /d "%~dp0"
echo ============================================================
echo UNESCO XI + AI WEBSITE V1 - BUILD ALL
echo ============================================================
where node >nul 2>nul || (echo [ERROR] Node.js 22+ not found.& exit /b 2)
where dotnet >nul 2>nul || (echo [ERROR] .NET SDK 10 not found.& exit /b 3)
call scripts\CHECK_PLACEHOLDERS.cmd || exit /b 10
cd /d "%~dp0apps\web"
if not exist node_modules call npm install || exit /b 4
call npm run check || exit /b 5
call npm run build || exit /b 6
cd /d "%~dp0apps\api"
dotnet restore UNESCO.Web.sln || exit /b 7
dotnet build UNESCO.Web.sln -c Release --no-restore || exit /b 8
cd /d "%~dp0"
echo [PASS] Build completed.
endlocal
