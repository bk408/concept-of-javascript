
// Q1 Write a program to print all odd & Even numbers from 1 to N using a for loop in JavaScript

/*var range = 10;

for (var i = 1; i <= range; i++){
    if (i % 2 === 0) {
        console.log(i);
    }
    else {
        console.warn(i);
    }
}*/


// Q2. Write a program to print sum of all  numbers from 1 to N using a for loop in JavaScript

/*var number = 3;

var sum = 0;

for (var i = 0; i <= number; i++){
    sum +=i
}

console.log(sum);*/


// Q3. Write a program to print square of all numbers in array using a for loop in JavaScript

/*const number = [2, 4, 6, 8, 10]

const squareArray = [];

for (var i = 0; i < number.length; i++){
    squareArray.push(number[i] * number[i] * number[i]);
}

console.log(squareArray); */

//Q4. Write a program that uses a for loop to print numbers from 1 to N, where N is a user-defined integer.using a for loop in JavaScript

// Prompt the user for input
/*var N = parseInt(prompt("Enter a number (N):"));

// Check if the input is a valid number
if (!isNaN(N)) {
    // Use a for loop to print numbers from 1 to N
    for (var i = 1; i <= N; i++) {
        console.log(i);
    }
} else {
    console.log("Invalid input. Please enter a valid number.");
} */


// Q. Write a program that uses a for loop to print find the maximum numbers from 1 to N, using a for loop in JavaScript

// Define the upper limit N
/* const N = 100; // Change N to the desired upper limit

// Initialize a variable to store the maximum number found
let maxNumber = 1;

// Iterate through numbers from 2 to N
for (let num = 2; num <= N; num++) {
    // Check if the current number is greater than the current maximum
    if (num > maxNumber) {
        maxNumber = num;
    }
}

// Print the maximum number found
console.log("The maximum number from 1 to", N, "is:", maxNumber); */


/* var colors = {
    Primary: 'Blue',
    Secondary: 'Red',
    Tertiary:  'White'
}

for (var color in colors) {
    console.log(colors);
} */

// Write a program that uses a for loop to print numbers from 1 to N, where N is a user-defined integer.using a for loop in JavaScript


var N = parseInt(prompt("Enter a number (N):"));


if (!isNaN(N)) {
   
    for (var i = 1; i <= N; i++) {
        console.log(i);
    }
} else {
    console.log("Invalid input. Please enter a valid number.");
}


// Write a program that uses a for loop to print find the maximum numbers from 1 to N, using a for loop in JavaScript


const N = 100; 

let maxNumber = 1;


for (let num = 2; num <= N; num++) {
    if (num > maxNumber) {
        maxNumber = num;
    }
}


console.log("The maximum number from 1 to", N, "is:", maxNumber);


// Write a program to print patterns like a pyramid, diamond, or any custom pattern using nested for loops.using a for loop in JavaScript

// Define the height of the pyramid
var height = 5;

// Outer loop for each row
for (var i = 1; i <= height; i++) {
    // Inner loop for spaces before the stars
    for (var j = 1; j <= height - i; j++) {
        process.stdout.write(" "); // Print a space
    }
    
    // Inner loop for printing stars
    for (var k = 1; k <= 2 * i - 1; k++) {
        process.stdout.write("*"); // Print a star
    }
    
    // Move to the next line
    console.log();
}

