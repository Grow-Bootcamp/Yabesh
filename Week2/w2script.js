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
class Student {
  // constructor (name, age) {
  //   this.name = name;
  //   this.age = age;
  // }
  study(name) {
    console.log(name + " is studying");
  }
}

const student1 = new Student();
const student2 = new Student("Sita", 22);
const student3 = new Student("Hari", 19);

student1.study("Prabhat")
// student2.study();
// student3.study();

