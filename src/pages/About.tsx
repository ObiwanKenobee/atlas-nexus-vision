
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Atlas<span className="text-atlas-blue">IO</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A platform to build the future map of humanity. We connect data, people, and insights to create a global living atlas.
          </p>
        </div>
        
        <div className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Our Vision</CardTitle>
              <CardDescription>Building a global living atlas for humanity</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert">
              <p>
                Atlas IO represents a fundamental paradigm shift in how we understand, visualize, and plan for our collective future. We're building more than just a mapping platform – we're creating a living, breathing atlas of humanity that connects economic, cultural, ecological, and technological dimensions in ways never before possible.
              </p>
              <p>
                We believe that by integrating these diverse layers of data and insight, we can unlock unprecedented potential for innovation, sustainability, and human flourishing.
              </p>
              <blockquote>
                "The best way to predict the future is to create it."
              </blockquote>
            </CardContent>
          </Card>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Our Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-atlas-blue">Zero to One Thinking</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We focus on breakthrough innovations that create new categories rather than incremental improvements.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-atlas-green">Global First</h3>
              <p className="text-gray-600 dark:text-gray-300">
                While we start with focus, our architecture and thinking are designed for global scale from day one.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-atlas-orange">Open Ecosystem</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We believe in building with and for our community of contributors, analysts, and visionaries.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Our Roadmap</h2>
          <div className="relative pl-8 border-l-2 border-atlas-blue space-y-10">
            <div className="relative">
              <div className="absolute -left-[41px] bg-atlas-blue rounded-full h-6 w-6 flex items-center justify-center">
                <span className="text-white text-xs">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-1">Phase 1: Foundation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Launch the core mapping platform with initial data layers and basic forecasting capabilities.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -left-[41px] bg-atlas-green rounded-full h-6 w-6 flex items-center justify-center">
                <span className="text-white text-xs">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-1">Phase 2: Expansion</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Build out the contributor network, increase data density, and enhance forecasting capabilities.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -left-[41px] bg-atlas-orange rounded-full h-6 w-6 flex items-center justify-center">
                <span className="text-white text-xs">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-1">Phase 3: Intelligence</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Introduce AI-assisted insights, expand to new regions, and launch the developer API.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-atlas-darkbg text-white p-8 rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-4">Join the Movement</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            We're bringing together contributors, analysts, and visionaries to build the future map of humanity. 
            Be part of this journey.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-2 bg-atlas-blue rounded-md hover:bg-opacity-80 transition-colors">
              Become a Contributor
            </button>
            <button className="px-6 py-2 bg-white text-atlas-darkbg rounded-md hover:bg-opacity-90 transition-colors">
              Join Our Network
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
