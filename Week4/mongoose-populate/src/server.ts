import express, { type Express, type Request, type Response } from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import populateRoutes from './routes/populate.routes.js';

dotenv.config();

const app: Express = express();

app.use(express.json());

await connectDB();

app.use('/api', populateRoutes);

app.get('/', (_req: Request, res: Response) => {
  // "I know this parameter exists, but I'm not going to use it."
  res.json({
    message: "Mongoose populate demo API",
  });
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


