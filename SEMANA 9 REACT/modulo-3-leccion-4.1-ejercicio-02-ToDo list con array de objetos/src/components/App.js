// Ahora vamos a mejorar el ejercicio anterior sustituyendo el array de strings por un array de objetos.
// Sustituye el array de tareas por:
// const tasks = [
//   { task: 'Comprar harina, jamón y pan rallado', completed: true },
//   { task: 'Hacer croquetas ricas', completed: true },
//   { task: 'Ir a la puerta de un gimnasio', completed: false },
//   { task: 'Comerme las croquetas mirando a la gente que entra en el gimnasio', completed: false }
// ];
// Refactoriza la función en la que pintas el listado de tareas para que se vuelva a pintar el listado correctamente.
// Añade una clase CSS a cada <li /> para que si la tarea está completada se pinte tachada.
// Esta lógica la debes hacer dentro del map.
// Para saber si lo estás haciendo bien debes inspeccionar el HTML generado por React y comprobar que solo los dos primeros <li /> tienen la clase CSS.
// Cuando el HTML generado esté correcto debes meter la correspiente clase CSS en tus estilos para que los <li /> se muestren bien.

import '../styles/App.scss';

function App() {
  const tasks = [
    { task: 'Comprar harina, jamón y pan rallado', completed: true },
    { task: 'Hacer croquetas ricas', completed: true },
    { task: 'Ir a la puerta de un gimnasio', completed: false },
    {
      task: 'Comerme las croquetas mirando a la gente que entra en el gimnasio',
      completed: false,
    },
  ];

  const renderTasks = () => {
    return tasks.map((task, index) => {
      return (
        <ol key={index}>
          <li className={task.completed ? 'crossed' : ''}>{task.task}</li>
        </ol>
      );
    });
  };
  return (
    <div>
      <h1>Mi lista de tareas</h1>
      {renderTasks()}
    </div>
  );
}

export default App;
