import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Layers, Code2 } from 'lucide-react';
import TechStackVisualization from '../TechStackVisualization';

const CanvasVisualizations: React.FC = () => {
  const [selectedViz, setSelectedViz] = useState<'tech' | 'particles'>('tech');

  const visualizations = [
    {
      id: 'tech',
      title: '🎨 Tech Stack Network',
      description: 'Interactive visualization of frontend, backend, and tools ecosystem',
      icon: Code2,
      features: ['Node physics', 'Category grouping', 'Click interactions'],
    },
    {
      id: 'particles',
      title: '✨ Particle System',
      description: 'Dynamic particle effects responding to mouse movement',
      icon: Zap,
      features: ['Real-time tracking', 'Physics simulation', 'Smooth trails'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  return (
    <section id="visualizations" className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900 px-4">
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
            <Layers size={32} className="text-blue-400" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">Interactive Canvas</h2>
          </div>
          <p className="text-xl text-slate-400">
            Explore dynamic 2D visualizations powered by HTML5 Canvas
          </p>
        </motion.div>

        {/* Visualization Selector */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center gap-4 mb-12"
        >
          {visualizations.map((viz) => (
            <motion.button
              key={viz.id}
              variants={itemVariants}
              onClick={() => setSelectedViz(viz.id as 'tech' | 'particles')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                selectedViz === viz.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/50'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
              }`}
            >
              <viz.icon size={18} />
              <span className="hidden sm:inline">{viz.title.split(' ')[1]}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Main Visualization Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="w-full h-96 rounded-2xl overflow-hidden border border-slate-700 bg-slate-900/50 shadow-2xl">
            {selectedViz === 'tech' && <TechStackVisualization />}
            {selectedViz === 'particles' && (
              <div className="w-full h-full bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 flex items-center justify-center text-slate-400">
                <div className="text-center">
                  <p className="text-lg mb-2">Particle system visualization</p>
                  <p className="text-sm">Move your mouse and click to see the effect</p>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Info Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {visualizations.map((viz) => (
            <motion.div
              key={viz.id}
              variants={itemVariants}
              className="p-6 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-slate-600 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-blue-500/20">
                  <viz.icon className="text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{viz.title}</h3>
                  <p className="text-slate-400 text-sm">{viz.description}</p>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-sm text-slate-500 font-semibold">Technologies Used</p>
                <div className="flex flex-wrap gap-2">
                  {viz.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 rounded-full bg-slate-700/50 text-slate-300 text-xs border border-slate-600"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Technical Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 p-8 rounded-xl bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-slate-700"
        >
          <h3 className="text-lg font-bold text-white mb-4">Technical Implementation</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-400">
            <div>
              <p className="text-blue-400 font-semibold mb-2">🎯 Canvas API</p>
              <p>HTML5 2D Canvas rendering with requestAnimationFrame for 60+ FPS</p>
            </div>
            <div>
              <p className="text-purple-400 font-semibold mb-2">⚡ Performance</p>
              <p>Optimized collision detection and physics simulation</p>
            </div>
            <div>
              <p className="text-pink-400 font-semibold mb-2">🖱️ Interactivity</p>
              <p>Real-time mouse tracking and click event handling</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CanvasVisualizations;
