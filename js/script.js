import nav from './navbar.js';
/* import fetchMoviesAndTV from './fetchMovies.js';
 */
/* fetchMoviesAndTV(); */
//import stampaMovies from './fetchMovies.js';

import movie from "./array.js";

movie();

/* 
map
filter
reduce
sort
forEach
some
every
find
*/

nav();

/*stampaMovies();

const alertButton = document.querySelector('#alertButton');

alertButton === null || alertButton === void 0 ? void 0 : alertButton.addEventListener('click', function () {
    alert('Play');
}); */

//scroll slider
document.addEventListener("DOMContentLoaded", () => {
    const sliders = document.querySelectorAll('.sliderContainer');

    sliders.forEach(slider => {
        const paginations = slider.parentElement.querySelectorAll('.pagination'); // Prende le paginazioni relative al singolo slider
        const leftArrow = slider.parentElement.querySelector('.arrow-left');
        const rightArrow = slider.parentElement.querySelector('.arrow-right');

        let scrollAmount = 0;
        const scrollStep = slider.clientWidth * 1.0; // Scorre tutta la larghezza del container

        rightArrow.addEventListener("click", () => {
            slider.scrollBy({ left: scrollStep, behavior: "smooth" });

            const activePagination = document.querySelector('.active-pagination');

            let nextPagination = activePagination.nextElementSibling;

            activePagination.classList.remove("active-pagination");
            nextPagination.classList.add("active-pagination");
        });

        leftArrow.addEventListener("click", () => {
            slider.scrollBy({ left: -scrollStep, behavior: "smooth" });

            const activePagination = document.querySelector('.active-pagination');

            let prevPagination = activePagination.previousElementSibling;

            activePagination.classList.remove("active-pagination");
            prevPagination.classList.add("active-pagination");
        });
    });
});


//document.getElementById("infoButton").addEventListener('click', showAlert);

