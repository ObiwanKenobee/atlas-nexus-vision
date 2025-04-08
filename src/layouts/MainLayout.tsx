
import React from 'react';
import Header from '../components/Header';
import { useAuth } from '../components/AuthProvider'; 
import { Navigate } from 'react-router-dom';

interface MainLayoutProps {
  children: React.ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
  requireAuth?: boolean;
}

const MainLayout: React.FC<MainLayoutProps> = ({ 
  children, 
  showHeader = true,
  showFooter = true,
  requireAuth = false
}) => {
  const { user, loading } = useAuth();

  // If auth is required and user is not logged in, redirect to /auth
  if (requireAuth && !loading && !user) {
    return <Navigate to="/auth" />;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      {showHeader && <Header />}
      
      <main className="flex-grow">
        {children}
      </main>
      
      {showFooter && (
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
      )}
    </div>
  );
};

export default MainLayout;
