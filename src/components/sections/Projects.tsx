import React from 'react';
import { motion } from 'framer-motion';
import { staggerChildren } from '../../utils/animations';
import SectionTitle from '../ui/SectionTitle';
import Container from '../ui/Container';
import ProjectCard from '../ui/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'EduSphere',
      description: 'Placement preparation app providing comprehensive study materials, including courses, assignments, source code, and more.',
      technologies: ['Next.js', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'Redis'],
      githubLink: '#',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400'
    },
    {
      title: 'Social Media Blockchain App',
      description: 'Decentralized application (Dapp) for music artists and audiences to interact securely and transparently.',
      technologies: ['MERN Stack', 'Blockchain', 'Ethereum', 'Smart Contracts'],
      githubLink: '#',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=400'
    },
    {
      title: 'DigiChain-Ventures',
      description: 'Crypto app offering an intuitive interface for real-time cryptocurrency prices, search, and portfolio management.',
      technologies: ['React', 'APIs', 'State Management'],
      githubLink: '#',
      image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=400'
    },
    {
      title: 'Flavor-Fusion-App',
      description: 'Responsive recipe discovery and sharing platform with advanced features.',
      technologies: ['React', 'Redux', 'Material-UI', 'Vercel'],
      githubLink: '#',
      image: 'https://images.unsplash.com/photo-1495195134817-aeb325a55b65?auto=format&fit=crop&q=80&w=400'
    },
  ];

  return (
    <section id="projects" className="py-20 bg-black text-white">
      <Container>
        <SectionTitle title="Projects" />
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default Projects;