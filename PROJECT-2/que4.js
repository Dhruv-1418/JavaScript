// Write a JavaScript program that uses a for loop to print numbers from 1 to 100, but
//  for multiples of 3, print “Fizz” instead of the number, and
//  for multiples of 5, print “Buzz.”


for(i=1;i<=100;i++){
    if(i % 3 == 0){
        console.log(`${i} Fizz`,i); 
    }
    if(i % 5 ==0){
        console.log(`${i} Buzz`,i);
        
    }
}