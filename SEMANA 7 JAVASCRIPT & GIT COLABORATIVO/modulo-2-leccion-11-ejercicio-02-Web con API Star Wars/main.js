'use strict';
// Ahora que conocemos mejor el API de Star Wars vamos a hacer una sencilla web usándolo. En la web aparece una caja de texto donde escribimos el nombre de un personaje (o parte del nombre) y un botón, al hacer click, nuestra web muestra debajo un listado con los personajes que coinciden con la búsqueda indicando su nombre y género.

const list = document.querySelector('.js_characters');
const searchInput = document.querySelector('.js_searchInput');
const btn = document.querySelector('.js_btn');

function handleGetCharacter() {
  fetch(`https://swapi.py4e.com/api/people/?search=${searchInput.value}`)
    .then((response) => response.json())
    .then((data) => {
      const characters = data.results;
      list.innerHTML = ''; //limpia lista cada vez que vuelvo a buscar
      for (let i = 0; i < characters.length; i++) {
        list.innerHTML += `<li>Nombre: ${characters[i].name} Género: ${characters[i].gender} </li>`;
      }
    });
}
btn.addEventListener('click', handleGetCharacter);
