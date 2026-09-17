use ("Todo")

// db.taskList.insertOne({
//   name: "Yabesh",
//   age: 20,
//   course: "BSc CSIT",
//   isStudent: true
// })

// db.taskList.insertMany([
//   {
//     name: "Prabhat",
//     age: 20
//   },
//   {
//     name: "Anup",
//     age: 22
//   }
// ])


// db.taskList.find();
// // return everything

// db.taskList.find().pretty();

// db.taskList.find({
//   age: 20
// })


// db.taskList.updateOne(
//   {
//     name: "Yabesh"
//   },
//   {
//     $set: {
//       age: 22
//     }
//   }
// )

// db.taskList.updateMany(
//   {
//     course: "BSc CSIT"
//   },
//   {
//     $set: {
//       department: "Computer"
//     }
//   }
// )

// db.taskList.deleteOne({
//   name: "Yabesh"
// })

// db.taskList.deleteMany({
//   age: 22
// })

// db.taskList.findOneAndUpdate(
//   {
//     name: "Prabhat"
//   },
//   {
//     $set: {
//       gender: "Male"
//     }
//   }
// )

// db.taskList.findOneAndDelete(
//   {
//     name: "Prabhat"
//   },
//   {
//     gender: "Male"
//   }
// )

// db.taskList.updateOne(
//   {
//     name: "Prabhat"
//   },
//   {
//     $unset: {
//       age: ""
//     }
//   }
// )

// db.createCollection("jumpList", {
//   validator: {
//     $jsonSchema: {
//       required: [
//         "name",
//         "age",
//         "contact"
//       ],

//       properties: {
//         name: {
//           bsonType: "string",
//           description: "Name is required and must be a string"
//         },

//         age: {
//           bsonType: "int",
//           minimum: 0,
//           maximum: 120,
//           description: "Age must be an integer between 0 and 120"
//         },

//         contact: {
//           bsonType: "string"
//         },

//         address: {
//           bsonType: "object",
//           properties: {
//             city: {
//               bsonType: "string"
//             },
//             district: {
//               bsonType: "string"
//             }
//           }
//         },
        
//         isActive: {
//           bsonType: "bool",
//         },

//         createdAt: {
//           bsonType: "date"
//         }
//       }
//     }
//   }
// })

// db.jumpList.insertOne({
//   name: "Yabesh",
//   contact: "9899100101",
//   age: 22,
//   address: {
//     city: "Dhangadhi",
//     district: "Kailali"
//   },
//   isActive: true,
//   createdAt: new Date()
// })

// db.jumpList.insertOne({
//   name: "Prabhat",
//   age: 20,
//   contact: "9798999999"
// })

