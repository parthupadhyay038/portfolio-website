import React from 'react';

interface WelcomeProps {
  onStartGame: (mode: 'single' | 'multi') => void;
}

const Welcome: React.FC<WelcomeProps> = ({ onStartGame }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 flex flex-col items-center justify-center p-4">
      {/* Animated background elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 text-center">
        {/* Main greeting */}
        <div className="mb-12">
          <h1 className="text-6xl md:text-7xl font-black text-white mb-4 drop-shadow-lg">
            Hey Gaurav! 👋
          </h1>
          <p className="text-2xl md:text-3xl text-white/90 font-light drop-shadow-md">
            I too am here...
          </p>
          <p className="text-lg text-white/70 mt-4">Let's play some Tic Tac Toe! 🎮</p>
        </div>

        {/* Game mode selection */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Choose Your Adventure</h2>
          
          <div className="space-y-4">
            {/* Single Player Button */}
            <button
              onClick={() => onStartGame('single')}
              className="w-full group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl font-bold text-white text-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <span>🤖</span>
                <span>Play vs Bot</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            {/* Multiplayer Button */}
            <button
              onClick={() => onStartGame('multi')}
              className="w-full group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl font-bold text-white text-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <span>👥</span>
                <span>Duel Player</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          <p className="text-white/60 text-sm mt-8">
            Choose your game mode and let's begin the challenge!
          </p>
        </div>

        {/* Footer */}
        <div className="mt-12 text-white/70 text-sm">
          <p>May the best player win! 🏆</p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
