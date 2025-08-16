'use client';

import Script from 'next/script';

interface CourseSchemaProps {
  courseName: string;
  description: string;
  startDate: string;
  endDate: string;
  price: number;
  instructor: string;
  image?: string;
}

export default function CourseSchema({
  courseName,
  description,
  startDate,
  endDate,
  price,
  instructor,
  image = 'https://aitishkino.ru/images/course-default.jpg'
}: CourseSchemaProps) {
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": courseName,
    "description": description,
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Айтишкино",
      "sameAs": "https://aitishkino.ru"
    },
    "image": image,
    "instructor": {
      "@type": "Person",
      "name": instructor
    },
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "startDate": startDate,
      "endDate": endDate,
      "offers": {
        "@type": "Offer",
        "price": price.toString(),
        "priceCurrency": "RUB"
      }
    }
  };

  return (
    <Script
      id={`course-schema-${courseName.replace(/\s+/g, '-').toLowerCase()}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
    />
  );
}
