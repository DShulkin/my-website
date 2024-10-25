// // import React from 'react'
import React, { useState } from 'react';
import '../Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target; // Extract name and value from the input attributes
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, message } = formData; // Use only name for the subject

    // Construct mailto link with only the message in the body
    const mailtoLink = `mailto:davidshulkin93@gmail.com?subject=Message from ${name} - Sent via davidshulkin.io&body=${encodeURIComponent(
      message
    )}`;

    window.location.href = mailtoLink; // Open email client with the pre-filled email
  };

  return (
    <section id="contact">
      <h1 className="contact-header">Contact</h1>
      <p>Get in touch with us.</p>
      <form onSubmit={handleSubmit}>
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

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter your message"
          required
        />

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
