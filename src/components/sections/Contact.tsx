import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../../utils/constants';
import { fadeInUp, staggerChildren } from '../../utils/animations';
import SectionTitle from '../ui/SectionTitle';
import Container from '../ui/Container';

const Contact = () => {
  const achievements = [
    'Top 10 in Ambition 2024 at Bangalore Institute of Technology',
    'Top 10 in CypherQuest at DSATM',
    'Successfully completed Hacktoberfest with multiple contributions'
  ];

  return (
    <section id="contact" className="py-20 bg-black text-white">
      <Container>
        <SectionTitle title="Contact" />
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div 
            className="bg-gray-900 rounded-lg p-8 shadow-xl"
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
              >
                <Mail size={20} />
                <span>{SOCIAL_LINKS.email}</span>
              </a>
              <a
                href={`tel:${SOCIAL_LINKS.phone}`}
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
              >
                <Phone size={20} />
                <span>{SOCIAL_LINKS.phone}</span>
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
                <span>shifa-maqsood</span>
              </a>
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
            </div>
          </motion.div>
          <motion.div 
            className="bg-gray-900 rounded-lg p-8 shadow-xl"
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-bold mb-6">Achievements</h3>
            <ul className="space-y-4 text-gray-300">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span className="text-purple-400">•</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Contact;