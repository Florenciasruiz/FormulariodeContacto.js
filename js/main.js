// Array para almacenar la información del usuario
let usuario = [];

// Función para solicitar información al usuario
function solicitarInformacion(dato, mensaje) {
  let input = prompt(mensaje);
  if (input === null || input === '') {
    alert("Has cancelado el proceso o el campo está vacío.");
    return null;
  }
  return input;
}

// Función principal para solicitar la información
function solicitarDatosUsuario() {
  const datos = ["Nombre", "Email", "Mensaje"];

  for (const dato of datos) {
    let info = solicitarInformacion(dato, `Por favor, ingrese su ${dato}:`);
    if (info !== null) {
      usuario.push({ [dato]: info });
    } else {
      usuario.length = 0; 
      return;
    }
  }

  if (usuario.length === datos.length) {
    alert("¡Gracias por completar el formulario!");
    console.log(usuario);
  }
}

solicitarDatosUsuario();
