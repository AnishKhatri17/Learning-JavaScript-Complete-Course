// const = a variable that can't be changed ...

/*
const PI = 3.14159;
let radius;
let circumference;

radius = window.prompt(`Enter the radius of a circle :`);
radius = Number(radius);

PI = 420.66; // this will be a error

circumference = 2 * PI * radius;
console.log(circumference);
*/

const PI = 3.14159;
let radius;
let circumference;

document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myh3").textContent = `The circumference of the circle is : ` + circumference + `cm`;
}