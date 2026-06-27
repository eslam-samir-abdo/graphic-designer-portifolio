// src/pages/Contact.js
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', type: '', msg: '' });
  const [toast, setToast] = useState('');
  const [sent, setSent] = useState(false);

  function showToast(msg, dur = 3500) {
    setToast(msg);
    setTimeout(() => setToast(''), dur);
  }

  function handleSend() {
    if (!form.name || !form.email || !form.msg) {
      showToast('Please fill in the required fields.');
      return;
    }
    const type = form.type || 'New project inquiry';
    const body = `Name: ${form.name}\nEmail: ${form.email}\nProject Type: ${type}\n\n${form.msg}`;
    window.location.href = `mailto:hossamsamirabdoo@gmail.com?subject=${encodeURIComponent(type)}&body=${encodeURIComponent(body)}`;
    setSent(true);
    showToast('Opening your email client...', 4000);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', email: '', type: '', msg: '' });
    }, 3000);
  }

  return (
    <>
      {toast && <div className="toast show"><span>{toast}</span></div>}

      <div className="page-hero">
        <div className="page-ghost">TALK</div>
        <Link className="back-link" to="/">← Back Home</Link>
        <p className="page-label">Get In Touch</p>
        <h1 className="page-title">Let's Make<br />Something <em>Seen.</em></h1>
      </div>

      <main className="contact-main">
        <div className="contact-grid">

          <div>
            <p className="tagline">Have a brand, an event, or a campaign that needs design? <strong>I'm currently available</strong> for freelance and full-time work.</p>

            <div className="contact-list">
              <div className="contact-row"><span className="cr-label">Email</span><a className="cr-value" href="mailto:hossamsamirabdoo@gmail.com" style={{ fontSize: '.95rem' }}>hossamsamirabdoo@gmail.com</a></div>
              <div className="contact-row"><span className="cr-label">Phone</span><a className="cr-value" href="tel:01098922821">01098922821</a></div>
              <div className="contact-row"><span className="cr-label">Location</span><span className="cr-value" style={{ fontSize: '.95rem' }}>Giza, Egypt</span></div>
            </div>

            <div className="avail">
              <span className="avail-dot"></span>
              <span className="avail-text">Open to new projects</span>
            </div>

            <div className="socials-wrap">
              <p className="socials-label">Find me online</p>
              <div className="socials">
                <a className="social-btn" href="https://www.behance.net/2_02_hosamira" target="_blank" rel="noreferrer">Behance ↗</a>
                <a className="social-btn" href="#" target="_blank" rel="noreferrer">Instagram ↗</a>
                <a className="social-btn" href="#" target="_blank" rel="noreferrer">Facebook ↗</a>
              </div>
            </div>
          </div>

          <div>
            <p className="form-title">Start a project</p>
            <div className="form-row">
              <div className="form-group"><label>Name *</label><input type="text" placeholder="Your name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} /></div>
              <div className="form-group"><label>Email *</label><input type="email" placeholder="you@example.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} /></div>
            </div>
            <div className="form-group">
              <label>Project Type</label>
              <select value={form.type} onChange={e => setForm({ ...form, type: e.target.value })}>
                <option value="">Select one...</option>
                <option>Brand Identity</option>
                <option>Social Media Design</option>
                <option>Video Editing</option>
                <option>Conference / Event</option>
                <option>Something Else</option>
              </select>
            </div>
            <div className="form-group"><label>Message *</label><textarea placeholder="Tell me about your project..." value={form.msg} onChange={e => setForm({ ...form, msg: e.target.value })} /></div>
            <button className={`btn-send${sent ? ' sent' : ''}`} onClick={handleSend}>
              {sent ? 'Opening Email Client ✓' : 'Send Message →'}
            </button>
          </div>

        </div>
      </main>

      <footer>
        <p>© 2025 Hossam Samir — Brand & Graphic Designer</p>
        <div className="footer-socials">
          <a href="https://www.behance.net/2_02_hosamira" target="_blank" rel="noreferrer">Behance</a>
          <a href="mailto:hossamsamirabdoo@gmail.com">Email</a>
          <a href="tel:01098922821">Phone</a>
        </div>
      </footer>
    </>
  );
}
