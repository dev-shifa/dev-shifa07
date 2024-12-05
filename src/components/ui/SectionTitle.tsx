import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <motion.h2 
      className="text-4xl font-bold mb-12 text-center"
      {...fadeInUp}
    >
      {title}
    </motion.h2>
  );
};

export default SectionTitle;