# 🎮 Games Collection - Parth Upadhyay

A collection of games showcasing different programming skills and technologies.

## Games Available

### 1. 🐍 Snake Game (Python)
**Location**: `snake_game.py`

A classic Snake game built with Pygame. Navigate the snake to eat food, grow longer, and achieve the highest score!

#### Features
- Smooth snake movement and collision detection
- Score tracking and length counter
- Progressive difficulty (speed increases with score)
- Pause/Resume functionality
- Game Over detection (walls & self-collision)
- Beautiful UI with grid and gradient effects

#### Requirements
```bash
pip install pygame
```

#### How to Run
```bash
python snake_game.py
```

#### Controls
- **WASD** or **Arrow Keys**: Move snake
- **Space**: Pause/Resume game
- **R**: Restart game
- **Esc**: Quit game

#### Gameplay Tips
- Plan your moves ahead to avoid getting trapped
- Collect food (red squares) to grow and increase score
- Avoid walls and your own body
- Difficulty increases as your score goes up
- Speed increases from 8 to 15 FPS based on score

---

### 2. 🎯 Tic Tac Toe Game (React/TypeScript)
**Location**: React application (not in games folder - integrated into portfolio)

An interactive Tic Tac Toe game with AI bot and multiplayer modes built with React and TypeScript.

#### Features
- Single Player mode (play against AI)
- Multiplayer mode (local play)
- AI uses Minimax algorithm for optimal moves
- Beautiful animated UI
- Win/Draw detection
- Game state management

#### How to Play
1. In the main portfolio app, click the "Tic Tac Toe" button
2. Select Single Player or Multiplayer mode
3. Click cells to make your move
4. Reset or back to try again

#### Play Online
- Access the React Tic Tac Toe at the main portfolio (when deployed)
- No installation needed - runs in the browser

---

## 📁 Folder Structure

```
games/
├── snake_game.py          # Python Snake game (Pygame)
├── tic-tac-toe/           # Reference folder (React-based)
│   └── README.md          # Link to React version
└── README.md              # This file
```

---

## 🎨 Technology Comparison

| Feature | Snake Game | Tic Tac Toe |
|---------|-----------|------------|
| Language | Python | TypeScript/React |
| Framework | Pygame | React |
| Graphics | 2D Graphics | Web UI |
| AI Algorithm | N/A | Minimax |
| Platform | Desktop (Local) | Browser |
| Mode | Single player | Single & Multiplayer |

---

## 🚀 Future Game Ideas

- [ ] Pong Game (Python)
- [ ] 2048 Game (React)
- [ ] Flappy Bird Clone (Python)
- [ ] Memory Match Game (React)
- [ ] Breakout/Brick Breaker (Python)
- [ ] Connect Four (React)

---

## 📦 Installation & Setup

### For Snake Game (Python)

1. **Install Python 3.8+**
   ```bash
   python --version  # Check version
   ```

2. **Install Pygame**
   ```bash
   pip install pygame
   ```

3. **Run the game**
   ```bash
   python games/snake_game.py
   ```

### For Tic Tac Toe (React)

1. **Start the development server**
   ```bash
   npm run dev
   ```

2. **Open in browser** at `http://localhost:3002` (or shown port)

3. **Click "Tic Tac Toe"** button to switch to game mode

---

## 🎓 Learning Outcomes

### Snake Game (Python)
- Game loop management with Pygame
- Collision detection algorithms
- Enum usage for direction handling
- Real-time graphics rendering
- Game state management
- Difficulty/progression system

### Tic Tac Toe (React)
- Component state management
- Algorithm implementation (Minimax)
- React hooks (useState, useCallback)
- TypeScript interfaces and types
- Game logic implementation
- UI/UX best practices

---

## 🔧 Debugging & Troubleshooting

### Snake Game Issues

**Issue**: "ModuleNotFoundError: No module named 'pygame'"
```bash
pip install pygame --upgrade
```

**Issue**: Game runs slowly
- Close other applications
- Lower screen resolution or use fullscreen mode
- Check CPU usage

**Issue**: Controls not responding
- Ensure game window is focused
- Try different key combinations (WASD vs Arrows)

### Tic Tac Toe Issues

See main project README at `../README.md`

---

## 📊 Game Statistics

### Snake Game
- **Grid Size**: 40x30 (800x600 pixels)
- **Cell Size**: 20 pixels
- **Starting Speed**: 8 FPS
- **Max Speed**: 15 FPS
- **Score Per Food**: 10 points

### Tic Tac Toe
- **Board Size**: 3x3
- **Players**: 2 (Human vs AI or Human vs Human)
- **Game States**: In Progress, Win, Draw, Game Over
- **AI Difficulty**: Hard (Minimax)

---

## 🤝 Contributing

Want to add more games? Feel free to:
1. Create a new game file in this folder
2. Add documentation here
3. Update the folder structure
4. Submit a pull request

---

## 📄 License

MIT License - These games are open source and free to use!

---

## 👤 Author

**Parth Upadhyay**
- GitHub: [@parthupadhyay038](https://github.com/parthupadhyay038)
- Portfolio: [Your Portfolio URL]
- Email: parth@example.com

---

**Last Updated**: March 7, 2026
**Status**: 🟢 Active | 2 Games Available
