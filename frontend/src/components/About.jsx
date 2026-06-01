import React, { useEffect, useRef } from 'react'

function About() {
  const cardRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
        }
      })
    }, { threshold: 0.1 })

    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [])

  const skills = ['C/C++', 'Python', 'JavaScript', 'React', 'Node.js', 'SQL', 'Git', 'Linux', 'Data Structures', 'Algorithms']

  return (
    <section id="about" style={{ padding: '100px 50px', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 className="section-title">About Me</h2>
      <div ref={cardRef} style={{
        display: 'flex',
        gap: '50px',
        alignItems: 'center',
        background: 'rgba(20, 20, 20, 0.8)',
        border: '1px solid rgba(0, 255, 136, 0.2)',
        borderRadius: '20px',
        padding: '50px',
        backdropFilter: 'blur(10px)',
        transition: 'all 0.6s ease',
        opacity: 0,
        transform: 'translateY(30px)'
      }} className="profile-card">
        <div style={{ flexShrink: 0, position: 'relative' }}>
          <div style={{
            position: 'absolute',
            top: '-5px',
            left: '-5px',
            right: '-5px',
            bottom: '-5px',
            border: '2px solid #00ff88',
            borderRadius: '50%',
            animation: 'rotate 10s linear infinite'
          }}></div>
          {/* PHOTO PLACEHOLDER - Replace /your-photo.jpg with your actual photo path */}
          <img 
            src="/your-photo.jpg" 
            alt="Your Profile" 
            style={{
              width: '250px',
              height: '250px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '3px solid #00ff88',
              position: 'relative',
              zIndex: 1,
              background: '#1a1a1a'
            }}
            onError={(e) => {
              e.target.style.display = 'none'
              e.target.parentElement.innerHTML += '<div style="width:250px;height:250px;border-radius:50%;border:3px solid #00ff88;background:#1a1a1a;display:flex;align-items:center;justify-content:center;color:#555;font-size:0.9rem;position:relative;z-index:1;">Add Your Photo</div>'
            }}
          />
        </div>
        <div>
          <h3 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '1.8rem', color: '#fff', marginBottom: '10px' }}>Your Name</h3>
          <div style={{ color: '#00ccff', fontSize: '1.1rem', marginBottom: '20px' }}>B.Tech in Computer Science & Engineering</div>
          <p style={{ color: '#aaa', lineHeight: 1.8, marginBottom: '15px' }}>
            Welcome to my digital space! I am a passionate Computer Science student exploring the depths of 
            algorithms, data structures, and software engineering. My journey in tech is driven by curiosity and 
            a desire to build solutions that make a difference.
          </p>
          <p style={{ color: '#aaa', lineHeight: 1.8, marginBottom: '15px' }}>
            I specialize in full-stack development, competitive programming, and emerging technologies like AI/ML.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '20px' }}>
            {skills.map(skill => (
              <span key={skill} style={{
                background: 'rgba(0, 255, 136, 0.1)',
                border: '1px solid rgba(0, 255, 136, 0.3)',
                color: '#00ff88',
                padding: '5px 15px',
                borderRadius: '20px',
                fontSize: '0.85rem',
                transition: 'all 0.3s',
                cursor: 'default'
              }} onMouseEnter={(e) => {
                e.target.style.background = 'rgba(0, 255, 136, 0.2)'
                e.target.style.transform = 'scale(1.05)'
              }} onMouseLeave={(e) => {
                e.target.style.background = 'rgba(0, 255, 136, 0.1)'
                e.target.style.transform = 'scale(1)'
              }}>{skill}</span>
            ))}
          </div>
        </div>
      </div>
      <style>{`@keyframes rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </section>
  )
}

export default About