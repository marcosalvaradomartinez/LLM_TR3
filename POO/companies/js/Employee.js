export class Employee{
    constructor (DNI, name, surname, salary){
    this.DNI = DNI;
    this.name = name;
    this.surname = surname;
    this.salary = salary;
    }

    render(){
        return `<p>${this.DNI} ${this.name} ${this.surname} ${this.salary}€</p>`;
    }

}

export default Employee;