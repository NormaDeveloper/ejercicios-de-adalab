// 2: Escribe en un fichero
// Crea un index.js.
// Crea un objeto con 3 propiedades, por ejemplo:
// const myObject = {
//   user: "Mari Carmen",
//   email: "mari@gmail.com",
//   age: 28,
// };
// Consolea el objeto en modo objeto.
// Guarda el objeto tal cual en el fichero de destino, por ejemplo en output.txt:
// La terminal te muestra un error; ¿sabrías decir por qué?
// Convierte el objeto a texto y consoléalo.
// Pista: ¿Te acuerdas de qué herramienta tenemos para pasar un objeto a texto?
// Guarda el objeto en modo texto en el fichero de destino y verás que sí funciona.
// Abre el fichero de destino y mira cómo se ha guardado la información.

// 1- import fs
const fs = require('fs');

const myObject = {
  user: 'Mari Carmen',
  email: 'mari@gmail.com',
  age: 28,
};

// 3 - Handle function
const handleWrite = (err) => {
  if (err) {
    console.log('error:', err);
  } else {
    console.log('OK! Saved!');
  }
};

//2 - fs.writeFile
// param a - fileName I'll create
// param b - Content of that file i'll create
//param c - handle fun
fs.writeFile('./output.txt', JSON.stringify(myObject), handleWrite);
