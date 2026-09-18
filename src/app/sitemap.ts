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
    // Арбитражный юрист (Кластер BIZ-01)
    '/biznesu/arbitrazhnyj-yurist/',
    '/biznesu/arbitrazhnyj-yurist/isk-v-arbitrazhnyj-sud/',
    '/biznesu/arbitrazhnyj-yurist/zashchita-otvetchika-v-arbitrazhnom-sude/',
    '/biznesu/arbitrazhnyj-yurist/obzhalovanie-resheniya-arbitrazhnogo-suda/',
    // Взыскание задолженности с юрлиц (B2B)
    '/biznesu/vzyskanie-zadolzhennosti-s-yuridicheskih-lic/',
    '/biznesu/vzyskanie-zadolzhennosti-s-yuridicheskih-lic/zashchita-biznesa-ot-vzyskaniya-zadolzhennosti/',
    // Договорный юрист для бизнеса (Кластер B2B-04)
    '/biznesu/dogovornoe-pravo/',
    '/biznesu/dogovornoe-pravo/razrabotka-i-ekspertiza-dogovorov/',
    '/biznesu/dogovornoe-pravo/audit-dogovornoj-raboty/',
    '/biznesu/dogovornoe-pravo/dogovornye-spory/',
    '/biznesu/dogovornoe-pravo/spory-po-dogovoru-postavki/',
    // Корпоративный юрист (Кластер BIZ-02)
    '/biznesu/korporativnyj-yurist/',
    '/biznesu/korporativnyj-yurist/korporativnye-spory-mezhdu-uchastnikami/',
    '/biznesu/korporativnyj-yurist/vyhod-uchastnika-iz-ooo/',
    '/biznesu/korporativnyj-yurist/vzyskanie-dejstvitelnoj-stoimosti-doli/',
    '/biznesu/korporativnyj-yurist/sdelki-s-dolyami-ooo/',
    '/biznesu/korporativnyj-yurist/korporativnyj-dogovor/',
    '/biznesu/korporativnyj-yurist/pokupka-prodazha-biznesa/',
    '/biznesu/korporativnyj-yurist/reorganizaciya-biznesa/',
    '/biznesu/korporativnyj-yurist/zashchita-korporativnogo-kontrolya/',
    // Банкротство бизнеса (Кластер B2B-02)
    '/biznesu/bankrotstvo-biznesa/',
    '/biznesu/bankrotstvo-biznesa/bankrotstvo-kompanii-so-storony-dolzhnika/',
    '/biznesu/bankrotstvo-biznesa/predstavlenie-interesov-kreditora/',
    '/biznesu/bankrotstvo-biznesa/vklyuchenie-v-reestr-trebovanij-kreditorov/',
    '/biznesu/bankrotstvo-biznesa/zashchita-ot-subsidiarnoj-otvetstvennosti/',
    '/biznesu/bankrotstvo-biznesa/osparivanie-sdelok-pri-bankrotstve/',
    '/biznesu/bankrotstvo-biznesa/obzhalovanie-dejstvij-arbitrazhnogo-upravlyayushchego/',
    // Юридическое сопровождение бизнеса (Кластер B2B-03)
    '/biznesu/yuridicheskoe-soprovozhdenie-biznesa/',
    '/biznesu/yuridicheskoe-soprovozhdenie-biznesa/yuridicheskij-audit-biznesa/',
    // Уголовно-правовая защита бизнеса
    '/biznesu/ugolovno-pravovaya-zashchita-biznesa/',
    '/biznesu/ugolovno-pravovaya-zashchita-biznesa/ugolovno-pravovoj-audit-biznesa/',
    '/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-pri-proverke-obep/',
    '/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-po-ekonomicheskim-prestupleniyam/',
    '/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-po-nalogovym-prestupleniyam/',
    '/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-pri-obyske-v-kompanii/',
    // Разблокировка расчётного счёта по 115-ФЗ
    '/biznesu/razblokirovka-raschetnogo-scheta-po-115-fz/',
    // Налоговый юрист для бизнеса
    '/biznesu/nalogovyj-yurist-dlya-biznesa/',
    '/biznesu/nalogovyj-yurist-dlya-biznesa/soprovozhdenie-nalogovyh-proverok/',
    '/biznesu/nalogovyj-yurist-dlya-biznesa/osparivanie-donachislenij-i-reshenij-fns/',
    '/biznesu/nalogovyj-yurist-dlya-biznesa/zashchita-pri-obvinenii-v-droblenii-biznesa/',
    // Миграционное сопровождение бизнеса
    '/biznesu/migracionnoe-soprovozhdenie-biznesa/',
    '/biznesu/migracionnoe-soprovozhdenie-biznesa/yuridicheskoe-oformlenie-inostrannyh-rabotnikov/',
    '/biznesu/migracionnoe-soprovozhdenie-biznesa/migracionnyj-audit-rabotodatelya/',
    '/biznesu/migracionnoe-soprovozhdenie-biznesa/yurist-pri-migracionnoj-proverke-mvd/',
    '/biznesu/migracionnoe-soprovozhdenie-biznesa/zashchita-rabotodatelya-po-state-18-15-koap-rf/',
    // Банкротство физических лиц
    '/grazhdanam/bankrotstvo-fizicheskih-lic/',
    '/grazhdanam/bankrotstvo-fizicheskih-lic/cherez-mfc/',
    // Взыскание долгов с физических лиц (Кластер CIV-08)
    '/grazhdanam/vzyskanie-dolgov/',
    '/grazhdanam/vzyskanie-dolgov/zashchita-ot-trebovaniy-po-dolgu/',
    // Земля
    '/grazhdanam/zemelnyj-yurist/',
    '/grazhdanam/zemelnyj-yurist/spory-o-granicah-zemelnogo-uchastka/',
    '/grazhdanam/zemelnyj-yurist/oformlenie-prav-na-zemelnyj-uchastok/',
    '/grazhdanam/zemelnyj-yurist/razdel-zemelnogo-uchastka/',
    '/grazhdanam/zemelnyj-yurist/ustanovlenie-servituta/',
    '/grazhdanam/zemelnyj-yurist/osparivanie-kadastrovoj-stoimosti/',
    '/grazhdanam/zemelnyj-yurist/izmenenie-vri-zemelnogo-uchastka/',
    '/grazhdanam/zemelnyj-yurist/perevod-zemelnogo-uchastka-v-druguyu-kategoriyu/',
    // Юрист по недвижимости (Кластер CIV-04)
    '/grazhdanam/yurist-po-nedvizhimosti/',
    '/grazhdanam/yurist-po-nedvizhimosti/spory-s-zastrojshchikom/',
    '/grazhdanam/yurist-po-nedvizhimosti/soprovozhdenie-sdelok-s-nedvizhimostyu/',
    '/grazhdanam/yurist-po-nedvizhimosti/vzyskanie-neustojki-po-ddu/',
    '/grazhdanam/yurist-po-nedvizhimosti/rastorzhenie-ddu/',
    '/grazhdanam/yurist-po-nedvizhimosti/nedostatki-kvartiry-i-vzyskanie-rashodov/',
    '/grazhdanam/yurist-po-nedvizhimosti/legalizaciya-samovolnoj-postrojki/',
    '/grazhdanam/yurist-po-nedvizhimosti/priznanie-prava-sobstvennosti-na-nedvizhimost/',
    '/grazhdanam/yurist-po-nedvizhimosti/osparivanie-sdelok-s-nedvizhimostyu/',
    // Военный юрист
    '/grazhdanam/voennyj-yurist/',
    '/grazhdanam/voennyj-yurist/spory-s-voenkomatom/',
    '/grazhdanam/voennyj-yurist/osparivanie-zaklyucheniya-vvk/',
    '/grazhdanam/voennyj-yurist/vyplaty-za-ranenie-voennosluzhashchego/',
    '/grazhdanam/voennyj-yurist/vyplaty-seme-pogibshego-voennosluzhashchego/',
    '/grazhdanam/voennyj-yurist/priznanie-voennosluzhashchego-umershim/',
    // Юрист по недвижимости и строительству для бизнеса
    '/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/',
    '/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/soprovozhdenie-sdelok-s-kommercheskoy-nedvizhimostyu/',
    '/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/yuridicheskoe-soprovozhdenie-arendy-kommercheskoy-nedvizhimosti/',
    '/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/zemelno-gradostroitelnoe-soprovozhdenie/',
    '/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/yuridicheskoe-soprovozhdenie-stroitelstva/',
    '/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/stroitelnye-spory/',
    // Исполнительное для бизнеса
    '/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/',
    '/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/obzhalovanie-dejstvij-pristavov-dlya-biznesa/',
    '/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/vzyskanie-po-ispolnitelnomu-listu-s-yuridicheskogo-lica/',
    // Трудовые споры для бизнеса (B2B)
    '/biznesu/trudovye-spory-s-rabotnikami/',
    '/biznesu/trudovye-spory-s-rabotnikami/soprovozhdenie-uvolneniya-rabotnika/',
    '/biznesu/trudovye-spory-s-rabotnikami/soprovozhdenie-sokrashcheniya-shtata/',
    '/biznesu/trudovye-spory-s-rabotnikami/soprovozhdenie-proverki-trudovoj-inspekcii/',
    '/biznesu/trudovye-spory-s-rabotnikami/kadrovyj-audit/',
    '/biznesu/trudovye-spory-s-rabotnikami/vzyskanie-materialnogo-ushcherba-s-rabotnika/',
    '/biznesu/trudovye-spory-s-rabotnikami/rassledovanie-neschastnogo-sluchaya-na-proizvodstve/',
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
    '/grazhdanam/semejnyj-yurist/brachnyj-dogovor/',
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
    // Адвокат по уголовным делам
    '/grazhdanam/advokat-po-ugolovnym-delam/',
    '/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-moshennichestvu/',
    '/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-delam-o-narkotikah/',
    '/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-krazham-grabezham-i-razboyam/',
    '/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-dtp-s-postradavshimi/',
    '/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-ekonomicheskim-prestupleniyam/',
    '/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-dolzhnostnym-prestupleniyam-i-vzyatkam/',
    '/grazhdanam/advokat-po-ugolovnym-delam/uslovno-dosrochnoe-osvobozhdenie/',
    '/grazhdanam/advokat-po-ugolovnym-delam/advokat-pri-zaderzhanii-obyske-i-doprose/',
    '/grazhdanam/advokat-po-ugolovnym-delam/obzhalovanie-prigovora/',
    '/grazhdanam/advokat-po-ugolovnym-delam/zashchita-poterpevshego/',
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
