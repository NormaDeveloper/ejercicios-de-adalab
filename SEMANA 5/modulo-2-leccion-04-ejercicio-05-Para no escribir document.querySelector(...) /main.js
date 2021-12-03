"use strict";
function getEl(selector) {
  const element = document.querySelector(selector);
  return element;
}
const label = getEl('.js-label');
const parseElement = parseInt(label.innerHTML);
console.log(parseElement);

if (label === null) {
console.error('No existe ningún elemento con clase, id o tag llamado {.js-label}');
} else {
console.log('Sí hay un alemento label');
}
