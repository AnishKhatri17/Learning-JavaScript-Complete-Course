/*
    rest parameters = (...rest) allow a function work with a variable
                      number of arguments by bundling them into an array

    spread = expands an array into separate elements
    rest = bundles separate elements into an array

 */

    function openFridge(...foods){ //this function is designed to accept any number of arguments
            console.log(...foods);
    }

    function getFood(...foods){
            return foods;
    }

const food1 = "pizza";
const food2 = "hamberger"
const food3 = "hotdog"
const food4 = "sushi"
const food5 = "ramen"

openFridge(food1, food2, food3, food4, food5);

const foods = getFood(food1, food2, food3, food4, food5);
console.log(foods);


            //example 2
function sum(...numbers)
{
    let result = 0;
    for(let number of numbers)
        {
            result += number;
        }
    return result;
}

const total = sum(1, 2, 3, 4, 5);

console.log(`Your total is $${total}`);


            //example 3
function getAverage(...numbers)
{
    let result = 0;
    for(let number of numbers)
        {
            result += number;
        }
    return result / numbers.length;
}

const totals = getAverage(75, 100, 85, 90, 50);

console.log(totals);


         //example 4

function combineString(...strings)
{
        return strings.join(" ");
}   

const fullname = combineString("Mr.", "Spongebog", "Squarepants", "III");

console.log(fullname);