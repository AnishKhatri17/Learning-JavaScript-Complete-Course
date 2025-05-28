/*
    object = a collection of related properties and/or methods can represent 
             real world objects (people, products, places)

             object = {key: value, function()}
*/

let person1 = {
    firstName: "Spongebob",
    lastName: "Squarepant",
    age: 30,
    isEmployed: true,
    sayHello: function(){console.log(`Hi! I am Spongebob`)},
    eat: function(){console.log(`I am Spongebob and I'm eating a Krabby Patty.`)},
}

let person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 40,
    isEmployed: false,
    sayHello: () => {console.log(`Hi! I am Patrick ..`)}, //arrow function
    eat: function(){console.log(`I am Patrick and I'm eating a Chicken and Pizza.`)},
}

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);


person1.sayHello();
person2.sayHello();

person1.eat();
person2.eat();