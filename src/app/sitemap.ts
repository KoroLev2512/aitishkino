import { MetadataRoute } from 'next'

const URL = 'https://aitishkino.ru';

// Добавляем конфигурацию для статического экспорта
export const dynamic = 'force-static';
export const revalidate = false;

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/courses', '/about', '/contacts'].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return [...routes];
}
