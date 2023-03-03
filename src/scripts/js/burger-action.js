export function burgerAction () {
// CONST and VAR declaration

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav--toggle');
const navLink = document.querySelectorAll('.nav-item');
const burgerLines = document.querySelector('.burger-lines');
const burgerCross = document.querySelector('.burger-cross');
const main = document.querySelector('.main');

// functions declaration
  burger.addEventListener('click', (event) => {
    nav.classList.toggle('hidden--toggle');
    burgerLines.classList.toggle('hidden--toggle');
    burgerCross.classList.toggle('hidden--toggle');
    main.classList.toggle('hidden--toggle');
  });
  for (let each of navLink) {
    each.addEventListener('click', (event) => {
      nav.classList.toggle('hidden--toggle');
    });
  }
}