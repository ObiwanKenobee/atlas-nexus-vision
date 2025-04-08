
import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import { mockUser, mockDashboardMetrics } from '../mockData';
import DashboardCard from '../components/DashboardCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Dashboard = () => {
  const [user] = useState(mockUser);

  return (
    <MainLayout user={user}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Welcome back, {user.name}. Here's an overview of your Atlas IO ecosystem.
          </p>
        </div>
        
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Key Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockDashboardMetrics.map(metric => (
              <DashboardCard key={metric.id} metric={metric} />
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">No recent activities yet. Check back later.</p>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">No new notifications.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
