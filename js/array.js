import bannerFunction from "./banner.js";
import getMovie from "./fetchMovies.js";
import single from "./single.js";

const movie = async () => {

  const data = await getMovie();


  /* film-page */
  //const filmContainer = document.getElementById("film-container");


    const movieContainer = document.getElementById("sliderContainer");

    bannerFunction(data);


    data.results.map((movie) => {
        const card = document.createElement("div");
        const title = document.createElement("h1");
        const year = document.createElement("p");
        const description = document.createElement("p");
        const details = document.createElement("div");
        const image = document.createElement("img");
        const ratingContainer = document.createElement("div");
        const rating = document.createElement("p");
        /* const stars = document.createElement("i"); */

        movieContainer.appendChild(card);
        card.classList.add("card");
        card.setAttribute("data-id", movie.id);
        card.setAttribute("data-full-overview", movie.overview);

        card.appendChild(details);
        details.classList.add("details");

        details.appendChild(title);
        title.classList.add("film_title");
        title.innerText = movie.original_title;
        
        details.appendChild(description);
        description.classList.add("film_description");
        
        const fullOverview = movie.overview;
        let shortOverview = fullOverview;
        if (fullOverview.length > 150) {
          shortOverview = fullOverview.slice(0, fullOverview.lastIndexOf(" ", 150)) + "...";
        }     
        description.innerText = shortOverview;
        

        details.appendChild(year);
        year.classList.add("film_year");
        year.innerText = movie.release_date.split("-")[0];

        card.appendChild(image);
        image.classList.add("movie-img");
        image.src = `https://image.tmdb.org/t/p/original${movie.poster_path}`;

        details.appendChild(ratingContainer);
        ratingContainer.classList.add("rating-container");

        ratingContainer.appendChild(rating);
        rating.classList.add("rating");
        rating.innerText = Math.trunc(movie.vote_average/2);
        
        let ratingnum = Math.trunc(movie.vote_average/2);

        for (let i = 0; i < 5; i++) {
          let star = document.createElement("i"); 
          star.classList.add("fa-solid", "fa-star", "star");
    
          if (i < ratingnum) {
            star.style.color = "#F7B13E";
        }

        ratingContainer.appendChild(star);
      }

    }); 
    
    single(data.results);

};

export default movie;