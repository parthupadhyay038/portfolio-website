import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, ExternalLink, ArrowRight } from 'lucide-react';

interface GameLauncherProps {
  onSelectGame: (gameType: 'snake' | 'tictactoe') => void;
}

const GameLauncher: React.FC<GameLauncherProps> = ({ onSelectGame }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const games = [
    {
      id: 'tictactoe',
      title: '🎯 Tic Tac Toe',
      subtitle: 'Brain vs Bot',
      description: 'Challenge yourself against an unbeatable AI using the Minimax algorithm. Play single player or invite a friend for multiplayer mode.',
      gradient: 'from-blue-500 to-cyan-500',
      icon: '🎯',
      features: ['AI Opponent', 'Multiplayer Mode', 'Minimax Algorithm', 'Real-time Stats'],
      stats: '2 Game Modes',
    },
    {
      id: 'snake',
      title: '🐍 Snake Game',
      subtitle: 'Desktop Classic',
      description: 'Relive the classic! Built with Python & Pygame. Download and run locally on your machine for smooth, pixel-perfect gameplay.',
      gradient: 'from-green-500 to-emerald-500',
      icon: '🐍',
      features: ['Smooth Graphics', 'Progressive Difficulty', 'Score Tracking', 'Pause/Resume'],
      stats: 'Cross-Platform',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 w-full max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Gamepad2 size={40} className="text-blue-400" />
            <h1 className="text-5xl md:text-6xl font-black text-white">Game Launcher</h1>
          </div>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Choose your adventure. Test your skills against AI or challenge yourself with a classic game.
          </p>
        </motion.div>

        {/* Games Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {games.map((game) => (
            <motion.div
              key={game.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              onClick={() => onSelectGame(game.id as 'snake' | 'tictactoe')}
              className="group cursor-pointer relative rounded-2xl overflow-hidden border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:shadow-2xl"
            >
              {/* Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900" />

              {/* Hover gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${game.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />

              {/* Border glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${game.gradient} opacity-20 blur-lg`}
                />
              </div>

              {/* Content */}
              <div className="relative z-10 p-8">
                {/* Icon & Title */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-5xl mb-3">{game.icon}</p>
                    <h3 className="text-3xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                      {game.title}
                    </h3>
                    <p className="text-slate-400 font-semibold text-sm">{game.subtitle}</p>
                  </div>
                  <div className="text-3xl opacity-20 group-hover:opacity-50 transition-opacity">
                    <ArrowRight className="transform group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                  {game.description}
                </p>

                {/* Features */}
                <div className="mb-6 pb-6 border-b border-slate-700">
                  <h4 className="text-slate-400 text-xs font-semibold uppercase mb-3 tracking-wider">
                    Features
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {game.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-slate-300 text-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats & CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-xs font-semibold">{game.stats}</span>
                  <button
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${game.gradient} text-white font-semibold text-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
                  >
                    <span>Play</span>
                    <ExternalLink size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="p-6 rounded-lg bg-slate-800/50 border border-slate-700 text-center text-slate-400 text-sm"
        >
          <p>
            <strong className="text-slate-300">💡 Tip:</strong> Click on any game card to start playing!
          </p>
          <p className="mt-2 text-xs text-slate-500">
            All games are built with modern technologies showcasing different programming paradigms
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default GameLauncher;
