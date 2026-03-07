import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Welcome from './components/Welcome';
import TicTacToe from './components/TicTacToe';
import Portfolio from './components/Portfolio/Portfolio';
import { Gamepad2, Briefcase } from 'lucide-react';

type GameMode = 'welcome' | 'single' | 'multi';
type AppMode = 'game' | 'portfolio';

const App: React.FC = () => {
  const [appMode, setAppMode] = useState<AppMode>('portfolio');
  const [gameMode, setGameMode] = useState<GameMode>('welcome');

  const handleStartGame = (mode: 'single' | 'multi') => {
    setGameMode(mode);
  };

  const handleBack = () => {
    setGameMode('welcome');
  };

  return (
    <div className="w-full min-h-screen relative">
      {/* Mode Switcher - Fixed at bottom right for non-overlapping */}
      {appMode === 'portfolio' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="fixed bottom-8 right-8 z-40 flex gap-3"
        >
          <button
            onClick={() => setAppMode('portfolio')}
            className="flex items-center gap-2 px-4 py-3 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/50 cursor-default"
          >
            <Briefcase size={18} />
            <span className="hidden sm:inline">Portfolio</span>
          </button>
          <button
            onClick={() => setAppMode('game')}
            className="flex items-center gap-2 px-4 py-3 rounded-lg font-semibold transition-all duration-300 bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 shadow-lg hover:shadow-blue-500/50"
          >
            <Gamepad2 size={18} />
            <span className="hidden sm:inline">Play Games</span>
          </button>
        </motion.div>
      )}

      {/* Game Mode Switcher */}
      {appMode === 'game' && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed top-4 left-4 z-50 flex gap-2"
        >
          <button
            onClick={() => setAppMode('portfolio')}
            className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700"
          >
            <Briefcase size={16} />
            <span className="hidden sm:inline">Back</span>
          </button>
        </motion.div>
      )}

      {/* Content */}
      {appMode === 'portfolio' && <Portfolio />}

      {appMode === 'game' && (
        <div className="w-full min-h-screen">
          {gameMode === 'welcome' && <Welcome onStartGame={handleStartGame} />}
          {gameMode === 'single' && <TicTacToe mode="single" onBack={handleBack} />}
          {gameMode === 'multi' && <TicTacToe mode="multi" onBack={handleBack} />}
        </div>
      )}
    </div>
  );
};

export default App;