import { MetadataRoute } from 'next';
import { teamData } from '@/data/team';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dejure-help.ru';

  const staticRoutes = [
    '',
    '/specialisty/',
    '/grazhdanam/zemelnyj-yurist/',
    '/grazhdanam/zemelnyj-yurist/spory-o-granicah-zemelnogo-uchastka/',
    '/grazhdanam/zemelnyj-yurist/oformlenie-prav-na-zemelnyj-uchastok/',
    '/grazhdanam/zemelnyj-yurist/razdel-zemelnogo-uchastka/',
    '/grazhdanam/zemelnyj-yurist/ustanovlenie-servituta/',
    '/grazhdanam/zemelnyj-yurist/osparivanie-kadastrovoj-stoimosti/',
    '/grazhdanam/zemelnyj-yurist/izmenenie-vri-zemelnogo-uchastka/',
    '/grazhdanam/zemelnyj-yurist/perevod-zemelnogo-uchastka-v-druguyu-kategoriyu/',
    '/grazhdanam/voennyj-yurist/',
    '/grazhdanam/voennyj-yurist/spory-s-voenkomatom/',
    '/grazhdanam/voennyj-yurist/osparivanie-zaklyucheniya-vvk/',
    '/grazhdanam/voennyj-yurist/vyplaty-za-ranenie-voennosluzhashchego/',
    '/grazhdanam/voennyj-yurist/vyplaty-seme-pogibshego-voennosluzhashchego/',
    '/grazhdanam/voennyj-yurist/priznanie-voennosluzhashchego-umershim/',
  ];

  const specialistRoutes = Object.keys(teamData).map((slug) => `/specialisty/${slug}/`);

  const allRoutes = [...staticRoutes, ...specialistRoutes];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : route.includes('/specialisty/') ? 0.8 : 0.9,
  }));
}
