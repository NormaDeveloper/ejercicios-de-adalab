'use strict';
//Crear una página HTML con una lista ul vacía. Vamos a partir de un array con 3 elementos const numbers = [1, 2, 3]. Vamos a añadir a la lista tres elementos li, que corresponden al contenido del array. Usaremos los métodos avanzados para manipular el DOM, no innerHTML.

const numbers = [1, 2, 3];
const list = document.querySelector('.js_list');

for (const item of numbers) {
  //Creo elemento
  const newItem = document.createElement('li');
  //Creo contenido
  const newContent = document.createTextNode(item);
  //le añado el contenido al elemento y todo eso se lo añado a la lista
  list.appendChild(newItem.appendChild(newContent));
}
