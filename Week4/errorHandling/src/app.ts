import express from 'express';
import errorHandler from './middleware/errorHandler.js';

const app = express();

app.use(express.json());

// routes
app.get('/', (req, res)=> {
  res.json({
    message: "Hello World"
  });
});

// error handler must come after routes
app.use(errorHandler);

app.listen(3000, () => {
  console.log(`Server running on http://localhost:3000`);
});