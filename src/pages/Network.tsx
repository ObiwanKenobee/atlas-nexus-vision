
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import PlaceholderSection from '../components/PlaceholderSection';
import { useToast } from '@/hooks/use-toast';
import { Users } from 'lucide-react';

const Network = () => {
  const { toast } = useToast();

  const handleNetworkClick = () => {
    toast({
      title: 'Coming Soon',
      description: 'The Atlas community network will be available in the next update.',
    });
  };

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Atlas Community Network
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Connect with contributors, analysts, and visionaries from around the world.
          </p>
        </div>
        
        <PlaceholderSection
          title="Community Platform Coming Soon"
          description="Our community network will allow you to connect with other members, collaborate on projects, and share insights."
          ctaText="Join Waitlist"
          ctaAction={handleNetworkClick}
          icon={<Users size={48} />}
        />
      </div>
    </MainLayout>
  );
};

export default Network;
