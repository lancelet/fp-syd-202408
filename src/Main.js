import Reveal from 'reveal.js';
import { Elm as SpringElm } from './Spring.elm';
import { Elm as CartsElm } from './Carts.elm';
import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/black.css'

// Initialize the Reveal.js presentation framework.
Reveal.initialize();

// Hook up the spring demo Elm app.
const spring_demo_app = SpringElm.Spring.init({
    node: document.getElementById("spring-demo")
});

// Hook up the carts demo Elm app.
const carts_demo_app = CartsElm.Carts.init({
    node: document.getElementById("carts-demo")
});

// Add listener to go fullscreen when the fullscreen buttons are pressed.
const fullscreenButtons = document.getElementsByClassName("fullscreenButton");
const fullscreenButtonsArray = Array.from(fullscreenButtons);
fullscreenButtonsArray.forEach(function (element) {
    element.addEventListener("click", function () {
        const revealElement = document.querySelector(".reveal");

        if (revealElement.requestFullscreen) {
            revealElement.requestFullscreen();
        } else if (revealElement.mozRequestFullScreen) {
            // Firefox
            revealElement.mozRequestFullScreen();
        } else if (revealElement.webkitRequestFullscreen) {
            // Chrome, Safari, Opera
            revealElement.webkitRequestFullscreen();
        } else if (revealElement.msRequestFullscreen) {
            // IE/Edge
            revealElement.msRequestFullscreen();
        }
    });
});