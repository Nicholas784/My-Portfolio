const navbar = document.querySelector(".nav");
const navBtn = document.querySelector("#nav-btn");
const clostBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 80) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
});

navBtn.addEventListener("click", () => {
  sidebar.classList.add("show-sidebar");
});

clostBtn.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
});
