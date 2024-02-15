// comments in JS

// this is single line comment

/*
this is multiple line comment
*/


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


