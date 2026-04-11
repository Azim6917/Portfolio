import React from 'react';
import { certifications } from '../data/portfolioData';

const iconMap = {
  'AWS Certified Cloud Practitioner': '☁️',
  'AWS re/Start Graduate': '🚀',
  'Full Stack Web Developer': '💻',
};

const Certifications = () => (
  <section id="certifications" className="mesh-bg dark:mesh-bg relative py-28 overflow-hidden">
    <div className="orb orb-1 w-[350px] h-[350px] bg-[rgba(244,164,96,0.10)] bottom-0 right-0 pointer-events-none" />
    <div className="orb orb-3 w-[220px] h-[220px] bg-[rgba(224,123,57,0.08)] top-0 left-0 pointer-events-none" />

    <div className="relative z-10 max-w-6xl mx-auto px-6">
      <div className="reveal text-center mb-20">
        <div className="section-label justify-center">Credentials</div>
        <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#1C1917] dark:text-white">
          My <span className="text-gradient">Certifications</span>
        </h2>
        <p className="font-['DM_Sans'] text-[#78716C] dark:text-[#A8A29E] mt-4 max-w-lg mx-auto">
          Verified credentials from globally recognized platforms.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, i) => (
          <div key={cert.title} className={`reveal-scale glass-card cert-glow p-7 flex flex-col delay-${i + 1} group`}>
            {/* Gradient top bar */}
            <div className={`h-1 rounded-full bg-gradient-to-r ${cert.color} mb-6 group-hover:h-1.5 transition-all duration-300`} />

            {/* Icon circle */}
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition-transform duration-300`}
              style={{boxShadow:'0 8px 24px rgba(224,123,57,0.2)'}}>
              {iconMap[cert.title] || '🏅'}
            </div>

            <h3 className="font-['Playfair_Display'] text-lg font-bold text-[#1C1917] dark:text-white mb-1 leading-snug">
              {cert.title}
            </h3>
            <p className="font-['JetBrains_Mono'] text-xs text-[var(--accent)] mb-4">{cert.issuer}</p>

            <div className="mt-auto space-y-3">
              <div className="flex items-center gap-2">
                <span className="font-['JetBrains_Mono'] text-[10px] px-2 py-0.5 rounded-full text-[#78716C] dark:text-[#A8A29E]"
                  style={{background:'rgba(224,123,57,0.08)', border:'1px solid rgba(224,123,57,0.15)'}}>
                  Issued {cert.issued}
                </span>
                {cert.expires && (
                  <span className="font-['JetBrains_Mono'] text-[10px] px-2 py-0.5 rounded-full text-[#78716C] dark:text-[#A8A29E]"
                    style={{background:'rgba(224,123,57,0.08)', border:'1px solid rgba(224,123,57,0.15)'}}>
                    Exp {cert.expires}
                  </span>
                )}
              </div>

              <a href={cert.credlyUrl} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-['JetBrains_Mono'] text-xs text-[var(--accent)] hover:underline group/link">
                View Credential
                <svg className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom banner */}
      <div className="reveal mt-14 glass-card p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-['Playfair_Display'] text-xl font-bold text-[#1C1917] dark:text-white mb-1">
            Continuously Learning 📖
          </p>
          <p className="font-['DM_Sans'] text-sm text-[#78716C] dark:text-[#A8A29E]">
            Actively pursuing more AWS specialty certifications and DevOps expertise.
          </p>
        </div>
        <div className="flex gap-3 flex-wrap">
          {['AWS Solutions Architect', 'AWS DevOps Engineer', 'CKA'].map(c => (
            <span key={c} className="font-['JetBrains_Mono'] text-xs px-3 py-1.5 rounded-full text-[var(--accent)]"
              style={{background:'rgba(224,123,57,0.1)', border:'1px solid rgba(224,123,57,0.2)'}}>
              {c} 🎯
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Certifications;
