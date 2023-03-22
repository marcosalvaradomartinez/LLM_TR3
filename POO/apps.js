import { Book } from "./Book.js";
import { Author } from "./Author.js";
import { Employee } from "./companies/js/Employee.js";

    const authorsLosJuegos=[
        new Author(1, "Alvaro", "Morata", "Villa", "1892")
    ]

    const authorsElPlaneta=[
        new Author(2, "Robert", "Lewandowsy", "Waszowsky", "1975"),
    ]

    const authorsTheWitcher =[
        new Author(3, "Niklas", "Süle", "Muller", "2001"),
    ]

    const booksList=[
        new Book("12345678", "Juegos del Hambre", 2009, 15.99, authorsLosJuegos),
        new Book("12398765", "Juegos del Hambre: En Llamas", 2012, 14.99, authorsLosJuegos),
        new Book("98765432", "Juegos del Hambre: Sinsajo 1", 2015, 18.99, authorsLosJuegos),
        new Book("98765421", "Juegos del Hambre: Sinsajo 2", 2015, 13.99, authorsLosJuegos),
        new Book("98765445", "El planeta de los simios", 2015, 19.99, authorsElPlaneta),
        new Book("98443432", "Los Lunnis: La senda del arcoiris", 2015, 12.99, authorsTheWitcher)
    ]

    const comicContainer = document.querySelector('#comic-container')
    booksList.forEach(book =>{
        comicContainer.innerHTML+= book.render();
    })