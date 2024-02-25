// Evento de correo seccion contacto
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'servicio_stefygm99';
   const templateID = 'template_s3rv1c1o';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar';
      alert('¡Tu mensaje ha sido enviado exitosamente!');
    }, (err) => {
      btn.value = 'Enviar';
      alert(JSON.stringify(err));
    });
});

