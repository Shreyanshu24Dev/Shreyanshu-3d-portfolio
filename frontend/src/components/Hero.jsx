import React, { useEffect, useState } from 'react'

function Hero() {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(100)

  const texts = [
    'Competitive Programmer',
    'Full Stack Developer',
    'Open Source Contributor',
    'Problem Solver',
    'Tech Enthusiast'
  ]

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % texts.length
      const fullText = texts[i]

      setText(isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      )

      setTypingSpeed(isDeleting ? 50 : 100)

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && text === '') {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, typingSpeed])

  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '100px 50px',
      textAlign: 'center'
    }}>
      <div>
        <div style={{ fontSize: '1.3rem', color: '#888', marginBottom: '10px' }}>Hello, World! I am</div>
        <h1 style={{
          fontFamily: "'Orbitron', sans-serif",
          fontSize: 'clamp(2.5rem, 8vw, 4rem)',
          fontWeight: 900,
          marginBottom: '20px',
          background: 'linear-gradient(135deg, #00ff88, #00ccff, #00ff88)',
          backgroundSize: '200% 200%',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          animation: 'gradientShift 3s ease infinite'
        }}>Shreyanshu</h1>
        <div style={{
          fontSize: '1.1rem',
          color: '#00ff88',
          border: '1px solid rgba(0, 255, 136, 0.3)',
          display: 'inline-block',
          padding: '8px 25px',
          borderRadius: '30px',
          marginTop: '20px',
          background: 'rgba(0, 255, 136, 0.05)'
        }}>BTech Computer Science & Engineering</div>
        <div style={{ marginTop: '30px', fontSize: '1rem', color: '#00ccff', minHeight: '30px' }}>
          {text}<span style={{
            display: 'inline-block',
            width: '10px',
            height: '20px',
            background: '#00ff88',
            animation: 'blink 1s infinite',
            verticalAlign: 'middle',
            marginLeft: '5px'
          }}></span>
        </div>
      </div>
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </section>
  )
}

export default Hero