// COPIAR EN PORTAPAPELES EL CORREO ELECTRONICO
document.addEventListener('DOMContentLoaded', () => {
  const navButtons = document.querySelectorAll('.nav-button');

  navButtons.forEach(button => {
    const tooltip = button.querySelector('.tooltip');
    if (tooltip && tooltip.getAttribute('data-tooltip').includes('@')) {
      button.addEventListener('click', (event) => {
        event.preventDefault();

        const email = tooltip.getAttribute('data-tooltip');
        navigator.clipboard.writeText(email)
          .then(() => {
            showCopySuccess(); // Muestra la animación de éxito
          })
          .catch(err => {
            console.error('Error al copiar al portapapeles: ', err);
          });
      });
    }
  });
});

// Muestra la animación de éxito
function showCopySuccess() {
  const copySuccess = document.getElementById('copy-success');
  copySuccess.classList.add('show');

  setTimeout(() => {
    copySuccess.classList.remove('show');
  }, 2000); // La animación desaparece después de 2 segundos
}
