'use strict';

// Hemos preparado un HTML con tres tarjetas. Al pinchar en un elemento del listado tenemos que:
//-Añadir la clase .teacher--selected si no la tiene, o quitarla si la tiene.
//-Modificar el texto del span .favorite sustituyéndolo por 'Quitar' si en ese momento contiene 'Añadir', o por 'Añadir' si contiene 'Quitar'.
//
const li1 = document.querySelector('.teacher--isra');
const li2 = document.querySelector('.teacher--tuerto');
const li3 = document.querySelector('.teacher--nasi');

const changeTeacher = (e) => {
  e.currentTarget.classList.toggle('teacher--selected');

  const favorite = e.currentTarget.querySelector('.favorite');
  if (favorite.innerHTML === 'Quitar') {
    favorite.innerHTML = 'Añadir';
  } else if (favorite.innerHTML === 'Añadir') {
    favorite.innerHTML = 'Quitar';
  }
};

li1.addEventListener('click', changeTeacher);
li2.addEventListener('click', changeTeacher);
li3.addEventListener('click', changeTeacher);
