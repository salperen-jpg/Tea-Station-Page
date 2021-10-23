// const navBtn = document.getElementById('nav-btn');
// const navBar = document.getElementById('navbar');
// const navClose = document.getElementById('nav-close');

// navBtn.addEventListener('click', () => {
//   navBar.classList.add('showNav');
// });

// navClose.addEventListener('click', () => {
//   navBar.classList.remove('showNav');
// });

// setup nav
const navBtn = document.getElementById('nav-btn');
const navbar = document.getElementById('navbar');
const navClose = document.getElementById('nav-close');
// show nav
navBtn.addEventListener('click', () => {
  navbar.classList.add('showNav');
});
// close nav
navClose.addEventListener('click', () => {
  navbar.classList.remove('showNav');
});
