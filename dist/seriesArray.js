var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Importa la funzione che recupera le serie TV da TMDB
import fetchFromTMDB from "./fetchMovies";
// Funzione asincrona principale che gestisce la visualizzazione delle serie
const tv = () => __awaiter(void 0, void 0, void 0, function* () {
    // Recupera i dati delle serie TV tramite la funzione fetch
    const series = yield fetchFromTMDB('tv', 'popular', 1);
    // Seleziona il contenitore HTML dove verranno inserite le card delle serie
    const tvContainer = document.getElementById("tvslider");
    if (!tvContainer) {
        console.error("Contenitore 'tvslider' non trovato.");
        return;
    }
    // Cicla su ogni serie contenuta nei risultati della risposta
    series.results.map((serie) => {
        // Crea tutti gli elementi HTML necessari per ogni card
        const card = document.createElement("a");
        const title = document.createElement("h1");
        const year = document.createElement("p");
        const description = document.createElement("p");
        const details = document.createElement("div");
        const image = document.createElement("img");
        const ratingContainer = document.createElement("div");
        const rating = document.createElement("p");
        // Aggiunge la card al contenitore principale
        tvContainer.appendChild(card);
        card.classList.add("card");
        card.href = "single.html";
        card.addEventListener("click", () => {
            const item = {
                id: serie.id,
                fullOverview: serie.overview,
                type: "tv"
            };
            localStorage.setItem("singleItem", JSON.stringify(item));
        });
        // Assegna attributi data-* per passare ID e overview completa
        card.setAttribute("data-id", serie.id.toString());
        card.setAttribute("data-full-overview", serie.overview);
        // Inserisce il blocco dettagli nella card
        card.appendChild(details);
        details.classList.add("details");
        // Aggiunge il titolo
        details.appendChild(title);
        title.classList.add("film_title");
        title.innerText = serie.name;
        // Aggiunge la descrizione (troncata se troppo lunga)
        details.appendChild(description);
        description.classList.add("film_description");
        let shortOverview = serie.overview;
        if (serie.overview.length > 150) {
            shortOverview = serie.overview.slice(0, serie.overview.lastIndexOf(" ", 150)) + "...";
        }
        description.innerText = shortOverview;
        // Aggiunge l'anno di uscita
        details.appendChild(year);
        year.classList.add("film_year");
        // Se disponibile, estrai l'anno
        if (serie.first_air_date) {
            year.innerText = serie.first_air_date.split("-")[0];
        }
        else {
            year.innerText = "N/A";
        }
        // Aggiunge l'immagine del poster alla card
        card.appendChild(image);
        image.classList.add("movie-img");
        image.src = `https://image.tmdb.org/t/p/original${serie.poster_path}`;
        // Sezione valutazione (stelle + voto)
        details.appendChild(ratingContainer);
        ratingContainer.classList.add("rating-container");
        ratingContainer.appendChild(rating);
        rating.classList.add("rating");
        const ratingnum = Math.trunc(serie.vote_average / 2);
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
// Esporta la funzione per poterla usare in altri file
export default tv;
