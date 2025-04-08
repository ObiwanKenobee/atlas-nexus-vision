
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { mockCaseStudies } from '../mockData';
import CaseStudyCard from '../components/CaseStudyCard';
import { useToast } from '@/hooks/use-toast';

const Stories = () => {
  const { toast } = useToast();

  const handleCaseStudyClick = (id: string) => {
    toast({
      title: "Case Study Selected",
      description: "Full case study viewing will be available in the next update.",
      duration: 3000,
    });
  };

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Atlas Stories & Case Studies
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Learning from "Zero to One" examples across the world.
          </p>
        </div>
        
        <div className="mb-12">
          <div className="flex flex-wrap justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Featured Case Studies
            </h2>
            <div className="flex space-x-2">
              <button className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
                View All Studies
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockCaseStudies.map(study => (
              <CaseStudyCard 
                key={study.id} 
                caseStudy={study} 
                onClick={() => handleCaseStudyClick(study.id)} 
              />
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Stories;
