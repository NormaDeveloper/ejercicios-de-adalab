'use strict';

//Vamos a jugar un poco con el código del ejemplo anterior. Mirando la documentación de 'rand.fun', vamos a pedir un número entero (integer).
//Podemos jugar añadiendo parámetros a la URL del tipo clave=valor, siempre después de character ? y separados por &, por ejemplo si quisieras pedir un string con determinada longitud, la url quedaría así https://api.rand.fun/text/password?length=20

fetch('https://api.rand.fun/number/integer')
  .then(function (response) {
    console.log({ response });
    return response.json();
  })
  .then(function (data) {
    document.body.innerHTML = data.result;
    console.log({ data });
  });
