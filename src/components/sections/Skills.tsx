import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '../../utils/constants';
import { fadeInUp, staggerChildren } from '../../utils/animations';
import SectionTitle from '../ui/SectionTitle';
import Container from '../ui/Container';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-black text-white">
      <Container>
        <SectionTitle title="Technical Skills" />
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {SKILL_CATEGORIES.map((category, index) => (
            <motion.div
              key={category.title}
              className="bg-gray-900 rounded-lg p-6 shadow-xl transform hover:scale-105 transition-transform duration-300"
              variants={fadeInUp}
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
        </motion.div>
      </Container>
    </section>
  );
};

export default Skills;