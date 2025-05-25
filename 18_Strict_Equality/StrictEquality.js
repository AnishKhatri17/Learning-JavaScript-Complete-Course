// = assignment operator
// == comparison operator (checks if values are equal)
// === strict equality operator (compares if values and datatype are equal)
// != inequality operator
// !== strict inequality operator


const PI = 3.14;

if(PI === 3.14){
    console.log("That is PI");
}

else{
    console.log("That is Not PI");
}
        //string and number are not equal for === 
if(PI === "3.14"){
    console.log("That is PI");
}

else{
    console.log("That is Not PI");
}
         
            // using !=
    console.log(`using != operator`);
if(PI != "3.14"){
    console.log("That is Not PI");
}

else{
    console.log("That is a PI"); 
}

        // using !==
        console.log(`using !== operator`);
        if(PI !== 3.14){
            console.log("That is not a PI");
        }
        
        else{
            console.log("That is a PI");
        }