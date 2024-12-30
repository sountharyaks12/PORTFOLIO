// //NavBar/About
// import React from 'react'

// export default function About() {
//     return (
//         <div id='about' className='h-screen text-center m-16 '>
//             <div className='border-2 border-red-950 rounded-lg p-5 shadow-lg'>
//                 <h2 className='text-3xl mt-10'>About Me</h2>
//                 <ul className='list-disc m-6 text-start'>
//                     <li className='mt-10'>My journey in tech began with a fascination for how the web works, and it has grown into a full-blown passion for building scalable, interactive, and aesthetically pleasing solutions.</li>
//                     <li>With a focus on crafting impactful solutions, I enjoy turning complex problems into simple, user-friendly designs. During my internship, I honed my ability to develop and deploy full-stack projects</li>
//                 </ul>
//             </div>
//         </div>
//     )
// }
//NavBar/About.jsx
import React from 'react';

export default function About() {
    return (
        <div id='about' className='min-h-screen text-center m-4 md:m-16'>
            <div className='border-2 border-red-950 rounded-lg p-5 shadow-lg'>
                <h2 className='text-3xl mt-10'>About Me</h2>
                <ul className='list-disc m-6 text-start'>
                    <li className='mt-10'>My journey in tech began with a fascination for how the web works, and it has grown into a full-blown passion for building scalable, interactive, and aesthetically pleasing solutions.</li>
                    <li>With a focus on crafting impactful solutions, I enjoy turning complex problems into simple, user-friendly designs. During my internship, I honed my ability to develop and deploy full-stack projects</li>
                </ul>
            </div>
        </div>
    );
}