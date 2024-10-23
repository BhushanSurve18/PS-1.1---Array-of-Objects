const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.json());

//Exercise 1

const students = [
  { name: 'Alice', age: 19, grade: 'A' },
  { name: 'Bob', age: 17, grade: 'B' },
  { name: 'Charlie', age: 20, grade: 'C' },
  { name: 'David', age: 18, grade: 'B' },
];

//Exercise 2

const products = [
  { name: 'Laptop', price: 1000, category: 'Electronics' },
  { name: 'Phone', price: 500, category: 'Electronics' },
  { name: 'Book', price: 20, category: 'Books' },
  { name: 'Pen', price: 2, category: 'Stationery' },
];

function sortProductsByPriceAscending(product1, product2) {
  return product1.price - product2.price;
}

app.get('/products/sort-by-price-ascending', (req, res) => {
  const productcopy = products.slice();
  productcopy.sort(sortProductsByPriceAscending);
  res.json(productcopy);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
