import { Metadata } from 'next';
import ClientHomePage from '@/components/client/ClientHomePage';
import FAQSchema from '@/components/seo/FAQSchema';
import { siteConfig } from '@/config/site';

export const dynamic = 'force-static';
export const revalidate = false;

export const metadata: Metadata = {
  title: 'Айтишкино - Школа программирования и робототехники для детей 8-17 лет',
  description:
    'Онлайн-курсы по программированию и робототехнике для детей. Обучение с нуля до первых проектов! Первый урок бесплатно!',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Айтишкино - Школа программирования для детей',
    description: 'Научим вашего ребенка создавать игры, приложения и сайты. Первый урок бесплатно!',
    url: siteConfig.url,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Айтишкино - Школа программирования для детей',
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <FAQSchema />
      <ClientHomePage />
    </>
  );
}
