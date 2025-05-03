document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav-menu");
  
    toggle.addEventListener("click", () => {
      nav.classList.toggle("active");
  
      // Toggle icon between ☰ and ✖
      toggle.textContent = toggle.textContent === "☰" ? "✖" : "☰";
    });
  });
  