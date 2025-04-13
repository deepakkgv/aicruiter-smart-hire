
import React, { createContext, useContext, useState, ReactNode } from 'react';

type UserType = 'admin' | 'candidate' | null;

interface AuthContextType {
  userType: UserType;
  email: string | null;
  isLoggedIn: boolean;
  login: (email: string, password: string, type: UserType) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userType, setUserType] = useState<UserType>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const login = (email: string, password: string, type: UserType): boolean => {
    // Very simple authentication logic for demo purposes
    if (type === 'admin' && email === 'chndeep06@gmail.com' && password === 'password') {
      setUserType('admin');
      setEmail(email);
      setIsLoggedIn(true);
      return true;
    } else if (type === 'candidate') {
      // For demo purposes, any email/password combination works for candidates
      // In a real app, this would validate against a database
      setUserType('candidate');
      setEmail(email);
      setIsLoggedIn(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUserType(null);
    setEmail(null);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ userType, email, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
