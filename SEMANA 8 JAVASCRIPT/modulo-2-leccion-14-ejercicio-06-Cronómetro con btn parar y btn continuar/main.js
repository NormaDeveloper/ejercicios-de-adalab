'use strict';

//Crear un cronómetro que vaya aumentando en segundos y cuando se pulse el botón de parar deje de aumentar. Cuando pulsemos el de continuar, vuelva a empezar de nuevo.

let count = 0;
const pause = document.querySelector('.js_pause');
const play = document.querySelector('.js_play');
const time = document.querySelector('.time');
let idInterval;

const incrementCountAndShow = () => {
  count++;
  time.innerHTML = count;
};

function handlePause() {
  clearInterval(idInterval);
}

function handlePlay() {
  idInterval = setInterval(incrementCountAndShow, 1000);
}

idInterval = setInterval(incrementCountAndShow, 1000);
pause.addEventListener('click', handlePause);
play.addEventListener('click', handlePlay);
