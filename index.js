// Nav timeline

const menuToggle = document.querySelector('.toggle');
const navContainer = document.querySelector('.nav-container');
const navLinkWrapper = document.querySelector('.nav-link-wrapper');


menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  navContainer.classList.toggle('active');
  navLinkWrapper.classList.toggle('active');
})


///////// funtion shows hidden text //////////

let buttons = document.getElementsByClassName('click-me-to-show-text');
let text = document.getElementsByClassName('show-text');

showText(buttons, text);

let buttonsExperience = document.getElementsByClassName('click-me-to-show-experience');
let text1 = document.getElementsByClassName('resume-info-experience-collapse');

showText(buttonsExperience, text1);

function showText(array, text) {
  for (let i = 0; i < array.length; i++) {
    array[i].addEventListener('click', () => {
      if (text[i].style.display === 'inline') {
        text[i].style.display = 'none';
      } else {
        text[i].style.display = 'inline';
      }
    });
  }
}



////////////  typewriter text for animated icon coming soon
// let letterIndex = 0;
// let textToType = 'Next icon. Coming soon';
// let speed = 25;

// function typeWriter() {

//   if (letterIndex < textToType.length) {
//     document.getElementById("typingText").innerHTML += textToType.charAt(letterIndex);
//     letterIndex++;
//     setTimeout(typeWriter, speed);
//   }
// }


