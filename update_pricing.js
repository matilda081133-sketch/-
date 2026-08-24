const fs = require('fs');

const clientFile = 'src/app/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/IspolnitelnoeClient.tsx';
let clientContent = fs.readFileSync(clientFile, 'utf-8');

const oldPricing = /\{\/\* BLOK 9: STOIMOST \*\/\}[\s\S]*?\{\/\* BLOK 10: FAQ \*\/\}/m;

const newPricing = `{/* BLOK 9: STOIMOST */}
      <PricingBlock
        title="Форматы работы и стоимость"
        subtitle="Подберем оптимальный формат участия в зависимости от ваших задач"
        tiers={[
          {
            title: 'Консультация',
            subtitle: 'Анализ перспектив',
            price: 'от 5 000 ₽',
            features: [
              { name: 'Изучение документов', value: 'Да' },
              { name: 'Оценка рисков', value: 'Да' },
              { name: 'Письменное заключение', value: 'По запросу' },
              { name: 'Взаимодействие с ФССП', value: 'Нет' }
            ],
            buttonText: 'Обсудить ситуацию',
            buttonHref: '#form'
          },
          {
            title: 'Разовые действия',
            subtitle: 'Точечная помощь',
            popular: true,
            price: 'от 15 000 ₽',
            features: [
              { name: 'Подготовка документов', value: 'Да' },
              { name: 'Подача ходатайств', value: 'Да' },
              { name: 'Жалоба на пристава', value: 'Да' },
              { name: 'Комплексное ведение', value: 'Нет' }
            ],
            buttonText: 'Обсудить ситуацию',
            buttonHref: '#form'
          },
          {
            title: 'Сопровождение',
            subtitle: 'Под ключ',
            price: 'от 50 000 ₽',
            features: [
              { name: 'Полный анализ', value: 'Да' },
              { name: 'Все процессуальные действия', value: 'Да' },
              { name: 'Участие в суде', value: 'Да' },
              { name: 'Контроль ФССП', value: 'Да' }
            ],
            buttonText: 'Обсудить ситуацию',
            buttonHref: '#form'
          }
        ]}
        disclaimer="Точная стоимость зависит от роли компании (взыскатель или должник), объёма и полноты документов, необходимости совершения отдельных действий или комплексного ведения производства. Марина Валерьевна Смольянинова оценит объём работы и назовёт стоимость до заключения договора."
        guaranteeText="Если после консультации заключается договор на дальнейшую работу, стоимость консультации засчитывается в оплату по договору."
        ctaTitle="Точную стоимость определим до начала работы"
        ctaSubtitle="Сначала изучим исполнительные документы и обстоятельства дела, предложим подходящий формат помощи и зафиксируем стоимость в договоре. Она не изменится без согласования с вами."
        ctaButtonText="Получить расчёт стоимости"
        ctaButtonLink="#form"
      />

      {/* BLOK 10: FAQ */}`;

clientContent = clientContent.replace(oldPricing, newPricing);
fs.writeFileSync(clientFile, clientContent, 'utf-8');
console.log('PricingBlock disclaimer and guaranteeText updated successfully');
