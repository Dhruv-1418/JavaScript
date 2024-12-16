// Write a for loop that calculates and prints the sum of all numbers divisible by 3 between 1 and 100.

let sum =0;

for(i=1;i<=100;i++){
    if(i % 3 == 0){
        sum += i;
    }
}

console.log(sum);
