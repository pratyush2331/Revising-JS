// FUNCTIONS in JS

/*
function myFunction() {
    console.log("Welcome to Apna College!");
}
myFunction();

function func(msg) {
    console.log(msg);
}
func("Hello Coders!");

// function -> 2 numbers, sum
function sum(x, y) {
    return x + y;
}
console.log("sum =", sum(2, 3));
*/


// ARROW FUNCTION --> modern JS
/*
// sum function
function sum(a, b) {
    console.log(a + b);
}
sum(2, 3);

// arrowSum - arrow function
const arrowSum = (a, b) => {
    console.log(a + b);
}
console.log(arrowSum);
arrowSum(2, 3);

// multiplication function
function mul(a, b) {
    return a * b;
}
console.log(mul(2,3));

// multiplication arrow function
let arrowMul = (a, b) => {
    return a * b;
}
console.log(arrowMul);
console.log(arrowMul(2,3));
arrowMul = "hello Ram";
console.log(arrowMul);

// arrow function w/o arguments
const printHello = () => console.log("Hello");
printHello();

// Practice Question
// countVowels
function printLetters(str) {
    for(const char of str) {
        console.log(char);
    }
}
printLetters("apnacollege");

function countVowels(str) {
    let cnt = 0;
    for(const char of str) {
        if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u')
        cnt++;
    }
    return cnt;
}
console.log(countVowels("apnacollege"));

const countVow = (str) => {
    let cnt = 0;
    for(const char of str) {
        if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u')
        cnt++;
    }
    return cnt;
}
console.log(countVow("apnacollege"));
*/


// forEach() method in JS --> arrays
/*
// let arr = [1,2,3,4,5];
let arr = ["pune", "delhi", "mumbai"];

arr.forEach((val, idx, arr) => {
    console.log(val.toUpperCase(), idx, arr);
});
*/



// Practce Question : For a given array of numbers, print the square of each value using the forEach loop.
/*
let arr = [1, 2, 3, 4, 5, 6];

let calcSquare = (val) => {
    console.log(val*val); // val**2
}

arr.forEach(calcSquare);
*/



// map in JS --> returns new array
/*
let nums = [23, 123, 2345];

let newArr = nums.map((val) => {
    return val * 2;
})

console.log(nums);
console.log(newArr);
*/



// filter in JS --> to filter out on some conditions
/*
let arr = [1, 2, 3, 4, 5, 6, 7];

let evenArr = arr.filter((val) => {
    return val %2 === 0;
})

console.log(arr);
console.log(evenArr);
*/



// reduce in JS --> to reduce it to 1 element. It is use to calculate sum, avg...
/*
let arr = [1, 2, 3, 4, 5];

const sum = arr.reduce((res, curr) => {
    return res + curr;
})

console.log(sum);
*/



// Q. find out largest number from array
/*
let arr = [1, 2, 56, 101, 3, 2, 21];

const largest = arr.reduce((prev, curr) => {
    return (prev > curr) ? prev : curr;
})
console.log(largest);
*/



// Practice Question : filter out 90+ marks
/*
let marks = [97, 64, 32, 49, 99, 96, 86];
let toppers = marks.filter((val) => {
    return val > 90;
})
console.log(toppers);
*/



// Practice Question : take any number as i/p, and create an array of numbers from 1 to n.
// use reduce method to calculate sum of all numbers in the array.
// use reduce method to calculate product of all numbers in the array.
let n = prompt("Enter any number:");

let arr = [];
for(let i = 0; i < n; i++) {
    arr[i] = i+1;
}
console.log(arr);

let sum = arr.reduce((res, curr) => {
    return res + curr;
})
console.log(sum);

let mul = arr.reduce((res, curr) => {
    return res * curr;
})
console.log(mul);