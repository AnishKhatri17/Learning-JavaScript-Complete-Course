/*
    classList = Element property in JavaScript used to interact with 
                an element's list of classes (CSS classes)
                Allows us to make reusable classes for many elements
                across our webpage.

                // add()
                // remove()
                // toggle(Remove if present, Add if not)
                // replace(oldClass, newClass)
                // contains()
*/

const myH1 = document.getElementById("myH1");
const myButton= document.getElementById("myButton");


myButton.classList.add("enabled");
myButton.classList.remove("enabled");

myButton.addEventListener("mouseover", event => {
    event.target.classList.add("hover");
});

myButton.addEventListener("mouseout", event => {
    event.target.classList.remove("hover");
});

// toggle(Remove if present, Add if not)
// myButton.addEventListener("mouseover", event => {
//     event.target.classList.toggle("hover");
// });

// myButton.addEventListener("mouseout", event => {
//     event.target.classList.toggle("hover");
// });


 // replace(oldClass, newClass)
 myButton.classList.add("enabled");

 myButton.addEventListener("click", event => {

    if(event.target.classList.contains("disabled")){
            event.target.textContent += "🤬";
    }
    else{
    event.target.classList.replace("enabled", "disabled");
    }

 });

 
 myH1.classList.add("enabled");
 myH1.addEventListener("click", event => {

    if(event.target.classList.contains("disabled")){
            event.target.textContent += "🤬";
    }
    else{
    event.target.classList.replace("enabled", "disabled");
    }

 });

 
