/*
    JSON = (JavaScript Object Notation) data-interchange format 
            used for exchanging data between a server and a web application
            JSON files {key:value} OR [value1, value2, value3]

            JSON.stringify() = converts a JS object to a JSON string.
            JSON.parse() = converts a JSON string to a JS object
*/

// JSON.stringify
const names = ["Spongebob", "Patrict", "Squidward", "Sandy"];
const person = {"name" : "Spongebob", "age" : 30, "isEmployed" : true, "hobbies" : ["Jellyfishing", "Karate", "Cooking"]};

const people = [{"name" : "Spongebob","age" : 30,"isEmployed" : true},
                {"name" : "Patrick", "age" : 34, "isEmployed" : false},
                {"name" : "Squidward","age" : 50,"isEmployed" : true},
                {"name" : "Sandy","age" : 27,"isEmployed" : false}];

const jsonString = JSON.stringify(names);
const jsonStrings = JSON.stringify(person);
const forPeople = JSON.stringify(people);

console.log(names);
console.log(jsonString);
console.log(jsonStrings);
console.log(people);
console.log(forPeople);
console.log("\n\n");

// JSON.parse
console.log(`\n\n Json Parse JSON.parse()`);
const jsonNames = `["Spongebob", "Patrict", "Squidward", "Sandy"]`;
const jsonPerson = `{"name" : "Spongebob", "age" : 30, "isEmployed" : true, "hobbies" : ["Jellyfishing", "Karate", "Cooking"]}`;

const jsonPeople = `[{"name" : "Spongebob","age" : 30,"isEmployed" : true},
                     {"name" : "Patrick", "age" : 34, "isEmployed" : false},
                     {"name" : "Squidward","age" : 50,"isEmployed" : true},
                     {"name" : "Sandy","age" : 27,"isEmployed" : false}]`;

const parsedData = JSON.parse(jsonNames);
const parsedPerson = JSON.parse(jsonPerson);
const parsedPeople = JSON.parse(jsonPeople);

console.log(jsonNames);
console.log(parsedData);
console.log(jsonPerson);
console.log(parsedPerson);
console.log(jsonPeople);
console.log(parsedPeople);
console.log("\n\n");


// json fetch
console.log(`\n\n Json Fetch`);
fetch("person.json")
.then(response => response.json())
.then(value => console.log(value));

fetch("people.json")
.then(response => response.json())
.then(value => console.log(value));


fetch("people.json")
.then(response => response.json())
.then(values => values.forEach(value => console.log(value)))
.catch(error => console.log(error));


fetch("people.json")
.then(response => response.json())
.then(values => values.forEach(value => console.log(value.name)));

fetch("people.json")
.then(response => response.json())
.then(values => values.forEach(value => console.log(value.age)));

fetch("people.json")
.then(response => response.json())
.then(values => values.forEach(value => console.log(value.isEmployed)));