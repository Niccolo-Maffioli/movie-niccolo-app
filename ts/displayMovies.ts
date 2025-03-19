const IMG_BASE_URL: string = "https://image.tmdb.org/t/p/w500"; // Per ottenere le immagini dei film

interface Movie {
    poster_path: string | null;
    title?: string;
    name?: string;
}

const displayMovies = (movies: Movie[], sliderContainer: HTMLElement): void => {
    if (!movies || movies.length === 0) {
        console.warn("Nessun film/serie TV disponibile per questo slider.");
        return;
    }

    movies.slice(0, 7).forEach((movie: Movie) => {
        const movieCard = document.createElement("div");
        movieCard.classList.add("card");
        const imageUrl = movie.poster_path ? `${IMG_BASE_URL}${movie.poster_path}` : "placeholder.jpg";
        const title = movie.title || movie.name;

        movieCard.innerHTML = `<img src="${imageUrl}" alt="${title}" class="movie-img">`;
        sliderContainer.appendChild(movieCard);
    });
};

export default displayMovies