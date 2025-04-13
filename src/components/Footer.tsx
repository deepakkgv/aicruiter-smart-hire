
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-bold mb-4">AIcruiter</h2>
            <p className="text-gray-300 mb-4">
              Your AI-powered interview assistant for automated and enhanced hiring processes.
            </p>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition">Services</Link>
              </li>
              <li>
                <Link to="/interview" className="text-gray-300 hover:text-white transition">Interview</Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-300 hover:text-white transition">Dashboard</Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Admin Portal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/admin" className="text-gray-300 hover:text-white transition">Admin Login</Link>
              </li>
              <li>
                <Link to="/admin/reports" className="text-gray-300 hover:text-white transition">Reports</Link>
              </li>
              <li>
                <Link to="/admin/candidates" className="text-gray-300 hover:text-white transition">Candidates</Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 mt-0.5 text-gray-400" />
                <a href="mailto:chndeep06@gmail.com" className="text-gray-300 hover:text-white transition">
                  chndeep06@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 mt-0.5 text-gray-400" />
                <a href="tel:8838577446" className="text-gray-300 hover:text-white transition">
                  8838577446
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-gray-400" />
                <span className="text-gray-300">
                  Block 3A, Mambakkam High Road, Medavakkam, Chennai – 600100
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6">
          <p className="text-gray-400 text-center">
            &copy; {new Date().getFullYear()} AIcruiter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
