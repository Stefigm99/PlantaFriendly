//Modal del Carrito
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("iconoCarrito").addEventListener("click", function() {
      var modal = new bootstrap.Modal(document.getElementById("modalCarrito"));
      modal.show();
    });
  });

  var cantidadEnCarrito = 0;

function eliminarProducto(event) {
  var producto = event.target.closest('li');
  producto.remove();
  mostrarTotalCarrito();
  // Actualizar la cantidad en el icono del carrito
  if (cantidadEnCarrito > 0) {
    cantidadEnCarrito--;
    actualizarCantidadCarrito();
  }
}

  // Función para añadir un producto al carrito
function agregarAlCarrito(nombreProducto, precioProducto) {
  var listaProductos = document.getElementById('listaProductos');

  // Crear un nuevo elemento de lista para el producto
  var nuevoProducto = document.createElement('li');
  nuevoProducto.textContent = nombreProducto + ' - Precio: $' + precioProducto;

 // Crear un span para el icono de "x"
 var iconoEliminar = document.createElement('span');
 iconoEliminar.classList.add('float-end', 'text-danger');
 iconoEliminar.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"><path d="M.646 1.646a.5.5 0 0 1 .708 0L8 7.293 15.354.646a.5.5 0 0 1 .708.708L8.707 8l7.353 7.354a.5.5 0 0 1-.708.708L8 8.707l-7.354 7.353a.5.5 0 1 1-.708-.708L7.293 8 .646 1.646z"/></svg>';

 // Agregar el icono de "x" al producto y añadir evento de clic
 iconoEliminar.addEventListener('click', eliminarProducto);
 nuevoProducto.appendChild(iconoEliminar);

 // Agregar el producto al listado del carrito en el modal
 listaProductos.appendChild(nuevoProducto);

 mostrarTotalCarrito();

  // Ocultar el párrafo "Productos sin seleccionar" si hay productos en el carrito
  var productosSinSeleccionar = document.getElementById('productosSinSeleccionar');
  productosSinSeleccionar.style.display = 'none';
  cantidadEnCarrito++; 
  actualizarCantidadCarrito();
}

function mostrarTotalCarrito() {
  var total = 0;
  var listaProductos = document.getElementById('listaProductos').children;
  for (var i = 0; i < listaProductos.length; i++) {
    var precioTexto = listaProductos[i].textContent.match(/\$([0-9.]+)/);
    if (precioTexto) {
      total += parseFloat(precioTexto[1]);
    }
  }
  document.getElementById('totalCarrito').textContent = total.toFixed(2);
}
 // Función para actualizar la cantidad en el icono del carrito
 function actualizarCantidadCarrito() {
  var cantidadCarrito = document.getElementById('cantidadCarrito');
  cantidadCarrito.textContent = cantidadEnCarrito.toString();
}

// Evento de correo seccion contacto
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'service_stefygm99';
   const templateID = 'template_4ncuik8';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar';
      alert('¡Tu mensaje ha sido enviado exitosamente!');
    }, (err) => {
      btn.value = 'Enviar';
      alert(JSON.stringify(err));
    });
});

