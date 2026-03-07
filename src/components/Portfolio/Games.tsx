import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Code2, Play } from 'lucide-react';

interface GamesProps {
  onPlayGame?: (gameType: 'snake' | 'tictactoe') => void;
}

const Games: React.FC<GamesProps> = ({ onPlayGame }) => {
  const [selectedGame, setSelectedGame] = useState<'snake' | 'tictactoe' | null>(null);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
      title: '🐍 Snake Game',
      description: 'Classic snake gameplay built with Python & Pygame',
      features: [
        'Smooth 2D graphics and animations',
        'Progressive difficulty system',
        'Score tracking and statistics',
        'Pause/Resume functionality',
        'Beautiful color-coded UI',
      ],
      tech: ['Python', 'Pygame', 'Game Logic', 'Collision Detection'],
      location: 'games/snake_game.py',
      cta: 'Play Snake',
      color: 'from-green-400 to-emerald-600',
      icon: '🐍',
    },
    {
      title: '🎯 Tic Tac Toe',
      description: 'Interactive game with AI & multiplayer modes',
      features: [
        'Single player vs AI (Minimax algorithm)',
        'Local multiplayer mode',
        'Beautiful animations',
        'Win/Draw detection',
        'Smooth state management',
      ],
      tech: ['React', 'TypeScript', 'Algorithms', 'Game AI'],
      location: 'React App (Built-in)',
      cta: 'Play Now',
      color: 'from-blue-400 to-cyan-600',
      icon: '🎯',
    },
  ];

  return (
    <section id="games" className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-950 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Gamepad2 size={32} className="text-slate-300" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">Game Collection</h2>
          </div>
          <p className="text-xl text-slate-400">
            Interactive games showcasing different programming skills and technologies
          </p>
        </motion.div>

        {/* Games Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {games.map((game, index) => (
            <motion.div
              key={game.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative rounded-xl overflow-hidden border border-slate-700 hover:border-slate-600 transition-all duration-300"
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900" />
              
              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${game.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

              {/* Content */}
              <div className="relative z-10 p-8">
                {/* Icon */}
                <div className="text-5xl mb-4">{game.icon}</div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                  {game.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 mb-6 text-sm">
                  {game.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-slate-400 text-xs font-semibold uppercase mb-3">Features</h4>
                  <ul className="space-y-2">
                    {game.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-slate-300 text-sm">
                        <span className="text-blue-400 mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-slate-400 text-xs font-semibold uppercase mb-2">Built with</h4>
                  <div className="flex flex-wrap gap-2">
                    {game.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-slate-700/50 text-slate-300 text-xs font-medium border border-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Location */}
                <p className="text-slate-500 text-xs mb-6 bg-slate-800/50 p-3 rounded border border-slate-700">
                  📁 <span className="font-mono">{game.location}</span>
                </p>

                {/* CTA Button */}
                <a
                  href="#!"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedGame(index === 0 ? 'snake' : 'tictactoe');
                    onPlayGame?.(index === 0 ? 'snake' : 'tictactoe');
                  }}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r ${game.color} hover:shadow-lg transition-all duration-300 text-white font-semibold cursor-pointer`}
                >
                  <Play size={18} />
                  {game.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* How to Play Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="p-8 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700"
        >
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Code2 size={24} />
            How to Play
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Snake Game */}
            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-4">🐍 Snake Game</h4>
              <div className="space-y-3 text-slate-300 text-sm">
                <p className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">1.</span>
                  <span>Install Python: <code className="bg-slate-900 px-2 py-1 rounded text-xs">pip install pygame</code></span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">2.</span>
                  <span>Run the game: <code className="bg-slate-900 px-2 py-1 rounded text-xs">python games/snake_game.py</code></span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">3.</span>
                  <span>Or use launcher: <code className="bg-slate-900 px-2 py-1 rounded text-xs">games/launcher.bat</code></span>
                </p>
                <p className="pt-2 text-slate-400 text-xs">
                  Controls: WASD/Arrows • Space: Pause • R: Restart • Esc: Quit
                </p>
              </div>
            </div>

            {/* Tic Tac Toe */}
            <div>
              <h4 className="text-lg font-semibold text-cyan-400 mb-4">🎯 Tic Tac Toe</h4>
              <div className="space-y-3 text-slate-300 text-sm">
                <p className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">1.</span>
                  <span>Click "Tic Tac Toe" button in mode switcher</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">2.</span>
                  <span>Choose game mode: Single Player or Multiplayer</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">3.</span>
                  <span>Click cells to make your move</span>
                </p>
                <p className="pt-2 text-slate-400 text-xs">
                  AI uses Minimax algorithm • Nearly unbeatable!
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Source Code Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/parthupadhyay038/portfolio-website/tree/main/games"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-600 hover:border-blue-400 text-slate-300 hover:text-blue-400 transition-all duration-300"
          >
            <Code2 size={18} />
            View Source Code on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Games;
