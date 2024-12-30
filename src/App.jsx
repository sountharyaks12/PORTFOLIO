
//App.jsx
import React from 'react'
import Navbar from './NavBar/Navbar'
import Home from './NavBar/Home'
import About from './NavBar/About'
import Contact from './NavBar/Contact'
import Skills from './NavBar/Skills'
import Projects from './NavBar/Projects'

export default function App() {
  return (
    <div className='bg-[#d6d0ca]' >
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      </div>
  )
}
