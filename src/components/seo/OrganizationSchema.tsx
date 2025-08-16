'use client';

import Script from 'next/script';

export default function OrganizationSchema() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Айтишкино",
    "url": "https://aitishkino.ru",
    "logo": "https://aitishkino.ru/images/logo.png",
    "description": "Онлайн-школа программирования и робототехники для детей 8-17 лет",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Россия",
      "addressLocality": "Москва"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "telephone": "+7 (XXX) XXX-XX-XX",
      "email": "info@aitishkino.ru",
      "availableLanguage": ["Russian"]
    },
    "sameAs": [
      "https://vk.com/aitishkino",
      "https://t.me/aitishkino"
    ]
  };

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
