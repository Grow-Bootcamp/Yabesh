import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";

import type { AuthUser } from "../services/api";
import { setTokenRefreshCallback } from "../services/api";

interface AuthContextType {
  user: AuthUser | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (token: string, user: AuthUser) => void;
  logout: () => void;
  updateToken: (token: string, user: AuthUser) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);
// createContext() creates a context that can share authentication information across components.

interface AuthProviderProps {
  children: ReactNode;
}

// AuthProvider() makes the authentication information available to its child components.
export function AuthProvider({ children}: AuthProviderProps) {
  const [user, setUser] = useState<AuthUser | null>(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) as AuthUser : null;
  });

  const [token, setToken] = useState<string | null>(() => {
    return localStorage.getItem('token');
  });

  const login = (newToken: string, newUser: AuthUser) => {
    localStorage.setItem('token', newToken);
    localStorage.setItem('user', JSON.stringify(newUser));

    setToken(newToken);
    setUser(newUser);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    setToken(null);
    setUser(null);
  };

  const updateToken = useCallback(    // useCallback keeps the same function reference between renders.
    (newToken: string, newUser: AuthUser) => {
      localStorage.setItem('token', newToken);
      localStorage.setItem('user', JSON.stringify(newUser));

      setToken(newToken);
      setUser(newUser);
    },
    [],
  );

  useEffect(() => {
    setTokenRefreshCallback(updateToken);

    return () => {
      setTokenRefreshCallback(() => {});
    };
  }, [updateToken]);

  const isAuthenticated = Boolean(token && user);

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated,
        login,
        logout,
        updateToken,
      }}
    >
      { children }
    </AuthContext.Provider>
  );
}

// useAuth() is a custom hook that makes accessing authentication information easier.
export function useAuth() {
  const context = useContext(AuthContext);    // useContext() allows components to access the shared authentication information.

  if (!context) {
    throw new Error ('useAuth must be used inside AuthProvider');
  }

  return context;
}