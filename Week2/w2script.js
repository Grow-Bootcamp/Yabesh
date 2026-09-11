// // template literals
// const name = "Yabesh";
// const age = 22;
// console.log(`My name is ${name} and I am ${age}`);

// // destructing
// // array destructing
// const numbers = [1,2,3];
// const [a,b,c,d] = numbers;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// // array destructing by skipping values
// const numbers = [1,2,3];
// const [first, , third] = numbers;
// console.log(first);
// console.log(third);

// // // object destructing
// const student = {
//   name: "Yabesh",
//   age: 22,
//   course: "BSc CSIT"
// };
// const {name, age, course} = student;
// console.log(name);
// console.log(age);
// console.log(course);

// // renaming variables
// const {name: studentName} = student;
// console.log(studentName);

// // default parameters
// function greet(name = "Prabhat") {
//   console.log(`Hello ${name}`);
// }
// greet();

// // spread operator
// const arr1 = [1,2,3];
// const arr2 = [4,5,6];
// const combined = [...arr1, ...arr2];
// console.log("Combined Array: ", combined);

// // spread operator (copying arrays)
// const original = [1,2,3];
// const copy = [...original];
// console.log("Copied Array: ", copy);

// // spread operator (passing arguments to functions)
// function sum(a,b,c) {
//   return a+b+c;
// }
// const nums = [1,2,3];
// const result = sum(...nums);
// console.log("Result of sum: ", result);

// // Rest Operator

// // before rest operator
// const arr = [1,2,3,4,5];
// const first = arr[0]; // extracting first element
// const rest = arr.slice(1);  // collecting rest of the elements
// console.log("First Element: ", first);
// console.log("Rest Elements: ", rest);

// // after rest operator
// const [first, ...rest] = [1,2,3,4,5];
// console.log("First Element: ", first);
// console.log("Rest Elements: ", rest);

// // callback
// function greet (name, callback) {
//   console.log("Hello " + name);
//   callback();
// }
// function message() {
//   console.log("Welcome !");
// }
// greet("Yabesh", message);

// setTimeout(function() {
//   console.log("Task completed");
// }, 2000);

// // Promises
// const myPromise = new Promise((resolve, reject) => {
//   let success = false;
//   if (success) {
//     resolve("Operation Successful");
//   } else {
//     reject ("Operation Failed");
//   }
// });

// myPromise
//   .then(result => console.log(result))
//   .catch(error => console.log(error))

// // asynchronous code
// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout");
// }, 0);

// console.log("End");

// // async
// async function greet() {
//   return "Hello";
// }
// console.log(greet());

// const myPromise = new Promise((resolve, reject) => {
//   let success = false;
//   if (success) {
//     resolve("Operation Successful");
//   } else {
//     reject("Operation Failed");
//   }
// });

// async function performOperation() {
//   try {
//     const result = await myPromise;
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// }
// performOperation();

// // prototype
// const person = {
//   greet() {
//     console.log("Hello");
//   }
// };
// const student = Object.create(person);
// student.greet();

// // __proto__
// const person = {
//   name: "Yabesh",
//   age: 22
// };
// const student = Object.create(person);
// console.log(student.__proto__);

// // OOP Concepts in JS
// class Student {
//   // constructor (name, age) {
//   //   this.name = name;
//   //   this.age = age;
//   // }
//   study(name) {
//     console.log(name + " is studying");
//   }
// }

// const student1 = new Student();
// const student2 = new Student("Sita", 22);
// const student3 = new Student("Hari", 19);

// student1.study("Prabhat")
// // student2.study();
// // student3.study();

// // // private properties in JS
// class BankAccount {
//   #balance;

//   constructor (balance) {
//     this.#balance = balance;
//   }

//   deposit (amount) {
//     this.#balance += amount;
//   }

//   withdraw (amount) {
//     if (amount <= this.#balance) {
//       this.#balance -= amount;
//     } else {
//       console.log("Insufficient Balance");
//     }
//   }

//   getBalance() {
//     return this.#balance;
//   }
// }

// const account = new BankAccount(1000);
// account.deposit(500);
// account.withdraw(200);
// console.log(account.getBalance());

// // // abstraction
// class Car {
//   start() {
//     this.#checkEngine();
//     this.#injectFuel();
//     this.#startEngine();

//     console.log("Car Started");
//   }

//   #checkEngine() {
//     console.log("Checking Engine...");
//   }

//   #injectFuel() {
//     console.log("Injecting Fuel...");
//   }

//   #startEngine() {
//     console.log("Starting Engine...");
//   }
// }

// const car = new Car();
// car.start();
// // car.#checkEngine(); // this gives error because of abstraction


// // // class-object
// class Hello {
//   // #hello;

//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   helloWorld() {
//     console.log(`${this.firstName} ${this.lastName}`);
//     // return this.#hello;
//   }

//   byeWorld(payoneer = "maybe") {
//     console.log(`${payoneer} is good.`);
//   }
// }

// const instance = new Hello();

// instance.helloWorld();


// // destructuring
// let array = [1, 2, 3, 4, 5];
// let [, , , vari] = array;
// console.log(`${vari}`);


// // static keyword
// class Hello {
//   static hell() {
//     console.log("Hell");
//   }
// }

// const maybe = Hello.hell(); // no need to create instance
// console.log(maybe);

// // another example of static
// class Car {
//   start() {
//     console.log("Car started");
//   }

//   static info() {
//     console.log("Cars are vehicles");
//   }
// }

// const c = new Car();
// c.start();  // returns Car started
// // c.info();   // returns TypeError because info() does not belong to object, it belongs to class
// Car.info();
// // advantage of static -> saves memory because methods aren't duplicated


// // // Inheritance
// class Animal {
//   eat() {
//     console.log("Animal Eats");
//   }
// }

// class Dog extends Animal {
//   eat() {
//     console.log("Dog Eats");
//   }
// }

// let dog = new Dog();
// dog.eat();
// dog = new Animal();
// dog.eat();


// // super 
// // used to access the parent class
// class Animal {
//   constructor (name) {
//     this.name = name;
//   }
//   eat() {
//     console.log(`${this.name} is eating`);
//   }
// }

// class Dog extends Animal {
//   constructor(name,breed) {
//     super(name);
//     this.breed = breed;
//   }
// }

// const dog = new Dog("Buddy", "Labrador");
// console.log(dog.name);
// console.log(dog.breed);
// dog.eat();

// // calling parent methods using super
// class Animal {
//   speak() {
//     console.log("Animals make a sound");
//   }
// }

// class Dog extends Animal {
//   speak() {
//     super.speak();
//     console.log("Dog Barks");
//   }
// }

// const d = new Dog();
// d.speak();


// // Polymorphism
// class Animal {
//   speak() {
//     console.log("Animal Sound");
//   }
// }

// class Dog extends Animal {
//   speak() {
//     console.log("Woof!");
//   }
// }

// class Cat extends Animal {
//   speak() {
//     console.log("Meow!");
//   }
// }

// const animals = [new Dog(), new Cat()];

// animals.forEach(animal => animal.speak());


// // // method overriding
// class Animal {
//   speak() {
//     console.log("Animal Sound");
//   }
// }

// class Dog extends Animal {
//   speak() {
//     console.log("Woof");
//   }
// }

// const animal = new Animal();
// const dog = new Dog();
// animal.speak();
// dog.speak();


// // method overloading
// class Calculator {
//   add (...numbers) {  // rest parameter
//     return numbers.reduce((sum, num) => sum + num, 0);
//   }
// }

// const calc = new Calculator();

// console.log(calc.add(2,3));
// console.log(calc.add(2,3,4));
// console.log(calc.add(2,3,4,5));

// // JS doesn't support traditional method overloading
// class Calculator {
//     add(a, b) {
//         return a + b;
//     }

//     add(a, b, c) {
//         return a + b + c;
//     }
// }

// const c = new Calculator();
// console.log(c.add(2,4));


// // undefined vs not defined
// let x;
// console.log(x); // undefined
// console.log(y); // ReferenceError: y is not defined
// console.log(typeof x); // undefined
// console.log(typeof y); // undefined


// // getter
// class Student {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   get fullName () {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }

// const student = new Student("Yabesh", "Chaudhary");
// console.log(student.fullName);


// // setter
// class Student {
//   constructor(name) {
//     this.name = name;
//   }

//   set studentName(value) {
//     this.newName = value.trim();
//   }
// }

// const s = new Student("Prabhat");
// s.studentName = "     Yabesh         ";
// console.log(s.name);
// console.log(s.newName);




// // caching in JS
const cache = new Map();

function getUser(id) {
  if (cache.has(id)) {
    console.log("Getting from cache");
    return cache.get(id);
  }

  const user = {
    id: id,
    name: "Yabesh"
  };

  cache.set(id, user);
  return user;
}

console.log(getUser(1));
console.log(getUser(1));






// // memoization in JS

// // without memoization 
function square(n) {
  console.log("Calculating...");
  return n * n;
}

console.log(square(5));
console.log(square(5));


// // with memoization
function memoize(fn) {
  const cache = new Map();

  return function (n) {
    if (cache.has(n)) {
      console.log("Getting from cache...");
      return cache.get(n);
    }

    console.log("Calculating...");
    const result = fn(n);

    cache.set(n, result);

    return result;
  };
}

function square(n) {
  return n * n;
}

const memoizedSquare = memoize(square);

console.log(memoizedSquare(5));
console.log(memoizedSquare(5));
console.log(memoizedSquare(10));
console.log(memoizedSquare(10));





