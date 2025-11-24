'use client';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <p className="section-category">CONNECT</p>
          <h2 className="section-title">LET'S COLLABORATE</h2>
          <p className="section-subtitle">Have a project in mind? I'd love to hear about it.</p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-card-header">
                <h3>GET IN TOUCH</h3>
                <div className="contact-divider"></div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m22 2-7 20-4-9-9-4 20-7z"/>
                  </svg>
                </div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <a href="mailto:vaibhavingleg@gmail.com">vaibhavingleg@gmail.com</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div className="contact-details">
                  <h4>Location</h4>
                  <p>India, Maharashtra, Nagpur</p>
                </div>
              </div>
              <div className="contact-social">
                <a href="https://github.com/vaibhavingle2007" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://instagram.com/ninjavex_" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <svg width="20" height="20" viewBox="0 0 64 64" fill="currentColor">
                    <path d="M 21.580078 7 C 13.541078 7 7 13.544938 7 21.585938 L 7 42.417969 C 7 50.457969 13.544938 57 21.585938 57 L 42.417969 57 C 50.457969 57 57 50.455062 57 42.414062 L 57 21.580078 C 57 13.541078 50.455062 7 42.414062 7 L 21.580078 7 z M 47 15 C 48.104 15 49 15.896 49 17 C 49 18.104 48.104 19 47 19 C 45.896 19 45 18.104 45 17 C 45 15.896 45.896 15 47 15 z M 32 19 C 39.17 19 45 24.83 45 32 C 45 39.17 39.169 45 32 45 C 24.83 45 19 39.169 19 32 C 19 24.831 24.83 19 32 19 z M 32 23 C 27.029 23 23 27.029 23 32 C 23 36.971 27.029 41 32 41 C 36.971 41 41 36.971 41 32 C 41 27.029 36.971 23 32 23 z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <form className="contact-form" id="contact-form" action="https://formspree.io/f/mldnwjal" method="POST">
            <div className="form-group">
              <input type="text" name="name" placeholder="YOUR NAME" required />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="YOUR EMAIL" required />
            </div>
            <div className="form-group">
              <input type="text" name="subject" placeholder="SUBJECT" required />
            </div>
            <div className="form-group">
              <textarea name="message" placeholder="YOUR MESSAGE" rows={5} required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">SEND MESSAGE</button>
          </form>
        </div>
      </div>
    </section>
  );
}
