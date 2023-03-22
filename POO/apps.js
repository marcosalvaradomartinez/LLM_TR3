import { Book } from "./Book.js";

    const booksList=[
        new Book("12345678", "Juegos del Hambre", 2009, 15.99),
        new Book("12398765", "Juegos del Hambre: En Llamas", 2012, 14.99),
        new Book("98765432", "Juegos del Hambre: Sinsajo 1", 2015, 18.99),
        new Book("98765432", "Juegos del Hambre: Sinsajo 2", 2015, 13.99)
    ]

    const comicContainer = document.querySelector('#comic-container')
    booksList.forEach(book =>{
        comicContainer.innerHTML+= book.render();
    })