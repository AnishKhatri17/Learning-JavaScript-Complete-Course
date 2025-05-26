/*
    spread operator = ... allows an iterable such as an array
                          or string to be expanded into separate elements
                          (unpacks the elements)
*/

let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers); // ... spread operator
let minimum = Math.min(...numbers); // ... spread operator

console.log(maximum);
console.log(minimum);


    //Example 2 for strings
let username = "Anish Khatri";

//using spread operator
// let letters = [...username];
let letters = [...username].join("-");

let display = [username]; // without using spread operator

console.log(display);
console.log(letters);


        //Example 3 Array of fruits
let fruits = ["apple", "orange", "banana"];
let vegetables = ["carrots", "celeries", "potatoes"]

let newFruits = [...fruits];
let foods = [...fruits, ...vegetables, "eggs", "milk", "meat"];

console.log(fruits);
console.log(newFruits);

console.log(foods);