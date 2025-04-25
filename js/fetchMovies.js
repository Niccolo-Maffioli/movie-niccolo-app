const fetchFromTMDB = async (type, category, page = 1, queryString = "") => {
    try {
        if (typeof type !== "string") {
            throw new Error("Il parametro 'type' deve essere una stringa.");
        }

        let url;

        // Se category è un numero (es. id del film), stai chiedendo i dettagli
        if (typeof category === "number" || !isNaN(category)) {
            url = `https://api.themoviedb.org/3/${type}/${category}`;
        } else {
            if (typeof category !== "string") {
                throw new Error("Il parametro 'category' deve essere una stringa.");
            }

            if (isNaN(page)) {
                throw new Error("La pagina deve essere un numero valido.");
            }

            url = `https://api.themoviedb.org/3/${type}/${category}?page=${page}${queryString}`;
        }

        const result = await fetch(url, {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGRkZjNlMjc0YmE3MzdiYjA0YzIwNmJhYmVjNWZlYSIsIm5iZiI6MTY1NTU2Nzg2NC4wNDMsInN1YiI6IjYyYWRmNWY4OTBlYTRiMDA1NDNlZDVmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZnxQ4OCckJJgFaHl065UbxyUk1_R4FJH82V8T3NiCYw'
            }
        });

        const data = await result.json();
        return data;

    } catch (error) {
        console.error("Errore nella fetch:", error.message);
        throw error;
    }
};

export default fetchFromTMDB;