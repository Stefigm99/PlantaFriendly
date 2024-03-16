// Evento de correo seccion contacto
const btn = document.getElementById('button');
const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  btn.value = 'Enviando...';

  const serviceID = 'servicio_stefygm99';
  const templateID = 'template_s3rv1c1o';

  emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
          btn.value = 'Enviar';
          Toastify({
              text: "¡Tu mensaje ha sido enviado exitosamente!",
              duration: 3000,
              close: true,
              gravity: "top", 
              position: "right", 
              stopOnFocus: true, 
              style: {
                  background: "linear-gradient(to right, #79631F, #48791F)",
                  borderRadius: "2rem",
                  textTransform: "uppercase",
                  fontSize: ".75rem"
              },
              offset: {
                  x: '1.5rem', 
                  y: '1.5rem' 
              }
          }).showToast();
          
          // Resetear el formulario después de enviarlo exitosamente
          form.reset();
      })
      .catch((err) => {
          btn.value = 'Enviar';
          Toastify({
              text: "¡Hubo un error al enviar tu mensaje!",
              duration: 3000,
              close: true,
              gravity: "top", 
              position: "right", 
              stopOnFocus: true, 
              style: {
                  background: 'linear-gradient(to right, #FFCC00, #FF6666)',
                  borderRadius: "2rem",
                  textTransform: "uppercase",
                  fontSize: ".75rem"
              },
              offset: {
                  x: '1.5rem', 
                  y: '1.5rem' 
              }
          }).showToast();
      });
});

