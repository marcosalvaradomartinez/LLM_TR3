const listTag = document.querySelector('#libros');

let booksList = []

function getBooks() {
    fetch('./data/libros.json')
    .then(response => response.json())
    .then(data => {
        booksList = data;
        printBooks(data);
    })
}

function printBooks(listJSON) {
    listTag.innerHTML = "";
    listJSON.forEach(book => {
        listTag.innerHTML += `
        <tr>
            <td>${book.titulo}</td>
            <td>${book.autor}</td>
            <td>${book.salida}</td>
            <td>${book.precio}</td>
        </tr>
        `
    });
};

function init() {
    printBooks();
}
init();