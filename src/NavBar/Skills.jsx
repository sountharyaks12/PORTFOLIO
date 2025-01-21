import React from 'react';
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
    <div id='skills' className="flex justify-center  py-10 bg-">
      <div className="w-full max-w-4xl  shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800">Skills</h1>
        <h2 className="text-lg font-medium text-center text-gray-600 mt-2">MERN Full-Stack Development</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 border border-gray-300 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 bg-gray-50"
            >
              <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                <span className="text-[#383638] text-2xl mr-3">{skill.icon}</span>
                {skill.title}
              </h3>
              <p className="text-gray-600 mt-3">{skill.description}</p>
              <ul className="list-disc list-inside text-gray-700 mt-4">
                {skill.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              {skill.extraDescription && (
                <>
                  <p className="text-gray-600 mt-4">{skill.extraDescription}</p>
                  <ul className="list-disc list-inside text-gray-700 mt-2">
                    {skill.extraItems &&
                      skill.extraItems.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                  </ul>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
