/*
    Nodelist = static collection of HTML elements by (id, class, element)
               Can be created by using querySelectorAll()
               Similar to an array, but no (map, filter, reduce) have forEach()
               NodeList won't update to automatically reflect changes
*/

let buttons = document.querySelectorAll(".myButtons");

// console.log(buttons); // check nodelist in console

//Add HTML/CSS Properties
buttons.forEach(button => {
    button.style.backgroundColor = "green";
    button.textContent += "😂";
});

//Click event listener
buttons.forEach(button => {
        button.addEventListener("click", event => {
            event.target.style.backgroundColor = "tomato";
        });
});

// MOUSEOVER + MOUSEOUT event listeners
buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "hsl(205, 100%, 40%)";
        });
});

buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "hsl(205, 100%, 60%)";
        });
});

// Add an Element
const newButton = document.createElement("button"); //step 1:
newButton.textContent = "Button 5"; //step 2:
newButton.classList = "myButtons"; //step 3:

document.body.appendChild(newButton); //step 4:

buttons = document.querySelectorAll(".myButtons");
console.log(buttons);

//Remove an Element
buttons.forEach(button => {
    button.addEventListener("click", event=> {
        event.target.remove();
        // console.log(buttons); // stays in console but removes in DOM

        buttons = document.querySelectorAll(".myButtons");
        console.log(buttons);
    });
});