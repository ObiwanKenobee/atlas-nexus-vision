
import React, { useState } from 'react';
import Header from '../components/Header';
import MapView from '../components/MapView';
import LayerControl from '../components/LayerControl';
import DashboardCard from '../components/DashboardCard';
import CaseStudyCard from '../components/CaseStudyCard';
import { 
  mockUser, 
  mockDataLayers, 
  mockDataPoints, 
  mockDashboardMetrics,
  mockCaseStudies
} from '../mockData';
import { DataLayer, DataPoint } from '../types';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [user] = useState(mockUser);
  const [dataLayers, setDataLayers] = useState<DataLayer[]>(mockDataLayers);
  const [selectedPoint, setSelectedPoint] = useState<DataPoint | null>(null);
  const { toast } = useToast();

  const handleToggleLayer = (layerId: string) => {
    setDataLayers(layers =>
      layers.map(layer =>
        layer.id === layerId
          ? { ...layer, visible: !layer.visible }
          : layer
      )
    );
    
    // Show toast for better UX
    const layer = dataLayers.find(l => l.id === layerId);
    if (layer) {
      toast({
        title: layer.visible ? "Layer Hidden" : "Layer Visible",
        description: `${layer.name} layer is now ${layer.visible ? "hidden" : "visible"}`,
        duration: 2000,
      });
    }
  };

  const handlePointSelect = (point: DataPoint) => {
    setSelectedPoint(point);
    toast({
      title: `${point.label} Selected`,
      description: `Value: ${point.value} (${point.category})`,
      duration: 3000,
    });
  };

  const handleCaseStudyClick = (id: string) => {
    toast({
      title: "Case Study Selected",
      description: "Full case study viewing will be available in the next update.",
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header user={user} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Global Living Atlas
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl">
            Explore the interconnected world of economics, culture, ecology, and technology
            in one unified platform. An unprecedented layer of intelligence built with
            a Zero to One mindset.
          </p>
        </div>
        
        {/* World Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
          <div className="lg:col-span-3">
            <MapView 
              layers={dataLayers}
              dataPoints={mockDataPoints}
              onSelectPoint={handlePointSelect}
            />
          </div>
          <div>
            <LayerControl 
              layers={dataLayers}
              onToggleLayer={handleToggleLayer}
            />
            
            {selectedPoint && (
              <div className="mt-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                <h3 className="font-medium text-lg mb-2">Selected Point</h3>
                <div className="space-y-2">
                  <div>
                    <span className="text-gray-500 dark:text-gray-400">Location:</span>
                    <span className="ml-2 font-medium">{selectedPoint.label}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 dark:text-gray-400">Category:</span>
                    <span className="ml-2 font-medium">{selectedPoint.category}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 dark:text-gray-400">Value:</span>
                    <span className="ml-2 font-medium">{selectedPoint.value}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 dark:text-gray-400">Coordinates:</span>
                    <span className="ml-2 font-medium text-sm">
                      {selectedPoint.latitude.toFixed(3)}, {selectedPoint.longitude.toFixed(3)}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Key Metrics Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            Key Global Metrics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockDashboardMetrics.map(metric => (
              <DashboardCard key={metric.id} metric={metric} />
            ))}
          </div>
        </div>
        
        {/* Case Studies Section */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Zero to One Case Studies
            </h2>
            <button className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
              View All Studies
            </button>
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
      </main>
      
      <footer className="bg-white dark:bg-gray-800 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-xl font-bold bg-gradient-to-r from-atlas-blue to-atlas-green bg-clip-text text-transparent mb-4 md:mb-0">
              Atlas<span className="text-black dark:text-white">IO</span>
            </div>
            <div className="text-gray-500 dark:text-gray-400 text-sm">
              © {new Date().getFullYear()} Atlas IO. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
