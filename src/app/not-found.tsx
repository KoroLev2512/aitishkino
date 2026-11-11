import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { PageLayout } from '@/components/layout/PageLayout';
import { Footer } from '@/components/sections/footer/Footer';
import { Home, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Страница не найдена (404)',
  description: 'К сожалению, запрашиваемая страница не существует или была перемещена.',
};

export default function NotFound() {
  return (
    <PageLayout>
      <div className="min-h-[70vh] flex items-center justify-center bg-white px-4 py-16">
        <div className="max-w-xl text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-[#00B18F]/10 text-[#00B18F] font-black text-4xl mb-6">
            404
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Страница не найдена
          </h1>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Кажется, этой страницы больше нет или в адресе опечатка. Давайте вернемся к интересным
            урокам и проектам!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#00B18F] hover:bg-[#00997A] text-white font-medium px-6 py-3.5 rounded-xl transition-colors shadow-sm"
            >
              <Home size={18} />
              <span>На главную</span>
            </Link>

            <Link
              href="/courses/python"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium px-6 py-3.5 rounded-xl transition-colors"
            >
              <BookOpen size={18} />
              <span>Курс Python</span>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </PageLayout>
  );
}
