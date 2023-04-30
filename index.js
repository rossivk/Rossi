// Nav timeline

const menuToggle = document.querySelector('.toggle');
const navContainer = document.querySelector('.nav-container');


menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  navContainer.classList.toggle('active');
})

