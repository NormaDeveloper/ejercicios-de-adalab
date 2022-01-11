'use strict';

// Partiendo del ejemplo anterior, vamos a realizar un temporizador que empiece en 0 y cada 2 segundos se incremente.

let count = 0;

const incrementCount = () => {
  count++;
  showCount();
};

const showCount = () => {
  const time = document.querySelector('.time');
  time.innerHTML = count;
};

setInterval(incrementCount, 2000);
