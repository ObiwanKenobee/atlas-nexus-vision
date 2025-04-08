
export interface UserRole {
  id: string;
  name: "superadmin" | "contributor" | "analyst" | "public";
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export interface DataLayer {
  id: string;
  name: string;
  category: "economic" | "cultural" | "ecological" | "technological";
  description: string;
  visible: boolean;
  source: string;
  lastUpdated: string;
}

export interface DataPoint {
  id: string;
  latitude: number;
  longitude: number;
  value: number;
  label: string;
  category: string;
  countryCode?: string;
}

export interface Region {
  id: string;
  name: string;
  code: string;
  bounds: [number, number, number, number]; // [west, south, east, north]
}

export interface Dashboard {
  id: string;
  title: string;
  description: string;
  metrics: DashboardMetric[];
  lastUpdated: string;
}

export interface DashboardMetric {
  id: string;
  title: string;
  value: number | string;
  change?: number;
  timeframe?: string;
  type: "number" | "percentage" | "currency" | "text";
  visualization?: "line" | "bar" | "pie" | "none";
}

export interface CaseStudy {
  id: string;
  title: string;
  region: string;
  industry: string;
  summary: string;
  content: string;
  imageUrl: string;
  tags: string[];
  publishedDate: string;
}
