import Company from "./Company.js"; //si ponemos export default y la clase, a la hora de imporrtar no son necesarias las llaves
import { Employee } from "./Employee.js";
const container = document.querySelector("#companies-container");

function init() {
  getCompany();
}
init();

function getCompany() {
  fetch("./data/companies.json")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((com) => {
        const employeeList = [];
        com.employees.forEach(e => {
          const empObj = new Employee(e.DNI, e.name, e.surname, e.salary);
          employeeList.push(empObj);
        });

        const company = new Company(com.id, com.name, com.web, com.email, employeeList);
        container.innerHTML += company.render();
      });
    });
}
