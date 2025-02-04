// (1) Write a JavaScript program to create a class called "Person" with properties for name, age and country. Include a method to display the person's details. Create two instances of the 'Person' class and display their details.



class Person {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }

    displayDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Country: ${this.country}`);
    }
}

const person1 = new Person('Smit', 30, 'USA');
const person2 = new Person('Dhruv', 25, 'Canada');

console.log("Person 1 Details:");
person1.displayDetails();

console.log("\nPerson 2 Details:");
person2.displayDetails();



// (2) Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area and perimeter.


class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}

const myRectangle = new Rectangle(5, 10);

const area = myRectangle.calculateArea();
const perimeter = myRectangle.calculatePerimeter();

console.log(`Rectangle Width: ${myRectangle.width}`);
console.log(`Rectangle Height: ${myRectangle.height}`);
console.log(`Area: ${area}`);
console.log(`Perimeter: ${perimeter}`);



// (3) Write a JavaScript program that creates a class called 'Vehicle' with properties for make, model, and year. Include a method to display vehicle details. Create a subclass called 'Car' that inherits from the 'Vehicle' class and includes an additional property for the number of doors. Override the display method to include the number of doors.


class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    displayDetails() {
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
    }
}
class Car extends Vehicle {
    constructor(make, model, year, numberOfDoors) {
        super(make, model, year); 
        this.numberOfDoors = numberOfDoors; 
    }
    displayDetails() {
        super.displayDetails(); 
        console.log(`Number of Doors: ${this.numberOfDoors}`);
    }
}
const myCar = new Car('Toyota', 'Camry', 2020, 4);

console.log("Car Details:");
myCar.displayDetails();



// (4) Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance. Include methods to deposit and withdraw money from the account. Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.


class BankAccount {
    constructor(accountNumber, balance = 0) {
      this.accountNumber = accountNumber;
      this.balance = balance;
    }
    deposit(amount) {
      if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited $${amount}. New balance: $${this.balance}`);
      } else {
        console.log("Deposit amount must be greater than zero.");
      }
    }
    withdraw(amount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrew $${amount}. Remaining balance: $${this.balance}`);
      } else if (amount > this.balance) {
        console.log("Insufficient funds.");
      } else {
        console.log("Withdrawal amount must be greater than zero.");
      }
    }
  }
  const account1 = new BankAccount("12345678", 500);
  const account2 = new BankAccount("87654321", 1000);
  
  console.log(`Account 1 initial balance: $${account1.balance}`);
  account1.deposit(200);  
  account1.withdraw(100); 
  
  console.log(`\nAccount 2 initial balance: $${account2.balance}`);
  account2.deposit(500);  
  account2.withdraw(2000); 


// (5) Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area. Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area calculation method. Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for the 'Triangle' class.





// (6) Write a JavaScript program that creates a class called 'Employee' with properties for name and salary. Include a method to calculate annual salary. Create a subclass called 'Manager' that inherits from the 'Employee' class and adds an additional property for department. Override the annual salary calculation method to include bonuses for managers. Create two instances of the 'Manager' class and calculate their annual salary.


class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary; 
    }
    annualSalary() {
        return this.salary * 12; 
    }
}

class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary); 
        this.department = department; 
    }
    annualSalary() {
        const baseSalary = super.annualSalary(); 
        const bonus = baseSalary * 0.10; 
        return baseSalary + bonus; 
    }
}
const manager1 = new Manager('Dhruv', 5000, 'Sales');
const manager2 = new Manager('Smit', 6000, 'Marketing');

console.log(`Annual Salary of ${manager1.name} (Department: ${manager1.department}): $${manager1.annualSalary().toFixed(2)}`);
console.log(`Annual Salary of ${manager2.name} (Department: ${manager2.department}): $${manager2.annualSalary().toFixed(2)}`);




  
//(7) Write a JavaScript program that creates a class Book with properties for title, author, and publication year. Include a method to display book details. Create a subclass called 'Ebook' that inherits from the 'Book' class and includes an additional property for book price. Override the display method to include the book price. Create an instance of the 'Ebook' class and display its details.


class Book {
    constructor(title, author, publicationYear) {
        this.title = title;
        this.author = author;
        this.publicationYear = publicationYear;
    }
    displayDetails() {
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Publication Year: ${this.publicationYear}`);
    }
}
class Ebook extends Book {
    constructor(title, author, publicationYear, price) {
        super(title, author, publicationYear); 
        this.price = price; 
    }
    displayDetails() {
        super.displayDetails(); 
        console.log(`Price: $${this.price.toFixed(2)}`); 
    }
}
const myEbook = new Ebook('JavaScript: The Good Parts', 'Douglas Crockford', 2008, 29.99);

console.log("Ebook Details:");
myEbook.displayDetails();


//(8) Write a JavaScript program that creates a class called 'Animal' with properties for species and sound. Include a method to make the animal's sound. Create a subclass called 'Dog' that inherits from the 'Animal' class and adds an additional property for color. Override the make sound method to include the dog's color. Create an instance of the 'Dog' class and make it make its sound.

class Animal {
    constructor(species, sound) {
        this.species = species;
        this.sound = sound;
    }
    makeSound() {
        console.log(`${this.species} makes a sound: ${this.sound}`);
    }
}
class Dog extends Animal {
    constructor(species, sound, color) {
        super(species, sound); 
        this.color = color; 
    }
    makeSound() {
        console.log(`The ${this.color} ${this.species} barks: ${this.sound}`);
    }
}
const myDog = new Dog('Dog', 'Woof', 'brown');
myDog.makeSound(); 


// (9) Write a JavaScript program that creates a class called Bank with properties for bank names and branches. Include methods to add a branch, remove a branch, and display all branches. Create an instance of the Bank class and perform operations to add and remove branches.



// (10) Write a JavaScript program that creates a class called Product with properties for product ID, name, and price. Include a method to calculate the total price by multiplying the price by the quantity. Create a subclass called PersonalCareProduct that inherits from the Product class and adds an additional property for the warranty period. Override the total price calculation method to include the warranty period. Create an instance of the PersonalCareProduct class and calculate its total price.




class Product {
    constructor(productId, name, price) {
        this.productId = productId; 
        this.name = name; 
        this.price = price; 
    }
    totalPrice(quantity) {
        return this.price * quantity; 
    }
}
class PersonalCareProduct extends Product {
    constructor(productId, name, price, warrantyPeriod) {
        super(productId, name, price); 
        this.warrantyPeriod = warrantyPeriod; 
    }
    totalPrice(quantity) {
        const baseTotal = super.totalPrice(quantity); 
        const warrantyCost = this.warrantyPeriod * 5; 
        return baseTotal + warrantyCost;
    }
}
const myPersonalCareProduct = new PersonalCareProduct('001', 'Moisturizing Cream', 20, 2); 

const quantity = 3;
const total = myPersonalCareProduct.totalPrice(quantity);

console.log(`Total price for ${quantity} units of ${myPersonalCareProduct.name}: $${total.toFixed(2)}`);













