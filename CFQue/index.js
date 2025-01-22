//(1)Hotel Room Reservation System:
// Question: Suppose you’re building a reservation system for a hotel. Write a constructor function Room that creates a room object with properties like roomNumber, type, price, and isAvailable. Hint: Use the new keyword to create new room objects.


function Room(roomNumber, type, price, isAvailable) {
    this.roomNumber = roomNumber;
    this.type = type;
    this.price = price;
    this.isAvailable = isAvailable;
  }
  
  Room.prototype.bookRoom = function () {
    if (this.isAvailable) {
      this.isAvailable = false;
      return `Room ${this.roomNumber} has been booked.`;
    } else {
      return `Room ${this.roomNumber} is not available.`;
    }
  };
  
  Room.prototype.releaseRoom = function () {
    this.isAvailable = true;
    return `Room ${this.roomNumber} is now available.`;
  };
  
  const room1 = new Room(101, "Deluxe", 150, true);
  const room2 = new Room(102, "Standard", 100, false);
  
  console.log(room1.bookRoom());
  console.log(room1.releaseRoom());
  

// (2) Online Course Management:
//   Question: Design a constructor function Course that generates an object representing an online course with properties like title, instructor, duration, and studentsEnrolled. Hint: Use the this keyword to assign values to each property.


function Course(title, instructor, duration, studentsEnrolled) {
    this.title = title;
    this.instructor = instructor;
    this.duration = duration;
    this.studentsEnrolled = studentsEnrolled;
  }
  
  const jsCourse = new Course("JavaScript Basics", "John Doe", "4 weeks", 50);
  
  console.log(jsCourse.title);
  console.log(jsCourse.instructor);
  console.log(jsCourse.duration);
  console.log(jsCourse.studentsEnrolled);



// (3) Digital Wallet:
// Question: Create a constructor function Wallet that initializes a wallet object with properties like ownerName, balance, and currency. Include a method that allows the owner to add money to the wallet. Hint: Add methods inside the constructor to handle wallet operations.

function Wallet(ownerName, balance, currency) {
    this.ownerName = ownerName;
    this.balance = balance;
    this.currency = currency;
  
    this.addMoney = function (amount) {
      this.balance += amount;
      console.log(
        `Added ${amount} ${this.currency}. New balance: ${this.balance} ${this.currency}.`
      );
    };
  
    this.getDetails = function () {
      console.log(
        `Owner: ${this.ownerName}, Balance: ${this.balance} ${this.currency}`
      );
    };
  }
  
  const myWallet = new Wallet("Alice", 100, "USD");
  myWallet.getDetails();
  myWallet.addMoney(50);
  myWallet.getDetails();



// (4)City Weather Tracker:
// Question: Write a constructor function Weather that creates a weather object with properties like city, temperature, humidity, and forecast. Create a method to update the forecast. Hint: Use the constructor to set initial values, and add a method to update properties.


function Weather(city, temperature, humidity, forecast) {
    this.city = city;
    this.temperature = temperature;
    this.humidity = humidity;
    this.forecast = forecast;
  
    this.updateForecast = function (newForecast) {
      this.forecast = newForecast;
      console.log(
        `The forecast for ${this.city} has been updated to: ${this.forecast}`
      );
    };
  
    this.getWeatherDetails = function () {
      console.log(
        `City: ${this.city}, Temperature: ${this.temperature}°C, Humidity: ${this.humidity}%, Forecast: ${this.forecast}`
      );
    };
  }
  
  const cityWeather = new Weather("New York", 25, 60, "Sunny");
  cityWeather.getWeatherDetails();
  cityWeather.updateForecast("Rainy");
  cityWeather.getWeatherDetails();





// (5)School Student Enrolment:
// Question: Write a constructor function Student that generates a student object with properties name, rollNumber, grade, and subjects. Add a method to add new subjects to the student’s subject list. Hint: Use the new keyword to create each student, and add a method to modify the object’s state


function Student(name, rollNumber, grade, subjects) {
    this.name = name;
    this.rollNumber = rollNumber;
    this.grade = grade;
    this.subjects = subjects;
  
    this.addSubject = function (newSubject) {
      this.subjects.push(newSubject);
      console.log(`Subject "${newSubject}" has been added for ${this.name}.`);
    };
  
    this.getDetails = function () {
      console.log(
        `Name: ${this.name}, Roll Number: ${this.rollNumber}, Grade: ${
          this.grade
        }, Subjects: ${this.subjects.join(", ")}`
      );
    };
  }
  
  const stud = new Student("John Doe", 101, "10th", ["Math", "Science"]);
  stud.getDetails();
  stud.addSubject("History");
  stud.getDetails();











