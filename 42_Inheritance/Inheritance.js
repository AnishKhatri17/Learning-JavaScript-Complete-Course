/*
    Inheritance = Inheritance allows a new class to inherit properties and methods from an existing class 
                  (Parent -> class) helps in code resuability.
*/

class Animal {
    alive = true;
    
    eat(){
        console.log(`This ${this.name} is eating`);
    }

    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}

// Extending Child Class from Parent Class
class Rabbit extends Animal{
    name = "Rabbit";

    //Child class can have their methods i.e Rabbit can run()
    run(){
        console.log(`This ${this.name} can Run !!!`);
    }
}

class Fish extends Animal{
    name = "Fish";
    //Child class can have their methods i.e Fish can swim()
    swim(){
        console.log(`This ${this.name} can Swim !!!`);
    }
}

class Hawk extends Animal{
    name = "Hawk";
    //Child class can have their methods i.e Hawk can fly()
    fly()
    {
        console.log(`This ${this.name} can Fly !!!`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk(); 

rabbit.alive = false; // changing rabbit to dead from alive.
if(rabbit.alive == true){
    console.log(`Rabbis is Alive`);
}

else{
    console.log(`Rabbit is now dead because Hawk killed it.`)
}

// extending Animal properties from 'Rabbit Class'
console.log(`Extending Animal properties from 'Rabbit Class'`);
rabbit.eat();
rabbit.sleep();
console.log(`\n`);

// extending Animal properties from 'Fish Class'
console.log(`Extending Animal properties from 'Fish Class'`);
fish.eat();
fish.sleep();
console.log(`\n`);

// extending Animal properties from 'Hawk Class'
console.log(`Extending Animal properties from 'Hawk Class'`);
hawk.eat();
hawk.sleep();
console.log(`\n`);

//Accessing own method of rabbit from Rabbit Class object.
rabbit.run();

//Accessing own method of fish from Fish Class object.
fish.swim();

//Accessing own method of hawk from Hawk Class object.
hawk.fly();

// But A clild class cannot use methods and properties of another child class..
// hawk.swim(); 
// This is throw an error because swim() method only belongs to "Fish Class" and can be accessed only by Fish Class object
