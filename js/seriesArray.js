// Importa la funzione che recupera le serie TV da TMDB
import fetchFromTMDB from "./fetchMovies.js";

// Funzione asincrona principale che gestisce la visualizzazione delle serie
const tv = async () => {

  // Recupera i dati delle serie TV tramite la funzione fetch
  const series = await fetchFromTMDB('tv', 'popular', 1);

  // Seleziona il contenitore HTML dove verranno inserite le card delle serie
  const tvContainer = document.getElementById("tvslider");

  // Cicla su ogni serie contenuta nei risultati della risposta
  series.results.map((serie) => {
    // Crea tutti gli elementi HTML necessari per ogni card
    const card = document.createElement("div");
    const title = document.createElement("h1");
    const year = document.createElement("p");
    const description = document.createElement("p");
    const details = document.createElement("div");
    const image = document.createElement("img");

    // Aggiunge la card al contenitore principale
    tvContainer.appendChild(card);
    card.classList.add("card"); // Aggiunge la classe "card" per lo stile

    // Inserisce il blocco dettagli nella card
    card.appendChild(details);
    details.classList.add("details"); // Aggiunge la classe "details"

    // Aggiunge il titolo
    details.appendChild(title);
    title.classList.add("film_title");
    title.innerText = serie.name; // Nome della serie

    // Aggiunge la descrizione (troncata se troppo lunga)
    details.appendChild(description);
    description.classList.add("film_description");

    // Se la descrizione è più lunga di 150 caratteri, viene troncata fino all'ultima parola intera
    if (serie.overview.length > 150) {
      let truncated = serie.overview.slice(0, 150);
      serie.overview = truncated.slice(0, truncated.lastIndexOf(" ")) + "...";
    }      
    description.innerText = serie.overview;

    // Aggiunge l'anno di uscita, estratto dalla data
    details.appendChild(year);
    year.classList.add("film_year");

    // Usa "first_air_date" invece di "release_date" per le serie TV
    year.innerText = serie.first_air_date.split("-")[0];

    // Aggiunge l'immagine del poster alla card
    card.appendChild(image);
    image.classList.add("movie-img");
    image.src = `https://image.tmdb.org/t/p/original${serie.poster_path}`;
  });
};

// Esporta la funzione per poterla usare in altri file
export default tv;