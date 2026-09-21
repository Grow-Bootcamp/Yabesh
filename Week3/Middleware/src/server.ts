import express, { type Express, type Request, type Response, type NextFunction } from 'express';

const app:Express = express();
const port = 3000;

// // middleware
// app.use((req: Request, res: Response, next: NextFunction) => {
//   console.log(`${req.method} ${req.url}`);
//   next();
// });

app.get('/', (req: Request, res: Response) => {
  res.send("Welcome to my backend")
});

// app.get('/users', (req: Request, res: Response) => {
//   res.json({
//     users: [
//       {
//         id: 1,
//         name: "Yabesh"
//       },
//       {
//         id: 2,
//         name: "Prabhat"
//       },
//     ],
//   });
// });

// app.get('/users/:id', (req: Request, res: Response) => {
//   const id = Number(req.params.id);
//   const users = [
//     { id: 1, name: "Yabesh" }, 
//     { id: 2, name: "Prabhat" }
//   ];

//   const user = users.find(user => user.id === id);
//   if (!user) {
//     return res.status(404).json({ message: "User not found" });
//   }

//   res.json(user);
// });





const authMiddleware = (req:Request, res: Response, next: NextFunction) => {
  const isAuthenticated = false;

  if (!isAuthenticated) {
    return res.status(401).json({
      message: "Unauthorized"
    });
  }
  
  next();
};


app.get('/dashboard', authMiddleware, (req: Request, res: Response) => {
  res.json({
    message: "Welcome to dashboard"
  });
});



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});