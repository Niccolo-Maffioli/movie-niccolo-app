import fetchFromTMDB from "./fetchMovies.js";

const search = async () => {
    const searchButton = document.getElementById("search-button");
    const searchInput = document.getElementById("search-input");
    const banner = document.getElementById("banner");
    const sliders = document.querySelectorAll(".slider");
    const container = document.getElementById("search-container");
    const header = document.getElementById("header")

    searchButton.addEventListener("click", () => {
        searchButton.classList.toggle("fa-magnifying-glass");
        searchButton.classList.toggle("fa-xmark");
        searchInput.classList.toggle("none");
        banner.classList.toggle("none");
        container.classList.toggle("none");
        header.classList.toggle("relative");
        sliders.forEach(slider => {
            slider.classList.toggle("none");
        });
    });

    const dataMovies = await fetchFromTMDB('movie', 'popular', 1);
    const dataSeries = await fetchFromTMDB('tv', 'popular', 1);

    const data = [...dataMovies.results, ...dataSeries.results];

    data.map((movie) => {
        const card = document.createElement("div");
        const image = document.createElement("img");

        container.appendChild(card);
        card.classList.add("card");

        card.appendChild(image);
        image.src = `https://image.tmdb.org/t/p/original${movie.poster_path}`;
    });

    /* dataSeries.results.map((tv) => {
        const card = document.createElement("div");
        const image = document.createElement("img");

        container.appendChild(card);
        card.classList.add("card");

        card.appendChild(image);
        image.src = `https://image.tmdb.org/t/p/original${tv.poster_path}`;
    }); */

    searchInput.addEventListener("keyup", () => {
        const filter = searchInput.value.toUpperCase();
        const cards = container.querySelectorAll(".card");
    
        data.forEach((movie, index) => {
            const title = movie.title || movie.name || "";
            const overview = movie.overview || "";
            const fullText = (title + " " + overview).toUpperCase();
    
            if (fullText.includes(filter)) {
                cards[index].style.display = "";
            } else {
                cards[index].style.display = "none";
            }
        });
    });
    
};

export default search;

/* 
array dei film [Peter Pan, Il Signore degli anelli, Harry Potter e la camera dei segreti, Minecraft, La principessa Mononoke]

se l"utente clicca sul tasto cerca , allora: sparisce tutto (Banner compreso) i film e le serie rimangono ma non seprati in 2 slider.
se l"utente scrive qualcosa nella barra di ricerca e clicca sul tasto cerca, allora: guarda descrizione (movie.overview e titolo di film e serie tv), se la descrizione contiene la parola cercata, allora mostra il film o la serie tv

se l"utente scrive "m" nella barra di ricerca e clicca sul tasto cerca, allora: guarda descrizione (movie.overview e titolo di film e serie tv), mostra Minecraft, Principessa Mononoke ecc.

*/