'use strict';
//Partiendo del objeto adalaber1 del ejercicio anterior, añade un método (una función) run que muestre en la consola (lo llamamos loguear) la frase 'Estoy corriendo'.
//Ahora, vamos a añadir un nuevo método runAMarathon que toma un parámetro distance que es un número. Al ejecutarlo, debe mostrarse en la consola el texto 'Estoy corriendo un maratón de 50 kilómetros' siendo 50 el valor del argumento distance que le hemos pasado.

const adalaber1 = {};
adalaber1.name = 'Susana';
adalaber1.age = '34 años';
adalaber1.proffesion = 'periodista';
adalaber1.run = () => console.log('Estoy corriendo');
adalaber1.runMarathon = (distance) =>
  console.log(`Estoy corriendo un maratón de ${distance} kilómetros`);

adalaber1.run();
adalaber1.runMarathon(80);
