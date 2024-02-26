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

registerForm.addEventListener('submit', (event) => {
    event.preventDefault(); 
    registerForm.classList.add('hide');
    loginForm.classList.remove('hide');
});
// Manejar el registro
document.querySelector('.form').addEventListener('submit', async (event) => {
    event.preventDefault(); // Evitar que se envíe el formulario automáticamente

    // Obtener los datos del formulario
    const formData = new FormData(event.target);

    try {
        // Enviar los datos del formulario al servidor
        const response = await fetch('/registro', {
            method: 'POST',
            body: formData
        });

        // Verificar si el registro fue exitoso
        if (response.ok) {
            const data = await response.json();

            if (data.success) {
                formRegister.classList.add("hide");
                formLogin.classList.remove("hide");
            } else {
                // Manejar el caso en que el registro no fue exitoso
                console.error('Error al procesar el registro:', data.error);
                alert('Error al registrar. Inténtalo de nuevo más tarde.');
            }
        } else {
            // Manejar el caso en que no se pudo conectar con el servidor
            console.error('Error al conectar con el servidor:', response.status);
            alert('Error al registrar. Inténtalo de nuevo más tarde.');
        }
    } catch (error) {
        // Manejar errores de red o errores inesperados
        console.error('Error:', error);
        alert('Error al conectar con el servidor. Inténtalo de nuevo más tarde.');
    }
});