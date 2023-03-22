export class Author{
    constructor (id, name, surname1, surname2, year){
        this.id = id;
        this.name = name;
        this.surname1 = surname1;
        this.surname2 = surname2;
        this.year = year;
    }
    render(){
        return `<p>${this.name} ${this.surname1} ${this.surname2} ${this.year}</p>`;
    }
}

export default Author;