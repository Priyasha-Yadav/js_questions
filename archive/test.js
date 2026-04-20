// // // class Person{

// // //  test(age){
// // //         this.age = 10;
// // //         console.log(age);
// // //     }
// // // }

// // // const student1 = new Person();
// // // student1.test(10);




// // let animals = {
// //     eats: true,
// //     walk: function () {
// //         console.log('Animal Walks');
// //     }
// // }

// // let rabbit = Object.create(animals);
// // rabbit.lazy = true;
// // console.log(rabbit.__proto__);
// // animal.__proto__.run = true;
// // console.log(rabbit.__proto__)



// // /* The code snippet below is demonstrating prototypal inheritance in JavaScript */

// // let vehicle = {
// //     hasWheels: true
// // };

// // let bike = Object.create(vehicle);
// // bike.type = "Mountain Bike";

// // let electricBike = Object.create(bike);
// // electricBike.hasBattery = true;

// // console.log(electricBike.hasWheels)
// // console.log(Object.getPrototypeOf(electricBike))
// // console.log(electricBike.__proto__)



// // let userPrototype = {
// //     login: function () {
// //         console.log(`${this.name} is logging in...`)
// //     },
// //     logout: function () {
// //         console.log(`${this.name} is logging out...`)
// //     }
// // };

// // function createUser(name, role) {
// //     let user = Object.create(userPrototype);
// //     user.name = name;
// //     user.role = role;
// //     return user;
// // }

// // let admin = createUser("User", "Admin");
// // admin.login();
// // admin.logout();



// // // Q1. Create two objects: animal and dog. The dog object should inherit from animal and have its own bark() method. The animal object should have an eat() method that the dog object can also access.

// // let animal = {
// //     eat: function () {
// //         console.log("Meal Time! 🍽️");
// //     }
// // }

// // let dog = Object.create(animal);

// // dog.bark = function () {
// //     console.log("Woof! 🐶");
// // }

// // dog.eat();
// // dog.bark();

// // // Q2. Write a constructor function laptop that takes brand and model as arguments. Attach a showSpecs() method to Laptop. Prototype to display the laptop's brand and model.

// // function laptop(brand, model) {
// //     this.brand = brand;
// //     this.model = model;
// // };

// // laptop.prototype.showSpecs = function () {
// //     console.log(`Brand: ${this.brand}, Model: ${this.model}`);
// // }

// // let device = new laptop("Macbook", "Air");
// // device.showSpecs();


// let arr = [1,2,3,4,5];
// Array.prototype.sum = function sum(){
// return this.reduce((curr, acc) => acc + curr, 0);
// }
// console.log(arr.sum());

// Array.prototype.sumOfSquare = function(){
//     return this.map(x => x*x).reduce((curr, acc) => acc + curr, 0);
// }

// console.log(arr.sumOfSquare());

