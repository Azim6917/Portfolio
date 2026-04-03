# Azim Sarwad — Portfolio

A modern, animated portfolio built with **React**, **Tailwind CSS**, and **Framer Motion**.

---

## 🚀 Getting Started

### Prerequisites
- Node.js v16+ installed
- npm or yarn

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm start
```

Your portfolio will be live at `http://localhost:3000`

---

## 📁 Project Structure

```
src/
├── components/
│   ├── AnimatedSection.jsx   ← Reusable scroll-triggered animation wrapper
│   ├── Navbar.jsx            ← Sticky nav with dark/light toggle
│   └── Footer.jsx            ← Footer with social links
├── context/
│   └── ThemeContext.jsx      ← Dark / Light mode state
├── data/
│   └── portfolioData.js      ← ⭐ ALL your content lives here — edit this!
├── hooks/
│   └── useScrollAnimation.js ← IntersectionObserver hook
├── sections/
│   ├── Hero.jsx              ← Landing hero with typewriter
│   ├── About.jsx             ← About + stats
│   ├── Skills.jsx            ← Skills grid + progress bars
│   ├── Projects.jsx          ← Project cards
│   ├── Certifications.jsx    ← Certification badges
│   └── Contact.jsx           ← Contact form + links
├── App.jsx                   ← Root component
├── index.js                  ← Entry point
└── index.css                 ← Tailwind + custom styles
```

---

## ✏️ How to Edit Content

**Everything is in one place:** `src/data/portfolioData.js`

| What to change | Where |
|---|---|
| Name, email, bio, social links | `personalInfo` object |
| Add/change your photo | Set `personalInfo.photo` to your image path |
| Add a project | Add an object to the `projects` array |
| Add a certification | Add an object to the `certifications` array |
| Change skills | Edit the `skills` array |

### Adding your profile photo

1. Put your photo in `public/images/profile.jpg`
2. In `portfolioData.js`, set:
   ```js
   photo: '/images/profile.jpg',
   ```

---

## 🎨 Customization

### Colors
Edit `tailwind.config.js` → `theme.extend.colors`:
- `accent` → main brand color (default: warm orange `#E8935A`)
- `surface` → page background
- `card` → card backgrounds

### Fonts
Edit `tailwind.config.js` → `theme.extend.fontFamily`
Google Fonts are loaded in `public/index.html`.

---

## 🏗️ Build for Production

```bash
npm run build
```

Output goes to the `build/` folder — deploy to Vercel, Netlify, or any static host.

### Deploy to Vercel (recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
Drag the `build/` folder to [netlify.com/drop](https://app.netlify.com/drop)

---

## 📦 Dependencies

| Package | Purpose |
|---|---|
| `react` | UI framework |
| `tailwindcss` | Utility-first CSS |
| `framer-motion` | Animations (available, optional) |
| `react-intersection-observer` | Scroll trigger animations |

---

## 📬 Contact Form

The contact form uses `mailto:` — it opens the user's email client with a pre-filled message.

To use a proper backend form submission (e.g. EmailJS):
1. Sign up at [emailjs.com](https://emailjs.com)
2. Replace the `handleSubmit` logic in `src/sections/Contact.jsx`

---

Built with ❤️ by Azim Sarwad
