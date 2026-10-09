(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,62733,e=>{"use strict";var i=e.i(90748);function t({items:e,marginTop:r}){return e&&0!==e.length?(0,i.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"14px",marginTop:r||"20px",marginBottom:"24px",width:"100%",maxWidth:"640px"},children:e.map((e,t)=>(0,i.jsx)("div",{style:{paddingLeft:"16px",borderLeft:"3px solid var(--color-gold)",fontSize:"15px",color:"var(--color-deep-blue)",lineHeight:1.45,fontWeight:500,whiteSpace:"pre-line"},children:"string"==typeof e?e:e.text},t))}):null}e.s(["default",0,function({breadcrumbs:e,superTitle:r,badge:n,title:o,subtitle:a,primaryCtaText:l,primaryButtonText:p,primaryCtaSubtext:s,primaryCtaLink:d,primaryButtonHref:c,primaryCtaAnalytics:x,secondaryCtaText:m,secondaryButtonText:g,secondaryCtaLink:h,secondaryButtonHref:u,urgentHint:f,trustItems:y=[],trustPosition:b="above-cta",imageUrl:v,imageName:j,imageSubtitle:w,trustMarginTop:S,imageMarginTop:F,ctaMarginTop:z,imageObjectPosition:k,rightContent:T,afterTrustContent:B}){let W=m||g,H=h||u,N=!!(v||T);return(0,i.jsxs)("section",{className:"military-hero-section",style:{position:"relative",minHeight:"85vh",display:"flex",alignItems:"center",paddingTop:"clamp(120px, 9vw, 160px)",paddingBottom:"80px",background:"linear-gradient(145deg, var(--color-cream) 0%, rgba(247, 244, 237, 0.4) 100%)",overflow:"hidden"},children:[(0,i.jsx)("div",{style:{position:"absolute",top:"-10%",right:"-5%",width:"600px",height:"600px",background:"radial-gradient(circle, rgba(234, 241, 246, 0.8) 0%, transparent 70%)",borderRadius:"50%",zIndex:0}}),(0,i.jsxs)("div",{className:"container",style:{position:"relative",zIndex:1,paddingTop:"0px"},children:[e&&(0,i.jsx)("div",{style:{fontSize:"13px",color:"var(--color-text-secondary)",marginBottom:"32px"},children:e}),(0,i.jsxs)("div",{className:N?"grid grid-2 land-hero-grid":"",style:{display:N?"grid":"flex",flexDirection:N?"row":"column",gap:"40px",alignItems:"flex-start"},children:[(0,i.jsxs)("div",{style:{flex:"1 1 0%",paddingTop:"0px"},children:[(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"16px",marginBottom:"12px",flexWrap:"wrap"},children:[(0,i.jsx)("div",{style:{width:"40px",height:"2px",backgroundColor:"#9B7E55",flexShrink:0}}),(0,i.jsx)("span",{className:"military-hero-supertitle",style:{textTransform:"uppercase",letterSpacing:"0.08em",fontSize:"clamp(11px, 2vw, 14px)",fontWeight:600,color:"var(--color-gold-text, #80633F)",overflowWrap:"anywhere"},children:r||n})]}),(0,i.jsx)("h1",{className:"military-hero-h1",style:{fontSize:"clamp(26px, 3.8vw, 50px)",color:"var(--color-deep-blue)",fontFamily:"var(--font-serif)",margin:"0 0 16px 0",lineHeight:1.15},children:o}),(0,i.jsx)("p",{className:"military-hero-subtitle",style:{fontSize:"16px",color:"var(--color-deep-blue)",opacity:.9,fontWeight:500,marginBottom:"16px",maxWidth:"750px",lineHeight:1.55},children:a}),"above-cta"===b&&y&&y.length>0&&(0,i.jsx)(t,{items:y,marginTop:S||"16px"}),B&&(0,i.jsx)("div",{style:{marginTop:"16px",marginBottom:"8px"},children:B}),(0,i.jsxs)("div",{className:"military-hero-cta",style:{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:"14px",marginTop:z||(y&&y.length>0?"20px":"32px"),marginBottom:f?"16px":"24px"},children:[(0,i.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:"16px"},children:[(0,i.jsx)("a",{href:d||c||"#form",className:"btn btn-primary military-hero-primary-btn","data-analytics":x||"military_hero_consultation_click",children:l||p||"Получить консультацию"}),W&&H&&(0,i.jsx)("a",{href:H,className:"btn btn-outline",style:{padding:"15px 36px",fontSize:"15px"},children:W})]}),s&&(0,i.jsx)("div",{style:{fontSize:"14px",color:"var(--color-text-secondary)",marginTop:"4px",lineHeight:1.5},children:s})]}),f&&(0,i.jsxs)("div",{style:{background:"rgba(200, 169, 126, 0.1)",borderLeft:"4px solid var(--color-gold)",padding:"14px 20px",marginBottom:"20px",fontSize:"14px",color:"var(--color-deep-blue)",lineHeight:1.5},children:[(0,i.jsx)("strong",{style:{display:"block",marginBottom:"4px"},children:"Важно:"}),f]}),"below-cta"===b&&y&&y.length>0&&(0,i.jsx)(t,{items:y,marginTop:S||"16px"})]}),N&&(0,i.jsx)("div",{className:"military-hero-right",style:{width:"100%",maxWidth:"440px",margin:"0 auto",flexShrink:0,display:"flex",flexDirection:"column",paddingTop:F||0,marginTop:0},children:T||(0,i.jsxs)("div",{className:"hero-photo-hover",style:{width:"100%",borderRadius:"0",overflow:"hidden",position:"relative",boxShadow:"0 4px 14px rgba(16, 39, 59, 0.12)",zIndex:1,display:"block",background:"transparent"},children:[v&&(0,i.jsx)("img",{src:v,alt:j||o?.toString()||"Специалист",width:440,height:460,fetchPriority:"high",decoding:"async",style:{width:"100%",height:"460px",objectFit:"cover",objectPosition:k||"center 20%",display:"block",filter:"brightness(1.05)",aspectRatio:"440/460"},className:"hero-photo-img"}),(j||w)&&(0,i.jsxs)("div",{style:{padding:"16px 20px",background:"rgba(255, 255, 255, 0.75)",backdropFilter:"blur(10px)",borderTop:"3px solid var(--color-gold)",borderLeft:"1px solid rgba(255, 255, 255, 0.9)",borderRight:"1px solid rgba(255, 255, 255, 0.9)",borderBottom:"1px solid rgba(255, 255, 255, 0.9)",boxShadow:"0 4px 14px rgba(16, 39, 59, 0.08)"},children:[j&&(0,i.jsx)("div",{style:{fontSize:"16px",fontWeight:700,color:"var(--color-deep-blue)",fontFamily:"var(--font-serif)",marginBottom:"2px",lineHeight:1.3},children:"Дмитрий Сергеевич Конопкин"===j||"Конопкин Дмитрий Сергеевич"===j?(0,i.jsxs)(i.Fragment,{children:["Конопкин ",(0,i.jsx)("br",{}),"Дмитрий Сергеевич"]}):"Марина Валерьевна Смольянинова"===j||"Смольянинова Марина Валерьевна"===j?(0,i.jsxs)(i.Fragment,{children:["Смольянинова ",(0,i.jsx)("br",{}),"Марина Валерьевна"]}):"Владимир Викторович Начешников"===j||"Начешников Владимир Викторович"===j?(0,i.jsxs)(i.Fragment,{children:["Начешников ",(0,i.jsx)("br",{}),"Владимир Викторович"]}):j}),w&&(0,i.jsx)("div",{style:{fontSize:"13px",color:"var(--color-text-secondary)",fontWeight:500,lineHeight:1.35},children:"string"==typeof w&&w.includes("•")?w:"string"==typeof w&&w.includes("куратор")?(0,i.jsxs)(i.Fragment,{children:[w.split("куратор")[0].trim().replace(/,$/,""),",",(0,i.jsx)("br",{}),"куратор",w.split("куратор")[1]]}):w})]})]})})]}),(0,i.jsx)("style",{dangerouslySetInnerHTML:{__html:`
          .military-hero-primary-btn {
            padding: 15px 36px !important;
            font-size: 15px !important;
            color: #FFFFFF !important;
            background-color: #10273B !important;
            border: 1px solid #9B7E55 !important;
            box-shadow: 0 4px 14px rgba(16, 39, 59, 0.25) !important;
            transition: all 0.3s ease !important;
            border-radius: var(--radius-md) !important;
            text-decoration: none !important;
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
            cursor: pointer !important;
          }
          .military-hero-primary-btn:hover {
            background-color: #17324D !important;
            border: 1px solid #FFFFFF !important;
            border-color: #FFFFFF !important;
            color: #FFFFFF !important;
            transform: translateY(-2px) !important;
            box-shadow: 0 8px 24px rgba(16, 39, 59, 0.35) !important;
          }

          @media (max-width: 1440px) {
            .military-hero-section {
              padding-top: 130px !important;
              padding-bottom: 50px !important;
              min-height: auto !important;
            }
            .military-hero-h1 {
              font-size: clamp(24px, 3.4vw, 44px) !important;
              margin-bottom: 12px !important;
            }
            .military-hero-subtitle {
              margin-bottom: 12px !important;
              font-size: 15px !important;
              line-height: 1.5 !important;
            }
            .military-hero-cta {
              margin-top: 12px !important;
              margin-bottom: 16px !important;
            }
          }
          @media (max-width: 1200px) {
            .land-hero-grid {
              grid-template-columns: minmax(0, 1fr) 360px !important;
              gap: 28px !important;
            }
            .military-hero-h1 {
              font-size: clamp(22px, 3.1vw, 38px) !important;
            }
          }
          @media (max-width: 1024px) {
            .land-hero-grid {
              grid-template-columns: minmax(0, 1fr) 320px !important;
              gap: 20px !important;
            }
            .military-hero-h1 {
              font-size: clamp(22px, 2.8vw, 32px) !important;
            }
          }
          @media (max-width: 900px) {
            .land-hero-grid {
              grid-template-columns: 1fr !important;
            }
          }
          @media (max-width: 768px) {
            .military-hero-section {
              padding-top: 100px !important;
              padding-bottom: 40px !important;
            }
            .military-hero-cta {
              width: 100% !important;
            }
            .military-hero-cta .btn {
              width: 100% !important;
              text-align: center !important;
            }
          }
          @media (max-width: 480px) {
            .military-hero-h1, .hero-title-span-mobile {
              white-space: normal !important;
              overflow-wrap: anywhere !important;
              word-break: normal !important;
            }
            .military-hero-section .container {
              width: 100% !important;
              max-width: 100% !important;
              min-width: 0 !important;
              padding-left: 16px !important;
              padding-right: 16px !important;
            }
            .military-hero-supertitle {
              white-space: normal !important;
            }
            .military-hero-subtitle {
              width: 100% !important;
              max-width: 100% !important;
              min-width: 0 !important;
              overflow-wrap: anywhere !important;
            }
          }
        `}})]})]})}],62733)},59542,e=>{"use strict";var i=e.i(90748),t=e.i(82568),r=e.i(74003);e.s(["default",0,function({title:e="Стоимость юридических услуг в Липецке",subtitle:n="Честные цены, закрепленные в договоре. Никаких скрытых платежей.",tiers:o,groups:a,tabs:l,pageUrl:p,ctaTitle:s="Точную стоимость определим до начала работы",ctaSubtitle:d="Сначала изучим обстоятельства и документы, предложим подходящий формат помощи и согласуем стоимость. Она не изменится без согласования с вами.",ctaButtonText:c="Получить расчёт стоимости",ctaButtonLink:x="#form",ctaService:m,disclaimer:g,guaranteeText:h,sectionStyle:u,showDemoWarning:f,direction:y,gridCols:b,mobileNote:v,topTier:j}){let[w,S]=t.default.useState(l&&l.length>0?l[0].id:""),F=l?.find(e=>e.id===w)||l?.[0],z=F?.gridCols||b,k=F?F.tiers:o||(a?a.flatMap(e=>e.tiers):[{title:"Гражданам",subtitle:"Защита личных интересов",popular:!1,price:"от 2 000 ₽",features:[{name:"Юридическая консультация",value:"2 000 ₽"},{name:"Составление и подача иска",value:"от 10 000 ₽"},{name:"Ведение дела в суде Липецка",value:"от 15 000 ₽"},{name:"Апелляционная жалоба",value:"от 20 000 ₽"},{name:"Ознакомление с материалами",value:"4 000 ₽/том"}]},{title:"Бизнесу",subtitle:"Комплексное юридическое сопровождение",popular:!0,price:"от 5 000 ₽",features:[{name:"Консультация для бизнеса",value:"5 000 ₽"},{name:"Разработка договоров",value:"от 10 000 ₽"},{name:"Досудебная претензионная работа",value:"от 15 000 ₽"},{name:"Представительство в Арбитраже",value:"от 15 000 ₽"},{name:"Правовой аудит документов",value:"от 10 000 ₽"}]},{title:"Документы и консалтинг",subtitle:"Глубокая правовая аналитика",popular:!1,price:"от 10 000 ₽",features:[{name:"Письменная правовая оценка",value:"от 30 000 ₽"},{name:"Официальное заключение юриста",value:"от 35 000 ₽"},{name:"Участие в деловых переговорах",value:"15 000 ₽"},{name:"Защита интересов в госорганах",value:"15 000 ₽"},{name:"Разработка внутренних регламентов",value:"от 15 000 ₽"}]}]),T=k.map(e=>({...e,title:e.title||e.name||"",subtitle:e.subtitle||e.description||"",popular:e.popular??e.isPopular??!1,badgeText:e.badgeText||e.badge||"",price:e.price,features:(e.features||[]).map(e=>"string"==typeof e?{name:e,value:""}:{name:e.name||"",value:e.value||""}),buttonText:e.buttonText||e.ctaText||"Выбрать тариф",buttonHref:e.buttonHref||e.ctaHref||"#form",exclusions:Array.isArray(e.exclusions)?e.exclusions.join("; "):e.exclusions,hideOnMobile:!!e.hideOnMobile})),B=(0,r.usePathname)(),W=y||(B?.includes("/voennyj-yurist")?"Военное право":B?.includes("/semejnyj-yurist")?"Семейный юрист":B?.includes("/advokat-po-ugolovnym-delam")?"Адвокат по уголовным делам":B?.includes("/ugolovno-pravovaya-zashchita-biznesa")?"Уголовно-правовая защита бизнеса":B?.includes("/arbitrazhnyj-yurist")?"Арбитражный юрист":B?.includes("/vzyskanie-zadolzhennosti-s-yuridicheskih-lic")?"Взыскание задолженности с юридических лиц":B?.includes("/korporativnyj-yurist")?"Корпоративный юрист":B?.includes("/dogovornoe-pravo")?"Договорное право":B?.includes("/nalogovyj-yurist-dlya-biznesa")?"Налоговый юрист для бизнеса":B?.includes("/nasledstvennyj-yurist")?"Наследственный юрист":B?.includes("/zhilishchnyj-yurist")?"Жилищный юрист":B?.includes("/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa")?"Юрист по недвижимости и строительству для бизнеса":B?.includes("/yurist-po-nedvizhimosti")?"Юрист по недвижимости":B?.includes("/zemelnyj-yurist")?"Земельный юрист":B?.includes("/zashchita-ot-trebovaniy-po-dolgu")?"Защита от требований по долгу":B?.includes("/vzyskanie-dolgov")?"Взыскание долгов":B?.includes("/avtoyurist")?"Автоюрист":B?.includes("/trudovoj-yurist")?"Трудовой юрист":B?.includes("/migracionnyj-yurist")?"Миграционный юрист":B?.includes("/bankrotstvo-fizicheskih-lic")?"Банкротство физических лиц":B?.includes("/bankrotstvo-biznesa")?"Банкротство бизнеса":B?.includes("/yuridicheskoe-soprovozhdenie-biznesa")?"Юридическое сопровождение бизнеса":B?.includes("/trudovye-spory-s-rabotnikami")?"Трудовые споры с работниками":B?.includes("/migracionnoe-soprovozhdenie-biznesa")?"Миграционное сопровождение бизнеса":B?.includes("/ispolnitelnoe-proizvodstvo-dlya-biznesa")?"Исполнительное производство для бизнеса":B?.includes("/razblokirovka-raschetnogo-scheta-po-115-fz")?"Разблокировка расчётного счёта по 115-ФЗ":B?.includes("/kreditnyj-yurist")?"Кредитный юрист":B?.includes("/yurist-po-ispolnitelnomu-proizvodstvu")?"Юрист по исполнительному производству":""),H=p||(B?`https://dejure-help.ru${B.endsWith("/")?B:B+"/"}`:"https://dejure-help.ru/"),N=H.endsWith("/")?`${H}#pricing`:`${H}/#pricing`,C=[...j?[j]:[],...k],A=C.filter(e=>e.extraAction).map(e=>({title:e.extraAction.serviceName,price:e.extraAction.priceText||e.extraAction.text.match(/(?:от\s+)?[\d\s]+₽/i)?.[0]||"от 35 000 ₽",subtitle:e.extraAction.text,features:[]})),I=Array.from(new Map([...C,...A].map(e=>["string"==typeof e.title?e.title:JSON.stringify(e.title),e])).values()).map(e=>({...e,title:e.title||e.name||"",subtitle:e.subtitle||e.description||"",price:e.price})).filter(e=>!!(e.price?String(e.price).replace(/[^\d]/g,""):"")),P=(e,t,r)=>{let n=e.price?String(e.price).replace(/[^\d]/g,""):"",o=!!e.price&&/от/i.test(String(e.price)),a="string"==typeof e.title?e.title:"Юридическая услуга",l="string"==typeof e.subtitle?e.subtitle:"",p=5===r||void 0===r&&T.length>=5,s=4===r||void 0===r&&4===T.length,d=3===r||void 0===r&&3===T.length;return(0,i.jsxs)("div",{style:{background:e.popular?"linear-gradient(145deg, #0B1C2A 0%, #17375E 100%)":"var(--color-white)",color:e.popular?"var(--color-white)":"var(--color-deep-blue)",borderRadius:"0",padding:p?"26px 12px":s?"32px 16px":d?"32px 24px":"40px 30px",boxShadow:e.popular?"0 20px 40px rgba(16, 39, 59, 0.15)":"0 10px 30px rgba(0,0,0,0.05)",border:e.popular?"1px solid transparent":"1px solid rgba(23, 50, 77, 0.1)",position:"relative",transition:"transform 0.4s ease, box-shadow 0.4s ease",display:"flex",flexDirection:"column",height:"100%",width:"100%",minWidth:0,boxSizing:"border-box"},className:`pricing-tier-card ${e.hideOnMobile?"hidden-on-mobile":""}`,itemScope:!!n,itemType:n?o?"https://schema.org/AggregateOffer":"https://schema.org/Offer":void 0,children:[n&&(0,i.jsxs)(i.Fragment,{children:[o?(0,i.jsx)("meta",{itemProp:"lowPrice",content:n}):(0,i.jsx)("meta",{itemProp:"price",content:n}),(0,i.jsx)("meta",{itemProp:"priceCurrency",content:"RUB"}),(0,i.jsx)("meta",{itemProp:"availability",content:"https://schema.org/InStock"}),(0,i.jsx)("meta",{itemProp:"name",content:a}),(0,i.jsx)("meta",{itemProp:"url",content:N}),l&&(0,i.jsx)("meta",{itemProp:"description",content:l}),"MON"===e.billingPeriod&&(0,i.jsxs)("span",{itemProp:"priceSpecification",itemScope:!0,itemType:"https://schema.org/UnitPriceSpecification",style:{display:"none"},children:[(0,i.jsx)("meta",{itemProp:o?"minPrice":"price",content:n}),(0,i.jsx)("meta",{itemProp:"priceCurrency",content:"RUB"}),(0,i.jsx)("meta",{itemProp:"unitCode",content:"MON"}),(0,i.jsx)("meta",{itemProp:"unitText",content:"месяц"})]})]}),e.popular&&!!e.badgeText&&(0,i.jsx)("div",{style:{position:"absolute",top:"0",left:"50%",transform:"translate(-50%, -50%)",background:"var(--color-white)",color:"var(--color-deep-blue)",padding:"6px 16px",borderRadius:"0",fontSize:"12px",fontWeight:"bold",textTransform:"uppercase",letterSpacing:"0.1em",whiteSpace:"nowrap"},children:e.badgeText}),(0,i.jsxs)("div",{style:{minHeight:p||s?"165px":"185px",display:"flex",flexDirection:"column",justifyContent:"flex-start",marginBottom:p?"18px":"24px"},children:[(0,i.jsx)("h3",{style:{fontSize:p?"16.5px":s?"18px":d?"20px":"22px",margin:"0 0 8px 0",color:"inherit",textAlign:"center",lineHeight:1.3},children:e.title}),(0,i.jsx)("p",{style:{fontSize:p?"12.5px":"14px",opacity:.8,margin:"0 0 12px 0",textAlign:"center",lineHeight:1.45},children:e.subtitle}),e.price&&(0,i.jsx)("div",{style:{fontSize:p?"22px":"28px",fontFamily:"var(--font-serif)",fontWeight:"bold",marginTop:"auto",textAlign:"center"},children:e.price}),e.priceUnit&&(0,i.jsx)("div",{style:{fontSize:"13px",opacity:.7,textAlign:"center",marginTop:"4px",lineHeight:1.3},children:e.priceUnit})]}),(0,i.jsx)("ul",{style:{listStyle:"none",padding:0,margin:p?"0 0 24px 0":"0 0 32px 0",flexGrow:1,display:"flex",flexDirection:"column",gap:p?"12px":"16px"},children:(e.features||[]).map((t,r)=>{let n="string"==typeof t?t:t.name,o="string"==typeof t?"":t.value;return(0,i.jsxs)("li",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:"6px",fontSize:p?"12px":"13px",opacity:.9},children:[(0,i.jsxs)("div",{style:{display:"flex",gap:"6px",flex:"1 1 0%",minWidth:0},children:[(0,i.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:e.popular?"rgba(255,255,255,0.5)":"var(--color-primary)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{flexShrink:0,marginTop:"2px"},children:(0,i.jsx)("polyline",{points:"20 6 9 17 4 12"})}),(0,i.jsx)("span",{style:{lineHeight:1.3,wordBreak:"break-word"},children:n})]}),o&&"Да"!==o&&(0,i.jsx)("span",{style:{fontWeight:600,whiteSpace:"nowrap",color:e.popular?"var(--color-white)":"var(--color-deep-blue)",marginLeft:"4px"},children:o})]},r)})}),e.exclusions&&(0,i.jsx)("p",{style:{fontSize:"12px",opacity:.7,margin:"0 0 16px 0",lineHeight:1.4,fontStyle:"italic",textAlign:"center"},children:e.exclusions}),(0,i.jsx)("a",{href:e.buttonHref||"#form","data-service":a,"data-direction":W,onClick:()=>{window.dispatchEvent(new CustomEvent("dejure:select_service",{detail:{service:a,direction:W}}))},className:`btn ${e.popular?"btn-popular":"btn-regular"}`,style:{width:"100%",textAlign:"center",borderRadius:"0",fontSize:p?"13px":s?"14px":"15px",padding:p?"12px 6px":"14px 16px",whiteSpace:"normal",textWrap:"balance",lineHeight:1.3,minHeight:p?"48px":"52px"},children:e.buttonText||"Узнать точную стоимость"}),e.extraAction&&(0,i.jsxs)("div",{style:{marginTop:"14px",paddingTop:"12px",borderTop:"1px dashed rgba(23, 50, 77, 0.15)",textAlign:"center",width:"100%"},children:[(0,i.jsx)("div",{style:{fontSize:"12.5px",color:e.popular?"rgba(255,255,255,0.85)":"var(--color-deep-blue)",lineHeight:1.4,marginBottom:"6px"},children:e.extraAction.text}),(0,i.jsxs)("a",{href:e.extraAction.href||"#form","data-service":e.extraAction.serviceName,"data-direction":W,onClick:()=>{window.dispatchEvent(new CustomEvent("dejure:select_service",{detail:{service:e.extraAction.serviceName,direction:W}}))},style:{display:"inline-flex",alignItems:"center",gap:"4px",fontSize:"12.5px",fontWeight:600,color:e.popular?"#C5A059":"var(--color-primary)",textDecoration:"none",borderBottom:"1px dashed currentColor",paddingBottom:"1px",cursor:"pointer"},children:[(0,i.jsx)("span",{children:e.extraAction.ctaText}),(0,i.jsx)("span",{children:"→"})]})]})]},t)};return(0,i.jsxs)("section",{id:"pricing",className:"section",style:{position:"relative",overflow:"hidden",padding:"80px 0",background:"var(--gradient-cream)",...u},children:[I.length>0&&(0,i.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify({"@context":"https://schema.org","@type":"ItemList",name:"string"==typeof e?e:"Стоимость юридических услуг в Липецке",itemListElement:I.map((e,i)=>{let t=e.price?String(e.price).replace(/[^\d]/g,""):"",r=!!e.price&&/от/i.test(String(e.price)),n="MON"===e.billingPeriod?{"@type":"UnitPriceSpecification",...r?{minPrice:t||"0"}:{price:t||"0"},priceCurrency:"RUB",unitCode:"MON",unitText:"месяц",referenceQuantity:{"@type":"QuantitativeValue",value:1,unitCode:"MON"}}:void 0;return r?{"@type":"AggregateOffer",position:i+1,name:"string"==typeof e.title?e.title:"Юридическая услуга",description:"string"==typeof e.subtitle?e.subtitle:void 0,lowPrice:t||"0",priceCurrency:"RUB",...n?{priceSpecification:n}:{},availability:"https://schema.org/InStock",url:N}:{"@type":"Offer",position:i+1,name:"string"==typeof e.title?e.title:"Юридическая услуга",description:"string"==typeof e.subtitle?e.subtitle:void 0,price:t||"0",priceCurrency:"RUB",...n?{priceSpecification:n}:{},availability:"https://schema.org/InStock",url:N}})})}}),(0,i.jsxs)("div",{className:"container",style:{position:"relative",zIndex:1,...T.length>=5?{maxWidth:"1400px"}:{}},children:[(0,i.jsxs)("div",{style:{textAlign:"center",marginBottom:"80px"},children:[(0,i.jsx)("h2",{style:{marginTop:0,fontSize:"clamp(32px, 4vw, 42px)",fontFamily:"var(--font-serif)",color:"var(--color-deep-blue)",marginBottom:"20px"},children:e}),(0,i.jsx)("p",{style:{fontSize:"16px",color:"var(--color-deep-blue)",opacity:.9,fontWeight:500,maxWidth:"700px",margin:"0 auto",lineHeight:1.6},children:n})]}),f&&(0,i.jsxs)("div",{style:{backgroundColor:"#fffbeb",border:"1px solid #fef3c7",borderRadius:"8px",padding:"14px 20px",marginBottom:"32px",fontSize:"13px",color:"#92400e",display:"flex",alignItems:"center",gap:"10px",maxWidth:"850px",margin:"0 auto 32px auto",lineHeight:1.5},children:[(0,i.jsx)("span",{style:{fontSize:"18px",flexShrink:0},children:"ℹ"}),(0,i.jsx)("span",{children:"Указанные тарифы и объёмы услуг носят ориентировочный характер. Точный состав работ, лимиты и регламент взаимодействия фиксируются в договоре после предварительного анализа задач бизнеса."})]}),j&&(0,i.jsxs)("div",{style:{maxWidth:"850px",margin:"0 auto 40px auto",background:"var(--color-white)",border:"1px solid var(--color-border)",borderLeft:"4px solid var(--color-gold)",boxShadow:"0 4px 20px rgba(16, 39, 59, 0.08)",padding:"32px 36px",display:"flex",flexWrap:"wrap",gap:"28px",alignItems:"center",justifyContent:"space-between"},children:[(0,i.jsxs)("div",{style:{flex:"1 1 450px"},children:[(0,i.jsxs)("div",{style:{display:"flex",alignItems:"baseline",gap:"12px",flexWrap:"wrap",marginBottom:"8px"},children:[(0,i.jsx)("h3",{style:{fontSize:"22px",fontFamily:"var(--font-serif)",color:"var(--color-deep-blue)",margin:0,fontWeight:600,lineHeight:1.3},children:j.title}),j.subtitle&&(0,i.jsx)("span",{style:{fontSize:"14px",color:"var(--color-text-secondary)",fontWeight:500},children:j.subtitle})]}),(0,i.jsx)("ul",{style:{listStyle:"none",padding:0,margin:"14px 0 0 0",display:"flex",flexDirection:"column",gap:"8px"},children:j.features.map((e,t)=>{let r="string"==typeof e?e:e.name;return(0,i.jsxs)("li",{style:{display:"flex",alignItems:"flex-start",gap:"8px",fontSize:"14px",color:"var(--color-deep-blue)",lineHeight:1.45},children:[(0,i.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"var(--color-primary)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{flexShrink:0,marginTop:"3px"},children:(0,i.jsx)("polyline",{points:"20 6 9 17 4 12"})}),(0,i.jsx)("span",{children:r})]},t)})}),j.exclusions&&(0,i.jsx)("p",{style:{fontSize:"12px",opacity:.7,margin:"12px 0 0 0",lineHeight:1.4,fontStyle:"italic"},children:Array.isArray(j.exclusions)?j.exclusions.join("; "):j.exclusions})]}),(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",minWidth:"220px",flexShrink:0,gap:"12px"},children:[(0,i.jsxs)("div",{style:{textAlign:"center"},children:[(0,i.jsx)("div",{style:{fontSize:"32px",fontWeight:700,color:"var(--color-deep-blue)",lineHeight:1},children:j.price}),j.priceUnit&&(0,i.jsx)("div",{style:{fontSize:"13px",color:"var(--color-text-secondary)",marginTop:"6px"},children:j.priceUnit})]}),(0,i.jsx)("a",{href:j.buttonHref||"#form","data-service":"string"==typeof j.title?j.title:"Консультация юриста","data-direction":W,onClick:()=>{let e="string"==typeof j.title?j.title:"Консультация юриста";window.dispatchEvent(new CustomEvent("dejure:select_service",{detail:{service:e,direction:W}}))},className:"btn btn-primary",style:{padding:"14px 28px",fontSize:"15px",borderRadius:"0",whiteSpace:"nowrap",width:"100%",textAlign:"center"},children:j.buttonText||"Разобрать ситуацию"})]})]}),l&&l.length>1&&(0,i.jsx)("div",{style:{display:"flex",justifyContent:"center",gap:"12px",marginBottom:"40px",flexWrap:"wrap"},role:"tablist","aria-label":"Маршруты услуг",children:l.map(e=>{let t=e.id===(F?.id||l[0].id);return(0,i.jsx)("button",{type:"button",role:"tab","aria-selected":t,onClick:()=>S(e.id),style:{padding:"12px 24px",fontSize:"15px",fontWeight:600,borderRadius:"4px",cursor:"pointer",transition:"all 0.25s ease",border:t?"1px solid #10273B":"1px solid rgba(16, 39, 59, 0.2)",backgroundColor:t?"#10273B":"#FFFFFF",color:t?"#FFFFFF":"#10273B",boxShadow:t?"0 4px 12px rgba(16, 39, 59, 0.15)":"none"},children:e.label},e.id)})}),a&&a.length>0?(0,i.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"48px"},children:a.map((e,t)=>{let r=e.gridCols||(e.tiers.length>=5?5:4===e.tiers.length?4:3===e.tiers.length?3:2);return(0,i.jsxs)("div",{className:"pricing-group",children:[(0,i.jsxs)("div",{style:{marginBottom:"28px",textAlign:"center"},children:[(0,i.jsxs)("h3",{style:{fontSize:"clamp(20px, 2.5vw, 24px)",fontFamily:"var(--font-serif)",color:"var(--color-primary)",margin:"0 0 6px 0",fontWeight:600,display:"inline-flex",alignItems:"center",gap:"12px"},children:[(0,i.jsx)("span",{style:{width:"28px",height:"2px",backgroundColor:"var(--color-gold)"}}),(0,i.jsx)("span",{children:e.title}),(0,i.jsx)("span",{style:{width:"28px",height:"2px",backgroundColor:"var(--color-gold)"}})]}),e.subtitle&&(0,i.jsx)("p",{style:{fontSize:"14px",color:"var(--color-text-secondary)",margin:0},children:e.subtitle})]}),(0,i.jsx)("div",{className:`pricing-grid-container ${"2x2"===r?"pricing-grid-2x2":2===r?"pricing-grid-2":3===r?"pricing-grid-3":4===r?"pricing-grid-4":"pricing-grid-5"}`,children:e.tiers.map((e,i)=>P(e,`${t}-${i}`,r))})]},t)})}):(0,i.jsx)("div",{className:`pricing-grid-container ${"2x2"===z?"pricing-grid-2x2":2===z?"pricing-grid-2":3===z?"pricing-grid-3":4===z?"pricing-grid-4":T.length>=5?"pricing-grid-5":4===T.length?"pricing-grid-4":T.length>=3?"pricing-grid-3":"pricing-grid-2"}`,children:T.map((e,i)=>P(e,i,z))}),v&&(0,i.jsx)("div",{className:"pricing-mobile-note-row",children:v}),(g||h)&&(0,i.jsxs)("div",{style:{marginTop:"32px",display:"flex",flexDirection:"column",gap:"12px"},children:[g&&(0,i.jsx)("p",{style:{color:"var(--color-deep-blue)",fontSize:"14px",lineHeight:1.6,margin:0,textAlign:"center",opacity:.9},children:g}),h&&(0,i.jsxs)("p",{style:{color:"var(--color-deep-blue)",fontWeight:600,fontSize:"14px",lineHeight:1.5,margin:0,textAlign:"center"},children:["✓ ",h]})]}),s&&(0,i.jsxs)("div",{className:"pricing-cta-banner",style:{marginTop:"40px",background:"var(--color-white)",border:"1px solid var(--color-border)",borderTop:"3px solid var(--color-primary)",boxShadow:"0 10px 30px rgba(16, 39, 59, 0.12), 0 2px 8px rgba(16, 39, 59, 0.08)",padding:"38px 40px",borderRadius:"0",display:"flex",flexWrap:"wrap",gap:"24px",alignItems:"center",justifyContent:"space-between",maxWidth:"1152px",width:"100%",marginLeft:"auto",marginRight:"auto"},children:[(0,i.jsxs)("div",{style:{flex:"1 1 400px"},children:[(0,i.jsx)("h3",{style:{fontSize:"24px",marginBottom:"10px",fontFamily:"var(--font-serif)",color:"var(--color-deep-blue)",lineHeight:1.3,fontWeight:600},children:s}),(0,i.jsx)("p",{style:{fontSize:"16px",color:"var(--color-deep-blue)",opacity:.9,fontWeight:500,lineHeight:1.6,margin:0,textWrap:"balance"},children:d})]}),(0,i.jsx)("div",{style:{flexShrink:0},children:(0,i.jsx)("a",{href:x||"#form","data-service":m||"Расчёт комплексной защиты","data-direction":W,onClick:()=>{let e=m||"Расчёт комплексной защиты";window.dispatchEvent(new CustomEvent("dejure:select_service",{detail:{service:e,direction:W}}))},className:"btn btn-primary",style:{padding:"16px 36px",fontSize:"15px",borderRadius:"0",whiteSpace:"nowrap",display:"inline-block"},children:c})})]})]}),(0,i.jsx)("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}])},84618,e=>{"use strict";var i=e.i(90748);e.s(["default",0,function({cases:e,title:t="Результаты нашей работы",subtitle:r,showAllLink:n="/praktika",showAllText:o="Смотреть все дела",showDemoWarning:a=!1,resultLabel:l="Результат"}){let p=e.map(e=>({...e,category:e.category||(e.duration?`Срок: ${e.duration}`:"Практика"),problem:e.problem||e.description||"",action:e.action||(e.points?e.points.join(". "):""),result:e.result||"Задачи успешно выполнены по утвержденному регламенту"}));return(0,i.jsxs)("section",{className:"section bg-white",style:{padding:"clamp(48px, 6vw, 80px) 0"},children:[(0,i.jsxs)("div",{className:"container",children:[(0,i.jsxs)("div",{style:{marginBottom:"40px"},children:[(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"16px",marginBottom:"16px"},children:[(0,i.jsx)("div",{style:{width:"40px",height:"1px",backgroundColor:"var(--color-primary)"}}),(0,i.jsx)("span",{style:{textTransform:"uppercase",letterSpacing:"0.15em",fontSize:"12px",color:"var(--color-primary)"},children:"Практика"})]}),(0,i.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:"20px"},children:[(0,i.jsxs)("div",{style:{maxWidth:"820px",flex:"1 1 auto"},children:[(0,i.jsx)("h2",{style:{margin:0,fontSize:"clamp(28px, 4vw, 42px)",fontFamily:"var(--font-serif)",color:"var(--color-deep-blue)",lineHeight:1.25},children:t}),r&&(0,i.jsx)("p",{style:{margin:"8px 0 0",color:"var(--color-text-secondary)",fontSize:"15px",lineHeight:1.5},children:r})]}),n&&(0,i.jsx)("a",{href:n,className:"btn btn-outline",style:{padding:"12px 24px",height:"fit-content",whiteSpace:"nowrap",flexShrink:0,alignSelf:"flex-start"},children:o})]})]}),(0,i.jsx)("div",{className:"cases-grid",children:p.map((e,t)=>(0,i.jsxs)("div",{className:"case-card group",style:{padding:"36px 30px 30px 30px",border:"1px solid var(--color-border)",borderRadius:"0",display:"flex",flexDirection:"column",background:"var(--color-white)",boxShadow:"0 4px 10px rgba(0,0,0,0.12)",position:"relative",overflow:"hidden",height:"100%"},children:[(0,i.jsx)("div",{style:{position:"absolute",top:0,left:0,width:"4px",height:"0%",background:"var(--color-gold)",transition:"height 0.4s ease"},className:"case-accent-line"}),(0,i.jsxs)("div",{style:{paddingBottom:"20px",marginBottom:"20px",paddingTop:"0"},children:[(0,i.jsx)("span",{style:{display:"block",fontSize:"11px",textTransform:"uppercase",letterSpacing:"0.1em",color:"#D4AF37",marginBottom:"12px",fontWeight:600,lineHeight:1.45},children:e.category}),(0,i.jsx)("h3",{style:{margin:0,color:"var(--color-deep-blue)",fontSize:"19px",fontFamily:"var(--font-serif)",lineHeight:1.4,wordBreak:"break-word",overflowWrap:"break-word"},children:e.title})]}),(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"18px",flexGrow:1},children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{style:{display:"inline-block",background:"rgba(23, 50, 77, 0.08)",color:"var(--color-deep-blue)",padding:"3px 10px",fontSize:"11px",fontWeight:700,letterSpacing:"0.06em",borderRadius:"3px",marginBottom:"8px"},children:"ПРОБЛЕМА"}),(0,i.jsx)("p",{style:{fontSize:"14px",margin:0,lineHeight:1.6,color:"var(--color-text-main)"},children:e.problem})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{style:{display:"inline-block",background:"rgba(193, 160, 102, 0.16)",color:"#8C6F34",padding:"3px 10px",fontSize:"11px",fontWeight:700,letterSpacing:"0.06em",borderRadius:"3px",marginBottom:"8px"},children:"ЧТО СДЕЛАЛИ"}),(0,i.jsx)("p",{style:{fontSize:"14px",margin:0,lineHeight:1.6,color:"var(--color-text-main)"},children:e.action})]})]}),(0,i.jsxs)("div",{style:{marginTop:"24px",background:"rgba(193, 160, 102, 0.05)",padding:"18px",borderRadius:"0",border:"1px solid rgba(193, 160, 102, 0.2)",borderLeft:"4px solid var(--color-gold)"},children:[(0,i.jsx)("h4",{style:{fontSize:"12px",textTransform:"uppercase",letterSpacing:"0.05em",color:"var(--color-primary)",marginBottom:"6px",fontWeight:600},children:l}),(0,i.jsx)("p",{style:{fontSize:"14.5px",margin:0,fontWeight:500,color:"var(--color-deep-blue)",lineHeight:1.5},children:e.result})]})]},t))})]}),(0,i.jsx)("style",{dangerouslySetInnerHTML:{__html:`
        .cases-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        @media (max-width: 1024px) and (min-width: 768px) {
          .cases-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px !important;
          }
        }
        @media (max-width: 767px) {
          .cases-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .case-card {
            padding: 28px 20px 24px 20px !important;
          }
        }
        .case-card h3 span {
          word-break: break-word !important;
          overflow-wrap: break-word !important;
        }
        .case-card {
          transition: all 0.4s ease;
        }
        .case-card:hover {
          box-shadow: 0 8px 24px rgba(0,0,0,0.15);
          border-color: transparent;
          transform: translateY(-4px);
        }
        .case-card:hover .case-accent-line {
          height: 100%;
        }
      `}})]})}])}]);