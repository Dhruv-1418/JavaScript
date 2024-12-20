// (1) Calculate Total Expenses:
// A family wants to calculate their weekly expenses. They spent ₹200, ₹150, ₹100, ₹350, and ₹50 over five days. Write a function to calculate the total expense.
// Hint: Sum all elements of the array.

let calculate = [200,150,100,350,50];
let sum = 0 ;

const result = calculate.forEach((element)=>{
    // console.log(element);
    sum += element;
})
console.log(sum);


// (2) Find the Highest Temperature:
// A weather app shows the temperatures recorded in a city over 7 days as [32, 35, 30, 31, 33, 36, 34]. Write a function to find the highest temperature in the array.
// Hint: Use a loop or the Math.max function.


function temp(){
    let a = [32, 35, 30, 31, 33, 36, 34];
    console.log(Math.max(...a));
}
temp()


// (3) Find the Lowest Test Score:
// A student got test scores of [56, 72, 48, 90, 65]. Write a function to find the lowest score.
// Hint: Use a loop or Math.min.


function score(){
    let sco = [56, 72, 48, 90, 65];
    console.log(Math.min(...sco));   
}
score()


//(4) Calculate Average Salary:
// In a company, the monthly salaries of 5 employees are [45000, 55000, 30000, 70000, 60000]. Write a function to calculate the average salary.
// Hint: Sum all elements and divide by the array length.


function salary(){
    let average = [45000, 55000, 30000, 70000, 60000];
    let sum = 0;
    
    const ave = average.forEach((element)=>{
        sum += element;
        console.log(sum);
    })

    console.log(sum/average.length);
    
}
salary()


//(5) Reverse the Guest List:
// You have a list of guests for a party: ["John", "Aman", "Rita", "Raj"]. Write a function to reverse the guest list.
// Hint: Do not use .reverse().


function reverse(){
    let party = ["John", "Aman", "Rita", "Raj"];
    let party1 = [];

    for(let i = party.length-1;i >= 0;i--){
        party1.push(party[i]);
    }
    console.log(party1);
    
}
reverse()


// (6) Check for Available Seats:
// A movie theater has an array of available seat numbers: [3, 5, 7, 9, 12]. Write a function to check if seat number 7 is available.
// Hint: Use .includes() or a loop.

function seat(){
    let availableseat = [3, 5, 7, 9, 12];
    console.log( availableseat.includes(7));
}
seat()


// (7) Remove the First Task:
// You have a to-do list: ["Buy groceries", "Clean room", "Study"]. Write a function to remove the first task from the list and return the updated list.
// Hint: Use .shift().

function remove(){
    let rem = ["Buy groceries", "Clean room", "Study"];
    rem.shift();
    console.log(rem);
}
remove()


//(8) Remove Duplicate Phone Numbers:
// A phone company wants to remove duplicate phone numbers from an array: [9876543210, 9123456789, 9876543210, 9000000000]. Write a function to remove duplicates.
// Hint: Use Set or a loop.

//use Set
phone_numbers = [9876543210, 9123456789, 9876543210, 9000000000];
phone_numbers = [new Set(phone_numbers)];
console.log(phone_numbers);



// 9.Find Second Largest Sale Amount:
// A shop recorded sales amounts: [200, 400, 100, 700, 500]. Write a function to find the second-largest sale.
// Hint: Sort the array or find the largest, then exclude it.

function sales(){
let sales = [200, 400, 100, 700, 500];
sales.sort((a, b) => b - a);
console.log(sales[1]);
}
sales();


// 10.Get the Last Product Sold:
// A store records product sales as ["Shoes", "T-shirt", "Hat"]. Write a function to get the last product sold.
// Hint: Access the last array element.

function sal(){
const sal = ["Shoes", "T-shirt", "Hat"];
const lastProduct = sal[sal.length - 1];
console.log("Last product sold:", lastProduct);
}
sal()


// 11.Check if Shopping Cart is Empty:
// Write a function to check if the shopping cart array cart = [] is empty.
// Hint: Check if the length is 0.

function cart(){
let cart = [];
console.log(cart.length);
}
cart()

// 12.Count Occurrences of an Item:
// A library has multiple copies of books in its inventory: ["Book A", "Book B", "Book A", "Book C", "Book A"]. Write a function to count how many times "Book A" appears.
// Hint: Use a loop or filter().

function inventory(){
let inventory = ["Book A", "Book B", "Book A", "Book C", "Book A"];
let result4 = inventory.filter((element) => {
  return element == "Book A";
});
console.log(result4.length);
}
inventory()


// 13.Merge Two Student Lists:
// Two classes have student lists: ["Rahul", "Neha"] and ["Aman", "Priya"]. Write a function to merge both lists.
// Hint: Use .concat() or spread operator.

function two(){
let student1 = ["Rahul", "Neha"];
let student2 = ["Aman", "Priya"];

let student3 = student1.concat(student2);
console.log(student3);
}
two()


// 14.Find the Position of a Movie:
// A list of movies is ["Inception", "Avatar", "Titanic"]. Write a function to find the position of "Avatar" in the list.
// Hint: Use .indexOf().

function movies(){
let movies = ["Inception", "Avatar", "Titanic"];
console.log(movies.indexOf("Avatar"));
}
movies()



// 15.Multiply All Prices by Discount:
// A store wants to apply a 10% discount to all prices: [1000, 2000, 1500, 2500]. Write a function to return new prices after applying the discount.
// Hint: Multiply each price by 0.9.

function prices(){
let prices = [1000, 2000, 1500, 2500];
let result5 = prices.map((element) => {
  return element * 0.9;
});
console.log(result5);
}
prices()



//16. Sort Scores in Descending Order:
// A sports team scored [10, 50, 30, 20]. Write a function to sort these scores in descending order without using .sort().
// Hint: Use nested loops for sorting.

function sortScoresDescending(scores) {
    let n = scores.length;
  
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (scores[j] < scores[j + 1]) {
          let temp = scores[j];
          scores[j] = scores[j + 1];
          scores[j + 1] = temp;
        }
      }
    }
    return scores;
  }
  
  let scores1 = [10, 50, 30, 20];
  let sortedScores = sortScoresDescending(scores1);
  
  console.log(sortedScores);
  
  // 17.Split Attendees into Groups:
  // An event has 10 attendees: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]. Write a function to split them into groups of 3.
  // Hint: Loop and use slice().
  
  const attendees = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  let groups = [];
  let group = [];
  
  for (let i = 0; i < attendees.length; i++) {
    group.push(attendees[i]);
  
    if (group.length === 3) {
      groups.push(group);
      group = [];
    }
  }
  
  if (group.length > 0) {
    groups.push(group);
  }
  
  //18. console.log(groups);
  
  // Rotate the Line of Cars:
  // A parking lot has cars in a line: ["Car1", "Car2", "Car3", "Car4"]. Write a function to rotate the cars so "Car4" comes to the front.
  // Hint: Use .pop() and .unshift()
  
  let car = ["Car1", "Car2", "Car3", "Car4"];
  car.pop();
  car.unshift("car4");
  console.log(car);
  
  // 19.Remove Unwanted Values from the List:
  // A form received some invalid values: [0, "A", "", null, "B", undefined]. Write a function to remove all falsey values (like 0, null, undefined) from the list.
  // Hint: Use .filter().
  
  let values = [0, "A", "", null, "B", undefined];
  
  let result6 = values.filter((element) => {
    return element;
  });
  
  console.log(result6);
  
  // 20.Count Vowels in a Name:
  // A user enters their name "Rahul". Write a function to count how many vowels are in the name.
  // Hint: Check for vowels (a, e, i, o, u).
  
  let vowels = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  
  let result7 = vowels.filter((element) => {
    if (
      element == "a" ||
      element == "e" ||
      element == "i" ||
      element == "o" ||
      element == "u"
    ) {
      return element;
    }
  });
  
  console.log(result7, result7.length);
  
  // 21.Reverse a Product Code:
  // A company has a product code "AB1234". Write a function to reverse this code.
  // Hint: Convert to array, reverse, and join.
  
  let string = "AB1234";
  let string2 = string.split("");
  console.log(string2);
  console.log(string2.reverse());
  console.log(string2.join("0"));
  
  //22 Check if a Name is a Palindrome:
  // A child enters the name "radar" into a game. Write a function to check if the name is a palindrome (same forwards and backwards).
  // Hint: Compare string to its reverse.
  // Function to check if a name is a palindrome
  function isPalindrome(name) {
    name = name.toLowerCase();
  
    for (let i = 0; i < name.length / 2; i++) {
      if (name[i] !== name[name.length - 1 - i]) {
        return false;
      }
    }
  
    return true;
  }
  
  let name = "radar";
  if (isPalindrome(name)) {
    console.log(`${name} is a palindrome!`);
  } else {
    console.log(`${name} is not a palindrome.`);
  }
  
  //23.Remove Spaces from a Message:
  // A user enters a message "Hello World 2024". Write a function to remove all spaces from the message.
  // Hint: Use .replace() or .split() and .join().
  let message = "Hello World 2024";
  
  let finalResult = message.split("").join("-");
  
  console.log(finalResult);
  
  // 24.Convert a Sentence to Words:
  // A sentence "JavaScript is fun" is given. Write a function to convert the sentence into an array of words.
  // Hint: Use .split() with a space.
  
  let messages = "javascript is fun";
  console.log(messages.split(""));


