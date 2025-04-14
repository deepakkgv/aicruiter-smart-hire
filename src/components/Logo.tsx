
import React from 'react';
import { BrainCircuit } from 'lucide-react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <div className="w-8 h-8 bg-aicruiter-blue text-white rounded-lg flex items-center justify-center">
        <BrainCircuit size={20} />
      </div>
      <span className="text-2xl font-bold text-aicruiter-blue">AIcruiter</span>
    </Link>
  );
};

export default Logo;
