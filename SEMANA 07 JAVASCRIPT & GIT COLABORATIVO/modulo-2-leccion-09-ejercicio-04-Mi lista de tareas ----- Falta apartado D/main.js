'use strict';
// Hemos creado una aplicación para gestionar un listado de tareas. Para eso hemos creado un objeto literal con el listado de tareas y su estado. Nuestra misión es:
// Mostrar una frase que indique cuántas tareas hay.
// Pintar todas las tareas en pantalla.
// Tachar las ya realizadas.
// Permitir marcar una tarea como 'completa' o 'incompleta'.

// Veamos cómo afrontar un ejercicio de este tipo, dónde tenemos que unir muchos de los conceptos aprendidos hasta ahora, la organización es clave:
// a) Vamos a por una tarea. Primero vamos a pintar una tarea, solo una, en una lista de HTML. A continuación vamos a preparar una clase que la modifique, de manera que si fuera una tarea completada completed: true, el texto aparezca tachado.
// b) Listado de tareas. ¡Seguimos con nuestras tareas! Ahora vamos a pintar en pantalla todas la tareas que tenemos en el listado, cada una de las tareas completadas debe aparecer tachada.
// c) Vamos a darle dinamismo. Ahora viene lo bueno: vamos a añadir la lógica necesaria para completar tareas. Para ello vamos a añadir un input de tipo checkbox al final de cada tarea que nos falte por completar. El checkbox de las tareas completadas debe aparecer marcado (checked). Además, cuando el usuario marque la tarea como completada marcando el checkbox, deben suceder varias cosas:
// la tarea debe mostrarse como completada (tachada)
// debemos modificar su estado (propiedad completed) en el array tasks.

// ---------> POR HACER -------------> d) Tareas totales. No nos podemos olvidar de los detalles. Añadamos por encima del listado de tareas una frase que diga: Tienes X tareas. Y completadas y Z por realizar. Cada vez que una tarea se marque/desmarque deberiamos actualizar esta información.

const tasks = [
  { name: 'Recoger setas en el campo', completed: true },
  { name: 'Comprar pilas', completed: true },
  { name: 'Poner una lavadora de blancos', completed: true },
  {
    name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
    completed: false,
  },
];

let totalTasks = document.querySelector('.js_totalTasks');
let completedTasks = document.querySelector('.js_completedTasks');
let toDoTasks = document.querySelector('.js_toDoTasks');
let list = document.querySelector('.js_list');
const inputChecked = `<input type="checkbox"  checked name="task_seen" id="task_seen" class="js_input" />`;
const inputNotChecked = `<input type="checkbox"  name="task_seen" id="task_seen" class="js_input" />`;

//------Añadir items a la lista------
for (let i = 0; i < tasks.length; i++) {
  let listItem = `<li class="js_li">${tasks[i].name}</li>`;
  list.innerHTML += `${listItem}`;
  let it = list.querySelectorAll('.js_li');
  console.log(it);
  if (tasks[i].completed === true) {
    it[i].classList.add('completed');
    list.innerHTML += inputChecked;
  } else {
    //it[i].classList.remove('completed');
    list.innerHTML += inputNotChecked;
  }
}

//---------Mark checkebox as checked after clicking on it--------
//--------Change completed value---------

const inputChekbox = document.querySelectorAll('.js_input');
console.log({ inputChekbox });

function handleCheckbox() {
  const it = list.querySelectorAll('.js_li');
  for (let i = 0; i < tasks.length; i++) {
    if (inputChekbox[i].checked === false) {
      it[i].classList.remove('completed');
      inputChekbox[i].completed = true;
    } else {
      it[i].classList.add('completed');
      inputChekbox[i].completed = false;
    }
    console.log('completada --->' + inputChekbox[i].completed);
  }
}

for (let i = 0; i < tasks.length; i++) {
  inputChekbox[i].addEventListener('click', handleCheckbox);
}

//---------
let totalT = '';

function getTotal() {
  for (let i = 0; i < tasks.length; i++) {
    totalT++;
  }
  return;
}
getTotal();
console.log({ totalT });

//---------
let toDoTotal = '';
function getDoneTasks() {
  for (let i = 0; i < tasks.length; i++) {
    if (inputChekbox[i].checked) {
      toDoTotal++;
    }
    return;
  }
}
getDoneTasks();
console.log({ toDoTotal });
