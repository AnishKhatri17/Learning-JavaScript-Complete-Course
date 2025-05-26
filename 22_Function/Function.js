// Function = A section of reusable code.
//              Declare code once, use it whenever you want
//              Call the function to execute that code.


        //Function Example 1
function happybirthday(username, age){
    console.log(`Happy Birthday To You ...`);
    console.log(`Happy Birthday To You ...`);
    console.log(`Happy Birthday dear ${username} !`);
    console.log(`Happy Birthday To You ...`);
    console.log(`You are now ${age} years old !`);
}

happybirthday("Anish", 23);
happybirthday("Ashma", 29);


            //Function Example 2 -> return keyword
function add(x, y){
    let result = x + y;
    return result;
}

let answer = add(2,3);
console.log(answer);
console.log(add(6, 10));

            //Function Example 3 -> return keyword
function sub(a, b){
    return a - b;
}

console.log(sub(100, 40));

        //Function Example 4 -> return keyword
 function mul(a, b){
    return a * b;
}

console.log(mul(100, 40));

          //Function Example 5 -> return keyword
 function div(a, b){
    return a / b;
}

console.log(div(100, 23));


                //Function Example 6 -> Even or odd
function num(number){
    if(number === 0){
        console.log(`The number is zero !!!`);
    }

    else if(number%2 === 0){
        console.log(`The number is Even.`);
    }

    else if(number !== Number ){
        console.log(`It is a string, can't define as odd or even !!!`)
    }

    else{
        console.log(`The number is Odd.`);
    }
}
 
//calling num function with parameters
num(409);
num(100);
num(22);
num(119);
num(0);
num("Anish");


                //Function Example 7 -> Email is valid or not 
function isValidEmail(email){
        if(email.includes("@")){
                return `Valid Email Address.`;
        }

        else {
                return `Invalid Email Address, must contain @`;
        }
}

console.log(isValidEmail("anish.khatri.135@gmail.com"));
console.log(isValidEmail("Anish.com"));

                //Function Example 7 using Ternary Operator
function validEamil(email)
{
     return email.includes("@") ? true : false;
}

console.log(`Using Ternary Operator.`);
console.log(validEamil("anish.khatri17@gmail.com"));
console.log(validEamil("hello.com"));