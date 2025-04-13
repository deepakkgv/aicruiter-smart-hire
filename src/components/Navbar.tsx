
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-aicruiter-blue">AIcruiter</span>
            </Link>
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              <Link to="/" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-aicruiter-blue animated-border">
                Home
              </Link>
              <Link to="/services" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-aicruiter-blue animated-border">
                Services
              </Link>
              <Link to="/interview" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-aicruiter-blue animated-border">
                Interview
              </Link>
              <Link to="/dashboard" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-aicruiter-blue animated-border">
                Dashboard
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <Link to="/admin">
              <Button variant="outline" className="mr-4">Admin Login</Button>
            </Link>
            <Link to="/interview">
              <Button className="bg-aicruiter-blue hover:bg-blue-700">Start Interview</Button>
            </Link>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-aicruiter-blue focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-aicruiter-blue">
              Home
            </Link>
            <Link to="/services" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-aicruiter-blue">
              Services
            </Link>
            <Link to="/interview" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-aicruiter-blue">
              Interview
            </Link>
            <Link to="/dashboard" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-aicruiter-blue">
              Dashboard
            </Link>
            <div className="flex flex-col space-y-2 mt-4 px-3 py-2">
              <Link to="/admin">
                <Button variant="outline" className="w-full">Admin Login</Button>
              </Link>
              <Link to="/interview">
                <Button className="w-full bg-aicruiter-blue hover:bg-blue-700">Start Interview</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
