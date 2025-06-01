/*
    event Listener = Listen for specific events to create interactive web pages
                     events: click, mouseover, mouseout
                     .addEventListener(event, callback)
                     
                    // for example:
                    .addEventListener(click, changeColor);
*/

const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

// function changeColor(event){
//     // console.log(event);
//     event.target.style.backgroundColor = "tomato";
//     event.target.textContent = "OUCH! 🤕";
// }

// myButton.addEventListener("click", changeColor); // we can also pass anonymous or arraow function as well...

/*
   // using anonymous function ..
    
const myBox = document.getElementById("myBox");

myBox.addEventListener("click", function(event){
    event.target.style.backgroundColor = "tomato";
     event.target.textContent = "OUCH! 🤕";
}
});
*/

    // using arrow function ..
myButton.addEventListener("click", event => {
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "OUCH! 🤕";
});

//mouseover event
myButton.addEventListener("mouseover", event => {
    myBox.style.backgroundColor = "yellow";
    myBox.textContent = "Don't do it 😒";
});

//mouseout event 
myButton.addEventListener("mouseout", event => {
    myBox.style.backgroundColor = "lightgreen";
    myBox.textContent = "Click Me 😂";
});