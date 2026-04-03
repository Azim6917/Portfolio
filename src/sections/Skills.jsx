import React, { useEffect, useRef, useState } from 'react';
import { skills } from '../data/portfolioData';

const expertise = [
  { label: 'AWS Cloud Services', level: 90 },
  { label: 'React / JavaScript', level: 82 },
  { label: 'Python', level: 75 },
  { label: 'Linux / Bash', level: 78 },
  { label: 'Docker / DevOps', level: 65 },
  { label: 'MongoDB / Express', level: 72 },
];

const BarRow = ({ label, level, index }) => {
  const ref = useRef(null);
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setFilled(true); observer.unobserve(el); }
    }, { threshold: 0.3 });
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between mb-2">
        <span className="font-['DM_Sans'] text-sm font-medium text-[#1C1917] dark:text-white group-hover:text-[var(--accent)] transition-colors">{label}</span>
        <span className="font-['JetBrains_Mono'] text-xs text-[var(--accent)] font-medium">{level}%</span>
      </div>
      <div className="h-2 rounded-full overflow-hidden" style={{background:'rgba(224,123,57,0.12)'}}>
        <div
          className="bar-fill"
          style={{
            width: `${level}%`,
            transitionDelay: `${index * 120}ms`,
            transform: filled ? 'scaleX(1)' : 'scaleX(0)'
          }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const [active, setActive] = useState(0);
  const iconMap = {
    'Cloud & DevOps': '☁️',
    'Frontend': '🎨',
    'Backend & Languages': '⚙️',
    'Tools & Version Control': '🔧',
  };

  return (
    <section id="skills" className="mesh-bg dark:mesh-bg relative py-28 overflow-hidden">
      <div className="orb orb-1 w-[400px] h-[400px] bg-[rgba(224,123,57,0.09)] top-[20%] left-[-10%] pointer-events-none" />
      <div className="orb orb-3 w-[280px] h-[280px] bg-[rgba(244,164,96,0.07)] bottom-[10%] right-[-5%] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="reveal text-center mb-20">
          <div className="section-label justify-center">What I Work With</div>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#1C1917] dark:text-white">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — category tabs + pills */}
          <div className="reveal-left">
            {/* Tab buttons */}
            <div className="flex flex-wrap gap-2 mb-6">
              {skills.map(({ category }, i) => (
                <button key={category} onClick={() => setActive(i)}
                  className="px-4 py-2 rounded-xl font-['JetBrains_Mono'] text-xs transition-all duration-300"
                  style={active === i
                    ? {background:'var(--accent)', color:'white', boxShadow:'0 8px 24px rgba(224,123,57,0.35)'}
                    : {background:'rgba(224,123,57,0.08)', color:'var(--accent)', border:'1px solid rgba(224,123,57,0.2)'}}>
                  {iconMap[category] || '⚡'} {category}
                </button>
              ))}
            </div>

            {/* Active category pills */}
            <div className="glass-card p-6 min-h-[220px]">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-3xl">{iconMap[skills[active].category] || '⚡'}</span>
                <div>
                  <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#1C1917] dark:text-white">{skills[active].category}</h3>
                  <p className="font-['JetBrains_Mono'] text-xs text-[var(--accent)]">{skills[active].items.length} technologies</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills[active].items.map((skill, i) => (
                  <span key={skill} className="skill-pill" style={{animationDelay: `${i*30}ms`}}>{skill}</span>
                ))}
              </div>
            </div>

            {/* All skills mini cloud */}
            <div className="mt-4 glass-card p-4">
              <p className="font-['JetBrains_Mono'] text-xs text-[var(--accent)] mb-3 uppercase tracking-wider">All Technologies</p>
              <div className="flex flex-wrap gap-1.5">
                {skills.flatMap(s => s.items).map((skill) => (
                  <span key={skill} className="font-['JetBrains_Mono'] text-[10px] px-2 py-1 rounded-lg text-[#78716C] dark:text-[#A8A29E]"
                    style={{background:'rgba(224,123,57,0.07)', border:'1px solid rgba(224,123,57,0.12)'}}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — progress bars */}
          <div className="reveal-right">
            <div className="glass-card p-7">
              <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#1C1917] dark:text-white mb-7">
                Core Expertise
              </h3>
              <div className="space-y-6">
                {expertise.map(({ label, level }, i) => (
                  <BarRow key={label} label={label} level={level} index={i} />
                ))}
              </div>
            </div>

            {/* Currently learning */}
            <div className="glass-card p-5 mt-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                style={{background:'rgba(224,123,57,0.12)'}}>📚</div>
              <div>
                <p className="font-['JetBrains_Mono'] text-xs text-[var(--accent)] uppercase tracking-wider">Currently Exploring</p>
                <div className="flex flex-wrap gap-1.5 mt-1.5">
                  {['Kubernetes', 'Terraform', 'CI/CD Pipelines', 'AWS DevOps'].map(t => (
                    <span key={t} className="font-['JetBrains_Mono'] text-[10px] px-2 py-0.5 rounded-full text-[var(--accent)]"
                      style={{background:'rgba(224,123,57,0.1)', border:'1px solid rgba(224,123,57,0.2)'}}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
