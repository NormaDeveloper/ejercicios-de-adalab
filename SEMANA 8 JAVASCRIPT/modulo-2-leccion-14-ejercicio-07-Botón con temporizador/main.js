'use strict';

//Crear una página con un botón que transcurridos 10 segundos te pregunte: "¿te has dormido?". Si pulsas en el botón la cuenta volverá a cero y otra vez, si transcurren 10 segundos sin pulsar volverá a preguntar de nuevo "¿te has dormido?"

const play = document.querySelector('.js_play');
const msg = document.querySelector('.msg');

const showMsg = () => {
  msg.innerHTML = '¿te has dormido?';
};

setTimeout(showMsg, 10000);

function handlePlay() {
  msg.innerHTML = '';
  setTimeout(showMsg, 10000);
}

play.addEventListener('click', handlePlay);
