
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
import { Button } from '@/components/ui/button';
import { ArrowRight, Globe, ChartBar, Users } from 'lucide-react';

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
        {/* Hero Section */}
        <div className="mb-16 pt-8 pb-16 text-center">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Build the Future Map of <span className="bg-gradient-to-r from-atlas-blue to-atlas-green bg-clip-text text-transparent">Humanity</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
            Explore the interconnected world of economics, culture, ecology, and technology
            in one unified platform. An unprecedented layer of intelligence built with
            a Zero to One mindset.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/map">
                Explore Atlas <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contribute">
                Join as Contributor
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <Link to="/auth">
                Log in to Dashboard
              </Link>
            </Button>
          </div>
        </div>
        
        {/* World Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-16">
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

        {/* Platform Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
            Platform Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <Globe className="text-atlas-blue h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Interactive Atlas</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Explore global data across multiple dimensions with our interactive mapping platform.
              </p>
              <Button variant="link" asChild className="p-0">
                <Link to="/map" className="flex items-center">
                  Explore Map <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
                <ChartBar className="text-atlas-green h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Data Insights</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Discover patterns and trends with powerful analytics and visualization tools.
              </p>
              <Button variant="link" asChild className="p-0">
                <Link to="/insights" className="flex items-center">
                  View Insights <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mb-4">
                <Users className="text-atlas-orange h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Community Network</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Connect with contributors, analysts, and visionaries from around the world.
              </p>
              <Button variant="link" asChild className="p-0">
                <Link to="/network" className="flex items-center">
                  Join Network <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Key Metrics Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            Key Global Metrics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockDashboardMetrics.map(metric => (
              <DashboardCard key={metric.id} metric={metric} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link to="/dashboard">
                View Full Dashboard
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Case Studies Section */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Zero to One Case Studies
            </h2>
            <Button variant="ghost" asChild className="text-sm">
              <Link to="/stories">
                View All Studies
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockCaseStudies.slice(0, 3).map(study => (
              <CaseStudyCard 
                key={study.id} 
                caseStudy={study} 
                onClick={() => handleCaseStudyClick(study.id)} 
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-atlas-darkbg text-white p-8 rounded-xl text-center mb-16">
          <h2 className="text-2xl font-bold mb-4">Ready to Join the Movement?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Be part of building the future map of humanity. Contribute data, analyze trends, or simply explore the atlas.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="default">
              <Link to="/auth">
                Create Account
              </Link>
            </Button>
            <Button asChild variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
              <Link to="/about">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </main>
      
      <footer className="bg-white dark:bg-gray-800 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-xl font-bold bg-gradient-to-r from-atlas-blue to-atlas-green bg-clip-text text-transparent mb-4">
                Atlas<span className="text-black dark:text-white">IO</span>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Building the future map of humanity.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-4">Platform</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/map" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">Interactive Map</Link></li>
                <li><Link to="/forecast" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">Forecasting Engine</Link></li>
                <li><Link to="/insights" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">Data Insights</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Community</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/stories" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">Case Studies</Link></li>
                <li><Link to="/contribute" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">Contribute Data</Link></li>
                <li><Link to="/network" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">Network</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">About</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">Our Mission</Link></li>
                <li><a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">Contact</a></li>
                <li><a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-6 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 dark:text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Atlas IO. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-atlas-blue">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-atlas-blue">
                <span className="sr-only">GitHub</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-atlas-blue">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
