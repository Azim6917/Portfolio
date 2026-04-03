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
  const cursorRef = useRef(null);
  const progressRef = useRef(null);
  const rafRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const progressEl = document.getElementById('scroll-progress');
    const cursorEl = document.getElementById('cursor-glow');

    const onScroll = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (progressEl) progressEl.style.transform = `scaleX(${scrolled / total})`;
    };

    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const animateCursor = () => {
      if (cursorEl) {
        cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * 0.08;
        cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * 0.08;
        cursorEl.style.transform = `translate(${cursorPos.current.x - 250}px, ${cursorPos.current.y - 250}px)`;
      }
      rafRef.current = requestAnimationFrame(animateCursor);
    };

    // Scroll reveal
    const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
    );
    revealEls.forEach((el) => revealObserver.observe(el));

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    rafRef.current = requestAnimationFrame(animateCursor);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafRef.current);
      revealObserver.disconnect();
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
