Pensar en las siguientes historias de usuario y asignar responsables (https://es.wikipedia.org/wiki/Historias_de_usuario)

- Como USUARIO debo poder tener un carrito de compra

-Mantener el carrito de compra en memoria entre HTML (tip: localStorage, localStorage solo guarda     strings, como le hago para que guarde objetos y/o arreglos?) X

- Boton de agregar/quitar al carrito O

- Poder visualizar los items en mi carrito de compra O

- Como usuario debo poder revisar mis items en el checkout X --- crear un array de objetos 

- Mostrar items en carrito en el checkout X --- localstorage

- Cargar boton de PayPal X

- Configurar boton de paypal.X






- Como PROGRAMADOR debo tener todo lo necesario para trabajar con PayPal
(https://developer.paypal.com/docs/integration/direct/express-checkout/integration-jsv4/client-side-REST-integration/)

(https://developer.paypal.com/demo/checkout/#/pattern/client)

- Crear cuenta de developer Paypal

- Crear una cuenta en modo sandbox

- Obtener client ID

- Crear una cuenta de cliente para simular tener fondos y hacer transacción

- Insertar el botón de paypal sin datos del carrito (solo para probar)

- Como usuario debo poder pagar el total de los items

- Calcular el monto total basado en mis items en el carrito

- Mandar monto total a Paypal para que se pueda hacer la transacción

- Como usuario debo poder visualizar un mensaje de confirmacion en el UI al momento de realizar el     pago.

- Buscar en el código del botón de paypal donde ejecutar función.

- Crear div/ventana de confirmacion

- Acceder al número de confirmación y mostrarlo en la pantalla.
