// 4. Lodash: obtener la unión
// En NPM hay un módulo que se llama Lodash que nos ayuda a trabajar fácilmente con grandes cantidades de datos.
// Crea un index.js.
// Importa el módulo Lodash. Para ello, antes tienes que instalarlo dentro del package.json.
// Crea dos constantes para los arrays: [1, 2, 3] y [2, 3, 4].
// Usa el módulo lodash para hallar la unión de estos dos arrays. Para ello necesitas buscar en la documentación de Lodash.
// Si consoleas el resultado que te devuelve la función de Lodash el resultado debe ser [1, 2, 3, 4].

const _ = require('lodash');

const a = [1, 2, 3];
const b = [2, 3, 4];
console.log(_.union(a, b));

console.log(_.difference(a, [1, 2, 4]));
console.log(_.last(b));
