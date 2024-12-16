// Detect Perfect Numbers A perfect number is a positive integer that is equal to the sum of its proper divisors (excluding the number itself).
//  Write a program using a for loop to check if a given number is a perfect number.
// Input: number = 28 // Output: 1 + 2 + 4 + 7 + 14 = 28.

let num =28;
sum=0;

for(i=1;i<num;i++){
    if(num%i===0){
        sum+=i;
    }
}

if(sum == num){
    console.log("Perfect Number");
}else{
    console.log("Not a Perfect");
}
