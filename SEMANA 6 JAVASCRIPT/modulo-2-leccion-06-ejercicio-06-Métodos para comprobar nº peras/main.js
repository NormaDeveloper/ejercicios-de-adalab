'use strict';
//Vamos a crear un objeto que sea una cesta de peras y que debe tener varias propiedades:
//Número máximo de peras
// Número mínimo de peras
// Número actual de peras
// Número inicial de peras

// Y varios métodos que hagan:
//Añadir al cesto una pera
//Sacar del cesto una pera
//Restablecer el número de peras al valor inicial.

//Con la ayuda de console.log probaremos a usar varios métodos distintos y comprobar el número actual de peras para ver si funciona correctamente.

//Creo el objeto Cesta de peras
const pearsBasket = {};
pearsBasket.max = 10;
pearsBasket.min = 1;
pearsBasket.current = 4; //se podría poner el valor desde un input
pearsBasket.initial = 0;

//método del objeto para añadir peras
pearsBasket.addOnePear = function () {
  if (this.current < this.max) {
    this.current++;
    return console.log(`Añado una pera y ahora tengo: ${pearsBasket.current}`);
  } else {
    this.current;
    return console.log(
      `No añado peras. Pero ¡cuidado! tienes: ${pearsBasket.current} peras. Más de lo posible. ¡Se te va a romper la cesta!`
    );
  }
};

//método del objeto para quitar peras
pearsBasket.removeOnePear = function () {
  if (this.current > this.initial) {
    this.current--;
    return console.log(`Quito una pera y ahora tengo: ${pearsBasket.current}`);
  } else {
    this.current;
    return console.log(
      `No quitas ninguna pera. Pero tienes ${pearsBasket.current} peras. Menos de lo que deberías. ¡Come más fruta!`
    );
  }
};

//método del objeto para resetear número de peras
pearsBasket.resetToInitialValue = function () {
  this.current = this.initial;
  return console.log(
    `Reseteo valores y tengo valor inicial: ${pearsBasket.current}`
  );
};

console.log(
  `Número actual de peras que tengo en la cesta y que me invento: ${pearsBasket.current}`
);

//Llamo a los métodos
pearsBasket.addOnePear(); //se puede crear botón de sumar
pearsBasket.addOnePear();
pearsBasket.addOnePear();
pearsBasket.removeOnePear(); //se puede crear botón de restar
pearsBasket.resetToInitialValue();
