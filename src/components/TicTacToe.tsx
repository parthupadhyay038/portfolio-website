import React, { useState, useEffect } from 'react';

interface TicTacToeProps {
  mode: 'single' | 'multi';
  onBack: () => void;
}

type Player = 'X' | 'O' | null;

const TicTacToe: React.FC<TicTacToeProps> = ({ mode, onBack }) => {
  const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState<Player>(null);
  const [gameOver, setGameOver] = useState(false);

  // Get current player
  const currentPlayer = isXNext ? 'X' : 'O';

  // Calculate winner
  const calculateWinner = (squares: Player[]) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  // Bot AI - minimax algorithm
  const getBotMove = (squares: Player[]) => {
    const availableMoves = squares
      .map((val, idx) => (val === null ? idx : null))
      .filter((val) => val !== null);

    if (availableMoves.length === 0) return -1;

    // Simple strategy: try to win, block opponent, take center, take corner, take edge
    const testMove = (testSquares: Player[], move: number, player: Player) => {
      const copy = [...testSquares];
      copy[move] = player;
      return calculateWinner(copy) === player;
    };

    // Try to win
    for (let move of availableMoves) {
      if (testMove(squares, move, 'O')) return move;
    }

    // Block opponent
    for (let move of availableMoves) {
      if (testMove(squares, move, 'X')) return move;
    }

    // Take center
    if (availableMoves.includes(4)) return 4;

    // Take corners
    const corners = [0, 2, 6, 8].filter((c) => availableMoves.includes(c));
    if (corners.length > 0) return corners[Math.floor(Math.random() * corners.length)];

    // Take any available
    return availableMoves[Math.floor(Math.random() * availableMoves.length)];
  };

  // Handle cell click
  const handleClick = (index: number) => {
    if (board[index] !== null || winner || gameOver) return;

    const newBoard = [...board];
    newBoard[index] = 'X';
    setBoard(newBoard);

    const gameWinner = calculateWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
      setGameOver(true);
      return;
    }

    if (newBoard.every((cell) => cell !== null)) {
      setGameOver(true);
      return;
    }

    setIsXNext(false);
  };

  // Bot move effect for single player
  useEffect(() => {
    if (mode === 'single' && !isXNext && !winner && !gameOver) {
      const timer = setTimeout(() => {
        const botMove = getBotMove(board);
        if (botMove !== -1) {
          const newBoard = [...board];
          newBoard[botMove] = 'O';
          setBoard(newBoard);

          const gameWinner = calculateWinner(newBoard);
          if (gameWinner) {
            setWinner(gameWinner);
            setGameOver(true);
            return;
          }

          if (newBoard.every((cell) => cell !== null)) {
            setGameOver(true);
            return;
          }

          setIsXNext(true);
        }
      }, 600);

      return () => clearTimeout(timer);
    }
  }, [isXNext, mode, board, winner, gameOver]);

  // Handle multiplayer click
  const handleMultiClick = (index: number) => {
    if (board[index] !== null || winner || gameOver) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const gameWinner = calculateWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
      setGameOver(true);
      return;
    }

    if (newBoard.every((cell) => cell !== null)) {
      setGameOver(true);
      return;
    }

    setIsXNext(!isXNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
    setGameOver(false);
  };

  const isBoardFull = board.every((cell) => cell !== null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col items-center justify-center p-4">
      {/* Animated background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-2 drop-shadow-lg">
            Tic Tac Toe
          </h1>
          <p className="text-lg text-white/70">
            {mode === 'single' ? '🤖 Playing vs Bot' : '👥 Duel Mode'}
          </p>
        </div>

        {/* Game Status */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 mb-8 text-center">
          {!gameOver ? (
            <div>
              <p className="text-white/70 text-sm mb-2">Current Player</p>
              <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                {currentPlayer === 'X' ? '❌' : '⭕'}
              </p>
            </div>
          ) : winner ? (
            <div>
              <p className="text-white/70 text-sm mb-2">🎉 Game Over!</p>
              <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                {winner === 'X' ? (mode === 'single' ? 'You Won! 🏆' : 'X Won! 🏆') : mode === 'single' ? 'Bot Won!' : 'O Won! 🏆'}
              </p>
            </div>
          ) : isBoardFull ? (
            <div>
              <p className="text-white/70 text-sm mb-2">Game Over</p>
              <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                It's a Draw! 🤝
              </p>
            </div>
          ) : null}
        </div>

        {/* Game Board */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-white/20 shadow-2xl mb-8">
          <div className="grid grid-cols-3 gap-3 md:gap-4">
            {board.map((cell, index) => (
              <button
                key={index}
                onClick={() => (mode === 'single' ? handleClick(index) : handleMultiClick(index))}
                className="aspect-square bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl border-2 border-white/20 hover:border-white/50 hover:bg-gradient-to-br hover:from-slate-600 hover:to-slate-700 transition-all duration-300 transform hover:scale-105 text-5xl font-bold text-white shadow-lg hover:shadow-xl cursor-pointer group relative overflow-hidden"
              >
                <span className="relative z-10">
                  {cell === 'X' ? '❌' : cell === 'O' ? '⭕' : ''}
                </span>
                {!cell && (
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 justify-center">
          {gameOver && (
            <button
              onClick={resetGame}
              className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Play Again 🎮
            </button>
          )}
          <button
            onClick={onBack}
            className="px-8 py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white font-bold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Back Home 🏠
          </button>
        </div>

        {/* Game Info */}
        <div className="mt-8 text-center text-white/50 text-sm">
          <p>Made with ❤️ for Gaurav</p>
        </div>
      </div>
    </div>
  );
};

export default TicTacToe;
