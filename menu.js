const hamburger = document.querySelector(".hamburger");
const navItems = document.querySelector(".item");
const overlay = document.querySelector(".overlay");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle('active');
  navItems.classList.toggle("show-menu");
});

// function to close menu items when any one of them is clicked
const navLinks = document.querySelectorAll('.nav-item');
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navItems.classList.remove('show-menu');
  });
});

const main = document.querySelector('main');

// close menu items when the overlay is clicked
overlay.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navItems.classList.remove('show-menu');
});
