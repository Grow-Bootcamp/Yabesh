import express, { type Request, type Response } from 'express';
import { z } from 'zod';

const app = express();

app.use(express.json());

// 1. create validation schema
const userSchema = z.object({
  name: z.string().min(3).max(50),
  age: z.number().min(18).max(120),
  email: z.string().email(),
  password: z.string().min(8).max(16)
});

// 2. create route
app.post('/users', (req: Request, res: Response) => {

  // 3. validate request body
  const result = userSchema.safeParse(req.body);

  // 4. if validation fails
  if (!result.success) {
    return res.status(422).json({
      message: 'validation failed',
      errors: result.error.issues
    });
  }

  // 5. if validation succeeds
  const user = result.data;
  res.status(201).json({
    message: 'User is valid',
    user
  });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});