import fetchFromTMDB from "./fetchMovies.js";

const singleContainer = document.getElementById("single-container");

const itemData = JSON.parse(localStorage.getItem("singleItem"));

const fetchSingleDetails = async () => {
  const item = await fetchFromTMDB(itemData.type, itemData.id);
  const title = item.title || item.name;

  const image = item.poster_path;
  const description = itemData.fullOverview;

  const img = document.createElement("img");
  img.src = `https://image.tmdb.org/t/p/original${image}`;
  img.classList.add("single-image");

  const detailsContainer = document.createElement("div");
  detailsContainer.classList.add("details-container");

  const titolo = document.createElement("h1");
  titolo.innerText = title;

  const desc = document.createElement("p");
  desc.innerText = description;

  detailsContainer.append(titolo, desc);
  singleContainer.append(img, detailsContainer);
};

fetchSingleDetails();