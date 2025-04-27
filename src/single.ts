import fetchFromTMDB from "./fetchMovies.js";

// Definizione delle interfacce
interface SingleItem {
  id: number;
  type: string;
  fullOverview: string;
}

interface MovieOrTVDetails {
  id: number; // Aggiungi id anche in MovieOrTVDetails
  title?: string;
  name?: string;
  poster_path: string;
}

const singleContainer = document.getElementById("single-container") as HTMLDivElement | null;

const itemDataRaw = localStorage.getItem("singleItem");
const itemData: SingleItem | null = itemDataRaw ? JSON.parse(itemDataRaw) : null;

const fetchSingleDetails = async (): Promise<void> => {
  if (itemData && singleContainer) {
    try {
      // Recuperiamo i dettagli del film/serie
      const response = await fetchFromTMDB(itemData.type, itemData.id);

      // Cast della risposta come unknown
      const item = response as unknown;

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
      } else {
        console.error("La risposta non contiene le proprietà necessarie.");
      }
    } catch (error) {
      console.error("Errore durante il recupero dei dettagli:", error);
    }
  } else {
    console.error("Nessun dato trovato in localStorage o elemento singleContainer non presente.");
  }
};

// Funzione per verificare se l'oggetto è di tipo 'MovieOrTVDetails'
function isMovieOrTVDetails(item: unknown): item is MovieOrTVDetails {
  return typeof item === "object" && item !== null && 'poster_path' in item && 'id' in item;
}

fetchSingleDetails();