
// Datos simulados de tareas
const tasks = [
  { id: 1, title: 'Tarea 1', completed: false },
  { id: 2, title: 'Tarea 2', completed: true },
  { id: 3, title: 'Tarea 3', completed: false }
];

// Métodos de Arrays
const incompleteTasks = tasks.filter(task => !task.completed);
console.log("Tareas incompletas:", incompleteTasks);

// Funciones y condicionales
function mostrarTareasIncompletas() {
  const incompleteTasksList = document.getElementById('incompleteTasks');
  incompleteTasksList.innerHTML = ''; // Limpiar el contenido anterior

  incompleteTasks.forEach(task => {
    const taskElement = document.createElement('li');
    taskElement.textContent = task.title;
    incompleteTasksList.appendChild(taskElement);
  });
}

//  DOM y eventos
document.addEventListener('DOMContentLoaded', () => {
  mostrarTareasIncompletas();
});

// Objeto para manejar el formulario de contacto
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const formData = { name, email, message };

  console.log("Datos del formulario:", formData);
});
