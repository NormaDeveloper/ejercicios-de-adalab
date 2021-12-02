"use strict";

function price(a) {
  const tax = a*21/100 ;
  let noTax =  a + tax;
  

  return console.log("Precio sin IVA: " + a + " , IVA: " + tax + " y Total: " + noTax);
}

price(10);