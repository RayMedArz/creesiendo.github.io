// Escucha el evento de scroll para ajustar la posición del fondo
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY; // Obtiene la cantidad de scroll
    const parallax = document.querySelector('.parallax');
    parallax.style.backgroundPositionY = `${scrolled * 0.5}px`; // Ajusta la posición del fondo
  });
  