/*
    promise = an object that manages asynchronous operations.
              Wrap a promise object around {asynchronous code}
              "I promise to return a value"
              PENDING => RESOLVED or REJECTED
              new Promise((resolve, reject) => {asynchronous code})

              // DO THESE CHORES IN ORDER
              // 1. Walk the dog
              // 2. Clean the kitchen
              // 3. Take out the trash
*/

/*
// First using the example of Callback Hell ...
function walkDog(callback){
    setTimeout(() => {
        console.log("You walked the dog 🐕");
        callback();
    }, 1500); 
}

function cleanKitchen(callback){
    setTimeout(() =>{
        console.log("You cleaned the kitchen 🧹");
        callback();
    }, 2500); 
}

function takeOutTrash(callback){
    setTimeout(() =>{
        console.log("You take out the trash 🚮");
        callback();
    }, 500);   
}

// Callback hell functions ...
walkDog(() => {
    cleanKitchen(() =>{
        takeOutTrash(() =>{
            console.log("You completed all the tasks !");
        });
    });
});

*/


// Now using the concept of Promises in JavaScript
// By using Promises we don't need 'callback' we need method chaining 
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

// calling through Promises
walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takeOutTrash()})
         .then(value => {console.log(value); console.log("You finished all the tasks !");})
         .catch(error => console.error(error));