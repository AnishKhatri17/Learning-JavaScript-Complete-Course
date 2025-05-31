/*
    setTimeout() = function in JavaScript that allows us to schedule
                   the execution of a function after an amount of time (milliseconds)
                   Times are approximate (varies on the workload of the JavaScript runtime env.)

                   setTimeout(callback, delay);
                   clearTimeout(timeoutId) = can cancel a timeout before it triggers

*/

//First way to use
 function sayHello(){
    window.alert("Hello");
 }

 setTimeout(sayHello, 3000);

 //using anonymous Function.
 setTimeout(function(){
    window.alert("Anonymous Function")
}, 4000);

//Arrow function
setTimeout(() => window.alert(" Arrow Function"), 5000);

// using clearTiemout function() to clear the trigger before execution
const heyStop = setTimeout(() => window.alert("I can't execute !!", 6000));

clearTimeout(heyStop);


// For HTML file

let timeoutId;

function startTimer(){
    timeoutId = setTimeout(() => window.alert("Button Clicked"), 2000);
    console.log("BUTTON CLICKED AND STARTED");
}

function clearTimer(){
    clearTimeout(timeoutId);
    console.log("CLEARED");
}