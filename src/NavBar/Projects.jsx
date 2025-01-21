import React from 'react';

export default function Projects() {
    return (
        <div id="projects" className="bg-gray-50 py-10 px-5 md:px-20">
            <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-800">My Projects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {/* todo list */}
                <div className="relative bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <img src={"todo2.png"} alt="To-Do List Application" className="w-full h-48 object-cover" />
                    <div className="p-5">
                        <h2 className="text-xl font-bold text-gray-800 mb-2">To-Do List Application</h2>
                        <p className="text-gray-700 text-sm mb-4">
                            A simple to-do list application to manage your daily tasks + local storage integration.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="text-xs font-medium bg-gray-200 text-gray-800 px-2 py-1 rounded-full">
                                HTML
                            </span>
                            <span className="text-xs font-medium bg-gray-200 text-gray-800 px-2 py-1 rounded-full">
                                CSS
                            </span>
                            <span className="text-xs font-medium bg-gray-200 text-gray-800 px-2 py-1 rounded-full">
                                JavaScript
                            </span>
                        </div>
                        <a
                            href="https://sountharyaks12.github.io/To-Do-List/"
                            target="_blank"
                            className="inline-block bg-[#5F4E4A] text-white text-sm px-4 py-2 rounded-lg hover:bg-[#b9b0a5] hover:text-black hover:font-medium"
                        >
                            View output
                        </a>
                    </div>
                </div>

                {/* Quiz App */}
                <div className="relative bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <img
                        src={'quiz.png'}
                        alt="Quiz Application"
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-5">
                        <h2 className="text-xl font-bold text-gray-800 mb-2">Quiz Application</h2>
                        <p className="text-gray-600 text-sm mb-4">
                            A quiz app with timer based progress tracking.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="text-xs font-medium bg-gray-200 text-gray-800 px-2 py-1 rounded-full">
                                HTML
                            </span>
                            <span className="text-xs font-medium bg-gray-200 text-gray-800 px-2 py-1 rounded-full">
                                CSS
                            </span>
                            <span className="text-xs font-medium bg-gray-200 text-gray-800 px-2 py-1 rounded-full">
                                JavaScript
                            </span>
                        </div>
                        <a
                            href="https://sountharyaks12.github.io/Quiz_App/"
                            target="_blank"
                            className="inline-block bg-[#5F4E4A] text-white text-sm px-4 py-2 rounded-lg hover:bg-[#b9b0a5] hover:text-black hover:font-medium"
                        >
                            View output
                        </a>
                    </div>
                </div>

                {/* Weather App*/}
                <div className="relative bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <img
                        src={"weather.png"}
                        alt="Weather Application"
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-5">
                        <h2 className="text-xl font-bold text-gray-800 mb-2">Weather Application</h2>
                        <p className="text-gray-600 text-sm mb-4">
                            A weather app that displays real time weather data based on location.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="text-xs font-medium bg-gray-200 text-gray-800 px-2 py-1 rounded-full">
                                API
                            </span>
                            <span className="text-xs font-medium bg-gray-200 text-gray-800 px-2 py-1 rounded-full">
                                JavaScript
                            </span>
                            <span className="text-xs font-medium bg-gray-200 text-gray-800 px-2 py-1 rounded-full">
                                CSS
                            </span>
                        </div>
                        <a
                            href="https://sountharyaks12.github.io/Weather_App/"
                            target="_blank"
                            className="inline-block text-center bg-[#5F4E4A] text-white text-sm px-4 py-2 rounded-lg hover:bg-[#b9b0a5] hover:text-black hover:font-medium"
                        >
                            View output
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
