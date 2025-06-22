import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  const highlights = [
    {
      icon: '💻',
      title: 'Full-Stack Development',
      description: 'End-to-end web solutions with modern frameworks'
    },
    {
      icon: '⚛️',
      title: 'React Expertise',
      description: 'Building dynamic and responsive user interfaces'
    },
    {
      icon: '☕',
      title: 'Java Backend',
      description: 'Robust server-side applications and APIs'
    },
    {
      icon: '🚀',
      title: 'Performance Focus',
      description: 'Optimized code for speed and scalability'
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Creating beautiful and intuitive user experiences'
    },
    {
      icon: '📱',
      title: 'Mobile-First',
      description: 'Responsive design across all devices'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-premium"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-container section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-6"></div>
          <p className="section-subtitle">
            Passionate developer dedicated to creating exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-6 gradient-text-secondary">My Journey</h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I'm a passionate full-stack developer with expertise in React and Java. 
                My journey in programming started with curiosity and has evolved into a commitment 
                to continuous learning and excellence in creating efficient, scalable, and 
                user-friendly applications.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community. 
                I believe in writing clean, maintainable code and following best practices.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com/SalihEfehanDemir"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="w-14 h-14 glass-card-dark flex items-center justify-center glow-effect group-hover:shadow-glow transition-all">
                  <svg className="w-7 h-7 text-gray-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
              </motion.a>
              
              <motion.a
                href="https://www.linkedin.com/in/salih-efehan-demir/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="w-14 h-14 glass-card-dark flex items-center justify-center glow-effect group-hover:shadow-glow transition-all">
                  <svg className="w-7 h-7 text-gray-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Profile Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-card p-8 text-center">
              <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-full flex items-center justify-center border-4 border-primary-500/30">
                <span className="text-6xl">👨‍💻</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 gradient-text">Salih Efehan Demir</h3>
              <p className="text-gray-400 mb-4">Full Stack Developer</p>
              <div className="flex justify-center space-x-2">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-sm text-gray-400">Available for work</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* What I Do Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4 gradient-text-secondary">What I Do</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              I specialize in creating comprehensive digital solutions that combine functionality with exceptional user experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="glass-card p-6 card-hover group"
              >
                <div className="text-4xl mb-4">{highlight.icon}</div>
                <h4 className="text-xl font-semibold mb-3 text-white group-hover:text-primary-400 transition-colors">
                  {highlight.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 