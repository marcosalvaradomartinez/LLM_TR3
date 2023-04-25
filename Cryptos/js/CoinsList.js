import Coin from "./Coin.js";
export default class CoinsList{
    constructor(mainContainer, coins){
        this.mainContainer=mainContainer; //etiqueta HTML
        this.coins=coins; //json con los datos de las cryptomonedas
    }

    render(){
        this.mainContainer.innerHTML = `
        <div>#</div>
        <div>Name</div>
        <div>Price</div>
        <div>Price change</div>
    `;
        this.coins.forEach((coin, index) => {
            const coinObj = new Coin(coin)
            this.mainContainer.innerHTML += `<div>${index+1}</div>`;
            this.mainContainer.innerHTML+= coinObj.render();
        });
    }
}