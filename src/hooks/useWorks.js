// src/hooks/useWorks.js
import { useState, useEffect } from 'react';

const STORAGE_KEY = 'hossam_works_v1';

const DEFAULT_WORKS = [
  { id:1, title:'Safwa School',           cat:'Social Media', client:'Education',         img:'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=700&q=70' },
  { id:2, title:'Somou Schools',          cat:'Social Media', client:'Education',         img:'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=700&q=70' },
  { id:3, title:'Rowad El Salam',         cat:'Social Media', client:'Education',         img:'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=700&q=70' },
  { id:4, title:'Kalada',                 cat:'Branding',     client:'Chemical Industry', img:'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=700&q=70' },
  { id:5, title:'El Fatira El Demshqyia', cat:'Social Media', client:'Food & Restaurant',  img:'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=700&q=70' },
  { id:6, title:'Mosawem',                cat:'Social Media', client:'Real Estate',        img:'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=700&q=70' },
  { id:7, title:'Netaq El Gawzaa',        cat:'Social Media', client:'Retail / Mobile',    img:'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=700&q=70' },
  { id:8, title:'Hossamy',                cat:'Branding',     client:'Personal Brand',     img:'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=700&q=70' },
  { id:9, title:'Aseel Chocolate House',  cat:'Branding',     client:'Food & Retail',      img:'https://images.unsplash.com/photo-1511381939415-e44015466834?w=700&q=70' },
];

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_WORKS));
  return DEFAULT_WORKS;
}

export function useWorks() {
  const [works, setWorks] = useState(load);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(works));
  }, [works]);

  function addWork(data) {
    const newId = works.length ? Math.max(...works.map(w => w.id)) + 1 : 1;
    setWorks(prev => [...prev, { id: newId, ...data }]);
  }

  function updateWork(id, data) {
    setWorks(prev => prev.map(w => w.id === id ? { ...w, ...data } : w));
  }

  function deleteWork(id) {
    setWorks(prev => prev.filter(w => w.id !== id));
  }

  return { works, addWork, updateWork, deleteWork };
}
