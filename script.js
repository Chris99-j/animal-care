document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector("nav ul"); // changed here

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});
