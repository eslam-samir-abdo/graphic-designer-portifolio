// src/components/Cursor.js
import { useEffect, useRef } from 'react';

export default function Cursor() {
  const ref = useRef(null);

  useEffect(() => {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      document.body.classList.add('touch');
      return;
    }
    const el = ref.current;
    const move = e => { el.style.left = e.clientX + 'px'; el.style.top = e.clientY + 'px'; };
    const over = e => {
      if (e.target.closest('.work-card')) { el.classList.add('view'); el.classList.remove('big'); }
      else if (e.target.closest('a,button')) { el.classList.add('big'); el.classList.remove('view'); }
      else { el.classList.remove('big'); el.classList.remove('view'); }
    };
    document.addEventListener('mousemove', move);
    document.addEventListener('mouseover', over);
    return () => {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', over);
    };
  }, []);

  return (
    <div id="cur" ref={ref}>
      <span className="view-label">VIEW</span>
    </div>
  );
}
