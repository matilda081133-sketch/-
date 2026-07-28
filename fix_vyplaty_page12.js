const fs = require('fs');
let page = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/vyplaty-za-ranenie-voennosluzhashchego/page.tsx', 'utf8');

const oldHeroRegex = /superTitle="Военные выплаты • анализ документов и обжалование"[\s\S]*?trustItems=\{\[\s*\{\s*text:\s*'Проверяем несколько\\nоснований выплат'\s*\},[\s\S]*?\]\}/;

const newHeroProps = `superTitle={<span style={{ whiteSpace: 'nowrap' }}>Военные выплаты • анализ документов и обжалование</span>}
        title={<><span style={{ whiteSpace: 'nowrap' }}>Юрист по выплатам</span><br/>за ранение<br/>военнослужащего<br/>в Липецке</>}
        subtitle="Проверим документы и виды положенных выплат, запросим недостающие сведения и определим порядок действий при задержке, отказе, неверной квалификации ранения или неполной выплате."
        primaryCtaText="Обсудить выплату"
        secondaryCtaText="Проверить документы"
        secondaryCtaLink="#documents"
        primaryCtaSubtext="Перезвоним в течение 15 минут в рабочее время"
        imageUrl="/-/images/konopkin.jpg"
        imageName="Дмитрий Сергеевич Конопкин"
        imageSubtitle="Адвокат, ведущий юрист военного направления"
        trustItems={[
          { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>, text: 'Проверяем несколько\\nоснований выплат' },
          { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>, text: 'Начинаем со справок\\nи решений' },
          { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>, text: 'Условия работы\\n— в договоре' }
        ]}`;

if (oldHeroRegex.test(page)) {
    page = page.replace(oldHeroRegex, newHeroProps);
    fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/vyplaty-za-ranenie-voennosluzhashchego/page.tsx', page, 'utf8');
    console.log('Successfully added icons and fixed superTitle wrap');
} else {
    console.log('Regex did not match');
}
