// ============================================
// MAHMOUD SAMER - PORTFOLIO (Vanilla JS)
// ============================================

// ============================================
// DATA
// ============================================

// Projects Database
const projectsData = [
  {
    id: 1, title: "Prison Management DB",
    description: "Relational database managing inmate records, rehabilitation programs, and staff. Applied 1NF-3NF normalization with complex stored procedures.",
    tech: ["MSSQL", "ERD", "Stored Procedures"], category: "Database", demo: "#", repo: "https://github.com/MahmoudSamerAli/Prison_Database"
  },
  {
    id: 2, title: "Advanced Zoo System",
    description: "Implemented 9 design patterns (Singleton, Factory, Observer) with DB connectivity, modular GUI, and scalable architecture.",
    tech: ["Java", "OOP", "Design Patterns"], category: "Software", demo: "#", repo: "https://github.com/MahmoudSamerAli/Zoo_Management_System"
  },
  {
    id: 3, title: "Event Management Web App",
    description: "MVC-patterned web application using Java Servlets/JSP handling HTTP requests, dynamic rendering, and responsive UI.",
    tech: ["Java", "Servlets", "JSP"], category: "Web", demo: "#", repo: "https://github.com/MahmoudSamerAli/Event_Management_WebApp"
  },
  {
    id: 4, title: "Luxury Car Showroom",
    description: "Full-stack vehicle inventory & sales platform with authentication, interactive galleries, and relational database backend.",
    tech: ["PHP", "SQL", "JavaScript"], category: "Web", demo: "#", repo: "https://github.com/MahmoudSamerAli/Car_Showroom_PHP"
  },
  {
    id: 5, title: "Attendance & Emotion AI",
    description: "Facial recognition attendance tracker with AI emotion detection. R used for statistical analysis and engagement visualization.",
    tech: ["Python", "OpenCV", "R"], category: "AI", demo: "#", repo: "https://github.com/MahmoudSamerAli/Classroom_Emotion_AI"
  },
  {
    id: 6, title: "SmartBite Web App",
    description: "Converted mobile UI to responsive web application using Flask. Implemented unit, integration, and manual UI testing.",
    tech: ["Flask", "Python", "Testing"], category: "Web", demo: "#", repo: "https://github.com/MahmoudSamerAli/SmartBite_WebApp"
  },
  {
    id: 7, title: "Infix to Postfix Calculator",
    description: "Expression evaluator using Shunting-yard algorithm & expression trees. Web UI shows step-by-step conversion.",
    tech: ["C++", "JavaScript", "Algorithms"], category: "Software", demo: "#", repo: "https://github.com/MahmoudSamerAli/Postfix_Calculator"
  },
  {
    id: 8, title: "Numerical Methods Calculator",
    description: "Interactive web solver for Bisection, Jacobi, Lagrange Interpolation, and other computational techniques.",
    tech: ["HTML", "CSS", "JavaScript"], category: "Web", demo: "#", repo: "https://github.com/MahmoudSamerAli/Numerical_Methods_Calculator"
  },
  {
    id: 9, title: "Data Pipeline Automation",
    description: "Automated cleaning of 10K+ records using Pandas, reducing manual reporting time by 10+ hrs/week and cutting errors by 30%.",
    tech: ["Python", "Pandas", "SQL"], category: "Data", demo: "#", repo: "https://github.com/MahmoudSamerAli/Data_Pipeline_Automation"
  },
  {
    id: 10, title: "Restaurant Management DB",
    description: "Comprehensive reservation & order tracking system with ERD design, login forms, reporting, and data validation.",
    tech: ["MS Access", "SQL", "VBA"], category: "Database", demo: "#", repo: "https://github.com/MahmoudSamerAli/Restaurant_Management_System"
  },
  {
    id: 11, title: "Smart RC Car (Arduino)",
    description: "Bluetooth-controlled chassis with PWM motor regulation, ultrasonic obstacle avoidance, and semi-autonomous routing.",
    tech: ["Arduino", "C++", "Sensors"], category: "Hardware", demo: "#", repo: "https://github.com/MahmoudSamerAli/Smart_RC_Car"
  },
  {
    id: 12, title: "Digital Alarm Clock",
    description: "Designed digital clock circuit using decade counters, BCD-to-7-segment decoders, and piezo buzzer alarm logic in Multisim.",
    tech: ["Multisim", "Digital Logic", "Hardware"], category: "Hardware", demo: "#", repo: "https://github.com/MahmoudSamerAli/Digital_Alarm_Clock"
  },
  {
    id: 13, title: "Online Store UML Documentation",
    description: "Comprehensive UML documentation including activity, sequence, class, misuse, and state diagrams for system behavior modeling.",
    tech: ["UML", "System Design", "Documentation"], category: "Design", demo: "#", repo: "#"
  },
  {
    id: 14, title: "Sorting Algorithms Analysis",
    description: "Implemented Bubble & Selection Sort. Analyzed correctness, execution flow, and comparative time complexity performance.",
    tech: ["Python", "Algorithms", "Analysis"], category: "Algorithms", demo: "#", repo: "https://github.com/MahmoudSamerAli/Sorting_Algorithms_Analysis"
  },
  {
    id: 15, title: "InfoLink",
    description: "Production-ready Spring Boot 4.1 (Java 26) REST API — internal organizational search platform. Features JWT auth with refresh-token rotation, role-based access (USER/ADMIN/SYSADMIN), group-scoped MongoDB search, full audit logging, and hybrid SQL Server + MongoDB storage. Self-contained deployment serving frontend as static resources.",
    tech: ["Java 26", "Spring Boot 4.1", "Maven", "MongoDB", "SQL Server", "JWT", "Spring Security", "Swagger/OpenAPI"], category: "Web", demo: "#", repo: "https://github.com/MahmoudSamerAli/InfoLink"
  },
  {
    id: 16, title: "Life on Land Zoo",
    description: "Java OOP zoo management GUI with animal/employee records, file-based database, biomes, and staff tracking.",
    tech: ["Java", "OOP", "File I/O"], category: "Software", demo: "#", repo: "https://github.com/MahmoudSamerAli/Life_on_Land_Zoo"
  },
  {
    id: 17, title: "ArmorFit Store",
    description: "Full-stack e-commerce store with product catalog, checkout flow, auth, and admin dashboard backed by MSSQL.",
    tech: ["HTML", "CSS", "JavaScript", "MSSQL"], category: "Web", demo: "#", repo: "https://github.com/MahmoudSamerAli/ArmorFit"
  },
  {
    id: 18, title: "Supermarket El-Aqarya",
    description: "Multi-page real estate website presenting properties, areas, and developers with a responsive catalog.",
    tech: ["HTML", "CSS", "JavaScript"], category: "Web", demo: "#", repo: "https://github.com/MahmoudSamerAli/Supermarket_El_Aqarya"
  },
  {
    id: 19, title: "AI Recipe Maker",
    description: "Django REST API with recipe & ingredient models, ETL data loading scripts, and Postgres-backed persistence.",
    tech: ["Django", "Python", "PostgreSQL"], category: "Web", demo: "#", repo: "https://github.com/MahmoudSamerAli/AI_Recipe_Maker"
  },
  {
    id: 20, title: "ToDoList React",
    description: "Modern task manager built with React + Vite - component architecture, hooks, and state-driven UI.",
    tech: ["React.js", "JavaScript", "Vite"], category: "Web", demo: "#", repo: "https://github.com/MahmoudSamerAli/ToDoList_React"
  },
  {
    id: 21, title: "CyberSnake",
    description: "Cybersecurity-themed Snake game in Python with difficulty quiz levels (JSON question banks) and score tracking.",
    tech: ["Python", "Games", "Cybersecurity"], category: "Software", demo: "#", repo: "https://github.com/MahmoudSamerAli/CyberSnake"
  },
  {
    id: 22, title: "MDeals Car Pages",
    description: "Luxury car brand showcase site (Audi, Cadillac, Dodge, Mercedes) with per-brand galleries and login screen.",
    tech: ["HTML", "CSS", "JavaScript"], category: "Web", demo: "#", repo: "https://github.com/MahmoudSamerAli/MDeals"
  },
  {
    id: 23, title: "MyApplication (Android)",
    description: "Kotlin Android app with camera, discover, favorites, and history screens - Jetpack-style Material UI.",
    tech: ["Kotlin", "Android", "Gradle"], category: "Software", demo: "#", repo: "https://github.com/MahmoudSamerAli/MyApplication_Android"
  },
  {
    id: 24, title: "Instapay Web App",
    description: "Bilingual digital wallet web app with auth, transactions, AI chat assistant, and dashboards.",
    tech: ["JavaScript", "HTML", "CSS"], category: "Web", demo: "#", repo: "https://github.com/MahmoudSamerAli/Instapay_WebApp"
  },
  {
    id: 25, title: "Workspace Real Estate",
    description: "Real estate platform with properties, areas, and developer pages - multi-page responsive site.",
    tech: ["HTML", "CSS", "JavaScript"], category: "Web", demo: "#", repo: "https://github.com/MahmoudSamerAli/Workspace_RealEstate"
  },
  {
    id: 26, title: "AASTMT Hackathon",
    description: "Hackathon student platform with sign-up, majors, and sections pages - rapid team-based build.",
    tech: ["HTML", "CSS", "JavaScript"], category: "Web", demo: "#", repo: "https://github.com/MahmoudSamerAli/AASTMT_Hackathon"
  },
  {
    id: 27, title: "fold-bags",
    description: "E-commerce storefront with admin panel, checkout flow, and Cloudflare Pages serverless functions.",
    tech: ["HTML", "JavaScript", "Cloudflare"], category: "Web", demo: "#", repo: "https://github.com/MahmoudSamerAli/fold-bags"
  }
];

// Skills Data
const skillsData = [
  { name: "Python", icon: "fab fa-python", accent: "#4B8BBE" },
  { name: "Java", icon: "fab fa-java", accent: "#E76F00" },
  { name: "C/C++", icon: "fas fa-code", accent: "#659AD2" },
  { name: "SQL", icon: "fas fa-database", accent: "#F29111" },
  { name: "JavaScript", icon: "fab fa-js", accent: "#F7DF1E" },
  { name: "React.js", icon: "fab fa-react", accent: "#61DAFB" },
  { name: "Arduino", icon: "fas fa-microchip", accent: "#00979C" },
  { name: "Git/GitHub", icon: "fab fa-git-alt", accent: "#F05032" },
  { name: "MSSQL", icon: "fas fa-server", accent: "#CC2927" }
];

// Experience timeline data
const timelineData = [
  {
    role: "Data Science & Analytics Trainee",
    org: "Digital Egypt Pioneers Initiative (DEPI)",
    period: "2024 – 2025",
    icon: "fas fa-chart-line",
    points: ["IBM-backed Data Science track", "Built Pandas ETL pipelines on 10K+ records", "SQL analytics + R statistical modeling"]
  },
  {
    role: "Software Engineering Intern",
    org: "Flexe Soft",
    period: "2025",
    icon: "fas fa-briefcase",
    points: ["Delivered production-ready features", "Optimized performance in agile sprints", "Collaborated across cross-functional teams"]
  },
  {
    role: "Member of Web Development Club",
    org: "Google Developer Groups (GDG)",
    period: "2024 – 2025",
    icon: "fas fa-users",
    points: ["Full-stack web development workshops"]
  },
  {
    role: "Member Of The Robotics Club",
    org: "GDGoC",
    period: "2025 - 2026",
    icon: "fas fa-users",
    points: ["Built Arduino robotics projects (RC car)"]
  }
];

// Hero typing roles
const heroRoles = ["Software Solutions", "Full-Stack Apps", "Data Pipelines", "Smart Systems"];

// Category -> color/icon mapping
const categoryStyle = {
  Web:       { color: "#22D3EE", icon: "fa-globe" },
  Software:  { color: "#8B5CF6", icon: "fa-code" },
  Database:  { color: "#60A5FA", icon: "fa-database" },
  AI:        { color: "#E879F9", icon: "fa-brain" },
  Data:      { color: "#34D399", icon: "fa-chart-line" },
  Hardware:  { color: "#FB7185", icon: "fa-microchip" },
  Design:    { color: "#FBBF24", icon: "fa-drafting-compass" },
  Algorithms:{ color: "#2DD4BF", icon: "fa-project-diagram" }
};

// State
let currentFilter = "All";
let repoMeta = {}; // repo name -> {stars, lang, updated}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();

  renderSkills();
  renderTimeline();
  buildFilterBar();
  renderProjects();

  initSmoothScroll();
  initFadeInObserver();
  initMobileNav();
  initContactForm();
  initHeaderScroll();
  initScrollProgress();
  initScrollSpy();
  initBackToTop();
  initCounters();
  initTyping();
  initFeaturedProject();

  document.getElementById('projects-container')?.addEventListener('click', handleProjectClick);

  enrichProjectsWithGitHub();
});

// ============================================
// FEATURED PROJECT EXPAND/COLLAPSE
// ============================================
function initFeaturedProject() {
  const expandBtn = document.getElementById('featuredExpandBtn');
  const details = document.getElementById('featuredDetails');
  if (!expandBtn || !details) return;

  expandBtn.addEventListener('click', () => {
    const isHidden = details.hidden;
    details.hidden = !isHidden;
    expandBtn.innerHTML = isHidden
      ? '<i class="fas fa-chevron-up"></i> Hide Technical Details'
      : '<i class="fas fa-chevron-down"></i> Show Technical Details';
    expandBtn.setAttribute('aria-expanded', isHidden);
  });
}

// ============================================
// RENDER FUNCTIONS
// ============================================
function renderSkills() {
  const container = document.getElementById('skills-container');
  if (!container) return;
  container.innerHTML = skillsData.map(skill => `
    <div class="skill-chip" style="--chip-accent:${skill.accent}">
      <i class="${skill.icon}"></i>${skill.name}
    </div>
  `).join('');
}

function renderTimeline() {
  const container = document.getElementById('timeline');
  if (!container) return;
  container.innerHTML = timelineData.map(item => `
    <div class="timeline-item fade-up">
      <div class="timeline-marker"><i class="${item.icon}"></i></div>
      <div class="timeline-card">
        <span class="timeline-period">${item.period}</span>
        <h3>${item.role}</h3>
        <p class="timeline-org">${item.org}</p>
        <ul>
          ${item.points.map(p => `<li>${p}</li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('');
  initFadeInObserver();
}

function getUniqueCategories() {
  const cats = projectsData.map(p => p.category);
  return ['All', ...new Set(cats)];
}

function buildFilterBar() {
  const filterBar = document.getElementById('filter-bar');
  if (!filterBar) return;

  const categories = getUniqueCategories();
  filterBar.innerHTML = categories.map(cat => `
    <button class="filter-btn ${cat === currentFilter ? 'active' : ''}" data-filter="${cat}">
      ${cat}
    </button>
  `).join('');

  filterBar.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentFilter = btn.dataset.filter;
      updateActiveFilter();
      renderProjects();
    });
  });
}

function updateActiveFilter() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === currentFilter);
  });
}

function getRepoName(url) {
  if (!url || url === '#') return null;
  const parts = url.split('/');
  return parts[parts.length - 1];
}

function renderProjects() {
  const container = document.getElementById('projects-container');
  if (!container) return;

  const filtered = currentFilter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === currentFilter);

  if (filtered.length === 0) {
    container.innerHTML = `<div class="no-projects">✨ No projects match this category ✨</div>`;
    return;
  }

  container.innerHTML = filtered.map(project => {
    const style = categoryStyle[project.category] || { color: "#8B5CF6", icon: "fa-code" };
    const meta = repoMeta[getRepoName(project.repo)];
    const stars = meta ? meta.stars : null;

    return `
    <div class="project-card fade-up">
      <div class="project-header" style="--card-accent:${style.color}">
        <span class="project-category"><i class="fas ${style.icon}"></i> ${project.category}</span>
        <span class="project-stars">
          ${stars !== null ? `<i class="fas fa-star"></i> ${stars}` : `<i class="fas ${style.icon}"></i>`}
        </span>
      </div>
      <div class="project-body">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc">${project.description}</p>
        <div class="tech-stack">
          ${project.tech.map(t => `<span class="tech-badge">${t}</span>`).join('')}
        </div>
        <div class="card-buttons">
          <a href="${project.repo}" class="card-btn ${project.repo === '#' ? 'disabled' : ''}" target="_blank" rel="noopener" ${project.repo === '#' ? 'aria-disabled="true"' : ''}>
            <i class="fab fa-github"></i> Code
          </a>
          <a href="${project.demo}" class="card-btn ${project.demo === '#' ? 'hidden' : ''}" target="_blank" rel="noopener" ${project.demo === '#' ? 'aria-hidden="true" tabindex="-1"' : ''}>
            <i class="fas fa-external-link-alt"></i> Demo
          </a>
        </div>
      </div>
    </div>
  `;
  }).join('');

  initFadeInObserver();
}

// Fetch GitHub repo metadata in one batched request (avoids rate limits)
async function enrichProjectsWithGitHub() {
  try {
    const res = await fetch('https://api.github.com/users/MahmoudSamerAli/repos?per_page=100&sort=updated', {
      headers: { 'Accept': 'application/vnd.github+json' }
    });
    if (!res.ok) throw new Error('GitHub API ' + res.status);

    const repos = await res.json();
    repoMeta = {};
    repos.forEach(r => {
      repoMeta[r.name] = {
        stars: r.stargazers_count,
        lang: r.language,
        updated: r.pushed_at
      };
    });
    renderProjects();
  } catch (err) {
    // Silently keep local fallback — no metadata enrichment
  }
}

// ============================================
// INTERACTIONS
// ============================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId !== '#') {
        e.preventDefault();
        const target = document.querySelector(targetId);
        if (target) {
          const offset = 80;
          const elementPos = target.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ top: elementPos - offset, behavior: 'smooth' });
          link.classList.add('active');
        }
      }
    });
  });
}

let observer = null;
function initFadeInObserver() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.fade-up').forEach(el => el.classList.add('visible'));
    return;
  }
  if (observer) {
    document.querySelectorAll('.fade-up:not(.visible)').forEach(el => observer.observe(el));
    return;
  }
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
}

function initMobileNav() {
  const toggle = document.getElementById('mobileToggle');
  const nav = document.getElementById('navLinks');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('active');
    toggle.classList.toggle('active');
    toggle.setAttribute('aria-expanded', open);
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      toggle.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

function handleProjectClick(e) {
  const btn = e.target.closest('.card-btn');
  if (!btn) return;
  if (btn.classList.contains('disabled')) {
    e.preventDefault();
    return;
  }
  if (btn.href === '#' || btn.href.includes('#')) {
    e.preventDefault();
    const action = btn.textContent.includes('Code') ? 'GitHub' : 'live demo';
    alert(`✨ This is a placeholder link.\n\nIn production, this would open the project's ${action}.`);
  }
}

// ============================================
// FORM VALIDATION & SUBMISSION
// ============================================
function validateEmail(email) {
  return /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/.test(email);
}

function validateContactForm() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  let isValid = true;

  ['name', 'email', 'message'].forEach(id => {
    document.getElementById(`${id}Error`).textContent = '';
    document.getElementById(id).closest('.form-group')?.classList.remove('invalid');
  });

  if (!name) {
    document.getElementById('nameError').textContent = 'Name is required';
    document.getElementById('name').closest('.form-group').classList.add('invalid');
    isValid = false;
  } else if (name.length < 2) {
    document.getElementById('nameError').textContent = 'Please enter a valid name';
    document.getElementById('name').closest('.form-group').classList.add('invalid');
    isValid = false;
  }

  if (!email) {
    document.getElementById('emailError').textContent = 'Email is required';
    document.getElementById('email').closest('.form-group').classList.add('invalid');
    isValid = false;
  } else if (!validateEmail(email)) {
    document.getElementById('emailError').textContent = 'Please enter a valid email';
    document.getElementById('email').closest('.form-group').classList.add('invalid');
    isValid = false;
  }

  if (!message) {
    document.getElementById('msgError').textContent = 'Message cannot be empty';
    document.getElementById('message').closest('.form-group').classList.add('invalid');
    isValid = false;
  } else if (message.length < 10) {
    document.getElementById('msgError').textContent = 'Message must be at least 10 characters';
    document.getElementById('message').closest('.form-group').classList.add('invalid');
    isValid = false;
  }

  return isValid;
}

function initContactForm() {
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  if (!form) return;

  // EmailJS configuration - REPLACE THESE WITH YOUR ACTUAL CREDENTIALS
  const EMAILJS_CONFIG = {
    serviceId: 'service_w4b0f5n',    // e.g., 'service_abc123'
    templateId: 'template_feb40th',  // e.g., 'template_xyz789'
    publicKey: 'fJY8A8CLFlrsEFjQR'     // e.g., 'aBcDeFgHiJkLmNoPq'
  };

  // Initialize EmailJS
  if (typeof emailjs !== 'undefined') {
    emailjs.init(EMAILJS_CONFIG.publicKey);
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!validateContactForm()) {
      status.textContent = '✗ Please fix the errors above';
      status.className = 'form-status error';
      return;
    }

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    status.textContent = 'Sending...';
    status.className = 'form-status';

    // Check if EmailJS is configured
    if (EMAILJS_CONFIG.serviceId === 'YOUR_SERVICE_ID' || typeof emailjs === 'undefined') {
      status.textContent = '✗ Email service not configured. Please email me directly at mahmoud.samer2005@gmail.com';
      status.className = 'form-status error';
      return;
    }

    try {
      const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
        to_email: 'mahmoud.samer2005@gmail.com',
        subject: `Portfolio message from ${name}`
      };

      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams
      );

      status.textContent = '✓ Message sent! I\'ll get back to you soon.';
      status.className = 'form-status success';
      form.reset();
    } catch (err) {
      console.error('EmailJS error:', err);
      status.textContent = '✗ Could not send right now — email me directly at mahmoud.samer2005@gmail.com';
      status.className = 'form-status error';
    }
  });

  ['name', 'email', 'message'].forEach(id => {
    document.getElementById(id)?.addEventListener('blur', () => {
      if (document.getElementById(id).value.trim()) {
        document.getElementById(id).closest('.form-group')?.classList.remove('invalid');
        document.getElementById(`${id}Error`).textContent = '';
      }
    });
  });
}

// ============================================
// SCROLL EFFECTS
// ============================================
function initHeaderScroll() {
  const header = document.querySelector('.header');
  if (!header) return;

  const apply = () => {
    const scrolled = window.scrollY > 40;
    header.classList.toggle('scrolled', scrolled);
  };
  apply();
  window.addEventListener('scroll', apply, { passive: true });
}

function initScrollProgress() {
  const bar = document.getElementById('scrollProgress');
  if (!bar) return;

  const update = () => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = `${total > 0 ? (window.scrollY / total) * 100 : 0}%`;
  };
  update();
  window.addEventListener('scroll', update, { passive: true });
}

function initScrollSpy() {
  const links = document.querySelectorAll('.nav-links a');
  if (!links.length) return;

  const sections = [...links].map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);

  const update = () => {
    const pos = window.scrollY + 120;
    let current = sections[0];
    sections.forEach(sec => { if (sec.offsetTop <= pos) current = sec; });
    if (!current) return;
    links.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === `#${current.id}`);
    });
  };
  update();
  window.addEventListener('scroll', update, { passive: true });
}

function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 600);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Animated stat counters
function initCounters() {
  const counters = document.querySelectorAll('.counter');
  if (!counters.length) return;

  const animate = (el) => {
    const target = parseFloat(el.dataset.target);
    const decimals = parseInt(el.dataset.decimals || '0', 10);
    const suffix = el.dataset.suffix || '';
    const duration = 1400;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = target * eased;
      el.textContent = value.toFixed(decimals) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animate(entry.target);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  counters.forEach(c => io.observe(c));
}

// Hero role typing effect
function initTyping() {
  const el = document.getElementById('typedRole');
  if (!el) return;

  let roleIndex = 0, charIndex = 0, deleting = false;

  const tick = () => {
    const current = heroRoles[roleIndex];
    if (!deleting) {
      charIndex++;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, 1800);
        return;
      }
      setTimeout(tick, 70);
    } else {
      charIndex--;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % heroRoles.length;
        setTimeout(tick, 400);
        return;
      }
      setTimeout(tick, 35);
    }
  };
  setTimeout(tick, 600);
}