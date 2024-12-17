//data types in javascript

// primitive types

// number
let num = 123;
console.log(typeof typeof num);


// string
let string = "batman";
console.log(typeof typeof string);


// boolean //true, false
let boolean = true;
console.log(typeof boolean);


// bigInt //11112333323546547
let value = 1234509823409802938509286098243098324n;
console.log(typeof value);
console.log(value);


// null
let userName = null;
console.log(typeof userName);


// undefined
let game;
console.log(typeof game);



//not primitive types (reference type)

// Object
let object = { name: "batman", city: "gotham city" };
console.log(object.city,object.name)
console.log(object["name"])
console.log(typeof object)


// Array
let array = ["clothes","fruits",12345,true,false,null,{name:"robin"},["food"]]


let game1 = "pubg"
let game2 = "callOfDuty"  // callOfDuty is camelCase   // snakeCase  user_name
let game3 = "freefire"

let arrayOfGroup = [game1,game2,game3]
console.log(arrayOfGroup)
console.log(typeof arrayOfGroup)