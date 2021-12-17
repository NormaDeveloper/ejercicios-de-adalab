'use strict';

// La raza del perro
// Vamos a realizar un ejercicio con la API de 'https://dog.ceo/dog-api/' y la api de 'https://rand.fun/'. Tenemos que pedir un listado de razas de perros, y con un número aleatorio elegir una raza del listado:
// pintar un mensaje que muestre la raza elegida al azar.
// pedir una imagen aleatoria de un perro de esa raza y pintarla.
// Si has llegado hasta aquí te proponemos otro reto, intenta que la última función sea la única que se encargue de interactuar con html, y sea esta la que pinte la raza y la imagen.

const img = document.querySelector('.js_img');
const breedTitle = document.querySelector('.js_breed');

function handleGetDogs() {
  //petición al api para obtener número aleatorio
  fetch('https://api.rand.fun/number/integer?max=94')
    .then((numResponse) => numResponse.json())
    .then((numData) => {
      const num = numData.result;
      //petición al api para obtener lista de perros
      return fetch('https://dog.ceo/api/breeds/list')
        .then((listResponse) => listResponse.json())
        .then((listData) => {
          const breedList = listData.message;
          const chosenBreed = breedList[num];

          breedTitle.innerHTML = chosenBreed;
          //petición al api para obtener imagen de la raza  seleccionada previamente
          const url =
            'https://dog.ceo/api/breed/' + chosenBreed + '/images/random';
          return fetch(url)
            .then((imgResponse) => imgResponse.json())
            .then((imgData) => {
              const dogImg = imgData.message;
              img.src = dogImg;
            });
        });
    })
    .catch((error) => console.log(`Ha sucedido un error: ${error}`));
}
window.addEventListener('load', handleGetDogs);
