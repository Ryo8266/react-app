import { useState, useEffect } from 'react';

const STORAGE_KEY = 'fb-dark-mode';

function getSystemDark() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function applyDark(isDark) {
  if (isDark) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

export function useDarkMode() {
  const [mode, setMode] = useState(() => {
    return localStorage.getItem(STORAGE_KEY) || 'off';
  });

  useEffect(() => {
    const isDark = mode === 'on' || (mode === 'auto' && getSystemDark());
    applyDark(isDark);
    localStorage.setItem(STORAGE_KEY, mode);
  }, [mode]);

  useEffect(() => {
    if (mode !== 'auto') return;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e) => applyDark(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [mode]);

  return { mode, setMode };
}
