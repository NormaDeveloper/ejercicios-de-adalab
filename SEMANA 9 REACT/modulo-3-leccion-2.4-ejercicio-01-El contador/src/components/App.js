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
