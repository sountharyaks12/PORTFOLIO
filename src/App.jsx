import React from 'react'
// import Navbar from './NavBar/Navbar'
import Home from './NavBar/Home'
import About from './NavBar/About'
import Skills from './NavBar/Skills'
import Contact from './NavBar/Contact'
import Projects from './NavBar/Projects'

export default function App() {
  return (
    <div className='bg-[#d6d0ca] overflow-hidden' >
      {/* <Navbar /> */}
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />

    </div>
  )
}
