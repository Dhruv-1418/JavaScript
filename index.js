// (1) Write a JavaScript code snippet that uses arithmetic operators to calculate the area of a circle given its radius. Assume the radius is 7. Display the result using console.log.

let radius = 7;
let pi = 3.14;
let area =pi*(radius*radius);

console.log('Area of Circle is :-',area); 

// (2) Given the variables a = 10, b = 20, and c = 5, write a JavaScript code to find the value of (a * b) / c + (b - a). Use console.log to display the result.

let a = 10;
let b = 20;
let c = 5;

console.log('Result is :-',(a * b) / c + (b - a));  // (10 * 20) / 5 + (20 - 10)


// (3) Given the variables x = 5 and y = 10, use assignment operators to increment x by 2 and multiply y by x. Display the new values of x and y using console.log.

let x = 5;
let y = 10;

console.log("Before x value", x);

x += 2;
console.log("After multiplication of 2", x);

console.log("Before y value", y);

y *= x;
console.log("After multiplication of y", y);


// (4) Write a JavaScript code snippet that uses the compound assignment operators to perform the following operations:

// Add 15 to num
// Subtract 5 from num
// Multiply num by 3
// Divide num by 2
// Initialize num to 10, and log the result after each operation.

let num = 10;
num += 15;
console.log("Number final value is", num);
num -= 5;
console.log("Number final value is", num);
num *= 3;
console.log("Number final value is", num);
num /= 2;
console.log("Number final value is", num);


// (5) Given the variables score1 = 85 and score2 = 90, write a JavaScript code using comparison operators to check if both scores are greater than 80 and display the result using console.log.

let score1 = 85;
let score2 = 90;

if (score1 > 80 && score2 > 80) {
    console.log("Student passed in exam");
  } else {
    console.log("Student not passed in exam");
  }