import React from 'react';

export default function Projects() {
    const todoClick = () => {
        window.open('https://sountharyaks12.github.io/To-Do-List/');
    };

    const quizClick = () => {
        window.open('https://sountharyaks12.github.io/Quiz_App/');
    };

    const weatherClick = () => {
        window.open('https://sountharyaks12.github.io/Weather_App/');
    };

    return (
        <div id='projects' className='border-2 border-red-950 rounded-lg p-5 m-4 md:m-16'>
            <h1 className='text-2xl font-bold mt-10'>Projects</h1>
            <div className='flex flex-wrap justify-center'>
                {/* To-Do List Project */}
                <div className='flex justify-center mt-5 w-full sm:w-1/2 md:w-1/3'>
                    <div className='relative w-full h-96 perspective'>
                        <div className='flip-card-inner w-full h-full transform-style preserve-3d transition-transform duration-700'>
                            <div className='flip-card-front bg-white flex items-center justify-center text-xl font-semibold h-1/2 p-5'>
                                To-Do List Application
                            </div>
                            <div className='flip-card-back bg-gray-200 text-black absolute inset-0 transform rotate-y-180 p-5'>
                                <button className='bg-zinc-950 rounded-xl p-2 m-2 mt-5' onClick={todoClick}>View output</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Repeat similar structure for other projects */}
                {/* Quiz Application */}
                <div className='flex justify-center mt-5 w-full sm:w-1/2 md:w-1/3'>
                    <div className='relative w-full h-96 perspective'>
                        <div className='flip-card-inner w-full h-full transform-style preserve-3d transition-transform duration-700'>
                            <div className='flip-card-front bg-white flex items-center justify-center text-xl font-semibold h-1/2 p-5'>
                                Quiz Application
                            </div>
                            <div className='flip-card-back bg-gray-200 text-black absolute inset-0 transform rotate-y-180 p-5'>
                                <button className='bg-zinc-950 rounded-xl p-2 m-2 mt-5' onClick ={quizClick}>View output</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Weather Application */}
                <div className='flex justify-center mt-5 w-full sm:w-1/2 md:w-1/3'>
                    <div className='relative w-full h-96 perspective'>
                        <div className='flip-card-inner w-full h-full transform-style preserve-3d transition-transform duration-700'>
                            <div className='flip-card-front bg-white flex items-center justify-center text-xl font-semibold h-1/2 p-5'>
                                Weather Application
                            </div>
                            <div className='flip-card-back bg-gray-200 text-black absolute inset-0 transform rotate-y-180 p-5'>
                                <button className='bg-zinc-950 rounded-xl p-2 m-2 mt-5' onClick={weatherClick}>View output</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}