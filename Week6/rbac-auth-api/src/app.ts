import express from 'express';
import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';
import { errorHandler } from './middleware/error.middleware.js';

const app = express();

app.use(express.json());

app.get('/health', (_req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'RBAC Auth API is running',
  });
});

app.use('/api/auth', authRoutes),
app.use('/api', userRoutes);

// Error handler must be registered after the routes
app.use(errorHandler);

export default app;



// This file connects the routes to the Express application and registers the error handler.