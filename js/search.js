import fetchFromTMDB from "./fetchMovies.js";

const search = async () => {
    const searchInput = document.getElementById("search-input");
    const container = document.getElementById("search-container");

    const dataMovies = await fetchFromTMDB('movie', 'popular', 1);
    const dataSeries = await fetchFromTMDB('tv', 'popular', 1);

    const data = [...dataMovies.results, ...dataSeries.results];

    data.forEach((item) => {
        const type = item.title ? "movie" : "tv";
    
        const card = document.createElement("a");
        const image = document.createElement("img");
    
        card.href = "single.html";
        card.classList.add("card");
        card.appendChild(image);
    
        image.src = `https://image.tmdb.org/t/p/original${item.poster_path}`;
    
        card.addEventListener("click", () => {
            const selected = {
                id: item.id,
                fullOverview: item.overview,
                type: type
            };
            localStorage.setItem("singleItem", JSON.stringify(selected));
        });
    
        container.appendChild(card);
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
        
            const type = item.title ? "movie" : "tv";
        
            const card = document.createElement("a");
            const image = document.createElement("img");
        
            card.href = "single.html";
            card.classList.add("card");
            card.appendChild(image);
        
            image.src = `https://image.tmdb.org/t/p/original${item.poster_path}`;
        
            card.addEventListener("click", () => {
                const selected = {
                    id: item.id,
                    fullOverview: item.overview,
                    type: type
                };
                localStorage.setItem("singleItem", JSON.stringify(selected));
            });
        
            container.appendChild(card);
        });        
    });
    
};

export default search;