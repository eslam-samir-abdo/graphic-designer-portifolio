// src/App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cursor from './components/Cursor';
import PageLoader from './components/PageLoader';
import { AdminProvider } from './context/AdminContext';
import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';

export default function App() {
  return (
    <AdminProvider>
      <BrowserRouter>
        <div className="noise"></div>
        <Cursor />
        <PageLoader />
        <Navbar />
        <Routes>
          <Route path="/"        element={<Home />}    />
          <Route path="/work"    element={<Work />}    />
          <Route path="/about"   element={<About />}   />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </AdminProvider>
  );
}
