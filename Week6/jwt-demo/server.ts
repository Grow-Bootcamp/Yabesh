import 'dotenv/config';
import express, { type Request, type Response, type NextFunction } from 'express';
import jwt, { type JwtPayload } from 'jsonwebtoken';

const app = express();

app.use(express.json());

const JWT_SECRET = process.env.JWT_SECRET;
const PORT = Number(process.env.PORT) || 3000;

if (!JWT_SECRET) {
  throw new Error('JWT_SECRET is missing from the .env file');
}

// a pretend database with one user
// plain-text passwords are for learning only
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

const users: User[] = [
  {
    id: 1,
    name: "Yabesh",
    email: "yabesh@example.com",
    password: 'P@$$w0rd'
  },
  {
    id: 2,
    name: "Prabhat",
    email: "prabhat@example.com",
    password: "P@$$w0rd"
  },
];

// define the shape of the JWT payload
interface TokenPayload extends JwtPayload {
  id: number;
  email: string;
}

// extend express request to include the authenticated user
declare global {
  namespace Express {
    interface Request {
      user?: TokenPayload;
    }
  }
}

// public route: anyone can access it
app.get('/public', (_req: Request, res: Response) => {
  res.json({
    message: 'Hello, everyone is welcome here',
  });
});

// login route: checks credentials and generates a JWT
app.post('/login', (req: Request, res: Response) => {
  const { email, password } = req.body as {
    email?: string;
    password?: string;
  };

  const user = users.find( 
    (u) => u.email === email && u.password === password,
  );

  if (!user) {
    return res.status(401).json({
      message: 'Wrong email or password',
    });
  }

  // sign a token containing safe user information
  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    JWT_SECRET,
    {
      // algorithm: 'HS256',
      expiresIn: '30m'
    },
  );

  return res.json({
    message: 'Login Successful',
    token,
  });
});

// security middleware: validates the JWT
function protect (req: Request, res: Response, next: NextFunction): void {
  const header = req.headers.authorization;

  // expect: authorization: bearer <token>
  if (!header || !header.startsWith('Bearer ')) {
    res.status(401).json({
      message: 'No token. Please log in first.',
    });
    return; 
  }
  
  const token = header.split(' ')[1];

  if (!token) {
    res.status(401).json({
      message: 'No token. Please log in first.',
    });
    return;
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET ) as TokenPayload;

    req.user = decoded;

    // continue to the protected route
    next();
  } catch {
    res.status(401).json({
      message: 'Token is invalid or expired.',
    });
  }
} 

// protected route requires a valid JWT
app.get(
  '/profile',
  protect,
  (req: Request, res: Response) => {
    res.json({
      message: `Welcome back, ${req.user!.email}`,
      yourTokenInfo: req.user,
    });
  }
);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});