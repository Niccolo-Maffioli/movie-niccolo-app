var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import fetchFromTMDB from "./fetchMovies.js";
const singleContainer = document.getElementById("single-container");
const itemDataRaw = localStorage.getItem("singleItem");
const itemData = itemDataRaw ? JSON.parse(itemDataRaw) : null;
const fetchSingleDetails = () => __awaiter(void 0, void 0, void 0, function* () {
    if (itemData && singleContainer) {
        try {
            // Recuperiamo i dettagli del film/serie
            const response = yield fetchFromTMDB(itemData.type, itemData.id);
            // Cast della risposta come unknown
            const item = response;
            // Verifica se l'oggetto è un 'MovieOrTVDetails'
            if (isMovieOrTVDetails(item)) {
                const title = item.title || item.name || "Senza titolo";
                const image = item.poster_path;
                const description = itemData.fullOverview;
                // Creiamo l'immagine
                const img = document.createElement("img");
                img.src = `https://image.tmdb.org/t/p/original${image}`;
                img.classList.add("single-image");
                // Creiamo il container per i dettagli
                const detailsContainer = document.createElement("div");
                detailsContainer.classList.add("details-container");
                const titolo = document.createElement("h1");
                titolo.innerText = title;
                const desc = document.createElement("p");
                desc.innerText = description;
                detailsContainer.append(titolo, desc);
                singleContainer.append(img, detailsContainer);
            }
            else {
                console.error("La risposta non contiene le proprietà necessarie.");
            }
        }
        catch (error) {
            console.error("Errore durante il recupero dei dettagli:", error);
        }
    }
    else {
        console.error("Nessun dato trovato in localStorage o elemento singleContainer non presente.");
    }
});
// Funzione per verificare se l'oggetto è di tipo 'MovieOrTVDetails'
function isMovieOrTVDetails(item) {
    return typeof item === "object" && item !== null && 'poster_path' in item && 'id' in item;
}
fetchSingleDetails();
