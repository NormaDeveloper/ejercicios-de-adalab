"use strict";
function getEl(selector) {
  const element = document.querySelector(selector);
  return element;
}
const label = getEl('.js_p');
const parseElement = parseInt(label.innerHTML);
console.log(parseElement);

if (label === null) {
console.error('No existe ningún elemento con clase, id o tag llamado {.js-label}');
} else {
console.log('Sí hay un alemento label');
}



function isOddOrEven(a) {
if (a % 2 === 0){
  true;
  console.log(a + " is an even number");
}
else {
  false;
  console.log(a + " is an odd number");
}
}

isOddOrEven(parseElement);