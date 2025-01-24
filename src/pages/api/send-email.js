// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const nodemailer = require('nodemailer')

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

export default function handler(req, res) {
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
}