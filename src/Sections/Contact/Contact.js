import React, { useState } from 'react';
import './Contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    website: '', // Honeypot field
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    // Basic client-side bot check (honeypot)
    if (formData.website) {
       // If honeypot is filled, pretend success but do nothing
       console.log('Bot detected');
       setStatus('success');
       setFormData({ name: '', email: '', message: '', website: '' });
       return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '', website: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-content-wrapper">
            <div className="contact-info">
                <h2>Let&apos;s Connect</h2>
                <p className="contact-desc">
                I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                </p>
                <div className="contact-details">
                    <div className="detail-item">
                        <span>📧</span>
                        <a style={{textDecoration: 'underline'}} href="mailto:gp03052000@gmail.com">gp03052000@gmail.com</a>
                    </div>
                    <div className="detail-item">
                        <span style={{filter: 'invert(1)'}}>📞</span>
                        <a style={{textDecoration: 'underline'}} href="tel:+971503067201">+971 50 306 7201</a>
                    </div>
                     {/* Add more details/socials here if needed */}
                </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
            {/* Honeypot field - hidden from real users */}
            <div className="form-group honeypot" style={{ display: 'none' }}>
                <label htmlFor="website">Website</label>
                <input
                type="text"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                tabIndex="-1"
                autoComplete="off"
                />
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    />
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="What's on your mind?"
                rows="4"
                ></textarea>
            </div>

            <button type="submit" disabled={status === 'loading'} className="submit-btn">
                {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
                <p className="status-msg success">Message sent successfully!</p>
            )}
            {status === 'error' && (
                <p className="status-msg error">Failed to send message. Please try again.</p>
            )}
            </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
