'use strict';
// //Vamos a crear nuestro propio autocompletado de formularios. Para ello vamos a crear un formulario con tres campos:
// Nombre
// Apellidos
// Teléfono
// Por otro lado, en JavaScript tendremos un array de 3 objetos con esa estructura. Es decir, un listado 3 objetos, cada uno con nombre apellidos y teléfono. Pediremos a la usuaria que elija uno de esos 3 con un select con el nombre. Al seleccionarlo se rellenará el formulario automáticamente

const select = document.querySelector('.js_select');
const formName = document.querySelector('.js_name');
const surname = document.querySelector('.js_surname');
const phone = document.querySelector('.js_phone');
const users = [
  {
    name: 'Pepa',
    lastName: 'Rodríguez',
    phone: 171782828,
  },
  {
    name: 'Maria',
    lastName: 'Pérez',
    phone: 1828282828,
  },
  {
    name: 'Juan',
    lastName: 'Ruiz',
    phone: 182882822,
  },
];

//Función para crear usuarios
function createUsers() {
  for (let index = 0; index < users.length; index++) {
    //creo elemento option
    const option = document.createElement('option');
    //creo contenido
    const optionContent = document.createTextNode(users[index].name);
    //añado el contenido al elemento
    option.appendChild(optionContent);
    //añado el nombre del objeto users al value del elemento option
    option.value = users[index].name;
    //añado id a cada option para identificarlos al clicarlos
    option.setAttribute('id', `${index}`);
    //añado el elemento option al select
    select.appendChild(option);
  }
}

//Función manejadora del select
function handleSelect(e) {
  e.preventDefault();
  const selectedUser = e.currentTarget.value;
  console.log(selectedUser);
  if (selectedUser === 'Pepa' && users.name === 'Pepa') {
    formName.value = selectedUser;
    surname.value = users.lastName;
    phone.value = users.phone;
  } else if (users.name === 'Maria' && selectedUser === 'Maria') {
    formName.value = selectedUser;
    surname.value = users.lastName;
    phone.value = users.phone;
  } else if (users.name === 'Juan' && selectedUser === 'Juan') {
    formName.value = selectedUser;
    surname.value = users.lastName;
    phone.value = users.phone;
  }
}

createUsers();
select.addEventListener('change', handleSelect);
