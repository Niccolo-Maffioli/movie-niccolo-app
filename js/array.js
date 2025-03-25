const movie = () => {
    const movies = [
        {
          title: "The Dark Knight",
          year: 2008,
          director: "Christopher Nolan",
          genre: "Action, Crime, Drama",
          rating: 9.0,
        },
        {
          title: "The Shawshank Redemption",
          year: 1994,
          director: "Frank Darabont",
          genre: "Drama",
          rating: 9.3,
        },
        {
          title: "The Godfather",
          year: 1972,
          director: "Francis Ford Coppola",
          genre: "Crime, Drama",
          rating: 9.2,
        },
        {
          title: "The Dark Knight Rises",
          year: 2012,
          director: "Christopher Nolan",
          genre: "Action, Crime, Drama",
          rating: 8.4,
        },
        {
          title: "Forrest Gump",
          year: 1994,
          director: "Robert Zemeckis",
          genre: "Drama, Romance",
          rating: 8.8,
        },
        {
          title: "The Matrix",
          year: 1999,
          director: "The Wachowskis",
          genre: "Action, Sci-Fi",
          rating: 8.7,
        },
        {
          title: "Terminator 2: Judgment Day",
          year: 1991,
          director: "James Cameron",
          genre: "Action, Sci-Fi",
          rating: 8.5,
        },
        {
          title: "The Lord of the Rings: The Fellowship of the Ring",
          year: 2001,
          director: "Peter Jackson",
          genre: "Adventure, Drama, Fantasy",
          rating: 8.8,
        },
        {
          title: "The Lord of the Rings: The Two Towers",
          year: 2002,
          director: "Peter Jackson",
          genre: "Adventure, Drama, Fantasy",
          rating: 8.7,
        },
        {
          title: "The Lord of the Rings: The Return of the King",
          year: 2003,
          director: "Peter Jackson",
          genre: "Adventure, Drama, Fantasy",
          rating: 8.9,
        },
        {
          title: "Jumanji",
          year: 1995,
          director: "Joe Johnston",
          genre: "Adventure, Comedy, Fantasy",
          rating: 7.2,
        },
        
      ];

    const movieContainer = document.getElementById("sliderContainer");

    movies.map((movie) => {
        const card = document.createElement("div");
        const title = document.createElement("h1");
        const year = document.createElement("p");

        movieContainer.appendChild(card);
        card.classList.add("card");

        card.appendChild(title);
        title.style = "color: #fff"
        title.innerText = movie.title;

        card.appendChild(year);
        year.style = "color: #fff"
        year.innerText = movie.year;
    });

    

    /* console.log(movieContainer); */
    

    

};

export default movie