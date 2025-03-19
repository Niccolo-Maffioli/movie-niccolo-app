import nav from './navbar.js';

const API_KEY: string = "70ddf3e274ba737bb04c206babec5fea";
const BASE_URL: string = "https://api.themoviedb.org/3";
const IMG_BASE_URL: string = "https://image.tmdb.org/t/p/w500"; // Per ottenere le immagini dei film

interface Movie {
  poster_path: string | null;
  title?: string;
  name?: string;
}

const fetchMoviesAndTV = async (): Promise<void> => {
    const sliders = document.querySelectorAll<HTMLElement>('.sliderContainer');

    sliders.forEach(async (slider: HTMLElement) => {
        const type = slider.dataset.type; // Legge il tipo dallo slider (movie/tv/documentary)
        
        let endpoint: string;
        if (type === "movie") {
            endpoint = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`;  // Corretto: movie e non tv
        } else if (type === "popular") {
            endpoint = `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=it-IT`;
        } else if (type === "documentary") {
            endpoint = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`; // 99 = documentari
        } else if (type === "anime") {
            endpoint = `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=16`; // 16 = anime
        } else {
            console.warn(`Tipo non riconosciuto: ${type}`);
            return;
        }

        try {
            const response = await fetch(`${endpoint}&language=it-IT&page=1`);
            const data = await response.json();
            displayMovies(data.results, slider);
        } catch (error) {
            console.error(`Errore nel caricamento di ${type}:`, error);
        }
    });
};

// Funzione per mostrare i film/serie TV nello slider
const displayMovies = (movies: Movie[], sliderContainer: HTMLElement): void => {
    if (!movies || movies.length === 0) {
        console.warn("Nessun film/serie TV disponibile per questo slider.");
        return;
    }

    movies.slice(0, 7).forEach((movie: Movie) => {
        const movieCard = document.createElement("div");
        movieCard.classList.add("card");
        const imageUrl = movie.poster_path ? `${IMG_BASE_URL}${movie.poster_path}` : "placeholder.jpg";
        const title = movie.title || movie.name;

        movieCard.innerHTML = `<img src="${imageUrl}" alt="${title}" class="movie-img">`;
        sliderContainer.appendChild(movieCard);
    });
};

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