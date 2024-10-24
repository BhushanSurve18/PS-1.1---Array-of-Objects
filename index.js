const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const { resolve } = require('path');
const { callbackify } = require('util');

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

function studentDetail(students){
  let name ="";
  for(i=0; i< students.length; i++){
    if(students[i].age > 18){
     name = name + students[i].name + ", "
    }
  }
  return name
}

app.get("/student", (req,res)=>{
  let result = studentDetail(students);
  console.log([result]);
})

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


// Exercise 3

const employees = [
  { name: 'John', department: 'IT', salary: 60000 },
  { name: 'Jane', department: 'HR', salary: 50000 },
  { name: 'Doe', department: 'Finance', salary: 70000 },
  { name: 'Smith', department: 'HR', salary: 55000 }
];

function filterByDepartment(employee, department){
  return employee.department !== department;
}

app.get("/emloyees/department/:department", (req, res)=>{
  let department = req.params.department;
  let result = employees.filter(employee=>filterByDepartment(employee, department));
  console.log(result);
});

// Exercise 4

const books = [
  { title: 'Book One', author: 'Author A', year: 2005 },
  { title: 'Book Two', author: 'Author B', year: 1995 },
  { title: 'Book Three', author: 'Author C', year: 2010 },
  { title: 'Book Four', author: 'Author D', year: 1980 }
];

function findBookByYear(ele, year){
  return ele.year < year;
}

app.get("/book/year/:year", (req,res)=>{
 let year = parseInt(req.params.year);
 let result = books.find(ele =>findBookByYear(ele, year));
 console.log(result);
});

// Exercise 5

const cars = [
  { make: 'Toyota', model: 'Corolla', mileage: 50000 },
  { make: 'Honda', model: 'Civic', mileage: 30000 },
  { make: 'Ford', model: 'Mustang', mileage: 40000 },
  { make: 'Tesla', model: 'Model 3', mileage: 10000 }
];

function updateCarMileage(make, mileage){
  return "The updated mileage for " + make + " is "  + mileage;
}

app.get("/car", (req,res)=>{
  let mileage =parseInt(req.query.mileage);
  let make = req.query.make;

  let result = updateCarMileage(make, mileage);
  console.log(result);
});


//Exercise 6

const sales = [
  { item: 'Laptop', quantity: 2, price: 1000 },
  { item: 'Phone', quantity: 5, price: 500 },
  { item: 'Book', quantity: 10, price: 20 },
  { item: 'Pen', quantity: 100, price: 2 }
];

function totalrevenue(sales){
  let totalrevenue = 0;
  for(let i=0; i<sales.length; i++){
    let quantity = sales[i].quantity;
    let price = sales[i].price;
    calculaterevenue =quantity * price
    totalrevenue =totalrevenue + calculaterevenue
  }
return totalrevenue
}

app.get("/sales", (req,res)=>{
  let result = totalrevenue(sales);
  console.log({totalrevenue : result.toString()});
})


//Exercise 7

const movies = [
  { title: 'Movie One', director: 'Director A', rating: 8 },
  { title: 'Movie Two', director: 'Director B', rating: 7 },
  { title: 'Movie Three', director: 'Director A', rating: 9 },
  { title: 'Movie Four', director: 'Director C', rating: 6 }
];

function moviesByDirector(movies){
  for(let i=0; i < movies.length; i++){
    if (movies[i].director === "Director A"){
     console.log("Title: " + movies[i].title);
     console.log("Director: "+ movies[i].director);
    }
  }
  }

app.get("/movies", (req,res)=>{
   let result = moviesByDirector(movies)
   console.log(result)
  })


  const  cricketers =[
    {Name: "Virat",  Eden_Gardens: 77, Wankhade_Stadium: 88, Feroz_Shah_Kotla: 45, Chepauk: 74 },
    {Name: "Rohit",  Eden_Gardens: 64, Wankhade_Stadium: 41, Feroz_Shah_Kotla: 68, Chepauk: 34 },
    {Name: "Shikhar",  Eden_Gardens: 54, Wankhade_Stadium: 38, Feroz_Shah_Kotla: 72, Chepauk: 44 },
    {Name: "Rishabh",  Eden_Gardens: 22, Wankhade_Stadium: 27, Feroz_Shah_Kotla: 34, Chepauk: 51 }
  ]

function getCricketerDetaia(cricketers){
  for (i=0; i< cricketers.length; i++){
    console.log("Cricketer: " + cricketers[i].Name);
    console.log("Eden Gardens: " + cricketers[i].Eden_Gardens);
    console.log("Wankhade Stadium: " + cricketers[i].Wankhade_Stadium);
    console.log("Feroz Shah Kotla: " + cricketers[i].Feroz_Shah_Kotla);
    console.log("Chepauk: " + cricketers[i].Chepauk)

  }
}


  app.get("/cricket", (req,res)=>{
    let result = getCricketerDetaia(cricketers);
    console.log(result)
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


