import React from 'react';
import * as Icons from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface DynamicIconProps {
  name: string;
  className?: string;
}

const DynamicIcon: React.FC<DynamicIconProps> = ({ name, className }) => {
  // Access the icon from the Icons object using the name
  // Fallback to HelpCircle if not found
  const IconComponent = (Icons as unknown as Record<string, LucideIcon>)[name] || Icons.HelpCircle;
  
  return <IconComponent className={className} />;
};

export default DynamicIcon;
