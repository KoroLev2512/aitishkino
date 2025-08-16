import { Metadata } from 'next';

// Добавляем конфигурацию для статического экспорта
export const dynamic = 'force-static';
export const revalidate = false;

export const metadata: Metadata = {
  title: 'Тестовая страница SEO',
  description: 'Страница для тестирования SEO-разметки',
};

export default function TestPage() {
  return (
    <div>
      <h1>Тестовая страница для проверки SEO</h1>
      <p>Эта страница используется для проверки корректности работы SEO-разметки.</p>
    </div>
  );
}
