// src/pages/About.js
import { Link } from 'react-router-dom';
import { getAge } from '../utils/date';
import './About.css';

export default function About() {
  return (
    <>
      <div className="page-hero">
        <div className="page-ghost">ABOUT</div>
        <Link className="back-link" to="/">← Back Home</Link>
        <p className="page-label">Who I Am</p>
        <h1 className="page-title">Hossam<br /><em>Samir.</em></h1>
      </div>

      <main className="about-main">

        <div className="about-intro">
          <div>
            <p>My name is <strong>Hossam Samir Abdu</strong>. I'm {getAge()} years old, living in Monshaat El Qanater, Giza. I study Architecture at Cairo University's Faculty of Engineering — but design is where my heart actually is.</p>
          </div>
          <div>
            <p>I'm a sports enthusiast (football, always), a gamer, and someone genuinely obsessed with esports and its championships. That same competitive drive shows up in how I approach every brand I design for — I want it to win attention, and keep it.</p>
          </div>
        </div>

        <div className="timeline-sec">
          <p className="sec-eyebrow">Career</p>
          <h2 className="sec-title">Experience</h2>

          <div className="tl-item">
            <div className="tl-date">June 2024 — Present</div>
            <div>
              <div className="tl-role">Graphic Designer</div>
              <div className="tl-org">Ocoda &amp; Bevatel — Full-Time</div>
              <div className="tl-desc">Working full-time as a junior graphic designer across two brands, producing campaign visuals, social content, and brand assets.</div>
            </div>
          </div>

          <div className="tl-item">
            <div className="tl-date">Jan 2024</div>
            <div>
              <div className="tl-role">Intern Graphic Designer</div>
              <div className="tl-org">Masar Agency for Advertising</div>
              <div className="tl-desc">Started my agency career producing advertising visuals and learning the pace of real client work.</div>
            </div>
          </div>

          <div className="tl-item">
            <div className="tl-date">2021 — 2023</div>
            <div>
              <div className="tl-role">Team Leader, Graphic Designer & Conference Organizer</div>
              <div className="tl-org">Leads Media — Conference Management Agency</div>
              <div className="tl-desc">Spent 3 months responsible for the full suite of designs and printed materials for congresses and conferences, while also organizing the events themselves on the ground.</div>
            </div>
          </div>
        </div>

        <div className="exp-sec">
          <p className="sec-eyebrow">Skills</p>
          <h2 className="sec-title">Expertise</h2>
          <div className="exp-grid">
            <div className="exp-box"><span className="n">01</span><div className="t">Graphic Design</div></div>
            <div className="exp-box"><span className="n">02</span><div className="t">Branding Design</div></div>
            <div className="exp-box"><span className="n">03</span><div className="t">Video Editing</div></div>
            <div className="exp-box"><span className="n">04</span><div className="t">Conference Organizing</div></div>
            <div className="exp-box"><span className="n">05</span><div className="t">Ushering</div></div>
          </div>
        </div>

        <div className="split-sec">
          <div className="split-col">
            <h3>Education</h3>
            <div className="edu-item">
              <div className="edu-name">Architecture</div>
              <div className="edu-meta">CAIRO UNIVERSITY — 2018–2025</div>
            </div>
            <div className="edu-item">
              <div className="edu-name">Brand Design Master Class</div>
              <div className="edu-meta">UDEMY COURSES — 2022–2023</div>
            </div>
          </div>
          <div className="split-col">
            <h3>Languages</h3>
            <div className="lang-row">
              <span className="lang-name">Arabic</span>
              <div className="lang-bar"><span style={{ width: '100%' }}></span></div>
            </div>
            <div className="lang-row">
              <span className="lang-name">English</span>
              <div className="lang-bar"><span style={{ width: '80%' }}></span></div>
            </div>
          </div>
        </div>

        <div className="about-cta">
          <h2>Got a brand<br />that needs <em>a voice?</em></h2>
          <Link className="cta-btn" to="/contact">Let's Talk →</Link>
        </div>

      </main>

      <footer style={{ margin: '0 -5vw' }}>
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
