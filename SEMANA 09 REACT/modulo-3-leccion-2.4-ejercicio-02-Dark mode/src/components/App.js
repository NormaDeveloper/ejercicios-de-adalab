// 2. Dark mode
// Ahora vamos a programar la típica funcionalidad del dark mode. Para ello:
// Crea un proyecto con los siguientes contenidos:
// Un botón con el texto "Des / activar el dark mode".
// Un párrafo con el texto "Tienes activado el dark mode".
// Un texto cualquiera de relleno con lorem ipsum.
// Añade la funcionalidad para que toda la página funcione correctamente. Cada vez que la usuaria pulse en el botón "Des / activar el dark mode" debes:
// Invertir el valor de una constante del estado de React.
// Repintar la página añadiendo una clase CSS en el <div /> principal del componente:
// Añade estilos en tu CSS / Sass que cambien los colores de la página.
// Si quieres puedes utilizar los estilos filter para invertir los colores de la página.
// Repintar el párrafo "Tienes activado el dark mode" para que des / aparezca:
// Crea una función que se llame renderDarkModeText().
// Esta función debe comprobar el valor del estado de React.
// Esta función debe retornar un párrafo en JSX si el dark mode está activo.
// Esta función debe retornar un null si el dark mode no está activo.
// Debes llamar a esta función desde el retorno de tu componente.

import '../styles/App.scss';
import { useState } from 'react'; //Importamos useState desde React

const App = () => {
  const [mode, setMode] = useState('');

  const renderDarkModeText = () => {
    //2- comprobar el valor del estado de React
    mode === '' ? setMode('dark') : setMode('');
  };

  return (
    //añado clase que se modificará
    <div className={mode}>
      {/* 1 - Añado botón. Y le pongo evento y función handle al botón */}
      <button onClick={renderDarkModeText}>Des / activar el dark mode</button>
      <p>Tienes activado el dark mode </p>

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe,
        dignissimos similique cum ex quod dolor esse quia neque debitis.
        Eveniet.
      </p>
    </div>
  );
};

export default App;
