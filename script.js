document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const menuBtn = document.getElementById("menu-btn");
  const navbar = document.getElementById("navbar");

  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  window.addEventListener('load', () => {
    window.scrollTo(0, 0);
  });

  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 50);
  });

  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    navbar.classList.toggle("show");
  });

  document.addEventListener("click", (e) => {
    if (navbar.classList.contains("show") && !navbar.contains(e.target) && e.target !== menuBtn) {
      navbar.classList.remove("show");
    }
  });

  document.addEventListener("touchstart", (e) => {
    if (navbar.classList.contains("show") && !navbar.contains(e.target) && e.target !== menuBtn) {
      navbar.classList.remove("show");
    }
  });

  setTimeout(() => {
    AOS.init({
      duration: 750,
      once: true,
      offset: 300
    });
  }, 200);
});