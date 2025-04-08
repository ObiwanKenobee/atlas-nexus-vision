
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { CaseStudy } from '../types';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  onClick?: () => void;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseStudy, onClick }) => {
  return (
    <Card 
      className="overflow-hidden hover:shadow-lg transition-all cursor-pointer"
      onClick={onClick}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={caseStudy.imageUrl} 
          alt={caseStudy.title} 
          className="w-full h-full object-cover"
        />
      </div>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 rounded-full px-3 py-1">
            {caseStudy.region}
          </div>
          <div className="text-sm font-medium bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300 rounded-full px-3 py-1">
            {caseStudy.industry}
          </div>
        </div>
        <h3 className="text-lg font-semibold mt-2">{caseStudy.title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
          {caseStudy.summary}
        </p>
      </CardContent>
      <CardFooter className="pt-0 pb-4">
        <div className="flex flex-wrap gap-1">
          {caseStudy.tags.map(tag => (
            <div 
              key={tag} 
              className="text-xs bg-gray-100 dark:bg-gray-700 rounded-full px-2 py-1"
            >
              #{tag}
            </div>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
};

export default CaseStudyCard;
