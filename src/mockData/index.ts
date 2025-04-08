
import { DataLayer, DataPoint, Region, Dashboard, DashboardMetric, CaseStudy } from "../types";

export const mockDataLayers: DataLayer[] = [
  {
    id: "economic-gdp",
    name: "GDP Growth",
    category: "economic",
    description: "Annual GDP growth rate by country",
    visible: true,
    source: "World Bank (2023)",
    lastUpdated: "2023-12-15"
  },
  {
    id: "cultural-languages",
    name: "Language Diversity",
    category: "cultural",
    description: "Number of languages spoken by region",
    visible: false,
    source: "UNESCO Cultural Index",
    lastUpdated: "2023-10-22"
  },
  {
    id: "ecological-forest",
    name: "Forest Coverage",
    category: "ecological",
    description: "Percentage of land covered by forests",
    visible: false,
    source: "Global Forest Watch",
    lastUpdated: "2024-01-30"
  },
  {
    id: "technological-connectivity",
    name: "Internet Penetration",
    category: "technological",
    description: "Percentage of population with internet access",
    visible: false,
    source: "ITU (2023)",
    lastUpdated: "2023-11-05"
  }
];

export const mockDataPoints: DataPoint[] = [
  { id: "dp1", latitude: 36.8219, longitude: -1.2921, value: 5.6, label: "Nairobi", category: "economic", countryCode: "KE" },
  { id: "dp2", latitude: 55.7558, longitude: 37.6173, value: 2.1, label: "Moscow", category: "economic", countryCode: "RU" },
  { id: "dp3", latitude: -33.8688, longitude: 151.2093, value: 3.2, label: "Sydney", category: "economic", countryCode: "AU" },
  { id: "dp4", latitude: 40.7128, longitude: -74.0060, value: 2.3, label: "New York", category: "economic", countryCode: "US" },
  { id: "dp5", latitude: -1.2921, longitude: 36.8219, value: 78, label: "Nairobi", category: "technological", countryCode: "KE" },
  { id: "dp6", latitude: 51.5074, longitude: -0.1278, value: 94, label: "London", category: "technological", countryCode: "GB" },
  { id: "dp7", latitude: 35.6762, longitude: 139.6503, value: 91, label: "Tokyo", category: "technological", countryCode: "JP" },
  { id: "dp8", latitude: 28.6139, longitude: 77.2090, value: 45, label: "Delhi", category: "technological", countryCode: "IN" }
];

export const mockRegions: Region[] = [
  { id: "east-africa", name: "East Africa", code: "EA", bounds: [27.3, -12.1, 51.4, 12.8] },
  { id: "western-europe", name: "Western Europe", code: "WE", bounds: [-10.5, 35.2, 25.3, 60.8] },
  { id: "north-america", name: "North America", code: "NA", bounds: [-170.0, 15.0, -50.0, 70.0] },
  { id: "southeast-asia", name: "Southeast Asia", code: "SEA", bounds: [92.0, -11.0, 142.0, 29.0] }
];

export const mockDashboardMetrics: DashboardMetric[] = [
  { id: "m1", title: "Global GDP Growth", value: 3.1, change: 0.4, timeframe: "YoY", type: "percentage", visualization: "line" },
  { id: "m2", title: "Tech Innovation Index", value: 67.8, change: 5.2, timeframe: "YoY", type: "number", visualization: "bar" },
  { id: "m3", title: "Climate Change Impact", value: -2.8, change: -0.7, timeframe: "YoY", type: "number", visualization: "line" },
  { id: "m4", title: "Cultural Exchange Score", value: 72.3, change: 3.1, timeframe: "YoY", type: "number", visualization: "pie" }
];

export const mockDashboard: Dashboard = {
  id: "global-overview",
  title: "Global Atlas Overview",
  description: "Key metrics and indicators from around the world",
  metrics: mockDashboardMetrics,
  lastUpdated: "2024-03-15"
};

export const mockCaseStudies: CaseStudy[] = [
  {
    id: "cs1",
    title: "East African Technology Hub",
    region: "East Africa",
    industry: "Technology",
    summary: "How Kenya became the Silicon Savannah of Africa",
    content: "Kenya's journey to becoming a technology hub started in 2007 with the launch of M-PESA, revolutionizing mobile banking. This case study explores how government policy, education reform, and international investment created a thriving tech ecosystem.",
    imageUrl: "https://placehold.co/600x400/1E3A8A/FFFFFF.png?text=Kenya+Tech+Hub",
    tags: ["technology", "innovation", "africa"],
    publishedDate: "2024-02-10"
  },
  {
    id: "cs2",
    title: "Regenerative Agriculture in Scandinavia",
    region: "Northern Europe",
    industry: "Agriculture",
    summary: "Sustainable farming practices transforming food production",
    content: "Nordic countries have pioneered regenerative farming techniques that increase yields while capturing carbon. This zero-to-one innovation combines traditional methods with cutting-edge technology.",
    imageUrl: "https://placehold.co/600x400/166534/FFFFFF.png?text=Regenerative+Agriculture",
    tags: ["agriculture", "sustainability", "innovation"],
    publishedDate: "2024-01-15"
  },
  {
    id: "cs3",
    title: "Singapore's Urban Water Management",
    region: "Southeast Asia",
    industry: "Urban Planning",
    summary: "From water scarcity to self-sufficiency",
    content: "Singapore transformed from a water-dependent city-state to a global leader in urban water management. This case study examines the policies, technologies, and cultural shifts that enabled this transition.",
    imageUrl: "https://placehold.co/600x400/C2410C/FFFFFF.png?text=Singapore+Water",
    tags: ["urban planning", "sustainability", "water"],
    publishedDate: "2023-11-22"
  }
];

export const mockUser = {
  id: "user1",
  name: "Demo User",
  email: "demo@atlasio.com",
  role: { id: "role1", name: "analyst" },
  avatar: "https://placehold.co/200x200/1E3A8A/FFFFFF.png?text=DU"
};
