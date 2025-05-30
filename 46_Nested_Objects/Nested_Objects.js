/*
    Nested objects = Objects inside of other objects.
                     Allows us to represent more complex data structures 
                     Clild object is enclosed by a parent object

                     person{Address{}, ContactInfo{}}
                     ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}
*/

const person = {
    fullName : "Spongebob Squarepants",
    age : 30,
    isStudent: true,
    hobbies : ["karate", "jellyfishing", "cooking"],
    address: {
        street: "124 Couch St.",
        city: "Bikini Bottom",
        country: "Int. Water",
    }
}

console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies);
console.log(person.hobbies[0]);
// console.log(person.address);
console.log(person.address.street);
console.log(person.address.city);
console.log(person.address.country);

// looping through the properties of address we use for loop like this
for(const property in person.address){
    console.log(person.address[property]);
}


//Example 2
console.log(`\n\nSecond Example.`);
class Person{
    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);

    }
}

class Address{
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;

    }
}

const person1 = new Person("Spongebob Squarepants", 30, "124 Conch Street.", "Bikini Bottom", "Int'l Waters");
const person2 = new Person("Patrick Star", 37, "126 Conch Street.", "Bikini Bottom", "Int'l Waters");
const person3 = new Person("Squigward", 55, "120 Conch Street.", "Bikini Bottom", "Int'l Waters");

console.log(person1.name);
console.log(person1.address);
console.log("The street of Spongebob is : "+person1.address.street+"\n");
console.log(person2.name);
console.log("The street of Patrick is : "+person2.address.street+"\n");
console.log(person3.name);
console.log("The street of Squidward is : "+person3.address.street);