import React, { useEffect, useRef, useState } from 'react';
import { personalInfo } from '../data/portfolioData';

const stats = [
  { value: 3, suffix: '+', label: 'Years Experience' },
  { value: 3, suffix: '', label: 'AWS Certifications' },
  { value: 1, suffix: '+', label: 'Projects Shipped' },
  { value: 10, suffix: '+', label: 'Tech Skills' },
];

const Counter = ({ target, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const duration = 1600;
        const step = Math.ceil(target / (duration / 16));
        const interval = setInterval(() => {
          start += step;
          if (start >= target) { setCount(target); clearInterval(interval); }
          else setCount(start);
        }, 16);
      }
    }, { threshold: 0.5 });
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const About = () => {
  const bioParagraphs = personalInfo.bio.trim().split('\n').filter(Boolean);

  return (
    <section id="about" className="mesh-alt dark:mesh-alt relative py-28 overflow-hidden">
      {/* Bg orbs */}
      <div className="orb orb-2 w-[350px] h-[350px] bg-[rgba(224,123,57,0.10)] top-0 right-0 pointer-events-none" />
      <div className="orb orb-3 w-[250px] h-[250px] bg-[rgba(244,164,96,0.08)] bottom-0 left-0 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="reveal text-center mb-20">
          <div className="section-label justify-center">About Me</div>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#1C1917] dark:text-white">
            The Person Behind <span className="text-gradient">the Code</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-14 items-start">
          {/* Bio */}
          <div className="reveal-left space-y-5">
            {bioParagraphs.map((para, i) => (
              <p key={i} className="font-['DM_Sans'] text-[#78716C] dark:text-[#A8A29E] leading-relaxed text-base">
                {para.trim()}
              </p>
            ))}
            <div className="flex gap-3 pt-4 flex-wrap">
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="btn-glow text-sm font-['DM_Sans']">
                <span>GitHub</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="btn-outline-glow text-sm font-['DM_Sans']">
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Stats + highlight */}
          <div className="reveal-right space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ value, suffix, label }, i) => (
                <div key={label} className={`glass-card p-6 text-center reveal-scale delay-${i + 1}`}>
                  <p className="font-['Playfair_Display'] text-4xl font-bold text-gradient mb-1">
                    <Counter target={value} suffix={suffix} />
                  </p>
                  <p className="font-['DM_Sans'] text-sm text-[#78716C] dark:text-[#A8A29E]">{label}</p>
                </div>
              ))}
            </div>

            {/* Amazon highlight */}
            <div className="glass-card p-5" style={{borderLeft:'4px solid var(--accent)'}}>
              <p className="font-['JetBrains_Mono'] text-xs text-[var(--accent)] uppercase tracking-wider mb-1">Previously</p>
              <p className="font-['DM_Sans'] font-semibold text-[#1C1917] dark:text-white text-base">Technical Associate @ Amazon</p>
              <p className="font-['DM_Sans'] text-sm text-[#78716C] dark:text-[#A8A29E] mt-1 leading-relaxed">
                Hands-on exposure in large-scale distributed tech environments, strengthening problem-solving at scale.
              </p>
            </div>

            {/* Currently studying */}
            <div className="glass-card p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{background:'linear-gradient(135deg,rgba(224,123,57,0.2),rgba(244,164,96,0.1))'}}>🎓</div>
              <div>
                <p className="font-['JetBrains_Mono'] text-xs text-[var(--accent)] uppercase tracking-wider mb-0.5">Currently</p>
                <p className="font-['DM_Sans'] font-medium text-[#1C1917] dark:text-white text-sm">MCA — ML & AI Specialization</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
