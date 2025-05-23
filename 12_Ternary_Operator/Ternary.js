/*
    Ternary Operator = a shortcut to if{} and else{} statements
                        helps to assign a variable based on a condition
                        condition ? codeIfTrue : codeIfFalse;
*/

//Example 1 
let age = 23;
let message = age >=18 ? `You're an Adult` : `You're a Minor`;
console.log(message);

//Example 2
let time = 7;
let greeting = time < 12 ? 'Good Morning!' : `Good Afternoon!`;
console.log(greeting);

//Example 3
let isStudent = true;
// let isStudent = false;
let student = isStudent ? `Yes, you are a student` : `No, you are no longer a student`;
console.log(student);

//Example 4
let purchaseAmount = 101 ;
// let purchaseAmount = 99 ;
let discount = purchaseAmount >=100 ? 10 : 0 ;

console.log(`Your Total Amount is : $${purchaseAmount - purchaseAmount * (discount/100)}`);