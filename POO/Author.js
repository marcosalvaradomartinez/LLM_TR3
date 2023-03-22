class Author{
    constructor (id, name, surname1, surname2, country){
        this.id = id;
        this.name = name;
        this.surname1 = surname1;
        this.surname2 = surname2;
        this.country = country;
    }

    render(){
        return `<p>${this.name} ${this.surname1} ${this.surname2}</p>`;
    }
}

const authorsList = [
   author1 = new Author(1, "Alvaro", "Morata", "Villa", "España"),
   author2 = new Author (2, "Robert", "Lewandowsy", "Waszowsky", "Polonia"),
   author3 = new Author (3, "Niklas", "Süle", "Muller", "Alemania")
]

export default Author;