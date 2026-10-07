@echo off
setlocal
cd /d "%~dp0\.."
python scripts\check_placeholders.py
exit /b %errorlevel%
