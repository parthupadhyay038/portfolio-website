import React, { useState } from 'react';
import Welcome from './components/Welcome';
import TicTacToe from './components/TicTacToe';

type GameMode = 'welcome' | 'single' | 'multi';

const App: React.FC = () => {
  const [gameMode, setGameMode] = useState<GameMode>('welcome');

  const handleStartGame = (mode: 'single' | 'multi') => {
    setGameMode(mode);
  };

  const handleBack = () => {
    setGameMode('welcome');
  };

  return (
    <div className="w-full min-h-screen">
      {gameMode === 'welcome' && <Welcome onStartGame={handleStartGame} />}
      {gameMode === 'single' && <TicTacToe mode="single" onBack={handleBack} />}
      {gameMode === 'multi' && <TicTacToe mode="multi" onBack={handleBack} />}
    </div>
  );
};

export default App;