var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import fetchFromTMDB from "./fetchMovies";
const search = () => __awaiter(void 0, void 0, void 0, function* () {
    const searchInput = document.getElementById("search-input");
    const container = document.getElementById("search-container");
    const dataMovies = yield fetchFromTMDB('movie', 'popular', 1);
    const dataSeries = yield fetchFromTMDB('tv', 'popular', 1);
    const data = [...dataMovies.results, ...dataSeries.results];
    data.forEach((item) => {
        if (!item.poster_path)
            return;
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
    searchInput.addEventListener("keyup", () => __awaiter(void 0, void 0, void 0, function* () {
        const query = searchInput.value.trim();
        if (!query)
            return;
        const searchResult = yield fetchFromTMDB("search", "multi", 1, `&query=${query}`);
        container.innerHTML = "";
        searchResult.results.forEach((item) => {
            if (!item.poster_path)
                return;
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
    }));
});
export default search;
