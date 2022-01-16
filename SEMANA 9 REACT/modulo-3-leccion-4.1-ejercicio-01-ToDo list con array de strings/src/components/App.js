// 1. ToDo list con array de strings
// Vamos a empezar una serie de ejercicios sobre un ToDo list (o una lista de tareas). Para ello:
// Crea un ejercicio nuevo a partir de tu React stater kit.
// Añade en la primera línea de tu componente App el array:
// const tasks = [
//   'Comprar harina, jamón y pan rallado',
//   'Hacer croquetas ricas',
//   'Ir a la puerta de un gimnasio',
//   'Comerme las croquetas mirando a la gente que entra en el gimnasio'
// ];
// Renderiza un título que sea "Mi lista de tareas".
// Renderiza un <ol /> con sus <li /> pintando las 4 tareas del array.

import '../styles/App.scss';

function App() {
  const tasks = [
    'Comprar harina, jamón y pan rallado',
    'Hacer croquetas ricas',
    'Ir a la puerta de un gimnasio',
    'Comerme las croquetas mirando a la gente que entra en el gimnasio',
  ];

  const renderTasks = () => {
    return tasks.map((task, index) => {
      return (
        <ol key={index}>
          <li>{task}</li>
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
