import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TerminalLine {
  type: 'input' | 'output';
  content: string;
}

const Terminal: React.FC = () => {
  const [lines, setLines] = useState<TerminalLine[]>([
    {
      type: 'output',
      content: 'Welcome to Parth\'s Developer Terminal',
    },
    {
      type: 'output',
      content: 'Type "help" to see available commands',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);

  const commands: Record<string, string> = {
    help: `Available commands:
  help          - Show this help message
  projects      - List my projects
  skills        - Display tech stack
  about         - Learn about me
  contact       - Get contact information
  clear         - Clear terminal`,
    projects: `Featured Projects:
  1. Tic Tac Toe Game - Interactive game with AI bot
  2. Developer Portfolio - This portfolio website
  3. E-Commerce Platform - Full-stack solution
  4. Task Management API - Django REST API`,
    skills: `Technical Skills:
  Frontend: React, TypeScript, Redux, Tailwind CSS, Framer Motion
  Backend: Python, Django, Django REST Framework, PostgreSQL
  Tools: Git, GitHub, Vercel, Docker
  Databases: PostgreSQL, Redis`,
    about: `Hello! I'm Parth Upadhyay, a Full Stack Developer with expertise in:
  • Building scalable React applications with TypeScript
  • Creating robust REST APIs with Django
  • Designing responsive UIs with Tailwind CSS
  • Implementing smooth animations with Framer Motion
  
  Passionate about clean code, great UX, and solving complex problems.`,
    contact: `Get in touch:
  Email: parth@example.com
  GitHub: github.com/parthupadhyay038
  LinkedIn: linkedin.com/in/parth-upadhyay
  Portfolio: portfolio-website.vercel.app`,
  };

  const handleCommand = async (cmd: string) => {
    if (!cmd.trim()) return;

    setLines((prev) => [...prev, { type: 'input', content: `$ ${cmd}` }]);
    setInput('');
    setIsLoading(true);

    // Simulate command processing
    setTimeout(() => {
      const command = cmd.toLowerCase().trim();

      if (command === 'clear') {
        setLines([]);
      } else if (commands[command]) {
        setLines((prev) => [
          ...prev,
          {
            type: 'output',
            content: commands[command],
          },
        ]);
      } else {
        setLines((prev) => [
          ...prev,
          {
            type: 'output',
            content: `Command not found: ${cmd}. Type "help" for available commands.`,
          },
        ]);
      }

      setIsLoading(false);
    }, 300);
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-slate-800 to-slate-900 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Interactive Terminal
          </h2>
          <p className="text-xl text-slate-400">
            Explore my skills and projects. Try typing "help"!
          </p>
        </motion.div>

        {/* Terminal */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative rounded-lg overflow-hidden border-2 border-cyan-500/50 bg-slate-950 shadow-2xl"
        >
          {/* Terminal header */}
          <div className="bg-slate-900 border-b border-slate-700 px-4 py-3 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-4 text-slate-400 text-sm font-mono">terminal</span>
          </div>

          {/* Terminal content */}
          <div
            ref={terminalRef}
            className="h-96 overflow-y-auto p-6 space-y-2 font-mono text-sm"
          >
            {lines.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                {line.type === 'input' ? (
                  <div className="text-green-400">{line.content}</div>
                ) : (
                  <div className="text-slate-300 whitespace-pre-wrap">
                    {line.content}
                  </div>
                )}
              </motion.div>
            ))}

            {isLoading && (
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-slate-400"
              >
                Loading...
              </motion.div>
            )}
          </div>

          {/* Terminal input */}
          <div className="border-t border-slate-700 bg-slate-900 px-6 py-3 flex items-center gap-2">
            <span className="text-green-400 font-bold">$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleCommand(input);
                }
              }}
              placeholder="Type a command..."
              className="flex-1 bg-transparent text-white outline-none placeholder-slate-500 font-mono"
              autoFocus
              disabled={isLoading}
            />
          </div>
        </motion.div>

        {/* Quick commands */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-wrap gap-3 justify-center"
        >
          {['help', 'about', 'skills', 'projects', 'contact'].map(
            (cmd) => (
              <button
                key={cmd}
                onClick={() => handleCommand(cmd)}
                disabled={isLoading}
                className="px-4 py-2 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 border border-cyan-500/50 hover:border-cyan-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-mono text-sm"
              >
                {cmd}
              </button>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Terminal;
