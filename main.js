// Scroll Reveal (animações ao fazer scroll)
const scrollReveal = ScrollReveal({
    origin: "top",
    distance: "30px",
    duration: 700,
    reset: true,
  });
  
  scrollReveal.reveal(
    `#home .image, #home .text`,
    { interval: 100 }
  );
  
  // Função para mostrar/ocultar o menu
  function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('hidden');
  }
  