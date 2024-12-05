import React from 'react';
import { Github } from 'lucide-react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  image: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const cardVariants = {
    initial: { 
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    animate: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    initial: { scale: 1.2, opacity: 0 },
    animate: { 
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, delay: index * 0.1 }
    }
  };

  const contentVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: (index * 0.1) + 0.2 }
    }
  };

  const techBadgeVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { 
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 }
    },
    hover: { 
      scale: 1.1,
      backgroundColor: '#7C3AED',
      color: '#ffffff'
    }
  };

  return (
    <motion.div
      className="bg-gray-900 rounded-lg overflow-hidden shadow-xl"
      variants={cardVariants}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
    >
      <motion.div
        className="relative h-48 overflow-hidden"
        variants={imageVariants}
      >
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
      </motion.div>

      <motion.div 
        className="p-6"
        variants={contentVariants}
      >
        <div className="flex justify-between items-start mb-4">
          <motion.h3 
            className="text-2xl font-bold text-purple-400"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            {project.title}
          </motion.h3>
          <motion.a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <Github size={24} />
          </motion.a>
        </div>
        <motion.p 
          className="text-gray-300 mb-4"
          variants={contentVariants}
        >
          {project.description}
        </motion.p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, idx) => (
            <motion.span
              key={idx}
              className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm cursor-pointer"
              variants={techBadgeVariants}
              whileHover="hover"
              custom={idx}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;