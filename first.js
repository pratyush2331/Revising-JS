console.log("Welcome to the Real World!");
console.log("Pratyush Raj");
// alert("nothing to worry!");


// variables
fullName = "Pratyush Raj"; // string
console.log(fullName);
x = null; // null --> consider as an object
console.log(x);
y = undefined; // undefined
console.log(y);
price = 123.23; // decimal
console.log(price);
age = 21; // integer
console.log(age);
isFollow = false; // boolean
console.log(isFollow);


// let, const & var
let num = 12; // good convention
// let num = 123; // this will give error
var box = 123; // old convention and it can be re-declarable
var box = 231; // new memory block with same variable name and old one is not accessible
const PI = 3.14; // used for constants


// typeof
console.log(typeof x);
console.log(typeof y);
console.log(typeof price);
console.log(typeof isFollow);


// object
const student = { // we can also use let
    fullName : "Rahul Kumar",
    age : 20,
    cgpa : 8.2,
    isPass : true
};

// printing object
console.log(student);
console.log(student.age);
console.log(student["age"]);

// updating object data
student["fullName"] = "Khaitan Abdul";
console.log(student["fullName"]);
student.fullName = "Abdul Kabab";
console.log(student.fullName);


// HW-1 : Create object for pen
const product = {
    title : "Ball Pen",
    rating : 4,
    discountPercent : 5,
    isDeal : true,
    price : 270
};

console.log(product);

// HW-1 : Create object for pen
const profile = {
    username : "@pratyush2331",
    isFollow : true,
    followers : 232,
    followings : 123,
    details : "I am like the water... iykyk"
};

console.log(product);