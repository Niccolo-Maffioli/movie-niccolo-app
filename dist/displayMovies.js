var IMG_BASE_URL = "https://image.tmdb.org/t/p/w500"; // Per ottenere le immagini dei film
var displayMovies = function (movies, sliderContainer) {
    if (!movies || movies.length === 0) {
        console.warn("Nessun film/serie TV disponibile per questo slider.");
        return;
    }
    movies.slice(0, 7).forEach(function (movie) {
        var movieCard = document.createElement("div");
        movieCard.classList.add("card");
        var imageUrl = movie.poster_path ? "".concat(IMG_BASE_URL).concat(movie.poster_path) : "placeholder.jpg";
        var title = movie.title || movie.name;
        movieCard.innerHTML = "<img src=\"".concat(imageUrl, "\" alt=\"").concat(title, "\" class=\"movie-img\">");
        sliderContainer.appendChild(movieCard);
    });
};
export default displayMovies;
