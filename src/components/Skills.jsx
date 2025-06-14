import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  const skills = [
    { name: 'Go', icon: '🐹' },
    { name: 'Python', icon: '🐍' },
    { name: 'C', icon: '🇨' },
    { name: 'JavaScript', icon: '📜' },
    { name: 'Java', icon: '🐱' },
    { name: 'PHP', icon: '🐘' },
    { name: 'HTML/CSS', icon: '🌐' },
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Supabase', icon: '⚡' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Vite', icon: '🚀' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

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
            Technologies I use to build modern web applications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.1,
                transition: { duration: 0.2 }
              }}
              className="group"
            >
              <div className="bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-blue-500 rounded-xl p-6 transition-all duration-300 h-full flex flex-col items-center justify-center">
                <div className="text-5xl mb-4">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                  {skill.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills; 