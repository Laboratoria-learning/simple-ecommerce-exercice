calculateTotal = () => {
  const productsUserTotal = JSON.parse(localStorage.getItem('productsUser'));
  const containerTotal = document.getElementById('total');
  const containerUserProducts = document.getElementById('container-products-user');
  let totalBill = 0;
  productsUserTotal.forEach(element => {
  totalBill += element.price;
    console.log(totalBill);
  
  let output = `
        <tr>
          <th scope="row">${element.title}</th>
          <td>${element.price}</td>
        </tr>
  `;
    containerUserProducts.insertAdjacentHTML('beforeBegin', output);
  });

  containerTotal.innerText = totalBill;


  //como le hacemos para extraer toda
  //de cantidades de los elementos
  //en mi carrito
}

calculateTotal();
