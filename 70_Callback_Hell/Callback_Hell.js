/*
    Callback Hell = Situation in JavaScript where callbacks are nested within
                    other callbacks to the degree where the code is difficult to read.
                    Old patterns to handle asynchronous functions.
                    User Promises + async/await to avoid Callback Hell.
*/

function task1(callback){
    setTimeout(() => {
        console.log("Task1 Complete");
        callback();
    }, 2000);  
}

function task2(callback){
    setTimeout(() => {
         console.log("Task2 Complete");
         callback();
    }, 1000);
}

function task3(callback){
    setTimeout(() =>{
        console.log("Task3 Completed");
        callback();
    }, 3000);
}

function task4(callback){
    setTimeout(() =>{
        console.log("Task4 Complete");
        callback();
    }, 1500);
}

function task5(callback){
    setTimeout(() =>{
        console.log("Task5 Complete");
        callback();
    }, 1500);
}

// task1();
// task2();
// task3();
// task4();
// task5();

// console.log("All tasks completed...");

// Callback Hell in JavScript, nesting callback from another callback
task1(() =>{
    task2(() => {
        task3(() =>{
            task4(() => {
                task5(() =>{
                     console.log("All tasks completed.");
                });   
            });
        });
    });
});