const text = "console.log(\"¡Hola! Soy Gabriel\");";
let index = 0;

function typeEffect() {
  const titleElement = document.getElementById("title");  // Captura el elemento
  
  if (titleElement) {  // Verifica si el elemento existe
    if (index <= text.length) {
      titleElement.innerHTML = text.slice(0, index);  // Actualiza el contenido progresivamente
      index++;
      setTimeout(typeEffect, 150);  // Controla la velocidad del efecto
    }
  } else {
    console.error("El elemento con id='title' no se encontró.");
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Aplica el estilo de la fuente cuando se carga la página
  const titleElement = document.getElementById("title");
  if (titleElement) {
    titleElement.style.fontFamily = "'Press Start 2P', sans-serif"; // Aplica la fuente de píxeles
  }

  typeEffect(); // Inicia el efecto de escritura
});