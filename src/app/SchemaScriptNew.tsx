'use client';

import Script from 'next/script';

export default function SchemaScript() {
  return (
    <Script
      id="website-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          'name': 'Айтишкино',
          'url': 'https://aitishkino.ru',
          'description': 'Онлайн-школа программирования и робототехники для детей 8-17 лет',
          'potentialAction': {
            '@type': 'SearchAction',
            'target': 'https://aitishkino.ru/search?q={search_term_string}',
            'query-input': 'required name=search_term_string',
          },
        })
      }}
    />
  );
}
