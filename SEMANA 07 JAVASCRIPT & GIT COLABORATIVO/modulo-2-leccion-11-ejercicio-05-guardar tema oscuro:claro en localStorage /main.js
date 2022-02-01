'use strict';

//--------------------------------------------------------------------
// Mi tema preferido
// Vamos a preparar una página sencilla, con un título, un par de párrafos y un selector de tema. Para hacer el selector:
// Añadiremos dos radio buttons para poder elegir entre claro y oscuro.
// Prepararemos dos clases de css: una pondrá el fondo claro y el texto oscuro, y la otra pondrá el fondo oscuro y el texto claro.
// Aplicaremos a nuestra página una clase u otra según la selección de la usuaria, apoyándonos en el value del input seleccionado.
// Paralelamente cada vez que la usuaria elija un tema, guardaremos esta información en localStorage.
// Al cargar la página buscaremos en localStorage el tema seleccionado en la última visita y lo aplicaremos sin que la usuaria tenga que realizar ninguna acción.
//---------------

const darkBtn = document.getElementById('dark');
const lightBtn = document.getElementById('light');
const selectThemeSection = document.querySelector('.js_selectTheme');
const main = document.querySelector('.js_main');

function handleRadioBtn() {
  if (lightBtn.checked) {
    main.classList.add('light');
    main.classList.remove('dark');
  } else {
    main.classList.add('dark');
    main.classList.remove('light');
  }
  saveTheme();
}

function saveTheme() {
  if (lightBtn.checked) {
    localStorage.setItem('theme', 'light');
  } else {
    localStorage.setItem('theme', 'dark');
  }
}

function getSavedTheme() {
  const savedTheme = localStorage.getItem('theme');
  main.classList.add(savedTheme);
}

selectThemeSection.addEventListener('change', handleRadioBtn);
window.addEventListener('load', getSavedTheme);
