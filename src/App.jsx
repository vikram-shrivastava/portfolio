import About from "./components/About"
import Contact from "./components/contact"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Projects from "./components/projects"
import Header from "./components/Header"
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
