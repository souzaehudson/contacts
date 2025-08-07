const menuButton = document.getElementById("menu");

const linksListMobile = document.getElementById("mobileMenu");

const bodyHtml = document.getElementById("body");
const mainHtml = document.getElementById("main");

function showLinksMobile () {
  linksListMobile.style.display = "flex";
  menuButton.style.display = "none";
};

function closeLinksMobile () {
  linksListMobile.style.display = "none";
  menuButton.style.display = "flex";
};

menuButton.addEventListener("click", showLinksMobile);
main.addEventListener("click", closeLinksMobile);
