'use strict';
//Sobre el ejercicio 2 vamos a cachear las búsquedas al servidor. De forma que cuando  busquemos una cadena a través del campo de búsqueda, primero busque en localStorage si ya tenemos un resultado en local para esa cadena. Si no lo hay se pide al servidor y luego se guarda en localStorage usando como clave el texto de la búsqueda; si al buscarlo en localStorage lo encontramos pues le enseñamos el resultado directamente al usuario y nos evitamos una petición al servidor.

const list = document.querySelector('.js_characters');
const searchInput = document.querySelector('.js_searchInput');
const btn = document.querySelector('.js_btn');

function handleGetCharacter() {
  if (localStorage.getItem(searchInput.value) !== null) {
    list.innerHTML = JSON.parse(localStorage.getItem(searchInput.value));
    console.log('Obtengo el dato de la caché');
  } else {
    fetch(`https://swapi.py4e.com/api/people/?search=${searchInput.value}`)
      .then((response) => response.json())
      .then((data) => {
        const characters = data.results;
        let listData = ''; //limpia lista cada vez que vuelvo a buscar
        for (let i = 0; i < characters.length; i++) {
          listData += `<li>Nombre: ${characters[i].name} Género: ${characters[i].gender} </li>`;
        }

        list.innerHTML = listData;
        localStorage.setItem(searchInput.value, JSON.stringify(listData));
      });
  }
}
btn.addEventListener('click', handleGetCharacter);
