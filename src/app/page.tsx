import { Metadata } from 'next';
import ClientHomePage from '@/components/client/ClientHomePage';

// Добавляем конфигурацию для статического экспорта
export const dynamic = 'force-static';
export const revalidate = false;

export const metadata: Metadata = {
  title: 'Айтишкино - Школа программирования и робототехники для детей 8-17 лет',
  description: 'Онлайн-курсы по программированию и робототехнике для детей. Обучение с нуля до первых проектов! Первый урок бесплатно!',
  keywords: [
    'курсы программирования для детей',
    'обучение программированию с нуля',
    'детская it школа',
    'робототехника для школьников',
    'создание игр для детей'
  ],
  openGraph: {
    title: 'Айтишкино - Школа программирования для детей',
    description: 'Научим вашего ребенка создавать игры, приложения и сайты. Первый урок бесплатно!',
    images: [{
      url: '/images/og-homepage.jpg',
      width: 1200,
      height: 630,
      alt: 'Айтишкино - Школа программирования для детей',
    }],
  },
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return <ClientHomePage />;
}
