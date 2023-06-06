document.getElementById('contactoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto
  
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('mensaje').value;
  
    // Aquí puedes agregar tu lógica de envío de correo electrónico
    // Puedes utilizar librerías de terceros como Axios o Fetch API para hacer una solicitud a tu backend
  
    // Ejemplo utilizando Fetch API
    fetch('index.html', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nombre: nombre,
        email: email,
        mensaje: mensaje
      })
    })
    .then(function(response) {
      if (response.ok) {
        // Mostrar mensaje de confirmación
        alert('Mensaje enviado correctamente.');
        // Redireccionar a la página inicial
        window.location.href = 'index.html';
      } else {
        alert('Error al enviar el mensaje. Por favor, inténtalo de nuevo.');
      }
    })
    .catch(function(error) {
      console.log(error);
      alert('Error al enviar el mensaje. Por favor, inténtalo de nuevo.');
    });
  });