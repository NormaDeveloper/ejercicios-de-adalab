// Fichero src/components/App.js

import { Link, Route, Switch } from 'react-router-dom'; // importo componentes
import '../styles/App.scss';
import { useState, useEffect } from 'react';
import getApiData from '../services/api';
import Catalog from './Catalog';

function App() {
  //State variables
  const [products, setProducts] = useState([]);

  //Global var
  //Hooks
  useEffect(() => {
    getApiData().then((dataFromApi) => {
      const filterdData = dataFromApi.cart.items.map((each) => {
        //LIMPIO DATOS para quedarme solo con propiedades del JSON q necesito
        const cleanObject = {
          name: each.name,
          price: each.price,
          url: each.imageUrl,
          description: each.description,
          sizes: each.sizes,
        };
        //Con el return del map saco el objeto limpio para usarlo en el .then
        return cleanObject;
      });
      //Guardo el objeto ya filtrado en mi Data
      setProducts(filterdData);
    });
  }, []);

  //Events functions
  //variables or functions with html
  return (
    <div>
      <Catalog products={products} />
    </div>
  );
}

export default App;
