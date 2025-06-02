/*
    eventListener = listen for specific events to create interactive web pages
                    events: keydown, keyup
                    document.addEventListener(event, callback);
*/

// document.addEventListener("keydown", event => {
//     console.log(`Key Down = ${event.key}`);
// });

// document.addEventListener("keyup", event => {
//     console.log(`Key Up = ${event.key}`);
// });
// See the results in console

const myBox = document.getElementById("myBox");
const moveAmount = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", event => {
    myBox.textContent = "😯";
    myBox.style.backgroundColor = "tomato";
});

document.addEventListener("keyup", event => {
    myBox.textContent = "😃";
    myBox.style.backgroundColor = "lightblue";
});

document.addEventListener("keydown", event => {
    // just using the arrow keys, logic ...

    event.preventDefault();
    if(event.key.startsWith("Arrow")){

        switch(event.key){
              case "ArrowUp":
                y-= moveAmount;
                break;
            
              case "ArrowDown":
                y+= moveAmount;
                break;

                  case "ArrowLeft":
                x-= moveAmount;
                break;

                  case "ArrowRight":
                x+= moveAmount;
                break;
        }

        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
    }
});

document.addEventListener("keydown", event => {

});


