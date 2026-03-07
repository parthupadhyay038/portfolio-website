# Tic Tac Toe Game - React Version

This folder contains reference documentation for the React/TypeScript Tic Tac Toe game.

## 📍 Location

The actual React Tic Tac Toe game is located in the main React app:
- **Component File**: `src/components/TicTacToe.tsx`
- **Welcome Screen**: `src/components/Welcome.tsx`

## 🎮 How to Play

1. **Start the app**:
   ```bash
   npm run dev
   ```

2. **Click "Tic Tac Toe" button** in the mode switcher at the top

3. **Choose game mode**:
   - **Single Player**: Play against AI bot (Hard difficulty - Minimax algorithm)
   - **Multiplayer**: Play with another player on the same device

4. **Make moves**:
   - Click any empty cell to make your move
   - X plays first
   - AI or other player moves automatically/after your turn

5. **Win conditions**:
   - Get 3 in a row (horizontal, vertical, or diagonal) to win
   - Block opponent's winning move
   - Fill board with no winner = Draw

## 🤖 Single Player Mode

### AI Strategy
The AI uses the **Minimax Algorithm**:
- Evaluates all possible moves recursively
- Scores each move: +10 (AI wins), 0 (draw), -10 (player wins)
- Selects the move with the highest score
- This makes the AI play optimally - very difficult to beat!

### Tips to Beat the AI
- The AI is nearly unbeatable when playing perfectly
- Look for early game mistakes
- Try to create multiple threats at once
- Practice to understand optimal play

## 👥 Multiplayer Mode

- **Local play**: Both players use the same device
- **Turn indicator**: Shows whose turn it is
- **Same rules**: Standard Tic Tac Toe rules apply
- **Training**: Good way to practice strategies

## 🛠️ Technical Details

### Technologies
- **Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion (optional)

### Key Functions
```typescript
// Calculate winner (3 in a row check)
calculateWinner(board)

// Minimax algorithm for AI
minimax(board, depth, isMaximizing)

// Get best move for AI
findBestMove(board)
```

### Game States
- `'welcome'` - Mode selection screen
- `'single'` - Single player vs AI
- `'multi'` - Multiplayer mode
- Board state: Array of 9 cells (X, O, or empty)
- Turn tracking: Current player (X or O)

## 📊 Game Statistics

| Aspect | Details |
|--------|---------|
| Board Size | 3x3 grid |
| Total Cells | 9 |
| Players | 2 |
| Game Duration | 5-10 minutes average |
| Winning Positions | 8 (3 horizontal + 3 vertical + 2 diagonal) |
| AI Difficulty | Hard (Minimax) |
| Possible Game States | 5,478 |

## 🎨 UI Features

- Clean, modern interface
- Hover effects on cells
- Smooth animations
- Win/Draw announcement
- Reset game button
- Back to mode selection

## 🐛 Known Issues & Fixes

| Issue | Status | Fix |
|-------|--------|-----|
| AI taking too long | Resolved | Uses memoized functions |
| State race conditions | Resolved | Proper callback usage |
| Visual feedback | Working | Hover and click animations |

## 🔗 Related Links

- **Main Portfolio**: See `../../README.md`
- **Main Component**: `../../src/components/TicTacToe.tsx`
- **Welcome Screen**: `../../src/components/Welcome.tsx`
- **GitHub Repo**: https://github.com/parthupadhyay038/portfolio-website

## 📝 Notes

This Tic Tac Toe game serves as a demonstration of:
1. **React components** and state management
2. **TypeScript** for type safety
3. **Algorithm implementation** (Minimax)
4. **UI/UX design** principles
5. **Game logic** and win detection

---

**Last Updated**: March 7, 2026
**Status**: ✅ Complete & Deployed
