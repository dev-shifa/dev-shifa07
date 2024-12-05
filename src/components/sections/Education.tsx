import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';
import SectionTitle from '../ui/SectionTitle';
import Container from '../ui/Container';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-black text-white">
      <Container>
        <SectionTitle title="Education" />
        <motion.div 
          className="bg-gray-900 rounded-lg p-8 shadow-xl"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="border-l-4 border-purple-500 pl-4">
            <h3 className="text-2xl font-bold mb-2">B.E in Computer Science and Engineering</h3>
            <p className="text-xl text-purple-400 mb-2">RNS Institute Of Technology, Bangalore, India</p>
            <p className="text-gray-400 mb-2">2022 – 2026</p>
            <p className="text-gray-300">CGPA: 7.6</p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Education;