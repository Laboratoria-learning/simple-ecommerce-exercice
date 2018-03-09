const productsToBuy = JSON.parse(localStorage.getItem("productsInCart"));
let productsInCartContainer = document.getElementById("products-container");
let sumOfProducts = 0; 

const counter = productsToBuy.length;
const counterBox = document.getElementById("counter-items");
counterBox.innerText = counter;

function calculateTotal(productsToBuy) {
  
  productsToBuy.forEach(element => {
    const nameOfProduct =element.title;
    const priceOfProduct = element.price;
    sumOfProducts += priceOfProduct;

    let newProductinCart = `
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

//PAYPAL
          paypal.Button.render({

              env: 'sandbox', // sandbox | production

              // PayPal Client IDs - replace with your own
              // Create a PayPal app: https://developer.paypal.com/developer/applications/create
              client: {
                  sandbox:    'AdzmmdNEMWGMcLSMZkvlSV1w7mK6QK7-jOIvAjAGs1F9n-pz8eVJQsJFwByJgirDJebFwgs1tSYhztDh',
                  production: 'Ae1tHobzb78LnBOmYn9dPi77LCf-UbYjEUw1iKVAn648u0x47bRYFCik56MRbbjF1UnF0mjbkqMxHhmf'
              },

              // Show the buyer a 'Pay Now' button in the checkout flow
              commit: true,

              // payment() is called when the button is clicked
              payment: function(data, actions) {

                  // Make a call to the REST api to create the payment
                  return actions.payment.create({
                      payment: {
                          transactions: [
                              {
                                  amount: { total: sumOfProducts , currency: 'MXN' }
                              }
                          ]
                      }
                  });
              },

              // onAuthorize() is called when the buyer approves the payment
              onAuthorize: function(data, actions) {

                  // Make a call to the REST api to execute the payment
                  return actions.payment.execute().then(function(dataPayment) {
                        console.log(dataPayment.payer);
                      
                  });
              }

          }, '#paypal-button-container');

    