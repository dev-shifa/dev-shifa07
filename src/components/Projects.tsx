import React from 'react';
import { Github } from 'lucide-react';
import { motion } from 'framer-motion';

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-purple-400">{project.title}</h3>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Github size={24} />
                  </a>
                </div>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;