import express, { type Express, type Request, type Response } from 'express';

const app:Express = express();
const PORT = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send("Hello Express");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});