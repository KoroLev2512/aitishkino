import { siteConfig } from '@/config/site';

export default function OrganizationSchema() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo/logo.png`,
    description: siteConfig.description,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'Россия',
      addressLocality: 'Москва',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: siteConfig.contacts.phone,
      email: siteConfig.contacts.email,
      availableLanguage: ['Russian'],
    },
    sameAs: [siteConfig.social.vk, siteConfig.social.telegram, siteConfig.social.youtube],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
