// 3: Lee un fichero, modifica los datos y escríbelos en otro fichero
// En un ejercicio nuevo crea un fichero input-file.json con lo que tiene el fichero de destino del ejercicio anterior, por ejemplo:
// { "user": "Mari Carmen", "email": "mari@gmail.com", "age": 28 }
// Cuidado con la sintaxis: el JSON tiene que estar bien escrito, por ello, los nombres de las propiedades como user tienen que estar entre comillas dobles.
// Crea un index.js.
// Lee el contenido del fichero input-file.json y guárdalo en una constante.
// El contenido de dicha constante será un texto. Conviértelo a objeto.
// Modifica alguna propiedad del objeto, como por ejemplo el nombre o la edad.
// Guarda el objeto en modo texto en un fichero de destino llamado output-file.json.
const fs = require('fs');

//2- Handle function Read
const handleFile = (err, fileContent) => {
  //Si hay error
  if (err !== null) {
    console.log('Error:', err);
  } else {
    //Si no hay error
    //Convierte a objeto el contenido del fichero './input-file.json'
    const jsonContent = JSON.parse(fileContent);
    //Cambia el valor de las propiedades del fichero './input-file.json'
    jsonContent.age = 10;
    jsonContent.user = 'Ana';
    console.log(jsonContent);

    //4 - Handle function Write
    const handleWrite = (err) => {
      if (err) {
        console.log('Error: ', err);
      } else {
        console.log('The info is saved in DB');
      }
    };

    //3 - Guardo objeto en modo texto en un fichero d destino: output-file.json.
    fs.writeFile(
      './output-file.json',
      JSON.stringify(jsonContent),
      handleWrite
    );
  }
};

//1 - Leer contenido del fichero json
fs.readFile('./input-file.json', 'utf8', handleFile);
