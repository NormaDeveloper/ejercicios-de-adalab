// Importamos los dos módulos de NPM necesarios para trabajar
const express = require('express');
const cors = require('cors');

// Creamos el servidor
const server = express();

// Configuramos el servidor
server.use(cors());
server.use(express.json());

// Arrancamos el servidor en el puerto 3000
const serverPort = 3000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// Escribimos los endpoints que queramos
server.get('/response-a', (req, res) => {
  const response = { result: 'ok' };
  res.json(response);
});

server.get('/response-b', (req, res) => {
  res.send('<h1>Esto es página de prueba</h1>');
});

server.get('/response-c', (req, res) => {
  const randomN = Math.floor(Math.random() * 11);
  return randomN % 2 === 0
    ? res.redirect('https://www.youtube.com/')
    : res.redirect('https://www.instagram.com/');
});

server.get('/response-d', (req, res) => {
  const user = parseInt(req.query.user);
  const response = { result: 'ok' };
  const errorResponse = { result: 'error: invalid query param' };
  user === 1 || user === 2
    ? res.status(200).json(response)
    : res.status(404).json(errorResponse);
});
