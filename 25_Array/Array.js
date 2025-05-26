// array = a variable like structure that can hold more than 1 value ...


let fruits = ["apple", "orange", "banana"];

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]); // it is undefined.

// changing value of array element
fruits[0] = "coconut";
console.log(fruits[0]);

//add new element in an array [using 'push']
fruits.push("papaya");
console.log(fruits);

//remove the last element in an array [using 'pop']
fruits.pop();
console.log(fruits);

//Adding new element in the beginning [using 'unshift']
fruits.unshift("Mango");
console.log(fruits);

//Removing element in the beginning [using 'shift']
fruits.shift();
console.log(fruits);

//To find the length of an array there is a 'length' property
let numOfFruits = fruits.length;
console.log(`Length of the array is `+numOfFruits);

//To find the index of the element in an array
let index = fruits.indexOf("orange"); //index is 1
let index2 = fruits.indexOf("pomegranate"); // doesnot exist
console.log(index);
console.log(index2); // returns -1 if not found in the array as a boolean value .....


 //using for loop in an array

 for(let i = 0; i < fruits.length; i++)
    {
        console.log(fruits[i]);
    }

//displaying in reverse order
for(let i = fruits.length; i >= 0; i-- )
    {
            console.log(fruits[i]);
    }

//enhanced for loop 
    for(let fruit of fruits){
        console.log(fruit);

    }

// sorting and array....
console.log(`Using sort()`);

console.log(fruits.sort());  // sorting in an order
console.log(fruits.sort().reverse()); // reverse sorting