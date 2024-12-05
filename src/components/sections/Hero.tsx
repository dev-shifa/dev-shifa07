import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../../utils/constants';
import Container from '../ui/Container';

const Hero = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-black text-white pt-16"
    >
      <Container className="py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6">
              <img
                src="https://i.postimg.cc/BZCychT6/Whats-App-Image-2024-12-05-at-01-54-25-5d77a633.jpg"
                alt="Profile"
                className="rounded-full w-32 h-40 mx-auto border-4 border-purple-500"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              Shifa Maqsood
            </h1>
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Software Engineering Intern at BlueStock Fintech
          </motion.p>

          <motion.div
            className="flex justify-center space-x-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
            >
              <Mail size={24} />
            </a>
            <a
              href={`tel:${SOCIAL_LINKS.phone}`}
              className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
            >
              <Phone size={24} />
            </a>
          </motion.div>

          <motion.p
            className="text-lg text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Computer Science Engineering student at RNS Institute Of Technology,
            passionate about building innovative solutions and contributing to
            open-source projects.
          </motion.p>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
