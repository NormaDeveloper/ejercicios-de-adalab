'use strict';

//------ PENDEIENTE DE REFACTORIZAR

//--------------------------------------------------------------------
// Un formulario de verdad
// Vamos a seguir trabajando sobre el ejercicio 4. El formulario nos ha quedado un poco pobretón, añadamos al menos un campo más para el apellido.
// ¡Pero, ojo! Queremos tener nuestros datos agrupaditos. El reto es guardar y recoger del localStorage un objeto con dos propiedades, nombre y apellido.
//---------------

//------ PENDEIENTE DE REFACTORIZAR PARA QUE CADA FUNCIÓN HAGA UNA ACCIÓN Y HAYA UN LISTENER POR CADA INPUT

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
