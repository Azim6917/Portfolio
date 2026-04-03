import React from 'react';
import { projects } from '../data/portfolioData';

const Projects = () => (
  <section id="projects" className="mesh-alt dark:mesh-alt relative py-28 overflow-hidden">
    <div className="orb orb-2 w-[380px] h-[380px] bg-[rgba(224,123,57,0.10)] top-[5%] right-[-8%] pointer-events-none" />

    <div className="relative z-10 max-w-6xl mx-auto px-6">
      <div className="reveal text-center mb-20">
        <div className="section-label justify-center">What I've Built</div>
        <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#1C1917] dark:text-white">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="font-['DM_Sans'] text-[#78716C] dark:text-[#A8A29E] mt-4 max-w-lg mx-auto">
          Real-world solutions I've built — from full-stack web apps to cloud architecture.
        </p>
      </div>

      <div className={`grid gap-8 ${projects.length === 1 ? 'max-w-2xl mx-auto' : 'md:grid-cols-2'}`}>
        {projects.map((project, i) => (
          <div key={project.title} className={`reveal glass-card p-7 flex flex-col delay-${i + 1}`}>
            {/* Top bar */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-400/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
                <span className="w-3 h-3 rounded-full bg-green-400/70" />
              </div>
              {project.featured && (
                <span className="font-['JetBrains_Mono'] text-[10px] px-2.5 py-1 rounded-full text-[var(--accent)]"
                  style={{background:'rgba(224,123,57,0.12)', border:'1px solid rgba(224,123,57,0.2)'}}>
                  ⭐ Featured
                </span>
              )}
            </div>

            {/* Title */}
            <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#1C1917] dark:text-white mb-1 group-hover:text-[var(--accent)] transition-colors">
              {project.title}
            </h3>
            <p className="font-['JetBrains_Mono'] text-xs text-[var(--accent)] mb-4">{project.subtitle}</p>

            <p className="font-['DM_Sans'] text-sm text-[#78716C] dark:text-[#A8A29E] leading-relaxed mb-5 flex-1">
              {project.description}
            </p>

            {project.features && (
              <ul className="mb-5 grid grid-cols-2 gap-1.5">
                {project.features.map(f => (
                  <li key={f} className="flex items-center gap-2 font-['DM_Sans'] text-xs text-[#78716C] dark:text-[#A8A29E]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] flex-shrink-0" />{f}
                  </li>
                ))}
              </ul>
            )}

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map(t => (
                <span key={t} className="skill-pill">{t}</span>
              ))}
            </div>

            <div className="flex gap-3 mt-auto">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn-glow text-sm font-['DM_Sans']">
                  <span>Live Demo</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn-outline-glow text-sm font-['DM_Sans']">
                  <span>Source</span>
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="reveal text-center mt-14">
        <p className="font-['DM_Sans'] text-[#78716C] dark:text-[#A8A29E] mb-5">
          More projects on GitHub including cloud infra, scripts & experiments.
        </p>
        <a href="https://github.com/Azim6917" target="_blank" rel="noreferrer" className="btn-outline-glow font-['DM_Sans'] text-sm">
          <span>View All on GitHub</span>
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
        </a>
      </div>
    </div>
  </section>
);

export default Projects;
