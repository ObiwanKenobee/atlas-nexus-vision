
import React from 'react';
import { Button } from './ui/button';

interface PlaceholderSectionProps {
  title: string;
  description: string;
  ctaText?: string;
  ctaAction?: () => void;
  icon?: React.ReactNode;
}

const PlaceholderSection: React.FC<PlaceholderSectionProps> = ({ 
  title, 
  description, 
  ctaText, 
  ctaAction,
  icon
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      {icon && <div className="mb-6 text-atlas-blue">{icon}</div>}
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">{title}</h2>
      <p className="max-w-md mb-8 text-gray-600 dark:text-gray-400">{description}</p>
      {ctaText && ctaAction && (
        <Button onClick={ctaAction}>
          {ctaText}
        </Button>
      )}
    </div>
  );
};

export default PlaceholderSection;
