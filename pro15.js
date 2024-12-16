// Write a JavaScript code snippet that checks if a number is positive, negative, or zero using nested if-else statements. Display the appropriate message using console.log.

let positive = -6;

if (positive > 0) {
  console.log("positive number");
} else {
  if (positive < 0) {
    console.log("negative number");
  } else {
    console.log("The number is zero");
  }
}