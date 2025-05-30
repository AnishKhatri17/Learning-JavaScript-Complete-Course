// Array of Objects .....

const fruits =  [{name: "apple", color: "red", calories: 90},
                 {name: "orange", color: "orange", calories: 83},
                 {name: "banana", color: "yellow", calories: 60}, 
                 {name: "coconut", color: "white", calories: 76}, 
                 {name: "pineapple", color: "yellow", calories: 80}];

// Writing codes for this JavaScript concept
//Fruit 1 details 
console.log(fruits[0].name);
console.log(fruits[0].color);
console.log(fruits[0].calories);

//Fruit 2 details 
console.log(fruits[1].name);
console.log(fruits[1].color);
console.log(fruits[1].calories);

//Fruit 3 details 
console.log(fruits[2].name);
console.log(fruits[2].color);
console.log(fruits[2].calories);

//To add new object use push object
fruits.push({name: "grapes", color: "purple", calories: 105});
// Added another fruit using push method and displaying name of the added object.
console.log("Name of the added fruit: "+fruits[5].name+"\ncolor is: "+fruits[5].color+"\ncalories is: "+fruits[5].calories);

//Adding another fruit to POP (remove) it...
fruits.push({name: "guava", color: "green", calories: 140});
console.log(fruits[6].name); // prints Guava in the console.

//Now pop method to remove the added guava fruit.
fruits.pop();
console.log(fruits); // no guava in the array now. (pop method)

fruits.splice(1, 2); // removes index 1 and 2 from the array...
console.log(fruits);

// -------- for each() ----------
fruits.forEach(fruit => console.log(fruit.calories));
fruits.forEach(fruit => console.log(fruit.name));
fruits.forEach(fruit => console.log(fruit.color));


// -------- map() method ----------

const fruitNames = fruits.map(fruit => fruit.name);
const fruitColors = fruits.map(fruit => fruit.color);
const fruitCalories = fruits.map(fruit => fruit.calories);
console.log(fruitNames);
console.log(fruitColors);
console.log(fruitCalories);


// -------- filter() method ----------
const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
const lowerCalories = fruits.filter(fruit => fruit.calories > 100);

console.log(`Fruits with yellow color are: \n`);
console.log(yellowFruits);
console.log(lowerCalories);


// -------- reduce() method ----------

const maxFruit = fruits.reduce((max, fruit) => fruit.calories > max.calories? fruit : max);
const minFruit = fruits.reduce((min, fruit) => fruit.calories < min.calories? fruit : min);
console.log(maxFruit.calories);
console.log(minFruit.calories);
