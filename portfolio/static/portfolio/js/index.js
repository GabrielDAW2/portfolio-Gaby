// Parallax effect
window.addEventListener('scroll', () => {
  document.querySelectorAll('.section').forEach(section => {
    const speed = 0.5;
    const offset = window.pageYOffset * speed;
    section.style.backgroundPositionY = `${offset}px`;
  });
});

// Scroll animations
const sections = document.querySelectorAll('.section');
const options = {
  threshold: 0.5
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, options);

sections.forEach(section => observer.observe(section));

// Ejecutar animacion de los ESTUDIOS cuando el usuario haga scroll hacia ellos
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".degree-card");

  function checkScroll() {
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top <= windowHeight - 50) { // Ajusta el valor -50 según lo necesites
        card.classList.add("animate");
      }
    });
  }

  window.addEventListener("scroll", checkScroll);
  checkScroll(); // Llama la función al cargar para verificar si algún elemento ya es visible
});


