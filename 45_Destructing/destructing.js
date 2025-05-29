/*
    destructing = extract values from arrays and objects,
                  then assign them to variables in a convenient way
                  [] = to perform array destructing
                  {} = to perform object destructing
                   5 examples
*/

// .............. Example 1 ...............
//Swap the value of Two Variables

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a);
console.log(b);


// .............. Example 2 ...............
//Swap two elements in array

const colors = ["red", "green", "blue", "black", "white"];

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors);


// .............. Example 3 ...............
// Assign array elements to variables

const color = ["red", "green", "blue", "black", "white"];

const[firstColor, secondColor, thirdColor, ...extraColors] = color;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);

// .............. Example 4 ...............
// Extract Values from Objects

const person1 = {
    firstName : "Spongebob",
    lastName : "Squarepants",
    age : 30,
    job : "Fry Cook",
}

const person2 = {
    firstName : "Patrick",
    lastName : "Star",
    age : 34,
}

const {firstName, lastName, age, job ="Unemployed"} = person1; //extract value from objects

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);


// .............. Example 5 ...............
// Destructure in function parameters

function displayPerson({firstName, lastName, age, job="Unemployed"}){
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}

const person3 = {
    firstName : "Spongebob",
    lastName : "Squarepants",
    age: 30,
    job: "Fry Cook",
}

const person4 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 34,

}

displayPerson(person3);
displayPerson(person4);