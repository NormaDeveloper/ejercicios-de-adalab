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
  fetch('https://api.rand.fun/number/integer')
    .then((numResponse) => numResponse.json())
    .then((numData) => {
      const num = numData.result;
      //petición al api para obtener lista de perros
      return fetch('https://dog.ceo/api/breeds/list/all')
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
    });
}

window.addEventListener('load', handleGetDogs);

//`https://dog.ceo/api/breed/${chosenBreed}/images/random`

// fetch('https://api.rand.fun/number/integer')
//     .then((numResponse) => numResponse.json())
//     .then(async (numData) => {
//       let num = numData.result;
//       //petición al api para obtener lista de perros
//       const listResponse = await fetch('https://dog.ceo/api/breeds/list/all');
//       const listData = await listResponse.json();
//       const chosenBreed = listData[num];
//       breedTitle.innerHTML = chosenBreed;
//       //petición al api para obtener imagen de la raza que seleccionada previamente
//       const url = 'https://dog.ceo/api/breed/' + chosenBreed + '/images/random';
//       const imgResponse = await fetch(url);
//       const imgData = await imgResponse.json();
//       const dogImg = imgData.message;
//       img.src = dogImg;
//     });
