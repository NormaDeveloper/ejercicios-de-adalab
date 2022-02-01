// 1. ToDo list con los datos en el estado
// Partiendo del ejercicio anterior del ToDo list vamos a programar su interacción: queremos que cuando la usuaria pulse en una tarea se des / marca como tachada. Para ello:
// Mete el array de objetos de las tareas en el estado con:
// const [tasks, setTasks] = useState([
//   { task: 'Comprar harina, jamón y pan rallado', completed: true },
//   { task: 'Hacer croquetas ricas', completed: true },
//   { task: 'Ir a la puerta de un gimnasio', completed: false },
//   { task: 'Comerme las croquetas mirando a la gente que entra en el gimnasio', completed: false }
// ]);
// Añade a cada <li /> un evento de tipo click con una función manejadora.
// Añade a cada <li /> un id con un índice para identificar de manera única cada tarea.
// Crea la función manejadora en la que:
// Obtener el índice de la tarea clickada.
// Invertir la propiedad completed de la tarea clickada.
// Guardar en el estado el array modificado.
// Te recomendamos que uses debugger dentro de la función manejadora para facilitarte la vida.

import '../styles/App.scss';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
    { task: 'Comprar harina, jamón y pan rallado', completed: true },
    { task: 'Hacer croquetas ricas', completed: true },
    { task: 'Ir a la puerta de un gimnasio', completed: false },
    {
      task: 'Comerme las croquetas mirando a la gente que entra en el gimnasio',
      completed: false,
    },
  ]);

  const handleLi = (e) => {
    // debugger;
    // Obtener el índice de la tarea clickada.
    const clickedLiId = e.currentTarget.id;
    //Invertir la propiedad completed de la tarea clickada.
    tasks[clickedLiId].completed = !tasks[clickedLiId].completed;
    //Guardar en el estado el array modificado
    setTasks([...tasks]);
  };

  const renderTasks = () => {
    return tasks.map((task, index) => {
      return (
        <li
          key={index}
          className={task.completed ? 'completed' : ''}
          onClick={handleLi}
          id={index}
        >
          {task.task}
        </li>
      );
    });
  };
  return (
    <div>
      <h1>Mi lista de tareas</h1>
      <ol> {renderTasks()}</ol>
    </div>
  );
}

export default App;
