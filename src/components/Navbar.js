// src/components/Navbar.js
import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useAdmin } from '../context/AdminContext';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { isAdmin, lockOpen, pwd, pwdErr, openLock, tryUnlock, logout, closeLock, setPwd } = useAdmin();

  useEffect(() => { setOpen(false); }, [location]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const link = ({ isActive }) => isActive ? 'active' : '';

  return (
    <>
      <nav>
        <NavLink className="nav-logo" to="/">HS<span style={{ color: 'var(--orange)' }}>.</span></NavLink>
        <div className="nav-right">
          <ul className="nav-links">
            <li><NavLink to="/work"    className={link}>Work</NavLink></li>
            <li><NavLink to="/about"   className={link}>About</NavLink></li>
            <li><NavLink to="/contact" className={link}>Contact</NavLink></li>
          </ul>
          {isAdmin ? (
            <button className="admin-icon unlocked" onClick={logout} title="Logout from Admin Mode">🔓</button>
          ) : (
            <button className="admin-icon" onClick={openLock} title="Admin Access">🔒</button>
          )}
          <button className={`hamburger${open ? ' open' : ''}`} onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${open ? ' open' : ''}`}>
        <nav className="mobile-nav">
          <NavLink to="/"        className={link}>Home</NavLink>
          <NavLink to="/work"    className={link}>Work</NavLink>
          <NavLink to="/about"   className={link}>About</NavLink>
          <NavLink to="/contact" className={link}>Contact</NavLink>
        </nav>
        <button className="mobile-admin-btn" onClick={isAdmin ? logout : openLock}>
          {isAdmin ? '🔓 Logout Admin' : '🔒 Admin Access'}
        </button>
        <p className="mobile-menu-foot">© 2025 Hossam Samir</p>
      </div>

      {lockOpen && (
        <div className="modal-overlay open" onClick={e => { if (e.target.classList.contains('modal-overlay')) closeLock(); }}>
          <div className="modal-box">
            <div className="lock-icon">🔒</div>
            <h3 className="modal-title">Admin Access</h3>
            <label>Password</label>
            <input
              className={pwdErr ? 'err' : ''}
              type="password" placeholder="Enter password" autoComplete="off"
              value={pwd}
              onChange={e => setPwd(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter') tryUnlock(); }}
              autoFocus
            />
            <div className="modal-actions">
              <button className="btn-unlock" onClick={tryUnlock}>Unlock</button>
              <button className="btn-cancel-lock" onClick={closeLock}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
