
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, className }) => {
  return (
    <div className={cn(
      "p-6 rounded-xl transition-all duration-300 hover:-translate-y-1",
      className
    )}>
      <div className="mb-4 rounded-full bg-green-500/20 p-3 inline-block">
        <Icon className="h-6 w-6 text-green-500" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default FeatureCard;
