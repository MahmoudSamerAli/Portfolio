// ============================================
// MAHMOUD SAMER - PORTFOLIO (Vanilla JS)
// ============================================

// Projects Database - 15 projects from CV (NO GAMES)
const projectsData = [
  {
    id: 1, title: "Prison Management DB",
    description: "Relational database managing inmate records, rehabilitation programs, and staff. Applied 1NF-3NF normalization with complex stored procedures.",
    tech: ["MSSQL", "ERD", "Stored Procedures"], category: "Database", demo: "#", repo: "#"
  },
  {
    id: 2, title: "Advanced Zoo System",
    description: "Implemented 9 design patterns (Singleton, Factory, Observer) with DB connectivity, modular GUI, and scalable architecture.",
    tech: ["Java", "OOP", "Design Patterns"], category: "Software", demo: "#", repo: "#"
  },
  {
    id: 3, title: "Event Management Web App",
    description: "MVC-patterned web application using Java Servlets/JSP handling HTTP requests, dynamic rendering, and responsive UI.",
    tech: ["Java", "Servlets", "JSP"], category: "Web", demo: "#", repo: "#"
  },
  {
    id: 4, title: "Luxury Car Showroom",
    description: "Full-stack vehicle inventory & sales platform with authentication, interactive galleries, and relational database backend.",
    tech: ["PHP", "SQL", "JavaScript"], category: "Web", demo: "#", repo: "#"
  },
  {
    id: 5, title: "Attendance & Emotion AI",
    description: "Facial recognition attendance tracker with AI emotion detection. R used for statistical analysis and engagement visualization.",
    tech: ["Python", "OpenCV", "R"], category: "AI", demo: "#", repo: "#"
  },
  {
    id: 6, title: "SmartBite Web App",
    description: "Converted mobile UI to responsive web application using Flask. Implemented unit, integration, and manual UI testing.",
    tech: ["Flask", "Python", "Testing"], category: "Web", demo: "#", repo: "#"
  },
  {
    id: 7, title: "Infix to Postfix Calculator",
    description: "Expression evaluator using Shunting-yard algorithm & expression trees. Web UI shows step-by-step conversion.",
    tech: ["C++", "JavaScript", "Algorithms"], category: "Software", demo: "#", repo: "#"
  },
  {
    id: 8, title: "Numerical Methods Calculator",
    description: "Interactive web solver for Bisection, Jacobi, Lagrange Interpolation, and other computational techniques.",
    tech: ["HTML", "CSS", "JavaScript"], category: "Web", demo: "#", repo: "#"
  },
  {
    id: 9, title: "Data Pipeline Automation",
    description: "Automated cleaning of 10K+ records using Pandas, reducing manual reporting time by 10+ hrs/week and cutting errors by 30%.",
    tech: ["Python", "Pandas", "SQL"], category: "Data", demo: "#", repo: "#"
  },
  {
    id: 10, title: "Restaurant Management DB",
    description: "Comprehensive reservation & order tracking system with ERD design, login forms, reporting, and data validation.",
    tech: ["MS Access", "SQL", "VBA"], category: "Database", demo: "#", repo: "#"
  },
  {
    id: 11, title: "Smart RC Car (Arduino)",
    description: "Bluetooth-controlled chassis with PWM motor regulation, ultrasonic obstacle avoidance, and semi-autonomous routing.",
    tech: ["Arduino", "C++", "Sensors"], category: "Hardware", demo: "#", repo: "#"
  },
  {
    id: 12, title: "Digital Alarm Clock",
    description: "Designed digital clock circuit using decade counters, BCD-to-7-segment decoders, and piezo buzzer alarm logic in Multisim.",
    tech: ["Multisim", "Digital Logic", "Hardware"], category: "Hardware", demo: "#", repo: "#"
  },
  {
    id: 13, title: "Online Store UML Documentation",
    description: "Comprehensive UML documentation including activity, sequence, class, misuse, and state diagrams for system behavior modeling.",
    tech: ["UML", "System Design", "Documentation"], category: "Design", demo: "#", repo: "#"
  },
  {
    id: 14, title: "Marketing Agency UX Design",
    description: "Complete UX prototype featuring user flows, wireframes, and polished interface focused on usability and modern aesthetics.",
    tech: ["Figma", "UX/UI", "Prototyping"], category: "Design", demo: "#", repo: "#"
  },
  {
    id: 15, title: "Sorting Algorithms Analysis",
    description: "Implemented Bubble & Selection Sort. Analyzed correctness, execution flow, and comparative time complexity performance.",
    tech: ["Python", "Algorithms", "Analysis"], category: "Algorithms", demo: "#", repo: "#"
  }
];

// Skills Data
const skillsData = [
  { name: "Python", icon: "fab fa-python" },
  { name: "Java", icon: "fab fa-java" },
  { name: "C/C++", icon: "fas fa-code" },
  { name: "SQL", icon: "fas fa-database" },
  { name: "JavaScript", icon: "fab fa-js" },
  { name: "React.js", icon: "fab fa-react" },
  { name: "Node.js", icon: "fab fa-node" },
  { name: "Flutter", icon: "fas fa-mobile-alt" },
  { name: "Arduino", icon: "fas fa-microchip" },
  { name: "Git/GitHub", icon: "fab fa-git-alt" },
  { name: "MSSQL", icon: "fas fa-server" },
  { name: "Figma", icon: "fab fa-figma" }
];

// State
let currentFilter = "All";

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  // Dynamic year
  document.getElementById('year').textContent = new Date().getFullYear();
  
  // Render components
  renderSkills();
  buildFilterBar();
  renderProjects();
  
  // Initialize interactions
  initSmoothScroll();
  initFadeInObserver();
  initMobileNav();
  initContactForm();
  initHeaderScroll();
  
  // Project card interactions
  document.getElementById('projects-container')?.addEventListener('click', handleProjectClick);
});

// ============================================
// RENDER FUNCTIONS
// ============================================
function renderSkills() {
  const container = document.getElementById('skills-container');
  if (!container) return;
  container.innerHTML = skillsData.map(skill => `
    <div class="skill-chip">
      <i class="${skill.icon}"></i>${skill.name}
    </div>
  `).join('');
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
  
  // Attach click events
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

function renderProjects() {
  const container = document.getElementById('projects-container');
  if (!container) return;
  
  const filtered = currentFilter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === currentFilter);
  
  if (filtered.length === 0) {
    container.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:3rem; color:var(--text-muted);">✨ No projects match this category ✨</div>`;
    return;
  }
  
  container.innerHTML = filtered.map(project => `
    <div class="project-card">
      <div class="project-title">${project.title}</div>
      <div class="project-desc">${project.description}</div>
      <div class="tech-stack">
        ${project.tech.map(t => `<span class="tech-badge">${t}</span>`).join('')}
      </div>
      <div class="card-buttons">
        <a href="${project.repo}" class="card-btn" target="_blank" rel="noopener">
          <i class="fab fa-github"></i> Code
        </a>
        <a href="${project.demo}" class="card-btn" target="_blank" rel="noopener">
          <i class="fas fa-external-link-alt"></i> Demo
        </a>
      </div>
    </div>
  `).join('');
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
          const offset = 90;
          const elementPos = target.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ top: elementPos - offset, behavior: 'smooth' });
          
          // Update active nav
          document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
          link.classList.add('active');
        }
      }
    });
  });
}

function initFadeInObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -30px 0px" });
  
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
}

function initMobileNav() {
  const toggle = document.querySelector('.mobile-toggle');
  const nav = document.querySelector('.nav-links');
  
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
      nav.classList.toggle('active');
    });
    
    // Close menu when clicking a link
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        toggle.classList.remove('active');
        nav.classList.remove('active');
      });
    });
  }
}

function handleProjectClick(e) {
  const btn = e.target.closest('.card-btn');
  if (btn && (btn.href === '#' || btn.href.includes('#'))) {
    e.preventDefault();
    const action = btn.textContent.includes('Code') ? 'GitHub' : 'live demo';
    alert(`✨ This is a placeholder link.\n\nIn production, this would open the project's ${action}.\n\nUpdate the 'repo' and 'demo' fields in script.js with your actual URLs.`);
  }
}

// ============================================
// FORM VALIDATION
// ============================================
function validateEmail(email) {
  return /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/.test(email);
}

function validateContactForm() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  let isValid = true;
  
  // Clear errors
  ['name', 'email', 'message'].forEach(id => {
    document.getElementById(`${id}Error`).textContent = '';
    document.getElementById(id).closest('.form-group')?.classList.remove('invalid');
  });
  
  // Name validation
  if (!name) {
    document.getElementById('nameError').textContent = 'Name is required';
    document.getElementById('name').closest('.form-group').classList.add('invalid');
    isValid = false;
  } else if (name.length < 2) {
    document.getElementById('nameError').textContent = 'Please enter a valid name';
    document.getElementById('name').closest('.form-group').classList.add('invalid');
    isValid = false;
  }
  
  // Email validation
  if (!email) {
    document.getElementById('emailError').textContent = 'Email is required';
    document.getElementById('email').closest('.form-group').classList.add('invalid');
    isValid = false;
  } else if (!validateEmail(email)) {
    document.getElementById('emailError').textContent = 'Please enter a valid email';
    document.getElementById('email').closest('.form-group').classList.add('invalid');
    isValid = false;
  }
  
  // Message validation
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
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (validateContactForm()) {
      // Simulate sending
      status.textContent = 'Sending...';
      status.className = 'form-status';
      
      setTimeout(() => {
        status.textContent = '✓ Message sent! I\'ll get back to you soon.';
        status.className = 'form-status success';
        form.reset();
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          status.textContent = '';
        }, 5000);
      }, 1500);
    } else {
      status.textContent = '✗ Please fix the errors above';
      status.className = 'form-status error';
    }
  });
  
  // Real-time validation on blur
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
// HEADER SCROLL EFFECT
// ============================================
function initHeaderScroll() {
  const header = document.querySelector('.header');
  if (!header) return;
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.background = 'rgba(3, 5, 10, 0.98)';
      header.style.borderBottom = '1px solid var(--accent)';
      header.style.boxShadow = '0 8px 30px rgba(0,0,0,0.4)';
    } else {
      header.style.background = 'rgba(3, 5, 10, 0.92)';
      header.style.borderBottom = '1px solid rgba(30, 136, 229, 0.3)';
      header.style.boxShadow = 'none';
    }
  });
}

// Call this once when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
   const yearSpan = document.getElementById('year');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  // 4. Animated skill progress bars
  initSkillBars();

  // 5. Projects filtering & rendering
  buildFilterBar();
  renderProjects();

  // 6. Navigation & scroll behaviors
  initSmoothScroll();
  initFadeInObserver();
  initMobileNav();
  initHeaderScroll();

  // 7. Contact form validation & submission
  initContactForm();

  // 8. Project card click handler (event delegation)
  document.getElementById('projects-container')?.addEventListener('click', handleProjectClick);
});