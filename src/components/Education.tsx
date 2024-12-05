import React from 'react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>
        <div className="bg-gray-900 rounded-lg p-8 shadow-xl">
          <div className="border-l-4 border-purple-500 pl-4">
            <h3 className="text-2xl font-bold mb-2">B.E in Computer Science and Engineering</h3>
            <p className="text-xl text-purple-400 mb-2">RNS Institute Of Technology, Bangalore, India</p>
            <p className="text-gray-400 mb-2">2022 – 2026</p>
            <p className="text-gray-300">CGPA: 7.6</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;