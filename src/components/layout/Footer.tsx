import React from 'react';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { NAV_ITEMS } from '../../utils/constants';
import Container from '../ui/Container';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Shifa Maqsood</h3>
            <p className="text-gray-400">
              Software Engineering Intern & Full Stack Developer
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Location</h3>
            <p className="text-gray-400">Bangalore, India</p>
          </div>
        </div>
        <motion.div 
          className="text-center mt-8 pt-8 border-t border-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="flex items-center justify-center text-gray-400">
            Made with <Heart className="mx-2 text-red-500" size={16} /> by Shifa Maqsood
          </p>
        </motion.div>
      </Container>
    </footer>
  );
};

export default Footer;