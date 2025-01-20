// syncronous   // asyncronous example :setTimeout ,setinterval,promises, fetch

console.log("one");
setTimeout(() => {
  console.log("four");
});
console.log("two");
console.log("three");
let count = 1;
const id = setInterval(() => {
  console.log(`${count}`);
  if (count == 30) {
    clearInterval(id);
  }
  count++;
}, 2000);