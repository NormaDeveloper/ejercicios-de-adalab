'use strict';

// Tenemos que preparar un botón con un listener para loguear el objeto event en la consola. Investigar si la clave type que encontramos en él es una propiedad o un método.

const btn = document.querySelector('.js-btn');

const changeButton = (e) => {
  return console.log(e);
};

btn.addEventListener('click', changeButton);
