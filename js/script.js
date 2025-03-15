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
    movies.forEach(movie => {
        const movieCard = document.createElement("div");
        movieCard.classList.add("card");
        movieCard.innerHTML = `<img src="${IMG_BASE_URL}${movie.poster_path}" alt="${movie.title}" class="movie-img">`;
        sliderContainer.appendChild(movieCard);
    });
};


fetchMovies();

//scroll

document.addEventListener("scroll", () => {
    const navbar = document.querySelector(".header");
    if (window.scrollY > 50) { // Cambia valore in base alle tue esigenze
        navbar.classList.add("headerscroll");
    } else {
        navbar.classList.remove("headerscroll");
    }
});
