'use strict';

// Tenemos que quitar ese mogollón de listeners en los lis, reemplazarlos por uno solo en la etiqueta madre (ul) y trabajar con event.target.

const list = document.querySelector('.teachers');

const changeTeacher = (e) => {
  e.target.classList.toggle('teacher--selected');

  const favorite = e.target.querySelector('.favorite');
  if (favorite.innerHTML === 'Quitar') {
    favorite.innerHTML = 'Añadir';
  } else if (favorite.innerHTML === 'Añadir') {
    favorite.innerHTML = 'Quitar';
  }
};

list.addEventListener('click', changeTeacher);
