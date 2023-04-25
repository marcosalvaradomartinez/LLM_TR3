import ArticlesService from "./ArticleService.js";
const listContainer = document.querySelector("#list-container");
const btnInsert = document.querySelector("#btn-insert");
const btnUpdate = document.querySelector("#btn-update");
const form = document.querySelector("#frm-article");
const messageAlert = document.querySelector("#message");
let currentArticle=null;
const inputSearch = document.querySelector("#input-search")

const searchArticle = (name) =>{
  ArticlesService.searchByName(name).then(list =>{
    populateArticles(list);
  })

}

const populateArticles = (articles) => {
  listContainer.innerHTML = "";
    //Mostramos los datos de los artículos en filas de la tabla
    articles.forEach((e, index) => {
      listContainer.innerHTML += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${e.name}</td>
                    <td>${e.price}</td>
                    <td>${e.stock}</td>
                    <td>${e.description}</td>
                    <td>
                        <button id="btn-delete-${e.id}" class="btn btn-warning btn-delete">Delete</button>
                        <button id="btn-edit-${e.id}" class="btn btn-info btn-edit">Edit</button>
                    </td>
                </tr>
            `;
    });

    //Configuramos los botones delete
    const deleteButtons = document.querySelectorAll(".btn-delete");
    deleteButtons.forEach(button => {
      button.addEventListener("click", function(e){
        //Recupero el id del articulo que se encuentra en el Id del boton
        const idArticle = e.target.id.split("-")[2];
        deleteArticle(idArticle);

      });
    });
//Finaliza deleteButtons

//Empieza editButtons    
    const editButtons = document.querySelectorAll(".btn-edit");
    editButtons.forEach(button => {
      button.addEventListener("click", function(e){
        //Recupero el id del articulo que se encuentra en el Id del boton
        const idArticle = e.target.id.split("-")[2];
        editArticle(idArticle);
      });
    });
//Finaliza editButtons
}

const renderArticles = () => {
  ArticlesService.getItemsList().then((article) => {
    populateArticles(article);
  });
}

//Empieza newArticle
const newArticle = (event) => {
  event.preventDefault(); //El preventDefault evita que los datos recarguen la página una vez se envíen a través del formulario
  const name = document.querySelector("#field-name").value
  const price = document.querySelector("#field-price").value;
  const stock = document.querySelector("#field-stock").value;
  const description = document.querySelector("#field-description").value;

  const item = { name, price, stock, description }; //declarar las constantes asi se pueden ya que se pueden llamar a constantes creadas

  console.log(item);
  ArticlesService.insert(item).then((data) =>{
      console.log(data);
      //cambios de estado
      renderArticles();
      form.reset();
      messageAlert.textContent=data.message;
    }
  );
}

//Empieza updateArticle
const updateArticle = (event) =>{
  event.preventDefault();
  // Recuperamos los datos del formulario
  const id = currentArticle.id;
  const name = document.querySelector("#field-name").value
  const price = document.querySelector("#field-price").value;
  const stock = document.querySelector("#field-stock").value;
  const description = document.querySelector("#field-description").value;

  const item = { id, name, price, stock, description };

  // Enviamos los datos a nuestra API para que de modifique el producto/articulo de la lista
  ArticlesService.update(item).then(data=>{
    renderArticles();
    form.reset();

    //Cambiamos de estado los botones 
    btnUpdate.classList.replace("d-inline" , "d-none");
    btnInsert.classList.replace("d-none" , "d-inline");
    messageAlert.textContent=`Article ${data.name} updated`;

  });
}

//Empieza deleteArticle
const deleteArticle = (id) =>{
  ArticlesService.delete(id).then(data =>{
    renderArticles();
  });
}

//Empieza editArticle
const editArticle = (id) =>{
  ArticlesService.getItemById(id).then(data=>{
    currentArticle=data;
    //Recuperación de los datos para mostrarlos en el formulario de update
    document.querySelector("#field-name").value=data.name;
    document.querySelector("#field-price").value=data.price;
    document.querySelector("#field-stock").value=data.stock;
    document.querySelector("#field-description").value=data.description;

    //Cambio de los estados de los botones
    btnInsert.classList.replace("d-inline" , "d-none");
    btnUpdate.classList.replace("d-none" , "d-inline");
    messageAlert.textContent=`Article ${data.name} loaded in form`;
  })
}

function init() {
  renderArticles();
  btnInsert.addEventListener("click", newArticle)
  btnUpdate.addEventListener("click", updateArticle)

  inputSearch.addEventListener("keyup", function (event){
    let searchName = event.target.value;
    if(searchName.length >=3){
      searchArticle(searchName)
    }else if (searchName.length ===0){
      renderArticles
    }
  })
}

init();