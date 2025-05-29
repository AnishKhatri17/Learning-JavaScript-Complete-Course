/*
    super = super keyword is used in classes to call the constructor or
            access the properties and methods of a parent (superclass)
            this = this object
            super = the parent
*/

class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    move(speed){
        console.log(`The ${this.name} moves at the speed of ${speed} mph`);
    }
}

// name and age property is common is all so we assign it in the Parent class constructor and use the super() keyword.
class Rabbit extends Animal {
    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }

    run(){
        console.log(`This ${this.name} can Run.`);
        super.move(this.runSpeed);
    }
}

class Fish extends Animal{
    constructor(name, age, swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
    }

    swim(){
        console.log(`This ${this.name} can Swim.`);
        super.move(this.swimSpeed);
    }
}

class Hawk extends Animal{
    constructor(name, age, flySpeed){
        super(name, age);
        this.flySpeed = flySpeed;
    }

    fly(){
        console.log(`This ${this.name} can Fly.`);
        super.move(this.flySpeed);
    }
}

// creating objects of the clild classes
const rabbit = new Rabbit("Rabbit", 1, 50);
const fish = new Fish("Fish", 2, 10);
const hawk = new Hawk("Hawk", 3, 25);

// Lets check if this works after using super keyword
console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed); // This works ...
console.log(`\n`);

console.log(fish.name);
console.log(fish.age);
console.log(fish.swimSpeed); // This works ...
console.log(`\n`);

console.log(hawk.name);
console.log(hawk.age);
console.log(hawk.flySpeed); // This works ...
console.log(`\n`);

rabbit.run();
fish.swim();
hawk.fly();