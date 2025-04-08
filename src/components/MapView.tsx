
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { DataLayer, DataPoint } from '../types';
import { getCategoryColor, getPointSizeByValue, formatDataValue } from '../utils/mapUtils';
import MapboxTokenInput from './MapboxTokenInput';

interface MapViewProps {
  layers: DataLayer[];
  dataPoints: DataPoint[];
  onSelectPoint?: (point: DataPoint) => void;
}

const MapView: React.FC<MapViewProps> = ({ layers, dataPoints, onSelectPoint }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapboxToken, setMapboxToken] = useState<string>('');
  
  useEffect(() => {
    // Check local storage for token on component mount
    const storedToken = localStorage.getItem('mapbox-token');
    if (storedToken) {
      setMapboxToken(storedToken);
    }
  }, []);

  useEffect(() => {
    // Initialize map whenever the token changes
    if (mapboxToken && mapContainer.current && !map.current) {
      initializeMap(mapboxToken);
    }
  }, [mapboxToken]);

  const initializeMap = (token: string) => {
    if (!mapContainer.current) return;
    
    try {
      mapboxgl.accessToken = token;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/dark-v11',
        projection: 'globe',
        zoom: 1.5,
        center: [0, 20],
        pitch: 45,
      });

      map.current.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
      map.current.scrollZoom.disable();
      map.current.dragRotate.enable();
      
      map.current.on('style.load', () => {
        if (!map.current) return;
        
        map.current.setFog({
          'color': 'rgb(18, 40, 75)',
          'high-color': 'rgb(36, 92, 223)',
          'horizon-blend': 0.1,
          'space-color': '#010b19',
          'star-intensity': 0.6
        });
        
        setMapLoaded(true);
      });
      
      // Spin the globe
      const secondsPerRevolution = 120;
      const maxSpinZoom = 3;
      
      let userInteracting = false;
      
      function spinGlobe() {
        if (!map.current || userInteracting) return;
        
        const zoom = map.current.getZoom();
        if (zoom < maxSpinZoom) {
          const distancePerSecond = 360 / secondsPerRevolution;
          const center = map.current.getCenter();
          center.lng -= distancePerSecond / 60;
          map.current.easeTo({ center, duration: 1000, easing: (n) => n });
        }
      }
      
      setInterval(spinGlobe, 1000);
      
      map.current.on('mousedown', () => {
        userInteracting = true;
      });
      
      map.current.on('mouseup', () => {
        userInteracting = false;
        setTimeout(() => {
          spinGlobe();
        }, 3000);
      });
    } catch (error) {
      console.error("Error initializing map:", error);
      // Clear token if it's invalid
      localStorage.removeItem('mapbox-token');
      setMapboxToken('');
    }
  };
  
  // Update map when layers or data points change
  useEffect(() => {
    if (!mapLoaded || !map.current) return;
    
    // Clear existing markers
    const markers = document.querySelectorAll('.mapboxgl-marker');
    markers.forEach(marker => marker.remove());
    
    // Add markers for visible layers
    const visibleLayers = layers.filter(layer => layer.visible);
    
    if (visibleLayers.length === 0) return;

    const visibleCategories = visibleLayers.map(layer => layer.category);
    const visiblePoints = dataPoints.filter(point => 
      visibleCategories.includes(point.category as any)
    );
    
    visiblePoints.forEach(point => {
      const el = document.createElement('div');
      el.className = 'relative';
      
      const dot = document.createElement('div');
      const size = getPointSizeByValue(point.value);
      const color = getCategoryColor(point.category);
      
      dot.style.width = `${size}px`;
      dot.style.height = `${size}px`;
      dot.style.borderRadius = '50%';
      dot.style.backgroundColor = color;
      dot.style.opacity = '0.8';
      
      const ping = document.createElement('div');
      ping.style.width = `${size}px`;
      ping.style.height = `${size}px`;
      ping.style.borderRadius = '50%';
      ping.style.backgroundColor = color;
      ping.style.opacity = '0.4';
      ping.style.position = 'absolute';
      ping.style.top = '0';
      ping.style.left = '0';
      ping.style.transform = 'scale(1)';
      ping.style.animation = 'map-ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite';
      
      el.appendChild(ping);
      el.appendChild(dot);
      
      const popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false,
        offset: 10
      });

      popup.setHTML(`
        <div class="bg-atlas-darkbg text-white p-2 rounded-md text-sm">
          <div class="font-bold">${point.label}</div>
          <div>${formatDataValue(point.value, point.category)}</div>
        </div>
      `);
      
      const marker = new mapboxgl.Marker(el)
        .setLngLat([point.longitude, point.latitude])
        .setPopup(popup)
        .addTo(map.current!);
      
      el.addEventListener('mouseenter', () => {
        marker.getElement().style.zIndex = '10';
        marker.togglePopup();
        
        if (onSelectPoint) {
          onSelectPoint(point);
        }
      });
      
      el.addEventListener('mouseleave', () => {
        marker.getElement().style.zIndex = '1';
        marker.togglePopup();
      });
      
      el.addEventListener('click', () => {
        if (onSelectPoint) {
          onSelectPoint(point);
        }
      });
    });
  }, [layers, dataPoints, mapLoaded, onSelectPoint]);

  // Clean up map when component unmounts
  useEffect(() => {
    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  const handleTokenSet = (token: string) => {
    setMapboxToken(token);
    localStorage.setItem('mapbox-token', token);
  };

  // Render token input if token not set
  if (!mapboxToken) {
    return <MapboxTokenInput onTokenSet={handleTokenSet} />;
  }

  return (
    <div className="relative w-full h-[70vh] overflow-hidden rounded-lg shadow-xl">
      <div ref={mapContainer} className="absolute inset-0" />
      <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm p-3 rounded-md text-xs text-white">
        <span>Atlas IO Global View</span>
      </div>
      <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm py-2 px-3 rounded-md text-xs text-white flex items-center">
        <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
        <span>Live Data</span>
      </div>
    </div>
  );
};

export default MapView;
