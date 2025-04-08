
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import PlaceholderSection from '../components/PlaceholderSection';
import { useToast } from '@/hooks/use-toast';
import { LightbulbIcon } from 'lucide-react';

const Forecast = () => {
  const { toast } = useToast();

  const handleDemoClick = () => {
    toast({
      title: 'Coming Soon',
      description: 'The forecasting engine will be available in the next update.',
    });
  };

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Scenario Forecasting Engine
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Build futures, not just predictions. Simulate different scenarios and visualize outcomes.
          </p>
        </div>
        
        <PlaceholderSection
          title="Forecasting Engine Coming Soon"
          description="Our advanced forecasting tools will allow you to create and explore different future scenarios based on economic, cultural, ecological, and technological factors."
          ctaText="Try Demo"
          ctaAction={handleDemoClick}
          icon={<LightbulbIcon size={48} />}
        />
      </div>
    </MainLayout>
  );
};

export default Forecast;
