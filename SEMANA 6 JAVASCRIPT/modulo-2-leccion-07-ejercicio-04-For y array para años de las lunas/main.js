'use strict';

//Cada 3 años se produce una luna llena completamente iluminada por el Sol durante unos minutos. Esta luna es conocida como la “Luna del cazador”. En el año 2017 se pudo ver esta luna el 5 de octubre y mucha gente se la perdió. Para que no nos pase los siguientes años vamos a crear un código que muestre en consola cuándo serán las 15 próximas lunas.

let year = 2017;
let yearsWithFullMoon = [];

for (let i = 0; i < 15; i++) {
  year += 3;
  yearsWithFullMoon[i] = year;
}

console.log(`Las próximas lunas serán en los años: ${yearsWithFullMoon}`);
