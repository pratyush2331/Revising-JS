// Loops in JS

// for loop
/*
for (let i = 1; i <= 5; i++) {
    console.log("i =", i);
}
// console.log("i =", i); // --> will give error (out of block-scope) for 'let'


for (var i = 1; i <= 5; i++) {
    console.log("i =", i);
}
console.log("i =", i); // --> will execute successfully (out of block-scope as well) for 'var'
*/


// while loop
/*
let i = 1;
while(i <= 5) {
    console.log("Hello World!");
    i++;
}
*/


// do-while loop
/*
let i = 1;
do {
    console.log("Hello World!", i);
    i++;
} while(i <= 5);
*/


// for-of loop --> arrays, strings
/*
let str = "JavaScript";

let size = 0;
for(let i of str) { // iterator --> characters
    console.log("i =", i);
    size++;
}
console.log("Size of str =", size);
*/


// for-in loop --> objects, arrays
/*
let student = {
    name: "Rahul Kumar",
    age: 20,
    cgpa: 7.5,
    isPass: true
}

for(let i in student) {
    console.log("key =", i, ", value =", student[i]);
}
*/


// Practice Question
/*
let gameNum = 25;
let userNum = prompt("Guess the game number :");

while(userNum != gameNum) {
    userNum = prompt("You entered wrong number. Guess again :");
}

console.log("congratulations, you entered the right number");
*/


// strings in JS --> immutable
/*
let str = "ApnaCollege";
let str1 = 'PratyushRaj';

console.log("length of str =", str.length);
console.log("length of str1 =", str1.length);

console.log("str1[0] =", str1[0]);
*/


// template literals in JS
/*
let specialString = `This is temlate literal`;

console.log("specaialString =", specialString);
console.log("specaialString.length =", specialString.length);
console.log("specaialString[1] =", specialString[1]);
console.log("typeof specaialString =", typeof specialString);
*/

let obj = {
    item: "pen",
    price: 10
};

// method-1
console.log("the cost of", obj.item, "is", obj.price, "rupees");

// method-2 : better method using string interpolation
console.log(`the cost of ${obj.item} is ${obj.price} rupees`);

// escape character --> \n, \t, ...
let str = "Pratyush\nRaj";
console.log(str)
console.log("length of Pratyush\nRaj =", str.length);

// String methods in JS
let s = "Hello World   ";
console.log(s);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s);
console.log(s);
console.log(s.trim());
console.log(s.slice(2));
console.log(s.slice(2,5)); // --> [2,5)
let s2 = "tukda";
console.log(s.concat(s2));
let s3 = "hellololo";
console.log(s3.replace("lo", "p")); // replaces first occurance
console.log(s3.replaceAll("lo", "p")); // replaces all ocurrance
let s4 = "012345";
console.log(s4.charAt(3));
console.log(s4[3]);

// Practice Question : Prompt full name from user and display username as @<full-name><length>
fullName = prompt("enter your full name w/o spaces :");
console.log("@" + fullName + fullName.length);