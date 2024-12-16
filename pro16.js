// 16.Write a JavaScript code using nested if-else statements to determine the grade of a student based on the following conditions:

// Grade "A" if score is 90 or above
// Grade "B" if score is between 80 and 89
// Grade "C" if score is between 70 and 79
// Grade "D" if score is below 70
// Assume the score is 75.

let marks = 81;

if (marks > 90) {
  console.log("A Grade");
} else if (marks > 80 && marks < 89) {
  console.log("B Grade");
} else if (marks > 70 && marks < 79) {
  console.log("C Grade");
} else {
  console.log("D Grade");
}