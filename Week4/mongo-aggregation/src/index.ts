// import "dotenv/config";
// import connectDB from "./db.js";
// import User from "./models/user.model.js";

// const main = async (): Promise<void> => {
//     await connectDB();

//     await User.deleteMany({});

//     const users = [
//         {
//             name: "Yabesh",
//             email: "yabesh@example.com",
//             age: 22,
//             department: "IT",
//             salary: 45000,
//             isActive: true
//         },
//         {
//             name: "Ram",
//             email: "ram@example.com",
//             age: 25,
//             department: "IT",
//             salary: 60000,
//             isActive: true
//         },
//         {
//             name: "Sita",
//             email: "sita@example.com",
//             age: 23,
//             department: "HR",
//             salary: 50000,
//             isActive: true
//         },
//         {
//             name: "Hari",
//             email: "hari@example.com",
//             age: 28,
//             department: "IT",
//             salary: 75000,
//             isActive: true
//         },
//         {
//             name: "Gita",
//             email: "gita@example.com",
//             age: 26,
//             department: "HR",
//             salary: 55000,
//             isActive: false
//         },
//         {
//             name: "Shyam",
//             email: "shyam@example.com",
//             age: 30,
//             department: "Finance",
//             salary: 80000,
//             isActive: true
//         }
//     ];

//     await User.insertMany(users);

//     console.log("Sample users inserted");

//     process.exit(0);
// };

// main();




import "dotenv/config";
import connectDB from "./db.js";
import User from "./models/user.model.js";

const main = async (): Promise<void> => {
    await connectDB();

    // --------------------------------
    // 1. FILTERING
    // --------------------------------

    const filteredUsers = await User.find({
        age: { $gte: 25 }
    });

    console.log("FILTERED USERS");
    console.log(filteredUsers);


    // --------------------------------
    // 2. SORTING
    // --------------------------------

    const sortedUsers = await User.find()
        .sort({
            salary: -1
        });

    console.log("SORTED USERS");
    console.log(sortedUsers);


    // --------------------------------
    // 3. PAGINATION
    // --------------------------------

    const page = 2;
    const limit = 2;

    const paginatedUsers = await User.find()
        .sort({
            salary: -1
        })
        .skip((page - 1) * limit)
        .limit(limit);

    console.log("PAGINATED USERS");
    console.log(paginatedUsers);


    // --------------------------------
    // 4. AGGREGATION
    // --------------------------------

    const aggregationResult = await User.aggregate([
        {
            $match: {
                isActive: true
            }
        },

        {
            $group: {
                _id: "$department",

                totalUsers: {
                    $sum: 1
                },

                totalSalary: {
                    $sum: "$salary"
                },

                averageSalary: {
                    $avg: "$salary"
                }
            }
        },

        {
            $sort: {
                averageSalary: -1
            }
        }
    ]);

    console.log("AGGREGATION RESULT");
    console.log(aggregationResult);


    // --------------------------------
    // 5. VIRTUAL PROPERTY
    // --------------------------------

    const user = await User.findOne();

    console.log("MONTHLY SALARY");
    console.log(user?.salary);

    console.log("ANNUAL SALARY");
    console.log(user?.annualSalary);


    process.exit(0);
};

main();