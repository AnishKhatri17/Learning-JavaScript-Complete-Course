//RANDOM NUMBER GENERATOR

//How to generate random number ?
//Math.random() -> This method generates random number from 0 to 1.

/*
//creating random number between 1 to 6 for a dice.
let randonNum = Math.floor(Math.random() * 6) + 1;
// this code will generate random number from 1 to 6
// last minimum number 1 is added cause 6 is exclusive.

console.log(randonNum);
*/


/*
    Creating Random number for a desired range...
    let max = 100;
    let min = 50;

    let randonNumber = Math.floor(Math.random() * (max - min)) + min;
    console.log(`The random number generated is : `+ randonNumber);
 */
   

    const myButton = document.getElementById("myButton");
    const myLabel1 = document.getElementById("Label1");
    const myLabel2 = document.getElementById("Label2");
    const myLabel3 = document.getElementById("Label3");
    const min = 1;
    const max = 6;
    let randomNum1;
    let randomNum2;
    let randomNum3;

    myButton.onclick = function(){
        randomNum1 = Math.floor(Math.random() * max) + min;
        randomNum2 = Math.floor(Math.random() * max) + min;
        randomNum3 = Math.floor(Math.random() * max) + min;
        Label1.textContent = randomNum1;
        Label2.textContent = randomNum2;
        Label3.textContent = randomNum3;
    }