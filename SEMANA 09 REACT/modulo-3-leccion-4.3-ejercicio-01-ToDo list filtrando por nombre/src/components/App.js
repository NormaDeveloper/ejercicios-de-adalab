// 1. ToDo list filtrando por nombre
// Partiendo de la última versión del ejercicio del ToDo list debemos:
// Añadir un input de texto.
// Cuando la usuaria cambie el input se debe guardar su valor en el estado.
// Al renderizar se debemos mostrar las tareas filtradas por nombre.

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

  const [userInput, setUserInput] = useState('');

  const handleLi = (e) => {
    // Obtener el índice de la tarea clickada.
    const clickedLiId = e.currentTarget.id;
    //Invertir la propiedad completed de la tarea clickada.
    tasks[clickedLiId].completed = !tasks[clickedLiId].completed;
    //Guardar en el estado el array modificado
    setTasks([...tasks]);
  };

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const renderTasks = () => {
    const dataFiltered = tasks.filter((eachTask) =>
      eachTask.task.includes(userInput)
    );

    return dataFiltered.map((task, index) => {
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

      <label htmlFor="userInput">Filtrar tareas: </label>
      <input
        type="text"
        name=""
        id="userInput"
        onChange={handleUserInput}
        value={userInput}
      />

      <ol> {renderTasks()}</ol>
    </div>
  );
}

export default App;
