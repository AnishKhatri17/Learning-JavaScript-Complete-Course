/*
    .filter() = creates a new array by filtering out elements
*/

let numbers = [1, 2, 3, 4, 5, 6, 7];
let evenNums = numbers.filter(isEven);
let oddNums = numbers.filter(isOdd);

console.log(evenNums);
console.log(oddNums);

function isEven(element){
    return element % 2 === 0 ;
}

function isOdd(element){
    return element % 2 !== 0 ;
}


        //Example 2
const ages = [16, 17, 18, 18, 19, 20, 60];
const adults = ages.filter(isAdult);
const children = ages.filter(isChild);

console.log(`The Adults are : \n`)
console.log(adults);
console.log(`The Children are : \n`)
console.log(children)

function isAdult(element){
        return element >= 18;
}

function isChild(element){
    return  element < 18;
}


            //  Example 3
const words = ["apple", "orange", "banana", "kiwi", "pomegranate", "coconut"]; // filter words over length 6
const smallWords = words.filter(getShortWords); 
const bigWords = words.filter(getLongWords);

console.log(`Words that are less than 6 length are : `);
console.log(smallWords);
console.log(`Words that are more than 6 length are : `);
console.log(bigWords);
console.log(`The original array of words are : `);
console.log(words);

function getShortWords(element){
    return element.length <= 6;
}

function getLongWords(element){
    return element.length > 6;
}

