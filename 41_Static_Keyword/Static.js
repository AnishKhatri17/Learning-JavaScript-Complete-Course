// static = keyword that defines properties or methods that belong to class itself rather than the object created
//          from that class (class owns anything static, not the objects)


// Example 1: 
class MathUtil{
    static PI = 3.14159;

    static getDiameter(radius){
        return radius * 2;
    }

    static getCircumference(radius){
        return 2 * this.PI * radius;
    }

    static getArea(radius){
        return this.PI * radius * radius;
    }
}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumference(10));
console.log(MathUtil.getArea(10));


// Example 2:
class User{
    static userCount = 0;

    constructor(username){
        this.username = username;
        User.userCount++;
    }

    // static method ...
    static getUserCount(){
        console.log(`There are ${User.userCount} users online.`)
    }

    sayHello(){
        console.log(`Hello, my username is ${this.username}`);
    }
}

const user1 = new User("Anish");
const user2 = new User("Ashma");
const user3 = new User("Rustam");
const user4 = new User("Unique");

// console.log(user1.username);
// console.log(user2.username);
// console.log(user3.username);
// console.log(user4.username);
user1.sayHello();
user2.sayHello();
user3.sayHello();
user4.sayHello();
//console.log(user1.userCount); // user1 is an object and it belongs to class not an object so can't access it

console.log(User.userCount);
// Accessing Static Method inside a Class
User.getUserCount();