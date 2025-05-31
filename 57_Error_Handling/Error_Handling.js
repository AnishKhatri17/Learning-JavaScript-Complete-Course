/* 
         Error = An object that is created to represent a problem that occurs
               Occur often with user input or establishing a connection.

        try { } = Encloses code that mioght potentially cause an error
        catch{ } = Catch and Handle any thrown Errors from try { }
        finally{ } = (optional) Always executes. Used mostly for clean up
                    example. close files, close connections, release resources.
  */  
// console.lag("Hello"); console.log is error
// console.log(x); undefined x is also an error


try{
    console.log(x);
    // NETWORK ERRORS
    // PROMISE REJECTION
    // SECURITY ERRORS
}

catch(error){
    console.error(error);
}

finally{
    //CLOSE FILES
    //CLOSE CONNECTIONS
    //RELEASE RESOURCES
    console.log(`This always executes, regardless of the errors above in the try block...`);
}
console.log("You have reached the end !!\n\n");


// Example 2 of Error Handling
try{
const dividend = Number(window.prompt("Enter a dividend: "));
const divisor = Number(window.prompt("Enter a divisor: "));
 
if(divisor == 0){
    throw new Error("You can't divide by zero!");
}

if(isNaN(dividend) || isNaN(divisor)){
    throw new Error("Values must be a number!");
}

const result = dividend / divisor;
console.log(result);
}

catch(error){
    console.log(error);
}

console.log("\nAfter example 2....");