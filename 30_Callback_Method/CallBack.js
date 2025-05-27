/*
    callback = a function that is passed as an argument to another function 

    used to handle asynchronous operations:
    1. Reading a file
    2. Network Requests
    3. Interacting with databases

        "Hey, when you're done, call this next."
 */

        //Example 1

hello();   //should execute first
goodbye(); // should execute next, second

function hello()
{
    setTimeout(function() {
        console.log("Hello!");
    }, 3000);
}
// But due to hello() function needs 3 seconds to load, goodbye() function is executed first, that is not in order ! That's why callback is needed .....

// function goodbye(){
//     console.log("Goodbye !");
// }

function goodbye(){
    console.log("Goodbye !");
}


        //Example 2 (using callback)
console.log(`After Using Callback`);

hi(wait);
function hi(callback){
    console.log("Hiiiiii !");
    callback();
}

function wait(){
    console.log("Wait !");
}

function leave(){
    console.log("Leave !");
}

function bye(){
    console.log("Byeeeee !");
}


        //Example 3 (callback function)
sum(displayResult, 1, 3);
sum(displayPage, 1, 3);

function sum(callback, x, y){
    let result = x + y;
    callback(result);

}

function displayResult(result){
    console.log(result);
}

function displayPage(result){
    document.getElementById("myH1").textContent = `The result after using callback is : ${result}`;
}