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
// let fruits = "Apple Banana Mango";
// let result = fruits.split(" ");
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


// console.log("Hello World");



// // Error in JS


// // SyntaxError

// let name = "Yabesh";
// console.log(name;

// try {
//   eval("let x = ;");
// } catch (error) {
//   console.log(error.name);
// }

// // ReferenceError

// console.log(username);

// try {
//   console.log(username);
// } catch (error) {
//   console.log(error.name);
// }

// // TypeError
// let name = "John";
// name();

// let user = null;
// console.log(user.name);


// // // RangeError
// let num = 10.123;
// console.log(num.toFixed(200));

// // URIError
// decodeURIComponent("%");

// // EvalError
// throw new EvalError("problem with eval");



// // // Error Handling

// 1. try....catch

// try {
//   let result = undefinedVariable;
//   console.log(result);
// } catch (error) {
//   console.log("Something went wrong");
//   console.log(error.name);
// }

// try {
//   console.log(undefinedVariable);
// } catch (error) {
//   console.log(error.name);
//   console.log(error.message);
// }


// // 2. finally
// try {
//   console.log("Trying...");
// } catch (error) {
//   console.log("Error Occurred");
// } finally {
//   console.log("Finished");
// }


// // 3. throw
// let age = -5;
// try {
//   if (age < 0) {
//     throw new Error("Age can't be -ve");
//   }
// } catch (error) {
//   console.log(error.message);
// }


// // shallow copy
// // creates new outer object, but nested objects are still shared
// const user = {
//   name: "Yabesh",
//   address: {
//     city: "Dhangadhi"
//   }
// };

// const copy = Object.assign({}, user);

// copy.name = "Prabhat";
// copy.address.city = "Attariya";

// console.log(user);

// // deep copy
// // creates a complete independent copy, including nested objects and arrays
// const user = {
//   name: "Yabesh",
//   address: {
//     city: "Dhangadhi"
//   }
// };
// const copy = structuredClone(user);
// copy.address.city = "Attariya";
// console.log(user.address.city);
// // the original is unaffected


// // // spread operator

// const fruits = ["Apple", "Banana", "Mango"];
// const newFruits = [...fruits, "Orange"];
// console.log(newFruits);

// const user = {
//   name: "Yabesh",
//   age: 22
// };
// const newUser = {
//   ...user,
//   city: "Dhangadhi"
// };
// console.log(newUser);

// // rest operator 

// function add (...numbers) {
//   console.log(numbers);
// }
// add(10,20,30,40);

// function add(...numbers) {
//   return numbers.reduce((sum,num) => sum+num, 0);
// }
// console.log(add(10,20,30));