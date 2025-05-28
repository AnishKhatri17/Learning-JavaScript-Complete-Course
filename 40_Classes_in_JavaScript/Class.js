/*
    class = (ES6) provides a more structured and cleaner way to work with objects compared to traditional constructor functions
    eg. static keyword, encapsulation, inheritabce
*/


class Products{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.05; // 5% sales tax 

const product1 = new Products("Shirt", 19.99);
const product2 = new Products("Pants", 22.50);
const product3 = new Products("Underwear", 100.00);

product1.displayProduct();
const total1 = product1.calculateTotal(0.05);
console.log(`Your total price (with tax) is: $${total1.toFixed(2)}`);

product2.displayProduct();
const total2 = product2.calculateTotal(salesTax);
console.log(`Your total price (with tax) is: $${total2.toFixed(2)}`);

product3.displayProduct();
const total3 = product3.calculateTotal(salesTax);
console.log(`Your total price (with tax) is: $${total3.toFixed(2)}`);
