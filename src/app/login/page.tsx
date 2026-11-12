import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PageLayout } from '@/components/layout/PageLayout';
import { Footer } from '@/components/sections/footer/Footer';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import { LoginForm } from '@/components/auth/LoginForm';
import { siteConfig } from '@/config/site';

export const dynamic = 'force-static';
export const revalidate = false;

export const metadata: Metadata = {
  title: 'Вход в личный кабинет ученика и родителя',
  description:
    'Вход на интерактивную образовательную платформу детской школы программирования и робототехники «Айтишкино». Доступ к урокам, проектам и магазину наград.',
  alternates: {
    canonical: '/login',
  },
  openGraph: {
    title: 'Вход в личный кабинет | Айтишкино',
    description:
      'Вход на образовательную платформу «Айтишкино»: доступ к урокам, расписанию и магазину «Айтишоп».',
    url: `${siteConfig.url}/login`,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Вход в личный кабинет Айтишкино',
      },
    ],
  },
};

export default function LoginPage() {
  const breadcrumbs = [
    { name: 'Главная', item: siteConfig.url },
    { name: 'Вход в личный кабинет', item: `${siteConfig.url}/login` },
  ];

  return (
    <PageLayout>
      <BreadcrumbSchema items={breadcrumbs} />

      <div className="min-h-[80vh] bg-gradient-to-b from-gray-50 to-white py-8 md:py-12 px-4">
        {/* Хлебные крошки */}
        <div className="max-w-4xl mx-auto mb-6">
          <nav aria-label="Хлебные крошки" className="text-sm text-gray-500">
            <ol className="flex items-center gap-2 flex-wrap">
              <li>
                <Link href="/" className="hover:text-[#00B18F] transition-colors">
                  Главная
                </Link>
              </li>
              <li>/</li>
              <li className="text-gray-900 font-medium" aria-current="page">
                Вход в личный кабинет
              </li>
            </ol>
          </nav>
        </div>

        {/* Интерактивная форма входа */}
        <LoginForm />
      </div>

      <Footer />
    </PageLayout>
  );
}
