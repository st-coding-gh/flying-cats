export function burgerAction () {
  const toggleLink = document.querySelectorAll('.toggle-link');

  toggleLink.forEach((link)=>{
    link.addEventListener('click', () => {
      const body = document.querySelector('body');
      body.classList.toggle('nav-open');
    })
  });
}