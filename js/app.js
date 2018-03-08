function drawProducts(data) {
  let products = data.products;
  let productsContainer = document.getElementById("products-container");
  products.forEach((product, index) => {
    let productHTML = createProductHTML(product);
    productsContainer.appendChild(productHTML);
  });
}

function createProductHTML(product) {
  let template = `
    <h3>${product.title}</h3>
    <img src='${product.imageUrl}' alt='${product.description}'/>
    <p>${product.description}</p>
    <button data-product-id=${product.id}
      onclick="addToCart(${product.id}, event)"
      class='btn btn-primary'>Agregar a carrito</button>
    <hr/>
  `;
  let productContainer = document.createElement("div");
  productContainer.className = "col text-center";
  productContainer.innerHTML = template;
  return productContainer;
}

drawProducts(data);

function addToCart(product, event) {
  // console.log(event);
  // console.log(event.target);
  changeButtonStatus(event.target);
  /* cuando agrego a carrito, tengo que:
  1) Incrementar en uno mi contador del menu
  2) Guardar mi producto en algun lugar
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
  // let buttonId = document.getElementById(id);
  let buttonText = button.firstChild.data;

  if(buttonText === "Agregar a carrito") {
    button.innerText = "Remover del carrito";
  } else {
    button.innerText = "Agregar a carrito";
  }
  /* esta funcion deberia recibir un boton y
  cambiar su estatus
    Si el boton esta en agregar al carrito
      cambia el texto a quitar del carrito
    Y viceversa
  */
}
