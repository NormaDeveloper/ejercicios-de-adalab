// 3. Librería Math avanzada: módulos que usan otros módulos
// Crea un math-add.js que sea un módulo que exporta una función de suma.
// Crea un math-sub.js que sea un módulo que exporta una función de resta.
// Crea un math.js que sea un módulo que importa los dos módulos anteriores y los exporta dentro de un objeto.
// Crea un index.js.
// Importa en index.js el módulo math.js.
// Haz una suma y consolea el resultado.
// Haz una resta y consolea el resultado.

const math = require('./math');

console.log(math.add(2, 4));
console.log(math.sub(10, 1));
