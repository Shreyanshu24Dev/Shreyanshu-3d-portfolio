import React from 'react'
import ThreeBackground from './components/ThreeBackground'
import MatrixRain from './components/MatrixRain'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Documents from './components/Documents'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <ThreeBackground />
      <MatrixRain />
      <Navbar />
      <main className="content">
        <Hero />
        <About />
        <Documents />
        <Contact />
        <footer className="footer">
          <p>Designed with 💚 by You | &copy; 2026 All Rights Reserved</p>
        </footer>
      </main>
    </>
  )
}

export default App