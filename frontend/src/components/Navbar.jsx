import React, { useState, useEffect } from 'react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      padding: '20px 50px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: scrolled ? 'rgba(10, 10, 10, 0.9)' : 'rgba(10, 10, 10, 0.6)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(0, 255, 136, 0.2)',
      zIndex: 100,
      transition: 'all 0.3s'
    }}>
      <div style={{
        fontFamily: "'Orbitron', sans-serif",
        fontSize: '1.5rem',
        fontWeight: 900,
        color: '#00ff88',
        textShadow: '0 0 20px rgba(0, 255, 136, 0.5)',
        letterSpacing: '2px'
      }}>&lt;SHREYANSHU /&gt;</div>
      <ul style={{
        display: 'flex',
        gap: '30px',
        listStyle: 'none'
      }}>
        {['Home', 'About', 'Documents', 'Contact'].map((item) => (
          <li key={item}>
            <button onClick={() => scrollTo(`#${item.toLowerCase()}`)} style={{
              background: 'none',
              border: 'none',
              color: '#e0e0e0',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.9rem',
              cursor: 'pointer',
              transition: 'all 0.3s',
              position: 'relative'
            }} onMouseEnter={(e) => {
              e.target.style.color = '#00ff88'
              e.target.style.textShadow = '0 0 10px rgba(0, 255, 136, 0.5)'
            }} onMouseLeave={(e) => {
              e.target.style.color = '#e0e0e0'
              e.target.style.textShadow = 'none'
            }}>
              {item}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar