const fs = require('fs');

const file = 'src/app/grazhdanam/voennyj-yurist/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// The botched section looks like this:
//          },
//          {
//            category: "Военное право",
//            title: "[Кейс 3: Пример заголовка дела]",
//            problem: "Здесь будет размещено реальное дело из практики по защите прав военнослужащего.",
//            action: "Текст на этапе макета является заглушкой и будет заменен после согласования.",
//            result: "[Ключевой результат]",
//          </p>
//          <div className="grid grid-3" style={{ gap: '24px' }}>

// Let's fix it by replacing the broken part with the correct part.

const brokenPart = `          },
          {
            category: "Военное право",
            title: "[Кейс 3: Пример заголовка дела]",
            problem: "Здесь будет размещено реальное дело из практики по защите прав военнослужащего.",
            action: "Текст на этапе макета является заглушкой и будет заменен после согласования.",
            result: "[Ключевой результат]",
          </p>
          <div className="grid grid-3" style={{ gap: '24px' }}>`;

const fixedPart = `          },
          {
            category: "Военное право",
            title: "[Кейс 3: Пример заголовка дела]",
            problem: "Здесь будет размещено реальное дело из практики по защите прав военнослужащего.",
            action: "Текст на этапе макета является заглушкой и будет заменен после согласования.",
            result: "[Ключевой результат]",
            isDemo: true
          }
        ]}
      />

      {/* 7. Срочный блок */}
      <section className="section" style={{ background: 'radial-gradient(circle at 100% 50%, #EAF1F6 0%, transparent 60%), var(--color-cream)' }}>
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: '24px', textAlign: 'left' }}>
            Если помощь нужна прямо сейчас
          </h2>
          <p style={{ textAlign: 'left', color: 'var(--color-text-secondary)', fontSize: '16px', maxWidth: '800px', marginBottom: '40px', lineHeight: 1.6 }}>
            Ниже — типичные ситуации, в которых откладывать обращение за юридической помощью опасно. Чем раньше подключится профильный специалист, тем больше возможностей для защиты ваших прав.
          </p>
          <div className="grid grid-3" style={{ gap: '24px' }}>`;

content = content.replace(brokenPart, fixedPart);
fs.writeFileSync(file, content);
console.log('Fixed broken page.tsx!');
