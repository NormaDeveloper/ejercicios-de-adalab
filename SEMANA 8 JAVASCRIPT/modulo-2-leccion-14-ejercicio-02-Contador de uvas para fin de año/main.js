'use strict';

//  vamos a crear un contador de uvas. Este contador empezará en 0 y cada segundo incrementará en 1, así hasta 12, en ese momento terminará la cuenta y se dejará de contar más.
//La cuenta se mostrará en la pantalla con números y si lo deseas puedes añadir una imagen de una uva cada vez que pase un segundo.

// PISTA: la función se puede seguir ejecutando con setInterval pero para que se pare en 12 basta con dejar de pintar en el HTML en el momento adecuado

let count = '';
let count2 = 0;

const incrementCount = () => {
  count += '🍇';
  count2++;
  console.log(count2);
  showCount();
};

const showCount = () => {
  if (count2 <= 12) {
    const time = document.querySelector('.time');
    time.innerHTML = count;
  }
};
setInterval(incrementCount, 1000);
