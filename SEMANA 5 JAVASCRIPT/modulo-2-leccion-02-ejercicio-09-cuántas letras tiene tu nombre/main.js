// vamos a hacer un programa que pinte en HTML lo siguiente: El nombre de mi compañera es Leticia Fernández Sánchez, y está compuesto por 23 caracteres, remplazando Leticia Fernández Sánchez por el nombre de nuestra compañera y 23 por la longitud de la cadena con su nombre.

const mateName = "Ana";
const title = document.querySelector(".main__title");
title.innerHTML = `El nombre de mi compañera es ${mateName}, y está compuesto por ${mateName.length} caracteres`;
