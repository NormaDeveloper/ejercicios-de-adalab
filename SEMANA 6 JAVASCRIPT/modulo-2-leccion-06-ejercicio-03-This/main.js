'use strict';
//Partiendo del objeto adalaber1 del ejercicio anterior, añade un método (una función) showBio que muestra en la consola la frase 'Mi nombre es María, tengo 34 años y soy periodista', usando el nombre, edad y estudios que están almacenados en el objeto. Y hacemos lo mismo para adalaber2 definida en el ejercicio 1.

const adalaber1 = {};
adalaber1.name = 'Susana';
adalaber1.age = '34 años';
adalaber1.proffesion = 'periodista';
adalaber1.run = () => console.log('Estoy corriendo');
adalaber1.runMarathon = (distance) =>
  console.log(`Estoy corriendo un maratón de ${distance} kilómetros`);

//Si se usa this entonces NO uso arrow function, sino una función anónima
adalaber1.showBio = function () {
  return console.log(
    `Mi nombre es ${this.name}, tengo ${this.age} y soy ${this.proffesion}`
  );
};

const adalaber2 = {};
adalaber2.name = 'Rocío';
adalaber2.age = '24 años';
adalaber2.proffesion = 'actriz';

//Si se usa this entonces NO uso arrow function, sino una función anónima
adalaber2.showBio = function () {
  return console.log(
    `Mi nombre es ${this.name}, tengo ${this.age} y soy ${this.proffesion}`
  );
};

adalaber1.run();
adalaber1.runMarathon(80);
adalaber1.showBio();
adalaber2.showBio();
