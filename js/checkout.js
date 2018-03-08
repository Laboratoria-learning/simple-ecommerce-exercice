const productsToBuy = JSON.parse(localStorage.getItem("productsInCart"));
let productsInCartContainer = document.getElementById("products-container");
let sumOfProducts = 0; 

function calculateTotal(productsToBuy) {
  
  productsToBuy.forEach(element => {
    const nameOfProduct =element.title;
    const priceOfProduct = element.price;
    sumOfProducts += priceOfProduct;
    var newProductinCart = `
      <th scope="row">${nameOfProduct}</th>
      <td>${priceOfProduct}</td>
    `
    let productContainer = document.createElement("TR");
    productContainer.innerHTML = newProductinCart;
    productsInCartContainer.prepend(productContainer);
  });
  const sumContainer = document.getElementById("sum-of-products");
  sumContainer.innerText = sumOfProducts;
}

calculateTotal(productsToBuy);

