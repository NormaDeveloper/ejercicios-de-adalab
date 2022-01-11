'use strict';

//  Vamos a modificar nuestra solución del ejercicio 2 para que, en lugar de seguir ejecutando la función indefinidamente, detengamos su ejecución con clearInterval.

let count = 8;
let idInterval;
const time = document.querySelector('.time');

const incrementCountAndRender = () => {
  console.log(count);
  if (count < 12) {
    count++;
    time.innerHTML = count;
  } else if (count === 12) {
    time.innerHTML = 'FELIZ AÑO';
    clearInterval(idInterval);
  }
};

idInterval = setInterval(incrementCountAndRender, 1000);
