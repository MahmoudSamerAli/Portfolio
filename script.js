// ============================================
// MAHMOUD SAMER - PORTFOLIO (Enhanced)
// ============================================

// Projects Database
const projectsData = [
  {
    id: 1, title: "Prison Management DB",
    description: "Relational database managing inmate records, rehabilitation programs, and staff with 1NF-3NF normalization.",
    tech: ["MSSQL", "ERD", "Stored Procedures"], category: "Database", demo: "#", repo: "#"
  },
  {
    id: 2, title: "Advanced Zoo System",
    description: "Implemented 9 design patterns with DB connectivity, modular GUI, and scalable architecture.",
    tech: ["Java", "OOP", "Design Patterns"], category: "Software", demo: "#", repo: "#"
  },
  {
    id: 3, title: "Event Management Web App",
    description: "MVC-patterned web app using Java Servlets/JSP handling HTTP requests and dynamic rendering.",
    tech: ["Java", "Servlets", "JSP"], category: "Web", demo: "#", repo: "#"
  },
  {
    id: 4, title: "Luxury Car Showroom",
    description: "Full-stack vehicle inventory platform with authentication and relational database backend.",
    tech: ["PHP", "SQL", "JavaScript"], category: "Web", demo: "#", repo: "#"
  },
  {
    id: 5, title: "Attendance & Emotion AI",
    description: "Facial recognition attendance tracker with AI emotion detection and R statistical analysis.",
    tech: ["Python", "OpenCV", "R"], category: "AI", demo: "#", repo: "#"
  },
  {
    id: 6, title: "SmartBite Web App",
    description: "Converted mobile UI to responsive web application using Flask with comprehensive testing.",
    tech: ["Flask", "Python", "Testing"], category: "Web", demo: "#", repo: "#"
  },
  {
    id: 7, title: "Infix to Postfix Calculator",
    description: "Expression evaluator using Shunting-yard algorithm with step-by-step web UI.",
    tech: ["C++", "JavaScript", "Algorithms"], category: "Software", demo: "#", repo: "#"
  },
  {
    id: 8, title: "Numerical Methods Calculator",
    description: "Interactive web solver for Bisection, Jacobi, Lagrange Interpolation techniques.",
    tech: ["HTML", "CSS", "JavaScript"], category: "Web", demo: "#", repo: "#"
  },
  {
    id: 9, title: "Data Pipeline Automation",
    description: "Automated cleaning of 10K+ records using Pandas, saving 10+ hours/week.",
    tech: ["Python", "Pandas", "SQL"], category: "Data", demo: "#", repo: "#"
  },
  {
    id: 10, title: "Restaurant Management DB",
    description: "Comprehensive reservation system with ERD design, login forms, and reporting.",
    tech: ["MS Access", "SQL", "VBA"], category: "Database", demo: "#", repo: "#"
  },
  {
    id: 11, title: "Smart RC Car (Arduino)",
    description: "Bluetooth-controlled chassis with PWM motor regulation and ultrasonic obstacle avoidance.",
    tech: ["Arduino", "C++", "Sensors"], category: "Hardware", demo: "#", repo: "#"
  },
  {
    id: 12, title: "Digital Alarm Clock",
    description: "Digital clock circuit using decade counters, BCD-to-7-segment decoders in Multisim.",
    tech: ["Multisim", "Digital Logic", "Hardware"], category: "Hardware", demo: "#", repo: "#"
  },
  {
    id: 13, title: "Online Store UML Documentation",
    description: "Comprehensive UML diagrams including activity, sequence, class, and state diagrams.",
    tech: ["UML", "System Design", "Documentation"], category: "Design", demo: "#", repo: "#"
  },
  {
    id: 14, title: "Marketing Agency UX Design",
    description: "Complete UX prototype with user flows, wireframes, and polished interface in Figma.",
    tech: ["Figma", "UX/UI", "Prototyping"], category: "Design", demo: "#", repo: "#"
  },
  {
    id: 15, title: "Sorting Algorithms Analysis",
    description: "Implemented Bubble & Selection Sort with correctness and time complexity analysis.",
    tech: ["Python", "Algorithms", "Analysis"], category: "Algorithms", demo: "#", repo: "#"
  }
];

let currentFilter = "All";

// ============================================
// INTERACTIVE BACKGROUND
// ============================================
function initInteractiveBackground() {
  const canvas = document.getElementById('bgCanvas');
  const ctx = canvas.getContext('2d');
  
  let width, height;
  let particles = [];
  const particleCount = 60;
  const connectionDistance = 150;
  const mouseDistance = 200;
  
  let mouse = { x: null, y: null };
  
  window.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });
  
  window.addEventListener('resize', resize);
  
  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  
  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.5;
      this.vy = (Math.random() - 0.5) * 0.5;
      this.size = Math.random() * 2 + 1;
    }
    
    update() {
      this.x += this.vx;
      this.y += this.vy;
      
      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;
      
      // Mouse interaction
      if (mouse.x != null) {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouseDistance) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (mouseDistance - distance) / mouseDistance;
          const directionX = forceDirectionX * force * 0.6;
          const directionY = forceDirectionY * force * 0.6;
          
          this.vx += directionX;
          this.vy += directionY;
        }
      }
    }
    
    draw() {
      ctx.fillStyle = 'rgba(30, 136, 229, 0.5)';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  
  function init() {
    resize();
    particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
  }
  
  function animate() {
    ctx.clearRect(0, 0, width, height);
    
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
      
      // Draw connections
      for (let j = i; j < particles.length; j++) {
        let dx = particles[i].x - particles[j].x;
        let dy = particles[i].y - particles[j].y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < connectionDistance) {
          ctx.beginPath();
          let opacity = 1 - (distance / connectionDistance);
          ctx.strokeStyle = `rgba(30, 136, 229, ${opacity * 0.2})`;
          ctx.lineWidth = 1;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
    
    requestAnimationFrame(animate);
  }
  
  init();
  animate();
}

// ============================================
// TERMINAL UI
// ============================================
function initTerminalUI() {
  const tuiToggle = document.getElementById('tuiToggle');
  const terminalUI = document.getElementById('terminalUI');
  const closeTerminal = document.getElementById('closeTerminal');
  const terminalInput = document.getElementById('terminalInput');
  const terminalOutput = document.getElementById('terminalOutput');
  const terminalBody = document.getElementById('terminalBody');
  
  const commands = {
    help: () => `
<div class="terminal-output-line">Available commands:</div>
<div class="terminal-output-line">  <span class="cmd-highlight">home</span>       - Go to home section</div>
<div class="terminal-output-line">  <span class="cmd-highlight">about</span>      - About me</div>
<div class="terminal-output-line">  <span class="cmd-highlight">experience</span> - Work experience</div>
<div class="terminal-output-line">  <span class="cmd-highlight">skills</span>     - Technical skills</div>
<div class="terminal-output-line">  <span class="cmd-highlight">projects</span>   - View projects</div>
<div class="terminal-output-line">  <span class="cmd-highlight">contact</span>    - Contact information</div>
<div class="terminal-output-line">  <span class="cmd-highlight">clear</span>      - Clear terminal</div>
<div class="terminal-output-line">  <span class="cmd-highlight">close</span>      - Close terminal</div>
`,
    home: () => {
      navigateToSection('home');
      return '<div class="terminal-output-line">✓ Navigated to Home section</div>';
    },
    about: () => {
      navigateToSection('about');
      return '<div class="terminal-output-line">✓ Navigated to About section</div>';
    },
    experience: () => {
      navigateToSection('experience');
      return '<div class="terminal-output-line">✓ Navigated to Experience section</div>';
    },
    skills: () => {
      navigateToSection('skills');
      return '<div class="terminal-output-line">✓ Navigated to Skills section</div>';
    },
    projects: () => {
      navigateToSection('projects');
      return '<div class="terminal-output-line">✓ Navigated to Projects section</div>';
    },
    contact: () => {
      navigateToSection('contact');
      return '<div class="terminal-output-line">✓ Navigated to Contact section</div>';
    },
    clear: () => {
      terminalOutput.innerHTML = '';
      return '';
    },
    close: () => {
      closeTUI();
      return '';
    }
  };
  
  function navigateToSection(sectionId) {
    closeTUI();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  function closeTUI() {
    terminalUI.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }
  
  function openTUI() {
    terminalUI.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    terminalInput.focus();
  }
  
  function executeCommand(cmd) {
    const command = cmd.toLowerCase().trim();
    
    // Add command to output
    const cmdLine = document.createElement('div');
    cmdLine.className = 'terminal-output-line';
    cmdLine.innerHTML = `<span class="prompt">mahmoud@portfolio:~$</span> ${cmd}`;
    terminalOutput.appendChild(cmdLine);
    
    if (commands[command]) {
      const result = commands[command]();
      if (result) {
        const resultDiv = document.createElement('div');
        resultDiv.innerHTML = result;
        terminalOutput.appendChild(resultDiv);
      }
    } else if (command !== '') {
      const errorDiv = document.createElement('div');
      errorDiv.className = 'terminal-output-line';
      errorDiv.innerHTML = `<span style="color: var(--error)">Command not found: ${cmd}. Type 'help' for available commands.</span>`;
      terminalOutput.appendChild(errorDiv);
    }
    
    terminalBody.scrollTop = terminalBody.scrollHeight;
  }
  
  tuiToggle.addEventListener('click', openTUI);
  closeTerminal.addEventListener('click', closeTUI);
  
  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const value = terminalInput.value;
      terminalInput.value = '';
      executeCommand(value);
    }
  });
  
  // Auto-show available commands on open
  terminalUI.addEventListener('transitionend', (e) => {
    if (!terminalUI.classList.contains('hidden') && e.target === terminalUI) {
      setTimeout(() => {
        const helpDiv = document.createElement('div');
        helpDiv.innerHTML = commands.help();
        terminalOutput.appendChild(helpDiv);
        terminalBody.scrollTop = terminalBody.scrollHeight;
      }, 300);
    }
  });
}

// ============================================
// ANIMATED SKILL BARS
// ============================================
function initSkillBars() {
  const skillBars = document.querySelectorAll('.skill-progress');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const progress = entry.target;
        const targetWidth = progress.getAttribute('data-progress');
        
        setTimeout(() => {
          progress.style.width = targetWidth + '%';
        }, 200);
        
        observer.unobserve(progress);
      }
    });
  }, { threshold: 0.5, rootMargin: '0px 0px -50px 0px' });
  
  skillBars.forEach(bar => observer.observe(bar));
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();
  
  // Initialize features
  initInteractiveBackground();
  initTerminalUI();
  initSkillBars();
  buildFilterBar();
  renderProjects();
  initSmoothScroll();
  initFadeInObserver();
  initMobileNav();
  initContactForm();
  initHeaderScroll();
  
  document.getElementById('projects-container')?.addEventListener('click', handleProjectClick);
});

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
          
          document.querySelectorAll('.nav-link').forEach(a => a.classList.remove('active'));
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
    alert(`✨ This is a placeholder link.\n\nUpdate the 'repo' and 'demo' fields in script.js with your actual URLs.`);
  }
}

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
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (validateContactForm()) {
      status.textContent = 'Sending...';
      status.className = 'form-status';
      
      setTimeout(() => {
        status.textContent = '✓ Message sent! I\'ll get back to you soon.';
        status.className = 'form-status success';
        form.reset();
        
        setTimeout(() => {
          status.textContent = '';
        }, 5000);
      }, 1500);
    } else {
      status.textContent = '✗ Please fix the errors above';
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