// Nav timeline

const backgroundMenu = document.getElementsByClassName("nav-container");
let tl1 = new TimelineLite({ paused: true, reversed: true });
tl1.from(backgroundMenu, 0.5, { opacity: 0, x: 750 });

// Hamburger timeline

const upper = document.getElementsByClassName("upper");
const middle = document.getElementsByClassName("middle");
const middle1 = document.getElementsByClassName("middle1");
const lower = document.getElementsByClassName("lower");
let tl2 = new TimelineLite({ paused: true, reversed: true });

tl2
  .to(
    upper,
    0.5,
    {
      attr: { d: "M11,2 L2,11" },
      x: 1,
      stroke: `#082629`,
      strokeWidth: 2,
      ease: Power2.easeInOut
    },
    "start"
  )

  .to(middle, 0.5, { autoAlpha: 0, stroke: `#125B62` }, "start")
  .to(middle1, 0.5, { autoAlpha: 0, stroke: `#81C6BF` }, "start")
  .to(
    lower,
    0.5,
    {
      attr: { d: "M2,2 L11,11" },
      x: 1,
      stroke: `#E49678`,
      strokeWidth: 2,
      ease: Power2.easeInOut
    },
    "start"
  );

// attach the action to the hamburger icon

document
  .querySelector(".hamburger-icon")
  .addEventListener("click", function () {
    tl2.reversed() ? tl2.play() && tl1.play() : tl2.reverse() && tl1.reverse();
  });


///////////////////////////////////////////////

let tl = gsap.timeline();

const socialIcons = document.querySelectorAll(".github, .twitter, .linkedin, .hamburger-lines");
const boxes = document.querySelectorAll(".top-section-box-left, .top-section-box-bottom, .top-section-box-right");

gsap.timeline()
  .from("#top", { duration: 0.5, opacity: 0 })
  .from(".top-section .h1", { opacity: 0, scale: 0, duration: 2, delay: 0.4, ease: "circ.out" })
  .from(".top-section-down", { opacity: 0, ease: "back" }, "-=0.2")
  .from(boxes, { opacity: 0, ease: "back" }, "-=0.2")
  .from(socialIcons, { opacity: 0, duration: 2, stagger: 0.125, x: 300, ease: "back" }, "-=0.2")


// ////////////////////////////////////

const masks = [
  "h-1",
  "h-2",
  "h-3",
  "i1-1",
  "i1-2",
  "comma",
  "iI-1",
  "iI-2",
  "iI-3",
  "a",
  "m",
  "r-1",
  "r-2",
  "o",
  "s",
  "ss",
  "i2-1",
  "i2-2"
];

masks.forEach((mask, index, el) => {
  const id = `#mask-${mask}`;
  let path = document.querySelector(id);
  const length = path.getTotalLength();
  path.style.strokeDasharray = length;
  path.style.strokeDashoffset = length;
});


/////////////////////////////////////////////////////////////////////////////

function functionShowTextWeb() {
  const showText = document.getElementById('showTextWeb');

  if (showText.style.display === 'inline' ||
    showTextGraph.style.display === 'inline') {
    showText.style.display = 'none';
  } else {
    showText.style.display = 'inline';
  }
}

function functionShowTextGraph() {
  const showText = document.getElementById('showTextGraph');

  if (showText.style.display === 'inline') {
    showText.style.display = 'none';
  } else {
    showText.style.display = 'inline';
  }
}

function functionShowTextAnim() {
  const showText = document.getElementById('showTextAnim');

  if (showText.style.display === 'inline') {
    showText.style.display = 'none';
  } else {
    showText.style.display = 'inline';
  }
}




