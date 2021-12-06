"use strict";

// modificamos una variable de ámbito global
let secretLetter = "y";
function mySecretLetter() {
  secretLetter = "x";
  return secretLetter;
}
console.log(mySecretLetter()); // devuelve "x"
console.log(secretLetter); // devuelve "x"

// Si se invierte el orden de los console.log entonces: 
// console.log(secretLetter); // devuelve "x"
// console.log(mySecretLetter()) // devuelve "y"
