import { useEffect, useRef, useCallback } from 'react';

/**
 * Intersection Observer hook for scroll-driven reveals.
 * Adds 'is-visible' class when element enters viewport.
 * Respects prefers-reduced-motion.
 * 
 * Uses a more aggressive trigger to prevent content from staying hidden.
 */
export function useReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      if (ref.current) {
        ref.current.classList.add('is-visible');
        const children = ref.current.querySelectorAll('.reveal');
        children.forEach((child) => child.classList.add('is-visible'));
      }
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: options.threshold ?? 0.05,
        rootMargin: options.rootMargin ?? '0px 0px -20px 0px',
      }
    );

    const el = ref.current;
    if (el) {
      // Observe the element itself if it has the reveal class
      if (el.classList.contains('reveal')) {
        observer.observe(el);
      }
      // Also observe all child reveal elements
      const children = el.querySelectorAll('.reveal');
      children.forEach((child) => observer.observe(child));
    }

    return () => {
      if (el) {
        observer.unobserve(el);
        const children = el.querySelectorAll('.reveal');
        children.forEach((child) => observer.unobserve(child));
      }
    };
  }, [options.threshold, options.rootMargin]);

  return ref;
}

/**
 * Observe multiple children with staggered reveal.
 * Sets up observers for each child with .reveal class.
 */
export function useRevealChildren(containerRef) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const container = containerRef.current;
    if (!container) return;

    const children = container.querySelectorAll('.reveal');

    if (prefersReducedMotion) {
      children.forEach((child) => child.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    );

    children.forEach((child) => observer.observe(child));

    return () => {
      children.forEach((child) => observer.unobserve(child));
    };
  }, [containerRef]);
}

/**
 * Global reveal initializer — catches any reveal elements that
 * hooks might miss. Call once at app level.
 */
export function useGlobalReveal(dependencies = []) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      document.querySelectorAll('.reveal').forEach((el) => {
        el.classList.add('is-visible');
      });
      return;
    }

    // Fallback: observe ALL .reveal elements in the document
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    );

    // Slight delay to ensure DOM is ready
    const timer = setTimeout(() => {
      document.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => {
        observer.observe(el);
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, dependencies);
}
