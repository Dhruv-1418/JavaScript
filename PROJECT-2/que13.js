// Using a while loop, create a program that finds and prints the first 5 numbers divisible by both 3 and 7.

let i = 1;
let counter = 0;

while(i<=500){
    if( i % 3 == 0 && i % 7 == 0){
        console.log(i);
        counter++;
    }
    if(counter==5){
        break;
    }    
    i++;
}

// let counter = 0;
// let i = 1;


// while(i<5){
//     if( i % 3 == 0 && i % 7 == 0){
//         console.log(i);
//         counter++;
//     }
//     i++;
// }