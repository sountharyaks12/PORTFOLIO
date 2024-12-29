
import React from 'react';
import { Link } from 'react-scroll';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Skills from './Skills';
import Projects from './Projects';

export default function Navbar() {
    return (
        <div className='h-screen'>
            <div className='sticky top-5 z-10 flex justify-between items-center text-[#FFFFFF] px-4 bg-[#5F4E4A] h-16  '>
                <a href="/" className='text-lg font-bold'>Dev by Sountharya</a>
                <div className='flex space-x-4'>
                    <Link to="about" smooth={true} duration={500} className='cursor-pointer'>About</Link>
                    <Link to="skills" smooth={true} duration={500} className='cursor-pointer'>Skills</Link>
                    <Link to="projects" smooth={true} duration={500} className='cursor-pointer'>Projects</Link>
                    <Link to="contact" smooth={true} duration={500} className='cursor-pointer'>Contact</Link>
                    </div>
            </div>
            <div>

            </div>
        </div>
    );
}