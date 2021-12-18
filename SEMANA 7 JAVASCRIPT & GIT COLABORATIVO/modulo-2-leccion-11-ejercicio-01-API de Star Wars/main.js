'use strict';
// Vamos a explorar un API abierto de información sobre el mundo Star Wars. En esta página tenemos la documentación completa del API y un formulario que nos permite hacer peticiones a la URL que indiquemos. Identifica la siguiente información sobre SWAPI:
//----------------------
//----------------------PREGUNTAS Y RESPUESTAS-------------
// la URL base del API ------> https://swapi.py4e.com/api/
//----------------------
// si necesita autenticación ----> No. Swapi is a completely open API. No authentication is required to query and get data.
//----------------------
// método HTTP que deben usar las peticiones a este API ----> GET, porque es el que se usa por defecto
//----------------------
// URL para acceder a la info del personaje "Luke Skywalker" ---->  https://swapi.py4e.com/api/people/1/

//----------------------
// URL para acceder a la info de la película "A New Hope" ----> https://swapi.py4e.com/api/films/1/
//----------------------
// a qué otros recursos puedo acceder desde el API además de personajes y pelis---> films, "people","planets", "species", "starships", "vehicles"
//----------------------
// URL para acceder al listado de personajes, ¿está paginada?----> SÍ "next": "https://swapi.py4e.com/api/people/?page=2&format=json" --> ?page=2
//----------------------
// cómo puedo buscar personajes mediante la URL ---> https://swapi.py4e.com/api/people/?search=r2
//----------------------
// cómo puedo hacer que el JSON de una petición se me devuelva traducido a Wookiee ---> Añadiendo ?format=wookiee  a las urls --> https://swapi.py4e.com/api/people/1/?format=wookiee
