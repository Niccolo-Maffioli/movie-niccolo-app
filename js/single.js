const single = (data) => {
    const banner = document.getElementById("banner");
    const sliders = document.querySelectorAll(".slider");
    const container = document.getElementById("search-container");
    const cards = document.querySelectorAll(".card");
    const singleContainer = document.getElementById("single-container");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            banner.classList.add("none");
            sliders.forEach(slider => slider.classList.add("none"));
            container.classList.add("none");
            singleContainer.classList.remove("none");
            
            const fullOverview = card.getAttribute("data-full-overview");
            const id = card.getAttribute("data-id");

            const item = data.find(el => el.id == id);

            const desc = document.createElement("p");
            const img = document.createElement("img");
            const singletitle = document.createElement("h1");
            const subcontainer = document.createElement("div");

            if (item) {
                const title = item.title || item.name;
                /* const description = item.overview; */
                const image = item.poster_path;

                singleContainer.appendChild(img);
                img.src = `https://image.tmdb.org/t/p/original${image}`;
                img.classList.add("single-image");

                singleContainer.appendChild(subcontainer);
                singleContainer.classList.add("single-container");

                subcontainer.appendChild(singletitle);
                singletitle.innerText = title;
                singletitle.classList.add("single-title");

                subcontainer.appendChild(desc);
                desc.innerText = fullOverview;
                desc.classList.add("single-description");
            }
        });
    });
};

export default single;