
// //NavBar/Home.jsx
// import React, { useState } from 'react';
// import { FaGithub, FaLinkedin } from 'react-icons/fa';
// import { IoMdMail } from 'react-icons/io';
// import { Link } from 'react-scroll';

// export default function Home() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <div className="flex justify-between items-center text-white px-4 bg-[#5F4E4A] h-16">
//         <a href="/" className="text-lg font-bold">Dev by Sountharya</a>
//         <div className="hidden md:flex space-x-4">
//           {/* <Link to="home" smooth={true} duration={500} className="cursor-pointer">Home</Link> */}
//           <Link to="about" smooth={true} duration={500} className="cursor-pointer">About</Link>
//           <Link to="skills" smooth={true} duration={500} className="cursor-pointer">Skills</Link>
//           <Link to="projects" smooth={true} duration={500} className="cursor-pointer">Projects</Link>
//           <Link to="contact" smooth={true} duration={500} className="cursor-pointer">Contact</Link>
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

//       <div
//         className={`md:hidden bg-[#5F4E4A] text-white ${isOpen ? 'block' : 'hidden'
//           }`}
//       >
//         <div className="flex flex-col space-y-4 p-4">
//           <Link to="home" smooth={true} duration={500} className="cursor-pointer" onClick={toggleMenu}>Home</Link>
//           <Link to="about" smooth={true} duration={500} className="cursor-pointer" onClick={toggleMenu}>About</Link>
//           <Link to="skills" smooth={true} duration={500} className="cursor-pointer" onClick={toggleMenu}>Skills</Link>
//           <Link to="projects" smooth={true} duration={500} className="cursor-pointer" onClick={toggleMenu}>Projects</Link>
//           <Link to="contact" smooth={true} duration={500} className="cursor-pointer" onClick={toggleMenu}>Contact</Link>
//         </div>
//       </div>

//       <div className="flex items-center h-[82vh] animate-fadeInUp sm:animate-none">
//         <div id="home" className="w-full mt-10">
//           <div className="flex justify-center flex-col-reverse lg:flex-row md:flex-col-reverse sm:flex-col-reverse xs:flex-col-reverse leading-loose items-center w-screen my-auto px-5">
//             <div className="p-3 w-full lg:w-1/3 animate-slideLeft sm:animate-fadeInUp">
//               <div className="text-center p-3 flex flex-wrap justify-center">
//                 <div>
//                   <h1 className="text-3xl mb-2 font-bold animate-bounce sm:animate-none">
//                     Hi, I'm Sountharya
//                   </h1>
//                   <p className="text-xl mb-4 font-semibold animate-bounce sm:animate-none">
//                     I'm a full stack developer
//                   </p>
//                   <p className="sm:text-base">
//                     Aspiring MERN Full-Stack Developer | Passionate About Creating Dynamic Websites
//                   </p>
//                 </div>
//               </div>

//               {/* <div className="text-right p-1 w-3/4 xs:mx-auto mt-6">
//                 <div className="flex justify-around items-center rounded-full text-4xl bg-emerald-100 p-5 mx-5 glow hover:scale-110 transform transition-all duration-300">
//                   <a href="https://github.com/sountharyaks12" aria-label="GitHub" role="img">
//                     <FaGithub />
//                   </a>
//                   <div>|</div>
//                   <a href="https://www.linkedin.com/in/sountharya-k-s-604a9b282/" aria-label="LinkedIn" role="img">
//                     <FaLinkedin />
//                   </a>
//                   <div>|</div>
//                   <a href="mailto:ssountharya71@gmail.com" aria-label="Email" role="img">
//                     <IoMdMail />
//                   </a>
//                 </div>
//               </div> */}


//               <div className="text-center p-1 w-full xs:mx-auto mt-6">
//                 <div className="flex flex-col xs:flex-row justify-center items-center gap-4 xs:gap-6">
//                   {/* GitHub Icon */}
//                   <a href="https://github.com/sountharyaks12" aria-label="GitHub" role="img" className="p-4 bg-slate-100 text-black rounded-full text-3xl xs:text-4xl shadow-lg hover:bg-emerald-950 hover:text-white hover:shadow-xl hover:scale-110">
//                     <FaGithub />
//                   </a>

//                   {/* LinkedIn Icon */}
//                   <a href="https://www.linkedin.com/in/sountharya-k-s-604a9b282/" aria-label="LinkedIn" role="img" className="p-4 bg-cyan-100 rounded-full text-3xl xs:text-4xl text-black shadow-lg hover:text-white hover:bg-blue-950 hover:shadow-2xl transition-all duration-300 transform hover:scale-110">
//                     <FaLinkedin />
//                   </a>

//                   {/* Email Icon */}
//                   <a href="mailto:ssountharya71@gmail.com" aria-label="Email" role="img" className="p-4 bg-slate-100 rounded-full text-3xl xs:text-4xl text-black shadow-lg hover:bg-orange-950 hover:text-white hover:shadow-2xl transition-all duration-300 transform hover:scale-110">
//                     <IoMdMail />
//                   </a>
//                 </div>
//               </div>

//             </div>
//             <div className="mr-5 p-10 animate-slideRight sm:animate-fadeInUp">
//               <img src="/i.JPG" className="rounded-full h-48 w-48" alt="Profile pic" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// NavBar/Home.jsx
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
        <a href="/" className="text-lg font-bold">Dev by Sountharya</a>
        <div className="hidden md:flex space-x-4">
          <Link to="about" smooth={true} duration={500} className="cursor-pointer">About</Link>
          <Link to="skills" smooth={true} duration={500} className="cursor-pointer">Skills</Link>
          <Link to="projects" smooth={true} duration={500} className="cursor-pointer">Projects</Link>
          <Link to="contact" smooth={true} duration={500} className="cursor-pointer">Contact</Link>
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

      <div className="flex items-center h-[82vh] animate-fadeInUp sm:animate-none">
        <div id="home" className="w-full mt-10">
          <div className="flex justify-center flex-col-reverse lg:flex-row md:flex-col-reverse sm:flex-col-reverse xs:flex-col-reverse sm:mt-11 xs:mt-11 leading-loose items-center w-screen my-auto px-5">
            <div className="p-3 w-full lg:w-1/3 animate-slideLeft sm:animate-fadeInUp">
              <div className="text-center p-3 flex flex-wrap justify-center">
                <div>
                  <h1 className="text-3xl mb-2 font-bold animate-bounce sm:animate-none">Hi, I'm Sountharya</h1>
                  <p className="text-xl mb-4 font-semibold animate-bounce sm:animate-none">I'm a full stack developer</p>
                  <p className="sm:text-base">Aspiring MERN Full-Stack Developer | Passionate About Creating Dynamic Websites</p>
                </div>
              </div>

              <div className="text-center p-1 w-full xs:mx-auto mt-6 flex flex-wrap">
                <div className="flex flex-col xs:flex-row justify-center items-center gap-4 xs:gap-6">
                  <a href="https://github.com/sountharyaks12" aria-label="GitHub" role="img" className="p-4 bg-slate-100 text-black rounded-full text-3xl xs:text-4xl shadow-lg hover:bg-emerald-950 hover:text-white hover:shadow-xl hover:scale-110">
                    <FaGithub />
                  </a>
                  <a href="https://www.linkedin.com/in/sountharya-k-s-604a9b282/" aria-label="LinkedIn" role="img" className="p-4 bg-cyan-100 rounded-full text-3xl xs:text-4xl text-black shadow-lg hover:text-white hover:bg-blue -500 hover:shadow-xl hover:scale-110">
                    <FaLinkedin />
                  </a>
                  <a href="mailto:sountharyaks12@gmail.com" aria-label="Email" role="img" className="p-4 bg-red-100 rounded-full text-3xl xs:text-4xl text-black shadow-lg hover:text-white hover:bg-red-500 hover:shadow-xl hover:scale-110">
                    <IoMdMail />
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-2/3 flex justify-center">
              <img src="i.JPG" alt="Sountharya" className="rounded-full w-48 h-48 object-cover" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}