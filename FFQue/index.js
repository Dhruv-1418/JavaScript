//(1) E-commerce Inventory Management:
// Question: Imagine you have an e-commerce site that sells electronics. You need a function that creates a product with properties like name, price, and category. Create a factory function called createProduct that returns an object for each product. Hint: Think of the factory function as a "blueprint" that creates different product objects with specified properties.


function createProduct(name, price, category) {
    let object = {};
    (object.name = name),
      (object.price = price),
      (object.category = category),
      (object.displayInfo = function () {
        console.log(
          `Product: ${this.name}, Price: $${this.price}, Category: ${this.category}`
        );
      });
    return object;
  }
  
  const laptop = createProduct("Laptop", 1200, "Electronics");
  const smartphone = createProduct("Smartphone", 800, "Electronics");
  
  laptop.displayInfo();
  smartphone.displayInfo();


// (2) Student Report Card Generator:
// Question: Write a factory function createReportCard that generates a report card for each student with properties such as name, grade, and subject. This function should return an object for each student. Hint: Each student can have different grades, so think about how each object represents an individual student's information.


function createReportCard(name, subject, grade) {
    let obj2 = {};
  
    (obj2.name = name),
      (obj2.subject = subject),
      (obj2.grade = grade),
      (obj2.displayReport = function () {
        console.log(
          `Student: ${this.name}, Subject: ${this.subject}, Grade: ${this.grade}`
        );
      });
    return obj2;
  }
  
  const student1 = createReportCard("Alice", "Mathematics", "A");
  const student2 = createReportCard("Bob", "Science", "B+");
  
  student1.displayReport();
  student2.displayReport();

// (3)Car Rental Service:
// Question: Suppose you run a car rental service. Write a factory function createCar that creates a car object with properties like model, rentalRate, and availability. Use this to generate car instances for each vehicle in your fleet. Hint: Each car will have different values for these properties, so use a function that takes parameters for each property.


function createCar(model, rentalRate, availability) {
    let obj3 = {};
  
    (obj3.model = model),
      (obj3.rentalRate = rentalRate),
      (obj3.availability = availability),
      (obj3.rentCar = function () {
        if (this.availability) {
          this.availability = false;
          return `The ${this.model} has been rented.`;
        } else {
          return `Sorry, the ${this.model} is not available.`;
        }
      });
  
    obj3.returnCar = function () {
      this.availability = true;
      return `The ${this.model} has been returned and is now available.`;
    };
    obj3.getInfo = function () {
      return `Model: ${this.model}, Rental Rate: $${
        this.rentalRate
      }/day, Available: ${this.availability ? "Yes" : "No"}`;
    };
  
    return obj3;
  }
  
  const car1 = createCar("Toyota Corolla", 40, true);
  const car2 = createCar("Honda Civic", 50, false);
  
  console.log(car1.getInfo());
  console.log(car1.rentCar());
  console.log(car1.returnCar());


// (4)Library Book Generator:
// Question: Create a factory function createBook that generates a book object with properties such as title, author, ISBN, and availableCopies. Use this function to add books to a library inventory. Hint: Each book should have unique details, so think about how to pass these as arguments to the function.


function createBook(title, author, ISBN, availableCopies) {
    let obj4 = {};
  
    (obj4.title = title),
      (obj4.author = author),
      (obj4.ISBN = ISBN),
      (obj4.availableCopies = availableCopies),
      (obj4.getInfo = function () {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.ISBN}, Available Copies: ${this.availableCopies}`;
      });
    return obj4;
  }
  
  const book1 = createBook("1984", "George Orwell", "1234567890", 5);
  const book2 = createBook(
    "To Kill a Mockingbird",
    "Harper Lee",
    "0987654321",
    2
  );
  
  console.log(book1.getInfo());
  console.log(book2.getInfo());

// (5)Employee Badge Creator:
// Question: Your company needs to generate badges for employees with properties like name, id, department, and position. Write a factory function createEmployeeBadge that returns an employee badge object. Hint: Use parameters in your factory function to create unique badge information for each employee.



function createEmployeeBadge(name, id, department, position) {
    let obj5 = {};
    (obj5.name = obj5),
      (obj5.id = id),
      (obj5.department = department),
      (obj5.position = position),
      (obj5.getBadgeInfo = function () {
        return `Name: ${this.name}, ID: ${this.id}, Department: ${this.department}, Position: ${this.position}`;
      });
    return obj5;
  }
  
  const employee1 = createEmployeeBadge(
    "Alice Johnson",
    "E123",
    "Engineering",
    "Software Engineer"
  );
  const employee2 = createEmployeeBadge(
    "Bob Smith",
    "E124",
    "Marketing",
    "Marketing Manager"
  );
  
  console.log(employee1.getBadgeInfo());
  console.log(employee2.getBadgeInfo());




  























