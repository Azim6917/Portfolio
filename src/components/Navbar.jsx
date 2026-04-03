import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { personalInfo } from '../data/portfolioData';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = navLinks.map((l) => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 140) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const go = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const initials = personalInfo.name.split(' ').map((n) => n[0]).join('');

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'py-3 bg-[#F8F3EC]/90 dark:bg-[#0F172A]/90 backdrop-blur-xl shadow-sm border-b border-[rgba(224,123,57,0.1)]'
          : 'py-5 bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#hero" onClick={(e) => go(e, '#hero')}
          className="font-['Playfair_Display'] text-2xl font-bold text-[#1C1917] dark:text-white hover:text-[var(--accent)] transition-colors">
          <span style={{color:'var(--accent)'}}>{initials[0]}</span>{initials[1]}
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => {
            const id = href.replace('#', '');
            return (
              <li key={label}>
                <a href={href} onClick={(e) => go(e, href)}
                  className={`nav-item ${activeSection === id ? 'active' : ''}`}>
                  {label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <button onClick={toggleTheme} aria-label="Toggle theme"
            className="w-9 h-9 flex items-center justify-center rounded-xl text-[#78716C] dark:text-[#A8A29E] hover:text-[var(--accent)] hover:bg-[rgba(224,123,57,0.1)] transition-all">
            {isDark
              ? <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" strokeWidth="2"/><path strokeWidth="2" strokeLinecap="round" d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
              : <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" strokeLinecap="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
            }
          </button>

          <a href={`mailto:${personalInfo.email}`}
            className="hidden md:inline-flex btn-glow text-sm font-['DM_Sans']">
            <span>Hire Me</span>
          </a>

          <button onClick={() => setMenuOpen(p => !p)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-xl text-[#78716C] dark:text-[#A8A29E] hover:bg-[rgba(224,123,57,0.1)] transition-all">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>}
            </svg>
          </button>
        </div>
      </nav>

      <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
        <ul className="px-6 pb-6 pt-2 flex flex-col gap-4 bg-[#F8F3EC]/95 dark:bg-[#0F172A]/95 backdrop-blur-xl">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a href={href} onClick={(e) => go(e, href)} className="nav-item block py-1">{label}</a>
            </li>
          ))}
          <li><a href={`mailto:${personalInfo.email}`} className="btn-glow text-sm">Hire Me</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
