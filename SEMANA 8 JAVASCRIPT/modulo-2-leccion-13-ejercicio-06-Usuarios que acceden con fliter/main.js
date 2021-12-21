'use strict';

//Ya hemos conseguido las contraseñas pertenecientes a cada usuario. ¿Podrías darnos un array con los usuarios que pueden acceder a la aplicación, es decir, los que tienen como PIN un número par?
const users = [
  { name: 'María', isPremium: false, pin: 2389 },
  { name: 'Lucía', isPremium: true, pin: 2384 },
  { name: 'Susana', isPremium: true, pin: 2837 },
  { name: 'Rocío', isPremium: false, pin: 5232 },
  { name: 'Inmaculada', isPremium: false, pin: 8998 },
];

//-------opción 1: con función creada previamente que luego aplico al filter

const evenNumbers = users.filter((userPin) => isEvenNumber(userPin));
console.log(evenNumbers);

function isEvenNumber(eachUser) {
  let evenPinUser;
  if (eachUser.pin % 2 === 0) {
    evenPinUser = eachUser.pin;
  }
  return evenPinUser;
}

//-------opción 2: Aplico el if dentro del filter directamente

// const evenNumbers = users.filter((user) => {
//   let evenPinUser;
//   if (user.pin % 2 === 0) {
//     evenPinUser = user.pin;
//   }
//   return evenPinUser;
// });

// console.log(evenNumbers);
