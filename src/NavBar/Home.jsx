// import React, { useState } from 'react';
// import { FaGithub, FaLinkedin } from 'react-icons/fa';
// import { IoMdMail } from 'react-icons/io';
// import { IoCloudDownload } from 'react-icons/io5';
// import { Link } from 'react-scroll';

// export default function Home() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <div className="flex justify-between items-center text-white px-4 bg-[#5F4E4A] h-16">
//         <a href="/" className="text-lg font-bold">Sountharya K S</a>
//         <div className="hidden md:flex space-x-4">
//           <Link to="about" smooth={true} duration={500} className="cursor-pointer">About</Link>
//           <Link to="skills" smooth={true} duration={500} className="cursor-pointer">Skills</Link>
//           <Link to="projects" smooth={true} duration={500} className="cursor-pointer">Projects</Link>
//           <Link to="contact" smooth={true} duration={500} className="cursor-pointer">Contact</Link>
//           <button className=' text-white font-medium '>
//             <a href="/Sountharya_Resume_(1)" download>Download My Resume</a>
//           </button>
//         </div>
//         <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//             />
//           </svg>
//         </div>
//       </div>

//       <div className={`md:hidden bg-[#5F4E4A] text-white ${isOpen ? 'block' : 'hidden'}`}>
//         <div className="flex flex-col space-y-4 p-4">
//           <Link to="home" smooth={true} duration={500} className="cursor-pointer" onClick={toggleMenu}>Home</Link>
//           <Link to="about" smooth={true} duration={500} className="cursor-pointer" onClick={toggleMenu}>About</Link>
//           <Link to="skills" smooth={true} duration={500} className="cursor-pointer" onClick={toggleMenu}>Skills</Link>
//           <Link to="projects" smooth={true} duration={500} className="cursor-pointer" onClick={toggleMenu}>Projects</Link>
//           <Link to="contact" smooth={true} duration={500} className="cursor-pointer" onClick={toggleMenu}>Contact</Link>
//           <button className='bg-slate-950 flex items-center justify-between text-white font-medium py-2 px-4 rounded-lg w-fit'>
//           <span className=' mr-2'> <IoCloudDownload /></span>
//           <a href="/Sountharya_Resume_(1)" download>Download My Resume </a>
//           </button>
//         </div>
//       </div>

//       <div className="flex items-center h-[82vh] animate-fadeInUp sm:animate-none mt-4">
//         <div id="home" className="w-full mt-5">
//           <div className="flex justify-center flex-col-reverse lg:flex-row md:flex-col-reverse sm:flex-col-reverse xs:flex-col-reverse leading-loose items-center w-screen mx-auto my-auto px-5">
//             <div className="p-3 w-full lg:w-1/3 animate-slideLeft sm:animate-fadeInUp">
//               <div className="text-center p-3 flex flex-wrap justify-center">
//                 <div>
//                   <h1 className="text-3xl mb-2 font-bold animate-bounce sm:animate-none">Hi, I'm Sountharya</h1>
//                   <p className="text-xl mb-4 font-semibold animate-bounce sm:animate-none">I'm a full stack developer</p>
//                   <p className="sm:text-base">Aspiring MERN Full-Stack Developer | Passionate About Creating Dynamic Websites</p>
//                 </div>
//               </div>

//               <div className="text-center p-1 w-full xs:-mx-3 mt-6">
//                 <div className="flex flex-col xs:flex-row justify-center items-center gap-4 xs:gap-6">
//                   <a href="https://github.com/sountharyaks12" aria-label="GitHub" role="img" className="p-4 bg-slate-100 text-black rounded-full text-3xl xs:text-4xl shadow-lg hover:bg-indigo-950 hover:text-white hover:shadow-xl hover:scale-110">
//                     <FaGithub />
//                   </a>
//                   <a href="https://www.linkedin.com/in/sountharya-k-s-604a9b282/" aria-label="LinkedIn" role="img" className="p-4 bg-slate-100 rounded-full text-3xl xs:text-4xl text-black shadow-lg hover:text-white hover:bg-indigo-950 hover:shadow-xl hover:scale-110">
//                     <FaLinkedin />
//                   </a>
//                   <a href="mailto:ssountharya71@gmail.com" aria-label="Email" role="img" className="p-4 bg-slate-100 rounded-full text-3xl xs:text-4xl text-black shadow-lg hover:text-white hover:bg-indigo-950 hover:shadow-xl hover:scale-110">
//                     <IoMdMail />
//                   </a>
//                 </div>
//               </div>
//             </div>
//             <div className="w-full h-40 lg:w-2/3 flex justify-center">
//               <img src="i.JPG" alt="Sountharya" className="rounded-full w-44 h-44 object-cover" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// } 



// import React, { useState } from 'react';
// import { FaGithub, FaLinkedin } from 'react-icons/fa';
// import { IoMdMail } from 'react-icons/io';
// import { IoCloudDownload } from 'react-icons/io5';
// import { Link } from 'react-scroll';

// export default function Home() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       {/* Navbar */}
//       <div className="flex justify-between items-center text-white px-4 bg-[#5F4E4A] h-16">
//         <a href="/" className="text-lg font-bold">Sountharya K S</a>
//         <div className="hidden md:flex space-x-6">
//           <Link to="about" smooth={true} duration={500} className="cursor-pointer">About</Link>
//           <Link to="skills" smooth={true} duration={500} className="cursor-pointer">Skills</Link>
//           <Link to="projects" smooth={true} duration={500} className="cursor-pointer">Projects</Link>
//           <Link to="contact" smooth={true} duration={500} className="cursor-pointer">Contact</Link>
//           <button className="text-white font-medium bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-700">
//             <a href="/Sountharya_Resume_(1)" download>Download My Resume</a>
//           </button>
//         </div>
//         <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//             />
//           </svg>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div className={`md:hidden bg-[#5F4E4A] text-white ${isOpen ? 'block' : 'hidden'}`}>
//         <div className="flex flex-col space-y-4 p-4">
//           <Link to="home" smooth={true} duration={500} className="cursor-pointer" onClick={toggleMenu}>Home</Link>
//           <Link to="about" smooth={true} duration={500} className="cursor-pointer" onClick={toggleMenu}>About</Link>
//           <Link to="skills" smooth={true} duration={500} className="cursor-pointer" onClick={toggleMenu}>Skills</Link>
//           <Link to="projects" smooth={true} duration={500} className="cursor-pointer" onClick={toggleMenu}>Projects</Link>
//           <Link to="contact" smooth={true} duration={500} className="cursor-pointer" onClick={toggleMenu}>Contact</Link>
//           <button className="bg-indigo-600 flex items-center justify-between text-white font-medium py-2 px-4 rounded-lg w-fit">
//             <IoCloudDownload className="mr-2" />
//             <a href="/Sountharya_Resume_(1)" download>Download My Resume</a>
//           </button>
//         </div>
//       </div>

//       {/* Hero Section */}
//       <div className="flex items-center h-screen bg-gray-50">
//         <div id="home" className="container mx-auto px-6 lg:px-20">
//           <div className="flex flex-col lg:flex-row items-center justify-between">
//             {/* Text Content */}
//             <div className="text-center lg:text-left lg:w-1/2">
//               <h1 className="text-4xl font-bold text-gray-800 mb-4">Hi, I'm Sountharya</h1>
//               <p className="text-xl font-semibold text-gray-700 mb-4">I'm a Full Stack Developer</p>
//               <p className="text-lg text-gray-600">Aspiring MERN Full-Stack Developer | Passionate About Creating Dynamic Websites</p>
//               <div className="flex justify-center lg:justify-start gap-4 mt-6">
//                 <a
//                   href="https://github.com/sountharyaks12"
//                   aria-label="GitHub"
//                   className="p-4 bg-gray-200 text-black rounded-full text-3xl shadow-lg hover:bg-indigo-700 hover:text-white transition-all"
//                 >
//                   <FaGithub />
//                 </a>
//                 <a
//                   href="https://www.linkedin.com/in/sountharya-k-s-604a9b282/"
//                   aria-label="LinkedIn"
//                   className="p-4 bg-gray-200 text-black rounded-full text-3xl shadow-lg hover:bg-indigo-700 hover:text-white transition-all"
//                 >
//                   <FaLinkedin />
//                 </a>
//                 <a
//                   href="mailto:ssountharya71@gmail.com"
//                   aria-label="Email"
//                   className="p-4 bg-gray-200 text-black rounded-full text-3xl shadow-lg hover:bg-indigo-700 hover:text-white transition-all"
//                 >
//                   <IoMdMail />
//                 </a>
//               </div>
//             </div>

//             {/* Image Content */}
//             <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
//               <img
//                 src="i.JPG"
//                 alt="Sountharya"
//                 className="rounded-full w-48 h-48 lg:w-64 lg:h-64 object-cover shadow-lg"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }




// import React, { useState } from 'react';
// import { FaGithub, FaLinkedin } from 'react-icons/fa';
// import { IoMdMail } from 'react-icons/io';
// import { IoCloudDownload } from 'react-icons/io5';
// import { Link } from 'react-scroll';

// export default function Home() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       {/* Navbar */}
//       <div className="flex justify-between items-center text-white px-4 bg-[#5F4E4A] h-16">
//         <a href="/" className="text-lg font-bold">Sountharya K S</a>
//         <div className="hidden md:flex space-x-6">
//           <Link to="about" smooth={true} duration={500} className="cursor-pointer">About</Link>
//           <Link to="skills" smooth={true} duration={500} className="cursor-pointer">Skills</Link>
//           <Link to="projects" smooth={true} duration={500} className="cursor-pointer">Projects</Link>
//           <Link to="contact" smooth={true} duration={500} className="cursor-pointer">Contact</Link>
//           <button className="text-white font-medium bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-700">
//             <a href="/Sountharya_Resume_(1)" download>Download My Resume</a>
//           </button>
//         </div>
//         <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//             />
//           </svg>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div className={`md:hidden bg-[#5F4E4A] text-white ${isOpen ? 'block' : 'hidden'}`}>
//         <div className="flex flex-col space-y-4 p-4">
//           <Link to="home" smooth={true} duration={500} className="cursor-pointer" onClick={toggleMenu}>Home</Link>
//           <Link to="about" smooth={true} duration={500} className="cursor-pointer" onClick={toggleMenu}>About</Link>
//           <Link to="skills" smooth={true} duration={500} className="cursor-pointer" onClick={toggleMenu}>Skills</Link>
//           <Link to="projects" smooth={true} duration={500} className="cursor-pointer" onClick={toggleMenu}>Projects</Link>
//           <Link to="contact" smooth={true} duration={500} className="cursor-pointer" onClick={toggleMenu}>Contact</Link>
//           <button className="bg-indigo-600 flex items-center justify-between text-white font-medium py-2 px-4 rounded-lg w-fit">
//             <IoCloudDownload className="mr-2" />
//             <a href="/Sountharya_Resume_(1)" download>Download My Resume</a>
//           </button>
//         </div>
//       </div>

//       {/* Hero Section */}
//       <div className="flex items-center h-[85vh] bg-gray-50 mt-4">
//         <div id="home" className="w-full mx-auto px-6">
//           <div className="flex flex-col-reverse lg:flex-row md:flex-col-reverse sm:flex-col-reverse items-center justify-between w-full leading-loose">
//             {/* Text Content */}
//             <div className="text-center lg:text-left lg:w-1/2 animate-slideLeft sm:animate-fadeInUp">
//               <h1 className="text-4xl font-bold text-gray-800 mb-2 animate-bounce sm:animate-none">Hi, I'm Sountharya</h1>
//               <p className="text-xl font-semibold text-gray-700 mb-4 animate-bounce sm:animate-none">I'm a Full Stack Developer</p>
//               <p className="text-lg text-gray-600">
//                 Aspiring MERN Full-Stack Developer | Passionate About Creating Dynamic Websites
//               </p>
//               <div className="flex justify-center lg:justify-start gap-4 mt-6">
//                 <a
//                   href="https://github.com/sountharyaks12"
//                   aria-label="GitHub"
//                   className="p-4 bg-gray-200 text-black rounded-full text-3xl shadow-lg hover:bg-indigo-700 hover:text-white transition-all"
//                 >
//                   <FaGithub />
//                 </a>
//                 <a
//                   href="https://www.linkedin.com/in/sountharya-k-s-604a9b282/"
//                   aria-label="LinkedIn"
//                   className="p-4 bg-gray-200 text-black rounded-full text-3xl shadow-lg hover:bg-indigo-700 hover:text-white transition-all"
//                 >
//                   <FaLinkedin />
//                 </a>
//                 <a
//                   href="mailto:sountharyaks12@gmail.com"
//                   aria-label="Email"
//                   className="p-4 bg-gray-200 text-black rounded-full text-3xl shadow-lg hover:bg-indigo-700 hover:text-white transition-all"
//                 >
//                   <IoMdMail />
//                 </a>
//               </div>
//             </div>

//             {/* Image Content */}
//             <div className="lg:w-1/2 flex justify-center items-center">
//               <img
//                 src="i.JPG"
//                 alt="Sountharya"
//                 className="rounded-full w-48 h-48 lg:w-64 lg:h-64 object-cover shadow-lg animate-fadeInUp"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }



// import React, { useState } from 'react';
// import { FaGithub, FaLinkedin } from 'react-icons/fa';
// import { IoMdMail } from 'react-icons/io';
// import { IoCloudDownload } from 'react-icons/io5';
// import { Link } from 'react-scroll';

// export default function Home() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       {/* Navbar */}
//       <div className="flex justify-between items-center text-white px-4 bg-[#5F4E4A] h-16">
//         <a href="/" className="text-lg font-bold">Sountharya K S</a>
//         <div className="hidden md:flex space-x-6">
//           <Link to="about" smooth={true} duration={500} className="cursor-pointer">About</Link>
//           <Link to="skills" smooth={true} duration={500} className="cursor-pointer">Skills</Link>
//           <Link to="projects" smooth={true} duration={500} className="cursor-pointer">Projects</Link>
//           <Link to="contact" smooth={true} duration={500} className="cursor-pointer">Contact</Link>
//           <button className="text-white font-medium bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-700">
//             <a href="/Sountharya_Resume_(1)" download>Download My Resume</a>
//           </button>
//         </div>
//         <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//             />
//           </svg>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div className={`md:hidden bg-[#5F4E4A] text-white ${isOpen ? 'block' : 'hidden'}`}>
//         <div className="flex flex-col space-y-4 p-4">
//           <Link to="home" smooth={true} duration={500} className="cursor-pointer" onClick={toggleMenu}>Home</Link>
//           <Link to="about" smooth={true} duration={500} className="cursor-pointer" onClick={toggleMenu}>About</Link>
//           <Link to="skills" smooth={true} duration={500} className="cursor-pointer" onClick={toggleMenu}>Skills</Link>
//           <Link to="projects" smooth={true} duration={500} className="cursor-pointer" onClick={toggleMenu}>Projects</Link>
//           <Link to="contact" smooth={true} duration={500} className="cursor-pointer" onClick={toggleMenu}>Contact</Link>
//           <button className="bg-indigo-600 flex items-center justify-between text-white font-medium py-2 px-4 rounded-lg w-fit">
//             <IoCloudDownload className="mr-2" />
//             <a href="/Sountharya_Resume_(1)" download>Download My Resume</a>
//           </button>
//         </div>
//       </div>

//       {/* Hero Section */}
//       <div className="flex items-center justify-center h-[85vh] bg-gray-50">
//         <div id="home" className="w-full px-6">
//           <div className="flex flex-col lg:flex-row items-center justify-center w-full leading-loose text-center lg:text-left">
//             {/* Text Content */}
//             <div className="lg:w-1/2">
//               <h1 className="text-4xl font-bold text-gray-800 mb-4 animate-bounce">Hi, I'm Sountharya</h1>
//               <p className="text-xl font-semibold text-gray-700 mb-4 animate-bounce">I'm a Full Stack Developer</p>
//               <p className="text-lg text-gray-600 mb-6">
//                 Aspiring MERN Full-Stack Developer | Passionate About Creating Dynamic Websites
//               </p>
//               <div className="flex justify-center lg:justify-start gap-4">
//                 <a
//                   href="https://github.com/sountharyaks12"
//                   aria-label="GitHub"
//                   className="p-4 bg-gray-200 text-black rounded-full text-3xl shadow-lg hover:bg-indigo-700 hover:text-white transition-all"
//                 >
//                   <FaGithub />
//                 </a>
//                 <a
//                   href="https://www.linkedin.com/in/sountharya-k-s-604a9b282/"
//                   aria-label="LinkedIn"
//                   className="p-4 bg-gray-200 text-black rounded-full text-3xl shadow-lg hover:bg-indigo-700 hover:text-white transition-all"
//                 >
//                   <FaLinkedin />
//                 </a>
//                 <a
//                   href="mailto:sountharyaks12@gmail.com"
//                   aria-label="Email"
//                   className="p-4 bg-gray-200 text-black rounded-full text-3xl shadow-lg hover:bg-indigo-700 hover:text-white transition-all"
//                 >
//                   <IoMdMail />
//                 </a>
//               </div>
//             </div>

//             {/* Image Content */}
//             <div className="lg:w-1/2 flex justify-center items-center mt-6 lg:mt-0">
//               <img
//                 src="i.JPG"
//                 alt="Sountharya"
//                 className="rounded-full w-48 h-48 lg:w-64 lg:h-64 object-cover shadow-lg animate-fadeInUp"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }




import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { IoCloudDownload } from 'react-icons/io5';
import { Link } from 'react-scroll';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Navbar */}
      <div className="flex justify-between items-center text-white px-4 bg-[#5F4E4A] h-16">
        <a href="/" className="text-lg font-bold">Sountharya K S</a>
        <div className="hidden md:flex space-x-6">
          <Link to="about" smooth={true} duration={500} className="cursor-pointer">About</Link>
          <Link to="skills" smooth={true} duration={500} className="cursor-pointer">Skills</Link>
          <Link to="projects" smooth={true} duration={500} className="cursor-pointer">Projects</Link>
          <Link to="contact" smooth={true} duration={500} className="cursor-pointer">Contact</Link>
          <button className="text-white font-medium bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-700">
            <a href="/Sountharya_Resume_(1)" download>Download My Resume</a>
          </button>
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

      {/* Mobile Menu */}
      <div className={`md:hidden bg-[#5F4E4A] text-white ${isOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col space-y-4 p-4">
          <Link to="home" smooth={true} duration={500} className="cursor-pointer" onClick={toggleMenu}>Home</Link>
          <Link to="about" smooth={true} duration={500} className="cursor-pointer" onClick={toggleMenu}>About</Link>
          <Link to="skills" smooth={true} duration={500} className="cursor-pointer" onClick={toggleMenu}>Skills</Link>
          <Link to="projects" smooth={true} duration={500} className="cursor-pointer" onClick={toggleMenu}>Projects</Link>
          <Link to="contact" smooth={true} duration={500} className="cursor-pointer" onClick={toggleMenu}>Contact</Link>
          <button className="bg-indigo-600 flex items-center justify-between text-white font-medium py-2 px-4 rounded-lg w-fit">
            <IoCloudDownload className="mr-2" />
            <a href="/Sountharya_Resume_(1)" download>Download My Resume</a>
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center h-[85vh] bg-gray-50">
        <div id="home" className="w-full px-6">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-8 w-full leading-loose text-center lg:text-left">

            <div className="lg:w-1/2 animate-slideLeft">
              <h1 className="text-4xl font-bold text-gray-800 mb-4 animate-bounce">Hi, I'm Sountharya</h1>
              <p className="text-xl font-semibold text-gray-700 mb-4 animate-bounce">I'm a Full Stack Developer</p>
              <p className="text-lg text-gray-600 mb-6">
                Aspiring MERN Full-Stack Developer | Passionate About Creating Dynamic Websites
              </p>
              <div className="flex justify-center lg:justify-start gap-4">
                <a
                  href="https://github.com/sountharyaks12"
                  aria-label="GitHub"
                  className="p-4 bg-gray-200 text-black rounded-full text-3xl shadow-lg hover:bg-indigo-700 hover:text-white transition-all"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/sountharya-k-s-604a9b282/"
                  aria-label="LinkedIn"
                  className="p-4 bg-gray-200 text-black rounded-full text-3xl shadow-lg hover:bg-indigo-700 hover:text-white transition-all"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="mailto:ssountharya71@gmail.com"
                  aria-label="Email"
                  className="p-4 bg-gray-200 text-black rounded-full text-3xl shadow-lg hover:bg-indigo-700 hover:text-white transition-all"
                >
                  <IoMdMail />
                </a>
              </div>
            </div>

            <div className="lg:w-1/3 flex justify-center items-center animate-fadeInUp">
              <img
                src="i.JPG"
                alt="Sountharya"
                className="rounded-full w-44 h-44 lg:w-64 lg:h-64 object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
