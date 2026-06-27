# Hossam Samir — React Portfolio

## 🚀 Setup

```bash
# 1. إنشاء مشروع React جديد (Create React App)
npx create-react-app hossam-portfolio
cd hossam-portfolio

# 2. تنزيل react-router-dom
npm install react-router-dom

# 3. احذف كل اللي في src/ وانسخ الملفات دي مكانها

# 4. شغّل المشروع
npm start
```

افتح `http://localhost:3000` ✅

## 📁 Structure

```
src/
├── index.js                  ← Entry point
├── App.js                    ← Routes + providers
├── App.css                   ← Global styles (nav, modal, page-hero, shared)
├── context/
│   └── AdminContext.js       ← Shared admin login state (password: hossam2000)
├── hooks/
│   └── useWorks.js           ← localStorage-backed projects data
├── components/
│   ├── Navbar.js             ← Nav + hamburger + admin lock modal
│   └── Cursor.js             ← Custom cursor with VIEW state
└── pages/
    ├── Home.js / .css        ← Intro animation + recent projects + image-follow effect
    ├── Work.js / .css        ← Full project grid, filters, admin add/edit/delete
    ├── About.js / .css       ← Bio, timeline, education, languages
    └── Contact.js / .css     ← Contact form + socials
```

## ✨ Features

- **React Router** — client-side navigation between all pages
- **Admin Mode** — password `hossam2000`, lets Hossam add/edit/delete projects
- **localStorage** — projects persist across sessions, shared between Home and Work pages
- **Custom cursor** — grows + shows "VIEW" label when hovering project cards
- **Image-follow effect** on Home page's recent projects list
- **Category filters** on the Work page (Branding / Social Media)
- **Mobile hamburger menu** with fullscreen nav
- **Intro animation** — letter-by-letter name reveal with progress bar

## 📦 Dependencies

```json
{
  "react": "^18",
  "react-dom": "^18",
  "react-router-dom": "^6"
}
```

No UI framework — pure CSS with design tokens in `App.css`.
