let pagina=1;
const contenedorPeliculas = document.querySelector("#movies-container")

const cargarPeliculas = async () => {
    try {
        const respuesta = await fetch (`https://api.themoviedb.org/3/movie/popular?api_key=192e0b9821564f26f52949758ea3c473&language=es-ES`)


    if (respuesta.status === 200){
        const datos = await respuesta.json();
        pintarPeliculas(datos.results);
    }
    else if (respuesta.status === 401) console.log('La llave no es correcta');
    else if (respuesta.status === 404) console.log('La pelicula no existe');
    else                               console.log('Hubo un error, no sabemos que pasó');



    }catch (error)

};

function pintarPeliculas(pelis) {
    contenedorPeliculas.innerHTML = "";
    pelis.forEach(peliculas => {
        contenedorPeliculas.innerHTML += `
            <article class="card">
                <img class="poster" src="https://image.tmdb.org/t/p/w500${peliculas.poster_path}" alt="">
                <h3>${peliculas.title}</h3>
            </article>
        `
    });
};


function init (){
    cargarPeliculas();
}
init();