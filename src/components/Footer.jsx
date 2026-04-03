import React from 'react';
import { personalInfo } from '../data/portfolioData';

const Footer = () => (
  <footer className="relative py-10 px-6 overflow-hidden" style={{background:'#1C1917'}}>
    <div className="orb w-[300px] h-[300px] bg-[rgba(224,123,57,0.08)] -top-20 left-1/2 -translate-x-1/2 pointer-events-none" style={{position:'absolute',borderRadius:'50%',filter:'blur(80px)'}} />
    <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <span className="font-['Playfair_Display'] text-xl font-bold" style={{color:'var(--accent)'}}>
          {personalInfo.name.split(' ').map(n=>n[0]).join('')}
        </span>
        <span className="w-px h-4 bg-[rgba(255,255,255,0.15)]" />
        <p className="font-['JetBrains_Mono'] text-xs text-[#78716C]">
          © {new Date().getFullYear()} {personalInfo.name}
        </p>
      </div>
      <div className="flex items-center gap-6">
        {[
          { href: personalInfo.github, label: 'GitHub' },
          { href: personalInfo.linkedin, label: 'LinkedIn' },
          { href: `mailto:${personalInfo.email}`, label: 'Email' },
        ].map(({ href, label }) => (
          <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
            className="font-['DM_Sans'] text-sm text-[#78716C] hover:text-[var(--accent)] transition-colors duration-200">
            {label}
          </a>
        ))}
      </div>
      <p className="font-['JetBrains_Mono'] text-[10px] text-[#57534E]">
        Built with React & Tailwind CSS
      </p>
    </div>
  </footer>
);

export default Footer;
