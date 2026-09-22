import React from 'react';

export type ArbitrazhMockupVariant = 'hub' | 'isk' | 'zashchita' | 'obzhalovanie';

interface ArbitrazhMockupProps {
  variant?: ArbitrazhMockupVariant;
}

export default function ArbitrazhMockup({ variant = 'hub' }: ArbitrazhMockupProps) {
  const config = {
    hub: {
      docType: 'АРБИТРАЖНОЕ ДЕЛО',
      docSub: 'B2B экономические споры',
      title: 'В АРБИТРАЖНЫЙ СУД ЛИПЕЦКОЙ ОБЛАСТИ',
      caseNum: 'Дело № А36-8421/2026',
      items: [
        { label: '1. ПРЕДМЕТ И ОСНОВАНИЯ ИСКА', tag: 'ОБОСНОВАНО', statusColor: '#16a34a', sub: 'Договор, первичка, соблюдение досудебного порядка' },
        { label: '2. ДОКАЗАТЕЛЬСТВЕННАЯ БАЗА', tag: 'СОБРАНА', statusColor: '#16a34a', sub: 'Акты КС-2/УПД, переписка, судебная экспертиза' },
        { label: '3. СУДЕБНЫЕ ЗАСЕДАНИЯ', tag: 'ПРАКТИКА', statusColor: '#C1A066', sub: 'Лично и онлайн через систему «Мой Арбитр»' },
        { label: '4. СУДЕБНЫЕ РАСХОДЫ', tag: 'К ВОЗВРАТУ', statusColor: '#16a34a', sub: 'Взыскание расходов на представителя с оппонента' },
      ],
      stampText: 'АРБИТРАЖНАЯ ПРАКТИКА',
      sealText: 'СУДЕБНЫЙ АУДИТ ✓',
      sheet2Title: 'РЕЕСТР ДОКАЗАТЕЛЬСТВ',
      sheet2Sub: 'Приложение к позиции',
      sheet2Rows: [
        'Договорная документация и первичные акты',
        'Акт сверки взаимных расчётов сторон',
        'Претензия с подтверждением вручения'
      ],
      sheet3Title: 'СИСТЕМА «МОЙ АРБИТР»',
      sheet3Sub: 'Регистрация № 48-АС/2026'
    },
    isk: {
      docType: 'ИСКОВОЕ ЗАЯВЛЕНИЕ',
      docSub: 'Арбитражное судопроизводство',
      title: 'В АРБИТРАЖНЫЙ СУД ЛИПЕЦКОЙ ОБЛАСТИ',
      caseNum: 'Истец: Доверитель ЮК «Де-Юре»',
      items: [
        { label: '1. ВЗЫСКАНИЕ ОСНОВНОГО ДОЛГА', tag: 'ТРЕБОВАНИЕ', statusColor: '#16a34a', sub: 'Полный расчёт суммы неисполненных обязательств' },
        { label: '2. НЕУСТОЙКА И ПРОЦЕНТЫ', tag: 'РАСЧЁТ', statusColor: '#C1A066', sub: 'ст. 395 ГК РФ / договорная ставка неустойки' },
        { label: '3. ДОСУДЕБНЫЙ ПОРЯДОК', tag: 'СОБЛЮДЁН', statusColor: '#16a34a', sub: 'Претензия направлена с описью вложения' },
        { label: '4. ОБЕСПЕЧЕНИЕ ИСКА', tag: 'ХОДАТАЙСТВО', statusColor: '#C1A066', sub: 'Арест счетов и имущества должника' },
      ],
      stampText: 'ИСК ПОДГОТОВЛЕН',
      sealText: 'ПРИНЯТО К ДЕЛУ ✓',
      sheet2Title: 'РАСЧЁТ ЦЕНЫ ИСКА',
      sheet2Sub: 'Справка-расчёт требований',
      sheet2Rows: [
        'Основной долг по договорам поставки / подряда',
        'Штрафные санкции и законная неустойка',
        'Квитанция об оплате государственной пошлины'
      ],
      sheet3Title: 'СИСТЕМА «МОЙ АРБИТР»',
      sheet3Sub: 'Исковое заявление принято'
    },
    zashchita: {
      docType: 'МОТИВИРОВАННЫЙ ОТЗЫВ',
      docSub: 'Защита ответчика в арбитраже',
      title: 'В АРБИТРАЖНЫЙ СУД ЛИПЕЦКОЙ ОБЛАСТИ',
      caseNum: 'Дело № А36-... / Возражения на иск',
      items: [
        { label: '1. ИСКЛЮЧЕНИЕ СУММ ДОЛГА', tag: 'ВОЗРАЖЕНИЕ', statusColor: '#16a34a', sub: 'Недоказанность объёма и дефекты приёмки' },
        { label: '2. СНИЖЕНИЕ НЕУСТОЙКИ', tag: 'ст. 333 ГК РФ', statusColor: '#C1A066', sub: 'Несоразмерность последствиям нарушения' },
        { label: '3. ВСТРЕЧНЫЙ ИСК ИЛИ ЗАЧЁТ', tag: 'КОНТРПОЗИЦИЯ', statusColor: '#16a34a', sub: 'Встречные финансовые требования к истцу' },
        { label: '4. ЗАЩИТА СЧЕТОВ И АКТИВОВ', tag: 'ОТМЕНА МЕР', statusColor: '#C1A066', sub: 'Снятие несоразмерного судебного ареста' },
      ],
      stampText: 'ОТЗЫВ НА ИСК',
      sealText: 'ПОЗИЦИЯ ГОТОВА ✓',
      sheet2Title: 'КОНТРРАСЧЁТ ТРЕБОВАНИЙ',
      sheet2Sub: 'Снижение необоснованных санкций',
      sheet2Rows: [
        'Снижение штрафных санкций по ст. 333 ГК РФ',
        'Исключение неподтверждённых объёмов работ',
        'Обоснование пропуска срока исковой давности'
      ],
      sheet3Title: 'ОПРЕДЕЛЕНИЕ СУДА',
      sheet3Sub: 'Отзыв приобщён к материалам'
    },
    obzhalovanie: {
      docType: 'АПЕЛЛЯЦИОННАЯ ЖАЛОБА',
      docSub: '19 ААС Воронеж • АС ЦО Калуга',
      title: 'В 19 АРБИТРАЖНЫЙ АПЕЛЛЯЦИОННЫЙ СУД',
      caseNum: 'На решение АС Липецкой области',
      items: [
        { label: '1. НАРУШЕНИЕ НОРМ ПРАВА', tag: 'ОСНОВАНИЕ', statusColor: '#16a34a', sub: 'Неправильное применение материальных норм' },
        { label: '2. НЕПОЛНОТА ИССЛЕДОВАНИЯ', tag: 'ДОВОД', statusColor: '#C1A066', sub: 'Игнорирование ключевых доказательств судом' },
        { label: '3. ПРИОСТАНОВЛЕНИЕ РЕШЕНИЯ', tag: 'ст. 283 АПК РФ', statusColor: '#16a34a', sub: 'Блокировка взыскания до рассмотрения жалобы' },
        { label: '4. ОТМЕНА СУДЕБНОГО АКТА', tag: 'ЦЕЛЬ', statusColor: '#C1A066', sub: 'Вынесение нового решения в пользу доверителя' },
      ],
      stampText: 'ЖАЛОБА ПОДАНА',
      sealText: 'ИСПОЛНЕНИЕ СТОП ✓',
      sheet2Title: 'ХОДАТАЙСТВО О ПРИОСТАНОВКЕ',
      sheet2Sub: 'ст. 283 АПК РФ',
      sheet2Rows: [
        'Предотвращение списания банком по инкассо',
        'Обеспечение поворота исполнения судебного акта',
        'Предоставление встречного обеспечения'
      ],
      sheet3Title: 'СИСТЕМА «МОЙ АРБИТР»',
      sheet3Sub: 'Жалоба принята к производству'
    }
  }[variant];

  return (
    <div className="hero-right-col-creative" style={{ display: 'flex', justifyContent: 'center', position: 'relative', width: '100%' }}>
      {/* Background Soft Glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '140%',
          height: '140%',
          background: 'radial-gradient(circle, rgba(193, 160, 102, 0.12) 0%, rgba(23, 50, 77, 0.05) 35%, transparent 65%)',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />

      {/* Subtle Courthouse Silhouette Watermark */}
      <svg
        className="hero-vector-svg"
        style={{
          position: 'absolute',
          top: '35%',
          left: '80%',
          transform: 'translate(-50%, -50%)',
          width: '580px',
          height: '580px',
          opacity: 0.08,
          zIndex: 0,
          pointerEvents: 'none'
        }}
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--color-primary)"
        strokeWidth="0.6"
      >
        <path d="M3 21h18 M4 21v-2h16v2 M6 19V9 M10 19V9 M14 19V9 M18 19V9 M12 4l-9 5h18l-9-5z M4 9h16" />
      </svg>

      <div className="mockup-container" style={{ zIndex: 1, margin: 0 }}>
        {/* Ambient Blur Core */}
        <div
          style={{
            position: 'absolute',
            width: '220px',
            height: '220px',
            background: 'var(--color-primary)',
            filter: 'blur(90px)',
            opacity: 0.12,
            borderRadius: '50%'
          }}
        />

        {/* ═══ SHEET 3: СИСТЕМА «МОЙ АРБИТР» (ФОНОВЫЙ ЛИСТ С ОТМЕТКОЙ) ═══ */}
        <div className="doc-wrapper-float-3">
          <div className="doc-sheet doc-sheet-3">
            <div style={{ padding: '24px 20px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(23,50,77,0.12)', paddingBottom: '6px', marginBottom: '12px' }}>
                <span style={{ fontSize: '6.5px', fontWeight: 'bold', color: 'var(--color-deep-blue)', letterSpacing: '0.04em' }}>
                  {config.sheet3Title}
                </span>
                <span style={{ fontSize: '5.5px', color: 'var(--color-primary)' }}>
                  Электронная подача
                </span>
              </div>
              <div style={{ background: 'rgba(247, 244, 237, 0.8)', padding: '6px 8px', borderLeft: '2px solid var(--color-gold)', marginBottom: '10px' }}>
                <div style={{ fontSize: '6px', fontWeight: 600, color: 'var(--color-deep-blue)' }}>{config.sheet3Sub}</div>
                <div style={{ fontSize: '5px', color: 'var(--color-text-secondary)', marginTop: '2px' }}>Статус: Документы зарегистрированы судом</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', opacity: 0.7 }}>
                <div style={{ width: '100%', height: '3px', background: 'rgba(23,50,77,0.12)' }} />
                <div style={{ width: '90%', height: '3px', background: 'rgba(23,50,77,0.08)' }} />
                <div style={{ width: '75%', height: '3px', background: 'rgba(23,50,77,0.08)' }} />
              </div>
            </div>
          </div>
        </div>

        {/* ═══ SHEET 2: ПРИЛОЖЕНИЕ К ДЕЛУ / РЕЕСТР ДОКАЗАТЕЛЬСТВ ═══ */}
        <div className="doc-wrapper-float-2">
          <div className="doc-sheet doc-sheet-2">
            <div style={{ padding: '26px 20px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(23,50,77,0.15)', paddingBottom: '8px', marginBottom: '12px' }}>
                <span style={{ fontSize: '7px', fontWeight: 'bold', color: 'var(--color-deep-blue)', letterSpacing: '0.05em' }}>
                  {config.sheet2Title}
                </span>
                <span style={{ fontSize: '6px', color: 'var(--color-gold)', fontWeight: 600 }}>
                  Приложение № 1
                </span>
              </div>
              <div style={{ fontSize: '5.5px', color: 'var(--color-text-secondary)', marginBottom: '10px' }}>
                {config.sheet2Sub}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', marginBottom: '14px' }}>
                {config.sheet2Rows.map((row, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--color-gold)', flexShrink: 0 }} />
                    <span style={{ fontSize: '5.5px', color: 'var(--color-deep-blue)', lineHeight: 1.3 }}>{row}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', paddingTop: '8px', borderTop: '1px dashed rgba(23,50,77,0.15)' }}>
                <div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.6)' }}>Госпошлина: оплачена / отсрочена</div>
                <div style={{ fontSize: '5px', color: 'var(--color-gold)', fontWeight: 'bold' }}>{config.sealText}</div>
              </div>
            </div>
          </div>
        </div>

        {/* ═══ SHEET 1: ГЛАВНЫЙ СУДЕБНЫЙ ДОКУМЕНТ ═══ */}
        <div className="doc-wrapper-float-1">
          <div className="doc-sheet doc-sheet-1">
            <div style={{ padding: '24px 20px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
              {/* Document Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(23,50,77,0.2)', paddingBottom: '8px', marginBottom: '10px' }}>
                <img src="/images/logo_dark.png" alt="Де-Юре" style={{ width: '52px', height: 'auto', opacity: 0.95 }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', alignItems: 'flex-end' }}>
                  <span style={{ fontSize: '6.5px', fontWeight: 'bold', color: 'var(--color-deep-blue)', letterSpacing: '0.04em' }}>
                    {config.docType}
                  </span>
                  <span style={{ fontSize: '5px', color: 'var(--color-primary)' }}>
                    {config.docSub}
                  </span>
                </div>
              </div>

              {/* Court Designation Badge */}
              <div style={{ marginBottom: '10px', padding: '4px 6px', background: 'rgba(23,50,77,0.04)', borderLeft: '2px solid var(--color-primary)' }}>
                <div style={{ fontSize: '5.5px', fontWeight: 600, color: 'var(--color-deep-blue)' }}>{config.title}</div>
                <div style={{ fontSize: '5px', color: 'var(--color-gold-text, #80633F)', fontWeight: 600 }}>{config.caseNum}</div>
              </div>

              {/* Arguments list */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '10px' }}>
                {config.items.map((item, idx) => (
                  <div key={idx} style={{ background: 'rgba(247, 244, 237, 0.75)', borderLeft: '3px solid #C1A066', padding: '5px 7px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2px' }}>
                      <span style={{ fontSize: '5.8px', fontWeight: 'bold', color: 'var(--color-deep-blue)' }}>{item.label}</span>
                      <span style={{ fontSize: '4.8px', color: item.statusColor, fontWeight: 'bold' }}>{item.tag}</span>
                    </div>
                    <div style={{ fontSize: '4.8px', color: 'var(--color-text-secondary)', lineHeight: 1.2 }}>
                      {item.sub}
                    </div>
                  </div>
                ))}
              </div>

              {/* Document Footer & Seal */}
              <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: '6px', borderTop: '1px solid rgba(23,50,77,0.15)' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
                  <span style={{ fontSize: '5.2px', color: 'rgba(23,50,77,0.7)', fontWeight: 600 }}>ЮК «ДЕ-ЮРЕ» • АРБИТРАЖ</span>
                  <span style={{ fontSize: '4.8px', color: '#C1A066' }}>Липецк • Защита бизнеса</span>
                </div>
                <div style={{ border: '1px solid #C1A066', padding: '2px 5px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(193, 160, 102, 0.08)' }}>
                  <span style={{ fontSize: '4.5px', fontWeight: 'bold', color: '#80633F' }}>{config.stampText}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
