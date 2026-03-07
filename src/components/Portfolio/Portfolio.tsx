import React from 'react';
import { motion } from 'framer-motion';
import Hero from './Hero';
import TechStack from './TechStack';
import Projects from './Projects';
import Architecture from './Architecture';
import Terminal from './Terminal';
import GitHubActivity from './GitHubActivity';
import Contact from './Contact';

const Portfolio: React.FC = () => {
  return (
    <div className="bg-slate-950 min-h-screen">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800"
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="#hero" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
            Parth
          </a>
          <div className="hidden md:flex gap-8">
            {['hero', 'techstack', 'projects', 'architecture', 'terminal', 'github', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-slate-300 hover:text-white transition-colors capitalize font-medium text-sm"
              >
                {item === 'techstack' ? 'Tech Stack' : item === 'github' ? 'GitHub' : item}
              </a>
            ))}
          </div>
          <a
            href="https://github.com/parthupadhyay038"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold text-sm transition-all hover:shadow-lg"
          >
            GitHub
          </a>
        </div>
      </motion.nav>

      {/* Main Content */}
      <main className="pt-16">
        <Hero />
        <TechStack />
        <Projects />
        <Architecture />
        <Terminal />
        <GitHubActivity />
        <Contact />
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-slate-900 border-t border-slate-800 py-8 px-4"
      >
        <div className="max-w-6xl mx-auto text-center text-slate-400 text-sm">
          <p className="mb-4">
            Built with <span className="text-red-500">❤</span> using React, TypeScript, Tailwind CSS, and Framer Motion
          </p>
          <p>
            © {new Date().getFullYear()} Parth Upadhyay. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center gap-6">
            <a href="https://github.com/parthupadhyay038" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              GitHub
            </a>
            <a href="https://linkedin.com/in/parth-upadhyay" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="mailto:parth@example.com" className="hover:text-white transition-colors">
              Email
            </a>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Portfolio;
