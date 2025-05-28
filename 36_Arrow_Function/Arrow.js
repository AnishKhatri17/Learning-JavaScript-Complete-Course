/*
    Arrow Functions = a concise way to write function expressions good for simple functions that you use only once 

    (parameters) => some code
*/


function hello (){
    console.log("Hello");
}
hello();


const hi = function(){
    console.log("Hi how are you ?");
}
hi();

const response = (name, age) => {console.log(`I am good ${name}, thank you.`)
                            console.log(`You are ${age} years old`)};
response("Anish", 23);


        //Example 2
setTimeout(function(){
    console.log("Goodbye !");
}
, 3000);


setTimeout( () => console.log(`GoodBye Again!`) , 4000);



        //Example 3 using arrow function
const numbers = [1,2,3,4,5,6,7,8,9];

const squares = numbers.map( (element) => Math.pow(element, 2)); //for a single line of code, not necessary to use 'return' keyword .........
const cubes = numbers.map((element) => Math.pow(element, 3));
const evenNums = numbers.filter((element) => element % 2 === 0);
const oddNums = numbers.filter((element) => element %2 !==0);
const total = numbers.reduce((accumulator, element) => accumulator + element);

console.log(squares);
console.log(cubes);
console.log(evenNums);
console.log(oddNums);
console.log(` The Total is : ${total}`);

