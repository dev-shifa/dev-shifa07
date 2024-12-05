import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Java', 'Python', 'C++', 'JavaScript', 'HTML'],
      icon: '👨‍💻'
    },
    {
      title: 'Database and Tools',
      skills: ['MongoDB', 'PostgreSQL', 'Git', 'GitHub', 'Redis', 'Cloudinary', 'Socket.io'],
      icon: '🛠️'
    },
    {
      title: 'Frameworks and Libraries',
      skills: ['Node.js', 'Material-UI', 'Bootstrap', 'Express.js', 'RESTful API', 'React', 'Redux', 'Tailwind CSS'],
      icon: '📚'
    },
  ];

  return (
    <section id="skills" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Technical Skills
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="bg-gray-900 rounded-lg p-6 shadow-xl transform hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-2">{category.icon}</span>
                <h3 className="text-xl font-bold text-purple-400">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-purple-600 hover:text-white transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;