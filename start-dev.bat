@echo off
title Portfolio Dev Server
echo ==========================================
echo   Starting Portfolio Dev Server (CodeSolve)
echo ==========================================
echo.
set "PATH=C:\Users\omara\.local\node\node-v20.18.0-win-x64;%PATH%"
cd /d "%~dp0"
call npm run dev
pause
