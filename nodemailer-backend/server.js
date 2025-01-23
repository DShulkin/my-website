const express = require('express')
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(bodyParser.json())

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
  debug: true, // Enable debugging
  logger: true, // Log detailed info
})

// Verify SMTP connection
transporter.verify((error, success) => {
  if (error) {
    console.error('SMTP connection failed:', error)
  } else {
    console.log('SMTP server is ready to send emails')
  }
})

// Route to handle email sending
app.post('/send-email', (req, res) => {
  console.log('Received request body:', req.body)

  const { name, email, message } = req.body

  const mailOptions = {
    from: email,
    to: process.env.EMAIL,
    subject: `From ${name} - via davidshulkin.io`,
    text: message,
    replyTo: email,
  }
  
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error details:', error) // Log detailed error information
      return res.status(500).json({ error: 'Failed to send email' })
    }
    console.log('Email sent:', info.response) // Log success details
    res.status(200).json({ message: 'Email sent successfully' })
  })
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

console.log('Email:', process.env.EMAIL)
console.log('Password:', process.env.EMAIL_PASSWORD ? 'Loaded' : 'Missing')
