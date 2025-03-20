/* import displayMovies from "./displayMovies.js";

const API_KEY: string = "70ddf3e274ba737bb04c206babec5fea";
const BASE_URL: string = "https://api.themoviedb.org/3";

const fetchMoviesAndTV = async (): Promise<void> => {
    const sliders = document.querySelectorAll<HTMLElement>('.sliderContainer');

    sliders.forEach(async (slider: HTMLElement) => {
        const type = slider.dataset.type;
        
        let endpoint: string;
        if (type === "movie") {
            endpoint = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`;
        } else if (type === "popular") {
            endpoint = `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=it-IT`;
        } else if (type === "documentary") {
            endpoint = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`;
        } else if (type === "anime") {
            endpoint = `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=16`;
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

*/
var url = "https://api.themoviedb.org/3";
var token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGRkZjNlMjc0YmE3MzdiYjA0YzIwNmJhYmVjNWZlYSIsIm5iZiI6MTY1NTU2Nzg2NC4wNDMsInN1YiI6IjYyYWRmNWY4OTBlYTRiMDA1NDNlZDVmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZnxQ4OCckJJgFaHl065UbxyUk1_R4FJH82V8T3NiCYw";
var stampaMovies = function () {
    console.log(fetch(url, {
        headers: {
            Authorization: "Bearer ".concat(token)
        }
    }).then(function (response) {
        response.json();
    }));
};
export default stampaMovies;
/* export default fetchMoviesAndTV */ 
