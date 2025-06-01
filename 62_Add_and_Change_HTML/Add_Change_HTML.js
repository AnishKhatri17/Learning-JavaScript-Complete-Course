// --------------- EXAMPLE 1 <h> ----------------------

//STEP 1: CERATE THE ELEMENT
const newH1 = document.createElement("h1");

//STEP 2: ADD ATTRIBUTES/PROPERTIES
newH1.textContent = "I love coding !!";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

//STEP 3: APPEND ELEMENT TO DOM
// document.body.append(newH1); //last ma aauxa
// document.body.prepend(newH1);

// document.getElementById("box2").append(newH1);
//  document.getElementById("box2").prepend(newH1);

// const box2 = document.getElementById("box3");
// document.body.insertBefore(newH1, box3);

const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newElement, currentElement);
document.body.insertBefore(newH1, boxes[3]);


// REMOVE THE HTML
document.body.removeChild(newH1);
document.getElementById("box1").removeChild(newH1); //if it is inside a box
