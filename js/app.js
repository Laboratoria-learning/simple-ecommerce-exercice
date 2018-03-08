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
      onclick="addToCart(${product.id})"
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

drawProducts(data);

const productsInCart = [];

function addToCart(productId) {

  productsInCart.push(productId); //se van almacenando los productos elegidos
  localStorage.setItem("productsInCart", JSON.stringify(productsInCart));
  const productsToBuy = JSON.parse(localStorage.getItem("productsInCart"));
  console.log(productsToBuy);
  
  /* cuando agrego a carrito, tengo que:*/
  //1) Incrementar en uno mi contador del menu
  const counter = document.getElementById("counterItems"); //seleccionando contador
  const productsInCounter = productsToBuy.length;

  console.log(productsInCounter);


  /*2) Guardar mi producto en algun lugar
  3) Cambiar el boton de agregar a carrito
  por quitar del carrito
  */
}





function removeFromCart() {
  /* cuando agrego a carrito, tengo que:
  1) Decrementar en uno mi contador del menu
  2) Borrar mi producto de algun lugar
  3) Cambiar el boton de quitar del carrito
  por agregar a carrito
  */
}

function increaseCounter() {

  /* como accedemos al HTML del contador
  y como lo incrementamos*/
}


function decreaseCounter() {
  /* como accedemos al HTML del contador
  y como lo incrementamos*/
}

function changeButtonStatus(button) {
  /* esta funcion deberia recibir un boton y
  cambiar su estatus
    Si el boton esta en agregar al carrito
      cambia el texto a quitar del carrito
    Y viceversa
  */
}

