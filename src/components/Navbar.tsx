
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, LogOut, UserPlus, FileText } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const { isLoggedIn, userType, logout } = useAuth();
  const navigate = useNavigate();

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-card text-card-foreground shadow-sm sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Logo />
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              <Link to="/" className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary animated-border">
                Home
              </Link>
              <Link to="/about" className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary animated-border">
                About
              </Link>
              <Link to="/services" className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary animated-border">
                Services
              </Link>
              <Link to="/upload-resume" className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary animated-border">
                Upload Resume
              </Link>
              {isLoggedIn && (
                <Link to="/dashboard" className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary animated-border">
                  Dashboard
                </Link>
              )}
            </div>
          </div>
          <div className="hidden md:flex items-center">
            {isLoggedIn ? (
              <>
                <span className="mr-4 text-sm font-medium text-foreground">
                  {userType === 'admin' ? 'Admin' : 'Candidate'}: {userType === 'admin' ? 'chndeep06@gmail.com' : ''}
                </span>
                <Button variant="outline" onClick={handleLogout} className="flex items-center text-foreground border-primary hover:bg-primary hover:text-primary-foreground">
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link to="/admin">
                  <Button variant="outline" className="mr-4 text-foreground border-primary hover:bg-primary hover:text-primary-foreground">Login</Button>
                </Link>
                <Link to="/signup">
                  <Button variant="outline" className="flex items-center text-foreground border-primary hover:bg-primary hover:text-primary-foreground">
                    <UserPlus className="h-4 w-4 mr-2" />
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-card shadow-lg animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary">
              Home
            </Link>
            <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary">
              About
            </Link>
            <Link to="/services" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary">
              Services
            </Link>
            <Link to="/upload-resume" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary">
              Upload Resume
            </Link>
            {isLoggedIn && (
              <Link to="/dashboard" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary">
                Dashboard
              </Link>
            )}
            <div className="flex flex-col space-y-2 mt-4 px-3 py-2">
              {isLoggedIn ? (
                <Button variant="outline" onClick={handleLogout} className="w-full flex items-center justify-center text-foreground border-primary hover:bg-primary hover:text-primary-foreground">
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              ) : (
                <>
                  <Link to="/admin">
                    <Button variant="outline" className="w-full text-foreground border-primary hover:bg-primary hover:text-primary-foreground">Login</Button>
                  </Link>
                  <Link to="/signup">
                    <Button variant="outline" className="w-full flex items-center justify-center text-foreground border-primary hover:bg-primary hover:text-primary-foreground">
                      <UserPlus className="h-4 w-4 mr-2" />
                      Sign Up
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
