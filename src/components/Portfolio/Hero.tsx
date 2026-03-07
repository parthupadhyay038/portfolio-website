import React from 'react';
import { motion } from 'framer-motion';
import { Github, FileText, Code2 } from 'lucide-react';
import InteractiveCanvas from '../InteractiveCanvas';

const Hero: React.FC = () => {
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
      transition: { duration: 0.8 },
    },
  };

  const scrollVariants = {
    animate: {
      y: [0, 10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: 'loop' as const,
      },
    },
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Interactive Canvas Background */}
      <div className="absolute inset-0 z-0">
        <InteractiveCanvas />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-1">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Animated badge */}
        <motion.div
          variants={itemVariants}
          className="inline-block mb-6"
        >
          <div className="px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm">
            <p className="text-blue-400 text-sm font-medium">Welcome to my portfolio</p>
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.div variants={itemVariants}>
          <h1 className="text-6xl md:text-7xl font-black text-white mb-6 tracking-tight">
            Hey, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Parth Upadhyay
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div variants={itemVariants}>
          <p className="text-2xl md:text-3xl text-slate-300 mb-6 font-light">
            Full Stack Developer
          </p>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12">
            Building beautiful, scalable applications with React, TypeScript, and Python.
            Passionate about clean code, great UX, and solving complex problems.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <a
            href="https://github.com/parthupadhyay038"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 rounded-lg font-semibold text-white overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300" />
            <div className="relative flex items-center gap-2">
              <Github size={20} />
              <span>GitHub</span>
            </div>
          </a>

          <a
            href="#projects"
            className="group relative px-8 py-4 rounded-lg font-semibold text-white overflow-hidden border border-slate-600 hover:border-slate-400 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-slate-800/50 group-hover:bg-slate-700/50 transition-all duration-300" />
            <div className="relative flex items-center gap-2">
              <Code2 size={20} />
              <span>View Projects</span>
            </div>
          </a>

          <a
            href="#contact"
            className="group relative px-8 py-4 rounded-lg font-semibold text-white overflow-hidden border border-slate-600 hover:border-slate-400 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-slate-800/50 group-hover:bg-slate-700/50 transition-all duration-300" />
            <div className="relative flex items-center gap-2">
              <FileText size={20} />
              <span>Get Resume</span>
            </div>
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center"
        >
          <motion.div variants={scrollVariants} animate="animate">
            <div className="flex flex-col items-center gap-2">
              <p className="text-slate-400 text-sm">Scroll to explore</p>
              <svg
                className="w-6 h-6 text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
