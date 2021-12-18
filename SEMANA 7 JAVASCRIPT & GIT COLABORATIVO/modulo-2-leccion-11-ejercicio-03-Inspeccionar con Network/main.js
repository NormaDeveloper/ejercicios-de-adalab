'use strict';

//---------------1º ENUNCIADO DEL EJERCICIO
//---------------2º EL PROGRAMA QUE SE VA ANALIZAR (El mismo q el ej 2)
//--------------------------------------------------------------------

// En la página de SWAPI o en la que habéis creado en el ejercicio 2 inspecciona las peticiones que has hecho al servidor. Al abrir la pestaña Network aparece vacía así que comienza a hacer peticiones con la pestaña abierta. Con la información que obtienes de esta pestaña averigua:
// dónde está el método de petición --> En Fetch/XHR --> Headers
//----------------------------------------------
// el código de la respuesta (recuerda que 200 es OK) --> Hago click en una solicitud a la izquierda para seleccionarla --->En Fetch/XHR --> Headers --> código de estado
//----------------------------------------------
// en las cabeceras de la petición busca una llamada user-agent, ¿qué puedes decir de su contenido?
//---->¿QUÉ ES UN USER AGENT? El user Agent es la aplicación que se encarga de conectarnos a la web a la que deseamos acceder. Es decir, podríamos definirlo como «una aplicación que accede remotamente a un ordenador o red diferentes (normalmente servidores) a través de Internet.

//¿DÓNDE ESTÁ?--> En Fetch/XHR --> Headers --> Encabezados de solicitud --> User-Agent: Mozilla/5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15A5341f Safari/604.1

//¿qué puedes decir de su contenido?----> Esto contiene un string característico que permite identificar el protocolo de red  que ayuda a descubrir  el tipo de aplicación, sistema operativo, provedor del software o la versión del software de la petición del agente de usuario.

//----------------------------------------------
// la respuesta del servidor en JSON --> En Fetch/XHR --> Respuesta
//----------------------------------------------
// al recargar la página aparecen un montón de peticiones en la pestaña Network, ¿sabrías filtrar solo las que son de AJAX? Pista: antes de fetch las peticiones se hacían con el objeto XMLHttpRequest (XHR) ---> Hago click en el enlace "XHR" al final de la lista para filtrar los resultados a solo solicitudes AJAX

//---------------

const list = document.querySelector('.js_characters');
const searchInput = document.querySelector('.js_searchInput');
const btn = document.querySelector('.js_btn');

//dice que con esta url todas las búsquedas utilizarán coincidencias parciales que no distinguen entre mayúsculas y minúscula

function handleGetCharacter() {
  fetch(`https://swapi.py4e.com/api/people/?search=${searchInput.value}`)
    .then((response) => response.json())
    .then((data) => {
      const characters = data.results;
      list.innerHTML = ''; //limpia lista cada vez que vuelvo a buscar
      console.log(characters);
      for (let i = 0; i < characters.length; i++) {
        list.innerHTML += `<li>Nombre: ${characters[i].name} Género: ${characters[i].gender} </li>`;
      }
    });
}
btn.addEventListener('click', handleGetCharacter);
