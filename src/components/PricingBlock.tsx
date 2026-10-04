'use client';
import React from 'react';
import { usePathname } from 'next/navigation';

export interface PricingFeature {
  name: string | React.ReactNode;
  value?: string;
}

export interface PricingTier {
  title?: string | React.ReactNode;
  name?: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  description?: string | React.ReactNode;
  popular?: boolean;
  isPopular?: boolean;
  badgeText?: string;
  badge?: string;
  price?: string;
  numericPrice?: number;
  priceUnit?: string;
  period?: string;
  features: (PricingFeature | string)[];
  exclusions?: string | string[];
  buttonText?: string;
  ctaText?: string;
  buttonHref?: string;
  ctaHref?: string;
  hideOnMobile?: boolean;
  extraAction?: PricingExtraAction;
}

export interface PricingExtraAction {
  text: string;
  priceText?: string;
  ctaText: string;
  serviceName: string;
  href?: string;
}

export interface PricingGroup {
  title: string;
  subtitle?: string;
  tiers: PricingTier[];
  gridCols?: 2 | 3 | 4 | 5 | '2x2';
}

export interface PricingTab {
  id: string;
  label: string;
  tiers: PricingTier[];
  gridCols?: 2 | 3 | 4 | 5 | '2x2';
}

interface PricingBlockProps {
  title?: string;
  subtitle?: string | React.ReactNode;
  tiers?: PricingTier[];
  groups?: PricingGroup[];
  tabs?: PricingTab[];
  pageUrl?: string;
  ctaTitle?: string | React.ReactNode;
  ctaSubtitle?: string | React.ReactNode;
  ctaButtonText?: string;
  ctaButtonLink?: string;
  ctaService?: string;
  disclaimer?: string | React.ReactNode;
  guaranteeText?: string;
  sectionStyle?: React.CSSProperties;
  showDemoWarning?: boolean;
  direction?: string;
  gridCols?: 2 | 3 | 4 | 5 | '2x2';
  mobileNote?: React.ReactNode;
  topTier?: PricingTier;
}

export default function PricingBlock({
  title = "Стоимость юридических услуг в Липецке",
  subtitle = "Честные цены, закрепленные в договоре. Никаких скрытых платежей.",
  tiers: propTiers,
  groups,
  tabs,
  pageUrl,
  ctaTitle = "Точную стоимость определим до начала работы",
  ctaSubtitle = "Сначала изучим обстоятельства и документы, предложим подходящий формат помощи и согласуем стоимость. Она не изменится без согласования с вами.",
  ctaButtonText = "Получить расчёт стоимости",
  ctaButtonLink = "#form",
  ctaService,
  disclaimer,
  guaranteeText,
  sectionStyle,
  showDemoWarning,
  direction,
  gridCols,
  mobileNote,
  topTier
}: PricingBlockProps) {
  const [activeTabId, setActiveTabId] = React.useState<string>(tabs && tabs.length > 0 ? tabs[0].id : '');
  const activeTab = tabs?.find(t => t.id === activeTabId) || tabs?.[0];
  const effectiveGridCols = activeTab?.gridCols || gridCols;

  const defaultTiers: PricingTier[] = [
    {
      title: 'Гражданам',
      subtitle: 'Защита личных интересов',
      popular: false,
      price: 'от 2 000 ₽',
      features: [
        { name: 'Юридическая консультация', value: '2 000 ₽' },
        { name: 'Составление и подача иска', value: 'от 10 000 ₽' },
        { name: 'Ведение дела в суде Липецка', value: 'от 15 000 ₽' },
        { name: 'Апелляционная жалоба', value: 'от 20 000 ₽' },
        { name: 'Ознакомление с материалами', value: '4 000 ₽/том' }
      ]
    },
    {
      title: 'Бизнесу',
      subtitle: 'Комплексное юридическое сопровождение',
      popular: true,
      price: 'от 5 000 ₽',
      features: [
        { name: 'Консультация для бизнеса', value: '5 000 ₽' },
        { name: 'Разработка договоров', value: 'от 10 000 ₽' },
        { name: 'Досудебная претензионная работа', value: 'от 15 000 ₽' },
        { name: 'Представительство в Арбитраже', value: 'от 15 000 ₽' },
        { name: 'Правовой аудит документов', value: 'от 10 000 ₽' }
      ]
    },
    {
      title: 'Документы и консалтинг',
      subtitle: 'Глубокая правовая аналитика',
      popular: false,
      price: 'от 10 000 ₽',
      features: [
        { name: 'Письменная правовая оценка', value: 'от 30 000 ₽' },
        { name: 'Официальное заключение юриста', value: 'от 35 000 ₽' },
        { name: 'Участие в деловых переговорах', value: '15 000 ₽' },
        { name: 'Защита интересов в госорганах', value: '15 000 ₽' },
        { name: 'Разработка внутренних регламентов', value: 'от 15 000 ₽' }
      ]
    }
  ];

  const rawTiers = activeTab ? activeTab.tiers : (propTiers || (groups ? groups.flatMap(g => g.tiers) : defaultTiers));
  const tiers = rawTiers.map((tier) => ({
    ...tier,
    title: tier.title || tier.name || '',
    subtitle: tier.subtitle || tier.description || '',
    popular: tier.popular ?? tier.isPopular ?? false,
    badgeText: tier.badgeText || tier.badge || '',
    price: tier.price,
    features: (tier.features || []).map((f) =>
      typeof f === 'string'
        ? { name: f, value: '' }
        : { name: f.name || '', value: f.value || '' }
    ),
    buttonText: tier.buttonText || tier.ctaText || 'Выбрать тариф',
    buttonHref: tier.buttonHref || tier.ctaHref || '#form',
    exclusions: Array.isArray(tier.exclusions) ? tier.exclusions.join('; ') : tier.exclusions,
    hideOnMobile: Boolean(tier.hideOnMobile),
  }));

  const pathname = usePathname();
  const currentDirection = direction || (
    pathname?.includes('/voennyj-yurist') ? 'Военное право' :
    pathname?.includes('/semejnyj-yurist') ? 'Семейный юрист' :
    pathname?.includes('/advokat-po-ugolovnym-delam') ? 'Адвокат по уголовным делам' :
    pathname?.includes('/ugolovno-pravovaya-zashchita-biznesa') ? 'Уголовно-правовая защита бизнеса' :
    pathname?.includes('/arbitrazhnyj-yurist') ? 'Арбитражный юрист' :
    pathname?.includes('/vzyskanie-zadolzhennosti-s-yuridicheskih-lic') ? 'Взыскание задолженности с юридических лиц' :
    pathname?.includes('/korporativnyj-yurist') ? 'Корпоративный юрист' :
    pathname?.includes('/dogovornoe-pravo') ? 'Договорное право' :
    pathname?.includes('/nalogovyj-yurist-dlya-biznesa') ? 'Налоговый юрист для бизнеса' :
    pathname?.includes('/nasledstvennyj-yurist') ? 'Наследственный юрист' :
    pathname?.includes('/zhilishchnyj-yurist') ? 'Жилищный юрист' :
    pathname?.includes('/yurist-po-nedvizhimosti') ? 'Юрист по недвижимости' :
    pathname?.includes('/zemelnyj-yurist') ? 'Земельный юрист' :
    pathname?.includes('/zashchita-ot-trebovaniy-po-dolgu') ? 'Защита от требований по долгу' :
    pathname?.includes('/vzyskanie-dolgov') ? 'Взыскание долгов' :
    pathname?.includes('/avtoyurist') ? 'Автоюрист' :
    pathname?.includes('/trudovoj-yurist') ? 'Трудовой юрист' :
    pathname?.includes('/migracionnyj-yurist') ? 'Миграционный юрист' :
    pathname?.includes('/bankrotstvo-fizicheskih-lic') ? 'Банкротство физических лиц' :
    pathname?.includes('/bankrotstvo-biznesa') ? 'Банкротство бизнеса' :
    pathname?.includes('/kreditnyj-yurist') ? 'Кредитный юрист' :
    pathname?.includes('/yurist-po-ispolnitelnomu-proizvodstvu') ? 'Юрист по исполнительному производству' : ''
  );
  const currentBaseUrl = pageUrl || (pathname ? `https://dejure-help.ru${pathname.endsWith('/') ? pathname : pathname + '/'}` : 'https://dejure-help.ru/');
  const offerUrl = currentBaseUrl.endsWith('/') ? `${currentBaseUrl}#pricing` : `${currentBaseUrl}/#pricing`;

  const schemaTiersList = [
    ...(topTier ? [topTier] : []),
    ...rawTiers
  ];
  const extraActionTiers: PricingTier[] = schemaTiersList
    .filter(t => t.extraAction)
    .map(t => ({
      title: t.extraAction!.serviceName,
      price: t.extraAction!.priceText || (t.extraAction!.text.match(/(?:от\s+)?[\d\s]+₽/i)?.[0] || 'от 35 000 ₽'),
      subtitle: t.extraAction!.text,
      features: []
    }));
  const allTiersForSchema = Array.from(new Map([...schemaTiersList, ...extraActionTiers].map(t => [typeof t.title === 'string' ? t.title : JSON.stringify(t.title), t])).values());

  const pricedTiers = allTiersForSchema.map((tier) => ({
    ...tier,
    title: tier.title || tier.name || '',
    subtitle: tier.subtitle || tier.description || '',
    price: tier.price
  })).filter(tier => {
    const numPrice = tier.price ? String(tier.price).replace(/[^\d]/g, '') : '';
    return Boolean(numPrice);
  });

  const renderCard = (tier: any, idxKey: any, colsCount?: any) => {
    const numericPrice = tier.price ? String(tier.price).replace(/[^\d]/g, '') : '';
    const isMinPrice = tier.price ? /от/i.test(String(tier.price)) : false;
    const tierTitleStr = typeof tier.title === 'string' ? tier.title : 'Юридическая услуга';
    const tierSubtitleStr = typeof tier.subtitle === 'string' ? tier.subtitle : '';
    const isDense = colsCount === 5 || (colsCount === undefined && tiers.length >= 5);
    const isFour = colsCount === 4 || (colsCount === undefined && tiers.length === 4);
    const isThree = colsCount === 3 || (colsCount === undefined && tiers.length === 3);

    return (
      <div key={idxKey} style={{
        background: tier.popular ? 'linear-gradient(145deg, #0B1C2A 0%, #17375E 100%)' : 'var(--color-white)',
        color: tier.popular ? 'var(--color-white)' : 'var(--color-deep-blue)',
        borderRadius: '0',
        padding: isDense ? '26px 12px' : isFour ? '32px 16px' : isThree ? '32px 24px' : '40px 30px',
        boxShadow: tier.popular ? '0 20px 40px rgba(16, 39, 59, 0.15)' : '0 10px 30px rgba(0,0,0,0.05)',
        border: tier.popular ? '1px solid transparent' : '1px solid rgba(23, 50, 77, 0.1)',
        position: 'relative',
        transition: 'transform 0.4s ease, box-shadow 0.4s ease',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        minWidth: 0,
        boxSizing: 'border-box'
      }}
      className={`pricing-tier-card ${tier.hideOnMobile ? 'hidden-on-mobile' : ''}`}
      itemScope={Boolean(numericPrice)}
      itemType={numericPrice ? (isMinPrice ? "https://schema.org/AggregateOffer" : "https://schema.org/Offer") : undefined}
      >
        {numericPrice && (
          <>
            {isMinPrice ? (
              <meta itemProp="lowPrice" content={numericPrice} />
            ) : (
              <meta itemProp="price" content={numericPrice} />
            )}
            <meta itemProp="priceCurrency" content="RUB" />
            <meta itemProp="availability" content="https://schema.org/InStock" />
            <meta itemProp="name" content={tierTitleStr} />
            <meta itemProp="url" content={offerUrl} />
            {tierSubtitleStr && <meta itemProp="description" content={tierSubtitleStr} />}
          </>
        )}
        {tier.popular && Boolean(tier.badgeText) && (
          <div style={{
            position: 'absolute',
            top: '0',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'var(--color-white)',
            color: 'var(--color-deep-blue)',
            padding: '6px 16px',
            borderRadius: '0',
            fontSize: '12px',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            whiteSpace: 'nowrap'
          }}>
            {tier.badgeText}
          </div>
        )}
        
        <div style={{ minHeight: isDense || isFour ? '165px' : '185px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', marginBottom: isDense ? '18px' : '24px' }}>
          <h3 style={{ fontSize: isDense ? '16.5px' : isFour ? '18px' : isThree ? '20px' : '22px', margin: '0 0 8px 0', color: 'inherit', textAlign: 'center', lineHeight: 1.3 }}>{tier.title}</h3>
          <p style={{ fontSize: isDense ? '12.5px' : '14px', opacity: 0.8, margin: '0 0 12px 0', textAlign: 'center', lineHeight: 1.45 }}>{tier.subtitle}</p>
          
          {tier.price && (
            <div style={{ fontSize: isDense ? '22px' : '28px', fontFamily: 'var(--font-serif)', fontWeight: 'bold', marginTop: 'auto', textAlign: 'center' }}>
              {tier.price}
            </div>
          )}
          {tier.priceUnit && (
            <div style={{ fontSize: '13px', opacity: 0.7, textAlign: 'center', marginTop: '4px', lineHeight: 1.3 }}>
              {tier.priceUnit}
            </div>
          )}
        </div>

        <ul style={{ listStyle: 'none', padding: 0, margin: isDense ? '0 0 24px 0' : '0 0 32px 0', flexGrow: 1, display: 'flex', flexDirection: 'column', gap: isDense ? '12px' : '16px' }}>
          {(tier.features || []).map((feature: any, fIdx: number) => {
            const fName = typeof feature === 'string' ? feature : feature.name;
            const fVal = typeof feature === 'string' ? '' : feature.value;
            return (
              <li key={fIdx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '6px', fontSize: isDense ? '12px' : '13px', opacity: 0.9 }}>
                <div style={{ display: 'flex', gap: '6px', flex: '1 1 0%', minWidth: 0 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={tier.popular ? "rgba(255,255,255,0.5)" : "var(--color-primary)"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span style={{ lineHeight: 1.3, wordBreak: 'break-word' }}>{fName}</span>
                </div>
                {fVal && fVal !== 'Да' && (
                  <span style={{ fontWeight: 600, whiteSpace: 'nowrap', color: tier.popular ? 'var(--color-white)' : 'var(--color-deep-blue)', marginLeft: '4px' }}>{fVal}</span>
                )}
              </li>
            );
          })}
        </ul>

        {tier.exclusions && (
          <p style={{ fontSize: '12px', opacity: 0.7, margin: '0 0 16px 0', lineHeight: 1.4, fontStyle: 'italic', textAlign: 'center' }}>
            {tier.exclusions}
          </p>
        )}

        <a 
          href={tier.buttonHref || "#form"} 
          data-service={tierTitleStr}
          data-direction={currentDirection}
          onClick={() => {
            if (typeof window !== 'undefined') {
              window.dispatchEvent(new CustomEvent('dejure:select_service', {
                detail: {
                  service: tierTitleStr,
                  direction: currentDirection
                }
              }));
            }
          }}
          className={`btn ${tier.popular ? 'btn-popular' : 'btn-regular'}`} 
          style={{ 
            width: '100%', 
            textAlign: 'center', 
            borderRadius: '0', 
            fontSize: isDense ? '13px' : isFour ? '14px' : '15px', 
            padding: isDense ? '12px 6px' : '14px 16px', 
            whiteSpace: 'normal', 
            textWrap: 'balance', 
            lineHeight: 1.3, 
            minHeight: isDense ? '48px' : '52px' 
          }}
        >
          {tier.buttonText || 'Узнать точную стоимость'}
        </a>

        {tier.extraAction && (
          <div style={{
            marginTop: '14px',
            paddingTop: '12px',
            borderTop: '1px dashed rgba(23, 50, 77, 0.15)',
            textAlign: 'center',
            width: '100%'
          }}>
            <div style={{
              fontSize: '12.5px',
              color: tier.popular ? 'rgba(255,255,255,0.85)' : 'var(--color-deep-blue)',
              lineHeight: 1.4,
              marginBottom: '6px'
            }}>
              {tier.extraAction.text}
            </div>
            <a
              href={tier.extraAction.href || '#form'}
              data-service={tier.extraAction.serviceName}
              data-direction={currentDirection}
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.dispatchEvent(new CustomEvent('dejure:select_service', {
                    detail: {
                      service: tier.extraAction!.serviceName,
                      direction: currentDirection
                    }
                  }));
                }
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '12.5px',
                fontWeight: 600,
                color: tier.popular ? '#C5A059' : 'var(--color-primary)',
                textDecoration: 'none',
                borderBottom: '1px dashed currentColor',
                paddingBottom: '1px',
                cursor: 'pointer'
              }}
            >
              <span>{tier.extraAction.ctaText}</span>
              <span>→</span>
            </a>
          </div>
        )}
      </div>
    );
  };

  return (
    <section id="pricing" className="section" style={{ position: 'relative', overflow: 'hidden', padding: '80px 0', background: 'var(--gradient-cream)', ...sectionStyle }}>
      {/* Schema.org Offer Catalog for SEO */}
      {pricedTiers.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ItemList',
              'name': typeof title === 'string' ? title : 'Стоимость юридических услуг в Липецке',
              'itemListElement': pricedTiers.map((tier, tIdx) => {
                const numPrice = tier.price ? String(tier.price).replace(/[^\d]/g, '') : '';
                const isMinPrice = tier.price ? /от/i.test(String(tier.price)) : false;

                if (isMinPrice) {
                  return {
                    '@type': 'AggregateOffer',
                    'position': tIdx + 1,
                    'name': typeof tier.title === 'string' ? tier.title : 'Юридическая услуга',
                    'description': typeof tier.subtitle === 'string' ? tier.subtitle : undefined,
                    'lowPrice': numPrice || '0',
                    'priceCurrency': 'RUB',
                    'availability': 'https://schema.org/InStock',
                    'url': offerUrl
                  };
                }

                return {
                  '@type': 'Offer',
                  'position': tIdx + 1,
                  'name': typeof tier.title === 'string' ? tier.title : 'Юридическая услуга',
                  'description': typeof tier.subtitle === 'string' ? tier.subtitle : undefined,
                  'price': numPrice || '0',
                  'priceCurrency': 'RUB',
                  'availability': 'https://schema.org/InStock',
                  'url': offerUrl
                };
              })
            })
          }}
        />
      )}

      <div className="container" style={{ position: 'relative', zIndex: 1, ...(tiers.length >= 5 ? { maxWidth: '1400px' } : {}) }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{ 
            marginTop: 0, 
            fontSize: 'clamp(32px, 4vw, 42px)', 
            fontFamily: 'var(--font-serif)', 
            color: 'var(--color-deep-blue)',
            marginBottom: '20px'
          }}>
            {title}
          </h2>
          <p style={{ 
            fontSize: '16px', 
            color: 'var(--color-deep-blue)',
            opacity: 0.9,
            fontWeight: 500,
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            {subtitle}
          </p>
        </div>

        {showDemoWarning && (
          <div
            style={{
              backgroundColor: '#fffbeb',
              border: '1px solid #fef3c7',
              borderRadius: '8px',
              padding: '14px 20px',
              marginBottom: '32px',
              fontSize: '13px',
              color: '#92400e',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              maxWidth: '850px',
              margin: '0 auto 32px auto',
              lineHeight: 1.5
            }}
          >
            <span style={{ fontSize: '18px', flexShrink: 0 }}>ℹ</span>
            <span>
              Указанные тарифы и объёмы услуг носят ориентировочный характер. Точный состав работ, лимиты и регламент взаимодействия фиксируются в договоре после предварительного анализа задач бизнеса.
            </span>
          </div>
        )}

        {topTier && (
          <div 
            style={{ 
              maxWidth: '850px', 
              margin: '0 auto 40px auto', 
              background: 'var(--color-white)', 
              border: '1px solid var(--color-border)', 
              borderLeft: '4px solid var(--color-gold)', 
              boxShadow: '0 4px 20px rgba(16, 39, 59, 0.08)', 
              padding: '32px 36px',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '28px',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <div style={{ flex: '1 1 450px' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', flexWrap: 'wrap', marginBottom: '8px' }}>
                <h3 style={{ fontSize: '22px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0, fontWeight: 600, lineHeight: 1.3 }}>
                  {topTier.title}
                </h3>
                {topTier.subtitle && (
                  <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', fontWeight: 500 }}>
                    {topTier.subtitle}
                  </span>
                )}
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '14px 0 0 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {topTier.features.map((f, fIdx) => {
                  const fName = typeof f === 'string' ? f : (f as any).name;
                  return (
                    <li key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '14px', color: 'var(--color-deep-blue)', lineHeight: 1.45 }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '3px' }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span>{fName}</span>
                    </li>
                  );
                })}
              </ul>
              {topTier.exclusions && (
                <p style={{ fontSize: '12px', opacity: 0.7, margin: '12px 0 0 0', lineHeight: 1.4, fontStyle: 'italic' }}>
                  {Array.isArray(topTier.exclusions) ? topTier.exclusions.join('; ') : topTier.exclusions}
                </p>
              )}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '220px', flexShrink: 0, gap: '12px' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '32px', fontWeight: 700, color: 'var(--color-deep-blue)', lineHeight: 1 }}>
                  {topTier.price}
                </div>
                {topTier.priceUnit && (
                  <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginTop: '6px' }}>
                    {topTier.priceUnit}
                  </div>
                )}
              </div>
              <a
                href={topTier.buttonHref || '#form'}
                data-service={typeof topTier.title === 'string' ? topTier.title : 'Консультация юриста'}
                data-direction={currentDirection}
                onClick={() => {
                  const sName = typeof topTier.title === 'string' ? topTier.title : 'Консультация юриста';
                  if (typeof window !== 'undefined') {
                    window.dispatchEvent(new CustomEvent('dejure:select_service', {
                      detail: {
                        service: sName,
                        direction: currentDirection
                      }
                    }));
                  }
                }}
                className="btn btn-primary"
                style={{ padding: '14px 28px', fontSize: '15px', borderRadius: '0', whiteSpace: 'nowrap', width: '100%', textAlign: 'center' }}
              >
                {topTier.buttonText || 'Разобрать ситуацию'}
              </a>
            </div>
          </div>
        )}

        {tabs && tabs.length > 1 && (
          <div 
            style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '12px', 
              marginBottom: '40px', 
              flexWrap: 'wrap' 
            }}
            role="tablist"
            aria-label="Маршруты услуг"
          >
            {tabs.map((tab) => {
              const isActive = tab.id === (activeTab?.id || tabs[0].id);
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTabId(tab.id)}
                  style={{
                    padding: '12px 24px',
                    fontSize: '15px',
                    fontWeight: 600,
                    borderRadius: '4px',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    border: isActive ? '1px solid #10273B' : '1px solid rgba(16, 39, 59, 0.2)',
                    backgroundColor: isActive ? '#10273B' : '#FFFFFF',
                    color: isActive ? '#FFFFFF' : '#10273B',
                    boxShadow: isActive ? '0 4px 12px rgba(16, 39, 59, 0.15)' : 'none'
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        )}

        {groups && groups.length > 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {groups.map((group, gIdx) => {
              const gCols = group.gridCols || (group.tiers.length >= 5 ? 5 : group.tiers.length === 4 ? 4 : group.tiers.length === 3 ? 3 : 2);
              return (
                <div key={gIdx} className="pricing-group">
                  <div style={{ marginBottom: '28px', textAlign: 'center' }}>
                    <h3 style={{
                      fontSize: 'clamp(20px, 2.5vw, 24px)',
                      fontFamily: 'var(--font-serif)',
                      color: 'var(--color-primary)',
                      margin: '0 0 6px 0',
                      fontWeight: 600,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '12px'
                    }}>
                      <span style={{ width: '28px', height: '2px', backgroundColor: 'var(--color-gold)' }}></span>
                      <span>{group.title}</span>
                      <span style={{ width: '28px', height: '2px', backgroundColor: 'var(--color-gold)' }}></span>
                    </h3>
                    {group.subtitle && (
                      <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', margin: 0 }}>
                        {group.subtitle}
                      </p>
                    )}
                  </div>
                  <div 
                    className={`pricing-grid-container ${gCols === '2x2' ? 'pricing-grid-2x2' : gCols === 2 ? 'pricing-grid-2' : gCols === 3 ? 'pricing-grid-3' : gCols === 4 ? 'pricing-grid-4' : 'pricing-grid-5'}`}
                  >
                    {group.tiers.map((tier, idx) => renderCard(tier, `${gIdx}-${idx}`, gCols))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div 
            className={`pricing-grid-container ${effectiveGridCols === '2x2' ? 'pricing-grid-2x2' : effectiveGridCols === 2 ? 'pricing-grid-2' : effectiveGridCols === 3 ? 'pricing-grid-3' : effectiveGridCols === 4 ? 'pricing-grid-4' : tiers.length >= 5 ? "pricing-grid-5" : tiers.length === 4 ? "pricing-grid-4" : tiers.length >= 3 ? "pricing-grid-3" : "pricing-grid-2"}`}
          >
            {tiers.map((tier, idx) => renderCard(tier, idx, effectiveGridCols))}
          </div>
        )}

        {mobileNote && (
          <div className="pricing-mobile-note-row">
            {mobileNote}
          </div>
        )}

        {(disclaimer || guaranteeText) && (
          <div style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {disclaimer && (
              <p style={{ color: 'var(--color-deep-blue)', fontSize: '14px', lineHeight: 1.6, margin: 0, textAlign: 'center', opacity: 0.9 }}>
                {disclaimer}
              </p>
            )}
            {guaranteeText && (
              <p style={{ color: 'var(--color-deep-blue)', fontWeight: 600, fontSize: '14px', lineHeight: 1.5, margin: 0, textAlign: 'center' }}>
                ✓ {guaranteeText}
              </p>
            )}
          </div>
        )}
        
        {ctaTitle && (
          <div className="pricing-cta-banner" style={{ 
            marginTop: '40px', 
            background: 'var(--color-white)', 
            border: '1px solid var(--color-border)',
            borderTop: '3px solid var(--color-primary)', 
            boxShadow: '0 10px 30px rgba(16, 39, 59, 0.12), 0 2px 8px rgba(16, 39, 59, 0.08)', 
            padding: '38px 40px', 
            borderRadius: '0', 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '24px', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            maxWidth: '1152px',
            width: '100%',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            <div style={{ flex: '1 1 400px' }}>
              <h3 style={{ fontSize: '24px', marginBottom: '10px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', lineHeight: 1.3, fontWeight: 600 }}>{ctaTitle}</h3>
              <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, lineHeight: 1.6, margin: 0, textWrap: 'balance' }}>{ctaSubtitle}</p>
            </div>
            <div style={{ flexShrink: 0 }}>
              <a 
                href={ctaButtonLink || '#form'} 
                data-service={ctaService || 'Расчёт комплексной защиты'}
                data-direction={currentDirection}
                onClick={() => {
                  const sName = ctaService || 'Расчёт комплексной защиты';
                  if (typeof window !== 'undefined') {
                    window.dispatchEvent(new CustomEvent('dejure:select_service', {
                      detail: {
                        service: sName,
                        direction: currentDirection
                      }
                    }));
                  }
                }}
                className="btn btn-primary" 
                style={{ padding: '16px 36px', fontSize: '15px', borderRadius: '0', whiteSpace: 'nowrap', display: 'inline-block' }}
              >
                {ctaButtonText}
              </a>
            </div>
          </div>
        )}
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        .pricing-grid-container {
          display: grid;
          align-items: stretch;
          width: 100%;
        }
        .pricing-grid-5 {
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 12px;
        }
        .pricing-grid-4 {
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
        }
        .pricing-grid-2x2 {
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 28px;
          max-width: 1000px;
          margin: 0 auto;
        }
        .pricing-grid-3 {
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 30px;
        }
        .pricing-grid-2 {
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 30px;
          max-width: 850px;
          margin: 0 auto;
        }
        .pricing-cta-banner {
          max-width: 1152px !important;
          margin-left: auto !important;
          margin-right: auto !important;
          width: 100% !important;
        }
        @media (max-width: 991px) and (min-width: 768px) {
          .pricing-grid-5 {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 16px !important;
          }
        }
        @media (max-width: 1024px) and (min-width: 768px) {
          .pricing-grid-3, .pricing-grid-4, .pricing-grid-2x2 {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 20px !important;
          }
        }
        .pricing-mobile-note-row {
          display: none;
        }
        @media (max-width: 767px) {
          .pricing-grid-container, .pricing-grid-5, .pricing-grid-4, .pricing-grid-3, .pricing-grid-2, .pricing-grid-2x2 {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .hidden-on-mobile {
            display: none !important;
          }
          .pricing-mobile-note-row {
            display: block !important;
            margin-top: 24px;
            background: #FFFFFF;
            border: 1px solid var(--color-border);
            border-left: 4px solid var(--color-primary);
            padding: 24px 20px;
            box-shadow: 0 4px 16px rgba(16, 39, 59, 0.06);
          }
          .pricing-tier-card {
            padding: 28px 20px !important;
          }
          .pricing-cta-banner {
            padding: 24px 20px !important;
            flex-direction: column !important;
            align-items: stretch !important;
            text-align: left !important;
          }
          .pricing-cta-banner .btn {
            width: 100% !important;
            text-align: center !important;
          }
        }
        .pricing-tier-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 60px rgba(0,0,0,0.1) !important;
        }
        .btn-regular {
          background: #10273B !important;
          color: #FFFFFF !important;
          border: 1px solid #10273B !important;
          transition: all 0.3s ease !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          font-size: 15px !important;
          white-space: normal !important;
          text-wrap: balance !important;
          text-align: center !important;
          line-height: 1.3 !important;
          min-height: 52px !important;
        }
        .btn-regular:hover {
          background: #174269 !important;
          color: #FFFFFF !important;
          border-color: #174269 !important;
        }
        .btn-popular {
          background: #FFFFFF !important;
          color: #10273B !important;
          border: 1px solid #FFFFFF !important;
          transition: all 0.3s ease !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          font-size: 15px !important;
          white-space: normal !important;
          text-wrap: balance !important;
          text-align: center !important;
          line-height: 1.3 !important;
          min-height: 52px !important;
        }
        .btn-popular:hover {
          background: #174269 !important;
          color: #FFFFFF !important;
          border-color: #FFFFFF !important;
        }
      `}} />
    </section>
  );
}

