export function burgerAction () {
// CONST and VAR declaration

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav--toggle');
const navLink = document.querySelectorAll('.nav-item');
const main = document.querySelector('.main');
const lines = document.querySelectorAll('.burger-line');
console.log(lines);


// functions declaration
  burger.addEventListener('click', (event) => {
    nav.classList.toggle('hidden--toggle');
    main.classList.toggle('hidden--toggle');
    for (let each of lines) {
      each.classList.toggle('burger-crossLine');
    }
    lines[1].classList.toggle('hidden--toggle');
  });
  for (let each of navLink) {
    each.addEventListener('click', (event) => {
      nav.classList.toggle('hidden--toggle');
      main.classList.toggle('hidden--toggle');
      for (let each of lines) {
        each.classList.toggle('burger-crossLine');
      }
      lines[1].classList.toggle('hidden--toggle');
    });
  }
}