import React from 'react';
import '../index.css'

export default function About() {
    return (
        <div id='about' className='min-h-screen text-center w-full rounded-lg bg-white  mt-40 md:mt-10'>
            <div className='p-8'>
                <h2 className='text-3xl text-gray-900 font-bold mt-8'>About Me</h2>

                <ul className='list-image-custom m-6 text-start space-y-4'>
                    <li className='mt-5 text-lg text-gray-700 '>My journey in tech began with a fascination for how the web works, and it has grown into a full-blown passion for building scalable, interactive, and aesthetically pleasing solutions.</li>
                    <li className='text-lg text-gray-700'>With a focus on crafting impactful solutions, I enjoy turning complex problems into simple, user-friendly designs. During my internship, I honed my ability to develop and deploy full-stack projects.</li>
                </ul>
            </div>
        </div>
    );
}
