'use strict';

//----------
// Buenas prácticas trabajando con LS
// Partiendo del ejercicio anterior vamos a visitar la página y borraremos el valor del localStorage a través de las DevTools. Con el localStorage limpito, recargaremos la página para simular la primera visita de la usuaria, dónde aun no habría información sobre el nombre guardada (cacheada).
// Si al realizar esta acción nos encontramos algún error tenemos que apañarlo.
// A partir de ahora recuerda que siempre que recojas un dato del localStorage, deberías comprobar que existe antes de empezar a trabajar con el, y realizar una limpieza del localStorage manual para comprobar que todo funciona como esperas, haya o no datos cacheados.

//----> En devTools --> Network --> Aplicación --> almacenamiento local ---> botón de borrar
const text = document.querySelector('.js_p');
const inputField = document.querySelector('.js_searchInput');
const surnameText = document.querySelector('.js_surname');
const surnameInputField = document.querySelector('.js_surnameInput');
//Objeto user
let user = {
  name: '',
  surname: '',
};

function saveUser() {
  user.name = inputField.value;
  user.surname = surnameInputField.value;

  //Paso el objeto  usuario a un string y guardo el objeto en localStorage
  localStorage.setItem('user', JSON.stringify(user));
  //Recupero el objeto guardado y lo convierto a objeto
  const savedUser = JSON.parse(localStorage.getItem('user'));
  //Renderizo los valores guardados en el objeto
  text.innerHTML = savedUser.name;
  surnameText.innerHTML = savedUser.surname;
}

function getUser() {
  //recupero los datos guardados con getItem
  const savedUser = JSON.parse(localStorage.getItem('user'));
  inputField.value = savedUser.name;
  text.innerHTML = savedUser.name;
  surnameInputField.value = savedUser.surname;
  surnameText.innerHTML = savedUser.surname;
}

window.addEventListener('load', getUser); //listener sobre la página
window.addEventListener('keyup', saveUser); //listener sobre la página
