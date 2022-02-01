// 2. ToDo list con recuento de tareas
// Partiendo del ejercicio anterior queremos mostrar un recuento de las tareas. Añade tres párrafos al componente que pongan:
// Tareas totales: 4
// Tareas completadas: 3
// Tareas pendientes: 1

import '../styles/App.scss';
import { useState } from 'react';

function App() {
  //Vatiables estado
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

  //Variables generales
  const total = tasks.length;

  //CALCULAR TAREAS COMPLETADAS
  //A tareas ya filtradas les aplico filter con la condición de task.completed y le pido su length para saber cuántas hay
  const dataFiltered = tasks.filter((eachTask) =>
    eachTask.task.includes(userInput)
  );
  const completedTasks = dataFiltered.filter((eachTask) => eachTask.completed);
  const completedNumber = completedTasks.length;

  //CALCULAR TAREAS NO COMPLETADAS

  const incompletedTasks = dataFiltered.filter(
    (eachTask) => !eachTask.completed
  );
  const incompletedNumber = incompletedTasks.length;

  //Funciones handle
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

  //Función render
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
      <p>Tareas totales: {total}</p>
      <p>Tareas completadas: {completedNumber}</p>
      <p>Tareas pendientes: {incompletedNumber}</p>

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
