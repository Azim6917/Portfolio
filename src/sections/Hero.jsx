import React, { useEffect, useState, useRef } from 'react';
import { personalInfo } from '../data/portfolioData';

const ROLES = personalInfo.roles;

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const parallaxRef = useRef(null);

  // Typewriter
  useEffect(() => {
    const current = ROLES[roleIndex];
    let t;
    if (!deleting) {
      if (charIndex < current.length) {
        t = setTimeout(() => { setDisplayed(current.slice(0, charIndex + 1)); setCharIndex(p => p + 1); }, 65);
      } else {
        t = setTimeout(() => setDeleting(true), 2200);
      }
    } else {
      if (charIndex > 0) {
        t = setTimeout(() => { setDisplayed(current.slice(0, charIndex - 1)); setCharIndex(p => p - 1); }, 38);
      } else {
        setDeleting(false);
        setRoleIndex(p => (p + 1) % ROLES.length);
      }
    }
    return () => clearTimeout(t);
  }, [charIndex, deleting, roleIndex]);

  // Parallax on scroll
  useEffect(() => {
    const el = parallaxRef.current;
    const onScroll = () => {
      if (!el) return;
      el.style.transform = `translateY(${window.scrollY * 0.28}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="mesh-bg dark:mesh-bg relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax background layer */}
      <div ref={parallaxRef} className="absolute inset-0 pointer-events-none">
        {/* Floating orbs */}
        <div className="orb orb-1 w-[420px] h-[420px] bg-[rgba(224,123,57,0.18)] top-[10%] right-[5%]" />
        <div className="orb orb-2 w-[300px] h-[300px] bg-[rgba(244,164,96,0.14)] bottom-[15%] left-[8%]" />
        <div className="orb orb-3 w-[200px] h-[200px] bg-[rgba(196,97,42,0.12)] top-[55%] right-[25%]" />

        {/* Dot grid */}
        <div className="absolute inset-0 dot-grid opacity-60" />

        {/* Diagonal accent line */}
        <svg className="absolute top-0 right-0 w-1/2 h-full opacity-[0.04] dark:opacity-[0.07]" viewBox="0 0 400 800" preserveAspectRatio="none">
          <line x1="400" y1="0" x2="0" y2="800" stroke="#E07B39" strokeWidth="2"/>
          <line x1="380" y1="0" x2="-20" y2="800" stroke="#E07B39" strokeWidth="1"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <div className="hero-1 inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{background:'rgba(224,123,57,0.12)', border:'1px solid rgba(224,123,57,0.25)'}}>
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
            <span className="font-['JetBrains_Mono'] text-xs text-[var(--accent)] tracking-wider">Available for opportunities</span>
          </div>

          <h1 className="hero-2 font-['Playfair_Display'] text-5xl md:text-6xl lg:text-7xl font-bold text-[#1C1917] dark:text-white leading-[1.1] mb-5">
            Hi, I'm<br />
            <span className="text-gradient">{personalInfo.name.split(' ')[0]}</span>{' '}
            <span>{personalInfo.name.split(' ')[1]}</span>
          </h1>

          <div className="hero-3 flex items-center gap-1 font-['JetBrains_Mono'] text-base md:text-lg mb-6 min-h-[2rem]">
            <span style={{color:'var(--accent)'}}>{displayed}</span>
            <span className="type-cursor" />
          </div>

          <p className="hero-4 font-['DM_Sans'] text-lg text-[#78716C] dark:text-[#A8A29E] max-w-md leading-relaxed mb-10">
            {personalInfo.tagline}
          </p>

          <div className="hero-5 flex flex-wrap gap-4 mb-10">
            <a href="#projects" onClick={(e) => go(e, '#projects')} className="btn-glow font-['DM_Sans'] text-sm">
              <span>View My Work</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </a>
            <a href="#contact" onClick={(e) => go(e, '#contact')} className="btn-outline-glow font-['DM_Sans'] text-sm">
              <span>Let's Talk</span>
            </a>
          </div>

          {/* Social row */}
          <div className="hero-5 flex items-center gap-5">
            {[
              { href: personalInfo.github, label: 'GitHub', icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg> },
              { href: personalInfo.linkedin, label: 'LinkedIn', icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
            ].map(({ href, label, icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                className="w-10 h-10 flex items-center justify-center rounded-xl text-[#78716C] dark:text-[#A8A29E] hover:text-[var(--accent)] transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                style={{'--hover-bg':'rgba(224,123,57,0.1)'}}
                onMouseEnter={e => e.currentTarget.style.background='rgba(224,123,57,0.1)'}
                onMouseLeave={e => e.currentTarget.style.background='transparent'}
              >
                {icon}
              </a>
            ))}
            <span className="w-px h-5 bg-[rgba(224,123,57,0.2)]" />
            <a href={`mailto:${personalInfo.email}`}
              className="font-['JetBrains_Mono'] text-xs text-[#78716C] dark:text-[#A8A29E] hover:text-[var(--accent)] transition-colors">
              {personalInfo.email}
            </a>
          </div>
        </div>

        {/* Avatar */}
        <div className="hero-avatar flex justify-center md:justify-end">
          <div className="relative w-72 h-72 md:w-80 md:h-80">
            {/* Outer spinning ring */}
            <div className="spin-slow absolute inset-0 rounded-full border-2 border-dashed"
              style={{borderColor:'rgba(224,123,57,0.3)'}} />
            {/* Inner counter-spin ring */}
            <div className="spin-slow-rev absolute inset-6 rounded-full border"
              style={{borderColor:'rgba(224,123,57,0.15)'}} />

            {/* Photo / initials */}
            <div className="absolute inset-10 rounded-full overflow-hidden flex items-center justify-center"
              style={{background:'linear-gradient(135deg, rgba(224,123,57,0.2), rgba(244,164,96,0.15))', border:'2px solid rgba(224,123,57,0.2)', boxShadow:'0 20px 60px rgba(224,123,57,0.2), inset 0 1px 0 rgba(255,255,255,0.3)'}}>
              {personalInfo.photo ? (
                <img src={personalInfo.photo} alt={personalInfo.name} className="w-full h-full object-cover" />
              ) : (
                <div className="text-center px-4">
                  <div className="font-['Playfair_Display'] text-5xl font-bold text-gradient">
                    {personalInfo.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <p className="font-['JetBrains_Mono'] text-[9px] text-[#A8A29E] mt-2 leading-relaxed">
                    Add photo in<br/>portfolioData.js
                  </p>
                </div>
              )}
            </div>

            {/* Floating badges */}
            <div className="badge-1 absolute -bottom-6 -right-4 glass-card px-3 py-2 flex items-center gap-2" style={{borderRadius:12}}>
              <span className="text-xl">☁️</span>
              <div>
                <p className="font-['JetBrains_Mono'] text-[10px] font-bold text-[#1C1917] dark:text-white leading-none">AWS</p>
                <p className="font-['JetBrains_Mono'] text-[9px] text-[var(--accent)] leading-none mt-0.5">Certified</p>
              </div>
            </div>
            <div className="badge-2 absolute -top-4 -left-6 glass-card px-3 py-2 flex items-center gap-2" style={{borderRadius:12}}>
              <span className="text-xl">⚡</span>
              <p className="font-['JetBrains_Mono'] text-[10px] font-bold text-[#1C1917] dark:text-white">Full Stack</p>
            </div>
            <div className="badge-1 absolute top-1/2 -right-10 glass-card px-3 py-2 flex items-center gap-1.5" style={{borderRadius:12, animationDelay:'2s'}}>
              <span className="text-base">🚀</span>
              <p className="font-['JetBrains_Mono'] text-[10px] font-bold text-[#1C1917] dark:text-white">DevOps</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-['JetBrains_Mono'] text-[10px] tracking-[0.2em] uppercase text-[#A8A29E]">Scroll</span>
        <div className="w-5 h-8 rounded-full border-2 flex items-start justify-center pt-1.5" style={{borderColor:'rgba(224,123,57,0.4)'}}>
          <div className="w-1 h-1.5 rounded-full bg-[var(--accent)]"
            style={{animation:'scrollDot 1.8s ease-in-out infinite'}} />
        </div>
        <style>{`@keyframes scrollDot{0%,100%{transform:translateY(0);opacity:1}60%{transform:translateY(10px);opacity:0}}`}</style>
      </div>
    </section>
  );
};

export default Hero;
