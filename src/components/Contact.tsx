import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">Contact</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-900 rounded-lg p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <a
                href="mailto:shifamaqsood7@gmail.com"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
              >
                <Mail size={20} />
                <span>shifamaqsood7@gmail.com</span>
              </a>
              <a
                href="tel:+919199409793"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
              >
                <Phone size={20} />
                <span>+91-919-940-9793</span>
              </a>
              <a
                href="https://linkedin.com/in/shifa-maqsood"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
                <span>shifa-maqsood</span>
              </a>
              <a
                href="https://github.com/your-github"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Achievements</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center space-x-2">
                <span className="text-purple-400">•</span>
                <span>Top 10 in Ambition 2024 at Bangalore Institute of Technology</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-purple-400">•</span>
                <span>Top 10 in CypherQuest at DSATM</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-purple-400">•</span>
                <span>Successfully completed Hacktoberfest with multiple contributions</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;