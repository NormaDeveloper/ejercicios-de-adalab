import { useEffect, useState } from 'react';
import '../stylesheets/App.scss';
import getDataApi from '../services/api';
import Header from './Header';
import RepoList from './RepoList';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getDataApi().then((apiData) => {
      setData(apiData);
    });
  }, []);

  //[] vacio -> 1 sola vez, cuando carga la pag
  //[estado] estado-> el useEffect se ejecuta c/v cambie la variable de estado
  const deleteRepo = (id) => {
    //proceso borrado
    console.log(id);
    const findIndex = data.findIndex((repo) => repo.id === parseInt(id));
    data.splice(findIndex, 1);
    setData([...data]);
  };

  return (
    <div className="App">
      <main>
        <Header lesson="Resolucion" title="Resolucion dudas" />
        <section className="controls"></section>
        <section className="results">
          <RepoList listData={data} deleteRepo={deleteRepo} />
        </section>
      </main>
    </div>
  );
}

export default App;
