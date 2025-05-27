/*
    .reduce() = reduce the elements of an array to a single value
*/


const prices = [5, 30, 10, 25, 15, 20];

const total = prices.reduce(sum);

// console.log(`$`+total); or
console.log(`$${total.toFixed(2)}`);

function sum(accumulator, element){
    return accumulator + element;
}

/* lets see how this works :
    function sum (0, 5){
    return 0 + 5;
    }

    function sum (5, 30){
    return 5 + 30;
    }

    function sum (35, 10){
    return 35 + 10;
    }

    now accumulator is 45 and element is 25
*/


        //Example 2
const grades = [75, 50, 90, 80, 65, 95];
const maximum = grades.reduce(getMax);
const minimum = grades.reduce(getMin);

console.log(`The Maximum score is: ${maximum}`);
console.log(`The Minimum score is: ${minimum}`);

function getMax(accumulator, element){
    return Math.max(accumulator, element);
}

function getMin(first, second){
    return Math.min(first, second);
}