"use strict";

function isOddOrEven(a) {
  if (a % 2 === 0){
    true;
    console.log(a + " is an even number");
  }
  else {
    false;
    console.log(a + " is an odd number");
  }
}

isOddOrEven(5);


// misma función pero con ternario

function isOddOrEven(a) {
  a % 2 === 0 ? console.log(a + " is an even number") :  console.log(a + " is an odd number"); 
}

isOddOrEven(5);
