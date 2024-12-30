//NavBar/Skills.jsx
import React from 'react'
import { FaGlobe } from 'react-icons/fa'
import { FaWandMagicSparkles } from 'react-icons/fa6'
import { HiPaintBrush } from 'react-icons/hi2'
import { IoServer, IoSettings } from 'react-icons/io5'
                                                                                      
export default function Skills() {
  return (
    <div className='flex justify-center '>
    <div id='skills' className=' border-2 border-red-950 rounded-lg m-4 mt-6 md:m-16  p-5 '>
    
      <h1 className='text-3xl text-center mt-10 font-bold'>Skills</h1>
<h1 className='m-6 text-xl font-semibold '>MERN Full-Stack Development</h1>
      <ul className='m-6 list-disc'>
        <h1 className='text-lg font-semibold mb-5 flex '><span className='mr-2'><FaGlobe /></span>
         <span className='-mt-1'>Web Development</span></h1>
       <p className='font-serif'>I specialize in web development using technologies such as</p>
        <li>HTML5</li>
        <li>CSS3</li>
        <p className='font-serif mt-2'>Expertise in framework and libraries like</p>
        <li>React.js</li>
        <li> Node.js</li>
        <li>Express.js</li>
      </ul>
      <ul className='m-6 list-disc'>
        <h1 className='text-lg font-semibold mb-5 flex'> <span className='mr-2 '><HiPaintBrush /> </span> 
        <span className='-mt-1' >Styling Tools</span> </h1>
        <p className='font-serif'>I'm Proficient in styling tools including</p>
        <li>Bootstrap5 </li>
        <li>Tailwind CSS</li>
        <li>Material UI</li>
        <li>React Bootstrap</li>
      </ul>
      <ul className='m-6 list-disc'>
        <h1 className='text-lg font-semibold mb-5 flex'> <span className=' mr-2'><IoSettings /></span>
        <span className='-mt-1'>Programming Language </span> </h1>
        <p className='font-serif'>Core Technology</p>
        <li>Javascript </li>
      </ul>
      <ul className='m-6 list-disc'>
        <h1 className='text-lg font-semibold mb-5 flex'><span className='mr-2'><IoServer /></span>
        <span className='-mt-1'>Database Management</span> </h1>
        <p className='font-serif'>My database management skills include working with</p>
        <li>MongoDB </li>
      </ul>
      <ul className='m-6 list-disc'>
        <h1 className='text-lg font-semibold mb-5 flex'> <span className='mr-2'><IoSettings /></span>
        <span className='-mt-1'>Tools & Platform </span></h1>
        <p className='font-serif'>I am experienced with tools like</p>
        <li>Git, GitHub </li>
      </ul>
      <ul className='m-6 list-disc'>
        <h1 className='text-lg font-semibold mb-5 flex'>
          <span className='mr-2'><FaWandMagicSparkles /></span>
          <span className='-mt-1'>Other Skills</span> </h1>
        <p className='font-serif'>Additionally, I excel in creating</p>
        <li>Responsive Web Design</li>
      </ul>
    </div>
  </div>
  )
}
