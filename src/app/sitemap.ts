import { MetadataRoute } from 'next';
import { teamData } from '@/data/team';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dejure-help.ru';

  const staticRoutes = [
    '',
    '/grazhdanam/',
    '/biznesu/',
    '/specialisty/',
    '/praktika/',
    '/kontakty/',
    '/privacy/',
    '/consent/',
    '/cookies/',
    // Земля
    '/grazhdanam/zemelnyj-yurist/',
    '/grazhdanam/zemelnyj-yurist/spory-o-granicah-zemelnogo-uchastka/',
    '/grazhdanam/zemelnyj-yurist/oformlenie-prav-na-zemelnyj-uchastok/',
    '/grazhdanam/zemelnyj-yurist/razdel-zemelnogo-uchastka/',
    '/grazhdanam/zemelnyj-yurist/ustanovlenie-servituta/',
    '/grazhdanam/zemelnyj-yurist/osparivanie-kadastrovoj-stoimosti/',
    '/grazhdanam/zemelnyj-yurist/izmenenie-vri-zemelnogo-uchastka/',
    '/grazhdanam/zemelnyj-yurist/perevod-zemelnogo-uchastka-v-druguyu-kategoriyu/',
    // Военный юрист
    '/grazhdanam/voennyj-yurist/',
    '/grazhdanam/voennyj-yurist/spory-s-voenkomatom/',
    '/grazhdanam/voennyj-yurist/osparivanie-zaklyucheniya-vvk/',
    '/grazhdanam/voennyj-yurist/vyplaty-za-ranenie-voennosluzhashchego/',
    '/grazhdanam/voennyj-yurist/vyplaty-seme-pogibshego-voennosluzhashchego/',
    '/grazhdanam/voennyj-yurist/priznanie-voennosluzhashchego-umershim/',
    // Исполнительное для бизнеса
    '/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/',
    '/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/obzhalovanie-dejstvij-pristavov-dlya-biznesa/',
    '/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/vzyskanie-po-ispolnitelnomu-listu-s-yuridicheskogo-lica/',
    // Исполнительное для граждан
    '/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/',
    '/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/obzhalovanie-dejstvij-sudebnogo-pristava/',
    '/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/snyatie-aresta-s-avtomobilya/',
    '/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/snyatie-aresta-so-scheta/',
    '/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/vozvrat-nezakonno-spisannyh-deneg/',
    '/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/vzyskanie-po-ispolnitelnomu-listu/',
    // Автоюрист
    '/grazhdanam/avtoyurist/',
    '/grazhdanam/avtoyurist/osparivanie-viny-v-dtp/',
    '/grazhdanam/avtoyurist/spory-po-kasko/',
    '/grazhdanam/avtoyurist/spory-po-osago/',
    '/grazhdanam/avtoyurist/vzyskanie-ushcherba-pri-dtp-bez-osago/',
    '/grazhdanam/avtoyurist/vzyskanie-ushcherba-s-vinovnika-dtp/',
    '/grazhdanam/avtoyurist/lishenie-voditelskih-prav/',
    '/grazhdanam/avtoyurist/ostavlenie-mesta-dtp/',
    // Наследственный юрист
    '/grazhdanam/nasledstvennyj-yurist/',
    '/grazhdanam/nasledstvennyj-yurist/oformlenie-i-vstuplenie-v-nasledstvo/',
    '/grazhdanam/nasledstvennyj-yurist/osparivanie-zaveschaniya/',
    '/grazhdanam/nasledstvennyj-yurist/priznanie-naslednika-nedostojnym/',
    '/grazhdanam/nasledstvennyj-yurist/razdel-nasledstva-mezhdu-naslednikami/',
    '/grazhdanam/nasledstvennyj-yurist/ustanovlenie-fakta-prinyatiya-nasledstva/',
    '/grazhdanam/nasledstvennyj-yurist/vosstanovlenie-sroka-prinyatiya-nasledstva/',
    // Семейный юрист
    '/grazhdanam/semejnyj-yurist/',
    '/grazhdanam/semejnyj-yurist/rastorzhenie-braka/',
    '/grazhdanam/semejnyj-yurist/razdel-imushchestva-suprugov/',
    '/grazhdanam/semejnyj-yurist/vzyskanie-alimentov/',
    '/grazhdanam/semejnyj-yurist/opredelenie-mesta-zhitelstva-rebenka/',
    '/grazhdanam/semejnyj-yurist/opredelenie-poryadka-obshcheniya-s-rebenkom/',
    '/grazhdanam/semejnyj-yurist/lishenie-i-ogranichenie-roditelskih-prav/',
    '/grazhdanam/semejnyj-yurist/ustanovlenie-i-osparivanie-ottsovstva/',
    // Трудовой юрист
    '/grazhdanam/trudovoj-yurist/',
    '/grazhdanam/trudovoj-yurist/nezakonnoe-uvolnenie/',
    '/grazhdanam/trudovoj-yurist/nezakonnoe-sokrashchenie/',
    '/grazhdanam/trudovoj-yurist/vzyskanie-zarabotnoj-platy/',
    '/grazhdanam/trudovoj-yurist/proizvodstvennaya-travma/',
    // Миграционный юрист
    '/grazhdanam/migracionnyj-yurist/',
    '/grazhdanam/migracionnyj-yurist/otmena-zapreta-na-vezd-v-rossiyu/',
    '/grazhdanam/migracionnyj-yurist/obzhalovanie-administrativnogo-vydvoreniya/',
    '/grazhdanam/migracionnyj-yurist/obzhalovanie-resheniya-o-deportacii/',
    '/grazhdanam/migracionnyj-yurist/obzhalovanie-nezhelatelnosti-prebyvaniya/',
    '/grazhdanam/migracionnyj-yurist/isklyuchenie-iz-reestra-kontroliruemyh-lic/',
    '/grazhdanam/migracionnyj-yurist/otkaz-annulirovanie-rvp-vnzh/',
    '/grazhdanam/migracionnyj-yurist/poluchenie-rvp/',
    '/grazhdanam/migracionnyj-yurist/poluchenie-vida-na-zhitelstvo/',
    '/grazhdanam/migracionnyj-yurist/poluchenie-grazhdanstva-rf/',
  ];

  const specialistRoutes = Object.keys(teamData).map((slug) => `/specialisty/${slug}/`);

  const allRoutes = [...staticRoutes, ...specialistRoutes];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : route.includes('/specialisty/') ? 0.8 : route.split('/').length <= 3 ? 0.9 : 0.85,
  }));
}
