import { NavLink, Link, Route } from 'react-router-dom'; // importo comp--
import '../styles/App.scss';
import jsonList from '../data/dataList.json'; //modificar nombres- - - -
import { useState, useEffect } from 'react';
import getApiData from '../services/api';

import Tooltip from './Tooltip';

const App = () => {
  return (
    <div>
      <h1>Practicando con tooltips y children</h1>

      <h2>
        Blanditiis illo facilis incidunt numquam laborum, dolore quod
        consequuntur aliquam a!
      </h2>
      <Tooltip>
        <h4>Este es el título de la ayuda</h4>
        <p>Y esta es la descripción de la ayuda.</p>
      </Tooltip>

      <h2>
        Quam eligendi, ut rem eos, quae ab maxime ea quia repudiandae cumque?
        Ducimus iste amet beatae ipsa ab!
      </h2>
      <Tooltip>
        <p>Esta ayuda no tiene título, solo descripción.</p>
      </Tooltip>
    </div>
  );
};

export default App;

//   return (
//     <div>
//       <h2>Este título aparece siempre</h2>
//       {/* 1- Usamos el componente Route */}
//       <Route path="/contacto">
//         <h2>
//           Este título solo aparece cuando la usuaria entra en la página de
//           contacto
//         </h2>
//       </Route>

//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Ir a inicio</Link>
//           </li>
//           <li>
//             {/*2️- Cuando usuario pulsa un link, la ruta dl navegador cambia*/}
//             <Link to="/contacto">Ir a contacto</Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// }

// export default App;
