import React, { useState } from 'react'
import '../Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handle input field changes and update form data state
  const handleChange = (e) => {
    const { name, value } = e.target; // Extract name and value from the input attributes
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  };

  // Handle form submission and open email client with pre-filled email
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, message } = formData; // Use only name for the subject

    // Construct mailto link with only the message in the body
    const mailtoLink = `mailto:davidshulkin93@gmail.com?subject=Message from ${name} - Sent via davidshulkin.io&body=${encodeURIComponent(
      message
    )}`
    window.location.href = mailtoLink; // Open email client with the pre-filled email
  }

  return (
    <section id="contact">
      <h1 className="contact-header">Contact</h1>

      <form onSubmit={handleSubmit} className="form-grid">
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="name">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            required
          ></textarea>
        </div>

        <button className="submit-button" type="submit">Submit
          <svg 
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 90.25 28.23"
            fill="currentColor"
            className="arrow"
          >
            <polygon points="76.13 0 74.01 2.12 84.51 12.62 0 12.62 0 15.62 84.51 15.62 74.01 26.12 76.13 28.23 90.25 14.12 76.13 0"/>
          </svg>
        </button>
      </form>
    </section>
  )
}
export default Contact
