// 🚀 Function Basics:

//  Q1. Create a function that takes two parameters and returns their sum.

/*function sum(a, b) {
  var add = a + b;
  return add;
}

const result = sum(6, 4);
console.log(result); */

// Q2. Write a function that takes a string as input and returns its length.

function stringValue(inputString) {
  return inputString.length;
}

const myString = "Hey, I did it";

const length = stringValue(myString);
console.log(length);

// Q3. Create a function that converts a temperature from Fahrenheit to Celsius.

function fahrenheittocelsius(fahrenheit) {
  const Celsius = (fahrenheit - 32) * (5 / 9);
  return Celsius;
}

const fahrenheitTemp = 68;
const celsiusTemp = fahrenheittocelsius(fahrenheitTemp);

console.log(celsiusTemp);

// 🚀 Function Scope:

// Q4. Declare a variable inside a function and try to access it outside the function. Observe the scope.

/*function fn() {
  var a = 5;
  console.log(a); // This will log the value inside the function
}
fn();
console.log(a); */ // This log gives us an error that a is not defined

// Q5. Create a global variable and a local variable inside a function with the same name. Observe variable shadowing.

var globalVar = 500;
console.log(globalVar);

function globallocalVariable() {
  var globalVar = 750;
  console.log(globalVar);
}

globallocalVariable();
console.log(globalVar);

// 🚀 Function Parameters and Arguments:

// Q6. Write a function that calculates the average of an array of numbers passed as an argument.

function average(array) {
  if (array === 0) {
    return 0;
  }

  const sum = array.reduce((a, b) => a + b);
  const average = sum / array.length;
  return average;
}

const array = [1, 2, 8, 10, 20];
const avg = average(array);
console.log(avg);

// Q7. Create a function that accepts a callback function as an argument and invokes it.

function performOperation(callback) {
  console.log("Here, We are invoking the function");
  callback();
}

function newFunction() {
  console.log("Callback has been called");
}

performOperation(newFunction);

// 🚀 Function Expressions and Arrow Functions:

// Q8. Rewrite a function declaration as a function expression.

const add = function () {
  console.log("This is function expression ");
};

add();

// Q9. Convert a function expression to an arrow function.

/*const sub = function () {
  return a-b 
}

const sub = (a, b) => a - b; */

// 🚀 Recursion:

// Q10. Write a recursive function to calculate the factorial of a number.

function factorial(n) {
  if (n === 0) {
    return 1; // Base case: 0! is 1
  } else {
    return n * factorial(n - 1); // Recursive case: n! = n * (n-1)!
  }
}

const number = 8;
const result = factorial(number);
console.log(result);

// Q11. Write a recursive function to calculate the sum of all positive integers from 5 to n.

function sum(n) {
  if (n === 5) {
    return 5;
  } else {
    return n + sum(n - 1);
  }
}

const results = sum(8);
console.log(results);

// Q12. Write a recursive function to calculate the divide of all positive integers from 1 to n.

function divide(n) {
  if (n === 1) {
    return 1; // Base case: 0! is 1
  } else {
    return n / divide(n - 1); // Recursive case
  }
}

const resulant = divide(3);
console.log(resulant);

// 🚀 Callback Functions:

// Q13. Implement a function that takes an array and a callback function, then applies the callback to each element of the array.

function applyCallbackToElements(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    // call the callback function
    callback(arr[i]);
  }
}

const newNumbers = [7, 8, 4, 5, 6];

function square(num) {
  const resultSquare = num * num;
  console.log(resultSquare);
}

applyCallbackToElements(newNumbers, square);

// Q14. Create a callback function for use with the Array.prototype.map() method.

const newarr = [5, 4, 8, 7, 6] // Array of numbers

// Callback function to square each number

function squareNumber(number) {
  return number * number
}

// Use map() with the callback function

const squaredNumbers = newarr.map(squareNumber)

console.log(squaredNumbers);

// Q15. Create a callback function for use with the Array.prototype.map() method.

const fruits = ["apple", "banana", "cucumber", "watermelon"];


// Callback function to capitalize the first letter of each fruit
function capitalizeFirstLetter(fruit) {
   return fruit.charAt(0).toUpperCase() + fruit.slice(1);
}

const capitalizedFruits = fruits.map(capitalizeFirstLetter);

console.log(capitalizedFruits);