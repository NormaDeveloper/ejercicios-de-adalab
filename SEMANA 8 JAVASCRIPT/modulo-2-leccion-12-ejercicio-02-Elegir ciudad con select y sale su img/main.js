'use strict';
// Crea una página que contenga tres imágenes, usando un select de formulario pregúntale a la usuaria qué ciudad quiere visitar.
// Si la usuaria elige Madrid, haz que en cada imagen se muestre una foto de Madrid
// Haz lo mismo para París y Nueva York

//-------------

//-------------

//Creo arrays con 3 urls por cada ciudad
const madridImages = [
  'https://globosboreal.com/wp-content/uploads/2017/08/centro-madrid.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSPe1p34ce60tcr6iOKfPhFOgj9tD-cOez-oQ&usqp=CAU',
  'https://www.hosteleriamadrid.com/wp-content/uploads/2020/03/cuatrotorres-2.png',
];

const newYorkImages = [
  'https://www.civitatis.com/blog/archivos/Estatua-de-la-Libertad.jpg',
  'https://www.hola.com/imagenes//viajes/20200416165850/manhattan-nueva-york-maravillas-desde-mi-pantalla/0-812-351/nueva-york-manhattan-maravillas-desde-mi-pantalla-t.jpg?filter=w400&filter=ds75',
];

const parisImages = [
  'https://viajeronomada.com/wp-content/uploads/2017/10/quehacerparis.jpg',
  'https://www.metropoliabierta.com/uploads/s1/69/40/11/paris-guerra-airbnb_5_570x340.jpeg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTa9yXT5-PffEDgUwpZYz8M3CuNW7KKnl9WtQ&usqp=CAU',
];

const select = document.querySelector('select');
const container = document.querySelector('div');

//--------------Creo imágenes--------------
// Creo imágenes con sus atributos
function createImage(cityImages) {
  for (const imageSrc of cityImages) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `${imageSrc}`);
    newImage.setAttribute('width', '250');
    newImage.setAttribute('height', '200');
    newImage.classList.add('js_image');
    container.appendChild(newImage);
  }
}

//Selector
function renderSelectedImages() {
  if (select.value === 'madrid') {
    createImage(madridImages);
    console.log('aAqui........MADRID ....');
  } else if (select.value === 'paris') {
    createImage(parisImages);
    console.log('aAqui........PARIS ....');
  } else if (select.value === 'newyork') {
    createImage(newYorkImages);
    console.log('aAqui........NYC ....');
  }
}

//Borrar la página
function removeImages() {
  const allImages = document.querySelectorAll('.js_image');
  console.log(allImages);
  for (const oneImage of allImages) {
    container.removeChild(oneImage);
  }
}

function handleBtn() {
  removeImages();

  renderSelectedImages();
}

select.addEventListener('change', handleBtn);
