import lottieWeb from 'https://cdn.skypack.dev/lottie-web'

let clickMeNow = document.getElementById('clickMeNow');
let state = 'play';

let animation = lottieWeb.loadAnimation({
    container: container,
    path: 'https://assets2.lottiefiles.com/private_files/lf30_wkvmesda.json',
    renderer: 'svg',
    loop: false,
    autoplay: false,
    name: "Demo Animation",
});

animation.goToAndStop(115, true);

clickMeNow.addEventListener('click', () => {
    if (state === 'play') {
        animation.playSegments([0, 115], true);
        state = 'pause';
    } else {
        animation.playSegments([0, 115], true);
        state = 'play';
    }
});
