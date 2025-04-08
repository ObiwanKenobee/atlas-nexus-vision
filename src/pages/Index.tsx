
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { Button } from '@/components/ui/button';
import { ArrowRight, Globe, ChartBar, Users, MapPin, Layers, LineChart, Network } from 'lucide-react';
import { useAuth } from '@/components/AuthProvider';

const Index = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <div className="relative">
          {/* Background with overlay */}
          <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-atlas-blue/30 to-atlas-green/20 z-0"></div>
          
          {/* World Map background */}
          <div className="absolute inset-0 opacity-20 z-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 800">
              <path fill="currentColor" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,218.7C1248,245,1344,235,1392,229.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
          
          {/* Content */}
          <div className="relative z-10 pt-24 pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-8">
                Build the Future Map of <span className="bg-gradient-to-r from-atlas-blue to-atlas-green bg-clip-text text-transparent">Humanity</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
                Explore the interconnected world of economics, culture, ecology, and technology
                in one unified platform. A groundbreaking layer of intelligence built with
                a Zero to One mindset.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {user ? (
                  <Button asChild size="lg" className="bg-atlas-blue hover:bg-atlas-blue/90">
                    <Link to="/dashboard">
                      Go to Dashboard <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                ) : (
                  <>
                    <Button asChild size="lg" className="bg-atlas-blue hover:bg-atlas-blue/90">
                      <Link to="/map">
                        Explore Atlas <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                      <Link to="/auth">
                        Sign In
                      </Link>
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Features Section */}
        <div className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Platform Features</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Atlas IO seamlessly connects global data across multiple dimensions to deliver unprecedented insights
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700/50 transition-all border border-gray-700">
                <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="text-atlas-blue h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Global Mapping</h3>
                <p className="text-gray-400 mb-4">
                  Visualize and interact with comprehensive data layers spanning the entire globe
                </p>
                <Button variant="link" asChild className="p-0 text-atlas-blue">
                  <Link to="/map" className="flex items-center">
                    Open Map <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              
              <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700/50 transition-all border border-gray-700">
                <div className="w-12 h-12 bg-green-900/50 rounded-full flex items-center justify-center mb-4">
                  <Layers className="text-atlas-green h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Multi-Layer Analysis</h3>
                <p className="text-gray-400 mb-4">
                  Toggle between economic, environmental, social, and technological data layers
                </p>
                <Button variant="link" asChild className="p-0 text-atlas-green">
                  <Link to="/insights" className="flex items-center">
                    View Layers <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              
              <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700/50 transition-all border border-gray-700">
                <div className="w-12 h-12 bg-purple-900/50 rounded-full flex items-center justify-center mb-4">
                  <LineChart className="text-purple-400 h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Forecasting Engine</h3>
                <p className="text-gray-400 mb-4">
                  Develop scenarios and predict global trends using our sophisticated modeling tools
                </p>
                <Button variant="link" asChild className="p-0 text-purple-400">
                  <Link to="/forecast" className="flex items-center">
                    Try Forecasting <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              
              <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700/50 transition-all border border-gray-700">
                <div className="w-12 h-12 bg-orange-900/50 rounded-full flex items-center justify-center mb-4">
                  <Network className="text-orange-400 h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Community Network</h3>
                <p className="text-gray-400 mb-4">
                  Connect with contributors, analysts, and visionaries from around the world
                </p>
                <Button variant="link" asChild className="p-0 text-orange-400">
                  <Link to="/network" className="flex items-center">
                    Join Network <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-atlas-darkbg to-gray-900">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join the Movement?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Be part of building the future map of humanity. Contribute data, analyze trends, 
              or simply explore the atlas of possibilities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-atlas-blue hover:bg-atlas-blue/90">
                <Link to="/auth">
                  Create Account
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link to="/about">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-black py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-xl font-bold bg-gradient-to-r from-atlas-blue to-atlas-green bg-clip-text text-transparent mb-4">
                Atlas<span className="text-white">IO</span>
              </div>
              <p className="text-gray-500 text-sm">
                Building the future map of humanity.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-300 mb-4">Platform</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/map" className="text-gray-500 hover:text-atlas-blue">Interactive Map</Link></li>
                <li><Link to="/forecast" className="text-gray-500 hover:text-atlas-blue">Forecasting Engine</Link></li>
                <li><Link to="/insights" className="text-gray-500 hover:text-atlas-blue">Data Insights</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-300 mb-4">Community</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/stories" className="text-gray-500 hover:text-atlas-blue">Case Studies</Link></li>
                <li><Link to="/contribute" className="text-gray-500 hover:text-atlas-blue">Contribute Data</Link></li>
                <li><Link to="/network" className="text-gray-500 hover:text-atlas-blue">Network</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-300 mb-4">About</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="text-gray-500 hover:text-atlas-blue">Our Mission</Link></li>
                <li><a href="#" className="text-gray-500 hover:text-atlas-blue">Contact</a></li>
                <li><a href="#" className="text-gray-500 hover:text-atlas-blue">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Atlas IO. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-atlas-blue">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-atlas-blue">
                <span className="sr-only">GitHub</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-atlas-blue">
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
