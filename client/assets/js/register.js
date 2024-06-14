//Tomamos el form del html.
const form = document.getElementById('form')

// Funcion para registrarse
const register = async (e) => {

    // Evitamos el evento submit.
    e.preventDefault();

    // Tomamos los valores de los inputs.
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const usuario = document.getElementById('usuario').value;
    const correo = document.getElementById('correo').value;
    const contrasenia = document.getElementById('contrasenia').value;

    // Realizamos la peticion a nuestro servidor.
    const peticion = await fetch('http://localhost:3000/register', {
        method: 'POST',
        body: JSON.stringify({nombre, apellido, usuario, correo, contrasenia}),
        headers: {
            'Content-type': 'application/json'
        }
    })

    // Convertimos en json la respuesta.
    const respuesta = await peticion.json();

    // En caso de que falle la peticion, mostrar el mensaje de error.
    if(!peticion.ok){
        alert(respuesta.msg)
    } else {

        //Caso contrario, mostramos el mensaje.
        alert(respuesta.msg)

        // Redirigimos al usuario al login.
        window.location.href = '/client/login.html'
    }

}

form.addEventListener('submit', register);


