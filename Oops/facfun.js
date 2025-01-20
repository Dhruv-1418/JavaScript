
// factory function


let obj={};
let obj2= obj;
console.log(obj==obj2);

function userdata(username,age,password,address,organization)
{
    let object = {};
    object.username=username;
    object.age=age;
    object.password=password;
    object.address=address;
    object.organization=organization;


    object.print = function (money){
        console.log( `Name: ${this.userName}, Age: ${this.age}, Organization: ${this.organization} money: ${money}`);

    };
    return object;
}


let elonMusk = userdata("elonMusk", 55, "password123", "123 Main St", "SpaceX");
console.log(elonMusk);
elonMusk.print("1000000000000");

// let dhruv = userdata("dhruv",21,"1234","morbi","x");
// console.log(dhruv);

