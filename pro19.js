// 19.Given num1 = 8 and num2 = 3, use a combination of arithmetic, assignment, and comparison operators to find if num1 is a multiple of num2 after incrementing num1 by 1. Log the result.

let number5 = 8;
let num2 = 3;

// Increment num1 by 1
number5++;

// Check if num1 is a multiple of num2
if (number5 % num2 === 0) {
  console.log("num1 is a multiple of num2 after incrementing.");
} else {
  console.log("num1 is not a multiple of num2 after incrementing.");
}