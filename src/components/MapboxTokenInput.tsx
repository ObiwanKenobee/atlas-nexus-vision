
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from '@/hooks/use-toast';

interface MapboxTokenInputProps {
  onTokenSet: (token: string) => void;
}

const MapboxTokenInput: React.FC<MapboxTokenInputProps> = ({ onTokenSet }) => {
  const [token, setToken] = useState('');
  const { toast } = useToast();

  const handleSetToken = () => {
    if (!token || token.trim().length < 10) {
      toast({
        title: 'Invalid Token',
        description: 'Please enter a valid Mapbox token.',
        variant: 'destructive'
      });
      return;
    }

    localStorage.setItem('mapbox-token', token);
    onTokenSet(token);
    toast({
      title: 'Token Set Successfully',
      description: 'Your Mapbox token has been saved.',
    });
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 max-w-md mx-auto">
      <h3 className="font-semibold text-xl mb-4">Mapbox Token Required</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Atlas IO requires a Mapbox token to display the interactive globe. Visit{' '}
        <a 
          href="https://mapbox.com/" 
          target="_blank" 
          rel="noreferrer" 
          className="text-blue-600 hover:underline"
        >
          Mapbox.com
        </a>{' '}
        to create a free account and get your public token.
      </p>
      <div className="space-y-4">
        <Input
          placeholder="Enter your Mapbox token" 
          value={token}
          onChange={(e) => setToken(e.target.value)}
        />
        <div className="flex justify-end">
          <Button onClick={handleSetToken}>
            Save Token
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MapboxTokenInput;
