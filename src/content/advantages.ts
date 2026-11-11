export interface AdvantageItem {
  id: string;
  title: string;
  description: string;
  icon: 'teamwork' | 'portfolio' | 'practical' | 'adaptive' | 'finance' | 'gamification';
}

export const ADVANTAGES_ITEMS: AdvantageItem[] = [
  {
    id: 'teamwork',
    title: 'Командная работа',
    description:
      'Развиваем soft-скиллы, учимся договариваться и делегировать задачи - как в настоящей IT компании!',
    icon: 'teamwork',
  },
  {
    id: 'portfolio',
    title: 'Проекты в портфолио',
    description:
      'Каждый месяц — новый проект в копилке: игры, приложения, роботы. Это основа для поступления в вузы и старта карьеры.',
    icon: 'portfolio',
  },
  {
    id: 'practical',
    title: 'Практическая направленность',
    description:
      'Каждая теория подкрепляется большим количеством задач, чтобы отточить свои навыки.',
    icon: 'practical',
  },
  {
    id: 'adaptive',
    title: 'Адаптивность программы',
    description:
      'Каждый ребёнок учится у нас с комфортом и интересом, независимо от уровня подготовки и индивидуальных особенностей.',
    icon: 'adaptive',
  },
  {
    id: 'finance',
    title: 'Финансовая грамотность',
    description:
      'Дети получают внутреннюю валюту за успехи в обучении, осваивают планирование бюджета и делают первые осознанные покупки в «Айтишопе».',
    icon: 'finance',
  },
  {
    id: 'gamification',
    title: 'Геймификация',
    description:
      'Успехи ученика влияют на его рейтинг в школе, что делает образовательный процесс интереснее и мотивирует ребенка, а также формирует стремление к лидерству.',
    icon: 'gamification',
  },
];
