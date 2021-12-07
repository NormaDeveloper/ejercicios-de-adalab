'use strict';

// Crear una página HTML con un input de tipo texto para introducir tu nombre y un botón. Al pinchar sobre el botón, imprimir en la consola el mensaje 'Hola {nombre}', con el nombre que aparece en el input de texto.

const text = document.querySelector('.js-p');

const duplicate = () => {
  return (text.innerHTML += text.innerHTML);
};

text.addEventListener('mouseover', duplicate);
