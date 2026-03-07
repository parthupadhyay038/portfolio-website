import React from 'react';
import { motion } from 'framer-motion';

const Architecture: React.FC = () => {
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  const arrowVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: 'loop' as const,
      },
    },
  };

  return (
    <section className="relative py-20 bg-slate-900 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            System Architecture
          </h2>
          <p className="text-xl text-slate-400">
            How my full-stack projects are structured
          </p>
        </motion.div>

        {/* Architecture Diagram */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Desktop view */}
          <div className="hidden md:block">
            <div className="flex justify-between items-center gap-8">
              {/* Frontend */}
              <motion.div
                variants={itemVariants}
                className="flex-1 group"
              >
                <div className="relative p-6 rounded-xl bg-gradient-to-br from-blue-900/30 to-blue-800/20 border-2 border-blue-500 hover:border-blue-400 transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-blue-300 mb-4">Frontend</h3>
                    <ul className="space-y-2 text-slate-300">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full" />
                        React (UI Layer)
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full" />
                        TypeScript (Type Safety)
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full" />
                        Redux (State Management)
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full" />
                        Tailwind CSS (Styling)
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Arrow 1 */}
              <motion.div
                variants={itemVariants}
                className="flex-shrink-0"
              >
                <svg className="w-16 h-16" viewBox="0 0 100 100">
                  <defs>
                    <linearGradient id="arrowGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                  <motion.line
                    x1="10"
                    y1="50"
                    x2="80"
                    y2="50"
                    stroke="url(#arrowGradient1)"
                    strokeWidth="3"
                    variants={arrowVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  />
                  <polygon points="85,50 75,45 75,55" fill="#8b5cf6" />
                </svg>
              </motion.div>

              {/* API Layer */}
              <motion.div
                variants={itemVariants}
                className="flex-1 group"
              >
                <div className="relative p-6 rounded-xl bg-gradient-to-br from-purple-900/30 to-purple-800/20 border-2 border-purple-500 hover:border-purple-400 transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-purple-300 mb-4">API Layer</h3>
                    <ul className="space-y-2 text-slate-300">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full" />
                        Django REST Framework
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full" />
                        RESTful Endpoints
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full" />
                        JWT Authentication
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full" />
                        Request Validation
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Arrow 2 */}
              <motion.div
                variants={itemVariants}
                className="flex-shrink-0"
              >
                <svg className="w-16 h-16" viewBox="0 0 100 100">
                  <defs>
                    <linearGradient id="arrowGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                  <motion.line
                    x1="10"
                    y1="50"
                    x2="80"
                    y2="50"
                    stroke="url(#arrowGradient2)"
                    strokeWidth="3"
                    variants={arrowVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  />
                  <polygon points="85,50 75,45 75,55" fill="#ec4899" />
                </svg>
              </motion.div>

              {/* Database */}
              <motion.div
                variants={itemVariants}
                className="flex-1 group"
              >
                <div className="relative p-6 rounded-xl bg-gradient-to-br from-pink-900/30 to-pink-800/20 border-2 border-pink-500 hover:border-pink-400 transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-pink-300 mb-4">Database</h3>
                    <ul className="space-y-2 text-slate-300">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-pink-400 rounded-full" />
                        PostgreSQL
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-pink-400 rounded-full" />
                        Data Persistence
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-pink-400 rounded-full" />
                        ACID Compliance
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-pink-400 rounded-full" />
                        Query Optimization
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Mobile view */}
          <div className="md:hidden space-y-4">
            {[
              {
                title: 'Frontend',
                items: ['React (UI Layer)', 'TypeScript', 'Redux', 'Tailwind CSS'],
                color: 'from-blue-900/30 to-blue-800/20 border-blue-500',
              },
              {
                title: 'API Layer',
                items: ['Django REST Framework', 'RESTful Endpoints', 'JWT Auth', 'Validation'],
                color: 'from-purple-900/30 to-purple-800/20 border-purple-500',
              },
              {
                title: 'Database',
                items: ['PostgreSQL', 'Data Persistence', 'ACID Compliance', 'Optimization'],
                color: 'from-pink-900/30 to-pink-800/20 border-pink-500',
              },
            ].map((section, index) => (
              <motion.div
                key={section.title}
                variants={itemVariants}
                className={`relative p-6 rounded-xl bg-gradient-to-br ${section.color} border-2 overflow-hidden`}
              >
                <h3 className="text-xl font-bold text-white mb-3">{section.title}</h3>
                <ul className="space-y-2 text-slate-300">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
                {index < 2 && (
                  <motion.div
                    className="mt-4 text-center text-slate-400"
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ↓
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Data Flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 p-6 rounded-xl bg-slate-800/50 border border-slate-700"
        >
          <h3 className="text-xl font-semibold text-white mb-4">Data Flow</h3>
          <div className="space-y-3 text-slate-300">
            <p>
              <span className="text-blue-400 font-semibold">1. Frontend:</span> Users interact with React components
            </p>
            <p>
              <span className="text-purple-400 font-semibold">2. API Call:</span> Redux dispatches actions → HTTP request to Django
            </p>
            <p>
              <span className="text-pink-400 font-semibold">3. Backend:</span> Django validates and processes the request
            </p>
            <p>
              <span className="text-cyan-400 font-semibold">4. Database:</span> PostgreSQL executes SQL queries and returns data
            </p>
            <p>
              <span className="text-emerald-400 font-semibold">5. Response:</span> Data flows back, Redux updates state, UI re-renders
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Architecture;
