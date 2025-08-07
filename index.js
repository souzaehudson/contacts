const menuButton = document.getElementById("menu");
const mobileMenu = document.getElementById("mobileMenu");
const body = document.getElementById("body");
const main = document.getElementById("main");

function showMenu() {
  mobileMenu.style.display = "flex";
  menuButton.style.display = "none";
}

function closeMenu() {
  mobileMenu.style.display = "none";
  menuButton.style.display = "flex";
}

menuButton.addEventListener("click", showMenu);
body.addEventListener("click", closeMenu);
main.addEventListener("click", closeMenu);
