const express = require('express')
const router = express.Router()
const path = require('path')
const fs = require('fs')
const nodemailer = require('nodemailer')

// Contact form endpoint
router.post('/contact', async (req, res) => {
  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' })
  }

  try {
    // If email is configured, send notification
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        }
      })

      await transporter.sendMail({
        from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
        to: process.env.ADMIN_EMAIL || process.env.SMTP_USER,
        subject: `New Contact Form Message from ${name}`,
        html: `
          <h2>New Message from Portfolio</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `
      })
    }

    // Also save to local file as backup
    const logEntry = `[${new Date().toISOString()}] From: ${name} (${email})\nMessage: ${message}\n\n`
    fs.appendFileSync(path.join(__dirname, '../contact-messages.txt'), logEntry)

    res.status(200).json({ success: true, message: 'Message sent successfully!' })
  } catch (error) {
    console.error('Contact form error:', error)
    res.status(500).json({ error: 'Failed to send message' })
  }
})

// Get list of available documents
router.get('/documents/list', (req, res) => {
  const uploadsDir = path.join(__dirname, '../uploads')
  
  if (!fs.existsSync(uploadsDir)) {
    return res.json({ documents: [] })
  }

  const files = fs.readdirSync(uploadsDir)
    .filter(file => file.endsWith('.pdf'))
    .map(file => ({
      name: file,
      url: `/api/documents/${file}`,
      size: fs.statSync(path.join(uploadsDir, file)).size
    }))

  res.json({ documents: files })
})

// Health check
router.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() })
})

module.exports = router