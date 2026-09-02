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

// filter()
let numbers = [1,2,3,4,5];
let result = numbers.filter(function (n) {
  return n >= 2;
});
console.log(result);