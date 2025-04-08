
import { User, DataLayer, DataPoint, Dashboard, DashboardMetric, CaseStudy, UserRole } from "../types";

// Mock user data
export const mockUser: User = {
  id: "user-1",
  name: "Jane Smith",
  email: "jane.smith@atlas.io",
  role: {
    id: "role-1",
    name: "analyst" // Changed from string to one of the allowed role types
  },
  avatar: "https://randomuser.me/api/portraits/women/44.jpg"
};

// Mock data layers
export const mockDataLayers: DataLayer[] = [
  {
    id: "layer-1",
    name: "Economic Growth Rate",
    category: "economic",
    description: "Annual GDP growth rate by country",
    visible: true,
    source: "World Bank, 2023",
    lastUpdated: "2023-10-15"
  },
  {
    id: "layer-2",
    name: "Cultural Heritage Sites",
    category: "cultural",
    description: "UNESCO World Heritage Sites",
    visible: false,
    source: "UNESCO, 2023",
    lastUpdated: "2023-09-20"
  },
  {
    id: "layer-3",
    name: "Reforestation Efforts",
    category: "ecological",
    description: "Areas under active reforestation programs",
    visible: true,
    source: "Global Forest Watch, 2023",
    lastUpdated: "2023-11-05"
  },
  {
    id: "layer-4",
    name: "Tech Innovation Hubs",
    category: "technological",
    description: "Emerging technology innovation centers",
    visible: true,
    source: "Startup Genome, 2023",
    lastUpdated: "2023-10-30"
  }
];

// Mock data points
export const mockDataPoints: DataPoint[] = [
  // Economic Data Points
  {
    id: "point-1",
    latitude: 37.7749,
    longitude: -122.4194,
    value: 4.5,
    label: "San Francisco",
    category: "economic",
    countryCode: "US"
  },
  {
    id: "point-2",
    latitude: 51.5074,
    longitude: -0.1278,
    value: 2.1,
    label: "London",
    category: "economic",
    countryCode: "GB"
  },
  {
    id: "point-3",
    latitude: 35.6762,
    longitude: 139.6503,
    value: 1.8,
    label: "Tokyo",
    category: "economic",
    countryCode: "JP"
  },
  
  // Cultural Data Points
  {
    id: "point-4",
    latitude: 27.1751,
    longitude: 78.0421,
    value: 95,
    label: "Taj Mahal",
    category: "cultural",
    countryCode: "IN"
  },
  {
    id: "point-5",
    latitude: 29.9792,
    longitude: 31.1342,
    value: 92,
    label: "Great Pyramids",
    category: "cultural",
    countryCode: "EG"
  },
  
  // Ecological Data Points
  {
    id: "point-6",
    latitude: -0.1911,
    longitude: 37.3188,
    value: 78,
    label: "Mt. Kenya Forest",
    category: "ecological",
    countryCode: "KE"
  },
  {
    id: "point-7",
    latitude: -3.0674,
    longitude: 37.3556,
    value: 85,
    label: "Mt. Kilimanjaro",
    category: "ecological",
    countryCode: "TZ"
  },
  
  // Technological Data Points
  {
    id: "point-8",
    latitude: -1.2921,
    longitude: 36.8219,
    value: 65,
    label: "Nairobi Tech Hub",
    category: "technological",
    countryCode: "KE"
  },
  {
    id: "point-9",
    latitude: -33.8688,
    longitude: 151.2093,
    value: 72,
    label: "Sydney Tech Precinct",
    category: "technological",
    countryCode: "AU"
  },
  {
    id: "point-10",
    latitude: 1.3521,
    longitude: 103.8198,
    value: 88,
    label: "Singapore AI Center",
    category: "technological",
    countryCode: "SG"
  }
];

// Mock dashboard metrics
export const mockDashboardMetrics: DashboardMetric[] = [
  {
    id: "metric-1",
    title: "Global Economic Growth",
    value: 3.4,
    change: 0.2,
    timeframe: "YoY",
    type: "percentage",
    visualization: "line"
  },
  {
    id: "metric-2",
    title: "Cultural Preservation Index",
    value: 72,
    change: -1.5,
    timeframe: "Last 5Y",
    type: "number",
    visualization: "bar"
  },
  {
    id: "metric-3",
    title: "Environmental Sustainability",
    value: 64,
    change: 4.2,
    timeframe: "YoY",
    type: "percentage",
    visualization: "pie"
  },
  {
    id: "metric-4",
    title: "Tech Adoption Rate",
    value: 56,
    change: 12.3,
    timeframe: "Last 3Y",
    type: "percentage",
    visualization: "line"
  }
];

// Mock case studies
export const mockCaseStudies: CaseStudy[] = [
  {
    id: "case-1",
    title: "Rwanda's Tech Revolution",
    region: "East Africa",
    industry: "Technology",
    summary: "How Rwanda leapfrogged traditional development stages to become a tech hub.",
    content: "In just two decades, Rwanda has transformed from a war-torn nation to one of Africa's most promising tech hubs...",
    imageUrl: "https://source.unsplash.com/random/800x600/?rwanda",
    tags: ["Africa", "Technology", "Innovation"],
    publishedDate: "2023-10-12"
  },
  {
    id: "case-2",
    title: "Costa Rica's Ecological Recovery",
    region: "Central America",
    industry: "Conservation",
    summary: "Costa Rica's journey from deforestation to becoming a global environmental leader.",
    content: "In the 1980s, Costa Rica had one of the highest deforestation rates in Latin America...",
    imageUrl: "https://source.unsplash.com/random/800x600/?costarica",
    tags: ["Conservation", "Policy", "Sustainability"],
    publishedDate: "2023-09-18"
  },
  {
    id: "case-3",
    title: "Estonia's Digital Society",
    region: "Europe",
    industry: "e-Governance",
    summary: "How a small Baltic nation became the world's most advanced digital society.",
    content: "After regaining independence in 1991, Estonia took a radical path toward digitization...",
    imageUrl: "https://source.unsplash.com/random/800x600/?estonia",
    tags: ["Digital", "Governance", "Innovation"],
    publishedDate: "2023-08-24"
  }
];
