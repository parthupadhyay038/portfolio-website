"""
Games Collection Launcher
Run this script to see all available games and launch them

Author: Parth Upadhyay
"""

import subprocess
import sys
import os

def print_banner():
    """Print games collection banner"""
    banner = """
╔════════════════════════════════════════════════════════════════╗
║                   🎮 GAMES COLLECTION 🎮                      ║
║                   Parth Upadhyay's Portfolio                  ║
╚════════════════════════════════════════════════════════════════╝
    """
    print(banner)

def print_menu():
    """Print available games menu"""
    menu = """
Available Games:
────────────────────────────────────────────────────────────────
1. 🐍 Snake Game (Python + Pygame)
   - Classic snake gameplay
   - Difficulty increases with score
   - Smooth 2D graphics
   
2. 🎯 Tic Tac Toe (React + TypeScript)
   - Single Player (AI with Minimax)
   - Multiplayer (Local play)
   - Beautiful animated UI
   
3. 📖 View Games Documentation
   - Learn about all games
   - Technical details & guides
   
4. ❌ Exit

────────────────────────────────────────────────────────────────
    """
    print(menu)

def run_snake_game():
    """Run the Snake game"""
    try:
        print("\n🐍 Starting Snake Game...")
        print("   Controls: WASD/Arrows to move, Space to pause, R to restart, Esc to quit\n")
        subprocess.run([sys.executable, "snake_game.py"], check=True)
    except FileNotFoundError:
        print("❌ Error: snake_game.py not found")
    except subprocess.CalledProcessError:
        print("⚠️  Snake game exited")
    except Exception as e:
        print(f"❌ Error running Snake game: {e}")

def show_tic_tac_toe_info():
    """Show Tic Tac Toe game info"""
    info = """
🎯 Tic Tac Toe Game (React Version)

Location: ../src/components/TicTacToe.tsx

To play:
1. Run: npm run dev
2. Open browser at http://localhost:3002 (or shown port)
3. Click "Tic Tac Toe" button in mode switcher
4. Choose Single Player (vs AI) or Multiplayer

Features:
✅ Single player with AI (Minimax algorithm)
✅ Multiplayer local play
✅ Beautiful animations
✅ Win/Draw detection
✅ Game reset functionality

AI Strategy:
The AI uses Minimax algorithm to find optimal moves.
It evaluates all possible game states and selects the best move.
Nearly unbeatable at expert level!

────────────────────────────────────────────────────────
    """
    print(info)

def show_documentation():
    """Show games documentation"""
    try:
        with open("README.md", "r", encoding="utf-8") as f:
            print("\n" + f.read())
    except FileNotFoundError:
        print("❌ Error: README.md not found")
    except Exception as e:
        print(f"❌ Error reading documentation: {e}")

def check_pygame():
    """Check if pygame is installed"""
    try:
        import pygame
        return True
    except ImportError:
        return False

def main():
    """Main menu loop"""
    print_banner()
    
    # Check if pygame is installed for Snake game
    pygame_installed = check_pygame()
    if not pygame_installed:
        print("⚠️  Warning: pygame not installed")
        print("   To play Snake game, run: pip install pygame\n")
    
    while True:
        print_menu()
        choice = input("Enter your choice (1-4): ").strip()
        
        if choice == "1":
            if not pygame_installed:
                print("\n❌ Snake game requires pygame!")
                print("   Install it with: pip install pygame\n")
            else:
                run_snake_game()
        
        elif choice == "2":
            show_tic_tac_toe_info()
        
        elif choice == "3":
            show_documentation()
        
        elif choice == "4":
            print("\n👋 Thanks for playing! Goodbye!")
            break
        
        else:
            print("\n❌ Invalid choice. Please enter 1-4.\n")
        
        input("\nPress Enter to continue...")
        print("\n" * 2)

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\n\n👋 Games collection closed. Goodbye!")
        sys.exit(0)
