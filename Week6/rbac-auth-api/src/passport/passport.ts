import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import User from '../models/user.model.js';
import type { UserRole } from "../types/auth.types.js";

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error('JWT_SECRET is not configured');
}

export interface PassportUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

declare global {
  namespace Express {
    interface User extends PassportUser {}
  }
}

passport.use(
  'jwt',
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: JWT_SECRET,
      algorithms: ['HS256'],
    },
    async (payload, done) => {
      try {
        if (typeof payload.sub !== 'string') {
          return done(null, false);
        }

        const user = await User.findById(payload.sub);

        if (!user) {
          return done(null, false);
        }

        return done(null, {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        });
      } catch (error) {
        return done(error, false);
      }
    },
  ),
);

export default passport;


/*
This strategy extracts the bearer token, verifies it, retrieves the current user, and makes that user available as req.user.

The passport-jwt package is the strategy plugin for Passport.
*/