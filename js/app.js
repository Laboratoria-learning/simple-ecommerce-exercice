const arrayProductAdd = [];//Arreglo que guardará los productos de manera local.
const btnCheckout = document.querySelector('#checkout');
window.onload = () => {
  drawProducts(data);//Llamando función que pinta los productos en HTML.
  btnCheckout.addEventListener('click', saveLocalS);//Guardando en localStorage cuando se da click en el botón checkout.
}

function drawProducts(data) {
  let products = data.products;
  let productsContainer = document.getElementById("products-container");
  products.forEach((product, index) => {
    let productHTML = createProductHTML(product);
    productsContainer.appendChild(productHTML);
  });
}//Fin de función drawProducts(data).

function createProductHTML(product) {
  let template = `
    <h3>${product.title}</h3>
    <img src='${product.imageUrl}' alt='${product.description}'/>
    <p>${product.description}</p>
    <button data-product-id=${product.id}
      onclick="giveEventBtn(${product.id})"
      class='btn btn-primary'>
        Agregar a carrito
      </button>
    <hr/>
  `;
  let productContainer = document.createElement("div");
  productContainer.className = "col text-center";
  productContainer.innerHTML = template;
  return productContainer;
}//Fin de función createProductHTML(product).


function giveEventBtn(id) {
  let collectionTag = document.getElementsByClassName("btn-primary");
  let tag = Array.from(collectionTag);//Arreglo de botones.
  changeButtonStatus(tag[id],id);//Llamando a la función que cambiará el status, tiene como parametro el botón que se ha oprimido.
}//Fin de función giveEventBtn(id)

function addToCart(id) {
  let productObjt = data.products[id];
  arrayProductAdd.push(productObjt);
  increaseCounter();//Llamando función que incrementa contador.
}//Fin de función addToCart(id)

function removeFromCart(id) {
  for (objProductRemove of arrayProductAdd) {
    if (id == objProductRemove.id) {
      let indexArray = arrayProductAdd.indexOf( objProductRemove );
    arrayProductAdd.splice( indexArray, 1 );
    }
  }
  decreaseCounter();//Llamando función que decrementa contador.
}//Fin de función removeFromCart()

function increaseCounter() {
  let tagCounter = document.querySelector("#counterItems");
  let counter = parseInt(tagCounter.innerText);
  counter = counter + 1;
  tagCounter.innerText =  counter.toString(); //Agregando el nuevo valor al HTML.
}//Fin de función increaseCounter()

function decreaseCounter() {
  let tagCounter = document.querySelector("#counterItems");
  let counter = parseInt(tagCounter.innerText);
  counter = counter - 1;
  tagCounter.innerText =  counter.toString(); //Agregando el nuevo valor al HTML.
}//Fin de función decreaseCounter()

function changeButtonStatus(button,id) {
  let status = button.innerText.toLowerCase();//El status del botón en minúsculas.
  if (status == "agregar a carrito") {
    button.innerText = "Quitar del carrito"
    addToCart( id )
  }else {
    button.innerText = "Agregar a carrito";
    removeFromCart( id )
  }
}//Fin de función changeButtonStatus(button, id)

function saveLocalS () {
  let stringArray = JSON.stringify(arrayProductAdd)
  console.log(stringArray);
  localStorage.setItem('product', stringArray);
}//Fin de función saveLocalS().
