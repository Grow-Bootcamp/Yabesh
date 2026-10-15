import type { Request } from 'express';

export type UserRole = 'user' | 'admin';

export interface AuthTokenPayload {
  sub: string;
  iat?: number;
  exp?: number;
}

export interface CurrentUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

declare global {
  namespace Express {
    interface Request {
      currentUser: CurrentUser;
      
      auth?: {
        sub?: string;
        iat?: number;
        exp?: number;
      };
    }
  }
}

export type AuthenticatedRequest = Request & {
  currentUser: CurrentUser;
};


// We need to distinguish the JWT claims from the current user retrieved from MongoDB.

/*
The token will contain a user ID in sub. The current role will be loaded from MongoDB on protected requests rather than blindly trusting a potentially outdated role claim.

That design helps ensure a user demoted from admin cannot keep their admin access simply by using an unexpired token.
*/