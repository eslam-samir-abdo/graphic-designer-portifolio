// src/pages/Work.js
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useWorks } from '../hooks/useWorks';
import { useAdmin } from '../context/AdminContext';
import './Work.css';

const EMPTY = { title: '', cat: 'Branding', client: '', img: '' };
const FALLBACK_IMG = 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=700&q=70';

export default function Work() {
  const { works, addWork, updateWork, deleteWork } = useWorks();
  const { isAdmin, openLock } = useAdmin();

  const [filter, setFilter] = useState('All');
  const [open, setOpen] = useState(false);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState(EMPTY);
  const [err, setErr] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [lightbox, setLightbox] = useState(null);

  const pad = n => n < 10 ? '0' + n : '' + n;
  const cats = ['All', ...new Set(works.map(w => w.cat))];

  useEffect(() => {
    function onKey(e) { if (e.key === 'Escape') setLightbox(null); }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  function startAdd() {
    if (!isAdmin) { openLock(); return; }
    setEditId(null);
    setForm(EMPTY);
    setOpen(true);
  }

  function startEdit(w) {
    if (!isAdmin) { openLock(); return; }
    setEditId(w.id);
    setForm({ title: w.title, cat: w.cat, client: w.client, img: w.img });
    setOpen(true);
  }

  function handleSave() {
    if (!form.title.trim()) { setErr(true); setTimeout(() => setErr(false), 1000); return; }
    const data = {
      title: form.title.trim(),
      cat: form.cat,
      client: form.client.trim() || 'General',
      img: form.img.trim() || FALLBACK_IMG,
    };
    if (editId) updateWork(editId, data);
    else addWork(data);
    setOpen(false); setForm(EMPTY); setEditId(null);
  }

  function confirmDelete() {
    if (deleteTarget) deleteWork(deleteTarget.id);
    setDeleteTarget(null);
  }

  return (
    <>
      <div className="page-hero">
        <div className="page-ghost">WORK</div>
        <Link className="back-link" to="/">← Back Home</Link>
        <p className="page-label">Selected Work</p>
        <h1 className="page-title">Brands I've<br />Brought To <em>Life.</em></h1>
        <p className="page-sub">A collection of branding, social media design, and visual campaigns for businesses across Saudi Arabia and Egypt.</p>
      </div>

      <div className="toolbar">
        <div className="filter-bar">
          {cats.map(cat => (
            <button
              key={cat}
              className={`filter-btn${filter === cat ? ' active' : ''}`}
              onClick={() => setFilter(cat)}
            >{cat}</button>
          ))}
        </div>
        <div className="admin-bar">
          {isAdmin && (
            <>
              <span className="admin-badge"><span className="dot" />Admin Mode</span>
              <button className="btn-add" onClick={startAdd}>+ Add Project</button>
            </>
          )}
        </div>
      </div>

      <main className="work-main">
        <div className="work-grid">
          {works.length === 0 && (
            <div className="empty-state"><p>No projects yet.</p></div>
          )}
          {works.map((w, i) => {
            const hidden = filter !== 'All' && w.cat !== filter;
            return (
              <div
                className={`work-card${hidden ? ' hidden-filter' : ''}`}
                key={w.id}
                onClick={() => setLightbox(w)}
              >
                <img src={w.img} alt={w.title} loading="lazy" />
                <div className="work-card-info">
                  <div className="wc-num">{pad(i + 1)}</div>
                  <div className="wc-title">{w.title}</div>
                  <div className="wc-cat">{w.cat} — {w.client}</div>
                </div>
                {isAdmin && (
                  <div className="wc-admin-actions">
                    <button className="wc-btn edit" onClick={e => { e.stopPropagation(); startEdit(w); }}>✎ Edit</button>
                    <button className="wc-btn del" onClick={e => { e.stopPropagation(); setDeleteTarget(w); }}>✕</button>
                  </div>
                )}
              </div>
            );
          })}
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

      {/* ADD / EDIT MODAL */}
      {open && (
        <div className="modal-overlay open" onClick={e => { if (e.target.classList.contains('modal-overlay')) { setOpen(false); setForm(EMPTY); setEditId(null); } }}>
          <div className="modal-box">
            <h3 className="modal-title">{editId ? 'Edit Project' : 'New Project'}</h3>
            <label>Project Title *</label>
            <input
              className={err ? 'err' : ''}
              type="text" placeholder="e.g. Kalada"
              value={form.title} onChange={e => setForm({ ...form, title: e.target.value })}
            />
            <label>Category</label>
            <select value={form.cat} onChange={e => setForm({ ...form, cat: e.target.value })}>
              <option>Branding</option>
              <option>Social Media</option>
            </select>
            <label>Client / Industry</label>
            <input
              type="text" placeholder="e.g. Chemical Industry"
              value={form.client} onChange={e => setForm({ ...form, client: e.target.value })}
            />
            <label>Image URL</label>
            <input
              type="url" placeholder="https://..."
              value={form.img} onChange={e => setForm({ ...form, img: e.target.value })}
            />
            <div className="modal-actions">
              <button className="btn-save" onClick={handleSave}>{editId ? 'Update Project' : 'Save Project'}</button>
              <button className="btn-cancel" onClick={() => { setOpen(false); setForm(EMPTY); setEditId(null); }}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* DELETE CONFIRM MODAL */}
      {deleteTarget && (
        <div className="modal-overlay open" onClick={e => { if (e.target.classList.contains('modal-overlay')) setDeleteTarget(null); }}>
          <div className="modal-box confirm-box">
            <div className="confirm-icon">🗑️</div>
            <h3 className="confirm-title">Remove Project?</h3>
            <p className="confirm-text">You're about to remove <strong>{deleteTarget.title}</strong> permanently. This can't be undone.</p>
            <div className="modal-actions">
              <button className="btn-confirm-del" onClick={confirmDelete}>Yes, Remove It</button>
              <button className="btn-cancel-lock" onClick={() => setDeleteTarget(null)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* LIGHTBOX — full image view */}
      {lightbox && (
        <div className="lightbox-overlay" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Close">✕</button>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <img src={lightbox.img} alt={lightbox.title} />
            <div className="lightbox-caption">
              <div className="lightbox-title">{lightbox.title}</div>
              <div className="lightbox-meta">{lightbox.cat} — {lightbox.client}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
