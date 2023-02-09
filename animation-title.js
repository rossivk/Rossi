// ///////animating the title Hi I am Rossi//////////////

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

