import { expressjwt } from 'express-jwt';

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error('JWT_SECRET is not configured');
}

export const authenticateToken = expressjwt({
  secret: JWT_SECRET,
  algorithms: ['HS256'],
  requestProperty: 'auth',
});

// We'll use express-jwt to verify incoming access tokens. It handles token extraction and verification, while our own middleware handles user lookup and authorization.
// The package verifies the token and puts its claims in req.auth.
// It does not issue tokens; we will use jsonwebtoken for signing them.