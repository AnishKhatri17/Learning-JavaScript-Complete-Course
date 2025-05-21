/*
    Arithmetic Operators = operands (values, variables, etc)
                           operators (+ - * /)
                        example : 11 = x + 5;
*/

let students = 30;

// students = students + 1;
// students = students - 1;
// students = students * 1;
// students = students / 2;

// students = students ** 2;  // ** exponent operator
// let extraStudents = students % 3  // % operator gives remainder

/* Augmented Operators */
// students += 1;
// students -= 1;
// students *= 2;
// students /= 3;
// students **= 2;
// students %= 4;

/* Increment and Decrement Operators */
// students++ ;
// students-- ;


console.log(students);
// console.log(extraStudents);  //remainder is 0 for 30 % 3;

/* 
    Operator Precedence (left to right)
    1. parenthesis()
    2. exponents
    3. multiplication & division & modulo
    4. addition and subtraction

*/
    //example 1
    let result = 1 + 2 * 3 + 4 ** 2;
              // 1 + 2 * 3 + 16
              // 1 + 6 + 16
              // 7 + 16
              // 15
    console.log(`The answer of example 1 is ${result}`);

    //example 2 
    let result2 = 12 % 5 + 8 / 2;
               // 2 + 8 / 2
               // 2 + 4
               // 6
    console.log(`The answer of example 2 is ${result2}`);

    //example 3
    let result3 = 6 / 2 ** (2 + 5);
               // 6 / 2 ** 7
               // 6 / 128
               // 0.046875
    console.log(`The answer of example 3 is ${result3}`);
