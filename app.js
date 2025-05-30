// ❌ First way (Not recommended)
// Manually creating multiple user objects with repeated structure and methods.
// This is not DRY (Don't Repeat Yourself) and leads to unnecessary code duplication.


// const user = {
//   name: "Bob",
//   age: 30,
//   greet() {
//     console.log(`Hello, my name is ${this.name}.`);
//   },
//   address: {
//     city: "Los Angeles",
//     zip: "90001",
//     getFullAddress() {
//       console.log(`City: ${this.city}, ZIP: ${this.zip}`);
//     }
//   }
// };

// const user2 = {
//   name: "Emily",
//   age: 28,
//   greet() {
//     console.log(`Hello, my name is ${this.name}.`);
//   },
//   address: {
//     city: "Chicago",
//     zip: "60601",
//     getFullAddress() {
//       console.log(`City: ${this.city}, ZIP: ${this.zip}`);
//     }
//   }
// };

// const user3 = {
//   name: "Daniel",
//   age: 35,
//   greet() {
//     console.log(`Hello, my name is ${this.name}.`);
//   },
//   address: {
//     city: "Houston",
//     zip: "77001",
//     getFullAddress() {
//       console.log(`City: ${this.city}, ZIP: ${this.zip}`);
//     }
//   }
// };

// const user4 = {
//   name: "Sophia",
//   age: 22,
//   greet() {
//     console.log(`Hello, my name is ${this.name}.`);
//   },
//   address: {
//     city: "Seattle",
//     zip: "98101",
//     getFullAddress() {
//       console.log(`City: ${this.city}, ZIP: ${this.zip}`);
//     }
//   }
// };

// const user5 = {
//   name: "Liam",
//   age: 40,
//   greet() {
//     console.log(`Hello, my name is ${this.name}.`);
//   },
//   address: {
//     city: "Miami",
//     zip: "33101",
//     getFullAddress() {
//       console.log(`City: ${this.city}, ZIP: ${this.zip}`);
//     }
//   }
// };

// // Calls
// user.greet();
// user.address.getFullAddress();

// user2.greet();
// user2.address.getFullAddress();

// user3.greet();
// user3.address.getFullAddress();

// user4.greet();
// user4.address.getFullAddress();

// user5.greet();
// user5.address.getFullAddress();



// ✅ Second way (Better - Factory Function)
// A function that returns a user object with custom values.
// Methods are still duplicated per instance (not memory efficient).

// function createUser(name, age, city, zip){
//     const user = {};
//     user.name = name;
//     user.age = age;
//     user.greet =  function(){
//     console.log(`Hello, my name is ${this.name}.`);
//   };
//   user.address =   {
//     city: city,
//     zip: zip,
//     getFullAddress() {
//       console.log(`City: ${this.city}, ZIP: ${this.zip}`);
//     }
// }
//     return user;
// }



// const user1 = createUser("Naeem Khan", 28, 'kp', 19220);
// user1.greet();
// user1.address.getFullAddress();

// const user2 = createUser("Shuaib Khan", 24, 'swat', 19200);
// user2.greet();
// user2.address.getFullAddress();




// ✅✅ Third way (Even Better - Shared Methods)
// Methods are defined once in a separate object and shared among user instances.
// This saves memory and follows DRY principle.

// const userMethods = {
//      greet :  function(){
//    return `Hello, my name is ${this.name}.`;
//   },
//     getFullAddress() {
//      return `City: ${this.city}, ZIP: ${this.zip}`;
// }
// }

// function createUser(name, age, city, zip){
//     const user = {};
//     user.name = name;
//     user.age = age;
//     user.city = city;
//     user.zip = zip;
//     user.greet = userMethods.greet;
//     user.getFullAddress = userMethods.getFullAddress;
//     return user;
// }

// const user1 = createUser("Asad", 22, "Islamabad", 12920);

// console.log(user1.greet());



// ✅✅✅ Fourth way (Best Practice - Prototype Delegation)
// Uses Object.create to inherit methods via prototype chain.
// Most memory-efficient and clean OOP-style approach in plain JavaScript.
// const userMethods = {
//      greet :  function(){
//    return `Hello, my name is ${this.name}.`;
//   },
//     getFullAddress() {
//      return `City: ${this.city}, ZIP: ${this.zip}`;
// }
// }

// function createUser(name, age, city, zip){
//     const user = Object.create(userMethods);
//     user.name = name;
//     user.age = age;
//     user.city = city;
//     user.zip = zip;
//     return user;
// }

// const user1 = createUser("Asad", 22, "Islamabad", 12920);

// console.log(user1.greet());


// 🟩 Fifth Way: Factory function + Prototypal Inheritance
// - Define shared methods on createUser.prototype
// - Use Object.create to set prototype linkage
// - Avoids memory duplication of methods per instance
// - Cleaner and more efficient than previous approaches



// function createUser(name, age, city, zip){
//     const user = Object.create(createUser.prototype);
//     user.name = name;
//     user.age = age;
//     user.city = city;
//     user.zip = zip;
//     return user;
// }

//      createUser.prototype.greet =  function(){
//    return `Hello, my name is ${this.name}.`;
//   }

//     createUser.prototype.getFullAddress = function() {
//      return `City: ${this.city}, ZIP: ${this.zip}`;
// }


// const user1 = createUser("Asad", 22, "Islamabad", 12920);

// console.log(user1.greet());
// console.log(user1.getFullAddress());




// new Keyword

// function CreateUser(firstName, lastName){
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// CreateUser.prototype.about = function(){
//   console.log(`Hello My Name is ${this.firstName} ${this.lastName}`);
  
// }

// const user = new CreateUser("Shuaib", "Khan");
// user.about()




// ✅✅✅✅ Sixth Way (Constructor Function with `new` keyword)
// - Uses constructor function with `this` keyword to set properties.
// - Methods are shared via `CreateUser.prototype`.
// - Memory-efficient and idiomatic JavaScript OOP approach.
// - Cleaner and more intuitive than manual prototype linking.

// function CreateUser(name, age, city, zip){
//     this.name = name;
//     this.age = age;
//     this.city = city;
//     this.zip = zip;
// }

//      CreateUser.prototype.greet =  function(){
//    return `Hello, my name is ${this.name}.`;
//   }

//     CreateUser.prototype.getFullAddress = function() {
//      return `City: ${this.city}, ZIP: ${this.zip}`;
// }


// const user1 = new CreateUser("Asad", 22, "Islamabad", 12920);

// console.log(user1.greet());



// OOP "Object Oriented Programming"

// ✅✅✅✅ 7th Way (Modern & Preferred - ES6 Class Syntax)
// - Uses JavaScript `class` introduced in ES6 (2015) for cleaner OOP syntax.
// - Behind the scenes, it's still using prototypal inheritance.
// - `constructor` is a special method used to initialize object properties.
// - Class methods like `greet()` and `getFullAddress()` are automatically placed on the prototype.
// - This is the most readable and modern way to create reusable object blueprints in JS.



// class CreateUser{
//   constructor(name, age, city, zip){
//     this.name = name;
//     this.age = age;
//     this.city = city;
//     this.zip = zip;
//   }

//   greet(){
//    return `Hello, my name is ${this.name}.`;
//   }

//   getFullAddress() {
//     return `City: ${this.city}, ZIP: ${this.zip}`;
// }

// }

// const user1 = new CreateUser("Shuaib Khhan", 23, "ISLAMABAD", 19240);
// console.log(user1.greet());
// console.log(Object.getPrototypeOf(user1));



// Supper method in OOP

// class Animal {
//   constructor(name, age){
//     this.name = name;
//     this.age = age;
//   }
  
//   eat(){
//     return `${this.name} is eating`;
//   }

//   isSuperCute(){
//     return this.age <= 1;
//   }
// }

// class Cat extends Animal{

// }

// class Dog extends Animal {
//   constructor(name, age, speed){
//    super(name, age);
//     this.speed = speed;
//   }

//   run(){
//     return `${this.name} is running at ${this.speed}kmph`;
//   }
// }

// const cat = new Cat("Cat", 0.5);
// console.log(cat.isSuperCute())
// const dog = new Dog("Dogi", 2, 45);
// const run = dog.run();
// const isSuperCute = dog.isSuperCute();

// console.log(run);
// console.log(isSuperCute);



// Setter && Getter in OOP

class Person{
  constructor(name, age){
    this.name = name;
    this.age = age
  }

  static initial = "Starting...";

  get about(){
console.log( `My name is ${this.name}, I am ${this.age} year old`);
  }

  set changeProperties(change){
    const [name, age] = change.split(" ");
    this.name = name;
    this.age = age;
  }
}

const user1 = new Person("Shehzad", 23);
user1.about;
user1.changeProperties = "Shuaib 20"
user1.about;

console.log(Person.initial);
