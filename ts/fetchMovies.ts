

const url = "https://api.themoviedb.org/3";
const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGRkZjNlMjc0YmE3MzdiYjA0YzIwNmJhYmVjNWZlYSIsIm5iZiI6MTY1NTU2Nzg2NC4wNDMsInN1YiI6IjYyYWRmNWY4OTBlYTRiMDA1NDNlZDVmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZnxQ4OCckJJgFaHl065UbxyUk1_R4FJH82V8T3NiCYw"

const stampaMovies = () => {
    console.log(
        fetch(url, {
        headers: {
            Authorization: `Bearer ${token}`

    }).then(
        (response) => {
            return response.json()
        })
)
}

export default stampaMovies

/* export default fetchMoviesAndTV */