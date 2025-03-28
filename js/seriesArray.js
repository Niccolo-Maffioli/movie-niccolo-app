import getSeries from "./fetchSeries.js";

const tv = async () => {

  const data = await getSeries();

    const tvContainer = document.getElementById("tvslider");

    data.results.map((serie) => {
        const card = document.createElement("div");
        const title = document.createElement("h1");
        const year = document.createElement("p");
        const description = document.createElement("p");
        const details = document.createElement("div");
        const image = document.createElement("img");

        tvContainer.appendChild(card);
        card.classList.add("card");

        card.appendChild(details);
        details.classList.add("details");

        details.appendChild(title);
        title.classList.add("film_title");
        title.innerText = serie.name;
        
        details.appendChild(description);
        description.classList.add("film_description");
        if (serie.overview.length > 150) {
          let truncated = serie.overview.slice(0, 150);
          serie.overview = truncated.slice(0, truncated.lastIndexOf(" ")) + "...";
        }      
        description.innerText = serie.overview;
        

        details.appendChild(year);
        year.classList.add("film_year");
        year.innerText = serie.first_air_date.split("-")[0];

        card.appendChild(image);
        image.classList.add("movie-img");
        image.src = `https://image.tmdb.org/t/p/original${serie.poster_path}`;
    });

};

export default tv;