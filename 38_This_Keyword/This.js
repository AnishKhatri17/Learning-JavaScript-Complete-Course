/*
    this = reference to the object where THIS is used
    (the object depends on the immediate context)
    person.name = this.name
*/

const person1 = {
    name: "Spongebob",
    favFood: "hamburgers",
    sayHello: function() {console.log(`Hi! I am ${this.name}`)},
    eat: function() {console.log(`${this.name} is eating ${this.favFood}`)},
}

const person2 = {
    name: "Patrick",
    favFood: "pizza",
    sayHello: function() {console.log(`Hi! I am ${this.name}`)},
    eat: function() {console.log(`${this.name} is eating ${this.favFood}`)},
}

person1.sayHello();
person1.eat();

person2.sayHello();
person2.eat();

// ** Imp note: => function doesnot work with this keyword
// sayHello: () => {console.log("Noooooo")},

//console.log(this); // window object properties, see in console !!!!!!!!