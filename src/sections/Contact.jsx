import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';

const contactLinks = [
  {
    href: `mailto:${personalInfo.email}`, label: 'Email', value: personalInfo.email, emoji: '✉️',
    note: 'Best for work inquiries',
  },
  {
    href: personalInfo.linkedin, label: 'LinkedIn', value: 'linkedin.com/in/azimsarwad', emoji: '💼',
    note: 'Connect professionally',
  },
  {
    href: personalInfo.github, label: 'GitHub', value: 'github.com/Azim6917', emoji: '⚡',
    note: 'See my code',
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const onChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = e => {
    e.preventDefault();
    const sub = encodeURIComponent(form.subject || `Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.open(`mailto:${personalInfo.email}?subject=${sub}&body=${body}`, '_blank');
    setSent(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  const valid = form.name && form.email && form.message;

  return (
    <section id="contact" className="mesh-alt dark:mesh-alt relative py-28 overflow-hidden">
      <div className="orb orb-2 w-[380px] h-[380px] bg-[rgba(224,123,57,0.11)] top-[10%] left-[-8%] pointer-events-none" />
      <div className="orb orb-1 w-[260px] h-[260px] bg-[rgba(244,164,96,0.09)] bottom-[5%] right-[5%] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="reveal text-center mb-20">
          <div className="section-label justify-center">Get In Touch</div>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#1C1917] dark:text-white">
            Let's <span className="text-gradient">Build Together</span>
          </h2>
          <p className="font-['DM_Sans'] text-[#78716C] dark:text-[#A8A29E] mt-4 max-w-lg mx-auto">
            Open to cloud engineering, full-stack opportunities, and exciting collaborations. Drop me a message!
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-10">
          {/* Left — 2 cols */}
          <div className="md:col-span-2 space-y-4 reveal-left">
            {contactLinks.map(({ href, label, value, emoji, note }) => (
              <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                className="glass-card p-5 flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{background:'linear-gradient(135deg,rgba(224,123,57,0.15),rgba(244,164,96,0.1))'}}>
                  {emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-['JetBrains_Mono'] text-[10px] text-[var(--accent)] uppercase tracking-wider">{label}</p>
                  <p className="font-['DM_Sans'] text-sm font-medium text-[#1C1917] dark:text-white truncate mt-0.5">{value}</p>
                  <p className="font-['DM_Sans'] text-xs text-[#A8A29E] mt-0.5">{note}</p>
                </div>
                <svg className="w-4 h-4 text-[#A8A29E] group-hover:text-[var(--accent)] transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                </svg>
              </a>
            ))}

            {/* Availability */}
            <div className="glass-card p-5 flex items-center gap-4" style={{borderLeft:'4px solid #4ade80'}}>
              <span className="relative flex h-3 w-3 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
              </span>
              <div>
                <p className="font-['DM_Sans'] text-sm font-semibold text-[#1C1917] dark:text-white">Currently Available</p>
                <p className="font-['DM_Sans'] text-xs text-[#78716C] dark:text-[#A8A29E]">Open to Cloud / DevOps / Full Stack roles</p>
              </div>
            </div>
          </div>

          {/* Right — form 3 cols */}
          <form onSubmit={onSubmit} className="md:col-span-3 glass-card p-8 space-y-5 reveal-right">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-['JetBrains_Mono'] text-[10px] text-[var(--accent)] uppercase tracking-wider mb-2">Your Name</label>
                <input type="text" name="name" value={form.name} onChange={onChange} placeholder="John Doe" required className="form-input" />
              </div>
              <div>
                <label className="block font-['JetBrains_Mono'] text-[10px] text-[var(--accent)] uppercase tracking-wider mb-2">Email</label>
                <input type="email" name="email" value={form.email} onChange={onChange} placeholder="you@email.com" required className="form-input" />
              </div>
            </div>

            <div>
              <label className="block font-['JetBrains_Mono'] text-[10px] text-[var(--accent)] uppercase tracking-wider mb-2">Subject</label>
              <input type="text" name="subject" value={form.subject} onChange={onChange} placeholder="Opportunity / Collaboration / Just saying hi!" className="form-input" />
            </div>

            <div>
              <label className="block font-['JetBrains_Mono'] text-[10px] text-[var(--accent)] uppercase tracking-wider mb-2">Message</label>
              <textarea name="message" value={form.message} onChange={onChange} placeholder="Tell me about the opportunity or what you have in mind..." required rows={5} className="form-input resize-none" />
            </div>

            <button type="submit" disabled={!valid}
              className={`w-full btn-glow font-['DM_Sans'] justify-center text-sm ${!valid ? 'opacity-50 cursor-not-allowed' : ''}`}
              style={!valid ? {pointerEvents:'none'} : {}}>
              {sent
                ? <><span>✓ Message Sent!</span></>
                : <><span>Send Message</span><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg></>
              }
            </button>
            <p className="font-['JetBrains_Mono'] text-[10px] text-center text-[#A8A29E]">
              Opens your email client with a pre-filled message.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
