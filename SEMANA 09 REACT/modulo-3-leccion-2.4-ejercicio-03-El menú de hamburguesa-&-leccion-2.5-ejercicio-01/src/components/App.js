// 3. El menú de hamburguesa
// En este ejercicio vamos a programar el típico menú de hamburguesa que se despliega desde la izquierda de la página.
// Para ello necesitaremos:
// Crea un nuevo ejercicio desde tu React starter kit.
// Empieza por crear el HTML dentro de tu componente App. Debemos añadir:
// Un icono que al pulsarlo abra el menú.
// Un contenedor del menú.
// Un icono que al pulsarlo cierre el menú. Este icono lo meteremos dentro del contenedor del menú.
// A continuación debemos crear los estilos que nos permitan que añadiendo y quitando una clase al contenedor del menú éste aparezca y desaparezca.
// Por último tenemos que gestionar el estado del menú con React. Para ello:
// Crearemos un estado para guardar si el menú está abierto o cerrado. ¿Qué tipo de dato crees que debe ser?
// Crear una función manejadora que cada vez que se ejecute invierta el valor del estado.
// Añadir esta única función manejadora a los dos iconos.

import '../styles/App.scss';
import { useState } from 'react'; //Importamos useState desde React

//1- Para añadir iconos en React necesito React-icons, una librearía de React
//La añado con: npm install react-icons

//2- Luego importo el icono de la librería de React:
//https://react-icons.github.io/react-icons/search?q=hamburg
import { FaHamburger } from 'react-icons/fa';

const App = () => {
  const [classMenuContainer, setMenu] = useState('hidden');

  const handleMenu = () => {
    // debugger;
    if (classMenuContainer === 'hidden') {
      setMenu('noHidden');
    } else {
      setMenu('hidden');
    }
  };

  // debugger;
  return (
    <div>
      <FaHamburger onClick={handleMenu} />
      <div className={classMenuContainer}>
        <p onClick={handleMenu}>Ocultar menú</p>
        <ul>
          <li>Introducción</li>
          <li>Información de interés</li>
          <li>Módulo 1</li>
          <li>Módulo 2</li>
          <li>Módulo 3</li>
        </ul>
      </div>
    </div>
  );
};

export default App;
