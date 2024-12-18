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
function removeDuplicates(phoneNumbers) {
    return [...new Set(phoneNumbers)];
}
removeDuplicates()
const phoneNumbers = [9876543210, 9123456789, 9876543210, 9000000000];
console.log(removeDuplicates(phoneNumbers)); 

//use loop
// function removeDuplicatess(phoneNumberss) {
//     const uniqueNumbers = [];
//     for (let number of phoneNumberss) {
//         if (!uniqueNumbers.includes(number)) {
//             uniqueNumbers.push(number);
//         }
//     }
//     return uniqueNumbers;
// }
// removeDuplicatess()

// // Example usage:
// const phoneNumberss = [9876543210, 9123456789, 9876543210, 9000000000];
// console.log(removeDuplicates(phoneNumberss)); 
// // Output: [9876543210, 9123456789, 9000000000]
