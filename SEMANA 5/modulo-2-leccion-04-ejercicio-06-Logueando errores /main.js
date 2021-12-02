"use strict";

function getEl(selector) {
  const element = document.querySelector(selector);
  return element;
}
const label = getEl('.js_label');

console.log(label.innerHTML);

if (label === null) {
console.error('No existe ningún elemento con clase, id o tag llamado {.js_label}');
} else {
console.log('Sí hay un alemento label');
}
