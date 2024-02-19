//Modal del Carrito
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("iconoCarrito").addEventListener("click", function() {
      var modal = new bootstrap.Modal(document.getElementById("modalCarrito"));
      modal.show();
    });
  });