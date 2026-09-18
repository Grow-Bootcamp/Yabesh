import express, { type Express, type Request, type Response } from 'express';

const app: Express = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send("Hello World World");
});

app.get('/users', (req: Request, res: Response) => {
  res.send("this is from users");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
