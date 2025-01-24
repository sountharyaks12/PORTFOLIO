import React from 'react';
import '../index.css'
import { easeInOut, motion } from 'framer-motion'
import { easeOut } from 'framer-motion/dom';

export default function About() {
    return (
        <div id='about' className='min-h-screen text-center w-full rounded-lg bg-white  mt-40 md:mt-10'>
            <div className='p-8'>
                <motion.h2 initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: [-150, 30, 0] }}
                    transition={{ duration: 1, ease: easeInOut }}
                    className='text-3xl text-gray-900 font-bold mt-8'>
                    About Me
                </motion.h2>

                <ul className='list-image-custom m-6 px-6 text-start space-y-4'>
                    <motion.li
                        initial={{ opacity: 0, x: [-150, -110] }}
                        whileInView={{
                            opacity: 1, x: [-100, 10],
                            transition: {
                                duration: 0.7,
                                ease: 'easeOut'
                            }
                        }}

                        className='mt-5 text-lg text-gray-700'>
                        My journey in tech began with a fascination for how the web works, and it has grown into a full-blown passion for building scalable, interactive, and aesthetically pleasing solutions.
                    </motion.li>
                    <motion.li
                        initial={{ opacity: 0, x: [ 150,110] }}
                        whileInView={{
                            opacity: 1, x: [100,10],
                            transition: {
                                duration: .7,
                                ease: 'easeOut', 
                                delay: 0.8
                            }
                        }}
                        className='text-lg text-gray-700'>
                        With a focus on crafting impactful solutions, I enjoy turning complex problems into simple, user-friendly designs. During my internship, I honed my ability to develop and deploy full-stack projects.
                    </motion.li>
                </ul>
            </div>
        </div>
    );
}
