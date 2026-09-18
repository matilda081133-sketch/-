(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,37671,e=>{"use strict";var t=e.i(43476);e.s(["default",0,function({title:e="Стоимость юридических услуг в Липецке",subtitle:i="Честные цены, закрепленные в договоре. Никаких скрытых платежей.",tiers:r,ctaTitle:o="Точную стоимость определим до начала работы",ctaSubtitle:a="Сначала изучим обстоятельства и документы, предложим подходящий формат помощи и согласуем стоимость. Она не изменится без согласования с вами.",ctaButtonText:n="Получить расчёт стоимости",ctaButtonLink:l="#form",disclaimer:p,guaranteeText:s,sectionStyle:d}){let c=(r||[{title:"Гражданам",subtitle:"Защита личных интересов",popular:!1,price:"от 2 000 ₽",features:[{name:"Юридическая консультация",value:"2 000 ₽"},{name:"Составление и подача иска",value:"от 10 000 ₽"},{name:"Ведение дела в суде Липецка",value:"от 15 000 ₽"},{name:"Апелляционная жалоба",value:"от 20 000 ₽"},{name:"Ознакомление с материалами",value:"4 000 ₽/том"}]},{title:"Бизнесу",subtitle:"Комплексное юридическое сопровождение",popular:!0,price:"от 5 000 ₽",features:[{name:"Консультация для бизнеса",value:"5 000 ₽"},{name:"Разработка договоров",value:"от 10 000 ₽"},{name:"Досудебная претензионная работа",value:"от 15 000 ₽"},{name:"Представительство в Арбитраже",value:"от 15 000 ₽"},{name:"Правовой аудит документов",value:"от 10 000 ₽"}]},{title:"Документы и консалтинг",subtitle:"Глубокая правовая аналитика",popular:!1,price:"от 10 000 ₽",features:[{name:"Письменная правовая оценка",value:"от 30 000 ₽"},{name:"Официальное заключение юриста",value:"от 35 000 ₽"},{name:"Участие в деловых переговорах",value:"15 000 ₽"},{name:"Защита интересов в госорганах",value:"15 000 ₽"},{name:"Разработка внутренних регламентов",value:"от 15 000 ₽"}]}]).map(e=>({...e,title:e.title||e.name||"",subtitle:e.subtitle||e.description||"",popular:e.popular??e.isPopular??!1,badgeText:e.badgeText||e.badge||"",price:e.price,features:(e.features||[]).map(e=>"string"==typeof e?{name:e,value:""}:{name:e.name||"",value:e.value||""}),buttonText:e.buttonText||e.ctaText||"Выбрать тариф",buttonHref:e.buttonHref||e.ctaHref||"#form"}));return(0,t.jsxs)("section",{id:"pricing",className:"section",style:{position:"relative",overflow:"hidden",padding:"80px 0",background:"var(--gradient-cream)",...d},children:[(0,t.jsxs)("div",{className:"container",style:{position:"relative",zIndex:1},children:[(0,t.jsxs)("div",{style:{textAlign:"center",marginBottom:"80px"},children:[(0,t.jsx)("h2",{style:{marginTop:0,fontSize:"clamp(32px, 4vw, 42px)",fontFamily:"var(--font-serif)",color:"var(--color-deep-blue)",marginBottom:"20px"},children:e}),(0,t.jsx)("p",{style:{fontSize:"16px",color:"var(--color-deep-blue)",opacity:.9,fontWeight:500,maxWidth:"700px",margin:"0 auto",lineHeight:1.6},children:i})]}),(0,t.jsx)("div",{className:`pricing-grid-container ${4===c.length?"pricing-grid-4":c.length>=3?"pricing-grid-3":"pricing-grid-2"}`,children:c.map((e,i)=>(0,t.jsxs)("div",{style:{background:e.popular?"linear-gradient(145deg, #0B1C2A 0%, #17375E 100%)":"var(--color-white)",color:e.popular?"var(--color-white)":"var(--color-deep-blue)",borderRadius:"0",padding:4===c.length?"32px 16px":"40px 30px",boxShadow:e.popular?"0 20px 40px rgba(16, 39, 59, 0.15)":"0 10px 30px rgba(0,0,0,0.05)",border:e.popular?"1px solid transparent":"1px solid rgba(23, 50, 77, 0.1)",position:"relative",transition:"transform 0.4s ease, box-shadow 0.4s ease",display:"flex",flexDirection:"column",height:"100%",width:"100%",minWidth:0,boxSizing:"border-box"},className:"pricing-tier-card",children:[e.popular&&!!e.badgeText&&(0,t.jsx)("div",{style:{position:"absolute",top:"0",left:"50%",transform:"translate(-50%, -50%)",background:"var(--color-white)",color:"var(--color-deep-blue)",padding:"6px 16px",borderRadius:"0",fontSize:"12px",fontWeight:"bold",textTransform:"uppercase",letterSpacing:"0.1em"},children:e.badgeText}),(0,t.jsxs)("div",{style:{minHeight:"185px",display:"flex",flexDirection:"column",justifyContent:"flex-start",marginBottom:"24px"},children:[(0,t.jsx)("h3",{style:{fontSize:4===c.length?"20px":"22px",margin:"0 0 8px 0",color:"inherit",textAlign:"center",lineHeight:1.3},children:e.title}),(0,t.jsx)("p",{style:{fontSize:"14px",opacity:.8,margin:"0 0 12px 0",textAlign:"center",lineHeight:1.5},children:e.subtitle}),e.price&&(0,t.jsx)("div",{style:{fontSize:"28px",fontFamily:"var(--font-serif)",fontWeight:"bold",marginTop:"auto",textAlign:"center"},children:e.price})]}),(0,t.jsx)("ul",{style:{listStyle:"none",padding:0,margin:"0 0 32px 0",flexGrow:1,display:"flex",flexDirection:"column",gap:"16px"},children:e.features.map((i,r)=>(0,t.jsxs)("li",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:"8px",fontSize:"13px",opacity:.9},children:[(0,t.jsxs)("div",{style:{display:"flex",gap:"8px",flex:"1 1 0%",minWidth:0},children:[(0,t.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:e.popular?"rgba(255,255,255,0.5)":"var(--color-primary)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{flexShrink:0,marginTop:"2px"},children:(0,t.jsx)("polyline",{points:"20 6 9 17 4 12"})}),(0,t.jsx)("span",{style:{lineHeight:1.35,wordBreak:"break-word"},children:i.name})]}),(0,t.jsx)("span",{style:{fontWeight:600,whiteSpace:"nowrap",color:e.popular?"var(--color-white)":"var(--color-deep-blue)"},children:i.value})]},r))}),(0,t.jsx)("a",{href:e.buttonHref||"#form",className:`btn ${e.popular?"btn-popular":"btn-regular"}`,style:{width:"100%",textAlign:"center",borderRadius:"0",fontSize:"15px",padding:"14px 16px",whiteSpace:"normal",textWrap:"balance",lineHeight:1.3,minHeight:"52px"},children:e.buttonText||"Узнать точную стоимость"})]},i))}),(p||s)&&(0,t.jsxs)("div",{style:{marginTop:"32px",display:"flex",flexDirection:"column",gap:"12px"},children:[p&&(0,t.jsx)("p",{style:{color:"var(--color-deep-blue)",fontSize:"14px",lineHeight:1.6,margin:0,textAlign:"center",opacity:.9},children:p}),s&&(0,t.jsxs)("p",{style:{color:"var(--color-deep-blue)",fontWeight:600,fontSize:"14px",lineHeight:1.5,margin:0,textAlign:"center"},children:["✓ ",s]})]}),o&&(0,t.jsxs)("div",{className:"pricing-cta-banner",style:{marginTop:"40px",background:"var(--color-white)",border:"1px solid var(--color-border)",borderTop:"4px solid var(--color-primary)",boxShadow:"0 4px 20px rgba(23, 50, 77, 0.05)",padding:"36px 32px",borderRadius:"0",display:"flex",flexWrap:"wrap",gap:"24px",alignItems:"center",justifyContent:"space-between"},children:[(0,t.jsxs)("div",{style:{flex:"1 1 400px"},children:[(0,t.jsx)("h3",{style:{fontSize:"22px",marginBottom:"10px",fontFamily:"var(--font-serif)",color:"var(--color-deep-blue)",lineHeight:1.3,fontWeight:700},children:o}),(0,t.jsx)("p",{style:{fontSize:"15px",color:"var(--color-text-secondary)",lineHeight:1.6,margin:0},children:a})]}),(0,t.jsx)("div",{style:{flexShrink:0},children:(0,t.jsx)("a",{href:l||"#form",className:"btn btn-primary",style:{padding:"14px 32px",fontSize:"15px",display:"inline-block"},children:n})})]})]}),(0,t.jsx)("style",{dangerouslySetInnerHTML:{__html:`
        .pricing-grid-container {
          display: grid;
          align-items: stretch;
          width: 100%;
        }
        .pricing-grid-3 {
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 30px;
        }
        .pricing-grid-4 {
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
        }
        .pricing-grid-2 {
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 30px;
          max-width: 850px;
          margin: 0 auto;
        }
        @media (max-width: 1024px) and (min-width: 768px) {
          .pricing-grid-3, .pricing-grid-4 {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 20px !important;
          }
        }
        @media (max-width: 767px) {
          .pricing-grid-container, .pricing-grid-3, .pricing-grid-4, .pricing-grid-2 {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
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
      `}})]})}])},74648,e=>{"use strict";var t=e.i(43476);e.s(["default",0,function({cases:e,title:i="Результаты нашей работы",subtitle:r,showAllLink:o="/praktika",showAllText:a="Смотреть все дела",showDemoWarning:n=!1,resultLabel:l="Результат"}){let p=e.map(e=>({...e,category:e.category||(e.duration?`Срок: ${e.duration}`:"Практика"),problem:e.problem||e.description||"",action:e.action||(e.points?e.points.join(". "):""),result:e.result}));return(0,t.jsxs)("section",{className:"section bg-white",style:{padding:"clamp(48px, 6vw, 80px) 0"},children:[(0,t.jsxs)("div",{className:"container",children:[(0,t.jsxs)("div",{style:{marginBottom:"40px"},children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"16px",marginBottom:"16px"},children:[(0,t.jsx)("div",{style:{width:"40px",height:"1px",backgroundColor:"var(--color-primary)"}}),(0,t.jsx)("span",{style:{textTransform:"uppercase",letterSpacing:"0.15em",fontSize:"12px",color:"var(--color-primary)"},children:"Практика"})]}),(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"20px"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h2",{style:{margin:0,fontSize:"clamp(28px, 4vw, 42px)",fontFamily:"var(--font-serif)",color:"var(--color-deep-blue)",lineHeight:1.25},children:i}),r&&(0,t.jsx)("p",{style:{margin:"8px 0 0",color:"var(--color-text-secondary)",fontSize:"15px",lineHeight:1.5},children:r})]}),o&&(0,t.jsx)("a",{href:o,className:"btn btn-outline",style:{padding:"12px 24px",height:"fit-content",whiteSpace:"nowrap"},children:a})]})]}),(0,t.jsx)("div",{className:"cases-grid",children:p.map((e,i)=>(0,t.jsxs)("div",{className:"case-card group",style:{padding:"36px 30px 30px 30px",border:"1px solid var(--color-border)",borderRadius:"0",display:"flex",flexDirection:"column",background:"var(--color-white)",boxShadow:"0 4px 10px rgba(0,0,0,0.12)",position:"relative",overflow:"hidden",height:"100%"},children:[(0,t.jsx)("div",{style:{position:"absolute",top:0,left:0,width:"4px",height:"0%",background:"var(--color-gold)",transition:"height 0.4s ease"},className:"case-accent-line"}),(0,t.jsxs)("div",{style:{paddingBottom:"20px",marginBottom:"20px",paddingTop:"0"},children:[(0,t.jsx)("span",{style:{display:"block",fontSize:"11px",textTransform:"uppercase",letterSpacing:"0.1em",color:"#D4AF37",marginBottom:"12px",fontWeight:600,lineHeight:1.45},children:e.category}),(0,t.jsx)("h3",{style:{margin:0,color:"var(--color-deep-blue)",fontSize:"19px",fontFamily:"var(--font-serif)",lineHeight:1.4,wordBreak:"break-word",overflowWrap:"break-word"},children:e.title})]}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"18px",flexGrow:1},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{style:{display:"inline-block",background:"rgba(23, 50, 77, 0.08)",color:"var(--color-deep-blue)",padding:"3px 10px",fontSize:"11px",fontWeight:700,letterSpacing:"0.06em",borderRadius:"3px",marginBottom:"8px"},children:"ПРОБЛЕМА"}),(0,t.jsx)("p",{style:{fontSize:"14px",margin:0,lineHeight:1.6,color:"var(--color-text-main)"},children:e.problem})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{style:{display:"inline-block",background:"rgba(193, 160, 102, 0.16)",color:"#8C6F34",padding:"3px 10px",fontSize:"11px",fontWeight:700,letterSpacing:"0.06em",borderRadius:"3px",marginBottom:"8px"},children:"ЧТО СДЕЛАЛИ"}),(0,t.jsx)("p",{style:{fontSize:"14px",margin:0,lineHeight:1.6,color:"var(--color-text-main)"},children:e.action})]})]}),(0,t.jsxs)("div",{style:{marginTop:"24px",background:"rgba(193, 160, 102, 0.05)",padding:"18px",borderRadius:"0",border:"1px solid rgba(193, 160, 102, 0.2)",borderLeft:"4px solid var(--color-gold)"},children:[(0,t.jsx)("h4",{style:{fontSize:"12px",textTransform:"uppercase",letterSpacing:"0.05em",color:"var(--color-primary)",marginBottom:"6px",fontWeight:600},children:l}),(0,t.jsx)("p",{style:{fontSize:"14.5px",margin:0,fontWeight:500,color:"var(--color-deep-blue)",lineHeight:1.5},children:e.result})]})]},i))})]}),(0,t.jsx)("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}])},13642,e=>{"use strict";var t=e.i(43476),i=e.i(71645),r=e.i(22016);e.s(["default",0,function(){let[e,o]=(0,i.useState)(null),a=t=>{o(e===t?null:t)};return(0,t.jsxs)("footer",{style:{backgroundColor:"var(--color-deep-blue)",color:"var(--color-white)",padding:"48px 0 24px",fontSize:"14px"},children:[(0,t.jsxs)("div",{className:"container",children:[(0,t.jsxs)("div",{className:"footer-grid",style:{borderBottom:"1px solid rgba(255,255,255,0.1)",paddingBottom:"36px",marginBottom:"28px"},children:[(0,t.jsxs)("div",{className:"footer-col-info",children:[(0,t.jsx)("div",{style:{marginBottom:"24px",marginTop:"-20px"},children:(0,t.jsx)(r.default,{href:"/",style:{display:"inline-block"},children:(0,t.jsx)("img",{src:"/images/logo_dark.png",alt:"Де-Юре",className:"footer-logo-img",width:389,height:404,style:{height:"130px",width:"auto",transform:"scale(1.4)",transformOrigin:"left center",filter:"brightness(0) invert(1)"}})})}),(0,t.jsxs)("p",{style:{color:"rgba(255,255,255,0.7)",fontSize:"14px",lineHeight:1.6,marginBottom:"16px",maxWidth:"300px"},children:["Юридическая помощь гражданам ",(0,t.jsx)("br",{}),"и бизнесу в Липецке."]}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"8px",fontSize:"13px"},children:[(0,t.jsx)("a",{href:"tel:+74742201525",style:{color:"var(--color-white)",fontWeight:"bold",textDecoration:"none",fontSize:"16px"},children:"+7 (4742) 20-15-25"}),(0,t.jsx)("span",{style:{color:"rgba(255,255,255,0.6)"},children:"г. Липецк, ул. Советская, д. 35, оф. 213"})]})]}),(0,t.jsxs)("div",{className:"footer-col-accordion",children:[(0,t.jsxs)("button",{className:"footer-accordion-btn",onClick:()=>a("b2c"),"aria-expanded":"b2c"===e,children:[(0,t.jsx)("span",{children:"Гражданам"}),(0,t.jsx)("svg",{className:`footer-chevron ${"b2c"===e?"open":""}`,width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,t.jsx)("polyline",{points:"6 9 12 15 18 9"})})]}),(0,t.jsx)("div",{className:`footer-link-list ${"b2c"===e?"show-mobile":""}`,children:(0,t.jsx)("ul",{style:{listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:"10px"},children:[{title:"Семейный юрист",href:"/grazhdanam/semejnyj-yurist/"},{title:"Наследственный юрист",href:"/grazhdanam/nasledstvennyj-yurist/"},{title:"Жилищный юрист",href:"/grazhdanam/zhilishchnyj-yurist/"},{title:"Юрист по недвижимости",href:"/grazhdanam/yurist-po-nedvizhimosti/"},{title:"Земельный юрист",href:"/grazhdanam/zemelnyj-yurist/"},{title:"Банкротство физических лиц",href:"/grazhdanam/bankrotstvo-fizicheskih-lic/"},{title:"Кредитный юрист",href:"/grazhdanam/kreditnyj-yurist/"},{title:"Взыскание долгов",href:"/grazhdanam/vzyskanie-dolgov/"},{title:"Юрист по исполнительному производству",href:"/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/"},{title:"Автоюрист",href:"/grazhdanam/avtoyurist/"},{title:"Трудовой юрист",href:"/grazhdanam/trudovoj-yurist/"},{title:"Адвокат по уголовным делам",href:"/grazhdanam/advokat-po-ugolovnym-delam/"},{title:"Военный юрист",href:"/grazhdanam/voennyj-yurist/"},{title:"Миграционный юрист",href:"/grazhdanam/migracionnyj-yurist/"}].map((e,i)=>(0,t.jsx)("li",{children:(0,t.jsx)(r.default,{href:e.href,className:"footer-link",children:e.title})},i))})})]}),(0,t.jsxs)("div",{className:"footer-col-accordion",children:[(0,t.jsxs)("button",{className:"footer-accordion-btn",onClick:()=>a("b2b"),"aria-expanded":"b2b"===e,children:[(0,t.jsx)("span",{children:"Бизнесу"}),(0,t.jsx)("svg",{className:`footer-chevron ${"b2b"===e?"open":""}`,width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,t.jsx)("polyline",{points:"6 9 12 15 18 9"})})]}),(0,t.jsx)("div",{className:`footer-link-list ${"b2b"===e?"show-mobile":""}`,children:(0,t.jsx)("ul",{style:{listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:"10px"},children:[{title:"Арбитражный юрист",href:"/biznesu/arbitrazhnyj-yurist/"},{title:"Взыскание задолженности с юридических лиц",href:"/biznesu/vzyskanie-zadolzhennosti-s-yuridicheskih-lic/"},{title:"Корпоративный юрист",href:"/biznesu/korporativnyj-yurist/"},{title:"Договорное право",href:"/biznesu/dogovornoe-pravo/"},{title:"Налоговый юрист для бизнеса",href:"/biznesu/nalogovyj-yurist-dlya-biznesa/"},{title:"Банкротство бизнеса",href:"/biznesu/bankrotstvo-biznesa/"},{title:"Трудовые споры с работниками",href:"/biznesu/trudovye-spory-s-rabotnikami/"},{title:"Юридическое сопровождение бизнеса",href:"/biznesu/yuridicheskoe-soprovozhdenie-biznesa/"},{title:"Юрист по недвижимости и строительству для бизнеса",href:"/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/"},{title:"Исполнительное производство для бизнеса",href:"/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/"},{title:"Миграционное сопровождение бизнеса",href:"/biznesu/migracionnoe-soprovozhdenie-biznesa/"},{title:"Разблокировка расчётного счёта по 115-ФЗ",href:"/biznesu/razblokirovka-raschetnogo-scheta-po-115-fz/"},{title:"Уголовно-правовая защита бизнеса",href:"/biznesu/ugolovno-pravovaya-zashchita-biznesa/"}].map((e,i)=>(0,t.jsx)("li",{children:(0,t.jsx)(r.default,{href:e.href,className:"footer-link",children:e.title})},i))})})]}),(0,t.jsxs)("div",{className:"footer-col-accordion",children:[(0,t.jsxs)("button",{className:"footer-accordion-btn",onClick:()=>a("company"),"aria-expanded":"company"===e,children:[(0,t.jsx)("span",{children:"Компания"}),(0,t.jsx)("svg",{className:`footer-chevron ${"company"===e?"open":""}`,width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,t.jsx)("polyline",{points:"6 9 12 15 18 9"})})]}),(0,t.jsx)("div",{className:`footer-link-list ${"company"===e?"show-mobile":""}`,children:(0,t.jsx)("ul",{style:{listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:"10px"},children:[{title:"О компании",href:"/o-kompanii"},{title:"Специалисты",href:"/specialisty"},{title:"Отзывы",href:"/otzyvy"},{title:"Стоимость",href:"/stoimost"},{title:"Практика",href:"/praktika"},{title:"Публикации",href:"/publikacii"},{title:"Контакты",href:"/kontakty"}].map((e,i)=>(0,t.jsx)("li",{children:(0,t.jsx)(r.default,{href:e.href,className:"footer-link",children:e.title})},i))})})]})]}),(0,t.jsxs)("div",{className:"footer-bottom-grid",children:[(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"6px"},children:[(0,t.jsx)("span",{children:"© 2026 ООО ЮК «Де-Юре»"}),(0,t.jsx)("span",{children:"ИНН: 4800009680 | ОГРН: 1234800008464"}),(0,t.jsx)("span",{children:"Фактический адрес: г. Липецк, ул. Советская, д. 35, оф. 213"}),(0,t.jsx)("span",{children:"Юридический адрес: 398902, Липецкая обл., г. Липецк, ул. Юношеская, влд. 46Б, пом. 1"})]}),(0,t.jsxs)("div",{className:"footer-legal-links",children:[(0,t.jsx)(r.default,{href:"/privacy",children:"Политика обработки персональных данных"}),(0,t.jsx)(r.default,{href:"/consent",children:"Согласие на обработку персональных данных"}),(0,t.jsx)(r.default,{href:"/cookies",children:"Политика использования cookie"}),(0,t.jsx)("button",{onClick:()=>{let e=window.__deJureOpenCookieSettings;"function"==typeof e&&e()},style:{background:"none",border:"none",padding:0,color:"inherit",fontSize:"inherit",cursor:"pointer",textAlign:"left",textDecoration:"underline",fontFamily:"inherit",opacity:.8},"aria-label":"Открыть настройки cookie",children:"Настройки cookie"}),(0,t.jsx)(r.default,{href:"/terms",children:"Правовой дисклеймер"}),(0,t.jsx)(r.default,{href:"/sitemap",children:"Карта сайта"})]})]})]}),(0,t.jsx)("style",{dangerouslySetInnerHTML:{__html:`
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          gap: 40px;
        }
        .footer-accordion-btn {
          background: none;
          border: none;
          color: var(--color-white);
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.05em;
          padding: 0;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          cursor: pointer;
        }
        .footer-chevron {
          display: none;
          transition: transform 0.3s ease;
        }
        .footer-bottom-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          color: rgba(255,255,255,0.5);
          font-size: 13px;
        }
        .footer-legal-links {
          display: flex;
          flex-direction: column;
          gap: 6px;
          align-items: flex-end;
          text-align: right;
        }
        .footer-legal-links a {
          color: rgba(255,255,255,0.5);
          text-decoration: underline;
          transition: color 0.2s;
        }
        .footer-legal-links a:hover {
          color: var(--color-white);
        }

        /* Мобильные стили подвала (0 - 767px) */
        @media (max-width: 767px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .footer-logo-img {
            height: 56px !important;
          }
          .footer-accordion-btn {
            padding: 14px 0 !important;
            margin-bottom: 0 !important;
            border-bottom: 1px solid rgba(255,255,255,0.1);
          }
          .footer-chevron {
            display: block !important;
          }
          .footer-chevron.open {
            transform: rotate(180deg);
          }
          .footer-link-list {
            display: none;
            padding-top: 14px;
            padding-bottom: 14px;
          }
          .footer-link-list.show-mobile {
            display: block !important;
          }
          .footer-bottom-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .footer-legal-links {
            align-items: flex-start !important;
            text-align: left !important;
          }
          .footer-link {
            min-height: 38px;
            display: flex;
            align-items: center;
          }
        }
      `}})]})}])},35812,e=>{"use strict";var t=e.i(43476);function i({items:e,marginTop:r}){return e&&0!==e.length?(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"14px",marginTop:r||"20px",marginBottom:"24px",width:"100%",maxWidth:"640px"},children:e.map((e,i)=>(0,t.jsx)("div",{style:{paddingLeft:"16px",borderLeft:"3px solid var(--color-gold)",fontSize:"15px",color:"var(--color-deep-blue)",lineHeight:1.45,fontWeight:500,whiteSpace:"pre-line"},children:"string"==typeof e?e:e.text},i))}):null}e.s(["default",0,function({breadcrumbs:e,superTitle:r,badge:o,title:a,subtitle:n,primaryCtaText:l,primaryButtonText:p,primaryCtaSubtext:s,primaryCtaLink:d,primaryButtonHref:c,primaryCtaAnalytics:x,secondaryCtaText:m,secondaryButtonText:h,secondaryCtaLink:g,secondaryButtonHref:f,urgentHint:b,trustItems:u=[],trustPosition:y="above-cta",imageUrl:v,imageName:j,imageSubtitle:w,trustMarginTop:k,imageMarginTop:z,imageObjectPosition:F,rightContent:S,afterTrustContent:N}){let B=m||h,T=g||f,W=!!(v||S);return(0,t.jsxs)("section",{className:"military-hero-section",style:{position:"relative",minHeight:"85vh",display:"flex",alignItems:"center",paddingTop:"clamp(120px, 9vw, 160px)",paddingBottom:"80px",background:"linear-gradient(145deg, var(--color-cream) 0%, rgba(247, 244, 237, 0.4) 100%)",overflow:"hidden"},children:[(0,t.jsx)("div",{style:{position:"absolute",top:"-10%",right:"-5%",width:"600px",height:"600px",background:"radial-gradient(circle, rgba(234, 241, 246, 0.8) 0%, transparent 70%)",borderRadius:"50%",zIndex:0}}),(0,t.jsxs)("div",{className:"container",style:{position:"relative",zIndex:1,paddingTop:"0px"},children:[e&&(0,t.jsx)("div",{style:{fontSize:"13px",color:"var(--color-text-secondary)",marginBottom:"32px"},children:e}),(0,t.jsxs)("div",{className:W?"grid grid-2 land-hero-grid":"",style:{display:W?"grid":"flex",flexDirection:W?"row":"column",gap:"40px",alignItems:"flex-start"},children:[(0,t.jsxs)("div",{style:{flex:"1 1 0%",paddingTop:"0px"},children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"16px",marginBottom:"12px",flexWrap:"wrap"},children:[(0,t.jsx)("div",{style:{width:"40px",height:"2px",backgroundColor:"#9B7E55",flexShrink:0}}),(0,t.jsx)("span",{className:"military-hero-supertitle",style:{textTransform:"uppercase",letterSpacing:"0.08em",fontSize:"clamp(11px, 2vw, 14px)",fontWeight:600,color:"var(--color-gold-text, #80633F)",overflowWrap:"anywhere"},children:r||o})]}),(0,t.jsx)("h1",{className:"military-hero-h1",style:{fontSize:"clamp(26px, 3.8vw, 50px)",color:"var(--color-deep-blue)",fontFamily:"var(--font-serif)",margin:"0 0 16px 0",lineHeight:1.15},children:a}),(0,t.jsx)("p",{className:"military-hero-subtitle",style:{fontSize:"16px",color:"var(--color-deep-blue)",opacity:.9,fontWeight:500,marginBottom:"16px",maxWidth:"750px",lineHeight:1.55},children:n}),"above-cta"===y&&u&&u.length>0&&(0,t.jsx)(i,{items:u,marginTop:k||"16px"}),N&&(0,t.jsx)("div",{style:{marginTop:"16px",marginBottom:"8px"},children:N}),(0,t.jsxs)("div",{className:"military-hero-cta",style:{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:"10px",marginTop:"20px",marginBottom:b?"16px":"24px"},children:[(0,t.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:"16px"},children:[(0,t.jsx)("a",{href:d||c||"#form",className:"btn btn-primary military-hero-primary-btn","data-analytics":x||"military_hero_consultation_click",children:l||p||"Получить консультацию"}),B&&T&&(0,t.jsx)("a",{href:T,className:"btn btn-outline",style:{padding:"15px 36px",fontSize:"15px"},children:B})]}),s&&(0,t.jsx)("div",{style:{fontSize:"14px",color:"var(--color-text-secondary)",marginTop:"2px"},children:s})]}),b&&(0,t.jsxs)("div",{style:{background:"rgba(200, 169, 126, 0.1)",borderLeft:"4px solid var(--color-gold)",padding:"14px 20px",marginBottom:"20px",fontSize:"14px",color:"var(--color-deep-blue)",lineHeight:1.5},children:[(0,t.jsx)("strong",{style:{display:"block",marginBottom:"4px"},children:"Важно:"}),b]}),"below-cta"===y&&u&&u.length>0&&(0,t.jsx)(i,{items:u,marginTop:k||"16px"})]}),W&&(0,t.jsx)("div",{className:"military-hero-right",style:{width:"100%",maxWidth:"440px",margin:"0 auto",flexShrink:0,display:"flex",flexDirection:"column",paddingTop:z||0,marginTop:0},children:S||(0,t.jsxs)("div",{className:"hero-photo-hover",style:{width:"100%",borderRadius:"0",overflow:"hidden",position:"relative",boxShadow:"0 4px 14px rgba(16, 39, 59, 0.12)",zIndex:1,display:"block",background:"transparent"},children:[v&&(0,t.jsx)("img",{src:v,alt:j||a?.toString()||"Специалист",width:440,height:460,fetchPriority:"high",decoding:"async",style:{width:"100%",height:"460px",objectFit:"cover",objectPosition:F||"center 20%",display:"block",filter:"brightness(1.05)",aspectRatio:"440/460"},className:"hero-photo-img"}),(j||w)&&(0,t.jsxs)("div",{style:{padding:"16px 20px",background:"rgba(255, 255, 255, 0.75)",backdropFilter:"blur(10px)",borderTop:"3px solid var(--color-gold)",borderLeft:"1px solid rgba(255, 255, 255, 0.9)",borderRight:"1px solid rgba(255, 255, 255, 0.9)",borderBottom:"1px solid rgba(255, 255, 255, 0.9)",boxShadow:"0 4px 14px rgba(16, 39, 59, 0.08)"},children:[j&&(0,t.jsx)("div",{style:{fontSize:"16px",fontWeight:700,color:"var(--color-deep-blue)",fontFamily:"var(--font-serif)",marginBottom:"2px",lineHeight:1.3},children:"Дмитрий Сергеевич Конопкин"===j||"Конопкин Дмитрий Сергеевич"===j?(0,t.jsxs)(t.Fragment,{children:["Конопкин ",(0,t.jsx)("br",{}),"Дмитрий Сергеевич"]}):"Марина Валерьевна Смольянинова"===j||"Смольянинова Марина Валерьевна"===j?(0,t.jsxs)(t.Fragment,{children:["Смольянинова ",(0,t.jsx)("br",{}),"Марина Валерьевна"]}):"Владимир Викторович Начешников"===j||"Начешников Владимир Викторович"===j?(0,t.jsxs)(t.Fragment,{children:["Начешников ",(0,t.jsx)("br",{}),"Владимир Викторович"]}):j}),w&&(0,t.jsx)("div",{style:{fontSize:"13px",color:"var(--color-text-secondary)",fontWeight:500,lineHeight:1.35},children:"string"==typeof w&&w.includes("куратор")?(0,t.jsxs)(t.Fragment,{children:[w.split("куратор")[0].trim().replace(/,$/,""),",",(0,t.jsx)("br",{}),"куратор",w.split("куратор")[1]]}):w})]})]})})]}),(0,t.jsx)("style",{dangerouslySetInnerHTML:{__html:`
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
        `}})]})]})}],35812)}]);