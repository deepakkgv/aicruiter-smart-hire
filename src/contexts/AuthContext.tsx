
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type UserType = 'admin' | 'candidate' | null;

interface UserData {
  email: string;
  password: string;
  fullName: string;
  phone: string;
  address: string;
  company?: string;
  resume?: File | null;
  userType: UserType;
}

interface CandidateData {
  id: number;
  name: string;
  email: string;
  position: string;
  interviewDate: string;
  status: 'Selected' | 'Under Review' | 'Not Selected';
  score: number;
  company: string;
}

interface AuthContextType {
  userType: UserType;
  email: string | null;
  fullName: string | null;
  isLoggedIn: boolean;
  candidates: CandidateData[];
  login: (email: string, password: string, type: UserType) => boolean;
  logout: () => void;
  register: (userData: UserData) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock database
const mockUsers = [
  { email: 'chndeep06@gmail.com', password: 'password', fullName: 'Admin User', userType: 'admin', company: 'AIcruiter Inc.' },
];

const mockCandidates: CandidateData[] = [
  {
    id: 1,
    name: "John Smith",
    email: "john@example.com",
    position: "Frontend Developer",
    interviewDate: "2023-04-12",
    status: "Selected",
    score: 92,
    company: "AIcruiter Inc."
  },
  {
    id: 2,
    name: "Emily Johnson",
    email: "emily@example.com",
    position: "UI/UX Designer",
    interviewDate: "2023-04-11",
    status: "Under Review",
    score: 85,
    company: "AIcruiter Inc."
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "michael@example.com",
    position: "Backend Developer",
    interviewDate: "2023-04-10",
    status: "Not Selected",
    score: 65,
    company: "AIcruiter Inc."
  },
  {
    id: 4,
    name: "Jessica Williams",
    email: "jessica@example.com",
    position: "Project Manager",
    interviewDate: "2023-04-09",
    status: "Selected",
    score: 89,
    company: "Tech Solutions Ltd."
  },
  {
    id: 5,
    name: "David Miller",
    email: "david@example.com",
    position: "DevOps Engineer",
    interviewDate: "2023-04-08",
    status: "Under Review",
    score: 78,
    company: "Tech Solutions Ltd."
  }
];

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userType, setUserType] = useState<UserType>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [fullName, setFullName] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [users, setUsers] = useState(mockUsers);
  const [candidates, setCandidates] = useState<CandidateData[]>(mockCandidates);
  
  useEffect(() => {
    // Check for stored login info on component mount
    const storedUser = localStorage.getItem('aicruiter-user');
    if (storedUser) {
      try {
        const userData = JSON.parse(storedUser);
        setUserType(userData.userType);
        setEmail(userData.email);
        setFullName(userData.fullName);
        setIsLoggedIn(true);
      } catch (error) {
        console.error('Error parsing stored user data:', error);
      }
    }
  }, []);

  const login = (email: string, password: string, type: UserType): boolean => {
    if (type === 'admin') {
      const adminUser = users.find(user => 
        user.userType === 'admin' && 
        user.email === email && 
        user.password === password
      );
      
      if (adminUser) {
        setUserType('admin');
        setEmail(email);
        setFullName(adminUser.fullName);
        setIsLoggedIn(true);
        
        // Store login info
        localStorage.setItem('aicruiter-user', JSON.stringify({
          userType: 'admin',
          email,
          fullName: adminUser.fullName
        }));
        
        return true;
      }
    } else if (type === 'candidate') {
      // For demo purposes, any email/password combination works for candidates
      // In a real app, this would validate against a database
      const candidateUser = users.find(user => 
        user.userType === 'candidate' && 
        user.email === email && 
        user.password === password
      );
      
      if (candidateUser) {
        setUserType('candidate');
        setEmail(email);
        setFullName(candidateUser.fullName);
        setIsLoggedIn(true);
        
        // Store login info
        localStorage.setItem('aicruiter-user', JSON.stringify({
          userType: 'candidate',
          email,
          fullName: candidateUser.fullName
        }));
        
        return true;
      } else {
        // Demo mode: auto-create account for candidate if not exists
        const newUser = {
          email,
          password,
          fullName: 'Candidate User',
          userType: 'candidate' as UserType,
          company: ''
        };
        
        setUsers(prev => [...prev, newUser]);
        setUserType('candidate');
        setEmail(email);
        setFullName('Candidate User');
        setIsLoggedIn(true);
        
        // Store login info
        localStorage.setItem('aicruiter-user', JSON.stringify({
          userType: 'candidate',
          email,
          fullName: 'Candidate User'
        }));
        
        return true;
      }
    }
    return false;
  };

  const register = (userData: UserData): boolean => {
    // Check if user with this email already exists
    const userExists = users.some(user => user.email === userData.email);
    
    if (userExists) {
      return false;
    }
    
    // Create new user
    const newUser = {
      email: userData.email,
      password: userData.password,
      fullName: userData.fullName,
      userType: userData.userType,
      company: userData.company || ''
    };
    
    // Add to users array
    setUsers(prev => [...prev, newUser]);
    
    // If it's a candidate, also add to candidates array
    if (userData.userType === 'candidate') {
      const newCandidate: CandidateData = {
        id: candidates.length + 1,
        name: userData.fullName,
        email: userData.email,
        position: "Not specified",
        interviewDate: new Date().toISOString().split('T')[0],
        status: "Under Review",
        score: 0,
        company: "Not assigned"
      };
      
      setCandidates(prev => [...prev, newCandidate]);
    }
    
    return true;
  };

  const logout = () => {
    setUserType(null);
    setEmail(null);
    setFullName(null);
    setIsLoggedIn(false);
    localStorage.removeItem('aicruiter-user');
  };

  return (
    <AuthContext.Provider value={{ 
      userType, 
      email, 
      fullName,
      isLoggedIn, 
      candidates,
      login, 
      logout,
      register
    }}>
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
