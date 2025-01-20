console.log("one");
console.log("two");
console.log("three");
let loading = false
try {
  loading= true
  console.log(six);//api
} catch (error) {
  console.log(error);
}finally{
  console.log("last");
  loading= false
}
console.log("four");
console.log("five");