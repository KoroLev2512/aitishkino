import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PageLayout } from '@/components/layout/PageLayout';
import { Footer } from '@/components/sections/footer/Footer';
import CourseSchema from '@/components/seo/CourseSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import { PYTHON_COURSE } from '@/content/courses';
import { siteConfig } from '@/config/site';
import { Clock, Users, Laptop, CheckCircle2, ArrowRight } from 'lucide-react';

export const dynamic = 'force-static';
export const revalidate = false;

export const metadata: Metadata = {
  title: PYTHON_COURSE.title,
  description: PYTHON_COURSE.subtitle,
  alternates: {
    canonical: '/courses/python',
  },
  openGraph: {
    title: PYTHON_COURSE.title,
    description: PYTHON_COURSE.subtitle,
    url: `${siteConfig.url}/courses/python`,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: PYTHON_COURSE.title,
      },
    ],
  },
};

export default function PythonCoursePage() {
  const breadcrumbItems = [
    { name: 'Главная', item: siteConfig.url },
    { name: 'Курсы', item: `${siteConfig.url}/#courses` },
    { name: PYTHON_COURSE.title, item: `${siteConfig.url}/courses/python` },
  ];

  return (
    <PageLayout>
      <CourseSchema courseName={PYTHON_COURSE.title} description={PYTHON_COURSE.description} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <article className="min-h-screen bg-white">
        {/* Хлебные крошки */}
        <div className="max-w-6xl mx-auto px-4 pt-6 pb-2">
          <nav aria-label="Хлебные крошки" className="text-sm text-gray-500">
            <ol className="flex items-center gap-2 flex-wrap">
              <li>
                <Link href="/" className="hover:text-[#00B18F] transition-colors">
                  Главная
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/#courses" className="hover:text-[#00B18F] transition-colors">
                  Курсы
                </Link>
              </li>
              <li>/</li>
              <li className="text-gray-900 font-medium" aria-current="page">
                Python
              </li>
            </ol>
          </nav>
        </div>

        {/* Hero секция курса */}
        <header className="max-w-6xl mx-auto px-4 py-8 md:py-12">
          <div className="inline-block bg-[#00B18F]/10 text-[#00B18F] font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            Программирование для детей
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            {PYTHON_COURSE.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mb-8 leading-relaxed">
            {PYTHON_COURSE.subtitle}
          </p>

          {/* Плашки с параметрами */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100">
              <Users className="text-[#00B18F]" size={24} />
              <div>
                <div className="text-xs text-gray-500 font-medium">Возраст учеников</div>
                <div className="text-sm font-bold text-gray-900">{PYTHON_COURSE.age}</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100">
              <Clock className="text-[#00B18F]" size={24} />
              <div>
                <div className="text-xs text-gray-500 font-medium">Длительность</div>
                <div className="text-sm font-bold text-gray-900">{PYTHON_COURSE.duration}</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100">
              <Laptop className="text-[#00B18F]" size={24} />
              <div>
                <div className="text-xs text-gray-500 font-medium">Формат обучения</div>
                <div className="text-sm font-bold text-gray-900">{PYTHON_COURSE.format}</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/#application-form"
              className="inline-flex items-center justify-center gap-2 bg-[#00B18F] hover:bg-[#00997A] text-white font-medium text-lg px-8 py-4 rounded-xl shadow-md transition-all"
            >
              <span>Записаться на бесплатный пробный урок</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </header>

        {/* Описание курса */}
        <section className="bg-gray-50 py-12 border-y border-gray-100">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">О курсе</h2>
            <p className="text-gray-700 leading-relaxed text-lg max-w-4xl">
              {PYTHON_COURSE.description}
            </p>
          </div>
        </section>

        {/* Программа курса по модулям */}
        <section className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Программа обучения</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PYTHON_COURSE.modules.map((mod, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-xs font-semibold text-[#00B18F] uppercase tracking-wider mb-2">
                  Этап {index + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{mod.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{mod.description}</p>
                <div className="border-t border-gray-100 pt-3">
                  <div className="text-xs font-medium text-gray-500 mb-2">Темы занятий:</div>
                  <ul className="space-y-1.5 text-sm text-gray-700">
                    {mod.topics.map((topic, topicIdx) => (
                      <li key={topicIdx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00B18F]" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Результаты и требования */}
        <section className="max-w-6xl mx-auto px-4 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-[#00B18F]/5 border border-[#00B18F]/20">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Что получит ребёнок</h2>
              <ul className="space-y-3">
                {PYTHON_COURSE.outcomes.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#00B18F] shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-800 text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Что понадобится для занятий</h2>
              <ul className="space-y-3">
                {PYTHON_COURSE.requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-gray-400 shrink-0 mt-2" />
                    <span className="text-gray-800 text-sm md:text-base">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </article>

      <Footer />
    </PageLayout>
  );
}
