const myButton = document.getElementById("myButton");
const myImage = document.getElementById("myImage");

// JavaScript logic to hide an HTML element
// display hides the Html element but doesnot preserve the space for the hidden element
// myButton.addEventListener("click", event => {

//     if(myImage.style.display === "none"){
//         myImage.style.display = "block";
//     }

//     else{
//         myImage.style.display = "none";
//         myButton.textContent = "Show"
//     }
// });

// visibility is used to preserve the space for the hidden element..
myButton.addEventListener("click", event => {

    if(myImage.style.visibility === "hidden"){
        myImage.style.visibility = "visible";
    }

    else{
        myImage.style.visibility = "hidden";
        myButton.textContent = "Show"
    }
});