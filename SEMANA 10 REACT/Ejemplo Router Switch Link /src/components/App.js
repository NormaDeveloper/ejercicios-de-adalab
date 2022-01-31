// Fichero src/components/App.js (código sin Switch)

import { Link, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h1>ADALABER esto aparece siempre</h1>

      <Link to="/patata">Ir a Patata</Link>
      <br />
      <br />
      <Link to="/patata/en/tortilla">Ir a Patata en tortilla</Link>
      <br />
      {/* 1-- Para mostrar un componente según la ruta en la que estemos, se usa Route */}
      {/* 2-- Dentro de route le pongo lo que quiero q salga en esa Ruta. */}
      {/* 3-- Y le digo que su ruta será la que le indique con props */}
      {/* El contenido de Route es una props.children */}
      {/* ROUTE TIENE 2 PROPS: path y children (su contenido hija) */}
      <Switch>
        {/* SWITCH es para comprobar si el link clicado concuerda con uno de los Route. Y con el primero q coincida, ese es el q se muestra */}
        {/* Dentro del Switch pondré los más específicos arriba y abajo los menos como la raíz */}

        <Route exact path="/patata/en/tortilla">
          {/* Este html irá a la childeren de Route */}
          <h2>Patata en tortilla me encanta</h2>
          <Link to="/"> VOLVER</Link>
        </Route>
        <Route exact path="/patata">
          <h2>Patata</h2>
          <Link to="/"> VOVLER</Link>
        </Route>

        <Route exact path="/">
          <h2>Raíz landing</h2>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
