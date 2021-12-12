'use strict';

//a) Vamos a crear un nuevo array numbers que contendrá 5 números cualesquiera. Vamos a recorrer el array mediante un bucle para calcular la media de los números (la suma de los números dividido por cuántos hay, es decir, 5). Necesitaremos una variable (acumulador) para ir almacenando la suma de todos los números y después poder hacer la media. Para comprobar si el resultado es correcto, vamos a loguearlo en la consola.

// -------APARTADO A--------
// const numbers = [4, 2, 7, 8, 6];
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }

// const average = sum / numbers.length;

// console.log(average);

//b) Ahora vamos añadir un nuevo número al array y repetir el cálculo de la media. En este caso, para calcular la media habrá que sumar todos y dividir entre el total, que ahora es 6.

// ----------APARTADO A y B---------
// const numbers = [4, 2, 7, 8, 6];

// //añado el número 3 al array
// numbers[5] = 3;
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }
// const average = sum / numbers.length;

// console.log(average);

//c) Vamos a generalizar el código anterior creando una función average. Esta función toma como parámetro un array numbers, calula la media del array (de cualquier longitud) y devuelve la media. Para poder trabajar con arrays de cualquier longitud, deberemos consultar la longitud del array mediante su propiedad length. Para comprobar que la función hace el cálculo correcto, la invocaremos (o ejecutaremos para que no suene tan esotérico) varias veces pasándole como argumento un array con diferente longitud cada vez y mostraremos el resultado en la consola del navegador.

const list1 = [4, 2, 7, 8, 6];
const list2 = [4, 2, 7, 8, 6, 3, 4, 6, 7, 1, 5];
const list3 = [4, 2, 7, 8, 6, 4, 2, 7, 8, 6, 3, 5, 7];

function average(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  const averageResult = sum / numbers.length;

  return averageResult.toFixed(2);
}

console.log(average(list1));
console.log(average(list2));
console.log(average(list3));
