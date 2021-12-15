'use strict';
//Vamos a crear una nueva función getReversed100Numbers que llama a la función del ejercicio anterior para obtener 100 números y los cambia de orden. Para comprobar que los tenemos todos, vamos a ejecutar la función y a loguearlos (con console.log) uno a uno en la consola en orden.

//------Opción 1 para hacerlo con una función nueva ---------
const arr = [];

function get100Numbers() {
  for (let i = 1; i <= 100; i++) {
    arr.push(i);
  }
}
get100Numbers();
console.log(arr);

function getReversed100Numbers() {
  console.log(arr.reverse());
}

console.log(getReversed100Numbers());

//-----------opción 2 para hacerlo (sin función nueva)-----
// const arr = [];

// function get100Numbers() {
//   for (let i = 1; i <= 100; i++) {
//     arr.push(i);
//   }
// }
// get100Numbers();
// console.log(arr);

// arr.reverse();

// console.log(arr);
