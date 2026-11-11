export interface PlatformFeature {
  id: string;
  title: string;
  description: string;
  icon: 'repeat' | 'message-circle' | 'calendar' | 'bar-chart-2';
  iconColor: string;
}

export const PLATFORM_FEATURES: PlatformFeature[] = [
  {
    id: 'repeat',
    title: 'Повторяйте',
    description:
      'Методические материалы и домашние задания по пройденным темам для закрепления знаний',
    icon: 'repeat',
    iconColor: 'text-blue-500',
  },
  {
    id: 'feedback',
    title: 'Обратная связь',
    description: 'Персональные комментарии преподавателей к каждой работе',
    icon: 'message-circle',
    iconColor: 'text-green-500',
  },
  {
    id: 'schedule',
    title: 'Расписание',
    description: 'Ближайшие занятия и школьные мероприятия',
    icon: 'calendar',
    iconColor: 'text-purple-500',
  },
  {
    id: 'progress',
    title: 'Прогресс',
    description: 'Наглядная статистика по пройденным модулям',
    icon: 'bar-chart-2',
    iconColor: 'text-orange-500',
  },
];
