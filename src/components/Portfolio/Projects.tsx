import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X } from 'lucide-react';

interface Project {
  id: number;
  name: string;
  description: string;
  longDescription: string;
  technologies: string[];
  github: string;
  live: string;
  architecture: string;
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      name: 'Tic Tac Toe Game',
      description: 'Interactive game with bot AI and multiplayer modes',
      longDescription: 'A full-featured Tic Tac Toe game built with React and TypeScript featuring intelligent AI opponent using minimax algorithm, both single-player and multiplayer modes, and beautiful animations.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/parthupadhyay038/portfolio-website',
      live: 'http://localhost:3000',
      architecture: 'Frontend Only - React state management with custom AI logic',
    },
    {
      id: 2,
      name: 'Developer Portfolio',
      description: 'Modern interactive portfolio showcasing skills and projects',
      longDescription: 'A comprehensive developer portfolio built with React, TypeScript, and Framer Motion. Features interactive terminal, GitHub integration, and smooth animations.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/parthupadhyay038/portfolio-website',
      live: '#',
      architecture: 'Frontend: React + TypeScript | Hosting: Vercel',
    },
    {
      id: 3,
      name: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration',
      longDescription: 'Complete e-commerce platform with user authentication, product catalog, shopping cart, order management, and payment processing.',
      technologies: ['React', 'Redux', 'Python', 'Django', 'PostgreSQL'],
      github: '#',
      live: '#',
      architecture: 'React Frontend → Django REST API → PostgreSQL Database',
    },
    {
      id: 4,
      name: 'Task Management API',
      description: 'RESTful API for collaborative task management',
      longDescription: 'Robust Django REST API with user authentication, task CRUD operations, sharing capabilities, and real-time updates.',
      technologies: ['Python', 'Django', 'Django REST', 'PostgreSQL'],
      github: '#',
      live: '#',
      architecture: 'Django REST Framework → PostgreSQL | JWT Authentication',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="projects" className="relative py-20 bg-gradient-to-b from-slate-800 to-slate-900 px-4">
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
            Featured Projects
          </h2>
          <p className="text-xl text-slate-400">
            Showcasing my best work and technical expertise
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group relative h-full"
            >
              <div className="relative h-full p-6 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 overflow-hidden">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  {/* Project name and description */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {project.name}
                  </h3>
                  <p className="text-slate-400 mb-4">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-sm bg-blue-500/20 text-blue-400 border border-blue-500/30 hover:border-blue-400 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links and buttons */}
                  <div className="flex gap-3 mb-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-700/50 hover:bg-slate-600 text-white transition-colors duration-300"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    {project.live !== '#' && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 transition-colors duration-300"
                      >
                        <ExternalLink size={16} />
                        Live
                      </a>
                    )}
                  </div>

                  {/* Architecture button */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 text-slate-300 hover:text-white border border-slate-600 hover:border-blue-500/50 transition-all duration-300"
                  >
                    View Architecture
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Architecture Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 p-8 max-w-2xl w-full max-h-96 overflow-y-auto"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {selectedProject.name}
                  </h3>
                  <p className="text-slate-400">{selectedProject.longDescription}</p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="border-t border-slate-700 pt-6">
                <h4 className="text-lg font-semibold text-white mb-4">Architecture</h4>
                <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
                  <p className="text-slate-300 font-mono text-sm whitespace-pre-wrap">
                    {selectedProject.architecture}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
