import displayMovies from "./displayMovies.js";

const API_KEY: string = "70ddf3e274ba737bb04c206babec5fea";
const BASE_URL: string = "https://api.themoviedb.org/3";

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

export default fetchMoviesAndTV