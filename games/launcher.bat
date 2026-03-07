@echo off
REM Games Collection Launcher - Windows Batch Script
REM Author: Parth Upadhyay

echo.
echo ╔════════════════════════════════════════════════════════════════╗
echo ║                   🎮 GAMES COLLECTION 🎮                      ║
echo ║                   Parth Upadhyay's Portfolio                  ║
echo ╚════════════════════════════════════════════════════════════════╝
echo.

REM Check if Python is installed
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Error: Python is not installed or not in PATH
    echo    Please install Python from https://www.python.org/
    pause
    exit /b 1
)

REM Run the launcher
python launcher.py

if %errorlevel% neq 0 (
    echo.
    echo ⚠️  The launcher exited with an error.
    pause
    exit /b 1
)

pause
