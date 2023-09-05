import express from 'express';
import data from './data.js';

//create express app

//define routes and handle incoming HTTP requests
const app = express();

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

const port = process.env.PORT || 5050;

app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
