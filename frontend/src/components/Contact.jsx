import React, { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState('')

  const socials = [
    { label: 'GH', url: 'https://github.com/Shreyanshu24Dev', title: 'GitHub' },
    { label: 'LI', url: 'https://in.linkedin.com/in/shreyanshu-tripathi-802190310', title: 'LinkedIn' },
    { label: '@', url: 'mailto:shreyanshu7227@gmail.com', title: 'Email' },
    { label: 'LC', url: 'https://leetcode.com/shreyanshu24dev', title: 'LeetCode' }
  ]

  return (
    <section id="contact" style={{ padding: '100px 50px', textAlign: 'center' }}>
      <h2 className="section-title">Get In Touch</h2>
      <p style={{ color: '#888', maxWidth: '600px', margin: '0 auto 40px', lineHeight: 1.8 }}>
        I'm always open to discussing new projects, creative ideas, or opportunities. Feel free to connect!
      </p>

      {/* FORMSPREE CONTACT FORM - No backend needed! */}
      <form 
        action="https://formspree.io/f/xwvzgerz" 
        method="POST"
        style={{
          maxWidth: '500px',
          margin: '0 auto 50px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          style={{
            padding: '15px',
            borderRadius: '10px',
            border: '1px solid rgba(0, 255, 136, 0.3)',
            background: 'rgba(20, 20, 20, 0.8)',
            color: '#fff',
            fontFamily: "'JetBrains Mono', monospace",
            outline: 'none'
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          style={{
            padding: '15px',
            borderRadius: '10px',
            border: '1px solid rgba(0, 255, 136, 0.3)',
            background: 'rgba(20, 20, 20, 0.8)',
            color: '#fff',
            fontFamily: "'JetBrains Mono', monospace",
            outline: 'none'
          }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          style={{
            padding: '15px',
            borderRadius: '10px',
            border: '1px solid rgba(0, 255, 136, 0.3)',
            background: 'rgba(20, 20, 20, 0.8)',
            color: '#fff',
            fontFamily: "'JetBrains Mono', monospace",
            outline: 'none',
            resize: 'vertical'
          }}
        />
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '30px' }}>
        {socials.map((social) => (
          <a
            key={social.title}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            title={social.title}
            style={{
              width: '60px',
              height: '60px',
              border: '2px solid rgba(0, 255, 136, 0.3)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#00ff88',
              fontSize: '1.2rem',
              textDecoration: 'none',
              transition: 'all 0.3s',
              fontWeight: 'bold'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#00ff88'
              e.target.style.color = '#0a0a0a'
              e.target.style.transform = 'rotate(360deg)'
              e.target.style.boxShadow = '0 0 30px rgba(0, 255, 136, 0.5)'
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent'
              e.target.style.color = '#00ff88'
              e.target.style.transform = 'rotate(0deg)'
              e.target.style.boxShadow = 'none'
            }}
          >{social.label}</a>
        ))}
      </div>
    </section>
  )
}

export default Contact