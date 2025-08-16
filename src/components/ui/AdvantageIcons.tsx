import { 
  Users, 
  BookOpen, 
  Code, 
  GraduationCap, 
  TrendingUp, 
  Award, 
  Repeat2, 
  MessageCircle, 
  Calendar, 
  BarChart2,
  BookMarked,
  MessageSquareText,
  Clock,
  BarChart3
} from 'lucide-react';
import { ReactNode } from 'react';

type AdvantageIconProps = {
  type: string;
  className?: string;
};

export const AdvantageIcon = ({ type, className = '' }: AdvantageIconProps) => {
  const iconMap: { [key: string]: ReactNode } = {
    // Platform section icons
    'repeat': <Repeat2 className={className} />,
    'message-circle': <MessageSquareText className={className} />,
    'calendar': <Calendar className={className} />,
    'bar-chart-2': <BarChart3 className={className} />,
    
    // Existing icons
    'teamwork': <Users className={className} />,
    'portfolio': <BookMarked className={className} />,
    'practical': <Code className={className} />,
    'adaptive': <GraduationCap className={className} />,
    'finance': <TrendingUp className={className} />,
    'gamification': <Award className={className} />,
  };

  return iconMap[type] || <div className={`w-10 h-10 bg-gray-200 rounded-lg ${className}`} />;
};
