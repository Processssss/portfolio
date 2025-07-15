// src/components/ThemeToggle.jsx
import { useEffect } from 'react';

function toggleTheme() {
  const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

function ThemeToggle() {
  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', saved);
  }, []);

  return <button onClick={toggleTheme}> Dark Mode </button>;
}

export default ThemeToggle;