import { siteConfig } from '@/config/site';

interface CourseSchemaProps {
  courseName: string;
  description: string;
  courseMode?: string;
  price?: number;
  image?: string;
}

export default function CourseSchema({
  courseName,
  description,
  courseMode = 'online',
  price,
  image,
}: CourseSchemaProps) {
  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: courseName,
    description,
    provider: {
      '@type': 'EducationalOrganization',
      name: siteConfig.name,
      sameAs: siteConfig.url,
    },
    image: image || `${siteConfig.url}/images/og-image.jpg`,
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode,
      ...(price && {
        offers: {
          '@type': 'Offer',
          price: price.toString(),
          priceCurrency: 'RUB',
        },
      }),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
    />
  );
}
