'use strict';
//Crear un array movies con un listado de 3 películas. Será un array de cadenas (strings).
//Añade al array anterior otra película más que le guste. No vale modificar la declaración del array, sino que añadiremos la nueva película en la posición 3 del array
//Para comprobar que funciona, tienes que mostrar el array completo en la consola.
//modificar la película que menos te guste de las que hay en el array

//Encapsular todo el código que hemos creado en una función que no toma parámetros y que llamaremos workWithMovies. Ejecutamos la función para comprobar que se muestran los mensajes en la consola correspondientes.

function workWithMovies() {
  const movies = ['Braveheart', 'Minions', 'Forest Gump'];
  movies[3] = 'Titanic';
  console.log(movies);
  movies[0] = 'Scary Movie';
  console.log(movies);
}

workWithMovies();
