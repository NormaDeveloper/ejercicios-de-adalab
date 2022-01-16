// Buscador de series
// Vamos a hacer un buscador de series en React. Los requisitos son:
// Debe haber un campo de texto para que la usuaria busque una serie.
// Cada vez que la usuaria escriba una letra debemos volver a realizar la búsqueda.
// La búsqueda la debemos hacer llamando al API https://api.tvmaze.com/search/shows?q= más las palabra buscada.
// Debemos pintar en pantalla los resultados devueltos por el API.

import '../styles/App.scss';
import { useState, useEffect } from 'react';
import callToApi from '../services/api';

const App = () => {
  // Estados
  // Creamos series para guardar los personajes respondidos por el API, por eso es un array vacío
  const [series, setSeries] = useState([]);
  // Creamos searchWord para gestionar el input de búsqueda, por eso es un string vacío
  const [searchWord, setSearchWord] = useState('');

  // Llamar al api con useEffect
  useEffect(() => {
    // Dentro de useEffect llamamos al API
    callToApi(searchWord).then((response) => {
      // Cuando el API responde guardamos los datos en el estado para que se re-renderice el componente
      setSeries(response);
    });
  }, [searchWord]);

  const handleSearchWord = (ev) => {
    // Cuando la usuaria cambia el input guardamos su valor en el estado
    setSearchWord(ev.target.value);
  };

  //render
  const renderSeries = () => {
    // Pintamos el listado de series del API
    return series.map((serie, index) => {
      // El API no nos devuelve un id para cada serie, por eso usamos el index que nos da el map
      return <li key={index}>Nombre: {serie.name}</li>;
    });
  };

  return (
    <div>
      <h1>Busca una serie </h1>
      <form>
        <label htmlFor="name">Busca tu serie favorita:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={searchWord}
          onChange={handleSearchWord}
        />
      </form>
      <h2>Series con el nombre: {searchWord}</h2>
      <ul>{renderSeries()}</ul>
    </div>
  );
};

export default App;
