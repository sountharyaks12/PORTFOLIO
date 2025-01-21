import React from 'react';
import { Link } from 'react-scroll';

export default function Navbar() {
    return (
        <div className='sticky top-0 z-10 flex justify-between items-center text-[#FFFFFF] px-4 bg-[#5F4E4A] h-16'>
            <a href="/" className='text-lg font-bold'>Sountharya</a>
            <div className='hidden md:flex space-x-4'>
                <Link to="about" smooth={true} duration={500} className='cursor-pointer'>About</Link>
                <Link to="skills" smooth={true} duration={500} className='cursor-pointer'>Skills</Link>
                <Link to="projects" smooth={true} duration={500} className='cursor-pointer'>Projects</Link>
                <Link to="contact" smooth={true} duration={500} className='cursor-pointer'>Contact</Link>
                
            </div>
        </div>
    );
}