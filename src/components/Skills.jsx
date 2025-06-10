import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  const skills = [
    {
      name: 'React',
      icon: '⚛️',
      color: 'from-blue-400 to-cyan-400'
    },
    {
      name: 'Go',
      icon: '🐹',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      name: 'Tailwind CSS',
      icon: '🎨',
      color: 'from-teal-400 to-blue-500'
    },
    {
      name: 'Firebase',
      icon: '🔥',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      name: 'Supabase',
      icon: '⚡',
      color: 'from-green-400 to-teal-500'
    },
    {
      name: 'MongoDB',
      icon: '🍃',
      color: 'from-green-500 to-green-600'
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
        duration: 0.5
      }
    }
  }

  return (
    <section id="skills" className="py-20">
      <div className="max-container section-padding">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            My <span className="text-blue-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              <div className="bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-gray-600 rounded-xl p-6 transition-all duration-300 h-full">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`text-4xl mb-2 p-4 rounded-full bg-gradient-to-r ${skill.color} bg-opacity-20`}>
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {skill.name}
                  </h3>
                </div>
                
                {/* Hover effect overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional skills as text badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-semibold mb-6 text-gray-300">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['JavaScript', 'TypeScript', 'Node.js', 'Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'Git', 'REST APIs', 'GraphQL'].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full border border-gray-700 hover:border-blue-500 hover:text-blue-400 transition-colors text-sm"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 