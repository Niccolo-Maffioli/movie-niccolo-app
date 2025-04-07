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

    //adult = false o true non è possibile quindi inserire un if per ogni età (es: 13+, 18+, 15+ ecc.)
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
    if (firstMovie.overview.length > 250) {
      let truncated = firstMovie.overview.slice(0, 250);
      firstMovie.overview = truncated.slice(0, truncated.lastIndexOf(" ")) + "...";
    }
    bannerdesc.textContent = firstMovie.overview;

    bannerimg.src = `https://image.tmdb.org/t/p/original${firstMovie.poster_path}`;
}

export default bannerFunction;