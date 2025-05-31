/*
    Synchronous = Executes line by line consecutively in a sequential manner
                  Code that waits for an operation to complete.

    Asychronous = Allows multiple operations to be performed concurrently without waiting
                  Doesn't block the execution flow and allows the program to continue
                  (I/O operations, network requests, fetching data)  
                  Handled with: Callbacks, Promises, Async/Await
*/

setTimeout(() => console.log("Task 1"), 2000); 
//Task 1 will execute after 2 seconds after Task 2,3,4 respectively
//Task 2,3 and 4 will execute instantly and after 2 seconds Task 1 will execute.

console.log("Task 2");
console.log("Task 3");
console.log("Task 4");


//Second Example
function func1(callback){   
    setTimeout(() => {console.log("Anish"); 
                      callback()}, 3000);
}

function func2(){
    console.log("Khatri");
    console.log("SMC");
    console.log("BCA");
}

func1(func2); // Asynchronous Code Example execution concurrently 