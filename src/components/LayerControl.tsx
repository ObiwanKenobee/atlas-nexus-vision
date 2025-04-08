
import React from 'react';
import { CheckCircle, Circle, Globe, BarChart4, Trees, Binary } from 'lucide-react';
import { DataLayer } from '../types';

interface LayerControlProps {
  layers: DataLayer[];
  onToggleLayer: (layerId: string) => void;
}

const LayerControl: React.FC<LayerControlProps> = ({ layers, onToggleLayer }) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'economic':
        return <BarChart4 className="w-5 h-5" />;
      case 'cultural':
        return <Globe className="w-5 h-5" />;
      case 'ecological':
        return <Trees className="w-5 h-5" />;
      case 'technological':
        return <Binary className="w-5 h-5" />;
      default:
        return <Globe className="w-5 h-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'economic':
        return 'bg-atlas-blue text-white';
      case 'cultural':
        return 'bg-atlas-tan text-black';
      case 'ecological':
        return 'bg-atlas-green text-white';
      case 'technological':
        return 'bg-atlas-orange text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 space-y-3">
      <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-3">Data Layers</h3>
      <div className="space-y-2">
        {layers.map(layer => (
          <div
            key={layer.id}
            className="flex items-center justify-between p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md cursor-pointer transition-colors"
            onClick={() => onToggleLayer(layer.id)}
          >
            <div className="flex items-center space-x-2">
              <div className={`p-1.5 rounded-md ${getCategoryColor(layer.category)}`}>
                {getCategoryIcon(layer.category)}
              </div>
              <div>
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300">{layer.name}</div>
                <div className="text-xs text-gray-500">{layer.source}</div>
              </div>
            </div>
            <div>
              {layer.visible ? (
                <CheckCircle className="w-5 h-5 text-blue-500" />
              ) : (
                <Circle className="w-5 h-5 text-gray-300 dark:text-gray-600" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LayerControl;
