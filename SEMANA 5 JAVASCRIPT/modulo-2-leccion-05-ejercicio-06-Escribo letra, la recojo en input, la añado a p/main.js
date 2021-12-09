'use strict';

// Crear una página con un input de texto y un párrafo vacío. Cada vez que la usuaria escriba una letra tenemos que recoger el valor del input al que le pusimos el listener y escribirlo en el párrafo. El objetivo es hacerlo utilizando event.currentTarget.

const p = document.querySelector('.js-p');
const input = document.querySelector('.js-input');

const pressKey = (e) => {
  p.innerHTML = e.currentTarget.value;
};

input.addEventListener('keyup', pressKey);
