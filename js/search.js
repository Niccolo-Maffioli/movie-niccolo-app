import fetchFromTMDB from "./fetchMovies.js";

const search = async () => {
    const searchButton = document.getElementById("search-button");
    const searchInput = document.getElementById("search-input");
    const banner = document.getElementById("banner");
    const sliders = document.querySelectorAll(".slider");
    const container = document.getElementById("search-container");
    const header = document.getElementById("header");

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

        // Assegna attributi data-* per passare ID e overview completa
        card.setAttribute("data-id", movie.id);
        card.setAttribute("data-full-overview", movie.overview);

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

    searchInput.addEventListener("keyup", async () => {
        //per rimuovere spazi a inizio e fine uso trim() metodo sul valore dell'input
        const query = searchInput.value.trim();
        if (!query) return;
    
        const search = await fetchFromTMDB("search", "multi", 1, `&query=${query}`);
    
        container.innerHTML = "";
    
        search.results.forEach((item) => {
            if (!item.poster_path) return;
    
            const card = document.createElement("div");
            const image = document.createElement("img");
    
            card.classList.add("card");
            image.src = `https://image.tmdb.org/t/p/original${item.poster_path}`;
    
            card.appendChild(image);
            container.appendChild(card);
        });
    });
    
};

export default search;