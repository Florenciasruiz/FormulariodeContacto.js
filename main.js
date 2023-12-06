
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  const userDataDiv = document.getElementById('userData');

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const formData = { name, email, message };
    console.log("Datos del formulario:", formData);

    // Almacenar datos en localStorage
    localStorage.setItem('formData', JSON.stringify(formData));

    // Mostrar datos en el DOM
    userDataDiv.innerHTML = `
      <h2>Datos del usuario:</h2>
      <p><strong>Nombre:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Mensaje:</strong> ${formData.message}</p>
    `;
  });

  // Cargar datos del localStorage al cargar la página
  const savedData = localStorage.getItem('formData');
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    userDataDiv.innerHTML = `
      <h2>Datos del usuario:</h2>
      <p><strong>Nombre:</strong> ${parsedData.name}</p>
      <p><strong>Email:</strong> ${parsedData.email}</p>
      <p><strong>Mensaje:</strong> ${parsedData.message}</p>
    `;
  }
});
