"use strict";
let borderBoxWidth = 0;
let contentBoxWidth = 0;

const calculator = (borderBox, boxWidth, padding, borderSize) => {
  if (borderBox === true) {
    borderBoxWidth = boxWidth - padding - borderSize;
    console.log(
      `El ancho del contenido es: ${borderBoxWidth} px y el ancho total de la caja es: ${boxWidth} px.`
    );
  } else {
    contentBoxWidth = boxWidth + padding + borderSize;
    console.log(
      `El ancho del contenido es: ${boxWidth} px y el ancho total de la caja es: ${contentBoxWidth} px.`
    );
  }
  return;
};

calculator(true, 100, 20, 3);
