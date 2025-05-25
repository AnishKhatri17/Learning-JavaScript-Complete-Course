/*
     Logical Operators = used to combine or manipulate boolean values (true or false)

     AND = &&
     OR = ||
     NOT = !

*/

            //AND operator Example
            console.log(`AND && operator Example \n`);
const temp = 29;

if(temp>0 && temp<=30)
{
    console.log(`Temperature is GOOD !`);
}

else{
    console.log(`Temperature is NOT GOOD !`);
}


            //Or Operator Example
            console.log(`OR || operator Example \n`);
const marks = 90;

if(marks >=35 || marks == 100)
    {
    console.log(`You have passed the exam, you are a bright student`);
}

else{
    console.log(`You have failed the exam, study harder`);
}


            //NOT Operator Example
// const isSunny = true;
// if(isSunny){
//     console.log("The weather is Sunny Today !");
// }

// else{
//     console.log("The weather is cloudy Today !");
// }

console.log(`NOT ! operator Example \n`);
const isSunny = false;
if(!isSunny){
    console.log("The weather is Sunny Today !");
}

else{
    console.log("The weather is cloudy Today !");
}

