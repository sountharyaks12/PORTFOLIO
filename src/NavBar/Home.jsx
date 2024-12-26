import React from 'react';
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Navbar from './Navbar';

export default function Home() {
    return (
        < >
            {/* <Navbar /> */}
            <div className='flex items-center' style={{ height: '82vh' }}>
                <div id='home' className='w-full  mt-10'>
                    <div className='flex justify-center flex-col-reverse lg:flex-row md:flex-col-reverse sm:flex-col-reverse xs:flex-col-reverse leading-loose items-center w-screen my-auto px-5'>
                        <div className='p-3 w-full lg:w-1/3'>
                            <div className='text-center p-3 flex flex-wrap justify-center'>
                                <div>
                                    <h1 className='text-3xl mb-2 font-bold'>Hi, I'm Sountharya</h1>
                                    <p className='text-xl mb-4 font-semibold'>I'm a full stack developer</p>
                                    <p>Aspiring MERN Full-Stack Developer | Passionate About Creating Dynamic Websites</p>
                                </div>
                            </div>

                            <div className='text-right p-1 w-3/4 xs:mx-auto mt-6  '>
                                <div className='flex justify-around items-center rounded-full text-4xl bg-emerald-100 p-5 mx-5 glow'>
                                    <a href='#' aria-label="GitHub"><FaGithub /></a>
                                    <div>|</div>
                                    <a href="/" aria-label="LinkedIn"><FaLinkedin /></a>
                                    <div>|</div>
                                    <a href='#' aria-label="Email"><IoMdMail /></a>
                                </div>
                            </div>
                        </div>
                        <div className='mr-5 p-10'>
                            <img src="/i.JPG" className='rounded-full h-48 w-48' alt="Profile" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}