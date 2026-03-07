import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, GitFork, Star, GitCommit } from 'lucide-react';

interface Stat {
  label: string;
  value: string;
  icon: React.ReactNode;
  color: string;
}

const GitHubActivity: React.FC = () => {
  const [stats] = useState<Stat[]>([
    {
      label: 'Public Repos',
      value: '12',
      icon: <Github size={24} />,
      color: 'from-blue-400 to-blue-600',
    },
    {
      label: 'Total Stars',
      value: '248',
      icon: <Star size={24} />,
      color: 'from-yellow-400 to-orange-600',
    },
    {
      label: 'Forks',
      value: '45',
      icon: <GitFork size={24} />,
      color: 'from-green-400 to-teal-600',
    },
    {
      label: 'Contributions',
      value: '1,200+',
      icon: <GitCommit size={24} />,
      color: 'from-purple-400 to-pink-600',
    },
  ]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const recentProjects = [
    {
      name: 'Portfolio Website',
      description: 'Modern interactive developer portfolio with React, TypeScript, and Tailwind CSS',
      language: 'TypeScript',
      stars: 5,
      forks: 2,
      updated: '2 days ago',
    },
    {
      name: 'Tic Tac Toe Game',
      description: 'Interactive game with AI bot using minimax algorithm',
      language: 'React',
      stars: 8,
      forks: 3,
      updated: '1 week ago',
    },
    {
      name: 'Task Management API',
      description: 'RESTful API built with Django REST Framework',
      language: 'Python',
      stars: 12,
      forks: 4,
      updated: '2 weeks ago',
    },
    {
      name: 'E-Commerce Platform',
      description: 'Full-stack e-commerce application with payment integration',
      language: 'Full Stack',
      stars: 15,
      forks: 6,
      updated: '3 weeks ago',
    },
  ];

  const activityData = [
    { day: 'Mon', count: 12 },
    { day: 'Tue', count: 8 },
    { day: 'Wed', count: 15 },
    { day: 'Thu', count: 10 },
    { day: 'Fri', count: 18 },
    { day: 'Sat', count: 6 },
    { day: 'Sun', count: 4 },
  ];

  const maxActivity = Math.max(...activityData.map(d => d.count));

  return (
    <section id="github" className="relative py-20 bg-slate-950 px-4">
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
            <Github size={32} className="text-slate-300" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">GitHub Activity</h2>
          </div>
          <p className="text-xl text-slate-400">
            Open source contributions and project achievements
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="p-6 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-slate-600 transition-all duration-300"
            >
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${stat.color} p-2 mb-4 text-white`}>
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Activity Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="p-6 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 mb-12"
        >
          <h3 className="text-xl font-bold text-white mb-6">Weekly Activity</h3>
          <div className="flex items-end gap-3 h-32">
            {activityData.map((data, index) => (
              <motion.div
                key={data.day}
                initial={{ height: 0 }}
                whileInView={{ height: `${(data.count / maxActivity) * 100}%` }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-1 rounded-t-lg bg-gradient-to-t from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 cursor-pointer relative group"
              >
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
                  {data.count} commits
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-between mt-4 text-xs text-slate-400">
            {activityData.map(data => (
              <span key={data.day}>{data.day}</span>
            ))}
          </div>
        </motion.div>

        {/* Recent Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-6">Recent & Popular Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {recentProjects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white hover:text-blue-400 transition-colors cursor-pointer">
                      {project.name}
                    </h4>
                    <p className="text-slate-400 text-xs mt-1">{project.language}</p>
                  </div>
                </div>
                <p className="text-slate-300 text-sm mb-4 line-clamp-2">{project.description}</p>
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>{project.updated}</span>
                  <div className="flex gap-3">
                    <div className="flex items-center gap-1">
                      <Star size={14} />
                      <span>{project.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork size={14} />
                      <span>{project.forks}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/parthupadhyay038"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/50 border border-gray-600 hover:border-gray-500"
          >
            <Github size={20} />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubActivity;
