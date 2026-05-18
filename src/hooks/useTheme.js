import { useState, useEffect, useCallback, useRef } from 'react';

/**
 * Theme hook with circular reveal transition.
 * Uses the View Transitions API when available,
 * falls back to a clip-path overlay animation.
 */
export function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light';
    const stored = localStorage.getItem('meseta-theme');
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  });

  const toggleRef = useRef(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('meseta-theme', theme);
  }, [theme]);

  const toggle = useCallback((event) => {
    const newTheme = theme === 'light' ? 'dark' : 'light';

    // Get the click origin (button center) for the circle animation
    const button = event?.currentTarget;
    const rect = button?.getBoundingClientRect();
    const x = rect ? rect.left + rect.width / 2 : window.innerWidth - 40;
    const y = rect ? rect.top + rect.height / 2 : 40;

    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      setTheme(newTheme);
      return;
    }

    // Try View Transitions API first (Chrome 111+, Safari 18+)
    if (document.startViewTransition) {
      // Set CSS custom properties for the circle origin
      document.documentElement.style.setProperty('--toggle-x', `${x}px`);
      document.documentElement.style.setProperty('--toggle-y', `${y}px`);

      const transition = document.startViewTransition(() => {
        setTheme(newTheme);
      });

      return;
    }

    // Fallback: clip-path overlay animation
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position: fixed;
      inset: 0;
      z-index: 9999;
      background: ${newTheme === 'dark' ? 'oklch(0.17 0.012 55)' : 'oklch(0.93 0.02 80)'};
      clip-path: circle(0% at ${x}px ${y}px);
      transition: clip-path 0.6s cubic-bezier(0.22, 1, 0.36, 1);
      pointer-events: none;
    `;
    document.body.appendChild(overlay);

    // Force reflow then animate
    overlay.offsetHeight;
    overlay.style.clipPath = `circle(150% at ${x}px ${y}px)`;

    // Apply theme mid-animation and remove overlay when done
    setTimeout(() => {
      setTheme(newTheme);
    }, 250);

    overlay.addEventListener('transitionend', () => {
      overlay.remove();
    });
  }, [theme]);

  return { theme, toggle, toggleRef };
}
