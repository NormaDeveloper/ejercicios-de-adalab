'use strict';
//Crea un nuevo objeto en JavaScript adalaber1 que nos sirva para representar (modelar) a una Adalaber. Tenemos estos datos: Susana, 34 años, periodista

//Luego muestra en la web una frase como esta, accediendo a los datos del objeto: 'Mi nombre es Susana, tengo 34 años y soy periodista'
//Ahora hacemos lo mismo (crear el objeto adalaber2 y mostrar una frase descriptiva) con una nueva Adalaber con estos datos: Rocío, 25 años, actriz

const adalaber1 = {};
adalaber1.name = 'Susana';
adalaber1.age = '34 años';
adalaber1.proffesion = 'periodista';

const adalaber2 = {};
adalaber2.name = 'Rocío';
adalaber2.age = '24 años';
adalaber2.proffesion = 'actriz';

console.log(
  `Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} y soy ${adalaber1.proffesion}`
);

console.log(
  `Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} y soy ${adalaber2.proffesion}`
);
