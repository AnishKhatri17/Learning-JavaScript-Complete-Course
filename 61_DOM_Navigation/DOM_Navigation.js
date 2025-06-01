/*
    DOM Navigation = The process of navigating through the structure of an HTML document using JavaScript.

    // .firstElementClild
    // .lastElementChild
    // .nextElementSibling
    // .previousElementSibling
    // .parentElement
    // .children

*/

const element = document.getElementById("fruits");
// const element2 = document.getElementById("vwgwtables"); // Carrots
// const element3 = document.getElementById("desserts"); // Cake
const firstChild = element.firstElementChild;
firstChild.style.backgroundColor = "yellow";

const ulElements = document.querySelectorAll("ul");
ulElements.forEach(ulElement => {
    const firstChild = ulElement.firstElementChild;
    firstChild.style.background = "red";
});

// ------- lastElementChild -----------
const lastElement = document.getElementById("vegetables");
const lastChild = element.lastElementChild;
lastChild.style.background = "green"; 

const ulLastElement = document.querySelectorAll("ul");
ulLastElement.forEach(ulLastElement => {
    const lastChild = ulLastElement.lastElementChild;
    lastChild.style.background = "green";
});

// ------- .nextElementSibling -----------
 const Sibling = document.getElementById("apple"); // ("fruits")
 const nextSibling = Sibling.nextElementSibling;
 nextSibling.style.backgroundColor = "yellow";


 // ------- .nextElementSibling -----------
 const siblings = document.getElementById("desserts");
 const prevSibling = siblings.previousElementSibling;
 prevSibling.style.backgroundColor = "blue";


  // ------- .parentElement -----------
  const parent = document.getElementById("ice cream");
  const parElement = parent.parentElement;
  parElement.style.backgroundColor = "silver";


 // ------- .children -----------
 const child = document.getElementById("vegetables");
 const chilElement = child.children;

//  console.log(chilElement);
Array.from(chilElement).forEach(childs => {
    childs.style.background = "pink";
});

// chilElement[1].style.backgroundColor = "skyblue";
//Accessing middle child to highlight