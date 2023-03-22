const gridPeliculas = document.querySelector("#grid-movies");

function init() {
    getPeliculas();
}
init();

async function getPeliculas() {
    const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=192e0b9821564f26f52949758ea3c473&language=es-ES');
    const datos = await res.json();

    datos.results.forEach(pelicula => {
        gridPeliculas.innerHTML+=`
            <article>
                <img class="poster" src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}">
                <h3>${pelicula.title}</h3>
            </article>
        `
    });
}