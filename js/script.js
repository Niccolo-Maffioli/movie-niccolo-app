import nav from './navbar.js';
import movie from "./array.js";
import slider from './slider.js';
import tv from './seriesArray.js';
import showAlert from './alert.js';

tv();

movie();

nav();

slider();

const alertButton = document.querySelector('#alertButton');

alertButton.addEventListener("click", () => {
    showAlert();
})

/* alertButton === null || alertButton === void 0 ? void 0 : alertButton.addEventListener('click', function () {
    alert('Play');
});

document.getElementById("infoButton").addEventListener('click', showAlert); 

map
filter
reduce
sort
forEach
some
every
find
*/