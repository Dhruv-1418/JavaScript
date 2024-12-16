// Write a program that uses a while loop to calculate the sum of all even numbers between 1 and 100.

let i = 1;
let sum=0;

while(i<=100){
    if(i % 2 == 0){
        sum +=  i; 
    }
    i++;
}
console.log(sum);