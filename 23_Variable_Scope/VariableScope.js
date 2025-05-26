// variable scope = where a variable is recognized and accessible (local vs global)


//let x = 15;
//let x = 10;
// Here we can't define the same variable name twice !!


            // local variable example
let x = 15;

function function1(){
    let x = 5; // this is a local variable of function1()
    console.log(`Invoking first function we get : `+ x);
}

function function2(){
    let x = 10; // this is a local variable of function2()
    console.log(`Invoking second function we get : `+ x);
}
// invoking function1()
console.log(function1()); // this will give local value i.e 5

//invoking function2()
console.log(function2()); // this will give local value i.e 10


            //global variable example

let y = 10; // this is a global variable

function functionA()
{
    console.log(y); // uses global scope variable
}

function functionB()
{
    console.log(y); // uses global scope variable
}

// invoking functions and see result in console
console.log(functionA()); // invokes global variable i.e 10
console.log(functionB()); // invokes global variable i.e 10