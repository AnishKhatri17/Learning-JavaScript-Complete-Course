/*
    forEach() = method used to iterate over the elements of an array and apply a specified function (callback) to each element

    array.forEach(callback)

    element, index, array are provided
*/


            //Example 1
let numbers = [1, 2, 3, 4, 5];

// numbers.forEach(double);
// numbers.forEach(triple);
// numbers.forEach(square);
numbers.forEach(cube);
numbers.forEach(display);

function double(element, index, array){
    array[index] = element * 2;
}

function triple(element, index, array){
    array[index] = element * 3;
}

function square(element, index, array){
    array[index] = Math.pow(element, 2);
}

function cube(element, index, array){
    array[index] = Math.pow(element, 3);
}

function display(element){
    console.log(element);
}


        //Example 2
let fruits = ["apple", "orange", "banana", "orange"];

// fruits.forEach(Uppercase);
// fruits.forEach(lowercase);
fruits.forEach(Capitalize);
fruits.forEach(show);

function Uppercase(element, index, array){
    array[index] = element.toUpperCase();
}

function lowercase(element, index, array){
    array[index] = element.toLowerCase();
}

function Capitalize(element, index, array){
        array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

function show(elements){
    console.log(elements);
}