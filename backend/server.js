import express from 'express';
import data from './data.js';

//create express app

//define routes and handle incoming HTTP requests
const app = express();

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

app.get('/api/products/1', (req, res) => {
  res.send('hello');
});

const port = process.env.PORT || 5050;

app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
