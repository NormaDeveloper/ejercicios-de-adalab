'use strict';

// // Cambiar el color de fondo de la página cuando se haga scroll.

const div = document.querySelector('.js-div');

// window.scrollY es el número de píxeles que se han desplazado actualmente desde el extremo superior de la página

// Propiedad onscroll sobre el objeto window
window.onscroll = function () {
  if (window.scrollY > 250) {
    div.classList.add('blue');
    div.classList.remove('green');
  } else {
    div.classList.remove('blue');
    div.classList.add('green');
  }
};
