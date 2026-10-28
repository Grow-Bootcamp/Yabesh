import 'dotenv/config';
import express, { type Request, type Response } from 'express';
import connectDB from './config/database.js';
import authRoutes from './routes/auth.routes.js';
import protectedRoutes from './routes/protected.routes.js';
import cors from 'cors';

const app = express();

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

// Authentication routes
app.use('/api/auth', authRoutes);
app.use('/api/protected', protectedRoutes);



app.get('/', (_req: Request, res: Response) => {
  res.json({
    message: 'Week6 Day5 Auth API is running',
  });
});

const PORT = Number(process.env.PORT) || 3000;

const startServer = async(): Promise<void> => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
};

startServer();