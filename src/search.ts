import fetchFromTMDB from "./fetchMovies.js";

interface MovieOrTV {
  id: number;
  title?: string;
  name?: string;
  overview: string;
  poster_path: string;
}

const search = async (): Promise<void> => {
  const searchInput = document.getElementById("search-input") as HTMLInputElement;
  const container = document.getElementById("search-container") as HTMLDivElement;

  const dataMovies = await fetchFromTMDB('movie', 'popular', 1);
  const dataSeries = await fetchFromTMDB('tv', 'popular', 1);

  const data: MovieOrTV[] = [...dataMovies.results, ...dataSeries.results];

  data.forEach((item) => {
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

  searchInput.addEventListener("keyup", async () => {
    const query = searchInput.value.trim();
    if (!query) return;

    const searchResult = await fetchFromTMDB("search", "multi", 1, `&query=${query}`);

    container.innerHTML = "";

    searchResult.results.forEach((item: MovieOrTV) => {
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