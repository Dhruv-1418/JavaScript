// Array Functions
// Push ,Pop, shift, upshifts, Splice, map ,filter, foreach, indexof, findindex ,includes, every, some,reduce
// Understanding String
// String Function
// substr, substring, join, trim


let arr = [1,2,3,4,5,6,0,7];

arr.unshift("staring");// [ 'staring', 1, 2, 3, 4, 5, 6, 0, 7 ] -> starting point add.
console.log(arr);

arr.shift();// [1,2,3,4,5,6,0,7] ->  starting point remove.
console.log(arr);



let dataOfNumber = [24,655,79,82,7,12,75,74,90,17,8]
let string2 = "javascript"

// dataOfNumber.splice(3,4,"hello" ,"javscript")// first argument for starting index, second argument for how many remove elements in array 
// console.log(dataOfNumber)


const storeSlice = dataOfNumber.slice(4,7)//[ 7, 12, 75 ] -> in slice create a new array according pass index.
const stringSlice = string2.slice(0,4)// java -> in string slice create a new message according pass index.
console.log(storeSlice)
console.log(stringSlice)


//map function
let dataOfUser = ["john","batman","superman","aquaman"]

const storeCharacterData = dataOfUser.map((element)=>{//    [
                                                        //     'john DC comics',
                                                        //     'batman DC comics',
                                                        //     'superman DC comics',
                                                        //     'aquaman DC comics'
                                                        //   ]
    return element+ " " +"DC comics"
  })
console.log(storeCharacterData)
  


//filter function
let numbersData = [12,14,15,17,18,19,20,21,22,23,24,25]


const storeNumbers = numbersData.filter((element)=>{//[ 21, 22, 23, 24, 25 ]
  return element > 20
})
console.log(storeNumbers)


//foreach function
let numbersDatas = [1,2,3,4,5,6,7,8,9,10];
let sum = 0
const storeForEach=  numbersDatas.forEach((element)=>{//55 all value sum 
  console.log(element)
  sum += element
})
console.log(sum)
// console.log(storeForEach)


//indexof function
const newValue = numbersData.indexOf(24)
console.log(newValue)

const findIndex = numbersData.findIndex((element)=>element>24)

console.log(findIndex)//11 -> index ma ketlami jagyaye che te index number.



//includes function
let techStack =  ["react","node","html","css","mongodb","vercel","netlify","javascript"]   //["node","node","node","css"]
const resultStack = techStack.includes("css")
console.log(resultStack)//true -> array andar hoy to , array ni bhar hoy to false.


//every function
const storeEvery = techStack.every((element)=>{
    return element == "node"
   })
   console.log(storeEvery)//false -> array ma bdha node hoy to true nakar false.




//some function
const storeSome = techStack.some((element)=>{
    return element == "javascript"
   })
   console.log(storeSome,"some")//true some -> array ma fist value match thai jai to true 



//reduce function
let reduceData = [10,20,30,40,[1,2,3,[6,15,[1,2,33]]]]

 const storeReduceData = reduceData.reduce((acc,element)=>{

if(typeof element == "number"){
  acc = [...acc, element]
}else{
   acc = [...acc,...element,]
}

 return acc
 },[])

 console.log(storeReduceData,"flat")//[ 10, 20, 30, 40, 1, 2, 3, [ 6, 15, [ 1, 2, 33 ] ] ] flat
 //reduce is not working for flat the array directly





