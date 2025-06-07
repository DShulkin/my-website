function Footer() {
  return (
    <footer id="footer">
      <div className="contact-info">
        <p>+1 317-657-7013</p>
        <p>davidshulkin93@gmail.com</p>
      </div>

      <div className="social-icon-container">
        {/* GitHub Icon */}
        <a
          href="https://github.com/dshulkin"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="social-icon"
            fill="currentColor"
          >
            <path d="M12,.2C5.4.2,0,5.6,0,12.3s3.4,9.9,8.2,11.5c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.5-4-1.5-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7,0-.7,0-.7,1.2.1,1.8,1.2,1.8,1.2,1.1,1.8,2.8,1.3,3.5,1,.1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6s.5-2.4,1.2-3.2c0-.3-.5-1.6.2-3.2,0,0,1-.3,3.3,1.2,1-.3,2-.4,3-.4s2,.2,3,.4c2.3-1.6,3.3-1.2,3.3-1.2.7,1.7.2,2.9.1,3.2.8.8,1.2,1.9,1.2,3.2,0,4.6-2.8,5.7-5.5,6,.4.4.8,1.1.8,2.2v3.3c0,.3.2.7.8.6,4.8-1.6,8.2-6.1,8.2-11.5C24,5.6,18.6.2,12,.2Z"/>
          </svg>
        </a>

        {/* LinkedIn Icon */}
        <a
          href="https://www.linkedin.com/in/david-shulkin"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="social-icon"
            fill="currentColor"
          >
            <path d="M12.9,10v-2.7h-4.5v16.7h4.6v-8.5c0-4.7,6.1-5.1,6.1,0v8.5h4.6v-10.3c-.1-7.9-8.6-7.7-10.8-3.7Z"/>
            <path d="M3,0C1.5,0,.3,1.2.3,2.7s1.3,2.7,2.7,2.7,2.7-1.2,2.7-2.7S4.6,0,3,0Z"/>
            <rect x=".8" y="7.3" width="4.6" height="16.7"/>
          </svg>
        </a>

        {/* Instagram Icon */}
        <a
          href="https://www.instagram.com/self.illusion/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram Profile"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="social-icon"
            fill="currentColor"
          >
            <path d="M12,2.2c3.2,0,3.6,0,4.9,0,3.2.2,4.8,1.7,4.9,4.9.1,1.3.1,1.7.1,4.8s0,3.6-.1,4.9c-.1,3.2-1.7,4.8-4.9,4.9-1.3.1-1.6.1-4.9.1s-3.6,0-4.8-.1c-3.3-.1-4.8-1.7-4.9-4.9,0-1.3,0-1.6,0-4.9s0-3.6,0-4.8c.2-3.2,1.7-4.8,4.9-4.9,1.2,0,1.6,0,4.8,0ZM12,0c-3.3,0-3.7,0-4.9.1C2.7.3.3,2.7,0,7.1c0,1.2,0,1.6,0,4.9s0,3.7.1,5c.2,4.4,2.6,6.8,7,7h4.9c3.3,0,3.7,0,5-.1,4.4-.2,6.8-2.6,7-7v-4.9c0-3.3,0-3.7-.1-4.9-.2-4.3-2.6-6.8-7-7-1.2,0-1.6,0-4.9,0ZM12,5.8c-3.4,0-6.2,2.8-6.2,6.2s2.8,6.2,6.2,6.2,6.2-2.8,6.2-6.2-2.8-6.2-6.2-6.2ZM12,16c-2.2,0-4-1.8-4-4s1.8-4,4-4,4,1.8,4,4-1.8,4-4,4ZM18.4,4.1c-.8,0-1.4.6-1.4,1.4s.6,1.5,1.4,1.5,1.4-.6,1.4-1.4-.6-1.5-1.4-1.5Z"/>
          </svg>
        </a>
      </div>
    </footer>
  )
}

export default Footer