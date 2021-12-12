'use strict';

// // Tenemos que crear una página vacía. Al pulsar la tecla 'r' su color de fondo cambia a rojo y al pulsar la 'm' a morado. Vamos a escuchar un evento de teclado directamente sobre el elemento document.
const sheet = document.querySelector('.js-p');

const pressKey = (e) => {
  if (e.key === 'r') {
    sheet.classList.remove('purple');
    sheet.classList.add('red');
  } else if (e.key === 'm') {
    sheet.classList.add('purple');
    sheet.classList.remove('red');
  } else {
    sheet.classList.remove('purple');
    sheet.classList.remove('red');
  }
  sheet.innerHTML = e.key;
  console.log(e);
};

document.addEventListener('keyup', pressKey);
