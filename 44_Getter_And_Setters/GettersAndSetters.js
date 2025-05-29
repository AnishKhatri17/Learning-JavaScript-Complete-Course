// getter = special method that makes a property readable
// setter = special method that makes a property writable

//validate and modify a value when reading/writing a property

/*
class Rectangle{

    constructor(width, height){
        this.width = width;
        this.height = height;
    }
}

const rectangle = new Rectangle(-1000000, "Campus"); // This is not a valid values for height and width, for such case we need getters and setters
console.log(rectangle.width);
console.log(rectangle.height);
*/

//Example 1
class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth;
        }
        else{
            console.error("Width must be a positive number.");
        }
    }

    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight;
        }
        else{
            console.error("Height must be a positive number.");
        }
    }

    get width(){
        return `${this._width.toFixed(1)} cm`;
    }

     get height(){
        return `${this._height.toFixed(1)} cm`;
    }

    get area(){
        return `${(this._width * this._height).toFixed(1)} cm^2`;
    }

}

const rectangle = new Rectangle(5, 10);

// we can also update the values in getters
// rectangle.width = 20;
// rectangle.height = 50;

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);
console.log("\n\n\n");


//Example 2
class Person{
    constructor(firstName, lastName, age){
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
    }

    // Using setters to set the value.
    set firstName(newFirstName){
        if(typeof newFirstName === "string" && newFirstName.length > 0){
            this._firstName = newFirstName;
        }
            else{
                console.error("First name must be a non-empty string.");
            }
    }

    set lastName(newLastName){
        if(typeof newLastName === "string" && newLastName.length > 0){
                this._lastName = newLastName ;
        }
            else{
                console.error("Last name must be a non-empty string.");
            }
    }

    set age(newAge){
        if(typeof newAge === "number" && newAge >= 0){
            this._age = newAge;
        }
            else{
                console.error("Age must be a non-negative number.");
            }
    }

    // Now using getter to return the values.
    get firstName(){
         return this._firstName;
    }

    get lastName(){
        return this._lastName;
    }

    get age(){
        return this._age;
    }

    get fullInfo(){
        return `The full name is: ` + this._firstName + " " + this._lastName + " and age is " + this._age +" !";
    }
}

// const person = new Person(200, 500, "Age"); 
// This is invalid inputs and firstName, lastName should be a string type and age should be a number,
// This is why we use getters and setters in JavaScript

//Creating object of Person Class and passing values to the constructor
const person = new Person("Anish", "Khatri", 23);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(`\n`);
console.log(person.fullInfo);