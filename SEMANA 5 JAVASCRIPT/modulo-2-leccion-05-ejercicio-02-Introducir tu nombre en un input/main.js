'use strict';

// Crear una página HTML con un input de tipo texto para introducir tu nombre y un botón. Al pinchar sobre el botón, imprimir en la consola el mensaje 'Hola {nombre}', con el nombre que aparece en el input de texto.

const button = document.querySelector('.js-btn');
const inputName = document.getElementById('userName');

const sayHello = () => {
  return console.log(`Hola ${inputName.value}`);
};

button.addEventListener('click', sayHello);
