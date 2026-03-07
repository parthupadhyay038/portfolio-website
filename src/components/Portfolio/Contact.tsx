import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
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

  const contacts = [
    {
      icon: Github,
      label: 'GitHub',
      value: '@parthupadhyay038',
      link: 'https://github.com/parthupadhyay038',
      color: 'from-gray-400 to-gray-600',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Parth Upadhyay',
      link: 'https://linkedin.com/in/parth-upadhyay',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'parth@example.com',
      link: 'mailto:parth@example.com',
      color: 'from-red-400 to-pink-600',
    },
  ];

  return (
    <section id="contact" className="relative py-20 bg-slate-900 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-slate-400">
            Feel free to reach out for collaborations or opportunities
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {contacts.map((contact) => {
            const Icon = contact.icon;
            return (
              <motion.a
                key={contact.label}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative p-6 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-slate-600 transition-all duration-300 overflow-hidden"
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    backgroundImage: `linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1))`,
                  }}
                />

                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${contact.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-full h-full text-white" />
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300">
                    {contact.label}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4 group-hover:text-slate-300 transition-colors duration-300">
                    {contact.value}
                  </p>

                  <div className="flex items-center gap-2 text-blue-400 text-sm font-medium group-hover:gap-3 transition-all duration-300">
                    <span>Connect</span>
                    <ExternalLink size={16} />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center p-8 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Ready to collaborate?</h3>
          <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. 
            Let's talk about what we can build together!
          </p>
          <a
            href="mailto:parth@example.com"
            className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50"
          >
            Send me an email
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
