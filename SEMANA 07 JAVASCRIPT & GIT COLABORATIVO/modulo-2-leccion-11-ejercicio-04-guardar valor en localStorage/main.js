'use strict';

//--------------------------------------------------------------------
// Conociendo LS
// Escribir datos en formularios es muy tedioso para los usuarios. ¡Vamos a cachearlos para facilitarles la vida!
// Prepara un input de texto para el nombre y un párrafo vacío
// Cada vez que la usuaria escriba su nombre (keyUp) tenemos que pintar el valor en el párrafo y guardarlo en localStorage.
// Al recargar la página tenemos que consultar localStorage y, si hay algún nombre guardado, rellenar el input y el párrafo.
//---------------

const text = document.querySelector('.js_p');
const inputField = document.querySelector('.js_searchInput');

function handleRenderName() {
  //Guardo en localStorage lo que escribe usuario

  localStorage.setItem('name', inputField.value);
  
  //recupero lo guardado en localStorage y lo imprimo
  text.innerHTML = localStorage.getItem('name');
}

function handleGetName() {
  //recupero los datos guardados con getItem
  inputField.value = localStorage.getItem('name');
  text.innerHTML = localStorage.getItem('name');
}
//Añado un listener a la página entera
//Indico que el evento sea load (cuando se carga)
window.addEventListener('load', handleGetName);
inputField.addEventListener('keyup', handleRenderName);
