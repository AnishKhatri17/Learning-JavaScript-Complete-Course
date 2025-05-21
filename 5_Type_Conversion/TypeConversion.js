// Type Conversion = change the datatype of a value to another 
//                    (strings, nnumbers, booleans)


/*
       // Example 1
let age = window.prompt("Enter your age :");  //eg: 23(age number) is treated as a strins 

age+= 1; //this will concatinate instead of adding the value 1 
console.log(age + typeof age); // 231 instead of 24 so type conversion is needed.
*/

// Now using type convertion string to number...

            // Example 2
let age = window.prompt("Enter your age :");

age = Number(age);  // Now age variable is converted to a number.
age+=1 ;
console.log(age, typeof age);


 // Example 3
 let x = "Saraswati";
 let y = "Saraswati";
 let z = "Saraswati";

 x = Number(x);     //converts to number datatype
 y = String(y);     //converts to string datatype
 z = Boolean(z);    //converts to boolean datatype

 console.log('First Example');
 console.log(x, typeof x);
 console.log(y, typeof y);
 console.log(z, typeof z);
 // lets see the results ...


 // Example 4
 let x2 = "0";
 let y2 = "0";
 let z2 = "0";

 x2 = Number(x2);     //converts to number datatype
 y2 = String(y2);     //converts to string datatype
 z2 = Boolean(z2);    //converts to boolean datatype

 console.log('Second Example');
 console.log(x2, typeof x2);
 console.log(y2, typeof y2);
 console.log(z2, typeof z2);
 // lets see the results ...


 // Example 5
 let x3 = "";
 let y3 = "";
 let z3 = "";

 x3 = Number(x3);     //converts to number datatype
 y3 = String(y3);     //converts to string datatype
 z3 = Boolean(z3);    //converts to boolean datatype

 console.log('Third Example');
 console.log(x3, typeof x3);
 console.log(y3, typeof y3);
 console.log(z3, typeof z3);
 // lets see the results ...


 // Example 6
 let x4;
 let y4;
 let z4;

 x4 = Number(x4);     //converts to number datatype
 y4 = String(y4);     //converts to string datatype
 z4 = Boolean(z4);    //converts to boolean datatype

 console.log('Fourth Example');
 console.log(x4, typeof x4);
 console.log(y4, typeof y4);
 console.log(z4, typeof z4);
 // lets see the results ...