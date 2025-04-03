import getMovie from "./fetchMovies.js";

const movie = async () => {

  const data = await getMovie();

    const movieContainer = document.getElementById("sliderContainer");

    const banner = document.getElementById("banner");
    const overviewContainer = document.getElementById("overviewContainer");

    const age = document.getElementById("age");

    const firstMovie = data.results[0];
    const agelimit = document.createElement("span");
    const bannerimg = document.createElement("img");
    const bannertitle = document.createElement("h1");
    const bannerdesc = document.createElement("p");

    age.appendChild(agelimit);

    if (firstMovie.adult){
      agelimit.textContent = "18+";
    } else {
      agelimit.textContent = "Per tutti";
    }

    banner.appendChild(bannerimg);
    bannerimg.classList.add("bannerimg");

    overviewContainer.classList.add("title");

    overviewContainer.appendChild(bannertitle);
    bannertitle.classList.add("title");
    bannertitle.textContent = firstMovie.title;

    overviewContainer.appendChild(bannerdesc);
    bannerdesc.classList.add("filmdesc");
    bannerdesc.textContent = firstMovie.overview;

    bannerimg.src = `https://image.tmdb.org/t/p/original${firstMovie.poster_path}`;


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

};

export default movie;