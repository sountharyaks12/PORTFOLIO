import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { Link } from 'react-scroll';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex justify-between items-center text-white px-4 bg-[#5F4E4A] h-16">
        <a href="/" className="text-lg font-bold">Sountharya K S</a>
        <div className="hidden md:flex space-x-4">
          <Link to="about" smooth={true} duration={500} className="cursor-pointer">About</Link>
          <Link to="skills" smooth={true} duration={500} className="cursor-pointer">Skills</Link>
          <Link to="projects" smooth={true} duration={500} className="cursor-pointer">Projects</Link>
          <Link to="contact" smooth={true} duration={500} className="cursor-pointer">Contact</Link>
        </div>
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </div>
      </div>

      <div className={`md:hidden bg-[#5F4E4A] text-white ${isOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col space-y-4 p-4">
          <Link to="home" smooth={true} duration={500} className="cursor-pointer" onClick={toggleMenu}>Home</Link>
          <Link to="about" smooth={true} duration={500} className="cursor-pointer" onClick={toggleMenu}>About</Link>
          <Link to="skills" smooth={true} duration={500} className="cursor-pointer" onClick={toggleMenu}>Skills</Link>
          <Link to="projects" smooth={true} duration={500} className="cursor-pointer" onClick={toggleMenu}>Projects</Link>
          <Link to="contact" smooth={true} duration={500} className="cursor-pointer" onClick={toggleMenu}>Contact</Link>
        </div>
      </div>

      <div className="flex items-center h-[82vh] animate-fadeInUp sm:animate-none mt-4">
        <div id="home" className="w-full mt-5">
          <div className="flex justify-center flex-col-reverse lg:flex-row md:flex-col-reverse sm:flex-col-reverse xs:flex-col-reverse leading-loose items-center w-screen mx-auto my-auto px-5">
            <div className="p-3 w-full lg:w-1/3 animate-slideLeft sm:animate-fadeInUp">
              <div className="text-center p-3 flex flex-wrap justify-center">
                <div>
                  <h1 className="text-3xl mb-2 font-bold animate-bounce sm:animate-none">Hi, I'm Sountharya</h1>
                  <p className="text-xl mb-4 font-semibold animate-bounce sm:animate-none">I'm a full stack developer</p>
                  <p className="sm:text-base">Aspiring MERN Full-Stack Developer | Passionate About Creating Dynamic Websites</p>
                </div>
              </div>

              <div className="text-center p-1 w-full xs:-mx-3 mt-6">
                <div className="flex flex-col xs:flex-row justify-center items-center gap-4 xs:gap-6">
                  <a href="https://github.com/sountharyaks12" aria-label="GitHub" role="img" className="p-4 bg-slate-100 text-black rounded-full text-3xl xs:text-4xl shadow-lg hover:bg-indigo-950 hover:text-white hover:shadow-xl hover:scale-110">
                    <FaGithub />
                  </a>
                  <a href="https://www.linkedin.com/in/sountharya-k-s-604a9b282/" aria-label="LinkedIn" role="img" className="p-4 bg-slate-100 rounded-full text-3xl xs:text-4xl text-black shadow-lg hover:text-white hover:bg-indigo-950 hover:shadow-xl hover:scale-110">
                    <FaLinkedin />
                  </a>
                  <a href="mailto:sountharyaks12@gmail.com" aria-label="Email" role="img" className="p-4 bg-slate-100 rounded-full text-3xl xs:text-4xl text-black shadow-lg hover:text-white hover:bg-indigo-950 hover:shadow-xl hover:scale-110">
                    <IoMdMail />
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full h-40 lg:w-2/3 flex justify-center">
              <img src="i.JPG" alt="Sountharya" className="rounded-full w-44 h-44 object-cover" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 
