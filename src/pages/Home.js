// src/pages/Home.js
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useWorks } from '../hooks/useWorks';
import { getAge } from '../utils/date';
import './Home.css';

export default function Home() {
  const { works } = useWorks();
  const [visible, setVisible] = useState(false);
  const [introHide, setIntroHide] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setIntroHide(true), 2600);
    const t2 = setTimeout(() => setVisible(true), 2750);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const pad = n => n < 10 ? '0' + n : '' + n;
  const recent = [...works].slice(-6).reverse();

  return (
    <>
      <div className={`intro${introHide ? ' hide' : ''}`}>
        <div className="intro-bar"></div>
        <div className="intro-word">
          {['H','O','S','S','A','M'].map((ch, i) => (
            <span key={i} style={{ animationDelay: `${0.1 + i * 0.06}s` }}>{ch}</span>
          ))}
        </div>
      </div>

      <div className={`home-wrap${visible ? ' visible' : ''}`}>

        <section className="hero">
          <p className="hero-eyebrow"><span className="pulse"></span>Available for freelance & work — Giza, Egypt</p>
          <h1 className="hero-title">
            <div className="line"><span>BRAND</span></div>
            <div className="line"><span>&amp; GRAPHIC</span></div>
            <div className="line"><span>DESIGNER.</span></div>
          </h1>
          <div className="hero-meta">
            <p className="hero-desc">Hossam Samir — I design brand identities, social campaigns and visual systems for businesses across Saudi Arabia and beyond.</p>
            <div className="hero-tags">
              <span className="tag">Branding</span>
              <span className="tag">Social Media</span>
              <span className="tag">Art Direction</span>
            </div>
          </div>
        </section>

        <div className="marquee-wrap">
          <div className="marquee">
            BRAND IDENTITY <span>★</span> SOCIAL MEDIA DESIGN <span>★</span> ART DIRECTION <span>★</span> VIDEO EDITING <span>★</span> BRAND IDENTITY <span>★</span> SOCIAL MEDIA DESIGN <span>★</span> ART DIRECTION <span>★</span> VIDEO EDITING <span>★</span>
          </div>
        </div>

        <section className="work-sec">
          <div className="sec-head">
            <div>
              <p className="sec-eyebrow">01 — Selected Work</p>
              <h2 className="sec-title">Recent<br />Projects</h2>
            </div>
            <Link className="sec-link" to="/work">View All Work →</Link>
          </div>
          <div className="work-list">
            {recent.map((w, i) => (
              <Link className="work-row" to="/work" key={w.id}>
                <div className="work-num">{pad(i + 1)}</div>
                <div className="work-title">{w.title}</div>
                <div className="work-cat">{w.cat} — {w.client}</div>
                <div className="work-arrow">↗</div>
              </Link>
            ))}
          </div>
        </section>

        <section className="about-teaser">
          <div className="sec-head">
            <div>
              <p className="sec-eyebrow">02 — About</p>
              <h2 className="sec-title">Who's<br />Behind This</h2>
            </div>
            <Link className="sec-link" to="/about">Full Story →</Link>
          </div>
          <div className="at-grid">
            <p className="at-text">
              I'm <strong>Hossam Samir</strong>, a {getAge()}-year-old brand &amp; graphic designer based in Giza, Egypt. I studied Architecture at Cairo University, but design found me through conference branding, social media campaigns, and a deep love for building visual systems that actually work.
              <br /><br />
              I've led design for international school groups, real estate brands, and retail chains across Saudi Arabia — turning ideas into identities people remember.
            </p>
            <div className="at-stats">
              <div className="at-stat"><div className="at-num">{getAge()}<em>yo</em></div><div className="at-label">Architecture Student, Cairo University</div></div>
              <div className="at-stat"><div className="at-num">3<em>+</em></div><div className="at-label">Years in Graphic & Brand Design</div></div>
              <div className="at-stat"><div className="at-num">{works.length}<em>+</em></div><div className="at-label">Brands & Agencies Worked With</div></div>
            </div>
          </div>
        </section>

        <section className="skills-strip">
          <p className="sec-eyebrow">03 — Expertise</p>
          <h2 className="sec-title" style={{ marginBottom: '3rem' }}>What I Bring<br />To The Table</h2>
          <div className="skills-grid">
            <div className="skill-box"><span className="n">01</span><div className="t">Graphic Design</div></div>
            <div className="skill-box"><span className="n">02</span><div className="t">Branding Design</div></div>
            <div className="skill-box"><span className="n">03</span><div className="t">Video Editing</div></div>
            <div className="skill-box"><span className="n">04</span><div className="t">Conference Organizing</div></div>
            <div className="skill-box"><span className="n">05</span><div className="t">Ushering & Events</div></div>
          </div>
        </section>

        <section className="cta-sec">
          <h2 className="cta-title">Let's make<br />something <em>seen.</em></h2>
          <div className="cta-row">
            <Link className="cta-btn solid" to="/contact">Start a Project →</Link>
            <a className="cta-btn ghost" href="https://www.behance.net/2_02_hosamira" target="_blank" rel="noreferrer">View Behance ↗</a>
          </div>
        </section>

        <footer>
          <p>© 2025 Hossam Samir — Brand & Graphic Designer</p>
          <div className="footer-socials">
            <a href="https://www.behance.net/2_02_hosamira" target="_blank" rel="noreferrer">Behance</a>
            <a href="mailto:hossamsamirabdoo@gmail.com">Email</a>
            <a href="tel:01098922821">Phone</a>
          </div>
        </footer>
      </div>
    </>
  );
}
