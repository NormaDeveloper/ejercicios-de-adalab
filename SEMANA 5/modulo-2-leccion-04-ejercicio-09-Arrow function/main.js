"use strict";

const mul = (a, b) => a * b;
mul(3, 4);

// --------

const average = (a, b, c, d) => (a + b + c + d) / 4;
average(3, 6, 6, 9);

// --------
const price = (a) => {
  const tax = (a * 21) / 100;
  let noTax = a + tax;
  return console.log(
    "Precio sin IVA: " + a + " , IVA: " + tax + " y Total: " + noTax
  );
};

// --------
const getEl = (selector) => {
  const element = document.querySelector(selector);
  return element;
};

const item = getEl(".js-label");

item === null
  ? console.error(
      "No existe ningún elemento con clase, id o tag llamado {.js-label}"
    )
  : console.log("Sí hay un alemento label");

// --------
