const bannerFunction = (array) => {
    const banner = document.getElementById("banner");
    const overviewContainer = document.getElementById("overviewContainer");
    const age = document.getElementById("age");
    const firstMovie = array.results[0];
    const agelimit = document.createElement("span");
    const bannerimg = document.createElement("img");
    const bannertitle = document.createElement("h1");
    const bannerdesc = document.createElement("p");
    age.appendChild(agelimit);
    // Imposta l'età in base alla proprietà "adult"
    agelimit.textContent = firstMovie.adult ? "18+" : "Per tutti";
    banner.appendChild(bannerimg);
    bannerimg.classList.add("bannerimg");
    overviewContainer.classList.add("title");
    overviewContainer.appendChild(bannertitle);
    bannertitle.classList.add("title");
    bannertitle.textContent = firstMovie.title;
    overviewContainer.appendChild(bannerdesc);
    bannerdesc.classList.add("filmdesc");
    let truncatedOverview = firstMovie.overview;
    if (truncatedOverview.length > 250) {
        truncatedOverview = truncatedOverview.slice(0, truncatedOverview.lastIndexOf(" ", 250)) + "...";
    }
    bannerdesc.textContent = truncatedOverview;
    bannerimg.src = `https://image.tmdb.org/t/p/original${firstMovie.backdrop_path}`;
};
export default bannerFunction;
