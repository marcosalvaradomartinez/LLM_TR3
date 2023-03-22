import { Author } from "./Author.js";

export class Book{
    static stock = 10; //sale como undefined porque pertenece a la clase Book

    #active= false;

    constructor(isbn, title, release, price, authorsList){
        this.isbn=isbn;
        this.title=title;
        this.release=release;
        this.price=price;
        this.authorsList = authorsList;
        Book.stock = Book.stock -1;
    }

    priceWithTax(){
        return this.price * 1.1;
    }

    render(){
        let authors = ""
        this.authorsList.forEach(author => {
            authors+=author.render();
        });

        return `
        <article>
            <h3>${this.isbn}</h3>
            <h1>${this.title}</h1>
            <span>${this.release}</span>
            <p class="price">${this.price}€</p>
            <h2>${authors}</h2>
        </article>
        `
    }

    sale(){
        if(this.#active){
            console.log("Se puede vender");
        }else{
            console.log("No se puede vender");
        }
    }

    // static tax(){

    //     return "10%";
    // }
}

//const book1= new Book("12345678", "Juegos del Hambre", 2009, 15.99);
// const book2= new Book("12398765", "Juegos del Hambre: En Llamas", 2012, 14.99);
// const book3= new Book("98765432", "Juegos del Hambre: Sinsajo", 2015, 18.99);

// console.log(book1.title);
// console.log(book2.priceWithTax());
// book3.sale();

// console.log("El stock de libros es:", Book.stock);

// class Comic extends Book{

//     constructor(isbn, title, release, price, volume){
//         //el super ejecuta el constructor del padre (BOOK), hereda el codigo del padre
//         super(isbn, title, release, price, volume) 
//         this.volume=volume;  //creame una propiedad nueva con estos datos

//     }
// }

// const comic1 = new Comic ("12121212", "Spider-man", 1996, 9.95, 1);

// console.log("El precio del comic es:", comic1.priceWithTax(), "€");


