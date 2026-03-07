@echo off
REM Setup Script for Games Collection
REM Installs required Python dependencies

echo.
echo ╔════════════════════════════════════════════════════════════════╗
echo ║         🎮 GAMES COLLECTION - SETUP & DEPENDENCIES 🎮         ║
echo ║                   Parth Upadhyay's Portfolio                  ║
echo ╚════════════════════════════════════════════════════════════════╝
echo.

REM Check if Python is installed
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Error: Python is not installed or not in PATH
    echo    Please install Python from https://www.python.org/
    echo.
    echo Make sure to check "Add Python to PATH" during installation!
    pause
    exit /b 1
)

echo ✅ Python found!
python --version
echo.

REM Check and install pygame
echo Checking pygame installation...
python -c "import pygame" >nul 2>&1

if %errorlevel% neq 0 (
    echo ❌ pygame is not installed
    echo.
    echo Installing pygame... (this may take a minute)
    pip install pygame
    
    if %errorlevel% neq 0 (
        echo ❌ Failed to install pygame
        echo    Try running: pip install pygame
        pause
        exit /b 1
    )
    
    echo ✅ pygame installed successfully!
) else (
    echo ✅ pygame is already installed
)

echo.
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo.
echo ✅ Setup complete! All dependencies are installed.
echo.
echo You can now:
echo   • Run: launcher.bat  (to launch games menu)
echo   • Run: python snake_game.py  (to play Snake directly)
echo.
echo Enjoy! 🎮
echo.
pause
