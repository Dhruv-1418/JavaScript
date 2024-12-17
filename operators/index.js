// Types Of Operator
// Arithmetic operators
// Assignment operators
// Comparison operators
// Logical operators
// conversion with console.log and innerHTML


// Arithmetic operators

//adding
let a = 13;
let b = 6;
console.log(a + b);

//subtraction
console.log(a - b);

//multiplication
console.log(a * b);

//division
console.log(Math.floor(a / b));
console.log(Math.ceil(a / b));
console.log(Math.round(a / b));

//modulus // reminder
console.log(a % b);



// Assignment operators
let value = "hello world";

let sum = 5;

// sum = sum + a
sum += a; //compound assignment operators
console.log(sum); //18

sum = 3; //3
// sum = sum ** 3
sum **= 5;
console.log(sum, "exponent"); //exponent means power of numbers

// example of !
console.log(!!!true);


// comparision operator
// >
console.log(45 > 5);
// <
console.log(45 < 5);
// >=
console.log(15 >= 45);
// <=
console.log(15 <= 45);
// !=
console.log(45 != 45);
// ==
console.log(45 == 45);
//===
console.log("45" === 45); //strickly type check
//!==
console.log("45" != 45);


// Logical operators
// &&  and  return always false values false and comparision
// ||  or    return always true values false and comparision

console.log(45 > 6 && 55 < 76 && 3 < 45 && 44 == 44, "logical of &&");

console.log(45 < 6 || 55 > 76 || 3 < 45 || 44 != 44, "logical of ||");

console.log(
  123 < 6 || (345 > 25 && 23 < 534) || (45 != 45 && 55 > 26 && 45),
  "logical of"
);


// coversion    // implicit // explicit

let string = "1a23";
console.log(typeof string);
string = Number(string);
console.log(string);
// explicit

let boolean = true;
boolean = Number(boolean);
console.log(boolean);
// explicit

let number2 = -45;
number2 = Boolean(number2);
console.log(number2);

let number3 = 0;
number3 = Boolean(number3);
console.log(number3);

console.log("123a" - 5); // implicit
console.log("1111" + (1111 + 2222)); //concatenate 111111112222
console.log(222 + (333 + "123") + 333); //555123333

console.log("" && true && 0 && 1);

let string2 = "         ";

console.log(Number(string2));