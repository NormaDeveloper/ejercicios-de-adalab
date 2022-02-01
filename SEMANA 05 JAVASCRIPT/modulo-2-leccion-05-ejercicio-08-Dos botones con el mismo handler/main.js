'use strict';

// Partiendo del ejercicio anterior vamos a añadir un nuevo botón a nuestra página. Tenemos que ponerle un listener y a reutilizar el handler que ya teníamos. Es decir, los dos botones deben tener el mismo handler. Cuando la usuaria pulse un botón el cambio de clase sucederá solamente sobre el botón pulsado.

const btn = document.querySelector('.js-btn');
const btn2 = document.querySelector('.js-btn2');

const changeButton = (e) => {
  e.currentTarget.classList.toggle('red');
};

btn.addEventListener('click', changeButton);
btn2.addEventListener('click', changeButton);
