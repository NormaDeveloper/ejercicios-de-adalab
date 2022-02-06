const express = require('express');
const cors = require('cors');
const Database = require('better-sqlite3');

// create server
const app = express();

// set express middleware
app.use(express.json());
app.use(cors());

// init express aplication
const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// init and config data base
const dbBooks = new Database('./src/databaseBooks.db', {
  // this line log in console all data base queries
  verbose: console.log,
});

// api endpoints
app.get('/all-books/prices', (req, res) => {
  const query = dbBooks.prepare(`SELECT name FROM books ORDER BY price`);
  const books = query.all();
  res.json(books);
});

app.get('/all-books-with-price-great-than-20', (req, res) => {
  const query = dbBooks.prepare(`SELECT name FROM books WHERE price > ?`);
  const books = query.all(20);
  res.json(books);
});

app.get('/all-books-in-stock', (req, res) => {
  const query = dbBooks.prepare(`SELECT name FROM books WHERE stock = ?`);
  const books = query.all(0);
  res.json(books);
});

app.get('/all-books-in-stock-paper', (req, res) => {
  const query = dbBooks.prepare(
    `SELECT name FROM books WHERE stock>0 AND type='paper'`
  );
  const books = query.all();
  res.json(books);
});

app.get('/book-id1', (req, res) => {
  const query = dbBooks.prepare(`SELECT * FROM books WHERE id = ?`);
  const book = query.get(1);
  res.json(book);
});

app.get('/books-three-first-sort-by-name', (req, res) => {
  const query = dbBooks.prepare(
    `SELECT name FROM books ORDER BY name LIMIT 3 OFFSET 0`
  );
  const books = query.all();
  res.json(books);
});

app.get('/books-three-next-books-sort-by-name', (req, res) => {
  const query = dbBooks.prepare(
    `SELECT name FROM books ORDER BY name LIMIT 3 OFFSET 3`
  );
  const books = query.all();
  res.json(books);
});
