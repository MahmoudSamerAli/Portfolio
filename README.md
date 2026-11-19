# Mahmoud Samer — Portfolio

> **Software Engineering Student @ AASTMT** | Full-Stack Developer | Data Engineer | Problem Solver

[![Live Demo](https://img.shields.io/badge/Live-Demo-06F8FF?style=for-the-badge&logo=githubpages&logoColor=07050F)](https://mahmoudsamerali.github.io/Portfolio/)
[![GitHub](https://img.shields.io/badge/GitHub-MahmoudSamerAli-181717?style=for-the-badge&logo=github)](https://github.com/MahmoudSamerAli)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Mahmoud%20Samer-0A66C2?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/mahmoud-samer)
[![Email](https://img.shields.io/badge/Email-Contact-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:mahmoud.samer2005@gmail.com)

---

## 🚀 Overview

A modern, mobile-first portfolio showcasing 26+ projects spanning full-stack web development, data engineering, database systems, AI/ML, embedded systems, and software architecture. Built with vanilla HTML/CSS/JS — no frameworks, just clean code and thoughtful design.

**AKA MahmouDragon** 🐉

---

## ✨ Features

### Design & UX
- **Violet-Cyan Dark Theme** — Custom gradient system with CSS variables
- **Aurora Background** — Animated blob gradients + noise texture
- **Particle Canvas** — Interactive WebGL-like particle system with connections
- **Smooth Animations** — Fade-up, float, pulse, ring-pulse, dragon-float
- **Reduced Motion Support** — Respects `prefers-reduced-motion`

### Responsiveness
- **Breakpoints**: 900px, 768px, 480px
- **Mobile-First** — Touch-friendly 44px targets, slide-in navigation
- **Fluid Typography** — `clamp()` for scalable text
- **Flexible Grids** — Auto-fit columns with `minmax()`

### Accessibility
- Semantic HTML5 (`<nav>`, `<main>`, `<section>`, `<footer>`)
- ARIA labels, roles, and live regions
- Focus-visible outlines with cyan accent
- Color contrast ratios (WCAG AA)
- Keyboard navigation support

### Performance
- Debounced scroll handlers (10–50ms)
- IntersectionObserver for scroll animations
- Single batched GitHub API request
- Lazy particle canvas initialization
- No external JS frameworks

---

## 🛠 Tech Stack

| Category | Technologies |
|----------|--------------|
| **Core** | HTML5, CSS3 (Custom Properties), Vanilla ES6+ JS |
| **Fonts** | Space Grotesk (display), Inter (body), JetBrains Mono (code) |
| **Icons** | Font Awesome 6.5 |
| **Email** | EmailJS SDK |
| **APIs** | GitHub REST API (repo metadata) |
| **Graphics** | SVG (favicon, apple-touch-icon, OG image, dragon) |

---

## 📁 Project Structure

```
Portfolio/
├── index.html          # Main HTML structure
├── style.css           # Complete stylesheet (~1800 lines)
├── script.js           # Vanilla JS (~800 lines)
├── assets/
│   └── images/
│       ├── favicon.svg           # 100x100 gradient MS logo
│       ├── apple-touch-icon.svg  # 180x180 for iOS
│       └── og-image.svg          # 1200x630 social preview
└── README.md
```

---

## 🎯 Sections

| Section | Highlights |
|---------|------------|
| **Hero** | Typing animation, floating stat cards, avatar glow, scroll indicator |
| **About** | Terminal-style bio, animated counters (26+ projects, 3 internships, 3.2 GPA) |
| **Experience** | Timeline with 5 roles (DEPI, Flexe Soft, GDG, GDGoC, AIB) |
| **Education** | AASTMT B.Sc., DEPI IBM Data Science, GDGoC Leadership |
| **Skills** | 9 chips with per-skill accent colors |
| **Projects** | Category tabs, 26 cards, GitHub stars, featured InfoLink expandable |
| **Contact** | Validated form with EmailJS, social links |
| **Footer** | AKA MahmouDragon + animated blue dragon SVG |

---

## 🐉 The Dragon

The footer features an animated **Blue Dragon** — the "MahmouDragon" mascot. Built entirely with SVG:
- Cyan→Blue gradient body with glow filter
- Floating animation (translateY + rotate)
- Pulsing particle effects
- Fully responsive (300px desktop → 240px mobile)

---

## 🚀 Getting Started

```bash
# Clone
git clone https://github.com/MahmoudSamerAli/Portfolio.git
cd Portfolio

# Serve locally (any static server)
npx serve .
# or
python -m http.server 8000
# or
php -S localhost:8000
```

Open `http://localhost:8000` in your browser.

---

## 📦 Deployment

**GitHub Pages** (recommended):
1. Push to `main` branch
2. Settings → Pages → Source: `main` / `/root`
3. Access at `https://mahmoudsamerali.github.io/Portfolio/`

**Netlify/Vercel/Cloudflare Pages**: Connect repo → auto-deploy.

---

## 📊 Project Categories

| Category | Color | Icon | Count |
|----------|-------|------|-------|
| Web | `#22D3EE` | 🌐 | 11 |
| Software | `#8B5CF6` | 💻 | 5 |
| Database | `#60A5FA` | 🗄️ | 2 |
| AI | `#E879F9` | 🧠 | 1 |
| Data | `#34D399` | 📊 | 1 |
| Hardware | `#FB7185` | 🔧 | 2 |
| Design | `#FBBF24` | 🎨 | 1 |
| Algorithms | `#2DD4BF` | 📐 | 1 |

---

## 🔧 Customization

### Colors (CSS Variables)
```css
:root {
  --violet: #9F7AFF;
  --cyan: #06F8FF;
  --gradient-main: linear-gradient(120deg, #B8A0FF, #9F7AFF, #06F8FF);
  /* ... */
}
```

### Add Projects
Edit `projectsData` array in `script.js`:
```js
{
  id: 27,
  title: "New Project",
  description: "Description here",
  tech: ["React", "Node.js"],
  category: "Web",
  demo: "https://demo.com",
  repo: "https://github.com/user/repo"
}
```

### EmailJS Setup
Update `EMAILJS_CONFIG` in `script.js`:
```js
const EMAILJS_CONFIG = {
  serviceId: 'your_service_id',
  templateId: 'your_template_id',
  publicKey: 'your_public_key'
};
```

---

## 📈 Performance Metrics

| Metric | Target |
|--------|--------|
| LCP | < 2.5s |
| FID | < 100ms |
| CLS | < 0.1 |
| JS Bundle | ~15 KB (gzipped) |
| CSS | ~12 KB (gzipped) |

---

## 🤝 Connect

- **GitHub**: [@MahmoudSamerAli](https://github.com/MahmoudSamerAli)
- **LinkedIn**: [mahmoud-samer](https://linkedin.com/in/mahmoud-samer)
- **Email**: [mahmoud.samer2005@gmail.com](mailto:mahmoud.samer2005@gmail.com)
- **Phone**: +20 102 799 3246

---

## 📄 License

MIT License — feel free to use as inspiration for your own portfolio.

---

> Built with ❤️ and lots of ☕ by **Mahmoud Samer** (AKA **MahmouDragon** 🐉)