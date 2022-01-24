import '../styles/App.scss';

// 1. Eres un bot o una persona
// Te habrá pasado muchas veces que cuando te registras en una página te aparece un componente para comprobar si eres una persona o un bot. Ese componente nos hace una pregunta que en teoría solo un ser humano podría responder bien. Vamos a programarlo:
// Crea un nuevo ejercicio desde tu React starter kit.
// Crea el HTML de la página con:
// Un título que sea "Selecciona los ingredientes de la tortilla de patatas".
// Y un formulario con checkboxes para des / marcar estos ingredientes:
//
// Patatas
// Nueces
// Huevos
// Cebolla
// Cerveza
// A continuación programa la funcionalidad que haga que si la usuaria selecciona solo los ingredientes Patatas, Huevos y Cebolla aparezca un párrafo con el texto "Eres una persona concebollista". En cualquier otro caso el texto de este párrafo debe ser "Eres un robot sin paladar".
// Cada vez que tengas que hacer un ejercicio lo primero que debes pensar es:
// Qué datos necesito guardar en el estado de React y cuáles no.
// Qué tipo de datos son.
// Pista: en este caso los datos que debemos guardar en el estado son solo los datos que la usuaria puede cambiar.

import { useState } from 'react';

function App() {
  //Guardo en variEstado lo que selecciona usuario: el true/false de checkbox
  //Los checkboxes necesitan un array para guardar el listado de todo lo q ha seleccionado el usuario. Y según va selecccionando el usuario, la añadimos o la quitamos

  const [ingredientsList, setIngredientsList] = useState([]);
  const [ingredientsDisplay, setIngredientsDisplay] = useState([
    'Macarrones',
    'Patatas',
    'Nueces',
    'Huevos',
    'Cebolla',
    'Cerveza',
  ]);

  //Handle Checkboxes
  const handleChangeCheckbox = (e) => {
    const value = e.currentTarget.value;
    const checked = e.currentTarget.checked;
    checked
      ? setIngredientsList([...ingredientsList, value])
      : setIngredientsList(
          ingredientsList.filter((eachIngredient) => eachIngredient !== value)
        );
  };
  const htmlIngredients = ingredientsDisplay.map((eachIngredient, index) => (
    <label key={index} htmlFor={eachIngredient}>
      {eachIngredient}
      <input
        onChange={handleChangeCheckbox}
        // Compruebo si en el arr está el value en el q se ha clicado
        checked={ingredientsList.includes(eachIngredient)}
        type="checkbox"
        id={eachIngredient}
        name="ingredient"
        value={eachIngredient}
      />
    </label>
  ));
  return (
    <div>
      <h1>Selecciona los ingredientes de la tortilla de patatas</h1>
      <form action="">{htmlIngredients}</form>
      <p>
        {ingredientsList.includes('Cebolla') &&
        ingredientsList.includes('Patatas') &&
        ingredientsList.includes('Huevos') &&
        !ingredientsList.includes('Cerveza') &&
        !ingredientsList.includes('Nueces') &&
        !ingredientsList.includes('Macarrones')
          ? 'Eres una persona concebollista'
          : 'Eres un robot sin paladar'}
      </p>
    </div>
  );
}

export default App;
