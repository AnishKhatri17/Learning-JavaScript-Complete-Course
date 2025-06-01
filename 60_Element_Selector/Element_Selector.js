/*
    element selectors = Methods used to target and manipulate HTML elements
                        They allow us to select one or multiple HTML elements
                        from the DOM (Document Object Model)

    // 1. document.getElementById            // ELEMENT OR NULL
    // 2. document.getElementClassName()     // HTML COLLECTION
    // 3. document.getElementByTagName()     // HTML COLLECTION
    // 4. document.querySelector()           // ELEMENT OR NULL
    // 5. document.querySelectorAll()        // NODELIST
*/

// ---------------- document.getElementById() Example ---------------
const myHeading = document.getElementById("my-heading");

myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";

console.log(myHeading);


// -------------- document.getElementByClassName() Example ------------
const fruits = document.getElementsByClassName("fruits");

// fruits[0].style.backgroundColor = "blue";
// console.log(fruits);

for(let fruit of fruits){
fruit.style.background = "skyblue";
}

// fruits.forEach(); HTML collections don't have a foreach function

Array.from(fruits).forEach(fruit => {
    fruit.style.fontSize = "3rem";
});


// --------------- document.getElementByTagName() -------------------
const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

console.log(h4Elements);
// h4Elements[0].style.backgroundColor = "red"; for Root Vegetables
// h4Elements[1].style.backgroundColor = "red"; for Non-Root Vegetables

for(let h4Element of h4Elements){
    h4Element.style.backgroundColor = "pink";
}

for(let liElement of liElements){
    liElement.style.backgroundColor = "lightgreen"
}

Array.from(h4Elements).forEach(h4Element => {
    h4Element.style.fontSize = "3rem";
});

Array.from(liElements).forEach(liElement => {
    liElement.style.fontSize = "2rem";
});


// --------------- document.querySelector() -------------------
const element = document.querySelector(".fruits");
// const elements = document.querySelector("li"); //It will select first li element
// const elementss = document.querySelector("ul"); //It will select first ul elements
// const elementsss = document.querySelector("h4"); //It will select first h4 element

element.style.background = "red";


// --------------- document.querySelectorAll() -------------------
const frooty = document.querySelectorAll(".fruits");

frooty[2].style.background = "silver";

// frooty.forEach(food => {
//     food.style.backgroundColor = "purple";
// });