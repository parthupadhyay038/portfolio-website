import React from 'react';
import { motion } from 'framer-motion';

interface TechItemProps {
  name: string;
  icon: string;
  category: string;
}

const TechStack: React.FC = () => {
  const techStacks = {
    Frontend: [
      { name: 'React', icon: '⚛️', category: 'Frontend' },
      { name: 'TypeScript', icon: '📘', category: 'Frontend' },
      { name: 'Redux', icon: '🔄', category: 'Frontend' },
      { name: 'Tailwind CSS', icon: '🎨', category: 'Frontend' },
    ],
    Backend: [
      { name: 'Python', icon: '🐍', category: 'Backend' },
      { name: 'Django', icon: '🎯', category: 'Backend' },
      { name: 'Django REST', icon: '🔌', category: 'Backend' },
      { name: 'PostgreSQL', icon: '🐘', category: 'Backend' },
    ],
    Tools: [
      { name: 'Git', icon: '📦', category: 'Tools' },
      { name: 'GitHub', icon: '🐙', category: 'Tools' },
      { name: 'Vercel', icon: '▲', category: 'Tools' },
      { name: 'Docker', icon: '🐳', category: 'Tools' },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const TechCard: React.FC<TechItemProps> = ({ name, icon }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -5, scale: 1.05 }}
      className="group relative p-6 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 overflow-hidden"
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10 text-center">
        <div className="text-4xl mb-3">{icon}</div>
        <p className="font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
          {name}
        </p>
      </div>

      {/* Bottom accent line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
        style={{ originX: 0 }}
      />
    </motion.div>
  );

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
            Tech Stack
          </h2>
          <p className="text-xl text-slate-400">
            Technologies I work with daily
          </p>
        </motion.div>

        {/* Tech categories */}
        <div className="space-y-12">
          {Object.entries(techStacks).map((category, index) => (
            <motion.div
              key={category[0]}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="h-1 w-8 bg-gradient-to-r from-blue-500 to-purple-500" />
                {category[0]}
              </h3>

              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {category[1].map((tech: TechItemProps) => (
                  <TechCard
                    key={tech.name}
                    name={tech.name}
                    icon={tech.icon}
                    category={tech.category}
                  />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
