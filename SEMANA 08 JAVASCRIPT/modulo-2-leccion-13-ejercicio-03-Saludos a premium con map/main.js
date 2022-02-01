'use strict';

// Seguimos desarrollando nuestra aplicación web que romperá el mercado. Pero antes, queremos agradecer a nuestros usuarios premium (de pago) su ayuda en el saludo de la aplicación. Por tanto, a los usuarios premium queremos saludarles así 'Bienvenida Yolanda. Gracias por confiar en nosotros.', y mantener el saludo simple 'Bienvenida Yolanda' para el resto de usuarios.
// Vamos a partir de este array con el listado de usuarios que incluye tanto su nombre como si son usuarios premium o no.
// Tenemos que crear un nuevo array con los saludos. ¿Podremos hacerlo con map?
const users = [
  { name: 'María', isPremium: false },
  { name: 'Lucía', isPremium: true },
  { name: 'Susana', isPremium: true },
  { name: 'Rocío', isPremium: false },
  { name: 'Inmaculada', isPremium: false },
];

//------- 2 OPCIONES PARA HACERLO---------
//----------------------------------------
//-------- Opción 1 con función creada previamente--------
//2- Aplico el map al array users con la función que he creado previamente
const premiumWelcome = users.map((user) => createWelcome(user));
console.log(premiumWelcome);

//1- Función para generar saludo en función de si el usuario es o no premium
function createWelcome(eachUser) {
  let newWelcome;
  if (eachUser.isPremium) {
    newWelcome = `Bienvenida ${eachUser.name}. Gracias por confiar en nosotros.`;
  } else {
    newWelcome = `Bienvenida ${eachUser.name}.`;
  }

  return newWelcome;
}

//----------------------------------------
//-------- Opción 2 si función y en el map se hace directamente el if--------

// const premiumWelcome = users.map((user) => {
//   let newWelcome;
//   if (user.isPremium) {
//     newWelcome = `Bienvenida ${user.name}. Gracias por confiar en nosotros.`;
//   } else {
//     newWelcome = `Bienvenida ${user.name}.`;
//   }
//   return newWelcome;
// });

// console.log(premiumWelcome);
