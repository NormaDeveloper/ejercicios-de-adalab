'use strict';

// Ahora vamos a explorar un nuevo API: el API de usuarios de GitHub. La URL de este API es https://api.github.com/users/{username}, donde {username} es el nombre del usuario en GitHub. Por ejemplo, aquí tenéis la URL para obtener información del usuario de Isra https://api.github.com/users/gootyfer. Si ponéis esta URL en una nueva pestaña del navegador podréis observar qué datos nos devuelve el API.
// Vamos a crear una página en la que haya un input de texto y un botón de buscar. El usuario escribirá en el input un nombre de usuario de GitHub. Prepararemos una función que se ejecute cuando se pulse el botón buscar y que contenga una petición al API para obtener información de ese usuario y así mostrarla en nuestra página:
// nombre
// número de repositorios
// avatar (imagen)

const textInput = document.querySelector('.js_input');
const btn = document.querySelector('.js_btn');
const userName = document.querySelector('.js_userName');
const avatarImage = document.querySelector('.js_avatar');
const repositories = document.querySelector('.js_repositories');

function handleGetGithubUser() {
  //añado el parámatero del input a la url
  let url = 'https://api.github.com/users/' + textInput.value;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      userName.innerHTML = data.login;
      avatarImage.src = data.avatar_url;
      repositories.innerHTML = data.public_repos;
    });
}

btn.addEventListener('click', handleGetGithubUser);
