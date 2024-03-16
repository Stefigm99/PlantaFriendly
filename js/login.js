const btnSignIn = document.getElementById("sign-in");
      btnSignUp = document.getElementById("sign-up");
      formRegister = document.querySelector(".register");
      formLogin = document.querySelector(".login");

btnSignIn.addEventListener("click", e => {
    formRegister.classList.add("hide")
    formLogin.classList.remove("hide")
})


btnSignUp.addEventListener("click", e => {
    formLogin.classList.add("hide")
    formRegister.classList.remove("hide")
})

let registros = []; 
// Verificar si hay registros almacenados en el localStorage al cargar la página
if(localStorage.getItem('registros')) {
    registros = JSON.parse(localStorage.getItem('registros'));
}

// Función para validar si ya existe un registro con el mismo correo
function correoExistente(correo) {
    return registros.some(registro => registro.correo === correo);
}

// Evento de submit para el formulario de registro
function registro() {
    // Obtener datos del formulario
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const contrasena = document.getElementById('contrasena').value.trim();

    // Verificar que los campos no estén vacíos
    if (nombre === '' || apellido === '' || correo === '' || contrasena === '') {
        // Mostrar notificación de error
        Toastify({
            text: 'Llene los campos',
            duration: 3000,
            gravity: 'top',
            position: 'right',
            backgroundColor: 'linear-gradient(to right, #EF0C0C , #A40E0E )',
            stopOnFocus: true
        }).showToast();
        return false; // Evitar el envío del formulario
    }

    // Verificar si el correo ya está registrado
    if (correoExistente(correo)) {
        // Mostrar notificación de error
        Toastify({
            text: 'Este usuario ya esta registrado',
            duration: 3000,
            gravity: 'top',
            position: 'right',
            backgroundColor: 'linear-gradient(to right, #ff6e6e, #ffc600)',
            stopOnFocus: true
        }).showToast();
        return false; // Evitar el envío del formulario
    }

    // Crear un objeto con los datos del registro
    const nuevoRegistro = {
        nombre: nombre,
        apellido: apellido,
        correo: correo,
        contrasena: contrasena
    };

    // Agregar el nuevo registro al array
    registros.push(nuevoRegistro);
    // Guardar el array en el localStorage
    localStorage.setItem('registros', JSON.stringify(registros));

    // Mostrar notificación de registro exitoso
    Toastify({
        text: 'Registro exitoso',
        duration: 3000,
        gravity: 'top',
        position: 'right',
        backgroundColor: 'linear-gradient(to right, #1CB738 , #6BD27E )',
        stopOnFocus: true
    }).showToast();

    return true; // Permitir el envío del formulario
}

// Función para iniciar sesión
function iniciarSesion() {
    // Obtener datos del formulario de inicio de sesión
    const correo = document.getElementById('correoInicio').value.trim();
    const contrasena = document.getElementById('contrasenaInicio').value.trim();

    // Verificar si hay registros almacenados en localStorage
    if (localStorage.getItem('registros')) {
        // Obtener registros almacenados
        const registros = JSON.parse(localStorage.getItem('registros'));
        
        // Buscar el usuario en los registros
        const usuario = registros.find(registro => registro.correo === correo && registro.contrasena === contrasena);

        // Verificar si se encontró al usuario
        if (usuario) {
            // Almacenar información de sesión en el almacenamiento local
            localStorage.setItem('sesion', JSON.stringify(usuario));
            
            // Mostrar mensaje de bienvenida con el nombre del usuario
            const mensajeBienvenida = `¡Bienvenido, ${usuario.nombre}!`;
            Toastify({
                text: mensajeBienvenida,
                duration: 3000,
                gravity: 'top',
                position: 'center',
                backgroundColor: 'linear-gradient(to right, #00b09b, #96c93d)',
                stopOnFocus: true
            }).showToast();
        
            // Redireccionar al índice después del inicio de sesión exitoso
            setTimeout(() => {
                window.location.href = '/index.html';
            }, 1500);
        } else {
            // Usuario no encontrado, mostrar mensaje de error
            Toastify({
                text: "Correo y/o contraseña incorrectos",
                duration: 1000,
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
                },
            }).showToast();
        }
    } else {
        // No hay registros almacenados, mostrar mensaje de error
        Toastify({
            text: 'No hay usuarios registrados',
            duration: 3000,
            gravity: 'top',
            position: 'right',
            backgroundColor: 'linear-gradient(to right, #ff6e6e, #ffc600)',
            stopOnFocus: true
        }).showToast();
    }
}
// Asignar la función de inicio de sesión al botón de iniciar sesión
document.getElementById('btnInicioSesion').addEventListener('click', iniciarSesion);
