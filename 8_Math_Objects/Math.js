// Math = built-in object that provides a collection of properties and methods

let x = -3.76;
let y = 2;
let z;

// z = Math.round(x);  //Rounds the cofficient number 
// z = Math.floor(x);     //Eliminates extra decimal values
// z = Math.ceil(x);       //Always gives rounded up value
// z = Math.trunc(x);      //Eliminates extra decimal values
// z = Math.pow(x, y);     //Gives power of a number
// z = Math.sqrt(x);       //Gives square root of a number
// z = Math.log(x);        //Gives log value
// z = Math.sin(x);        //Gives sin value
// z = Math.cos(x);         //Gives cos value
// z = Math.tan(x);         //Gives tan value
z = Math.abs(x);        //Gives absolute value eliminates - sign
// z = Math.sign(x);        //Gives the sign of the value

console.log(z);

//Maximum and minimum values
let a = 40;
let b = 10;
let c = 60
let max = Math.max(a, b, c);
let min = Math.min(a, b, c);

console.log(`The maximum value is : `+ max);
console.log(`The minimum value is : `+ min);