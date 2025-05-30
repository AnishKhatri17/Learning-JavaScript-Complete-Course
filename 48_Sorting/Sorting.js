/*
    sort() = method used to sort elements of an array in place.
             Sorts elements as string in lexicographic order, not alphabetical
             lexicographic = (alphabet + numbers + symbols) as strings
*/

let fruits = ["apple", "orange", "banana", "coconut", "pineapple"];
let numbers = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];
let reverseNumbers = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];

fruits.sort(); //this sorts in aphabetical number
// numbers.sort(); //this will not sort
numbers.sort((a, b) => a - b); 
reverseNumbers.sort((a, b) => b - a);

console.log(fruits);
console.log(numbers);
console.log(reverseNumbers);


// Another Example (sort object by property)
const people = [{name: "Spongebob", age: 30, gpa: 3.0},
                 {name: "Patrick", age: 37, gpa: 1.5},
                  {name: "Squidward", age: 51, gpa: 2.5},
                   {name: "Sandy", age: 27, gpa: 4.0}];

people.sort((a, b) => a.age - b.age); // sorts small age to bigger
// people.sort((a, b) => b.age - a.age); // sorts big age to smaller

//also can be sort by gpa
// people.sort((a, b) => a.gpa - b.gpa); // low gpa to high gpa
// people.sort((a, b) => b.gpa - a.gpa); //high gpa to low gpa

console.log(people);


// also sort by name (string) (Lexicographic order)
const peoples = [{name: "Anish", age: 30, gpa: 3.0},
                 {name: "Prajol", age: 37, gpa: 2.0},
                  {name: "Ashma", age: 51, gpa: 4.0},
                   {name: "Rustam", age: 27, gpa: 1.5}];

peoples.sort((a, b) => a.name.localeCompare(b.name));
// peoples.sort((a, b) => b.name.localeCompare(a.name)); //Reverse name
console.log(peoples);