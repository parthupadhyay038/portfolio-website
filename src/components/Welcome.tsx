import React from 'react';

interface WelcomeProps {
  onStartGame: (mode: 'single' | 'multi') => void;
}

const Welcome: React.FC<WelcomeProps> = ({ onStartGame }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 text-center">
        {/* Main greeting */}
        <div className="mb-12">
          <h1 className="text-6xl md:text-7xl font-black text-white mb-4 drop-shadow-lg">
            Tic Tac Toe 🎯
          </h1>
          <p className="text-2xl md:text-3xl text-slate-400 font-light drop-shadow-md">
            Let's play!
          </p>
          <p className="text-lg text-slate-500 mt-4">Choose your game mode 🎮</p>
        </div>

        {/* Game mode selection */}
        <div className="bg-slate-800/50 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-slate-700 shadow-2xl max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Choose Your Mode</h2>
          
          <div className="space-y-4">
            {/* Single Player Button */}
            <button
              onClick={() => onStartGame('single')}
              className="w-full group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl font-bold text-white text-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <span>🤖</span>
                <span>Play vs Bot</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            {/* Multiplayer Button */}
            <button
              onClick={() => onStartGame('multi')}
              className="w-full group relative px-8 py-4 bg-gradient-to-r from-slate-700 to-slate-600 rounded-xl font-bold text-white text-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-slate-600 hover:border-blue-400"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <span>👥</span>
                <span>Multiplayer</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-slate-600 to-slate-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          <p className="text-slate-400 text-sm mt-8">
            May the best player win! 🏆
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
