// pintar tres elementos dentro de una lista. Cada uno de ellos contendrá una imagen. Las imágenes y textos los obtendremos a partir de los siguientes datos:

const firstDogImage = 'https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg';
const firstDogName = 'Dina';

const secondDogImage = 'https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg';
const secondDogName = 'Luna';

const thirdDogImage = 'https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg';
const thirdDogName = 'Lana';

// En este caso para añadir cada uno de los elementos utilizaremos la propiedad innerHTML y la interpolación de cadenas.



const li1 = document.querySelector(".js-li1");
li1.innerHTML = ` ${firstDogName} ` +  firstDogImage;


// const listElement = document.querySelector('.list');

// const content = '<li><a href="#">Home</a></li><li><a href="#">Contact</a></li>';

// listElement.innerHTML = content;




// const img1 = document.querySelector(".js-img1");

// const img1 = document.querySelector(".js-img1");
// img1.innerHTML = `${firstDogImage}`
//  img1. = `${firstDogImage}`;


const li2 = document.querySelector(".js-li2");
li2.innerHTML = `${secondDogName}  ${secondDogImage} `;

const li3 = document.querySelector(".js-li3");
li3.innerHTML = `${thirdDogName}  ${thirdDogImage} `;




