import React from 'react';
import { motion } from 'framer-motion'
import todo from '../assets/todo2.png';
import quiz from '../assets/quiz.png';
import weather from '../assets/weather.png';
import toys from '../assets/toys1.png'
import bootstrap from '../assets/bootstrap.png'

export default function Projects() {
    const projects = [
        {
            img: todo,
            title: "To-Do List Application",
            description: "A simple todo list application to manage your daily tasks + local storage integration",
            skills: 'HTML, CSS, JavaScript',
            view_output: 'https://sountharyaks12.github.io/To-Do-List/',
        },
        {
            img: quiz,
            title: "Quiz Application",
            description: "A quiz app with timer-based progress tracking",
            skills: 'HTML, CSS, JavaScript',
            view_output: 'https://sountharyaks12.github.io/Quiz_App/',
        },
        {
            img: weather,
            title: "Weather App",
            description: "A weather app that displays real-time weather data based on location",
            skills: 'HTML, CSS, JavaScript, API',
            view_output: 'https://sountharyaks12.github.io/Weather_App/',
        },
        {
            img: toys,
            title: "Toys App",
            description: "A app built with MongoDB, allowing users to easily add, delete, and view toy products.",
            skills: 'EJS,CSS,Javascript,Express.js,Mongoose',
            view_output: 'https://toys-mongodb-express-js-node-js.onrender.com/',
        },
        {
            img: bootstrap,
            title: "Bootstrap UI",
            description: "Build an amazing UI with Bootstrap",
            skills: 'Bootstrap',
            view_output: 'https://toys-mongodb-express-js-node-js.onrender.com/',
        },
    ];

    return (
        <div id="projects" className="bg-gray-200 flex py-10 px-5 md:px-20">
            <div>
                < motion.h2
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: [-150, 30, 0] }}
                    transition={{ duration: 1 }}
                    className="text-4xl font-extrabold text-center mt-10 text-gray-800">
                    Projects
                </motion.h2>

                <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{
                                opacity: 1, y: 20, transition: {
                                    duration: 0.8,
                                    delay: index * 0.2,
                                    ease: "easeInOut"
                                }
                            }}
                            className="w-full rounded-2xl bg-white overflow-hidden mt-16 shadow-lg flex flex-col"
                        >
                            <img
                                src={project.img}
                                className="w-full h-52 object-center hover:bg-clip-text- object-cover mb-4"
                                alt={project.title}
                            />
                            <div className="px-4 pb-6 flex-1">
                                <h2 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h2>
                                <p className="text-gray-600 text-sm mb-4">{project.description}</p>

                                <div className="flex flex-wrap gap-3 mb-4">
                                    {project.skills.split(",").map((skill, index) => (
                                        <span
                                            key={index}
                                            className="text-xs mb-4 font-medium bg-gray-200 text-gray-800 px-2 py-1 rounded-full"
                                        >
                                            {skill.trim()}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={project.view_output}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white bg-[#5F4E4A] px-4 py-2 rounded-md hover:bg-[#b9b0a5] hover:text-black hover:font-medium"
                                >
                                    View Output
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>


            </div>
        </div>
    );
}