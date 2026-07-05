import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useReveal } from '../hooks/useReveal';
import './Contact.css';

// Replace these with your EmailJS credentials after setup
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

export default function Contact() {
  const formRef = useRef(null);
  const ref = useReveal();
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY);
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="container">
        <div className="reveal">
          <span className="section-eyebrow">Let's Connect</span>
          <div className="gold-rule" />
          <h2 className="section-heading">Get In<br /><span>Touch</span></h2>
        </div>
        <div className="contact-layout">
          <div className="contact-info reveal-left delay-1">
            <p className="contact-intro">
              Whether you're looking for an AI engineering intern, have a collaboration in mind, or want to discuss research opportunities — I'd love to hear from you.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-item-icon">✉️</span>
                <div>
                  <span className="contact-item-label">Email</span>
                  <a href="mailto:gregorynadarrobert@gmail.com" className="contact-item-value">gregorynadarrobert@gmail.com</a>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-item-icon">📍</span>
                <div>
                  <span className="contact-item-label">Location</span>
                  <span className="contact-item-value">Mumbai, India</span>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-item-icon">💼</span>
                <div>
                  <span className="contact-item-label">Open To</span>
                  <span className="contact-item-value">Internships · Research · Graduate Opportunities</span>
                </div>
              </div>
            </div>
            <div className="contact-socials">
              <a href="https://linkedin.com/in/gregory-robert-7441512b5" target="_blank" rel="noreferrer" className="social-link">LinkedIn ↗</a>
              <a href="https://github.com/gregory-123-coder" target="_blank" rel="noreferrer" className="social-link">GitHub ↗</a>
            </div>
          </div>

          <div className="contact-form-wrap reveal-right delay-2">
            <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Your name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="your@email.com" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input id="subject" name="subject" type="text" required value={form.subject} onChange={handleChange} placeholder="What's this about?" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required rows={6} value={form.message} onChange={handleChange} placeholder="Tell me more..." />
              </div>
              <button type="submit" className="btn-primary contact-submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Send Message →'}
              </button>
              {status === 'success' && <p className="form-msg form-success">Message sent! I'll get back to you soon.</p>}
              {status === 'error' && <p className="form-msg form-error">Something went wrong. Try emailing directly.</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
