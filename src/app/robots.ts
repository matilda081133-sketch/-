import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: 'Yandex',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: 'https://dejure-help.ru/sitemap.xml',
    host: 'https://dejure-help.ru',
  };
}
