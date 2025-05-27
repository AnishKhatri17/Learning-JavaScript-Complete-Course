/*
    .map() = accepts a callback and applies that function to each element of an array, then return a new array.
*/

        //Example 1
const numbers = [1, 2 ,3, 4, 5];
const squares = numbers.map(square);
const cubes = numbers.map(cube);

console.log(squares);
console.log(cubes);
console.log(numbers); // we still have our default array

function square(element){
        return Math.pow(element, 2);
}

function cube(element){
    return Math.pow(element, 3);
}
//After completion the map() method returns a new array ...


        //Example2
const students = ["Spongbob", "Patrick", "Squirdward", "Mr.crab"];
const studentsUpper = students.map(upperCase);
const studentsLower = students.map(lowerCase);

console.log(studentsUpper);
console.log(studentsLower);
console.log(`Default Array is : `);
console.log(students);

function upperCase(element){
    return element.toUpperCase();
}

function lowerCase(element){
    return element.toLowerCase();
}


        //Example 3
const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];
const formattedDates = dates.map(formatDates);

console.log(formattedDates);

function formatDates(element){
     const parts = element.split("-");
     return `${parts[1]}/${parts[2]}/${parts[0]}`
}