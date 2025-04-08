
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DashboardMetric } from '../types';
import { ArrowDownIcon, ArrowUpIcon } from 'lucide-react';

interface DashboardCardProps {
  metric: DashboardMetric;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ metric }) => {
  const getValueDisplay = () => {
    switch (metric.type) {
      case 'percentage':
        return `${metric.value}%`;
      case 'currency':
        return `$${metric.value}`;
      default:
        return metric.value;
    }
  };
  
  const getChangeDisplay = () => {
    if (metric.change === undefined) return null;
    
    const isPositive = metric.change > 0;
    const changeClass = isPositive ? 'text-green-500' : 'text-red-500';
    const ChangeIcon = isPositive ? ArrowUpIcon : ArrowDownIcon;
    
    return (
      <div className={`flex items-center ${changeClass}`}>
        <ChangeIcon className="w-4 h-4 mr-1" />
        <span>{Math.abs(metric.change).toFixed(1)}%</span>
        <span className="text-gray-500 dark:text-gray-400 ml-1">{metric.timeframe}</span>
      </div>
    );
  };
  
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{metric.title}</CardTitle>
        <CardDescription>{}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-1">
          <div className="text-2xl font-bold">{getValueDisplay()}</div>
          {getChangeDisplay()}
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
