import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 90, icon: '⚛️', color: 'from-blue-400 to-blue-600' },
        { name: 'JavaScript', level: 85, icon: '📜', color: 'from-yellow-400 to-yellow-600' },
        { name: 'HTML/CSS', level: 88, icon: '🌐', color: 'from-orange-400 to-orange-600' },
        { name: 'Tailwind CSS', level: 85, icon: '💨', color: 'from-teal-400 to-teal-600' }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Java', level: 82, icon: '☕', color: 'from-red-400 to-red-600' },
        { name: 'Node.js', level: 80, icon: '🟢', color: 'from-green-400 to-green-600' },
        { name: 'Python', level: 75, icon: '🐍', color: 'from-blue-400 to-green-500' },
        { name: 'Go', level: 70, icon: '🐹', color: 'from-cyan-400 to-cyan-600' }
      ]
    },
    {
      title: 'Database & Tools',
      skills: [
        { name: 'MongoDB', level: 80, icon: '🍃', color: 'from-green-400 to-green-600' },
        { name: 'Supabase', level: 85, icon: '⚡', color: 'from-purple-400 to-purple-600' },
        { name: 'Git', level: 88, icon: '📋', color: 'from-gray-400 to-gray-600' },
        { name: 'Vite', level: 82, icon: '🚀', color: 'from-purple-400 to-pink-600' }
      ]
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

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-premium"></div>
      <div className="absolute top-40 left-10 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-container section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-6"></div>
          <p className="section-subtitle">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={categoryVariants}
              className="space-y-6"
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2 gradient-text-secondary">
                  {category.title}
                </h3>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    variants={skillVariants}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="glass-card p-6 card-hover group relative overflow-hidden"
                  >
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                    
                    <div className="relative z-10">
                      {/* Icon */}
                      <div className="text-4xl mb-4 text-center floating-element">
                        {skill.icon}
                      </div>
                      
                      {/* Skill name */}
                      <h4 className="text-lg font-semibold text-center mb-4 text-white group-hover:text-primary-400 transition-colors">
                        {skill.name}
                      </h4>
                      
                      {/* Progress bar */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Proficiency</span>
                          <span className="text-primary-400 font-medium">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-dark-700 rounded-full h-2 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1.5, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                          >
                            <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="glass-card p-8 text-center">
            <h3 className="text-xl font-semibold mb-4 gradient-text">Always Learning</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              The tech world evolves rapidly, and I'm committed to continuous learning. 
              Currently exploring new frameworks, design patterns, and best practices to stay ahead of the curve.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['TypeScript', 'Next.js', 'GraphQL', 'Docker', 'AWS', 'Testing'].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full text-primary-300 text-sm font-medium backdrop-blur-sm hover:bg-primary-500/20 transition-colors"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 