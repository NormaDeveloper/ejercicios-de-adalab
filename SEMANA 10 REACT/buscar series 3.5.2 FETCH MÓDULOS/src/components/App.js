import '../styles/App.scss';
import { useState, useEffect } from 'react';
import getApiData from '../services/api';

function App() {
  //State variables
  const [search, setsearch] = useState('');
  //los datos q me devuleve api los guardo en var estado--------
  const [data, setData] = useState([]);

  //Global var
  //Hooks

  //SI USO FETCH AQUÍ CON MODULOS -----------------
  useEffect(() => {
    getApiData(search).then((dataFromApi) => {
      setData(dataFromApi);
    });
  }, [search]);
  //Events functions
  const handleInputSearch = (e) => {
    setsearch(e.target.value);
  };

  //variables or functions with html
  const htmlData = data.map((eachmovie, index) => (
    <h1 key={index}> {eachmovie.show.name}</h1>
  ));

  return (
    <div>
      <h1>Busca tu serie: </h1>
      <input type="text" onChange={handleInputSearch} value={search} />

      <h1>Tus series:</h1>
      <ul>{htmlData}</ul>
    </div>
  );
}

export default App;
