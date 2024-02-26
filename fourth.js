// Arrays in JS
/*
let marks = [97, 82, 75, 64, 55];
console.log(marks);
console.log(marks.length);


let heroes = ["ironman", "thor", "hulk", "shaktiman", "spiderman"];
console.log(heroes);
console.log("typeof heroes :", typeof heroes);

// for loop
for(let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}

// for of loop
for(let hero of heroes) {
    console.log(hero);
}
*/


/*
let foodItems = ["potato", "apple", "litchi", "tomato"];

// push() at the end
foodItems.push("mango");
foodItems.push("chips", "burger", "paneer");
console.log(foodItems);
// pop() at the end
foodItems.pop();
console.log(foodItems);
// toString()
console.log(foodItems.toString());

let marvelHeroes = ["thor", "spiderman", "ironman"];
let dcHeroes = ["superman", "batman"];
// abc.concat(xyz)
let heroes = marvelHeroes.concat(dcHeroes);
console.log(heroes);
// unshift() at the front
heroes.unshift("captain america");
console.log(heroes);
// shift() at front
heroes.shift();
console.log(heroes);
*/


/*
let arr = [1, 2, 3, 4, 5, 6, 7];

// slice(startIdx, endIdx) --> returns a piece of the array
console.log(arr);
arr.slice(0, 3);
console.log(arr);

// splice(startIdx, delCount, newElt1,...) --> change original array (add, remove, replace)
arr.splice(0, 1, 9, 10);
console.log(arr);
*/


// Practce Question
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log(companies);
// a. remove the first company
companies.shift();
console.log(companies);
// b. remove Uber and add Ola in its place
companies.splice(2, 1, "Ola");
console.log(companies);
// c. add Amazon at the end
companies.push("Amazon");
console.log(companies);