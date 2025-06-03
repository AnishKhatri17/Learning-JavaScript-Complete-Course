/*
    Async/Await = Async = makes a function return a promise
                  Await = makes an async function wait for a promise

                  Allows us write asynchronous code in a synchronous manner 
                  Async doesn't have resolve or reject parameters
                  Everything after Await is placed in an event queue
*/

function walkDog(){

    return new Promise((resolve, reject) =>{
            setTimeout(() => {
                const dogWalked = true;

                if(dogWalked){
                    resolve("You walked the dog 🐕");
                }
                    else{
                        reject("You DIDN'T walked the dog 🐕");
                    }
        }, 1500); 
    });
}

function cleanKitchen(){
   
    return new Promise((resolve, reject) =>{
             setTimeout(() =>{
                const kitchenCleaned = true;

                if(kitchenCleaned){
                      resolve("You cleaned the kitchen 🧹");
                }
                else{
                    reject("You DIDN'T cleaned the kitchen 🧹");
                }      
        }, 2500); 
    });
}

function takeOutTrash(){
    return new Promise((resolve, reject) =>{
             setTimeout(() =>{
                const trashTakenOut = true;
                // const trashTakenOut = false;

                if(trashTakenOut){
                      resolve("You take out the trash 🚮");
                }
                else{
                    reject("You DIDN'T take out the trash 🚮");
                } 
         }, 500);   
    });
}

// calling through async function and await .....
async function doTasks(){

    try{
        const walkDogResult = await walkDog();
        console.log(walkDogResult);

        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);

        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);

        console.log("\nCongratulation, You finished all the tasks !!!!!");
    }
    catch(error){
        console.error(error);
    }
}

doTasks();