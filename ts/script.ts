import nav from './navbar.js';
import fetchMoviesAndTV from './fetchMovies.js';

fetchMoviesAndTV();
nav();


//scroll slider
/* document.addEventListener("DOMContentLoaded", () => {
    const sliders = document.querySelectorAll('.sliderContainer');

    sliders.forEach(slider => {
        const leftArrow = slider.closest('.slider').querySelector('.arrow-left');
        const rightArrow = slider.closest('.slider').querySelector('.arrow-right');

        let scrollAmount = 0;
        const scrollStep = slider.clientWidth * 1.0; // Scorre circa 80% della larghezza

        rightArrow.addEventListener("click", () => {
            slider.scrollBy({ left: scrollStep, behavior: "smooth" });
        });

        leftArrow.addEventListener("click", () => {
            slider.scrollBy({ left: -scrollStep, behavior: "smooth" });
        });
    });
}); */