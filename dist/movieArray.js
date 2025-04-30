var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Importa la funzione per ottenere i film da TMDB
import fetchFromTMDB from "./fetchMovies";
// Funzione principale asincrona per gestire i film
const movie = () => __awaiter(void 0, void 0, void 0, function* () {
    // Ottiene i dati dei film da TMDB
    const movies = yield fetchFromTMDB('movie', 'popular', 1);
    // Seleziona il contenitore dove verranno inserite le card dei film
    const movieContainer = document.getElementById("sliderContainer");
    if (!movieContainer) {
        console.error("Elemento 'sliderContainer' non trovato.");
        return;
    }
    // Cicla ogni film restituito
    movies.results.forEach((movie) => {
        // Crea gli elementi HTML
        const card = document.createElement("a");
        const title = document.createElement("h1");
        const year = document.createElement("p");
        const description = document.createElement("p");
        const details = document.createElement("div");
        const image = document.createElement("img");
        const ratingContainer = document.createElement("div");
        const rating = document.createElement("p");
        // Aggiunge la card al contenitore principale
        movieContainer.appendChild(card);
        card.classList.add("card");
        card.href = "single.html";
        card.addEventListener("click", () => {
            const item = {
                id: movie.id,
                fullOverview: movie.overview,
                type: "movie"
            };
            localStorage.setItem("singleItem", JSON.stringify(item));
        });
        // Assegna attributi data-* per passare ID e overview completa
        card.setAttribute("data-id", movie.id.toString());
        card.setAttribute("data-full-overview", movie.overview);
        // Struttura interna della card
        card.appendChild(details);
        details.classList.add("details");
        // Titolo del film
        details.appendChild(title);
        title.classList.add("film_title");
        title.innerText = movie.original_title;
        // Descrizione troncata
        details.appendChild(description);
        description.classList.add("film_description");
        const fullOverview = movie.overview;
        let shortOverview = fullOverview;
        if (fullOverview.length > 150) {
            shortOverview = fullOverview.slice(0, fullOverview.lastIndexOf(" ", 150)) + "...";
        }
        description.innerText = shortOverview;
        // Anno di uscita
        details.appendChild(year);
        year.classList.add("film_year");
        year.innerText = movie.release_date.split("-")[0];
        // Immagine del film
        card.appendChild(image);
        image.classList.add("movie-img");
        image.src = `https://image.tmdb.org/t/p/original${movie.poster_path}`;
        // Sezione valutazione (stelle + voto)
        details.appendChild(ratingContainer);
        ratingContainer.classList.add("rating-container");
        // Voto numerico
        ratingContainer.appendChild(rating);
        rating.classList.add("rating");
        const ratingnum = Math.trunc(movie.vote_average / 2);
        rating.innerText = ratingnum.toString();
        const starContainer = document.createElement("div");
        ratingContainer.appendChild(starContainer);
        // Aggiunge stelle in base al voto
        for (let i = 0; i < 5; i++) {
            const star = document.createElement("i");
            star.classList.add("fa-solid", "fa-star", "star");
            if (i < ratingnum) {
                star.style.color = "#F7B13E";
            }
            starContainer.appendChild(star);
        }
    });
});
// Esporta la funzione movie per poterla usare altrove
export default movie;
