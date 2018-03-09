const products = data.products;

drawProducts = (data) => {
  let productsContainer = document.getElementById("products-container");
  products.forEach((product, index) => {
    let productHTML = createProductHTML(product);
    productsContainer.appendChild(productHTML);
  });
}

createProductHTML = (product) => {
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

const productsUser = []; 

addToCart = (id) => {     
  let productsUserCount = products.filter(element => element.id == id);   
  productsUser.push(productsUserCount[0]);    
  localStorage.setItem('productsUser', JSON.stringify(productsUser));
  changeButtonStatus(event.target); 
  // removeFromCart(id, productsUser)
  console.log(productsUser);
  
  // 1) Incrementar en uno mi contador del menu O
  // 2) Guardar mi producto en algun lugar--localstorage X
  // 3) Cambiar el boton de agregar a carrito por quitar del carrito O
}

removeFromCart = (id) => { 
  // localStorage.removeItem('productsUser');
  // // const idProduct = parseInt(id); 
  // let productsUserCount = productsUser.filter(element => element.id != id);   
  // productsUser.push(productsUserCount[0]);  
  // localStorage.setItem('productsUser', JSON.stringify(productsUser));
  // console.log(productsUser); 

  // 1) Decrementar en uno mi contador del menu O
  // 2) Borrar mi producto de algun lugar X --localstorage
  // 3) Cambiar el boton de quitar del carrito por agregar a carrito O
}

increaseCounter = (buttonCounter) => {
  let counter = parseInt(buttonCounter.innerText);
  counter += 1;
  buttonCounter.innerText = counter;
  //  como accedemos al HTML del contador y como lo incrementamos O
}

decreaseCounter = (buttonCounter) => {
  let counter = parseInt(buttonCounter.innerText);
  counter -= 1;
  buttonCounter.innerText = counter;
  // como accedemos al HTML del contador y como lo incrementamos O
}

changeButtonStatus = (eventtarget) => {
  const buttonCounter = document.getElementById('counterItems');
  
  if (eventtarget.innerText == 'Agregar a carrito') {
    increaseCounter(buttonCounter);    
    eventtarget.innerText = 'Quitar al carrito';
  } else {
    eventtarget.innerText = 'Agregar a carrito';    
    removeFromCart(eventtarget.dataset.productId);    
    decreaseCounter(buttonCounter);
  }
  /* esta funcion deberia recibir un boton y cambiar su estatus O
    Si el boton esta en agregar al carrito cambia el texto a quitar del carrito O
    Y viceversa O
  */
}

// document.getElementById('button-checkout').addEventListener('click', calculateTotal);