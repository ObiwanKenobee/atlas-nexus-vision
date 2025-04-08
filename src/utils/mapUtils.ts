
import { DataPoint } from "../types";

export const getDataPointsByCategory = (dataPoints: DataPoint[], category: string): DataPoint[] => {
  return dataPoints.filter(point => point.category === category);
};

export const getMapCenterForRegion = (bounds: [number, number, number, number]): [number, number] => {
  const [west, south, east, north] = bounds;
  return [(west + east) / 2, (south + north) / 2];
};

export const getMapZoomForRegion = (bounds: [number, number, number, number]): number => {
  // Simple algorithm to determine zoom level based on bounds width/height
  const [west, south, east, north] = bounds;
  const width = east - west;
  const height = north - south;
  const maxDimension = Math.max(width, height);
  
  if (maxDimension > 100) return 2; // Continental view
  if (maxDimension > 50) return 3;
  if (maxDimension > 25) return 4;
  if (maxDimension > 10) return 5;
  if (maxDimension > 5) return 6;
  if (maxDimension > 1) return 8;
  return 10; // City level
};

export const formatDataValue = (value: number, category: string): string => {
  switch (category) {
    case "economic":
      return `${value.toFixed(1)}%`;
    case "technological":
      return `${value.toFixed(0)}%`;
    default:
      return value.toString();
  }
};

export const getCategoryColor = (category: string): string => {
  switch (category) {
    case "economic":
      return "#1E3A8A"; // Atlas blue
    case "cultural":
      return "#D4A76A"; // Atlas tan
    case "ecological":
      return "#166534"; // Atlas green
    case "technological":
      return "#C2410C"; // Atlas orange
    default:
      return "#64748B"; // Slate gray
  }
};

export const getPointSizeByValue = (value: number): number => {
  // Scale point size based on value
  return Math.max(5, Math.min(15, 5 + (value / 20)));
};
