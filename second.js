// comments in JS

// this is single line comment

/*
this is multiple line comment
*/

/*
// operators in JS
let a = 7;
let b = 3;

console.log("a + b = " + a + b);
console.log("a + b = ", a + b);
console.log(a, "+", b, "=" , a + b);

console.log("a - b = ", a-b);
console.log("a * b = ", a*b);
console.log("a / b = ", a/b);
console.log("a % b = ", a%b);
console.log("a ** b = ", a**b);
console.log("a % b = ", a%b);

// unary operator
let x = 10;
console.log("x++ = ", x++);
console.log("++x = ", ++x);
console.log("x-- = ", x--);
console.log("--x = ", --x);

// assignment operator and short hand operator
let p = 100;
let q = p+1;
p += 20;
console.log("p = ", p);
console.log("q = ", q);

// comparison operator : >, >=, <, <=, ==, !=
x = 2; // number
y = 5; // number
console.log("x == y", x == y);
console.log("x != y", x != y);

// special case in JS
let m = 5; // number
let n = "5"; // string --> number [converted]
console.log("m == n", m == n);
console.log("m != n", m != n);

// strict version of equal or not : ===, !==
console.log("m === n", m === n);
console.log("m !== n", m !== n);

// logical operators : &&, ||, !

// conditional statements : if...else, if...else if ladder, 
let age = 17;
if(age >= 18) {
    console.log("You can vote!");
}
else {
    console.log("You can't vote!");
}


// Ternary Operator --> (condiiton) ? (statement-1) : (statement-1);
let age1 = 25;
let result = (age >= 18) ? "Adult!" : "Not Adult!";
console.log(result);
age >= 18 ? console.log("Adult!") : console.log("Not Adult!");
*/


// prompt in JS
/*
let name = prompt("Hello");
console.log(name);
*/


// Q1 : enter a number using prompt and check whether it's divisible by 5.
/*
let num = prompt("Enter a number:");

if(num%5 === 0) {
    console.log(num, "is a multiple of 5");
}
else {
    console.log(num, "is NOT a multiple of 5");
}
*/


// Q2 : Write a code which can give grades to students according to scores:
// 90 - 100 --> A
// 80 - 89 --> B
// 70 - 79 --> C
// 60 - 69 --> D
// 50 - 59 --> E
// 0 - 49 --> F

let score = prompt("Enter your score (0 - 100):");
let grade;

if(score >= 90 && score <= 100) grade = "A";
else if(score >= 80 && score <= 89) grade = "B";
else if(score >= 70 && score <= 79) grade = "C";
else if(score >= 60 && score <= 69) grade = "D";
else if(score >= 50 && score <= 59) grade = "E";
else if(score >= 0 && score <= 49) grade = "F";

console.log("according to your score, you grade is :", grade);