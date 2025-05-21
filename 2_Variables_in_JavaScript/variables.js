/*
    Variable = A container that stores a value.
    Behaves as if it were the value it contains.

    1. declaration      let x;
    2. Assignment       x = 100;
*/

// Lets see some examples of variables in JavaScript
let x = 100;
console.log(x);

let age = 23;
let price = 17.99;
let gpa = 3.62;

console.log(`Type of age is `+typeof age);    //number
console.log(`DataType of price is `+typeof price);  //number
console.log(`DataType of gpa is `+typeof gpa);    //number
console.log(`Your Age is ${age} years old`);
console.log(`The price is $${price} dollars`);
console.log(`Your obtained gpa is ${gpa}`);

// Now using String datatypes
let fullName = `Anish Khatri`;
let favouriteFood = 'Soyabean';
let email = "anish.khatri.135@gmail.com";

console.log(typeof email);
console.log(`Your name is ${fullName}`);
console.log(`Your Favourite Food is ${favouriteFood}`);
console.log(`Your email is ${email}`);

//Now using boolean dataTypes.
let online = true ;
let forSale = false;
let isStudent = true;

console.log(`The datatype is `+ typeof online);
console.log(`Anish is online : ${online}`);
console.log(`Is this car is for sale : ${forSale}`);
console.log(`Are you a university student : ${isStudent}`);


// Now displaying variables in our webpage....
let names = "Anish Khatri";
let years = 23;
let student = true;

// document.getElementById("p1").textContent = names;
// document.getElementById("p2").textContent = age;
// document.getElementById("p3").textContent = student;

document.getElementById("p1").textContent = `Your name is ${names}`;
document.getElementById("p2").textContent = `You are ${years} old now`;
document.getElementById("p3").textContent = `You are a University Student :${student}`;