import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerChildren } from '../../utils/animations';
import SectionTitle from '../ui/SectionTitle';
import Container from '../ui/Container';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineering Intern',
      company: 'BlueStock Fintech',
      period: 'Dec 1, 2024 – Present',
      responsibilities: [
        'Contributing to the development and optimization of financial tools and backend services.',
        'Working closely with senior engineers to fix bugs, improve code performance, and implement new features for financial applications.',
      ],
    },
    {
      title: 'Girl Summer of Code Contributor',
      company: 'Open Source',
      period: 'Summer 2024',
      responsibilities: [
        'Contributed to open-source projects by adding features, fixing bugs, and improving documentation.',
        'Collaborated with the open-source community to develop and enhance software solutions for social good.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-black text-white">
      <Container>
        <SectionTitle title="Experience" />
        <motion.div 
          className="space-y-8"
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-900 rounded-lg p-8 shadow-xl"
              variants={fadeInUp}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-2xl font-bold text-purple-400">{exp.title}</h3>
                <p className="text-gray-400">{exp.period}</p>
              </div>
              <p className="text-xl mb-4">{exp.company}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default Experience;