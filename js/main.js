// Objeto para almacenar la información del usuario
let usuario = {
  nombre: '',
  email: '',
  mensaje: ''
};

// Función para solicitar información al usuario
function solicitarInformacion(dato, mensaje) {
  let input = prompt(mensaje);
  if (input === null) {
    alert("Has cancelado el proceso.");
    return null;
  }
  while (!input) {
    input = prompt(dato + " es obligatorio. Ingrese su " + dato.toLowerCase() + ":");
    if (input === null) {
      alert("Has cancelado el proceso.");
      return null;
    }
  }
  return input;
}

// Función para confirmar la información proporcionada por el usuario
function confirmarInformacion(usuario) {
  alert("¡Gracias por completar el formulario! Nombre: " + usuario.nombre + ", Email: " + usuario.email + ", Mensaje: " + usuario.mensaje);
}

// Función principal para solicitar la información
function solicitarDatosUsuario() {
  usuario.nombre = solicitarInformacion("Nombre", "Por favor, ingrese su nombre:");
  if (usuario.nombre !== null) {
    usuario.email = solicitarInformacion("Email", "Por favor, ingrese su dirección de correo electrónico:");
    if (usuario.email !== null) {
      usuario.mensaje = solicitarInformacion("Mensaje", "Por favor, ingrese su mensaje:");
      if (usuario.mensaje !== null) {
        confirmarInformacion(usuario);
      }
    }
  }
}

// Llamada a la función principal
solicitarDatosUsuario();

