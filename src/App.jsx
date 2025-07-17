import About from "./components/About.jsx"
import Footer from "./components/Footer.jsx"
import Hero from "./components/Hero.jsx"
import Projects from "./components/projects.jsx"
import Header from "./components/Header.jsx"
import Contact from "./components/contact.jsx"
import React from 'react'

function App() {

  return (
    <>
      <Header/>
      <main className="overflow-x-hidden">
        <Hero/>
        <About/>
        <Projects/>
        <Contact/>
      </main>
      <Footer/>
    </>
  )
}

export default App
