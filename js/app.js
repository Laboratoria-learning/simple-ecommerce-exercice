drawProducts(data);

function drawProducts(data) {
  let products = data.products;//guardar el array de products
  let productsContainer = document.getElementById("products-container");//seleccionar div que va a contener los productos
  products.forEach((product, index) => {//recorrer el arreglo de products
    let productHTML = createProductHTML(product); //declarar un producto que llama a la funcion crear producto 
    productsContainer.appendChild(productHTML);//agregar al contenedor en html
  });
}

function createProductHTML(product) {
  let template = `
    <h3>${product.title}</h3>
    <img src='${product.imageUrl}' alt='${product.description}'/>
    <p>${product.description}</p>
    <button data-product-id=${product.id} 
      id=${product.id}
      onclick="changeButtonStatus(${product.id})"
      class='btn btn-primary'>
        Agregar a carrito
      </button>
    <hr/>
  `;
  let productContainer = document.createElement("div");
  productContainer.className = "col text-center";
  productContainer.innerHTML = template;
  return productContainer;
}

//Aqui termina funcion de pintar productos en la tienda 
let productsInCart = [];

function addToCart(btnId) {
    let product = data.products[btnId];
    productsInCart.push(product); //se van almacenando los productos elegidos
    localStorage.setItem("productsInCart", JSON.stringify(productsInCart));
    increaseCounter();
}

function removeFromCart(productId) {
  //productsInCart[0];
  productsInCart.pop(productId); //se van almacenando los productos elegidos
    localStorage.removeItem("productsInCart", JSON.stringify(productsInCart));
  /* cuando agrego a carrito, tengo que:
  1) Decrementar en uno mi contador del menu
  2) Borrar mi producto de algun lugar
  3) Cambiar el boton de quitar del carrito
  por agregar a carrito
  */
  decreaseCounter();
}

function increaseCounter() {
  const counter = JSON.parse(localStorage.getItem("productsInCart")).length;
  const counterBox = document.getElementById("counter-items");
  counterBox.innerText = counter;
}


function decreaseCounter() {
  
  /* como accedemos al HTML del contador
  y como lo incrementamos*/
}

function changeButtonStatus(id) {
  /* esta funcion deberia recibir un boton y cambiar su estatus*/

  let btnClicked = document.getElementById(id);
  let change = btnClicked.innerText;

  //Si el boton esta en agregar al carrito cambia el texto a quitar del carrito
  if(change=="Agregar a carrito"){
    btnClicked.innerHTML="Quitar del carrito";
    addToCart(btnClicked.id);

  //Y viceversa
  }else{
    btnClicked.innerHTML="Agregar a carrito";
    removeFromCart(btnClicked.id);
  }
}

