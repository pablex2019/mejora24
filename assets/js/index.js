//AOS Initialization
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({ duration: 1000, once: true });
  const titleText = "todos los días";
  const paragraphText = "Diagnóstico, auditorías y aseguramiento de calidad mensual para ayudarte a entregar productos confiables, eficientes y centrados en el usuario.";

  const titleEl = document.getElementById("typing-title");
  const textEl = document.getElementById("typing-text");

  let titleIndex = 0;
  let textIndex = 0;

  function typeTitle() {
    if (titleIndex < titleText.length) {
      titleEl.innerHTML +=
        titleText[titleIndex] === "\n"
          ? "<br/>"
          : titleText[titleIndex];
      titleIndex++;
      setTimeout(typeTitle, 80);
    }else{
        setTimeout(typeParagraph,400);
    }
  }
  function typeParagraph() {
    if (textIndex < paragraphText.length) {
      textEl.innerHTML += paragraphText[textIndex];
      textIndex++;
      setTimeout(typeParagraph, 25);
    }
  }
  typeTitle();
});
//menu toggle
function toggleMenu(){
    document.getElementById('menu').classList.toggle('active');
}
// Cerrar el menú automáticamente al hacer clic en un enlace
document.querySelectorAll('#menu li a').forEach(link => {
    link.addEventListener('click', () => {
        const menu = document.getElementById('menu');
        if (menu.classList.contains('active')) {
            menu.classList.remove('active');
        }
    });
});
// scroll events

window.onscroll = () => {
  const scrollY = window.scrollY,
        header = document.getElementById("mainHeader"),
        topBtn = document.getElementById("backToTop");
  header.classList.toggle("fixed", scrollY > 100);
  topBtn.style.display = scrollY > 300 ? "block":"none";
}

document.getElementById("backToTop")?.addEventListener("click", () => {
  window.scrollTo({top:0, behavior:"smooth"});
} )

document.addEventListener('click', (event) => {
    const menu = document.getElementById('menu');
    const toggle = document.querySelector('.menu-toggle');
    
    // Si el clic no fue en el menú ni en el botón de abrir, cerramos
    if (!menu.contains(event.target) && !toggle.contains(event.target)) {
        menu.classList.remove('active');
    }
});