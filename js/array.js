import getMovie from "./fetchMovies.js";

const movie = async () => {

  const data = await getMovie();

    const movieContainer = document.getElementById("sliderContainer");

    data.results.map((movie) => {
        const card = document.createElement("div");
        const title = document.createElement("h1");
        const year = document.createElement("p");
        const description = document.createElement("p");
        const details = document.createElement("div");
        const image = document.createElement("img");

        movieContainer.appendChild(card);
        card.classList.add("card");

        card.appendChild(details);
        details.classList.add("details");

        details.appendChild(title);
        title.classList.add("film_title");
        title.innerText = movie.original_title;
        
        details.appendChild(description);
        description.classList.add("film_description");
        if (movie.overview.length > 150) {
          let truncated = movie.overview.slice(0, 150);
          movie.overview = truncated.slice(0, truncated.lastIndexOf(" ")) + "...";
        }      
        description.innerText = movie.overview;
        

        details.appendChild(year);
        year.classList.add("film_year");
        year.innerText = movie.release_date.split("-")[0];

        card.appendChild(image);
        image.classList.add("movie-img");
        image.src = `https://image.tmdb.org/t/p/original${movie.poster_path}`;
    });    

};

export default movie