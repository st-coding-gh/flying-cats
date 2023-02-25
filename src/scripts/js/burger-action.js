export function burgerAction () {
// CONST and VAR declaration

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav--toggle');
const navLink = document.querySelectorAll('.nav-item');

// functions declaration
  burger.addEventListener('click', (event) => {
    nav.classList.toggle('hidden--toggle');
  });
  for (let each of navLink) {
    each.addEventListener('click', (event) => {
      nav.classList.toggle('hidden--toggle');
    });
  }
}