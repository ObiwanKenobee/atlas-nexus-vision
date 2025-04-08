
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import PlaceholderSection from '../components/PlaceholderSection';
import { useToast } from '@/hooks/use-toast';
import { BarChart4 } from 'lucide-react';

const Insights = () => {
  const { toast } = useToast();

  const handleInsightsClick = () => {
    toast({
      title: 'Coming Soon',
      description: 'The insights and analytics dashboard will be available in the next update.',
    });
  };

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Data Insights & Analytics
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Discover patterns and trends across our global dataset.
          </p>
        </div>
        
        <PlaceholderSection
          title="Analytics Dashboard Coming Soon"
          description="Our analytics tools will allow you to explore data trends, create custom visualizations, and download comprehensive reports."
          ctaText="Preview Analytics"
          ctaAction={handleInsightsClick}
          icon={<BarChart4 size={48} />}
        />
      </div>
    </MainLayout>
  );
};

export default Insights;
