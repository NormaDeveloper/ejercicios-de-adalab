// 2. Mi propia librería Math
// Crea un math.js que sea un módulo.
// Exporta dos funciones, una para sumar y otra para restar.
// Estas dos funciones deben recibir dos números como parámetros.
// Estas dos funciones deben retornar el resultado de la operación.
// Crea un index.js. e importa el módulo math.js.
// Usa el módulo importado para hacer una suma y consolea el resultado.
// Usa el módulo importado para hacer una resta y consolea el resultado.

const math = require('./math');

console.log(math.add(2, 4));
console.log(math.substract(10, 1));
