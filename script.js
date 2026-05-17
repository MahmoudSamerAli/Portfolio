// ---------- PROJECT DATABASE (15 MISSIONS) ----------
const projectsData = [
    { id: 1, name: "NEON//MATRIX", description: "Immersive 3D grid with real-time particle waves, WebGL powered interactive cyberpunk landscape.", tech: "Three.js, WebGL, JS ES6", demo: "#", github: "#" },
    { id: 2, name: "GHOST TERMINAL", description: "Command line portfolio with animated ASCII effects and retro game-style UI.", tech: "HTML/CSS, JavaScript, Canvas", demo: "#", github: "#" },
    { id: 3, name: "VOID ENGINE", description: "Procedural starfield generator with mouse parallax, optimized for high FPS.", tech: "Canvas API, RequestAnimationFrame", demo: "#", github: "#" },
    { id: 4, name: "PHANTOM SHELL", description: "Futuristic dashboard for mission control, real-time clock & audio visualizer concept.", tech: "CSS Grid, Web Audio API", demo: "#", github: "#" },
    { id: 5, name: "DATA SPIKE", description: "Cyberpunk data encryption simulation with glitch transitions.", tech: "JavaScript, CSS filters", demo: "#", github: "#" },
    { id: 6, name: "SYNAPSE DRIVE", description: "Neural network visualizer (mock) with interactive nodes.", tech: "SVG, D3.js style (vanilla JS)", demo: "#", github: "#" },
    { id: 7, name: "QUANTUM DASH", description: "Endless runner game prototype with neon aesthetics and highscore.", tech: "HTML5 Canvas, Game Loop", demo: "#", github: "#" },
    { id: 8, name: "CYBER//GRID", description: "Responsive dashboard with live weather API and futuristic HUD design.", tech: "Fetch API, CSS Grid", demo: "#", github: "#" },
    { id: 9, name: "NOVA TERMINAL", description: "Terminal-style web app with command shortcuts and glow effects.", tech: "JavaScript Events, CSS", demo: "#", github: "#" },
    { id: 10, name: "VOLTAGE FORGE", description: "Code editor with syntax highlighting and live preview (lite).", tech: "LocalStorage, contenteditable", demo: "#", github: "#" },
    { id: 11, name: "SHADOW FALL", description: "Interactive parallax scrolling story experience, cyber-noir theme.", tech: "CSS Scroll, JS Intersection", demo: "#", github: "#" },
    { id: 12, name: "ORBITAL SHIFT", description: "Dynamic orbital particle system with gravitation simulation.", tech: "Canvas, Vector Math", demo: "#", github: "#" },
    { id: 13, name: "GLITCH RUNNER", description: "Chrome dinosaur-like game but with glitch effects and neon terrain.", tech: "Canvas, Game dev", demo: "#", github: "#" },
    { id: 14, name: "CRYPTO DRONE", description: "Portfolio that mimics a drone control interface with interactive buttons.", tech: "CSS 3D, Flex", demo: "#", github: "#" },
    { id: 15, name: "CORE//BREACH", description: "Hacking-themed password strength meter & retro terminal effect.", tech: "Regex, JS animations", demo: "#", github: "#" }
  ];

// DOM elements
const mainMenuScreen = document.getElementById('mainMenu');
const projectHubScreen = document.getElementById('projectHub');
const projectsGrid = document.getElementById('projectsGrid');
const startBtn = document.getElementById('startGameBtn');
const returnLobbyBtn = document.getElementById('returnLobbyBtn');
const modalOverlay = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalTech = document.getElementById('modalTech');
const demoLink = document.getElementById('demoLink');
const githubLink = document.getElementById('githubLink');
const closeModalBtn = document.getElementById('closeModalBtn');
const bootLoader = document.getElementById('bootLoader');
const bootProgressBar = document.getElementById('bootProgressBar');

let currentOpenedProject = null;

// Helper: Switch Screen with subtle transition
function showScreen(screenToShow) {
  if (screenToShow === 'menu') {
    mainMenuScreen.classList.remove('hidden');
    projectHubScreen.classList.add('hidden');
  } else if (screenToShow === 'hub') {
    projectHubScreen.classList.remove('hidden');
    mainMenuScreen.classList.add('hidden');
  }
}

// Render all 15 mission cards (unlocked style)
function renderProjects() {
  projectsGrid.innerHTML = '';
  projectsData.forEach(project => {
    const card = document.createElement('div');
    card.className = 'mission-card';
    card.setAttribute('data-id', project.id);
    card.innerHTML = `
      <div class="mission-level">MISSION-0${project.id}</div>
      <div class="mission-name">${project.name}</div>
      <div class="mission-tech">🛠️ ${project.tech.substring(0, 40)}${project.tech.length > 40 ? '...' : ''}</div>
    `;
    card.addEventListener('click', (e) => {
      e.stopPropagation();
      openProjectModal(project.id);
    });
    projectsGrid.appendChild(card);
  });
}

// Open modal with selected project data
function openProjectModal(projectId) {
  const project = projectsData.find(p => p.id === projectId);
  if (!project) return;
  currentOpenedProject = project;
  modalTitle.innerText = project.name;
  modalDesc.innerText = project.description;
  modalTech.innerText = `⚡ TECH ARRAY: ${project.tech}`;
  demoLink.href = project.demo || "#";
  githubLink.href = project.github || "#";
  modalOverlay.classList.add('active');
}

function closeModal() {
  modalOverlay.classList.remove('active');
  currentOpenedProject = null;
}

// ========== TYPING ANIMATION ON MAIN MENU ==========
function typeEffect(element, text, speed = 50) {
  let i = 0;
  element.textContent = '';
  function typing() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}

// boot sequence with progress
function bootSequence() {
  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 12) + 3;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      setTimeout(() => {
        bootLoader.style.opacity = '0';
        setTimeout(() => {
          bootLoader.style.display = 'none';
        }, 800);
      }, 200);
    }
    bootProgressBar.style.width = progress + '%';
  }, 60);
}

// Load typing intro line
function initTypingIntro() {
  const typingContainer = document.getElementById('typingDemo');
  const messages = [">_ SYSTEM ACCESS: GRANTED", ">_ 15 COVERT PROJECTS DETECTED", ">_ PRESS START TO ENTER HUB"];
  let msgIndex = 0;
  function cycleTyping() {
    if (msgIndex < messages.length) {
      typeEffect(typingContainer, messages[msgIndex], 45);
      msgIndex++;
      setTimeout(cycleTyping, 1700);
    } else {
      setTimeout(() => {
        typeEffect(typingContainer, ">_ AWAITING COMMAND...", 55);
      }, 800);
    }
  }
  cycleTyping();
}

// Additional futuristic background: dynamic neon cursor in input? not needed
// Event listeners
startBtn.addEventListener('click', () => {
  // Render projects if grid empty (already rendered but just in case)
  if (projectsGrid.children.length === 0) renderProjects();
  showScreen('hub');
});

returnLobbyBtn.addEventListener('click', () => {
  showScreen('menu');
  // re-trigger typing activity for fresh feel
  const typingArea = document.getElementById('typingDemo');
  typeEffect(typingArea, ">_ MISSION ABORTED. RETURN TO LOBBY", 50);
  setTimeout(() => {
    if (!mainMenuScreen.classList.contains('hidden')) {
      typeEffect(typingArea, ">_ AWAITING COMMAND...", 55);
    }
  }, 1800);
});

closeModalBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});

// Ensure responsive & hidden screens: Preload all projects
function init() {
  bootSequence();
  renderProjects();
  initTypingIntro();
  // set default hidden hub
  projectHubScreen.classList.add('hidden');
  mainMenuScreen.classList.remove('hidden');
  // optional: after boot, bonus flicker effect
}

// Disable right-click context (game-like)
window.addEventListener('contextmenu', (e) => e.preventDefault());

// Hover sound effect? (optional not forced, but just to add subtle audio? Skipped for compatibility)
// But we add smooth vibes via CSS already

// Add keyboard support: ESC closes modal
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
    closeModal();
  }
});

// Create project buttons with real placeholder links
// also dynamically set demo/github to be '#' and add target blank but we already did

// little extra: Glow on any button press - optional
const allBtns = document.querySelectorAll('button');
allBtns.forEach(btn => {
  btn.addEventListener('mousedown', () => {
    btn.style.transform = 'scale(0.97)';
    setTimeout(() => { btn.style.transform = ''; }, 120);
  });
});

// Preload image / nothing. fire init
init();

// Ensure after modal any interactivity stays
// Add extra "live demo and github placeholders note: they open # but can be replaced
// For smoothness, we also create a glitch effect on hover on mission cards
// Ensure responsiveness of back navigation: return lobby resets hub closed?
// if user clicks card while modal open it's fine.

// Additional nuance: If we have hub reopen, projects grid remains rendered; no double init.
// Also note: unlocked style (no locks) because all missions accessible

// small adjustments for neon buttons:
const style = document.createElement('style');
style.innerHTML = `
  .mission-card:active { transform: scale(0.98); transition: 0.02s; }
  button, .modal-btn, .start-btn, .lobby-btn { transition: all 0.15s ease; }
  .mission-card:hover .mission-name { text-shadow: 0 0 6px cyan; }
`;
document.head.appendChild(style);