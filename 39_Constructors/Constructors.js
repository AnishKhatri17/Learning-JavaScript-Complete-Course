// constructors = special method for defining the properties and methods of objects


function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color
    this.drive = function(){console.log(`You drive the ${this.model}`)}
}

const car1 = new Car("Ford", "Mustang" , 2024, "red");
const car2 = new Car("Tesla", "Camaro", 2025 ,"blue");
const car3 = new Car("Dodge", "Charger", 2026, "yellow");

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);

console.log(car3.make);
console.log(car3.model);
console.log(car3.year);
console.log(car3.color);


car1.drive();
car2.drive();
car3.drive();


        //Example 2
function Students(name, roll, address, rank){
    this.name = name,
    this.roll = roll,
    this.address = address,
    this.rank = rank,
    this.remark = function(){console.log(`${this.name}, Your Rank is ${this.rank} in your class.`)}
}

let student1 = new Students("Anish", 4, "Kathmandu", "First");
let student2 = new Students("Archana", 5, "Morang", "Second");
let student3 = new Students("Sarad", 28, "Pokhara", "Third");
let student4 = new Students("Raman", 24, "Morang", "Fourth");

console.log(`Student : ${student1.name}'s details .......`);
console.log(student1.name);
console.log(student1.roll);
console.log(student1.address);
console.log(student1.rank);

console.log(`Student : ${student2.name}'s details .......`);
console.log(student2.name);
console.log(student2.roll);
console.log(student2.address);
console.log(student2.rank);

console.log(`Student : ${student3.name}'s details .......`);
console.log(student3.name);
console.log(student3.roll);
console.log(student3.address);
console.log(student3.rank);

console.log(`Student : ${student4.name}'s details .......`);
console.log(student4.name);
console.log(student4.roll);
console.log(student4.address);
console.log(student4.rank);

student1.remark();
student2.remark();
student3.remark();
student4.remark();