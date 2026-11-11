import { describe, it, expect } from 'vitest';
import sitemap from './sitemap';
import { siteConfig } from '@/config/site';

describe('sitemap()', () => {
  it('generates all expected application routes', () => {
    const items = sitemap();
    const urls = items.map((entry) => entry.url);

    expect(urls).toContain(siteConfig.url);
    expect(urls).toContain(`${siteConfig.url}/courses/python`);
    expect(urls).toContain(`${siteConfig.url}/privacy`);
    expect(items.length).toBeGreaterThanOrEqual(3);
  });
});
