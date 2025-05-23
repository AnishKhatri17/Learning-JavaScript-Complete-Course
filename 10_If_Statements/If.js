// IF STATEMENTS = if a condition is true, execute some code.
// if not, do something else

/*
    //Example 1
 let age = 23;
 let hasLicense = true;
 if(age>=16){
    console.log("You are old enough to drive.");

    if(hasLicense){
        console.log(`Okay, you have a driving license`);
    }
    else{
        console.log(`OH, you don't have driving license, now pay FINE.`);
    }
 }

 else{
    console.log("You are not old enough to drive, you must be 18+ to drive !");
 }
    */


 const myText = document.getElementById("myText");
 const myButton = document.getElementById("myButton");
 const result = document.getElementById("result");
let age;

 myButton.onclick = function(){
        age = myText.value;
        age = Number(age);

        if(age>=100){
            result.textContent = `You are too old to drive`;
        }

        else if(age==0){
            result.textContent = `You can't drive, you are just born LOL !`;
        }

        else if(age>=18){
            result.textContent = `You are old enough and valid to drive`;
        }
        else if(age <0){
            result.textContent = `Your age can't be negative, invalid input !`;
        }

        else{
            result.textContent = `You must be 18+ to drive`;
        }
 }