
import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import MapView from '../components/MapView';
import LayerControl from '../components/LayerControl';
import { mockUser, mockDataLayers, mockDataPoints } from '../mockData';
import { DataLayer, DataPoint } from '../types';
import { useToast } from '@/hooks/use-toast';

const MapPage = () => {
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

  return (
    <MainLayout user={user}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Interactive Global Atlas
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Explore global data across economic, cultural, ecological, and technological dimensions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
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
      </div>
    </MainLayout>
  );
};

export default MapPage;
