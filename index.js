window.onload = () => {
  const transitionEl = document.querySelector('.transition-page');
  setTimeout(() => {
    transitionEl.classList.remove('is-active');
  }, 50);
}

// Nav timeline

const menuToggle = document.querySelector('.toggle');
const navContainer = document.querySelector('.nav-container');


menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  navContainer.classList.toggle('active');
})


