// Function Declaration = defines a reusable block of code that performs a specific task

// function hello(){
//     console.log("Hello");
// }


// Function Expressions = a way to define functions as values or variables

const hello = function(){
    console.log("Hello");
}

hello();

setTimeout(hello, 3000);

setTimeout(function(){
    console.log("Congratulations !!!");
}, 5000);

setTimeout(function(){
    console.log("Goodbye for now !");
}, 6000);


        //Example 2
const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map(function(element){
    return Math.pow(element, 2);
});
console.log(squares);




function cube(element){
    return Math.pow(element, 3);
}

const cubes = numbers.map(cube);
console.log(cubes);

const cubesExpression = numbers.map(function(element){
    return Math.pow(element, 3);
});

console.log(cubesExpression);


        //Example 3
const newNumbers = [1, 2, 3, 4, 5, 6];
const evenNums = newNumbers.filter(function(element){
    return element % 2 === 0;
});

console.log(evenNums);

const oddNums = newNumbers.filter(function(element){
    return element % 2 !== 0;
});

console.log(oddNums);

const total = newNumbers.reduce(function(accumulator, element){
        return accumulator + element;
});

console.log(total);