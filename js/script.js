const API_KEY = "3cbba3d460a0ad0e9892b8a7cd443a19"; // Sostituisci con la tua API Key
const BASE_URL = "https://api.themoviedb.org/3";
const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500"; // Per ottenere le immagini dei film

const fetchMovies = async () => {
    try {
        const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=it-IT&page=1`);
        const data = await response.json();
        console.log(data.results);
        
        // Seleziona tutti i container degli slider
        const sliders = document.querySelectorAll('.slider .sliderContainer');
        
        // Aggiungi i film a ciascun slider
        sliders.forEach(slider => {
            displayMovies(data.results, slider);
        });
    } catch (error) {
        console.error("Errore nel recupero dei dati:", error);
    }
};

const displayMovies = (movies, sliderContainer) => {
    movies.slice(0, 7).forEach(movie => {  // Seleziona solo i primi 5 film
        const movieCard = document.createElement("div");
        movieCard.classList.add("card");
        movieCard.innerHTML = `<img src="${IMG_BASE_URL}${movie.poster_path}" alt="${movie.title}" class="movie-img">`;
        sliderContainer.appendChild(movieCard);
    });
};


fetchMovies();

//scroll
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


document.addEventListener("scroll", () => {
    const navbar = document.querySelector(".header");
    if (window.scrollY > 50) {
        navbar.classList.add("headerscroll");
    } else {
        navbar.classList.remove("headerscroll");
    }
});
