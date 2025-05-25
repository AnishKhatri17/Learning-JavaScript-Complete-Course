// while loop = repeat some code WHILE some condition is true

    /*
    Example 1
let username = "";

while(username === "" || username === null){
    username = window.prompt(`Enter Your User name`);
}

console.log(`Hello ${username}`);
*/

        // Example 2

let loggedIn = false;
let username;
let password;

do{
        username = window.prompt(`Enter Your Username:`);
        password = window.prompt(`Enter Your Password:`);

        if(username === "AnishKhatri17" && password === "@12345"){
            loggedIn = true;
            console.log("You are logged in !");
        }
        else{
            console.log(`Wrong Input, please try again !!!`);
        }
}while(!loggedIn)