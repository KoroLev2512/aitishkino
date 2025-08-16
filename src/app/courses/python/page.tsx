import React from 'react';
import CourseSchema from '@/components/seo/CourseSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

// Добавляем конфигурацию для статического экспорта
export const dynamic = 'force-static';
export const revalidate = false;

export default function PythonCoursePage() {
  return (
    <>
      <h1>Курс по Python для начинающих</h1>
      <p>Изучите основы программирования с нуля на языке Python</p>
      
      {/* Микроразметка курса */}
      <CourseSchema
        courseName="Основы программирования на Python"
        description="Курс для начинающих программистов 10-14 лет"
        startDate="2025-09-01"
        endDate="2025-12-20"
        price={15000}
        instructor="Иван Иванов"
      />
      
      {/* Хлебные крошки */}
      <BreadcrumbSchema
        items={[
          { name: 'Главная', item: 'https://aitishkino.ru' },
          { name: 'Курсы', item: 'https://aitishkino.ru/courses' },
          { name: 'Python для начинающих', item: 'https://aitishkino.ru/courses/python' }
        ]}
      />
    </>
  );
}
