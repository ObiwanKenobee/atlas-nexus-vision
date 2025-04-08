
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import PlaceholderSection from '../components/PlaceholderSection';
import { useToast } from '@/hooks/use-toast';
import { Upload } from 'lucide-react';

const Contribute = () => {
  const { toast } = useToast();

  const handleUploadClick = () => {
    toast({
      title: 'Coming Soon',
      description: 'The data contribution system will be available in the next update.',
    });
  };

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Contributor Portal
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Add your data to the global atlas and help build a more complete picture of our world.
          </p>
        </div>
        
        <PlaceholderSection
          title="Data Contribution Tools Coming Soon"
          description="Our contributor tools will allow you to upload datasets, manually enter data points, and track your contribution's impact on the platform."
          ctaText="Upload Data"
          ctaAction={handleUploadClick}
          icon={<Upload size={48} />}
        />
      </div>
    </MainLayout>
  );
};

export default Contribute;
