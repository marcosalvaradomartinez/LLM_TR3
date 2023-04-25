import CoinsList from "./CoinsList.js";

const mainContainer = document.querySelector('#main-container')

async function getCoins(){
    //const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    const url = "./data/coins.json";
    try{
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        const list = new CoinsList(mainContainer, data)
        list.render();
        
    }catch(error){
        console.log(error);
    }

}

function init(){
    getCoins();
}
init();