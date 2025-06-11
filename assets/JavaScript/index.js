// <!-- ===== Page Section: Particles Background Start ===== -->
// This script creates a particles background effect using HTML5 Canvas.
const canvas = document.getElementById('particles-bg');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 0.5;
    this.speedX = Math.random() * 0.5 - 0.25;
    this.speedY = Math.random() * 0.5 - 0.25;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
  }

  draw() {
    ctx.fillStyle = 'rgba(252, 7, 7, 0.65)';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function initParticles() {
  particlesArray = [];
  for (let i = 0; i < 100; i++) {
    particlesArray.push(new Particle());
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particlesArray.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animateParticles);
}

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initParticles();
});

initParticles();
animateParticles();

// <!-- ======= Particles Background Section End ======= -->



// <!-- ===== Page Section: Navigation Start ===== -->
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("active");
}
document.getElementById("menuToggle").addEventListener("click", toggleMenu);
// <!-- ======= Navigation Section End ======= -->

// <!-- ===== Page Section: Hero Start ===== -->
function initTyped() {
  let typed = new Typed("#typed-text", {
    strings: [
      "I'm a Front-End Developer.",
      "I design user-friendly UIs.",
      "I freelance globally.",
      "I build responsive websites."
    ],
    typeSpeed: 60,
    backSpeed: 30,
    backDelay: 1500,
    loop: true
  });   
  document.querySelector("#typed-text").style.fontSize = "2rem";
  document.querySelector("#typed-text").style.fontWeight = "bold";
}
document.addEventListener("DOMContentLoaded", initTyped);

// <!-- ======= Hero Section End ======= -->

// <!-- ===== Page Section: Skills Start ===== -->
const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popupTitle");
const popupText = document.getElementById("popupText");
const closePopup = document.getElementById("closePopup");

const contentMap = {
  html: {
    title: "HTML (HyperText Markup Language)",
    text: "2 years of experience building responsive, semantic websites using HTML5. I structure content with accessibility, SEO, and layout consistency in mind."
  },
  css: {
    title: "CSS (Cascading Style Sheets)",
    text: "Expert in Flexbox, Grid, and custom animations. I style responsive and attractive interfaces with a focus on user experience and modern aesthetics."
  },
  bootstrap: {
    title: "Bootstrap",
    text: "Proficient with Bootstrap 5 — grid system, components, utilities. I create mobile-first, fast-loading, clean websites with minimal custom CSS."
  },
  tailwind: {
    title: "Tailwind CSS",
    text: "2 years of experience building modern UIs with utility-first classes. Fully responsive, theme-aware design using Tailwind’s advanced features."
  },
  js: {
    title: "JavaScript",
    text: "2 years building dynamic UI with vanilla JavaScript: modals, sliders, event handling, and DOM manipulation. I use modern ES6+ features."
  },
  react: {
    title: "React JS",
    text: "1 year experience building SPAs with React. Proficient in hooks, component-based architecture, routing, props, and state management."
  }
};

// Animate progress bars on scroll
window.addEventListener("scroll", () => {
  document.querySelectorAll(".progress-bar").forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      const skill = bar.dataset.skill;
      const width = skill === "react" ? "80%" : "100%";
      bar.querySelector(".progress").style.width = width;
    }
  });
});

// Popup open
document.querySelectorAll(".view-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const skill = btn.dataset.skill;
    popupTitle.textContent = contentMap[skill].title;
    popupText.textContent = contentMap[skill].text;
    popup.style.display = "flex";
  });
});

// Popup close
closePopup.addEventListener("click", () => {
  popup.style.display = "none";
});



// <!-- ======= Skills Section End ======= -->


// <!-- ===== Page Section: Contact Start ===== -->
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const fullMessage = `Hello, my name is ${name}%0AEmail: ${email}%0AMessage: ${message}`;
  const phoneNumber = "923245351410"; // <-- Replace with your WhatsApp number (no + or -)

  window.open(`https://wa.me/${phoneNumber}?text=${fullMessage}`, "_blank");
});
// <!-- ======= Contact Section End ======= -->

// <!-- ===== Page Section: Footer Start ===== -->
// Show button on scroll
const scrollBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

// Scroll to top on click
scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
// <!-- ======= Footer Section End ======= -->