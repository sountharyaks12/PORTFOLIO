import React from 'react';
import { easeIn, easeInOut, motion } from 'framer-motion'
import { FaGlobe } from 'react-icons/fa';
import { FaWandMagicSparkles } from 'react-icons/fa6';
import { HiPaintBrush } from 'react-icons/hi2';
import { IoServer, IoSettings } from 'react-icons/io5';

export default function Skills() {
  const skills = [
    {
      icon: <FaGlobe />,
      title: 'Web Development',
      description: 'Specialized in building web applications using technologies like:',
      items: ['HTML5', 'CSS3', 'JavaScript'],
      extraDescription: 'Familiar with frameworks and libraries such as:',
      extraItems: ['React.js', 'Node.js', 'Express.js'],
    },
    {
      icon: <HiPaintBrush />,
      title: 'Styling Tools',
      description: "Proficient in modern styling libraries and frameworks:",
      items: ['Bootstrap 5', 'Tailwind CSS', 'Material UI', 'React Bootstrap'],
    },
    {
      icon: <IoSettings />,
      title: 'Programming Language',
      description: 'Core technology',
      items: ['JavaScript'],
    },
    {
      icon: <IoServer />,
      title: 'Database Management',
      description: 'Knowledge of CRUD operations in',
      items: ['MongoDB'],
    },
    {
      icon: <IoSettings />,
      title: 'Tools & Platforms',
      description: 'Skilled in using tools and platforms like:',
      items: ['Git', 'GitHub'],
    },
    {
      icon: <FaWandMagicSparkles />,
      description: 'Additionally skilled in:',
      items: ['Responsive Web Design'],
    },
  ];

  return (
    <div
      id='skills' className="flex justify-center  py-10 bg-">
      <div className="w-full max-w-4xl  shadow-lg rounded-lg p-8">
        <motion.h1 initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: [-130, 30, 0] }}
          transition={{ duration: 1, ease: easeInOut }}
          className="text-4xl font-bold text-center text-gray-800">
          Skills
        </motion.h1>
        <h2 className="text-lg font-medium text-center text-gray-600 mt-2">MERN Full-Stack Development</h2>
        <motion.div initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: [100, 20, 0] }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 border border-gray-300 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 bg-gray-50"
            >
              <motion.h3 initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: [20, 0] }}
                transition={{
                  duration: .7, ease: easeInOut
                }}
                className="text-xl font-semibold text-gray-800 flex items-center">
                <span className="text-[#383638] text-2xl mr-3">{skill.icon}</span>
                {skill.title}
              </motion.h3>
              <motion.p initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: [20, 0] }}
                transition={{
                  duration: .7, ease: easeInOut
                }}
                className="text-gray-600 mt-3">{skill.description}
              </motion.p>
              <ul className="list-disc list-inside text-gray-700 mt-4">
                {skill.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              {skill.extraDescription && (
                <motion.div initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: [20, 0] }}
                  transition={{
                    delay: 0.2,
                    duration: .7, ease: easeInOut
                  }}  >
                  <p className="text-gray-600 mt-4">{skill.extraDescription}</p>
                  <ul className="list-disc list-inside text-gray-700 mt-2">
                    {skill.extraItems &&
                      skill.extraItems.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                  </ul>
                </motion.div>
              )}
            </div>
          ))}
        </motion.div>
      </div >
    </div >
  );
}
