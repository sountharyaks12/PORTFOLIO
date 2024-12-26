import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

export default function Home() {
  return (
    <>
      <div className="flex items-center h-[82vh] animate-fadeIn sm:animate-none">
        <div id="home" className="w-full mt-10">
          <div className="flex justify-center flex-col-reverse lg:flex-row md:flex-col-reverse sm:flex-col-reverse xs:flex-col-reverse leading-loose items-center w-screen my-auto px-5">
            {/* Left Section with Text */}
            <div className="p-3 w-full lg:w-1/3 animate-slideInLeft sm:animate-fadeInUp">
              <div className="text-center p-3 flex flex-wrap justify-center">
                <div>
                  <h1 className="text-3xl mb-2 font-bold animate-bounceIn sm:animate-none">
                    Hi, I'm Sountharya
                  </h1>
                  <p className="text-xl mb-4 font-semibold animate-bounceIn sm:animate-none">
                    I'm a full stack developer
                  </p>
                  <p className="sm:text-base">
                    Aspiring MERN Full-Stack Developer | Passionate About Creating Dynamic Websites
                  </p>
                </div>
              </div>

              {/* Social Icons */}
              <div className="text-right p-1 w-3/4 xs:mx-auto mt-6">
                <div className="flex justify-around items-center rounded-full text-4xl bg-emerald-100 p-5 mx-5 glow hover:scale-110 transform transition-all duration-300">
                  <a href="https://github.com/sountharyaks12" aria-label="GitHub" role="img">
                    <FaGithub />
                  </a>
                  <div>|</div>
                  <a href="https://www.linkedin.com/in/sountharya-k-s-604a9b282/" aria-label="LinkedIn" role="img">
                    <FaLinkedin />
                  </a>
                  <div>|</div>
                  <a href="mailto:ssountharya71@gmail.com" aria-label="Email" role="img">
                    <IoMdMail />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Section with Image */}
            <div className="mr-5 p-10 animate-slideInRight sm:animate-fadeInUp">
              <img src="/i.JPG" className="rounded-full h-48 w-48" alt="Profile picture of Sountharya" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
