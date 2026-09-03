  // // switch case statement
  // const day = 5;

  // switch (day) {
  //   case 1:
  //     console.log("Sunday");
  //     break;

  //   case 2:
  //     console.log("Monday");
  //     break;

  //   case 3:
  //     console.log("Tuesday");
  //     break;

  //   case 4:
  //     console.log("Wednesday");
  //     break;

  //   case 5:
  //     console.log("Thursday");
  //     break;

  //   case 6:
  //     console.log("Friday");
  //     break;

  //   case 7:
  //     console.log("Saturday");
  //     break;

  //   default:
  //     console.log("Invalid Day");
    
  // }

// // for loop
// for (let i=0; i<5; i++) {
//   console.log(i);
// }

// // nested for loop
// for (let i=1; i<=5; i++) {
//   for (let j=1; j<=i; j++) {
//     process.stdout.write(String(j) + "  ");
//   }
//   console.log();
// }

// // while loop
// let i=0;
// while(i<5) {
//   console.log("Number : " + i); // String result
//   console.log("Number : " , i); // String and Number as separate values
//   i++;
// }

// // do-while loop
// let i=0;
// do {
//   console.log(i);
//   i++;
// } while (i<5);

// // ternary operator
// let age = 20;
// let result = age>=18 ? "Can Vote" : "Can't vote";
// console.log(result);


// // forEach
// let fruits = ["Apple", "Banana", "Mango"];

// fruits.forEach(function(fruit){
//   console.log(fruit);
// });


// // Map()
// let numbers = [1,2,3,4];

// let doubled = numbers.map(function(n) {
//   return n * 2;
// });

// console.log(doubled);

// // find()
// let numbers = [1,2,3,4,5];
// let result = numbers.find(function(n) {
//   return n>2;
// });
// console.log(result);

// // filter()
// let numbers = [1,2,3,4,5];
// let result = numbers.filter(function (n) {
//   return n >= 2;
// });
// console.log(result);

// let text = "Hello World";
// // console.log(text);

// console.log(text.length);

// let text = "JavaScript";
// // console.log(text.slice(1,5));
// // console.log(text.slice(-6));

// // substring()
// let text = "JavaScript";
// console.log(text.substring(1,6));
// console.log(text.substring(-2,6));

// // split()
// let text = "Apple  Banana Mango";
// let result = text.split(" ");
// console.log(result);

// // replace()
// let text = "I like Java";
// let result = text.replace("Java", "JavaScript");
// console.log(result);
// console.log(text);

// // trim()
// let text = "      Hello  World  ";
// console.log(text.trim());


// splice() 

// // 1. remove elements
// let fruits = ["Apple", "Banana", "Mango", "Orange"];
// fruits.splice(1,2);
// console.log(fruits);

// // 2. add elements
// let fruits = ["Apple", "Mango"];
// fruits.splice(1,0, "Banana");
// console.log(fruits);


// // 3.replace elements
// let fruits = ["Apple", "Banana", "Mango"];
// fruits.splice(1,1, "Orange");
// console.log(fruits);


// slice() vs splice()

// // // 1. slice
// let fruits = ["Apple", "Banana", "Mango", "Orange"];
// let result = fruits.slice(1,3);
// console.log(result);
// console.log(fruits);

// // 2. splice()
// let fruits = ["Apple", "Banana", "Mango", "orange"];
// let result = fruits.splice(1,2);
// console.log(result);
// console.log(fruits);

//concatenation in JS

// using +
// let firstName = "Yabesh";
// let lastName = "Chaudhary";
// let fullName = firstName + " " + lastName;
// console.log(fullName);

// // concatenating strings and numbers
// let name = "John";
// let age = 20;
// console.log(name + " is " + age + " years old");

// // using concat()
// let first = "Hello";
// let second = "World";
// let result = first.concat(" ", second);
// console.log(result);

// // using template literals
// let name = "John";
// let age = 20;
// console.log(`${name} is ${age} years old`);

// // 1. regular function
// function greet (name ) {
//   console.log("Hello " + name);
// }
// greet("Yabesh");


// // 2. function expression
// const greet = function (name) {
//   console.log("Hello " + name);
// };
// greet("Yabesh");

// // 3. anonymous function
// setTimeout(function() {
//   console.log("Hello after 2 seconds");
// }, 2000);

// 4. arrow functions
// a.
// const add = (a,b) => {
//   return a+b;
// };
// console.log(add(5,2));

// // b. shorter
// const add = (a,b) => a+b;
// console.log(add(5,3));

// // c. one parameter
// const square = n => n*n;
// console.log(square(5));

// // 5. IIFE
// (function() {
//   console.log("IIFE Executed");
// })();

// // arrow IIFE
// (() => {
//   console.log("Arrow IIFE");
// })();


// // conversion regular -> arrow -> IIFE
// // 1. regular
// function greet (name) {
//   console.log("Hello " + name);
// }
// greet("Yabesh");

// // 2. arrow
// const greet = (name) => {
//   console.log("Hello " + name);
// };
// greet("Prabhat");

// // 3. IIFE
// ((name) => {
//   console.log("Hello " + name);
// })("Yabesh");


// // JavaScript Objects

// const student = {
//   name: "Yabesh",
//   age: 22,
//   course: "CSIT"
// };
// // console.log(student);

// // access object properties using dot notation
// console.log(student.name);

// // access object properties using bracket notation
// console.log(student["age"]);


// // Object.keys
// console.log(Object.keys(student));

// // Object.values
// console.log(Object.values(student));

// // Object.entries
// console.log(Object.entries(student));




// // // Object.assign
// const student = {
//   name: "Yabesh"
// };

// const details = {
//   age:22,
//   course: "CSIT"
// };

// Object.assign(student, details);
// console.log(student);


// // // Object.hasOwn()
// const student = {
//   name: "Yabesh",
//   age: 22
// };
// console.log(Object.hasOwn(student, "name"));
// console.log(Object.hasOwn(student, "address"));

// console.log(typeof Object.hasOwn(student, "name"));



// // JavaScript Arrays

// // access elements
// const fruits = ['Apple', 'Banana', 'Mango'];
// console.log(fruits[1]);


// // 1. push()
// let letters = ['A', 'B', 'C'];
// letters.push('E');
// console.log(letters);


// // // 2. pop()
// let letters = ['A', 'B', 'C'];
// letters.pop();
// console.log(letters);


// // 3. map()
// const numbers = [1,2,3,4];
// const doubled = numbers.map(function (number) {
//     return number * 2;
//   });
//   console.log(doubled);
  

// const numbers = [1,2,3,4];
// const doubled = numbers.map(number => number * 2);
// console.log(doubled);
// console.log(numbers);


// // // 4. filter()
// const numbers = [1,2,3,4,5,6,7,8,9,10];
// const evenNumbers = numbers.filter(number => number%2 === 0);
// console.log(evenNumbers); 


// // // 5. reduce()
// const numbers = [1,2,3,4,5];
// const total = numbers.reduce((sum, number) => {
//   return sum + number;
// }, 0);
// console.log(total);


// // 6. forEach()
// const fruits = ["Apple", "Banana", "Mango"];

// fruits.forEach(function(fruit) {
//   console.log(fruit);
// });

// fruits.forEach(fruit => console.log(fruit));


// // 7. unshift()
// let letters = ['b', 'c'];
// letters.unshift('a');
// console.log(letters);


// // 8. shift()
// let letters = ['a', 'b', 'c'];
// letters.shift();
// console.log(letters);


// // 9. findIndex()
// let numbers = [10, 20, 30, 40, 50];
// let index = numbers.findIndex(num => num > 40);
// console.log(index);


// // 10. indexOf()
// let numbers = [10, 20, 30, 40, 50];
// console.log(numbers.indexOf(40));


// // 11. sort()
// let numbers = [30, 20, 40, 50, 10];
// numbers.sort();
// console.log(numbers);

// // 12. reverse()
// let numbers = [10, 20, 30, 40, 50];
// numbers.reverse();
// console.log(numbers);


// // 13. join()
// let fruits = ["Apple", "banana", "Mango"];
// let result = fruits.join(", ");
// console.log(result);


// // 14. concat()
// let a = [1, 2]; let b = [3, 4];
// let result = a. concat(b);
// console.log(result);


// // 15. some()
// let numbers = [1,3,5,8,9];
// const result = numbers.some(num => num%2 === 0);
// console.log(result);


// // 16. every()
let  numbers = [2,4,6,8];
const result = numbers.every(num => num%2 === 0);
console.log(result);