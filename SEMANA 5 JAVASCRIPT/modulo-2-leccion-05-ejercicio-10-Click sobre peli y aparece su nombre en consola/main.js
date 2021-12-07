'use strict';

// Vamos a partir de un HTML con un botón 'Empezar'. Al hacer click, vamos a pintar en el HTML un listado de películas que tenemos en JavaScript:

const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';

// Después vamos a escuchar eventos sobre cada elemento de la lista, de forma que al hacer click sobre el nombre de una película aparezca en la consola el nombre de esa película.

const btn = document.querySelector('.js-btn');
const list = document.querySelector('.js-list');
let movies = '';

const showList = () => {
  movies +=
    `<li>${inception}</li>` +
    `<li>${theButterFlyEffect}</li>` +
    `<li>${eternalSunshineOfTheSM}</li>` +
    `<li>${blueVelvet}</li>` +
    `<li>${split}</li>`;

  return (list.innerHTML = movies);
};

const consoleMovie = (e) => {
  return console.log(list.querySelector(e.currentTarget));
};

btn.addEventListener('click', showList);
list.addEventListener('click', consoleMovie);
