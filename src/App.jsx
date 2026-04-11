import React, { useEffect, useRef } from 'react';
// import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';

const ScrollEffects = () => {
  useEffect(() => {
    const cursorEl = document.getElementById('cursor-glow');
    const progressEl = document.getElementById('scroll-progress');
    const mousePos = { x: 0, y: 0 };
    const cursorPos = { x: 0, y: 0 };
    let raf;

    const onScroll = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (progressEl) progressEl.style.transform = `scaleX(${scrolled / total})`;
    };

    const onMouseMove = (e) => {
      mousePos.x = e.clientX;
      mousePos.y = e.clientY;
    };

    const animateCursor = () => {
      if (cursorEl) {
        cursorPos.x += (mousePos.x - cursorPos.x) * 0.08;
        cursorPos.y += (mousePos.y - cursorPos.y) * 0.08;
        cursorEl.style.transform = `translate(${cursorPos.x - 250}px, ${cursorPos.y - 250}px)`;
      }
      raf = requestAnimationFrame(animateCursor);
    };

    // ── Reveal observer that re-scans every 300ms for late-rendered elements ──
    const observed = new WeakSet();

    const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('revealed');
        }, 30);
      } else {
        // Remove class when element leaves viewport so it re-animates on scroll back
        entry.target.classList.remove('revealed');
      }
    });
  },
  { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
);
    const scanAndObserve = () => {
  const els = document.querySelectorAll(
    '.reveal, .reveal-left, .reveal-right, .reveal-scale'
  );
  els.forEach((el) => observer.observe(el));
};

    // Initial scan + periodic rescan
    scanAndObserve();
    const interval = setInterval(scanAndObserve, 300);

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    raf = requestAnimationFrame(animateCursor);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(raf);
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  return null;
};

const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-500 relative">
        <div id="scroll-progress" />
        <div id="cursor-glow" />
        <ScrollEffects />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
