import '../styles/App.scss';

// 1. Eres un bot o una persona
// Te habrá pasado muchas veces que cuando te registras en una página te aparece un componente para comprobar si eres una persona o un bot. Ese componente nos hace una pregunta que en teoría solo un ser humano podría responder bien. Vamos a programarlo:
// Crea un nuevo ejercicio desde tu React starter kit.
// Crea el HTML de la página con:
// Un título que sea "Selecciona los ingredientes de la tortilla de patatas".
// Y un formulario con checkboxes para des / marcar estos ingredientes:
// Macarrones
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
  //1.--- guardo el arr de ingredientes en un estado pq son datos
  //ESTADO de todos los ingredientes que están en el listado
  const [ingredientsToDisplay, setIngredientsToDisplay] = useState([
    'macaroon',
    'potato',
    'nut',
    'egg',
    'onion',
    'beer',
  ]);

  //ESTADO de ingredientes que ha escogido el usuario
  const [ingredientsList, setIngredientsList] = useState([]);

  //Handle de checkboxes
  const handleCheckbox = (ev) => {
    console.log(ev.currentTarget.checked);
    console.log(ev.currentTarget.value);
    const checked = ev.currentTarget.checked;
    const value = ev.currentTarget.value;
    if (checked) {
      //añado ingrediente q me viene en value a la variable estado
      //sin react hubiese hecho: ingredientsList.push(value)
      //¿cómo hago push en react?
      //me invento un arr nuevo pero clonando el q ya tengo
      setIngredientsList([...ingredientsList, value]); //===> es como un push
    } else {
      //QUITO ingrediente de var estado con filter
      //filtro la lista d ingredientes actual, q sí tiene el elem en q cliqué
      // cojo todos los q son distinto del value
      setIngredientsList(
        ingredientsList.filter((eachIngredient) => eachIngredient !== value)
      );
    }
  };

  //Handle de reset
  const handleClickReset = (e) => {
    e.preventDefault();
    setIngredientsList([]);
  };

  //creo variable auxiliar de inputs de checkboxes
  //  2.--- Le aplico un map a la lista de ingredientes para q haya un html por cada ingrediente
  //   -- ojo pq no puede haber 2 etiquetas madre. Solo una(opcion:fragment)
  const htmlCheckboxes = ingredientsToDisplay.map((eachIngredient, index) => (
    <label key={index} htmlFor={`ingredient-${eachIngredient}`}>
      <input
        id={`ingredient-${eachIngredient}`}
        type="checkbox"
        value={eachIngredient}
        name="ingredient"
        checked={ingredientsList.includes(eachIngredient)}
        onChange={handleCheckbox}
      />
      {eachIngredient}
    </label>
  ));

  //creo variable auxiliar del mensaje que saldrá
  const messageCebollista =
    ingredientsList.includes('onion') &&
    ingredientsList.includes('potato') &&
    ingredientsList.includes('egg') &&
    !ingredientsList.includes('beer') &&
    !ingredientsList.includes('nut') &&
    !ingredientsList.includes('macaroon')
      ? 'Eres concebollista'
      : 'Eres un robot sin paladar';

  return (
    <div>
      <h1>Selecciona los ingredientes de la tortilla de patatas</h1>
      <form>
        {htmlCheckboxes}
        <button onClick={handleClickReset}>Reset</button>
        <p>{messageCebollista}</p>
      </form>
    </div>
  );
}

export default App;
