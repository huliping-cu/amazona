import express from 'express';
import data from './data.js';

//create express app

//define routes and handle incoming HTTP requests
const app = express();
console.log('Script is running...');

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

app.get('/api/products/slug/:slug', (req, res) => {
  const product = data.products.find((x) => x.slug === req.params.slug);
  if (product) {
    res.send(product);
    console.log(
      'product ' + product.slug + ' is found and send back to client'
    );
  } else {
    res.status(404).send({ message: 'Product not found' });
  }
});

app.get('/api/products/:id', (req, res) => {
  const product = data.products.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});

const port = process.env.PORT || 5050;

app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
