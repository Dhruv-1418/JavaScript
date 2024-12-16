// Write a for loop that prints the sum of squares of all odd numbers from 1 to 20.
let sum = 0;

for(i=1;i<=20;i++){
    if(i % 2!=0){
        sum += i*i;
    }  
}

console.log(sum);