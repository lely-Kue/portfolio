import './style.css'

// ─── Project Data ─────────────────────────────────────────────────────────────
const projects = [
  {
    title: "Lely Medlink",
    description: "A state-of-the-art healthcare synchronization platform designed to bridge the gap between patients, doctors, and pharmacies. Features real-time medication tracking, appointment scheduling, and AI-powered health insights.",
    image: "/medlink.png",
    tags: ["Healthcare", "Real-time", "Node.js"],
    demoLink: "https://lely-medlink.netlify.app/",
    codeLink: "https://www.github.com/lely-Kue"
  },
  {
    title: "Baby Jaundice AI",
    description: "An innovative medical assistant that uses computer vision to detect early signs of jaundice in newborns. Developed to provide accessible screening tools for rural clinics and new parents.",
    image: "/jaundice.png",
    tags: ["AI/ML", "Python", "Medical"],
    demoLink: "#",
    codeLink: "https://www.github.com/lely-Kue"
  },
  {
    title: "Zim Tax Assist",
    description: "A comprehensive digital assistant for navigating the Zimbabwean tax landscape. Simplifies PAYE calculations, VAT filings, and corporate tax compliance for SMEs and professionals.",
    image: "/taxassist.png",
    tags: ["LegalTech", "Financial", "Web"],
    demoLink: "#",
    codeLink: "https://www.github.com/lely-Kue"
  }
];

// ─── Custom Cursor ─────────────────────────────────────────────────────────────
const cursor = document.getElementById('custom-cursor');
document.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

function addCursorHover(selector) {
  document.querySelectorAll(selector).forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
  });
}
addCursorHover('a, button, .project-card, .contact-item, .close-modal');

// ─── Hamburger Menu ────────────────────────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// Close menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// Close when clicking outside
document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  }
});

// ─── Active Nav Link on Scroll ─────────────────────────────────────────────────
const sections   = ['hero', 'about', 'projects', 'skills', 'contact'];
const navAnchors = document.querySelectorAll('.nav-link');

function setActiveLink() {
  let current = 'hero';
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 200) current = id;
  });
  navAnchors.forEach(a => {
    a.classList.toggle('active', a.dataset.section === current);
  });
}
window.addEventListener('scroll', setActiveLink, { passive: true });
setActiveLink();

// ─── Project Modal ─────────────────────────────────────────────────────────────
const modal    = document.getElementById('project-modal');
const closeBtn = document.querySelector('.close-modal');
const cards    = document.querySelectorAll('.project-card');

cards.forEach((card, i) => {
  card.addEventListener('click', () => {
    const data = projects[i];
    if (!data) return;
    document.getElementById('modal-title').innerText = data.title;
    document.getElementById('modal-desc').innerText  = data.description;
    document.getElementById('modal-img').src         = data.image;
    document.getElementById('modal-tags').innerHTML  = data.tags.map(t => `<span>${t}</span>`).join('');
    
    const demoBtn = document.getElementById('modal-demo-btn');
    const codeBtn = document.getElementById('modal-code-btn');
    
    if (data.demoLink && data.demoLink !== "#") {
      demoBtn.href = data.demoLink;
      demoBtn.style.display = 'inline-block';
    } else {
      demoBtn.style.display = 'none';
    }

    if (data.codeLink && data.codeLink !== "#") {
      codeBtn.href = data.codeLink;
      codeBtn.style.display = 'inline-block';
    } else {
      codeBtn.style.display = 'none';
    }

    modal.classList.add('active');
  });
  card.addEventListener('mouseenter', () => cursor.classList.add('hover'));
  card.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
});

closeBtn.addEventListener('click', () => modal.classList.remove('active'));
window.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('active'); });

// ─── Scroll Reveal ─────────────────────────────────────────────────────────────
const observer = new IntersectionObserver(
  entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('reveal-visible'); }),
  { threshold: 0.1 }
);
document.querySelectorAll('.project-card, .skill-category').forEach(el => observer.observe(el));

// ─── Scroll Progress Bar ───────────────────────────────────────────────────────
const scrollProgress = document.getElementById('scroll-progress');
window.addEventListener('scroll', () => {
  const scrolled = (document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 100;
  scrollProgress.style.width = scrolled + '%';
}, { passive: true });

// ─── Dynamic Background Glow ──────────────────────────────────────────────────
const bgGlow = document.getElementById('bg-glow');
document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth)  * 100;
  const y = (e.clientY / window.innerHeight) * 100;
  bgGlow.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(112, 0, 255, 0.15) 0%, transparent 70%)`;
});
