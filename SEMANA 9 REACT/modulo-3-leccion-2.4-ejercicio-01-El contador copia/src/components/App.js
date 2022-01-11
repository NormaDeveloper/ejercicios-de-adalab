// 1. El contador
// Vamos a crear un contador incremental. Para ello necesitamos combinar lo que hemos aprendido sobre el estado y los eventos de React. Sigue los siguientes pasos:
// Crea un nuevo proyecto a partir de tu React starter kit.
// Añade el texto: Contador: 0.
// Añade un botón a tu página que al pulsarlo incremente el valor del texto para que ponga Contador: 1.
// Añade otra funcionalidad que quieras como por ejemplo:
// Un botón para decrementar el contador.
// Un botón para resetear el contador.

import '../styles/App.css';
import { useState } from 'react'; //Importamos useState desde React

const App = () => {
  const [number, setNumber] = useState(0);
  //4- variable contador
  let counter = 0;
  //3- creo función manejadora del botón incrementar
  const handleIncrement = () => {
    //5- añado al contador el number +1
    counter = number + 1;

    //6- ejecuto setNumber para actualizar el valor del estado number
    // React guarda el valor del counter en la constante number
    setNumber(counter);
  };

  const handleDecrement = () => {
    counter = number - 1;
    setNumber(counter);
  };

  const handleReset = () => {
    counter = 0;
    setNumber(counter);
  };

  return (
    <div>
      {/* 1- creo texto y le pongo la const */}
      <h2>Contador: {number}</h2>
      {/* 2 - añado botón. Y le pongo evento y función handle al botón */}
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default App;
