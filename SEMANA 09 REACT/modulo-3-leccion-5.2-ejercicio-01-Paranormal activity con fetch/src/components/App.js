// 1. Paranormal activity
// En la lección en la que explicamos el segundo parámetro (el array) de useEffect decíamos: "Si no ponemos el array: la función se ejecutará siempre que se ejecute el componente App, es decir, siempre que se renderice".
// Vamos a probarlo:
// Crea un nuevo ejercicio desde tu React starter kit.
// Añade un servicio para trabajar con el API:
// En este servicio llama a la URL de las series de televisión https://api.tvmaze.com/search/shows?q=paranormal.
// Retorna la respuesta del servidor en el then de este servicio.
// En el componente App, en el useEffect:
// Guarda la respuesta del servicio en el estado de React.
// No pongas ningún array (ni vacío ni relleno) como segundo parámetro del useEffect.
// No hace falta que pintes en pantalla la respuesta del API porque no nos interesa para este ejercicio.
// Mira DevTools > Network y verás que hay una actividad para anormal.
// ¿Sabrías decir por qué pasa esto porque se llama repetidas veces al API? Sí, no... Queremos solucionarlo para que solo se llame al API una vez. Para ello.
// Revisa la mini lección en la que explicamos para qué es el segundo parámetro del useEffect.
// Comprueba en DevTools > Network que al refrescar la página solo se llama una vez al API.
// Razona porque se estaba renderizando muchas veces el componente.

//------> ponemos un arr vacío como segundo parámetro para pedir sólo 1 vez

import '../styles/App.scss';
import { useState, useEffect } from 'react';
import callToApi from '../services/api';

const App = () => {
  // Estados
  const [paranormalData, setParanormalData] = useState({});

  // Llamar al api con useEffect
  useEffect(() => {
    // Dentro de useEffect llamamos al API
    callToApi().then((response) => {
      // Cuando el API responde guardamos los datos en el estado para que se re-renderice el componente
      setParanormalData(response);
    });
  }, []);

  return (
    <div>
      <h1>Llamar al API </h1>
    </div>
  );
};

export default App;
