import React, { useEffect, useRef } from 'react'

function Documents() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll('.doc-card')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
        }
      })
    }, { threshold: 0.1 })

    cards.forEach(card => observer.observe(card))
    return () => observer.disconnect()
  }, [])

  const documents = [
  {
    icon: '📄',
    title: 'Resume / CV',
    desc: 'View or download my complete resume.',
    file: '/documents/resume.pdf',
    filename: 'My-Resume.pdf'
  },
  {
    icon: '🚀',
    title: 'Academic Projects',
    desc: 'Documentation of my major academic projects.',
    file: '/documents/projects.pdf',
    filename: 'My-Projects.pdf'
  },
  {
    icon: '🏆',
    title: 'Certificates',
    desc: 'Collection of my certifications.',
    file: '/documents/certificates.pdf',
    filename: 'My-Certificates.pdf'
  }
]

  return (
    <section id="documents" style={{ padding: '100px 50px', background: 'rgba(5, 5, 5, 0.9)' }}>
      <h2 className="section-title">My Documents</h2>
      <div ref={sectionRef} style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '30px'
      }}>
        {documents.map((doc, index) => (
          <div key={index} className="doc-card" style={{
            background: 'rgba(20, 20, 20, 0.9)',
            border: '1px solid rgba(0, 204, 255, 0.2)',
            borderRadius: '15px',
            padding: '40px',
            textAlign: 'center',
            transition: 'all 0.6s ease',
            position: 'relative',
            overflow: 'hidden',
            opacity: 0,
            transform: 'translateY(30px)'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '20px' }}>{doc.icon}</div>
            <h3 style={{ fontFamily: "'Orbitron', sans-serif", color: '#00ccff', marginBottom: '10px' }}>{doc.title}</h3>
            <p style={{ color: '#888', fontSize: '0.9rem', marginBottom: '25px' }}>{doc.desc}</p>
            <a href={doc.file} target="_blank" className="btn btn-primary">View Document</a>
            <a href={doc.file} download={doc.filename} className="btn btn-secondary" style={{ marginLeft: '10px' }}>Download</a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Documents