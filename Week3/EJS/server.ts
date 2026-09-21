import express, { type Express, type Request, type Response } from 'express';

const app:Express = express();

app.set("view engine", "ejs");

app.get('/', (req:Request, res:Response) => {
  const user = {
    name: "Yabesh",
    course: "Node.js"
  };

  res.render("home", {
    user: user
  });
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});


