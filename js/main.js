// Variables
let nombre = "";
let email = "";
let mensaje = "";

// Nombre del usuario
nombre = prompt("Por favor, ingrese su nombre:");

if (nombre === null) {
  alert("Has cancelado el proceso.");
} else {
  while (!nombre) {
    nombre = prompt("El nombre es obligatorio. Ingrese su nombre:");
  }

// Email del usuario
email = prompt("Por favor, ingrese su dirección de correo electrónico:");

if (email === null) {
    alert("Has cancelado el proceso.");
} else {
  while (!email) {
    email = prompt("La dirección de correo electrónico es obligatoria. Ingrese su email:");
  }

// Mensaje del usuario
mensaje = prompt("Por favor, ingrese su mensaje:");
if (mensaje === null) {
    alert("Has cancelado el proceso.");
} else {
  while (!mensaje) {
    mensaje = prompt("El mensaje es obligatorio. Ingrese su mensaje:");
  }

// Mensaje de confirmación con la información proporcionada por el usuario
  alert("¡Gracias por completar el formulario! Nombre: " + nombre + ", Email: " + email + ", Mensaje: " + mensaje);
}
}}
