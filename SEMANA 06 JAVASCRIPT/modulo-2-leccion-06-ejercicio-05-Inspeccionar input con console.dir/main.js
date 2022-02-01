'use strict';

// Vamos a preparar un input de tipo texto, a recogerlo desde JavaScript y a imprimirlo en la consola con console.dir para investigarlo y comentar con la compañera estas propiedades:

const inputName = document.getElementById('userName');

const write = () => {
  console.dir(inputName.value);
  console.dir(inputName.nodeName);
  console.dir(inputName.required);
};

inputName.addEventListener('input', write);
