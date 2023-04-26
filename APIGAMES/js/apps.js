const gameContainer = document.querySelector("#games-container");

async function getGames() {
    const respuesta = await fetch("http://localhost:8800/api/games");
    const data = await respuesta.json();

    data.forEach(game => {
        gameContainer.innerHTML+=`
        <div>
        <h2>${game.name}</h2>
        <p>${game.pegi}</p>
        </div>
        <div></div>
        <div>
        `
    });
   
}

function searchGames(){
    const gameName = document.getElementById("buscador").value;
}

function init(){
    getGames();
}
init();