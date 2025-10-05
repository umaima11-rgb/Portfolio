/* === Particles.js Configuration === */
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
    "color": { "value": "#00adb5" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.5 },
    "size": { "value": 3, "random": true },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#00adb5",
      "opacity": 0.4,
      "width": 1
    },
    "move": { "enable": true, "speed": 2, "out_mode": "out" }
  },
  "interactivity": {
    "events": {
      "onhover": { "enable": true, "mode": "grab" },
      "onclick": { "enable": true, "mode": "push" }
    },
    "modes": {
      "grab": { "distance": 140, "line_linked": { "opacity": 1 } },
      "push": { "particles_nb": 4 }
    }
  },
  "retina_detect": true
});

/* === Tab Switching with Animation === */
function showSection(id) {
  // Hide all sections
  document.querySelectorAll("main section").forEach(sec => {
    sec.classList.remove("active");
    sec.style.display = "none"; // fully hide
  });

  // Show target
  const target = document.getElementById(id);
  if (target) {
    target.style.display = "block"; // show only selected
    target.classList.add("active");

    // Smooth fade animation
    target.style.opacity = 0;
    setTimeout(() => {
      target.style.transition = "opacity 0.5s ease";
      target.style.opacity = 1;
    }, 50);
  }
}

// Navbar + Hero Buttons
document.querySelectorAll("[data-section]").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const id = link.getAttribute("data-section");
    if (id) showSection(id);
  });
});

// Show ONLY Home on first load
document.addEventListener("DOMContentLoaded", () => {
  showSection("hero");  // only once when the site first loads
});
